import { Dimensions } from "react-native";
import { createStitches } from "stitches-native";

const { height, width } = Dimensions.get("window");

export const { theme, useTheme, styled, createTheme, ThemeProvider } =
	createStitches({
		theme: {
			colors: {
				error1: "#fdb5b5",
				error2: "#e76161",
				error3: "#D10038",
				success1: "hsl(154, 87%, 85%)",
				success2: "hsl(154, 87%, 25%)",
				success3: "hsl(154, 87%, 15%)",
				focus1: "hsl(3, 82%, 86%)",
				focus2: "hsl(3, 82%, 46%)",
				focus3: "hsl(3, 82%,20%)",
				primario1: "hsl(0, 0%, 100%)",
				primario2: "hsl(0, 0%, 96%)",
				primario3: "hsl(0, 0%, 50%)",
				label1: "hsl(0, 0%, 94%)",
				label2: "hsl(0, 0%, 40%)",
				label3: "hsl(0, 0%, 10%)",
				border: "hsl(0, 0%, 85%)",
			},
		},
		media: {
			md: "(width >= 390px)",
			lg: "(width >= 1080px)",
			xl: "(width >= 1284px)",
			xxl: "(width >= 1536px)",
		},
		utils: {
			shadow: (level: "small" | "medium" | "large") => {
				return {
					small: {
						elevation: 2,
						shadowOffset: { width: 0, height: 1 },
						shadowRadius: 3,
						shadowOpacity: 0.1,
						shadowColor: "#000",
					},
					medium: {
						elevation: 5,
						shadowOffset: { width: 0, height: 3 },
						shadowRadius: 6,
						shadowOpacity: 0.2,
						shadowColor: "#000",
					},
					large: {
						elevation: 10,
						shadowOffset: { width: 0, height: 6 },
						shadowRadius: 12,
						shadowOpacity: 0.4,
						shadowColor: "#000",
					},
				}[level];
			},
			p: (h: number) => ({
				paddingHorizontal: width * 0.01 * h,
				paddingVertical: height * 0.007 * h,
			}),
			pt: (h: number) => ({
				paddingTop: height * 0.007 * h,
			}),
			pr: (h: number) => ({
				paddingRight: width * 0.01 * h,
			}),
			pb: (h: number) => ({
				paddingBottom: height * 0.007 * h,
			}),
			pl: (h: number) => ({
				paddingLeft: width * 0.01 * h,
			}),
			px: (h: number) => ({
				paddingHorizontal: width * 0.01 * h,
			}),
			py: (h: number) => ({
				paddingVertical: height * 0.007 * h,
			}),
			m: (h: any) => ({
				marginHorizontal: width * 0.01 * h,
				marginVertical: height * 0.007 * h,
			}),
			mt: (h: any) => ({
				marginTop: height * 0.007 * h,
			}),
			mr: (h: any) => ({
				marginRight: width * 0.01 * h,
			}),
			mb: (h: any) => ({
				marginBottom: height * 0.007 * h,
			}),
			ml: (h: any) => ({
				marginLeft: width * 0.01 * h,
			}),
			mx: (h: any) => ({
				marginHorizontal: width * 0.01 * h,
			}),
			my: (h: any) => ({
				marginVertical: height * 0.007 * h,
			}),
			bg: (h: string) => ({
				backgroundColor: h,
			}),
			w: (h: any) => ({
				width: width * 0.01 * h,
			}),
			h: (h: number) => ({
				height: height * 0.01 * h,
			}),
			br: (h: any) => ({
				borderRadius: h,
			}),
			size: (h: any) => ({
				width: width * 0.01 * h,
				height: width * 0.01 * h,
			}),
			hstack: () => ({
				flexDirection: "row",
				alignItems: "center",
			}),

			center: () => ({
				justifyContent: "center",
				alignItems: "center",
			}),

			title: () => ({
				fontSize: width * 0.062,
				fontFamily: "bold",
			}),

			sub: () => ({
				fontSize: width * 0.045,
				fontFamily: "regular",
			}),

			text: () => ({
				fontSize: width * 0.033,
				fontFamily: "regular",
			}),
		},
	});
