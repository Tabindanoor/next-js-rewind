import Link from "next/link";
import EventsPage from "../events/EventsPage";
import type { EventsData } from "../../types/events";

type Props = {
  data: EventsData;
};

export default function HomePage({ data }: Props) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      {/* Events Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              Explore by City
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Discover exciting events happening in amazing cities around the world
            </p>
          </div>
          <EventsPage data={data} />
        </div>
      </section>
    </div>
  );
}