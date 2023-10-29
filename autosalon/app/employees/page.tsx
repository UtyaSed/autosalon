import {sql} from "@vercel/postgres";
import {DELETE, PATCH, POST} from './actions';
import EmployeeForm from "./form";

export default async function Page() {
    // SQL-запит для вибору всіх співробітників
    const employeesData = (await sql`SELECT *
                                     FROM Employees;`).rows;

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
                        Position
                    </th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Salary
                    </th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Password
                    </th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Actions
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                {employeesData.map((employee) => (
                    <tr key={employee.employeeid}>
                        <td className="px-6 py-4 whitespace-no-wrap">{employee.firstname}</td>
                        <td className="px-6 py-4 whitespace-no-wrap">{employee.lastname}</td>
                        <td className="px-6 py-4 whitespace-no-wrap">{employee.position}</td>
                        <td className="px-6 py-4 whitespace-no-wrap">{employee.salary}</td>
                        <td className="px-6 py-4 whitespace-no-wrap">{'*'.repeat(employee.password?.length || 0)}</td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <div className="flex space-x-2">
                                <form action={DELETE}>
                                    <input type="hidden" name="id" value={employee.id}/>
                                    <input
                                        type="submit"
                                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-red-500 focus:ring-opacity-50"
                                        value="Delete"
                                    />
                                </form>
                                <EmployeeForm action={PATCH} row={employee} text={'Edit'}/>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <br/>
            <EmployeeForm action={POST} text={'Add record'}/>
        </div>
    );
}
