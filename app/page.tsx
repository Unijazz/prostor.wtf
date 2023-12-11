import { type Event, allFutureEvents } from "@/src/events";
import { Route } from "@/src/routing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: `Prostor je kavárna, kulturní a komunitní centrum pro širokou
  veřejnost a platforma pro aktivní lidi s chutí a nápadem. Pořádáme koncerty,
  divadla, besedy, výstavy, promítání, akce pro děti a mnohem víc. Vítáme
  každého, kdo se chce připojit s vlastní akcí a vytvářet s námi Prostor
  pro komunitní život, umění, vzdělávání, práci i nezávazné setkávání.`,
};

const Page = async () => {
  const events = await allFutureEvents();
  return (
    <main className="m-auto max-w-content py-20 flex flex-col gap-20">
      <IntroSection />
      <EventsSection events={events} />
      <SupportSection />
      <JoinSection />
    </main>
  );
};

const IntroSection = () => (
  <section>
    <h1 className="typo-title mb-8 text-center">Prostor</h1>
    <p>{metadata.description}</p>
    <p>
      Prostor funguje pod hlavičkou pobočného spolku Unijazz Boskovice. Ideově a
      stylově navazujeme na největší alternativní akci ve městě, na které se
      Unijazz Boskovice také podílí:{" "}
      <a href={Route.festival} className="typo-link">
        festivalu Boskovice
      </a>
      . Podrobnější informace o aktuálním dění sledujte na našich profilech na{" "}
      <a href={Route.facebook} className="typo-link">
        Facebooku
      </a>{" "}
      a{" "}
      <a href={Route.instagram} className="typo-link">
        Instagramu
      </a>
      .
    </p>
  </section>
);

const EventsSection = ({ events }: { events: Event[] }) => (
  <section>
    <h2 className="typo-title2 mb-8 text-center">Program</h2>
    <div className="mb-8 columns-3 gap-7">
      {events.map((e) => (
        <EventBox key={e.jmeno} event={e} />
      ))}
    </div>
    <h3 className="typo-title3">Přihlas se k odběru programu emailem</h3>
    <p>
      Chceš dostávat pravidelné informace o programu a mít tak přehled o dění v
      Prostoru? Nech nám na sebe emailovou adresu a přihlaš se k odběru, ať ti
      můžeme čas od času napsat, co je v Prostoru nového. Adresu použijeme pouze
      pro informace týkající se Prostoru a neposkytneme ji nikomu jinému.
    </p>
  </section>
);

const EventBox = ({ event }: { event: Event }) => {
  const dateAndTimeFormatter = new Intl.DateTimeFormat("cs-CZ", {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="break-inside-avoid pl-4 pb-4 border-black border-l-2">
      {event.datumPresne && (
        <p>{dateAndTimeFormatter.format(event.datumPresne)}</p>
      )}
      <h3 className="typo-title3">{event.jmeno}</h3>
      {event.zanr && (
        <p className="typo-caption py-1">
          <span className="rounded-xl border-black border-[1px] px-2">
            {event.zanr}
          </span>
        </p>
      )}
      <p className="typo-caption">{event.info}</p>
    </div>
  );
};

const SupportSection = () => (
  <section>
    <h2 className="typo-title2">Podpoř Prostor</h2>
    <p className="typo-subtitle">a staň se podporovatelem spolku</p>
    <p>
      Prostor je provozován sdružením Unijazz, respektive jeho pobočným spolkem
      Boskovice. Je založen na dobrovolnické práci a jeho jediným stálým příjmem
      jsou příspěvky členů spolku a nájem kavárny. Je ale jasné, že provoz
      takového centra a pořádání dobré kultury stojí peníze – už jen za nájem a
      energie to jsou stovky tisíc ročně.
    </p>
    <p>
      Za rok a půl provozu od léta 2019 do podzimu 2020 se nám podařilo v
      Prostoru uspořádat více než 200 akcí, které zaujaly přes 7000 návštěvníků.
      To všechno s minimálním rozpočtem a maximálním zapojením dobrovolníků a
      členů spolku. Pokud do Prostoru alespoň párkrát do roka zavítáte, zvažte,
      jestli vám nestojí za drobný příspěvek, ideálně pravidelný.
    </p>
    <p>
      Dary od sympatizantů jsou pro nás jedním z důležitých zdrojů, které
      pomáhají udržet Prostor v chodu. Podpořte svůj oblíbený podnik i vy!
    </p>
  </section>
);

const JoinSection = () => (
  <section>
    <h2 className="typo-title2">Pojď do Prostoru</h2>
    <p className="typo-subtitle">a staň se členem spolku</p>
    <p>
      Naším cílem není jen provozovat komunitní a kulturní centrum, ale
      především vytvářet soudržnou komunitu, která se na životě centra podílí a
      vytváří ho.
    </p>
    <p>
      Stát se členem spolku Unijazz Boskovice zahrnuje nejrůznější konkrétní
      výhody:
    </p>
    <ul>
      <li>
        možnost uspořádat si soukromou akci v Prostoru za zvýhodněných podmínek
      </li>
      <li>sleva na akce pořádané Unijazzem Boskovice</li>
      <li>jednou za rok pozvání na párty pro členy</li>
      <li>pravidelné zasílání magazínu UNI</li>
      <li>
        výrazná sleva na permanentku festivalu pro židovskou čtvrť Boskovice
      </li>
    </ul>
    <p>Členství v Unijazzu Boskovice znamená také ochotu přispívat.</p>
    <p>
      Členský příspěvek na činnost činí 200 korun za měsíc ve standardní výši a
      500 korun či více za měsíc ve variantě mecenášské.
    </p>
    <p>
      Pokud máš chuť se v Prostoru a případně v další činnosti Unijazzu
      Boskovice angažovat, neváhej požádat o členství. Vše potřebné je možné
      vyřídit v{" "}
      <a
        className="typo-link"
        href="https://airtable.com/approUUMf4GjsMYRD/shrfndoKWDub91wzT"
      >
        registračním formuláři pro členy spolku
      </a>
      .
    </p>
  </section>
);

export default Page;
