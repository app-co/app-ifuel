import { useNavigation } from "@react-navigation/native";
import { MapPinIcon } from "phosphor-react-native";
import { Dimensions } from "react-native";
import { useAuth } from "@/contexts/auth";
import { useTheme } from "@/styles";
import * as S from "./styles";

const md = Dimensions.get("window");

export function Postos() {
	const { user } = useAuth();
	const { colors } = useTheme();
	const _navigation = useNavigation();

	return (
		<S.container>
			<S.header>
				<S.box css={{ bg: colors.primario2, size: 15, br: 10 }}>
					<S.img />
					<S.bandeira />
				</S.box>
				<S.box css={{ flex: 1 }}>
					<S.text>Jargim Agela</S.text>
					<S.text
						css={{
							sub: "",
							fontWeight: "700",
						}}
					>
						Posto Himala
					</S.text>
				</S.box>

				<S.hstack
					css={{ px: 2, py: 1, br: 8, gap: 6, bg: colors.focus2 }}
				>
					<MapPinIcon color={colors.label1} />
					<S.text css={{ color: colors.label1 }}>4.0 km</S.text>
				</S.hstack>
			</S.header>

			<S.box
				css={{
					bg: colors.primario2,
					gap: 2,
					size: 20,
					br: 6,
					center: "",
				}}
			>
				<S.text
					css={{
						textDecorationLine: "line-through",
						fontSize: md.width * 0.03,
						color: colors.label2,
					}}
				>
					R$ 5,89
				</S.text>
				<S.text css={{ fontSize: md.width * 0.04, fontWeight: "700" }}>
					R$ 5,49
				</S.text>
				<S.text css={{ color: colors.focus2 }}>Gasolina</S.text>
			</S.box>
		</S.container>
	);
}
