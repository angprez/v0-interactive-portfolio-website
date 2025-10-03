// components/EventShowcase.tsx

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { eventDetails } from "@/lib/events-data";
import Image from "next/image";

export function EventShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {eventDetails.map((event) => (
        <Card key={event.title} className="overflow-hidden flex flex-col">
          <div className="relative w-full h-56">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-6 flex flex-col flex-grow">
            <p className="text-sm font-semibold text-primary mb-1">{event.organization}</p>
            <h3 className="text-xl font-bold text-foreground mb-2">
              {event.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">{event.date}</p>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              {event.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}