import Link from "next/link";
import Image from "next/image";
import { readFile } from "fs/promises";
import { join } from "path";
import { notFound } from "next/navigation";

type EventCategory = {
  id: string;
  title: string;
  description: string;
  image: string;
};

type Event = {
  id: string;
  title: string;
  city: string;
  description: string;
  image: string;
  emails_registered: string[];
};

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function SingleDynamic({ params }: Props) {
  const { id } = await params; 
  console.log(id,"these are params")

  // Load data
  const filePath = join(process.cwd(), "data", "data.json");
  const fileContents = await readFile(filePath, "utf8");
  const data = JSON.parse(fileContents) as {
    events_categories: EventCategory[];
    allEvents: Event[];
  };

  // Find the category matching the ID
  const category = data.events_categories.find(
    (cat) => cat.id === id
  );

  // If category not found, show 404
  if (!category) {
    notFound();
  }

  // Filter events by city (case-insensitive match)
  const cityEvents = data.allEvents.filter(
    (event) => event.city.toLowerCase() === id.toLowerCase()
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Category Header */}
      <div className="mb-8">
        <div className="relative h-64 w-full overflow-hidden rounded-lg">
          {/* <Image
            src={category.image}
            alt={category.title}
            fill
            className="object-cover"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h1 className="text-4xl font-bold text-white">
              {category.title}
            </h1>
            <p className="mt-2 text-lg text-gray-200">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {cityEvents.length} {cityEvents.length === 1 ? "Event" : "Events"} Found
        </h2>
        <Link
          href="/events"
          className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
        >
          ← Back to All Events
        </Link>
      </div>

      {cityEvents.length === 0 ? (
        <div className="rounded-lg border border-gray-200 bg-white p-12 text-center dark:border-gray-800 dark:bg-gray-800">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            No events found for this city.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cityEvents.map((event) => {
            const registeredCount = event.emails_registered.filter(
              (email) => email !== ""
            ).length;

            return (
              <Link
                key={event.id}
                href={`/events/${id}/${event.id}`}
                className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-800"
              >
                {/* <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div> */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      {event.city}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {event.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-gray-600 dark:text-gray-300 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {registeredCount} {registeredCount === 1 ? "attendee" : "attendees"}
                    </span>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}