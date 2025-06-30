import { styled } from "@/styles";
import { SafeAreaView } from "react-native";

export const container = styled(SafeAreaView, {
	backgroundColor: "#fff",
	minHeight: "25%",
	maxHeight: "80%",

	position: "absolute",
	width: "100%",
	bottom: 0,
	p: 20,
	borderTopLeftRadius: 20,
	borderTopRightRadius: 20,

	borderWidth: 2,
	borderColor: "#c3c3c3",

	variants: {
		sizeH: {
			full: { height: "80%" },
			middle: { height: "50%" },
			small: { height: "35%" },
		},
	},
});

export const hstack = styled("View", {
	flexDirection: "row",
	alignItems: "center",
});

export const box = styled("View", {});
