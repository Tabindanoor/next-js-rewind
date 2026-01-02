import Image from "next/image";
import type { EventCategory } from "../../types/events";

type CategoryHeaderProps = {
  category: EventCategory;
};

export default function CategoryHeader({ category }: CategoryHeaderProps) {
  return (
    <div className="mb-8">
      <div className="relative h-64 w-full overflow-hidden rounded-lg">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold text-white">{category.title}</h1>
          <p className="mt-2 text-lg text-gray-200">{category.description}</p>
        </div>
      </div>
    </div>
  );
}
