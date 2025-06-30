import { useInfiniteQuery, useQuery } from "react-query";
import { useFetch } from "./fetchs";

type T = "GET" | "POST" | "PUT" | "DELETE";

interface IParams {
	url: string;
	item?: any;
	key: string;
}

export function useQuerys(params: IParams) {
	const par = {
		...params,
		method: "GET" as T,
	};
	return useQuery({
		queryKey: [par.key, par.item],
		queryFn: () => useFetch(par),
	});
}

export function usePaginated(par: IParams) {
	const params = {
		...par,
		method: "GET" as T,
		item: {
			...par.item,
			pageNumber: 0,
			pageSize: 10,
		},
	};

	return useInfiniteQuery({
		queryKey: [par.key, par.item],
		queryFn: ({ pageParam }) =>
			useFetch({
				...params,
				item: {
					...params.item,
					pageNumber: pageParam || 0,
				},
			}),
		getNextPageParam: (lastPage) => {
			if (
				lastPage.pagination?.pageNumber ===
				lastPage.pagination?.totalPages - 1
			) {
				return undefined;
			}

			return lastPage.pagination.pageNumber + 1;
		},
	});
}
