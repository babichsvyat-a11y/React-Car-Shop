import { useContext } from "react";
import { ThemeContext } from "@/enteties/Context/ThemeContext";

export function useTheme() {
  return useContext(ThemeContext);
}
