import Link from "next/link";
import Image from "next/image";
import Badge from "../ui/Badge";
import type { Event } from "../../types/events";

type EventCardProps = {
  event: Event;
  eventCategory: string;
};

export default function EventCard({ event, eventCategory }: EventCardProps) {
  const registeredCount = event.emails_registered.filter(
    (email) => email !== ""
  ).length;

  return (
    <Link
      href={`/events/${eventCategory}/${event.id}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-800"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2">
          <Badge className="px-3 py-1 text-xs">
            {event.city}
          </Badge>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {event.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
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
}
