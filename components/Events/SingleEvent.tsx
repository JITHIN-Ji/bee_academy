import Image from "next/image";
import { Event } from "@/types/event";

const SingleEvent = ({ event }: { event: Event }) => {
  return (
    <div className="group overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="relative mb-4 h-56 w-full overflow-hidden rounded-md">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="mb-1 text-lg font-semibold text-body-color dark:text-white">{event.title}</h3>
      <p className="mb-2 text-sm text-body-color/70 dark:text-white/80">{event.date} • {event.location}</p>
      <p className="text-sm text-body-color/70 dark:text-white/80">{event.description}</p>
    </div>
  );
};

export default SingleEvent;
