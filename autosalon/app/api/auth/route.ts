import {sql} from "@vercel/postgres";
import {NextResponse} from "next/server";
import jwt from "jsonwebtoken";
import {cookies} from "next/headers";

export async function POST(formData) {
    try {
        const login = formData.get('login');
        const password = formData.get('password');

        const result = await sql`SELECT id, password
                                 FROM Employees
                                 WHERE lastname = ${login};`;
        if (result.rows.length === 0) {
            throw new Error("Undefined user");
        }

        const user = result.rows[0];
        if (!(password === user.password)) {
            throw new Error("Incorrect password");
        }

        const token = jwt.sign({userId: user.id}, process.env.SECRET_KEY, {expiresIn: '1h'});

        cookies().set('Authorization', 'Bearer ' + token)

        return NextResponse.json({token});
    } catch (e) {
        return NextResponse.json({error: e})
    }
}
