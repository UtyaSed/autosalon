import {sql} from "@vercel/postgres";
import {revalidatePath} from "next/cache";

export async function GET() {
    return Response.json((await sql`SELECT *
                                    FROM Employees;`).rows)
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
        return Response.json({success: true});
    } catch (e) {
        return Response.json({success: false});
    }
}

export async function PATCH(formData: FormData) {
    try {
        await sql`UPDATE Employees
                  SET Firstname = ${formData.get('firstname')},
                      Lastname  = ${formData.get('lastname')},
                      Position  = ${formData.get('position')},
                      Salary    = ${formData.get('salary')},
                      Password  = ${formData.get('password')}
                  WHERE id = ${formData.get('id')};
        `;
        return Response.json({success: true});
    } catch (e) {
        return Response.json({success: false});
    }
}

export async function DELETE(formData: FormData) {
    try {
        await sql`DELETE
                  FROM Employees
                  WHERE id = ${formData.get('id')};`;
        return Response.json({success: true});
    } catch (e){
        return Response.json({success: false});
    }
}
