import { Ionicons } from "@expo/vector-icons";
import React, { type ReactNode, useMemo } from "react";
import { FlatList, Modal, Text, TouchableOpacity } from "react-native";
import { Input } from "../Input";
import { Actionsheet } from "./Actionsheet";
import { Item } from "./Item";
import * as S from "./styles";

type T = {
	label: string;
	value: any;
};

interface I {
	options: T[];
	value: string | any[];
	onChange: (value: any) => void;
	label?: string;
	placeholder?: string;
	nexPage?: () => void;
	load?: boolean;
	isMultiple?: boolean;
	error?: boolean;
	searching?: (h: string) => void;
	refetch?: () => void;
	bg?: string;
	sizeH?: "full" | "middle" | "small";
	action?: (h: any) => ReactNode;
}
//278.432.598-99
export function InputSelect({
	onChange,
	label,
	refetch,
	searching,
	error = false,
	isMultiple = false,
	load = false,
	nexPage,
	sizeH = "middle",
	placeholder,
	options = [],
	value,
	bg = "#fff",
	action,
}: I) {
	const [search, setSearch] = React.useState("");
	const [open, setOpen] = React.useState(false);

	const lista = value;

	const [selected, _setSelected] = React.useState(placeholder);

	const valueLabel = options.find((h) => h.value === value)?.label ?? "";
	const listaLabel = options.filter((h) => {
		const find = Array.isArray(lista)
			? lista.find((l) => l === h.value)
			: [];

		if (find) return h;
	});

	const removeSpecialChars = (str: string) => {
		return str
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.replace(/[^a-zA-Z0-9 ]/g, "");
	};

	function onItemSelect(item: number | string) {
		if (Array.isArray(lista)) {
			if (lista.includes(item.value)) {
				onChange(lista.filter((v) => v !== item.value));
			} else {
				onChange([...lista, item.value]);
			}

			return;
		}

		onChange(item.value);
		setOpen(false);
		setSearch("");
	}

	function _color() {
		if (lista.length > 0) {
			return "#999999";
		}

		if (error) {
			return "#ff0000";
		}

		return "#46464b";
	}

	React.useEffect(() => {
		if (searching) {
			searching(search);
		}
	}, [search, searching]);

	const opt =
		search !== ""
			? options.filter((h) =>
					removeSpecialChars(h.label)
						.toLowerCase()
						.includes(removeSpecialChars(search).toLowerCase()),
				)
			: options;

	const sortedOptions = useMemo(() => {
		if (!value) return opt;
		if (Array.isArray(value)) {
			const selected = opt.filter((h) =>
				value ? value.includes(h.value) : h,
			);
			const unselected = opt.filter((h) =>
				value ? !value.includes(h.value) : h,
			);
			return [...selected, ...unselected];
		}

		const selected = opt.filter((h) => value === h.value);
		const unselected = opt.filter((h) => (value ? value !== h.value : h));
		return [...selected, ...unselected];
	}, [opt, value]);

	return (
		<>
			<Modal
				onTouchCancel={() => setOpen(false)}
				transparent
				visible={open}
				animationType="slide"
			>
				<S.box css={{ flex: 1, backgroundColor: "#202020c3" }}>
					<Actionsheet closed={() => setOpen(false)} sizeH={sizeH}>
						<S.box>
							{opt.length > 6 && (
								<Input
									placeholder="Pesquisar por nome"
									onChangeText={setSearch}
									value={search}
								/>
							)}
							<FlatList
								data={sortedOptions}
								onEndReached={nexPage}
								showsVerticalScrollIndicator={false}
								contentContainerStyle={{
									gap: 5,
									paddingBottom: 100,
								}}
								renderItem={({ item: h }) => {
									const select = isMultiple
										? lista.findIndex(
												(p) => p === h.value,
											) !== -1
										: value === h.value;
									return (
										<Item
											onSelect={() => onItemSelect(h)}
											selected={select}
											item={h}
											action={action ? action(h) : null}
										/>
									);
								}}
							/>
						</S.box>
					</Actionsheet>
				</S.box>
			</Modal>
			{isMultiple ? (
				<S.box css={{ marginBottom: 10 }}>
					{label && (
						<S.box>
							<S.text>{label}</S.text>
						</S.box>
					)}

					<TouchableOpacity
						onPress={() => setOpen(true)}
						style={{
							borderWidth: 1,
							borderColor: "#757575",
							borderRadius: 12,
							backgroundColor: bg,
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							overflow: "hidden",
							minHeight: 60,
							paddingVertical: 16,
							paddingHorizontal: 16,
						}}
					>
						<S.hstack style={{ flex: 1, gap: 5, flexWrap: "wrap" }}>
							{Array.isArray(lista) &&
								listaLabel?.slice(0, 4)?.map((h) => (
									<S.box
										css={{
											br: 10,
											px: 4,
											backgroundColor: "#ebebeb",
										}}
										key={h.value}
									>
										<S.text>{h.label}</S.text>
									</S.box>
								))}

							{lista?.length >= 4 && (
								<S.text style={{ marginTop: 5 }}>
									... mais {lista.slice(4).length}
								</S.text>
							)}

							{lista?.length === 0 && (
								<Text
									style={{
										fontStyle: "italic",
										color: "#9D9D9D",
										fontSize: 14,
									}}
								>
									Selecione uma ou mais opções
								</Text>
							)}
						</S.hstack>

						<Ionicons
							name="chevron-down"
							size={25}
							color="#9D9D9D"
						/>
					</TouchableOpacity>
				</S.box>
			) : (
				<S.box style={{ marginBottom: 10 }}>
					{label && (
						<S.box>
							<S.text>{label}</S.text>
						</S.box>
					)}

					<TouchableOpacity
						onPress={() => setOpen(true)}
						style={{
							borderWidth: 1,
							borderColor: "#c4c4c4",
							borderRadius: 12,
							backgroundColor: "#ffffff",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							overflow: "hidden",
							minHeight: 60,
							paddingVertical: 16,
							paddingHorizontal: 16,
						}}
					>
						<S.hstack style={{ gap: 5, flex: 1, flexWrap: "wrap" }}>
							<S.text>{valueLabel}</S.text>

							{!valueLabel && (
								<Text
									style={{
										fontStyle: "italic",
										color: "#9D9D9D",
										fontSize: 14,
									}}
								>
									{selected}
								</Text>
							)}
						</S.hstack>

						<Ionicons
							name="chevron-down"
							size={25}
							color="#9D9D9D"
						/>
					</TouchableOpacity>
				</S.box>
			)}
		</>
	);
}
