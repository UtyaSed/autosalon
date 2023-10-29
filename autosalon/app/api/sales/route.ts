import {sql} from "@vercel/postgres";
import {revalidatePath} from "next/cache";

export async function GET() {
    return Response.json((await sql`SELECT *
                                    FROM Sales;`).rows);
}

export async function POST(formData: FormData) {
    try {
        await sql`INSERT INTO Sales (CarID, CustomerID, SaleDate, SalePrice)
                  VALUES (${formData.get('carid')},
                          ${formData.get('customerid')},
                          ${formData.get('saledate')},
                          ${formData.get('saleprice')});
        `;
        return Response.json({success: true});
    } catch (e) {
        console.log(e)
        return Response.json({success: false});
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
        return Response.json({success: true});
    } catch (e) {
        return Response.json({success: false});
    }
}

export async function DELETE(formData: FormData) {
    try {
        await sql`DELETE
                  FROM Sales
                  WHERE Id = ${formData.get('id')};
        `;
        return Response.json({success: true});
    } catch (e) {
        return Response.json({success: false});
    }
}
