"use client"

import queryString from "query-string";

import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { Color, Size } from "@/types";
import { Button } from "@/components/ui/button";

interface FilterProps {
    data: (Size | Color)[];
    valueKey: string;
    name: string
}

const Filter: React.FC<FilterProps> = ({
    data,
    valueKey,
    name
}) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedValue = searchParams.get(valueKey);

    const onClick = (id: string) => {
        const current = queryString.parse(searchParams.toString());
        const query = { // when the user click onClick in filter we r gonna look wut is the current url and then we're gonna add new filter to that url   
            ...current,
            [valueKey]: id 
        };

        if (current[valueKey] === id) {
            query[valueKey] = null; // when user click in the active filter it will remove the curr filter
        }

        const url = queryString.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true }) // second argument

        router.push(url)
    }

    return (
        <div className="mb-8">
            <h3 className="text-lg font-semibold">
                {name}
            </h3>
            <hr className="my-4" />
            <div className="flex flex-wrap gap-2">
                {data.map((filter) => (
                    <div key={filter.id} className="flex items-center">
                        <Button
                            className={cn(
                                "hover:scale-105 hover:bg-stone-950 dark:hover:scale-105 dark:outline-1 transition dark:hover:duration-500 flex items-center rounded-md bg-black dark:bg-white px-4 py-2 drop-shadow-md",
                                selectedValue === filter.id && "dark:bg-black bg-white dark:text-white text-black"
                            )}
                            onClick={() => onClick(filter.id)}
                        >
                            {filter.name}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Filter;