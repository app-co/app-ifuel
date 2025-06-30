import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "react-query";
import { tema } from "@/clientCustomers/config/styles";
import { StackRoutes } from "@/routes";
import { ThemeProvider } from "@/styles";

const client = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
		},
	},
});

export function Providers() {
	return (
		<NavigationContainer>
			<ThemeProvider theme={tema}>
				<QueryClientProvider client={client}>
					<StackRoutes />
				</QueryClientProvider>
			</ThemeProvider>
		</NavigationContainer>
	);
}
