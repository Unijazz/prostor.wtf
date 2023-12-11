import { Route } from "@/src/routing";
import Image from "next/image";
import Images from "@/components/images";

export const FacebookLink = () => (
  <a href={Route.facebook}>
    <Image src={Images.Facebook} width={15} height={30} alt="Facebook" />
  </a>
);

export const InstagramLink = () => (
  <a href={Route.instagram}>
    <Image src={Images.Instagram} width={30} height={30} alt="Facebook" />
  </a>
);
