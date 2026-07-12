import { useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGE_STORAGE_KEY, type SupportedLanguage } from "../i18n";

interface UseLanguageResult {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => Promise<void>;
}

const setMetaDescription = (description: string): void => {
  const tag = document.querySelector('meta[name="description"]');
  if (tag) {
    tag.setAttribute("content", description);
  }
};

const setCanonicalWithLanguage = (language: SupportedLanguage): void => {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", language);
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute(
      "href",
      `${url.origin}${url.pathname}?lang=${language}`,
    );
  }
};

export const useLanguage = (): UseLanguageResult => {
  const { i18n, t } = useTranslation();
  const language = (
    i18n.language.startsWith("en") ? "en" : "pl"
  ) as SupportedLanguage;

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t("meta.title");
    setMetaDescription(t("meta.description"));
    setCanonicalWithLanguage(language);

    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    history.replaceState(null, "", url.toString());
  }, [language, t]);

  const setLanguage = useCallback(
    async (language: SupportedLanguage) => {
      await i18n.changeLanguage(language);
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    },
    [i18n],
  );

  return useMemo(() => ({ language, setLanguage }), [language, setLanguage]);
};
