import { allFutureEvents } from "@/src/events";
import { ContentType } from "@/src/utils";

export async function GET(): Promise<Response> {
  const formatDate = (d: Date) =>
    d.toLocaleDateString("cs-CZ", {
      weekday: "long",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  const events = await allFutureEvents();
  for (const event of events) {
    if (!event.datum && event.datumPresne) {
      event.datum = formatDate(event.datumPresne);
    }
  }
  return new Response(JSON.stringify(events, null, 2), {
    status: 200,
    headers: {
      "Content-Type": ContentType.json,
      "Cache-Control": "s-maxage=300, stale-while-revalidate",
    },
  });
}
