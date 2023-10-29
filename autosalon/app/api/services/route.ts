import {sql} from "@vercel/postgres";
import {revalidatePath} from "next/cache";

export async function GET() {
    return Response.json((await sql`SELECT *
                                    FROM Services;`).rows);
}

export async function POST(formData) {
    try {
        await sql`INSERT INTO Services (Service_name, Description, Price)
                  VALUES (${formData.get('service_name')},
                          ${formData.get('description')},
                          ${formData.get('price')};
        `;
        return Response.json({success: true});
    } catch (e) {
        console.log(e)
        return Response.json({success: false});
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
        return Response.json({success: true});
    } catch (e) {
        return Response.json({success: false});
    }
}

export async function DELETE(formData) {
    try {
        await sql`DELETE
                  FROM Services
                  WHERE id = ${formData.get('id')};
        `;
        return Response.json({success: true});
    } catch (e) {
        return Response.json({success: false});
    }
}
