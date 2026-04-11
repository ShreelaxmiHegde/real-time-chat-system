import EventCard from "./EventCard";

export default function EventStream({ events }) {
  return (
    <div className="space-y-4">
      {events.map((e) => (
        <EventCard key={e.id} event={e} />
      ))}
    </div>
  );
}