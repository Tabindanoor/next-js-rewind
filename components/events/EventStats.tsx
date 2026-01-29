type EventStatsProps = {
  registeredCount: number;
  eventId: string;
};

export default function EventStats({
  registeredCount,
  eventId,
}: EventStatsProps) {
  return (
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
          <p className="mt-1 font-mono text-sm text-gray-600 dark:text-gray-400">
            {eventId}
          </p>
        </div>
      </div>
    </div>
  );
}
