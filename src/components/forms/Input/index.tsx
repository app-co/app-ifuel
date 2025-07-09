import { Feather } from "@expo/vector-icons";
import { Eye, EyeClosed } from "phosphor-react-native";
import React from "react";
import { type MaskInputProps } from "react-native-mask-input";
import * as S from "./styles";

export interface TypeInput extends MaskInputProps {
	icon?: React.ComponentProps<typeof Feather>["name"];
	iconCustom?: any;
	pressable?: boolean;
	label?: string;
	error?: any;
	presIco?: () => void;
	textArea?: boolean;
	textAreaHeight?: number;
	onlyView?: boolean;
	icoInteraction?: any;
	security?: boolean;
	type?: "B";
}

export function Input({
	value,
	presIco,
	error,
	label,
	icon,
	security = false,
	pressable = true,
	iconCustom,
	textArea,
	onlyView,
	icoInteraction,
	type,
	...rest
}: TypeInput) {
	const [isFocused, setIsFocused] = React.useState(false);
	const [isFiled, setIsFiled] = React.useState(false);

	const [securytOpen, setSecurityOpen] = React.useState<boolean>(false);

	const handleFocus = React.useCallback(async () => {
		setIsFocused(true);
	}, []);

	const scure = security ? !securytOpen : false;

	const handleBlur = React.useCallback(async () => {
		setIsFocused(false);
		setIsFiled(!!value);
	}, [value]);

	return (
		<S.Container>
			{label && (
				<S.LabelContainer>
					<S.Label>{label}</S.Label>
				</S.LabelContainer>
			)}

			<S.InputContainer
				textArea={textArea}
				focus={isFocused}
				filed={isFiled}
				error={error}
				type={type}
				style={
					rest.textAreaHeight ? { height: rest.textAreaHeight } : {}
				}
			>
				{icon && (
					<S.boxIcon onPress={presIco}>
						<Feather
							name={icon}
							size={20}
							color={isFiled || isFocused ? "#434343" : "#ccc"}
						/>
					</S.boxIcon>
				)}

				{textArea ? (
					<S.textArea
						value={value}
						onBlur={handleBlur}
						onFocus={handleFocus}
						multiline
						numberOfLines={10}
						textAlignVertical="top"
						placeholderTextColor="#9D9D9D"
						{...rest}
						css={
							!value || value?.length === 0
								? { fontStyle: "italic" }
								: {}
						}
					/>
				) : onlyView ? (
					<S.noInput>
						<Text
							style={{
								fontStyle:
									!value || value?.length === 0
										? "italic"
										: "normal",
								color:
									!value || value?.length === 0
										? "#9D9D9D"
										: "#262626",
								fontSize: 14,
							}}
						>
							{!value || value?.length === 0
								? rest.placeholder
								: value}
						</Text>
					</S.noInput>
				) : (
					<S.input
						filled={isFiled}
						value={value}
						onBlur={handleBlur}
						onFocus={handleFocus}
						placeholderTextColor="#9D9D9D"
						secureTextEntry={scure}
						type={type}
						{...rest}
						css={
							!value || value?.length === 0
								? { fontStyle: "italic" }
								: {}
						}
					/>
				)}

				{security && (
					<S.IconCustomContainer
						onPress={() => setSecurityOpen((h) => !h)}
					>
						{securytOpen ? <Eye /> : <EyeClosed />}
					</S.IconCustomContainer>
				)}

				{iconCustom && (
					<S.IconCustomContainer
						disabled={!pressable}
						onPress={presIco}
					>
						{iconCustom}
					</S.IconCustomContainer>
				)}
			</S.InputContainer>

			{error && <S.title style={{ color: "#ee5858" }}>{error}</S.title>}
		</S.Container>
	);
}
