'use client';
import {POST} from "./actions";

export const revalidate = 0;

export default async function Page() {
    return <>
        <form action={async (formData: FormData) => {
            const res = await POST(formData)
            // @ts-ignore
            if (res) {
                alert(res)
            }
            window.location = '/'
        }}
              className="w-full grid justify-items-stretch"
        >
            <h1 className="justify-self-center">Login</h1>
            <input
                className="justify-self-center mt-1 p-2 block w-50 rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-300"
                type="text"
                name="login"/>
            <input
                className="justify-self-center mt-1 p-2 block w-50 rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-300"
                type="password"
                name="password"/>
            <button type="justify-self-center submit">Submit</button>
        </form>
    </>
}
