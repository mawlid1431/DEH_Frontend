import { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from './ui/dropdown-menu';
import { useTheme } from '../lib/useTheme';

export function LanguageToggle() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const { theme } = useTheme();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'so', name: 'Soomaali', flag: '🇸🇴' },
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'fa', name: 'فارسی', flag: '🇦🇫' },
    { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾' }
  ];

  const handleLanguageChange = (languageCode: string) => {
    setCurrentLanguage(languageCode);
    // In a real implementation, this would trigger language switching
    console.log(`Language changed to: ${languageCode}`);
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0];
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className={`bg-transparent transition-all duration-300 ${
            theme === 'dark'
              ? 'border-white/20 text-white hover:bg-white/10'
              : 'border-black/20 text-black hover:bg-black/10'
          }`}
        >
          <Globe className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">{getCurrentLanguage().name}</span>
          <span className="sm:hidden">{getCurrentLanguage().flag}</span>
          <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className={`min-w-[200px] transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-gray-900 border-white/20 text-white'
            : 'bg-white border-black/20 text-black'
        }`}
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`cursor-pointer transition-colors duration-300 ${
              theme === 'dark'
                ? `hover:bg-white/10 ${currentLanguage === language.code ? 'bg-white/20' : ''}`
                : `hover:bg-black/10 ${currentLanguage === language.code ? 'bg-black/20' : ''}`
            }`}
          >
            <span className="mr-3 text-lg">{language.flag}</span>
            <span>{language.name}</span>
            {currentLanguage === language.code && (
              <span className="ml-auto text-green-400">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}