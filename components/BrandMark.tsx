import { asset } from "@/lib/assets";

export default function BrandMark({ size = 28 }: { size?: number }) {
  return (
    <img
      className="brand-mark"
      src={asset("/broos-mark-256.png")}
      alt=""
      width={size}
      height={size}
    />
  );
}
