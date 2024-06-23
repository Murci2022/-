"use client";

import { useTranslation } from "@/app/i18n/client";
import { defaultNS } from "@/app/i18n/settings";

const LanguageSelector = ({
  onChange,
  lang,
}: {
  onChange: (lang: string) => void;
  lang: string;
}) => {
  const { i18n } = useTranslation(lang, defaultNS);
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    onChange(selectedLanguage);
  };

  return (
    <select onChange={handleLanguageChange} defaultValue={i18n.language}>
      <option value="en">ENGLISH</option>
      <option value="de">GERMAN</option>
      <option value="jp">日本語</option>
    </select>
  );
};

export default LanguageSelector;
