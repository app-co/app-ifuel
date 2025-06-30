import { TextStyle } from "@/components/forms/topograph";
import { useTheme } from "@/styles/global";
import { useNavigation } from "@react-navigation/native";
import { Check } from "phosphor-react-native";
import React, { type ReactNode } from "react";
import * as S from "./styles";

interface I {
	item: { label: string; value: string };
	onSelect: () => void;
	selected: boolean;
	action?: ReactNode;
}

export function Item({ item, onSelect, action, selected }: I) {
	const { colors } = useTheme();
	const navigation = useNavigation();

	return (
		<>
			<S.container selected={selected} onPress={onSelect}>
				<S.hstack>
					<TextStyle>{item.label}</TextStyle>
					{action}
				</S.hstack>
			</S.container>

			<S.line />
		</>
	);
}
