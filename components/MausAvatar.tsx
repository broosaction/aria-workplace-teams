"use client";

import CursorAvatar, {
  type CursorSilhouette,
  type CursorState,
} from "@/components/CursorAvatar";
import { MASCOT_BODIES, MASCOT_BODY_IDS, botMascotBody, type MascotBodyId } from "@/lib/mascot-bodies";

export const MAUS_COLORS = {
  green: "#009957",
  blue: "#377FE6",
  red: "#D94B52",
  orange: "#E78531",
  purple: "#8057C8",
  cyan: "#0EA5C6",
  pink: "#D84F8B",
  yellow: "#D8A729",
  teal: "#01A492",
  coral: "#E5634E",
} as const;

export type MausColor = keyof typeof MAUS_COLORS;

const STATE_ALIASES: Record<string, CursorState> = {
  calm: "idle",
  curious: "curious",
  determined: "proud",
  excited: "excited",
  focused: "working",
  happy: "happy",
  playful: "playful",
  proud: "proud",
  serious: "suspicious",
  thinking: "thinking",
};

function mix(hex: string, toward: string, amount: number) {
  const source = Number.parseInt(hex.slice(1), 16);
  const target = Number.parseInt(toward.slice(1), 16);
  const channel = (shift: number) => {
    const start = (source >> shift) & 0xff;
    const end = (target >> shift) & 0xff;
    return Math.round(start + (end - start) * amount);
  };
  return `#${[channel(16), channel(8), channel(0)]
    .map((part) => part.toString(16).padStart(2, "0"))
    .join("")}`;
}

function gradientFor(color: MausColor): [string, string, string] {
  const fill = MAUS_COLORS[color] ?? MAUS_COLORS.green;
  return [mix(fill, "#ffffff", 0.55), fill, mix(fill, "#000000", 0.42)];
}

function bodyFromName(name: string): MascotBodyId {
  const hash = Array.from(name).reduce((value, character) => ((value * 31) + (character.codePointAt(0) ?? 0)) >>> 0, 0);
  return MASCOT_BODY_IDS[hash % MASCOT_BODY_IDS.length];
}

function silhouetteFor(bodyId: MascotBodyId): CursorSilhouette {
  const { id: _id, ...silhouette } = MASCOT_BODIES[bodyId];
  return silhouette;
}

export default function MausAvatar({
  color = "blue",
  expression = "happy",
  size = 44,
  animated = false,
  className,
  label,
  bodyId,
}: {
  color?: string;
  expression?: string;
  size?: number;
  animated?: boolean;
  className?: string;
  label?: string;
  bodyId?: string | null;
}) {
  const safeColor = color in MAUS_COLORS ? (color as MausColor) : "blue";
  const state = STATE_ALIASES[expression] ?? "happy";
  const body = bodyId ? botMascotBody(bodyId) : bodyFromName(label ?? safeColor);

  return (
    <CursorAvatar
      className={className}
      size={size}
      state={state}
      silhouette={silhouetteFor(body)}
      gradient={gradientFor(safeColor)}
      eyeScale={1.12}
      mouthStroke={11}
      title={label ?? null}
      paused={!animated}
      autoBlink={animated}
      autoExpression={animated}
      effects={animated}
      glyphs={false}
      lookAround={animated ? 0.35 : 0}
      motion={animated ? 0.72 : 0}
    />
  );
}
