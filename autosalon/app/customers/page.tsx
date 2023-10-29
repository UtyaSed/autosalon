import CustomerForm from "./form";
import {DELETE, GET, PATCH, POST} from "./actions";

export const revalidate = 0;

export default async function Page() {
    const data = await GET();

    return (
        <div className="container mx-auto mt-4">
            <table className="min-w-full">
                <thead>
                <tr>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        First Name
                    </th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Last Name
                    </th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Email
                    </th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Phone
                    </th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Actions
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                {data.map((customer) => (
                    <tr key={customer.id}>
                        <td className="px-6 py-4 whitespace-no-wrap">{customer.firstname}</td>
                        <td className="px-6 py-4 whitespace-no-wrap">{customer.lastname}</td>
                        <td className="px-6 py-4 whitespace-no-wrap">{customer.email}</td>
                        <td className="px-6 py-4 whitespace-no-wrap">{customer.phone}</td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <div className="flex space-x-2">
                                <form action={DELETE}>
                                    <input type="hidden" name="id" value={customer.id}/>
                                    <button
                                        type="submit"
                                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-red-500 focus:ring-opacity-50"
                                    >
                                        Delete
                                    </button>
                                </form>
                                <CustomerForm action={PATCH} row={customer} text={'Edit'}/>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <br/>
            <CustomerForm action={POST} text={'Add record'}/>
        </div>
    );
}
