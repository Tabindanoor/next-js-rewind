import Link from "next/link";
import Image from "next/image";
import type { EventsData } from "../../types/events";

type Props = {
  data: EventsData;
};

export default function EventsPage({ data }: Props) {
  const { events_categories } = data;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {events_categories.map((cat) => (
        <div
          key={cat.id}
          className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-800"
        >
          <Link href={`/events/${cat.id}`}>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {cat.title}
            </h2>
            <Image
              src={cat.image}
              alt={cat.title}
              width={200}
              height={200}
              className="mt-4 rounded-lg"
            />
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {cat.description}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}