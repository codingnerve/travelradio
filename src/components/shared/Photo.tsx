import Image from "next/image";
import type { Img } from "@/config/images";

/**
 * Fills its (relatively-positioned) parent with a cropped photograph.
 * Always give the parent an aspect ratio or explicit height.
 */
export function Photo({
  image,
  sizes,
  priority = false,
  className = "",
  position = "center",
}: {
  image: Img;
  sizes: string;
  priority?: boolean;
  className?: string;
  position?: string;
}) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
      style={{ objectPosition: position }}
    />
  );
}
