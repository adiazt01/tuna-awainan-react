import { LayoutAquarium } from '@/components/aquarium/LayoutAquarium'
import { supabase } from '@/lib/supabase'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/aquarium/letter/')({
  component: LetterComponent,
})

const fetchAqua = async (nameQueryToSearch: string | null ) =>{
    const { data, error } = await supabase
    .from("especimens")
    .select("*")
    .like("name", `%${nameQueryToSearch}%`)

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

function LetterComponent() {
    const querySearch = new URLSearchParams(window.location.search)
    const nameQueryToSearch = querySearch.get('selected')

    const { data: aquarium, error, isLoading } = useQuery({ queryKey: ['especimens', nameQueryToSearch], queryFn: () => fetchAqua(nameQueryToSearch) });
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (<div>
        <LayoutAquarium></LayoutAquarium>
        {
            aquarium && aquarium.map((item) => (
                <Link to={`/aquarium/letter/${item.id}`} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ml-8 mt-10" params={{ letterid: item.id }}>
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={item.image} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {item.name}
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {item.name_scientific}
                        </p>
                        <span className="text-xs">Bolivar, Venezuela</span>
                    </div>
                </Link>              

        ))}


    </div>)
}
