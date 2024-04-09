import { Event, allFutureEvents } from "@/src/events";
import { ContentType } from "@/src/utils";

export async function GET(): Promise<Response> {
  const events = await allFutureEvents();
  const text = events
    .filter((e) => e.datumPresne != null)
    .filter((e) => !e.zruseno)
    .map(viewEvent)
    .join("\n");
  return new Response(text, {
    status: 200,
    headers: {
      "Content-Type": ContentType.plain,
    },
  });
}

function viewEvent(event: Event): string {
  const items = event.datum
    ? [event.datum, event.jmeno, event.info, ""]
    : [
        viewDate(event.datumPresne!),
        viewTime(event.datumPresne!),
        event.jmeno,
        event.info,
        "",
      ];
  return items.join("\n");
}

function viewDate(d: Date): string {
  return d.toLocaleDateString("cs-CZ", {
    weekday: "short",
    month: "numeric",
    day: "numeric",
  });
}

function viewTime(d: Date): string {
  return d.toLocaleTimeString("cs-CZ", {
    hour: "numeric",
    minute: "numeric",
  });
}
