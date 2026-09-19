const COLORS: Record<string, string> = {
  green: "#38d591",
  blue: "#1084fe",
  red: "#ff5667",
  orange: "#ff9800",
  purple: "#7c6cff",
  cyan: "#4cc2ff",
  pink: "#ff6ea8",
  yellow: "#e8b931",
  teal: "#2a9d8f",
  coral: "#ff7a59",
};

export default function AgentMark({
  name,
  color = "blue",
  size = 42,
}: {
  name: string;
  color?: string;
  size?: number;
}) {
  const fill = COLORS[color] ?? COLORS.blue;
  const initial = name.trim().charAt(0).toUpperCase() || "A";
  return (
    <span
      className="agent-mark"
      style={{
        width: size,
        height: size,
        fontSize: Math.round(size * 0.42),
        background: fill,
      }}
      aria-hidden="true"
    >
      {initial}
    </span>
  );
}
