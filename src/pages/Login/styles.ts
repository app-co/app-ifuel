import { SafeAreaView } from "react-native";
import { styled } from "@/styles";

export const container = styled(SafeAreaView, {
	flex: 1,
	backgroundColor: "$focus2",
	paddingTop: 20,
	px: 7,
});

export const hstack = styled("View", {
	flexDirection: "row",
	alignItems: "center",
});

export const box = styled("View", {});

export const text = styled("Text", {
	fontFamily: "$regular",
});
