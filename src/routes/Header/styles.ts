import { SafeAreaView } from "react-native";
import { styled } from "@/styles";

export const container = styled(SafeAreaView, {
	backgroundColor: "$focus2",
	h: 8,
	px: 6,
	justifyContent: "center",
});

export const hstack = styled("View", {
	flexDirection: "row",
	alignItems: "center",
});

export const box = styled("View", {});

export const text = styled("Text", {
	semi: "",
	color: "$label1",
	fontWeight: "800",
});
