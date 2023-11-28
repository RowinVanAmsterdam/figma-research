import { vars } from "@/theme/contract.css";
import { globalStyle, style } from "@vanilla-extract/css";

const textColor = "#23282A";

export const colorCard = style({
  border: "1px solid #CACBCC",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  borderRadius: "10px",
  overflow: "hidden",
  minHeight: "75px",
});

globalStyle(`${colorCard} > div:last-child`, {});

export const headerBackground = style({
  width: "100%",
  height: "100%",
});

export const headerTitleWrapper = style({
  display: "flex",
  gap: vars.spacings["1"],
  flexDirection: "column",
  padding: `${vars.spacings["1"]} ${vars.spacings["1"]} ${vars.spacings["1"]} ${vars.spacings["2"]}`,
  justifyContent: "center",
});

export const headerTitle = style({
  fontSize: "18px",
  color: textColor,
  margin: 0,
});

export const headerSubtitle = style({
  fontSize: "14px",
  color: textColor,
});

export const blackBackground = style({
  background: "#919394",
});
