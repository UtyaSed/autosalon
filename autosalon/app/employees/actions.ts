'use server';
import {sql} from "@vercel/postgres";
import {revalidatePath} from "next/cache";

export async function GET(id: number = -1) {
    return id === -1
        ? (await sql`SELECT *
                     FROM Employees;`).rows
        : (await sql`SELECT *
                     FROM Employees
                     WHERE id = ${id};`).rows;
}

export async function POST(formData: FormData) {
    try {
        await sql`INSERT INTO Employees (Firstname, Lastname, Position, Salary, Password)
                  VALUES (${formData.get('firstname')},
                          ${formData.get('lastname')},
                          ${formData.get('position')},
                          ${formData.get('salary')},
                          ${formData.get('password')});
        `;
        revalidatePath('/employees');
        return true;
    } catch (e) {
        return false;
    }
}

export async function PATCH(formData: FormData) {
    try {
        await sql`UPDATE Employees
                  SET Firstname = ${formData.get('firstname')},
                      Lastname  = ${formData.get('lastname')},
                      Position  = ${formData.get('position')},
                      Salary    = ${formData.get('salary')},
                      Password    = ${formData.get('password')}
                  WHERE id = ${formData.get('id')};
        `;
        revalidatePath('/employees');
        return true;
    } catch (e) {
        return false;
    }
}

export async function DELETE(formData: FormData) {
    await sql`DELETE
              FROM Employees
              WHERE id = ${formData.get('id')};`;
    revalidatePath('/employees');
}
