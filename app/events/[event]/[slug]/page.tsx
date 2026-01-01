import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import data from "../../../../data/data.json";

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
    event: string;
    slug: string;
  }>;
};

export default async function EventDetails({ params }: Props) {
  const { event, slug } = await params;

  const { allEvents } = data as {
    allEvents: Event[];
  };

  // Find the specific event by slug
  const eventDetails = allEvents.find((ev) => ev.id === slug);

  // If event not found, show 404
  if (!eventDetails) {
    notFound();
  }

  const registeredCount = eventDetails.emails_registered.filter(
    (email) => email !== ""
  ).length;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Back Navigation */}
      <Link
        href={`/events/${event}`}
        className="mb-6 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
      >
        ← Back to {eventDetails.city} Events
      </Link>

      {/* Event Image */}
      <div className="relative mb-8 h-96 w-full overflow-hidden rounded-lg">
        <Image
          src={eventDetails.image}
          alt={eventDetails.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Event Details */}
      <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-800">
        {/* Header */}
        <div className="mb-6">
          <div className="mb-4">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              {eventDetails.city}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {eventDetails.title}
          </h1>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            About this event
          </h2>
          <p className="text-lg leading-7 text-gray-600 dark:text-gray-300">
            {eventDetails.description}
          </p>
        </div>

        {/* Event Stats */}
        <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Registered Attendees
              </p>
              <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                {registeredCount}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Event ID
              </p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 font-mono">
                {eventDetails.id}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4">
          <Link
            href={`/events/${event}`}
            className="flex-1 rounded-lg border border-gray-300 bg-white px-6 py-3 text-center text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            View Other Events
          </Link>
          <Link
            href="/events"
            className="flex-1 rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Browse All Cities
          </Link>
        </div>

        {/* Registration Form */}
        <form className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-700">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Register for this event
          </h2>
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              />
            </div>
            <button
              type="submit"
              aria-label="Register for this event"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
