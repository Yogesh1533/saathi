// Each theme sets the CSS custom properties (see styles.css) and the
// reactor's colours. `accent` is the "thinking" colour, `alert` is used
// while Saathi waits for your go-ahead.
export type ThemeId = "diyo" | "himal" | "dhaka";

export interface Theme {
  id: ThemeId;
  name: string;
  primary: string;
  deep: string;
  accent: string;
  alert: string;
}

// Saathi's palettes come from home: the diyo lamps of Tihar, the Himalaya at
// dawn, and the crimson and indigo of a Dhaka topi.
export const THEMES: Record<ThemeId, Theme> = {
  diyo: {
    id: "diyo",
    name: "Diyo · lamplight",
    primary: "#f6a531",
    deep: "#7a3b12",
    accent: "#ff7a59",
    alert: "#e23b4e",
  },
  himal: {
    id: "himal",
    name: "Himal · dawn",
    primary: "#ffb5a7",
    deep: "#4b5d8a",
    accent: "#8fd3ff",
    alert: "#ff4d5e",
  },
  dhaka: {
    id: "dhaka",
    name: "Dhaka · weave",
    primary: "#e8424f",
    deep: "#2b2f6b",
    accent: "#f6c445",
    alert: "#7fd1ff",
  },
};
