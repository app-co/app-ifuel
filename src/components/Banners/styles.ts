import { SafeAreaView } from "react-native";
import { styled } from "@/styles";

export const container = styled(SafeAreaView, {
	bg: "$primario2",
	br: 8,
	h: 15,
	center: "",
});

export const hstack = styled("View", {
	flexDirection: "row",
	alignItems: "center",
});

export const box = styled("View", {});

export const text = styled("Text", {
	fontFamily: "$regular",
});
