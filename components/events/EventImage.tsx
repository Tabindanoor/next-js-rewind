import Image from "next/image";

type EventImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export default function EventImage({
  src,
  alt,
  priority = false,
  className = "",
}: EventImageProps) {
  return (
    <div className={`relative h-96 w-full overflow-hidden rounded-lg ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
}
