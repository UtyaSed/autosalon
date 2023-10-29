'use server';
import {sql} from "@vercel/postgres";
import {revalidatePath} from "next/cache";

export async function GET(id: number = -1) {
    return id === -1
        ? (await sql`SELECT *
                     FROM Customers;`).rows
        : (await sql`SELECT *
                     FROM Customers
                     WHERE id = ${id};`).rows;
}

export async function POST(formData: FormData) {
    try {
        await sql`INSERT INTO Customers (FirstName, LastName, Email, Phone)
                  VALUES (${formData.get("firstname")},
                          ${formData.get("lastname")},
                          ${formData.get("email")},
                          ${formData.get("phone")});
        `;
        revalidatePath("/customers");
        return true;
    } catch (e) {
        return false;
    }
}

export async function PATCH(formData: FormData) {
    try {
        await sql`UPDATE Customers
                  SET FirstName = ${formData.get("firstname")},
                      LastName  = ${formData.get("lastname")},
                      Email     = ${formData.get("email")},
                      Phone     = ${formData.get("phone")}
                  WHERE id = ${formData.get("id")};
        `;
        revalidatePath("/customers");
        return true;
    } catch (e) {
        return false;
    }
}

export async function DELETE(formData: FormData) {
    await sql`DELETE
              FROM Customers
              WHERE id = ${formData.get("id")};`;
    revalidatePath("/customers");
}
