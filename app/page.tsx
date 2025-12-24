import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import data from "../data/data.json";
import Image from "next/image";

type EventCategory = {
  id: string;
  title: string;
  description: string;
  image: string;
};


export default function Home() {
  const { events_categories } = data as {
    events_categories: EventCategory[];
  };
  // console.log(events_categories);
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
      
        {events_categories.map((cat) => (
          <div key={cat.id} id={cat.id}>
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
      </main>
      <Footer />
    </div>
  );
}
