import { SafeAreaView } from "react-native";
import { styled } from "@/styles";

export const container = styled(SafeAreaView, {
	backgroundColor: "$primario1",
	p: 8,
	br: 8,
});

export const hstack = styled("View", {
	flexDirection: "row",
	alignItems: "center",
});

export const box = styled("View", {});

export const text = styled("Text", {});

export const line = styled("View", {
	h: 0.5,
	bg: "$focus2",

	mt: 2,
	mb: 4,
});

export const bt = styled("TouchableOpacity", {
	borderWidth: 1,
	br: 8,
	borderColor: "$border",
	center: "",
	h: 6,
	hstack: "",
	gap: 20,
});

export const img = styled("Image", {
	w: 8,
	h: 3,
});
