import { useNavigation } from "@react-navigation/native";
import { UserIcon } from "phosphor-react-native";
import { LogoSvg } from "@/clientCustomers/ifuel/assets/public/logo";
import { useAuth } from "@/contexts/auth";
import { useTheme } from "@/styles";
import * as S from "./styles";

export function Header(_props: any) {
	const { user } = useAuth();
	const { colors } = useTheme();
	const _navigation = useNavigation();

	return (
		<S.container>
			<S.hstack css={{ gap: 10, justifyContent: "space-between" }}>
				<S.hstack>
					<UserIcon weight="fill" color={colors.primario1} />
					<S.text>Olá, {user?.nome ?? "Visitante"}</S.text>
				</S.hstack>
				<LogoSvg size={70} color={colors.primario1} />
			</S.hstack>
		</S.container>
	);
}
