'use client';
import {useState} from "react";

export default function EmployeeForm({action, row, text}) {
    const [formData, setFormData] = useState({
        firstname: row ? row.firstname : '',
        lastname: row ? row.lastname : '',
        position: row ? row.position : '',
        salary: row ? row.salary : '',
        password: row ? row.password : '',
        id: row ? row.id : '',
    });

    const [visible, setVisible] = useState(false);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    return (
        <>
            <div
                className={`${visible ? '' : 'hidden'} fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-md`}
            >
                <div className="container mx-auto mt-4 border-blue-700 border-4 rounded-lg">
                    <form action={async (formData: FormData) => {
                        setVisible(false)
                        await action(formData)
                    }} className="bg-white dark:bg-gray-900 p-4 shadow-md">
                        <button
                            type="button"
                            className="float-right mb-4 top-2 right-2 bg-red-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            onClick={() => setVisible(false)}
                        >
                            X
                        </button>
                        <br/>
                        <div className="mb-4">
                            <label
                                htmlFor="firstname"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                            >
                                First Name
                            </label>
                            <input
                                type="hidden"
                                id="id"
                                name="id"
                                value={formData.id}
                            />
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleInputChange}
                                className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="lastname"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleInputChange}
                                className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="position"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                            >
                                Position
                            </label>
                            <input
                                type="text"
                                id="position"
                                name="position"
                                value={formData.position}
                                onChange={handleInputChange}
                                className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="salary"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                            >
                                Salary
                            </label>
                            <input
                                type="number"
                                id="salary"
                                name="salary"
                                value={formData.salary}
                                onChange={handleInputChange}
                                className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-300"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <button
                onClick={() => setVisible(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            >
                {text}
            </button>
        </>
    );
}
