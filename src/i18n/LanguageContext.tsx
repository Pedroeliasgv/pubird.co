import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { translations, type Language } from "./translations";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof translations)[Language];
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

const isValidLanguage = (
  language: string | null
): language is Language => {
  return language === "en" || language === "pt";
};

const getHtmlLang = (language: Language) => {
  return language === "pt" ? "pt-BR" : "en-US";
};

export const LanguageProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  // Inglês como idioma padrão
  const [language, setLanguageState] =
    useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem(
      "pubird-language"
    );

    if (isValidLanguage(savedLanguage)) {
      setLanguageState(savedLanguage);
      document.documentElement.lang =
        getHtmlLang(savedLanguage);
    } else {
      document.documentElement.lang = "en-US";
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);

    localStorage.setItem(
      "pubird-language",
      newLanguage
    );

    document.documentElement.lang =
      getHtmlLang(newLanguage);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider."
    );
  }

  return context;
};