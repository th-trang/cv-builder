import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import { headers } from 'next/headers';

// Import messages directly
import en from '../messages/en.json';
import vi from '../messages/vi.json';
import de from '../messages/de.json';

// Can be imported from a shared config
const locales = ['en', 'vi', 'de'];

const messages = {
  en,
  vi,
  de
};

export default getRequestConfig(async () => {
  const locale = (await headers()).get('X-NEXT-INTL-LOCALE');
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    locale: locale as string,
    messages: messages[locale as keyof typeof messages]
  };
});
