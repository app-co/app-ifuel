interface IParams {
	method?: "GET" | "POST" | "PUT" | "DELETE";
	url: string;
	item?: any;
}

export async function useFetch({ item, url, method = "GET" }: IParams) {
	switch (method) {
		case "GET": {
			const { data } = await api.get(url, {
				params: item,
			});
			return data;
		}
		case "POST": {
			const { data } = await api.post(url, item);
			return data;
		}
		case "PUT": {
			const { data } = await api.put(url, item);
			return data;
		}
		case "DELETE": {
			const { data } = await api.delete(url, {
				params: item,
			});
			return data;
		}

		default:
			break;
	}
}
