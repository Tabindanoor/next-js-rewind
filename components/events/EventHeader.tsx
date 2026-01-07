import Badge from "../ui/Badge";

type EventHeaderProps = {
  city: string;
  title: string;
};

export default function EventHeader({ city, title }: EventHeaderProps) {
  return (
    <div className="mb-6">
      <div className="mb-4">
        <Badge>{city}</Badge>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        {title}
      </h1>
    </div>
  );
}
