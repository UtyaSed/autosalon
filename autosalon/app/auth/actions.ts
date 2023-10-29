'use server';
import {sql} from "@vercel/postgres";
import {cookies} from "next/headers";
import {NextResponse} from "next/server";
import jwt from "jsonwebtoken";

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

        cookies().set('Authorization', 'Bearer ' + token);
    } catch (e) {
        console.log(e);
        return e.toString();
    }
}
