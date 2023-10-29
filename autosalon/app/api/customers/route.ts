import {sql} from "@vercel/postgres";
import {revalidatePath} from "next/cache";

export async function GET() {
    return Response.json((await sql`SELECT *
                                    FROM Customers;`).rows)
}

export async function POST(formData: FormData) {
    try {
        await sql`INSERT INTO Customers (FirstName, LastName, Email, Phone)
                  VALUES (${formData.get("firstname")},
                          ${formData.get("lastname")},
                          ${formData.get("email")},
                          ${formData.get("phone")});
        `;
        return Response.json({success: true});
    } catch (e) {
        return Response.json({success: false});
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
        return Response.json({success: true});
    } catch (e) {
        return Response.json({success: false});
    }
}

export async function DELETE(formData: FormData) {
    try {
        await sql`DELETE
                  FROM Customers
                  WHERE id = ${formData.get("id")};`;
        return Response.json({success: true});
    } catch (e) {
        return Response.json({success: false});
    }
}
