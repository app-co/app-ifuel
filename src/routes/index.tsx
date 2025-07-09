import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cadastro } from "@/pages/Cadastro";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { Header } from "./Header";

const S = createNativeStackNavigator();

export function StackRoutes() {
	return (
		<S.Navigator
			initialRouteName="Home"
			screenOptions={{
				header: (h) => <Header {...h} />,
			}}
		>
			<S.Screen
				name="Login"
				component={Login}
				options={{ headerShown: false }}
			/>
			<S.Screen name="Cadastro" component={Cadastro} />
			<S.Screen name="Home" component={Home} />
		</S.Navigator>
	);
}
