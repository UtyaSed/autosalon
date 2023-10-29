'use server';
import {sql} from "@vercel/postgres";
import {revalidatePath} from "next/cache";

export async function GET(id = -1) {
    return id === -1
        ? (await sql`SELECT *
                     FROM Services;`).rows
        : (await sql`SELECT *
                     FROM Services
                     WHERE id = ${id};`).rows;
}

export async function POST(formData) {
    try {
        await sql`INSERT INTO Services (Service_name, Description, Price)
                  VALUES (${formData.get('service_name')},
                          ${formData.get('description')},
                          ${formData.get('price')};
        `;
        revalidatePath('/services');
        return true;
    } catch (e) {
        console.log(e)
        return false;
    }
}

export async function PATCH(formData) {
    try {
        await sql`UPDATE Services
                  SET Service_Name = ${formData.get('service_name')},
                      Description  = ${formData.get('description')},
                      Price        = ${formData.get('price')}
                  WHERE id = ${formData.get('id')};
        `;
        revalidatePath('/services');
        return true;
    } catch (e) {
        return false;
    }
}

export async function DELETE(formData) {
    await sql`DELETE
              FROM Services
              WHERE id = ${formData.get('id')};
    `;
    revalidatePath('/services');
}
