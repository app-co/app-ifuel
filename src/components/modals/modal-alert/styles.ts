/* eslint-disable prettier/prettier */
import { styled } from "@/styles/global";
import { _canva } from "@/utils/sizes";
import { Animated, Dimensions } from "react-native";

const colors: { [key: string]: string } = {
	success: "#004a25",
	error: "#7e0000",
	warning: "#672600ff",
};

const _width = Dimensions.get("screen").width;
const _height = Dimensions.get("screen").height;

export const container = styled(Animated.View, {
	position: "absolute",
	top: 200,
	right: -300,
});

export const box = styled("View", {});

export const content = styled("View", {
	backgroundColor: "#ebebeb",
	p: 20,
	br: 20,
	// flex: 1,
});

export const center = styled("View", {
	alignItems: "center",
	justifyContent: "center",
	flex: 1,
});

const sizeImg = _canva * 8.1;

export const img = styled("Image", {
	size: sizeImg,
	position: "absolute",
	alignSelf: "center",
	top: -50,
	opacity: 0.06,
});
