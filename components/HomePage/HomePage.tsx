import Link from "next/link";
import EventsPage from "../events/EventsPage";

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

export default function HomePage({ data }: Props) {
  return (
    <div className="min-h-screen">
      {/* Elegant Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-white/60 px-4 py-2 text-sm font-medium text-blue-700 backdrop-blur-sm dark:border-blue-800/50 dark:bg-gray-800/60 dark:text-blue-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500"></span>
              Discover Amazing Events
            </div>
            
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl dark:text-white">
              Find Your Next
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Unforgettable Experience
              </span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
              Explore curated events in the world's most exciting cities. 
              From concerts to conferences, discover what moves you.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/events"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
              >
                <span className="relative z-10">Explore Events</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </Link>
              <Link
                href="/about"
                className="rounded-xl border-2 border-gray-300 bg-white/80 px-8 py-4 text-base font-semibold text-gray-700 backdrop-blur-sm transition-all duration-300 hover:border-gray-400 hover:bg-white dark:border-gray-600 dark:bg-gray-800/80 dark:text-gray-200 dark:hover:border-gray-500"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
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
