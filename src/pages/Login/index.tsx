import { useNavigation } from "@react-navigation/native";
import { LogoSvg } from "@/clientCustomers/ifuel/assets/public/logo";
import { LoginComponent } from "@/components/templates/LoginComponent";
import { useTheme } from "@/styles";
import * as S from "./styles";

export function Login() {
	const { colors } = useTheme();
	const _navigation = useNavigation();
	return (
		<S.container>
			<S.box css={{ alignSelf: "center", mt: 4, mb: 10 }}>
				<LogoSvg size={150} color="#fff" />
			</S.box>
			<LoginComponent />
		</S.container>
	);
}
