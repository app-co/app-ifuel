import { styled } from "@/styles";

export const container = styled("TouchableOpacity", {
	h: 6,
	borderRadius: 7,
	backgroundColor: "$focus2",
	px: 2,

	center: "",
	flexDirection: "row",

	variants: {
		type: {
			border: {
				borderWidth: 1,
				borderColor: "$focus2",
			},
			trin: {
				backgroundColor: "transparent",
				borderWidth: 1,
				borderColor: "$primario3",
			},
			trin2: {
				backgroundColor: "transparent",
				borderWidth: 1,
				borderColor: "$focus2",
			},
			alert: {
				borderColor: "$error3",
				borderWidth: 1,
				backgroundColor: "$primario1",
			},
			fill2: {
				backgroundColor: "$success2",
				borderColor: "$success2",
			},
		},
		ico: {
			true: {
				justifyContent: "space-between",
			},
		},
	},
});

export const text = styled("Text", {
	color: "$primario2",
	fontWeight: "800",
	fontSize: 16,
	variants: {
		type: {
			border: {
				color: "$primario1",
			},
			trin: {
				color: "$primario3",
			},
			trin2: {
				color: "$focus2",
			},
			alert: {
				color: "$error3",
			},
		},
	},
});
