import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@/contexts/auth";
import { useTheme } from "@/styles";
import * as S from "./styles";

export function Banners() {
	const { user } = useAuth();
	const { colors } = useTheme();
	const _navigation = useNavigation();

	return (
		<S.container>
			<S.text>Banners</S.text>
		</S.container>
	);
}
