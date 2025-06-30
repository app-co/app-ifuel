import { Input } from "@/components/forms/Input";
import { useTheme } from "@/styles";
import * as S from "./styles";

export function Cadastro() {
	const { colors } = useTheme();

	return (
		<S.container>
			<S.text>Cadastro</S.text>

			<Input label="Nome*" />
		</S.container>
	);
}
