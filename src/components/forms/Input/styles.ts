import MaskInput from "react-native-mask-input";
import { styled } from "@/styles";

interface I {
	filed: boolean;
	focus: boolean;
	error: boolean;
	textArea?: boolean;
}

export type TCondition = "filed" | "focus" | "error";

export const Container = styled("View", {
	position: "relative",
	zIndex: 1,
	minHeight: 60,
	width: "100%",

	marginBottom: 10,
});

export const InputContainer = styled("View", {
	br: 8,

	flexDirection: "row",
	width: "100%",
	h: 5,
	px: 2,
	borderWidth: 2,
	borderColor: "$border",

	variants: {
		filed: {
			true: {
				borderColor: "#313131",
			},
		},
		focus: {
			true: {
				borderColor: "#313131",
			},
		},
		error: {
			true: {
				borderColor: "$error",
			},
		},
		textArea: {
			true: {
				height: 120,
			},
		},
		type: {
			B: {
				bg: "$primario2",
				h: 7,
				// alignItems: "center",
				// justifyContent: "center",
			},
		},
	},
});

export const LabelContainer = styled("View", {
	display: "flex",
	justifyContent: "center",
});

export const Label = styled("Text", {
	fontWeight: 400,
	fontSize: 16,
	lineHeight: 22,
	color: "$label3",

	paddingHorizontal: 2,
});

export const title = styled("Text", {
	color: "#555",
	fontFamily: "trin",
	marginBottom: 5,
	fontSize: 14,
});

export const noInput = styled("View", {
	flex: 1,

	display: "flex",
	justifyContent: "center",
});

export const input = styled(MaskInput, {
	flex: 1,
	fontFamily: "regular",
	fontWeight: 400,
	fontSize: 15,
	color: "#262626",

	variants: {
		filled: {
			true: {
				fontFamily: "italic",
			},
		},
		type: {
			B: {
				alignItems: "center",
				justifyContent: "center",
			},
		},
	},
});

export const textArea = styled("TextInput", {
	flex: 1,
	paddingRight: 10,
	paddingTop: 16,

	fontFamily: "regular",
	fontWeight: 400,
	fontSize: 14,
	color: "#262626",
});

export const boxIcon = styled("TouchableOpacity", {
	width: 40,
	alignItems: "center",
	justifyContent: "center",
});

export const IconCustomContainer = styled("TouchableOpacity", {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	paddingHorizontal: 20,
	marginRight: -16,
});
