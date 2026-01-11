import Link from "next/link";
import Image from "next/image";

type EventCategory = {
  id: string;
  title: string;
  description: string;
  image: string;
};

type Props = {
  data: {
    events_categories: EventCategory[];
  };
};

export default function EventsPage({ data }: Props) {
  const { events_categories } = data;

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {events_categories.map((cat) => (
        <Link
          key={cat.id}
          href={`/events/${cat.id}`}
          className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl dark:bg-gray-800"
        >
          {/* Image Container with Elegant Overlay */}
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"></div>
            
            {/* Elegant Badge */}
            <div className="absolute right-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-gray-900 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:shadow-xl dark:bg-gray-900/95 dark:text-white">
              Explore
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <h2 className="mb-3 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
              {cat.title}
            </h2>
            <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {cat.description}
            </p>
            
            {/* Elegant CTA */}
            <div className="flex items-center text-sm font-semibold text-blue-600 transition-all duration-300 group-hover:gap-2 dark:text-blue-400">
              <span>View Events</span>
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </div>

          {/* Elegant Border Effect */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-300 group-hover:border-blue-200 dark:group-hover:border-blue-800"></div>
        </Link>
      ))}
    </div>
  );
}