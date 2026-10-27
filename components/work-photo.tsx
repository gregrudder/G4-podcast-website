import Image from "next/image";
import type { WorkImage } from "@/data/portfolio";

export function WorkPhoto({
  image,
  priority = false,
  sizes,
}: {
  image: WorkImage;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <figure>
      <div className="media-frame overflow-hidden border border-line bg-raised">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          priority={priority}
          className="h-auto w-full"
        />
      </div>
      <figcaption className="mt-3 text-sm text-muted">{image.caption}</figcaption>
    </figure>
  );
}
