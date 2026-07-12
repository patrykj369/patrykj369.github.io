import { useTranslation } from "react-i18next";
import { IconButton } from "../common/IconButton";
import { useLanguage } from "../../hooks/useLanguage";
import type { SupportedLanguage } from "../../i18n";

export const LanguageSwitcher = () => {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t("accessibility.languageSelection")}
      className="flex items-center gap-2"
    >
      {(["pl", "en"] as SupportedLanguage[]).map((code) => (
        <IconButton
          key={code}
          active={language === code}
          onClick={() => void setLanguage(code)}
          aria-pressed={language === code}
          className="h-11 min-w-11"
        >
          {code.toUpperCase()}
        </IconButton>
      ))}
    </div>
  );
};
