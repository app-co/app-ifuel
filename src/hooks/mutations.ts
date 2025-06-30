import { AppError } from "@/api/app-error";
import { useMutation, useQueryClient } from "react-query";
import { useFetch } from "./fetchs";

interface I {
	key?: string;
}
export function useMutate({ key }: I) {
	const client = useQueryClient();
	return useMutation({
		mutationFn: useFetch,
		onError: (h) => {
			if (h instanceof AppError) {
				return;
			}
		},
		onSuccess: () => {
			if (key) {
				client.invalidateQueries(key);
			}
		},
	});
}
