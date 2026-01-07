import type { Event } from "../types/events";

export function getRegisteredCount(event: Event): number {
  return event.emails_registered.filter((email) => email !== "").length;
}

export function filterEventsByCity(
  events: Event[],
  city: string
): Event[] {
  return events.filter(
    (ev) => ev.city.toLowerCase() === city.toLowerCase()
  );
}
