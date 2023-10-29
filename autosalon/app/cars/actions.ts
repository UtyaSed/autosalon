'use server'

import {sql} from "@vercel/postgres";
import {revalidatePath} from "next/cache";

export async function GET(id: number = -1) {
    return id === -1 ? (await sql`SELECT *
                                  FROM Cars;`).rows : (await sql`SELECT *
                                                                 FROM Cars
                                                                 WHERE id = ${id};`).rows
}

export async function POST(formData: FormData) {
    try {
        await sql`INSERT INTO Cars (Brand, Model, Year, Price)
                  VALUES (${formData.get('brand')},
                          ${formData.get('model')},
                          ${formData.get('year')},
                          ${formData.get('price')});
        `
        revalidatePath('/cars');
        return true;
    } catch (e) {
        return false;
    }
}

export async function PATCH(formData: FormData) {
    try {
        await sql`UPDATE Cars
                  SET Brand = ${formData.get('brand')},
                      Model = ${formData.get('model')},
                      Year = ${formData.get('year')},
                      Price = ${formData.get('price')}
                  WHERE id = ${formData.get('id')};
        `
        revalidatePath('/cars');
        return true;
    } catch (e) {
        return false;
    }
}

export async function DELETE(formData: FormData) {
    await sql`DELETE
              FROM Cars
              WHERE id = ${formData.get('id')};`
    revalidatePath('/cars');
}
