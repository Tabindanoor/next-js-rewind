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
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
        Events
      </h1>
      <EventsPage data={data} />
    </div>
  );
}
