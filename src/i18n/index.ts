import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import pl from "./locales/pl.json";

export type SupportedLanguage = "pl" | "en";

export const LANGUAGE_STORAGE_KEY = "portfolio.language";

const SUPPORTED_LANGUAGES: SupportedLanguage[] = ["pl", "en"];

const getLanguageFromSearchParams = (): SupportedLanguage | null => {
  const url = new URL(window.location.href);
  const lang = url.searchParams.get("lang");

  if (lang && SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage)) {
    return lang as SupportedLanguage;
  }

  return null;
};

export const resolveInitialLanguage = (): SupportedLanguage => {
  const fromUrl = getLanguageFromSearchParams();
  if (fromUrl) {
    return fromUrl;
  }

  const fromStorage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (
    fromStorage &&
    SUPPORTED_LANGUAGES.includes(fromStorage as SupportedLanguage)
  ) {
    return fromStorage as SupportedLanguage;
  }

  const fromNavigator = navigator.language.toLowerCase();
  if (fromNavigator.startsWith("en")) {
    return "en";
  }

  return "pl";
};

void i18n.use(initReactI18next).init({
  lng: resolveInitialLanguage(),
  fallbackLng: "pl",
  resources: {
    pl: { translation: pl },
    en: { translation: en },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
