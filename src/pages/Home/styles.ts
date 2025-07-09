import { Dimensions, SafeAreaView } from "react-native";
import { styled } from "@/styles";

const _md = Dimensions.get("window");

export const container = styled(SafeAreaView, {
	flex: 1,
	backgroundColor: "$primario1",
	pt: 4,
	px: 6,
	gap: 10,
});

export const hstack = styled("View", {
	flexDirection: "row",
	alignItems: "center",
});

export const box = styled("View", {});

export const text = styled("Text", {
	fontFamily: "$regular",
	text: "",

	variants: {
		selected: {
			true: {
				color: "$label1",
			},
		},
	},
});

export const btSelect = styled("TouchableOpacity", {
	br: 15,
	h: 4,
	justifyContent: "center",
	alignItems: "center",
	borderWidth: 1,
	flex: 1,
});

export const line = styled("View", {
	borderBottomWidth: 3,
	borderBottomColor: "$focus2",
});

export const btFilter = styled("TouchableOpacity", {
	br: 5,
	h: 3,
	justifyContent: "center",
	alignItems: "center",
	flex: 1,
	bg: "$primario2",
	px: 2,

	variants: {
		selected: {
			true: {
				backgroundColor: "$focus2",
				borderColor: "$focus2",
			},
		},
	},
});
