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

const isValidLanguage = (language: string | null): language is Language => {
  return language === "pt" || language === "en" || language === "es";
};

const getHtmlLang = (language: Language) => {
  if (language === "pt") return "pt-BR";
  if (language === "en") return "en-US";
  return "es-ES";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("pubird-language");

    if (isValidLanguage(savedLanguage)) {
      setLanguageState(savedLanguage);
      document.documentElement.lang = getHtmlLang(savedLanguage);
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem("pubird-language", newLanguage);
    document.documentElement.lang = getHtmlLang(newLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = getHtmlLang(language);
  }, [language]);

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
    throw new Error("useLanguage precisa ser usado dentro de LanguageProvider");
  }

  return context;
};