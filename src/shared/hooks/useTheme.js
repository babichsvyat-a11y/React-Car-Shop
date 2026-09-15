import { useContext } from "react";
import { ThemeContext } from "@/enteties/Context/ThemeContext/ThemeContext";

export function useTheme() {
  return useContext(ThemeContext);
}
