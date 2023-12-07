import { vars } from "@/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const colorItem = style({
    display: "flex",
    alignItems: "center",
    marginBottom: vars.spacings[4],
});

export const colorItemNaming = style({
    flex: "0 0 30%",
});

export const colorItemSwatches = style({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
});

export const colorItemSwatchesList = style({
    display: "flex",
    marginBottom: vars.spacings[0.5],
    listStyle: "none",
});

export const swatchColorPane = style({
    width: "100%",
    height: vars.spacings[12],
});
