import { Feather } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { Banners } from "@/components/Banners";
import { Buttom } from "@/components/forms/Buttom";
import { Input } from "@/components/forms/Input";
import { Postos } from "@/components/Postos";
import { useTheme } from "@/styles";
import * as S from "./styles";

const md = Dimensions.get("window");

export function Home() {
	const { colors } = useTheme();

	return (
		<S.container>
			<Banners />

			<S.hstack css={{ gap: 10 }}>
				<S.btSelect>
					<S.text>POSTOS PRÓXIMOS</S.text>
				</S.btSelect>

				<S.btSelect>
					<S.text>POSTOS PRÓXIMOS</S.text>
				</S.btSelect>
			</S.hstack>
			<S.line />
			<Input
				type="B"
				placeholder="Buscar por nome do posto"
				iconCustom={
					<Feather name="search" size={25} color={colors.label2} />
				}
			/>
			<S.hstack css={{ gap: 10 }}>
				<S.btFilter selected>
					<S.text selected css={{ fontSize: md.width * 0.027 }}>
						MENOR PREÇO
					</S.text>
				</S.btFilter>

				<S.btFilter>
					<S.text css={{ fontSize: md.width * 0.027 }}>
						POR COMBUSTÍVEL
					</S.text>
				</S.btFilter>

				<S.btFilter>
					<S.text css={{ fontSize: md.width * 0.027 }}>
						MAIS PERTO
					</S.text>
				</S.btFilter>
			</S.hstack>
			<Buttom type="fill2" />

			<S.text css={{ title: "", textAlign: "center" }}>
				Postos Próximos
			</S.text>

			<Postos />
		</S.container>
	);
}
