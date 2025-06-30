import React, {
	useEffect,
	useImperativeHandle,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import {
	Animated,
	Dimensions,
	Easing,
	TouchableOpacity,
	useAnimatedValue,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import { TextStyle } from "@/components/forms/topograph";
import GlobalErrorModalHandler from "./handler";
import * as S from "./styles";
import type { GlobalErrorModalRef, T } from "./types";
const _width = Dimensions.get("screen").width;

export function ToastModalProvider() {
	const [message, setMessage] = React.useState<T>({
		title: "",
		description: "",
		tipo: "success",
		duration: 5000,
	});

	const animateValue = useAnimatedValue(0);

	function slidIn() {
		Animated.timing(animateValue, {
			toValue: 1,
			duration: 500,
			easing: Easing.cubic,
			useNativeDriver: true,
		}).start();
	}

	function slidOut() {
		Animated.timing(animateValue, {
			toValue: 0,
			duration: 500,
			easing: Easing.cubic,
			useNativeDriver: true,
		}).start();
	}

	function handleClose() {
		animateValue.setValue(0);

		setMessage(null);
	}

	useEffect(() => {
		if (message?.description) {
			slidIn();

			setTimeout(() => {
				slidOut();
				setTimeout(() => {
					handleClose();
				}, 500);
			}, 5000);
		} else {
		}
	}, [message?.description]);

	const slide = animateValue.interpolate({
		inputRange: [0, 1],
		outputRange: [0, -_width * 0.8],
	});

	const ref = useRef<GlobalErrorModalRef>();

	function obj(item: any) {
		setMessage(item);
	}

	useLayoutEffect(() => {
		GlobalErrorModalHandler.setRef(ref);
	}, []);

	useImperativeHandle(ref, () => ({
		item: (h) => obj(h),
	}));

	if (!message?.description) {
		return;
	}

	return (
		<S.container
			style={[{ transform: [{ translateX: slide }] }]}
			type={message.tipo}
		>
			<S.box>
				<TouchableOpacity onPress={handleClose} style={{ padding: 2 }}>
					<Feather color="#272727" name="x-circle" size={25} />
				</TouchableOpacity>
			</S.box>

			<S.box css={{ flex: 1 }}>
				<S.text type={message.tipo}>{message?.description}</S.text>
			</S.box>
		</S.container>
	);
}
