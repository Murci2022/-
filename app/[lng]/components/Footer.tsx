import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { defaultNS, languages } from "@/app/i18n/settings";
import { useTranslation } from "@/app/i18n";

export const Footer = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, defaultNS);
  return (
    <footer style={{ marginTop: 50 }}>
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{lng}</strong> to:{" "}
      </Trans>
      {languages
        .filter((l: string) => lng !== l)
        .map((l: string, index: number) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          );
        })}
    </footer>
  );
};
