import Image from "next/image";
import { LOGO_ALT, LOGO_PATH } from "@/lib/brand";

type LogoProps = {
  size?: number;
  className?: string;
};

export function Logo({ size = 40, className = "" }: LogoProps) {
  return (
    <Image
      src={LOGO_PATH}
      alt={LOGO_ALT}
      width={size}
      height={size}
      className={`object-contain ${className}`.trim()}
      priority
    />
  );
}
