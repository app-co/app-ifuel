/* eslint-disable prettier/prettier */

import { Animated, Dimensions } from "react-native";
import { styled } from "@/styles";

const colors: { [key: string]: string } = {
	success: "#004a25",
	error: "#7e0000",
	warning: "#672600ff",
};

const _width = Dimensions.get("screen").width;
const _height = Dimensions.get("screen").height;

export const container = styled(Animated.View, {
	position: "absolute",
	top: 100,
	right: -300,

	padding: 10,
	borderRadius: 10,
	width: 250,
	zIndex: 99999,
	borderBottomWidth: 5,
	// borderRightWidth: 5,
	flexDirection: "row",
	gap: 10,
	borderLeftWidth: 2,

	shadow: "medium",

	variants: {
		type: {
			success: {
				backgroundColor: "$success1",
				borderColor: "$success2",
			},
			error: { borderColor: "$error2", backgroundColor: "$error1" },
			warning: { borderColor: colors.warning },
		},
	},
});

export const text = styled("Text", {
	sub: "",
	fontWeight: "700",

	variants: {
		type: {
			success: {
				color: "$success2",
			},
			error: {
				color: "$error2",
			},
		},
	},
});

export const box = styled("View", {});
