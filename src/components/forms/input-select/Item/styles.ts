import { styled } from "@/styles/global";

import { SafeAreaView } from "react-native";

export const container = styled("TouchableOpacity", {
	backgroundColor: "$primario",
	paddingTop: 20,
	paddingHorizontal: 20,
	p: 10,

	variants: {
		selected: {
			true: { backgroundColor: "#e0e0e0" },
		},
	},
});

export const hstack = styled("View", {
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
});

export const box = styled("View", {});

export const line = styled("View", {
	height: 2,
	backgroundColor: "#f2f2f2",
});
