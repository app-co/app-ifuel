import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import gmail from "@/assets/gmail.png";
import { useAuth } from "@/contexts/auth";
import { useTheme } from "@/styles";
import { Buttom } from "../../forms/Buttom";
import { InputForm } from "../../forms/InputForm";
import * as S from "./styles";

export function LoginComponent() {
	const { user } = useAuth();
	const { colors } = useTheme();
	const _navigation = useNavigation();

	const cnt = useForm();

	return (
		<S.container>
			<S.text css={{ title: "" }}>Login</S.text>
			<S.line />

			<S.box>
				<InputForm
					control={cnt.control}
					error={cnt.formState.errors.email}
					name="email"
					label="Email"
				/>

				<InputForm
					control={cnt.control}
					error={cnt.formState.errors.senha}
					name="senha"
					label="Senha"
					security
				/>

				<S.box css={{ gap: 20, mt: 4 }}>
					<S.bt>
						<S.img source={gmail} />
						<S.text
							css={{
								sub: "",
								color: "$label2",
								fontWeight: "600",
							}}
						>
							Login com Gmail
						</S.text>
					</S.bt>

					<Buttom title="LOGIN" />
				</S.box>
			</S.box>
		</S.container>
	);
}
