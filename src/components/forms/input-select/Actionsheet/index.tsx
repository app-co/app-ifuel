import { XCircle } from "phosphor-react-native";
import type { ReactNode } from "react";
import { TouchableOpacity } from "react-native";
import * as S from "./styles";

interface I {
	closed: () => void;
	sizeH?: "full" | "small" | "middle";
	children: ReactNode;
}

export function Actionsheet({ closed, sizeH = "middle", children }: I) {
	return (
		<S.container sizeH={sizeH}>
			<S.hstack
				css={{
					width: "100%",
					justifyContent: "space-between",
				}}
			>
				<S.box />
				<TouchableOpacity onPress={closed} style={{ alignSelf: "flex-end" }}>
					<XCircle weight="duotone" size={30} />
				</TouchableOpacity>
			</S.hstack>
			<S.box css={{ flex: 1, mt: 20 }}>{children}</S.box>
		</S.container>
	);
}
