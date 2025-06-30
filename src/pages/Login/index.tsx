import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@/styles";
import * as S from "./styles";

export function Login() {
	const { colors } = useTheme();
	const _navigation = useNavigation();
	return (
		<S.container>
			<S.text>Login</S.text>
		</S.container>
	);
}
