'use server';
import {sql} from "@vercel/postgres";
import {revalidatePath} from "next/cache";

export async function GET(id: number = -1) {
    return id === -1
        ? (await sql`SELECT *
                     FROM Sales;`).rows
        : (await sql`SELECT *
                     FROM Sales
                     WHERE id = ${id};`).rows;
}

export async function POST(formData: FormData) {
    try {
        await sql`INSERT INTO Sales (CarID, CustomerID, SaleDate, SalePrice)
                  VALUES (${formData.get('carid')},
                          ${formData.get('customerid')},
                          ${formData.get('saledate')},
                          ${formData.get('saleprice')});
        `;
        revalidatePath('/sales');
        return true;
    } catch (e) {
        console.log(e)
        return false;
    }
}

export async function PATCH(formData: FormData) {
    try {
        await sql`UPDATE Sales
                  SET CarID      = ${formData.get('carid')},
                      CustomerID = ${formData.get('customerid')},
                      SaleDate   = ${formData.get('saledate')},
                      SalePrice  = ${formData.get('saleprice')}
                  WHERE Id = ${formData.get('id')};
        `;
        revalidatePath('/sales');
        return true;
    } catch (e) {
        return false;
    }
}

export async function DELETE(formData: FormData) {
    await sql`DELETE
              FROM Sales
              WHERE Id = ${formData.get('id')};
    `;
    revalidatePath('/sales');
}
