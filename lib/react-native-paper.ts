import { AppTheme } from "@/types/react-native-paper";
import { useTheme } from "react-native-paper";

export const useAppTheme = () => useTheme<AppTheme>();
