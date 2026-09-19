import { asset } from "@/lib/assets";

export default function BrandMark({ size = 32 }: { size?: number }) {
  return (
    <img
      className="brand-mark"
      src={asset("/aria-logo.png")}
      alt=""
      width={size}
      height={size}
    />
  );
}
