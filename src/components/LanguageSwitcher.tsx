import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      onClick={toggleLanguage}
      size="icon"
      variant="outline"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50 bg-primary text-primary-foreground border-2 border-accent hover:bg-primary/90"
      aria-label="Toggle Language"
    >
      <Languages className="h-6 w-6" />
      <span className="ml-1 text-xs font-semibold">{language.toUpperCase()}</span>
    </Button>
  );
};

export default LanguageSwitcher;
