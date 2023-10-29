import ServiceForm from "./form";
import { DELETE, GET, PATCH, POST } from "./actions";

export const revalidate = 0;

export default async function Page() {
    const data = await GET();

    return (
        <div className="container mx-auto mt-4">
            <table className="min-w-full">
                <thead>
                <tr>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Service Name
                    </th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Description
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
                {data.map((service) => (
                    <tr key={service.id}>
                        <td className="px-6 py-4 whitespace-no-wrap">{service.service_name}</td>
                        <td className="px-6 py-4 whitespace-no-wrap">{service.description}</td>
                        <td className="px-6 py-4 whitespace-no-wrap">{service.price}</td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <div className="flex space-x-2">
                                <form action={DELETE}>
                                    <input type="hidden" name="id" value={service.id} />
                                    <input
                                        type="submit"
                                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-red-500 focus:ring-opacity-50"
                                        value="Delete"
                                    />
                                </form>
                                <ServiceForm action={PATCH} row={service} text={'Edit'} />
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <br />
            <ServiceForm action={POST} text={'Add record'} />
        </div>
    );
}
