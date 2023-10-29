import {sql} from "@vercel/postgres";
import {revalidatePath} from "next/cache";

export async function GET() {
    return Response.json((await sql`SELECT *
                                    FROM Cars;`).rows)
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
        return Response.json({success: true});
    } catch (e) {
        return Response.json({success: true});
    }
}

export async function PATCH(formData: FormData) {
    try {
        await sql`UPDATE Cars
                  SET Brand = ${formData.get('brand')},
                      Model = ${formData.get('model')},
                      Year  = ${formData.get('year')},
                      Price = ${formData.get('price')}
                  WHERE id = ${formData.get('id')};
        `
        return Response.json({success: true});
    } catch (e) {
        return Response.json({success: false});
    }
}

export async function DELETE(formData: FormData) {
    try {
        await sql`DELETE
                  FROM Cars
                  WHERE id = ${formData.get('id')};`
        return Response.json({success: true});
    } catch (e) {
        return Response.json({success: false});
    }
}
