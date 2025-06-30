import { SafeAreaView } from "react-native";
import { styled } from "@/styles";

export const container = styled(SafeAreaView, {
	backgroundColor: "$primario1",
	borderBottomWidth: 3,
	pb: 3,
	borderColor: "$primario2",
});

export const hstack = styled("View", {
	flexDirection: "row",
	alignItems: "center",
});

export const box = styled("View", {});

export const text = styled("Text", {
	fontFamily: "$regular",
});

export const header = styled("View", {
	flexDirection: "row",
	alignItems: "center",
	gap: 25,
	mb: 3,
});

export const img = styled("Image", {
	size: 10,
	borderRadius: 25,
});

export const bandeira = styled("Image", {
	size: 7,
	br: 20,
	bg: "$primario3",
	position: "absolute",
	bottom: -7,
	right: -15,
});
