import Link from "next/link";
import { notFound } from "next/navigation";
import data from "../../../data/data.json";
import type { EventsData } from "../../../types/events";
import { CategoryHeader, EventCard } from "../../../components/events";
import { filterEventsByCity } from "../../../utils/events";

type Props = {
  params: Promise<{
    event: string;
  }>;
};

export default async function SingleDynamic({ params }: Props) {
  const { event } = await params;

  const { events_categories, allEvents } = data as EventsData;

  // Find the category matching the ID
  const category = events_categories.find((cat) => cat.id === event);

  // If category not found, show 404
  if (!category) {
    notFound();
  }

  // Filter events by city - normalize case for comparison
  const cityEvents = filterEventsByCity(allEvents, event); 

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <CategoryHeader category={category} />

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
          {cityEvents.map((ev) => (
            <EventCard key={ev.id} event={ev} eventCategory={event} />
          ))}
        </div>
      )}
    </div>
  );
}