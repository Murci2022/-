import { useTranslation } from "../i18n";
import { defaultNS } from "../i18n/settings";
import { Header } from "./components/container/1Hero/Hero";
import About from "./components/container/2About/About";
import Awards from "./components/container/6Awards/Awards";
import "./page.module.css";

export default async function Page({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, defaultNS);
  return (
    <>
      <Header lng={lng} />
      <About />
      <Awards lng={lng} />
    </>
  );
}
