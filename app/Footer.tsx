import { Route } from "@/src/routing";
import Image from "next/image";
import Images from "@/components/images";

export const Footer = () => (
  <footer className="bg-gravel text-white pt-10 pb-20">
    <section className="max-w-content m-auto grid grid-cols-3 gap-7">
      <ul className="typo-rule border-white">
        <li>Unijazz, pobočný spolek Boskovice</li>
        <li>
          <a
            href="https://or.justice.cz/ias/ui/rejstrik-firma.vysledky?subjektId=888951&typ=PLATNY"
            className="typo-link"
          >
            IČ 03785921
          </a>
        </li>
        <li>
          <a href="https://mapy.cz/s/josamacace" className="typo-link">
            Hradní 3, 680 01 Boskovice
          </a>
        </li>
        <li>
          <a
            href="https://www.csob.cz/portal/firmy/bezne-ucty/transparentni-ucty/ucet/-/ta/269216621"
            className="typo-link"
          >
            269216621/0300
          </a>
        </li>
      </ul>
      <div className="typo-rule border-white flex flex-col gap-4">
        <Person
          name="Nikol Halamásková"
          title="předsedkyně spolku"
          mail="nikol@prostor.wtf"
        />
        <Person
          name="Anna Dračková"
          title="kavárna (rezervace kavárny)"
          mail="kavarna@prostor.wtf"
          phone="601 601 951"
        />
        <Person
          name="Marek Čech"
          title="dramaturgická rada (veřejné kulturní akce)"
          mail="drama@prostor.wtf"
        />
        <Person
          name="Filip Kvěch"
          title="produkce (soukromé pronájmy: narozeniny, svatba, firemní večírek apod.)"
          mail="produkce@prostor.wtf"
          phone="777 885 211"
        />
      </div>
      <div className="typo-rule border-white flex flex-row gap-4">
        <a href={Route.facebook}>
          <Image src={Images.Facebook} width={15} height={30} alt="Facebook" />
        </a>
        <a href={Route.instagram}>
          <Image src={Images.Instagram} width={30} height={30} alt="Facebook" />
        </a>
      </div>
    </section>
  </footer>
);

const Person = ({
  name,
  title,
  mail,
  phone,
}: {
  name: string;
  title: string;
  mail: string;
  phone?: string;
}) => (
  <div>
    {name}
    <br />
    <span className="typo-caption">{title}</span>
    <br />
    <a href={`mailto:${mail}`} className="typo-link">
      {mail}
    </a>
    <br />
    {phone}
  </div>
);
