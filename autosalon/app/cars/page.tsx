import CarForm from "./form";
import {DELETE, GET, PATCH, POST} from "./actions";

export const revalidate = 0;

export default async function Page() {
    const data = await GET();

    return <>
        <div className="container mx-auto mt-4">
            <table className="min-w-full">
                <thead>
                <tr>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Brand
                    </th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Model
                    </th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Year
                    </th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Price
                    </th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Actions
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                {data.map((car) => (
                    <tr key={car.id}>
                        <td className="px-6 py-4 whitespace-no-wrap">{car.brand}</td>
                        <td className="px-6 py-4 whitespace-no-wrap">{car.model}</td>
                        <td className="px-6 py-4 whitespace-no-wrap">{car.year}</td>
                        <td className="px-6 py-4 whitespace-no-wrap">{car.price}</td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <div className="flex space-x-2">
                                <form action={DELETE}>
                                    <input type="hidden" name="id" value={car.id}/>
                                    <input
                                        type="submit"
                                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-red-500 focus:ring-opacity-50"
                                        value="Delete"
                                    />
                                </form>
                                <CarForm action={PATCH} row={car} text={'Edit'}/>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <br/>
            <CarForm action={POST} text={'Add record'}/>
        </div>
    </>
}
