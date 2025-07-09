import { type Control, Controller, type FieldError } from "react-hook-form";
import { Input, type TypeInput } from "../Input";

type Tmask =
	| "date"
	| "cpf"
	| "phone"
	| "short-date"
	| "date"
	| "money"
	| "card"
	| "placa"
	| "cep";

type T = TypeInput & {
	name: string;
	control: Control<any>;
	error?: FieldError;
	mk?: Tmask;
};

interface IMask {
	[key: string]: (value: string) => void;
}

export function InputForm({ name, control, mk, error, ...rest }: T) {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value } }) => {
				return (
					<Input
						error={error ? error.message : ""}
						value={value}
						onChangeText={onChange}
						{...rest}
					/>
				);
			}}
		/>
	);
}
