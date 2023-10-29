'use client';
import {useState} from "react";

function formatDate(inputDateString) {
    const date = new Date(inputDateString);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
}

export default function SalesForm({action, row, text}: any) {
    const [formData, setFormData] = useState({
        carid: row ? row.carid : '',
        customerid: row ? row.customerid : '',
        saledate: row ? row.saledate : '',
        saleprice: row ? row.saleprice : '',
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
                                htmlFor="carid"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                            >
                                Car ID
                            </label>
                            <input
                                type="hidden"
                                id="id"
                                name="id"
                                value={formData.id}
                            />
                            <input
                                type="number"
                                id="carid"
                                name="carid"
                                value={formData.carid}
                                onChange={handleInputChange}
                                className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="customerid"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                            >
                                Customer ID
                            </label>
                            <input
                                type="number"
                                id="customerid"
                                name="customerid"
                                value={formData.customerid}
                                onChange={handleInputChange}
                                className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="saledate"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                            >
                                Sale Date
                            </label>
                            <input
                                type="date"
                                id="saledate"
                                name="saledate"
                                value={formatDate(formData.saledate)}
                                onChange={handleInputChange}
                                className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="saleprice"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                            >
                                Sale Price
                            </label>
                            <input
                                type="number"
                                id="saleprice"
                                name="saleprice"
                                value={formData.saleprice}
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
