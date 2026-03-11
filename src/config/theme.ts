/**
 * Theme configuration — single source of truth for all brand colors.
 *
 * To retheme the site:
 *   1. Change the values below.
 *   2. Also update the matching CSS variables in src/app/globals.css (:root block).
 *      (CSS variables can't be auto-generated from TypeScript at build time without extra tooling.)
 *
 * After changing, all Tailwind named classes (bg-magenta, text-brand-white, etc.)
 * will update automatically. Inline styles using CSS variables will also update.
 */

export const theme = {
  colors: {
    // ── Accent (currently: pink / magenta) ─────────────────────────────────
    accent: "#c92e8e",
    accentLight: "#e040aa",
    accentGradientEnd: "#7c3aed", // second stop in gradient-magenta

    // ── Backgrounds ────────────────────────────────────────────────────────
    bgBase: "#050508",
    bgSurface: "#090912",

    // ── Foreground / text ──────────────────────────────────────────────────
    fgPrimary: "#f5f4f0",
    fgMuted: "#8a8a9a",
  },
} as const;

export type ThemeColors = typeof theme.colors;
