'use client';
import {useState} from "react";

export default function CarForm({action, row, text}: any) {
    const [formData, setFormData] = useState({
        brand: row ? row.brand : '',
        model: row ? row.model : '',
        year: row ? row.year : '',
        price: row ? row.price : '',
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
                className={`${visible ? '' : 'hidden'} fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-md`}>
                <div className="container mx-auto mt-4 border-blue-700 border-4 rounded-lg">
                    <form action={async (formData: FormData) => {
                        setVisible(false)
                        await action(formData)
                    }} className="bg-white dark:bg-gray-900 p-4 shadow-md">
                        <button
                            type={'button'}
                            className="float-right mb-4 top-2 right-2 bg-red-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            onClick={() => setVisible(false)}>X
                        </button>
                        <br/>
                        <div className="mb-4">
                            <label htmlFor="brand"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                                Brand
                            </label>
                            <input
                                type="hidden"
                                id="id"
                                name="id"
                                value={formData.id}
                            />
                            <input
                                type="text"
                                id="brand"
                                name="brand"
                                value={formData.brand}
                                onChange={handleInputChange}
                                className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="model"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                                Model
                            </label>
                            <input
                                type="text"
                                id="model"
                                name="model"
                                value={formData.model}
                                onChange={handleInputChange}
                                className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="year"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                                Year
                            </label>
                            <input
                                type="number"
                                id="year"
                                name="year"
                                value={formData.year}
                                onChange={handleInputChange}
                                className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="price"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                                Price
                            </label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={formData.price}
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
            <button onClick={() => setVisible(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            >{text}</button>
        </>
    );
}
