type EventDescriptionProps = {
  description: string;
};

export default function EventDescription({
  description,
}: EventDescriptionProps) {
  return (
    <div className="mb-8">
      <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
        About this event
      </h2>
      <p className="text-lg leading-7 text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}
