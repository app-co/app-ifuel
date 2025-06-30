/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-bind */
import React, {
	useImperativeHandle,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import { Modal, TouchableOpacity } from "react-native";
import {
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";

import { Box, Center, Image, VStack, useNativeBase } from "native-base";

import logo from "@/assets/logo-sem-bg.png";
import { Buttom } from "@/components/forms/Buttom";
import { TextStyle } from "@/components/forms/topograph";
import { _canva, _height, _width } from "@/utils/sizes";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import GlobalErrorModalHandler from "./handler";
import * as S from "./styles";
import type { GlobalErrorModalRef, T } from "./types";

export function ModalSucessoProvider() {
	const [isOpen, setIsOpen] = useState(false);
	const navigation = useNavigation();
	const [modal, setModal] = React.useState(false);
	const [item, setItem] = React.useState<T>({} as T);

	const descriptionDefault =
		"Por motivo de segurança, a imagem cadastrada ou alterada passará por análise. Não se preocupe, assim que for aprovada, você receberá uma notificação e ela estará disponível no sistema.";
	const [description, setDescription] = useState(descriptionDefault);

	const ref = useRef<GlobalErrorModalRef>();

	useLayoutEffect(() => {
		GlobalErrorModalHandler.setRef(ref);
	}, []);

	useImperativeHandle(ref, () => ({
		show: (h) => {
			setModal(true);
			setItem(h);
		},
		hide: () => {
			setModal(false);
			setItem({} as T);
		},
	}));

	const sizeImg = _canva * 8.1;
	return (
		<Modal transparent visible={modal} animationType="fade">
			<S.center>
				<S.content>
					<S.img alt="logo" source={logo} />
					<VStack space={4}>
						<TextStyle style={{ textAlign: "center" }} type="title">
							{item.title}
						</TextStyle>
						<TextStyle
							type="defaultSemiBold"
							style={{ textAlign: "center" }}
						>
							{item.description}
						</TextStyle>

						<S.box css={{ mt: 30 }}>
							<Buttom
								onPress={() => setModal(false)}
								title="OK"
							/>
						</S.box>
					</VStack>
				</S.content>
			</S.center>
		</Modal>
	);
}
