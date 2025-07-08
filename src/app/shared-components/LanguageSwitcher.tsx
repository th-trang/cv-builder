'use client'

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface LanguageSwitcherProps {
  currentLocale: string;
  variant?: 'header' | 'floating';
  className?: string;
}

const LanguageSwitcher = ({ currentLocale, variant = 'header', className = '' }: LanguageSwitcherProps) => {
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  const [isLanguageChanging, setIsLanguageChanging] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Language configurations
  const languages = [
    { code: 'en', label: 'EN', fullName: 'English' },
    { code: 'vi', label: 'VN', fullName: 'Vietnamese' }, 
    { code: 'de', label: 'DE', fullName: 'German' }
  ];

  // Handle language switch with animation
  const handleLanguageSwitch = () => {
    if (isLanguageChanging) return;
    
    setIsLanguageChanging(true);
    
    const currentIndex = languages.findIndex(lang => lang.code === currentLocale);
    const nextIndex = (currentIndex + 1) % languages.length;
    const nextLanguage = languages[nextIndex];
    
    // Update the language label after a brief delay for animation
    setTimeout(() => {
      setCurrentLanguage(nextLanguage.label);
      
      // Navigate to new locale
      const newPath = pathname.replace(`/${currentLocale}`, `/${nextLanguage.code}`);
      router.push(newPath);
      
      setIsLanguageChanging(false);
    }, 150);
  };

  useEffect(() => {
    const currentLang = languages.find(lang => lang.code === currentLocale);
    if (currentLang) {
      setCurrentLanguage(currentLang.label);
    }
  }, [currentLocale]);

  if (variant === 'floating') {
    return (
      <div 
        onClick={handleLanguageSwitch}
        className={`group relative cursor-pointer transition-all duration-300 ease-out overflow-hidden ${className}`}
      >
        <div className="flex items-center backdrop-blur-xl rounded-2xl p-3 transition-all duration-300 shadow-2xl">
          {/* Language Icon */}
          <div className="flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19.06 18.67L16.92 14.4L14.78 18.67" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15.17 17.9099H18.69" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16.92 22.0001C14.12 22.0001 11.84 19.73 11.84 16.92C11.84 14.12 14.11 11.8401 16.92 11.8401C19.72 11.8401 22 14.11 22 16.92C22 19.73 19.73 22.0001 16.92 22.0001Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.02 2H8.94C11.01 2 12.01 3.00002 11.96 5.02002V8.94C12.01 11.01 11.01 12.01 8.94 11.96H5.02C3 12 2 11 2 8.92999V5.01001C2 3.00001 3 2 5.02 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.00995 5.84985H4.94995" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.96997 5.16992V5.84991" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.98994 5.83997C7.98994 7.58997 6.61994 9.00995 4.93994 9.00995" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.0099 9.01001C8.2799 9.01001 7.61991 8.62 7.15991 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 15C2 18.87 5.13 22 9 22L7.95 20.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          
          {/* Language Text with Swipe Animation */}
          <div className="relative w-8 h-5 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentLanguage}
                className="absolute inset-0 text-white text-sm font-semibold flex items-center justify-center"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {currentLanguage}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  }

  // Header variant
  return (
    <div className={`group relative cursor-pointer transition-all duration-500 ease-out overflow-hidden ${className}`}>
      <div 
        onClick={handleLanguageSwitch}
        className="flex items-center hover:bg-[#3d3dd6] rounded-xl transition-all duration-300"
      >
        <div className="p-2.5 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19.06 18.67L16.92 14.4L14.78 18.67" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.17 17.9099H18.69" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.92 22.0001C14.12 22.0001 11.84 19.73 11.84 16.92C11.84 14.12 14.11 11.8401 16.92 11.8401C19.72 11.8401 22 14.11 22 16.92C22 19.73 19.73 22.0001 16.92 22.0001Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.02 2H8.94C11.01 2 12.01 3.00002 11.96 5.02002V8.94C12.01 11.01 11.01 12.01 8.94 11.96H5.02C3 12 2 11 2 8.92999V5.01001C2 3.00001 3 2 5.02 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.00995 5.84985H4.94995" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.96997 5.16992V5.84991" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.98994 5.83997C7.98994 7.58997 6.61994 9.00995 4.93994 9.00995" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.0099 9.01001C8.2799 9.01001 7.61991 8.62 7.15991 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 15C2 18.87 5.13 22 9 22L7.95 20.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="relative w-8 h-5 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentLanguage}
              className="absolute inset-0 text-white text-xs font-medium flex items-center justify-center"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -30, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {currentLanguage}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
