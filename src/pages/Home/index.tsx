import { Feather } from "@expo/vector-icons";
import { Dimensions, ScrollView } from "react-native";
import { Banners } from "@/components/Banners";
import { Buttom } from "@/components/forms/Buttom";
import { Input } from "@/components/forms/Input";
import { Postos } from "@/components/Postos";
import { useTheme } from "@/styles";
import * as S from "./styles";

const _md = Dimensions.get("window");

export function Home() {
	const { colors } = useTheme();

	return (
		<ScrollView>
			<S.container>
				<Banners />

				<Buttom title="MINHAS COMPRAS" type="fill2" />

				<Input
					type="B"
					placeholder="Buscar por nome do posto"
					iconCustom={
						<Feather
							name="search"
							size={25}
							color={colors.label2}
						/>
					}
				/>

				<S.hstack css={{ gap: 10 }}>
					<S.btSelect>
						<S.text css={{ fontWeight: "700" }}>
							POSTOS PRÓXIMOS
						</S.text>
					</S.btSelect>

					<S.btSelect>
						<S.text css={{ fontWeight: "700" }}>
							ESCOLHER NO MAPA
						</S.text>
					</S.btSelect>
				</S.hstack>

				<S.hstack css={{ gap: 10 }}>
					<S.btSelect>
						<S.text css={{ fontWeight: "700" }}>MENOR PREÇO</S.text>
					</S.btSelect>

					<S.btSelect>
						<S.text css={{ fontWeight: "700" }}>
							POR COMBUTÍVEL
						</S.text>
					</S.btSelect>
				</S.hstack>
				<S.line />

				<S.text css={{ title: "", textAlign: "center" }}>
					Postos Próximos
				</S.text>

				<S.box css={{ gap: 20 }}>
					<Postos />
					<Postos />
				</S.box>
			</S.container>
		</ScrollView>
	);
}
