import type { ReactNode } from "react";
import { ActivityIndicator, type TouchableOpacityProps } from "react-native";
import { useTheme } from "@/styles";
import * as S from "./styles";

interface I extends TouchableOpacityProps {
	title?: string;
	isLoaded?: boolean;
	type?: "border" | "trin" | "alert" | "trin2" | "fill2";
	icon?: ReactNode;
}

export function Buttom({
	title = "Salvar",
	isLoaded,
	icon,
	type = "border",
	...rest
}: I) {
	const { colors } = useTheme();
	const ico = !!icon;
	return (
		<S.container ico={ico} type={type} {...rest}>
			{isLoaded ? (
				<ActivityIndicator size="small" color={colors.primario1} />
			) : (
				<S.text type={type}>{title}</S.text>
			)}

			{icon}
		</S.container>
	);
}
