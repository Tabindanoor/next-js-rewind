import { notFound } from "next/navigation";
import data from "../../../../data/data.json";
import type { EventsData } from "../../../../types/events";
import {
  BackNavigation,
  EventActionButtons,
  EventDescription,
  EventHeader,
  EventImage,
  EventStats,
  RegistrationForm,
} from "../../../../components/events";
import { Card } from "../../../../components/ui";
import { getRegisteredCount } from "../../../../utils/events";

type Props = {
  params: Promise<{
    event: string;
    slug: string;
  }>;
};

export default async function EventDetails({ params }: Props) {
  const { event, slug } = await params;

  const { allEvents } = data as EventsData;

  // Find the specific event by slug
  const eventDetails = allEvents.find((ev) => ev.id === slug);

  // If event not found, show 404
  if (!eventDetails) {
    notFound();
  }

  const registeredCount = getRegisteredCount(eventDetails);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <BackNavigation
        href={`/events/${event}`}
        label={`Back to ${eventDetails.city} Events`}
      />

      <EventImage
        src={eventDetails.image}
        alt={eventDetails.title}
        priority
        className="mb-8"
      />

      <Card padding="lg">
        <EventHeader city={eventDetails.city} title={eventDetails.title} />

        <EventDescription description={eventDetails.description} />

        <EventStats
          registeredCount={registeredCount}
          eventId={eventDetails.id}
        />

        <EventActionButtons eventCategory={event} />

        <RegistrationForm eventId={eventDetails.id} />
      </Card>
    </div>
  );
}
