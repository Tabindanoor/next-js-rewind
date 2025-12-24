export const dynamic = "force-static";
import Link from "next/link";
import data from "../../data/data.json";
import Image from "next/image";

type EventCategory = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export default function EventsMainPage() {
  const { events_categories } = data as {
    events_categories: EventCategory[];
  };
  // console.log(events_categories);
  
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
        Events
      </h1>
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
              <Image src={cat.image} alt={cat.title} width={200} height={200}/>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {cat.description}
            </p> 
             </Link>
          </div>
        ))}
        
      </div>
    </div>
  );
}

