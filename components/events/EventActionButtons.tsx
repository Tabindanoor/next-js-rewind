import Button from "../ui/Button";

type EventActionButtonsProps = {
  eventCategory: string;
};

export default function EventActionButtons({
  eventCategory,
}: EventActionButtonsProps) {
  return (
    <div className="mt-8 flex gap-4">
      <Button href={`/events/${eventCategory}`} variant="outline" className="flex-1">
        View Other Events
      </Button>
      <Button href="/events" variant="primary" className="flex-1">
        Browse All Cities
      </Button>
    </div>
  );
}
