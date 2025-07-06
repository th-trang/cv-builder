import { 
  Inter,
  Roboto,
  Poppins, 
  Nunito, 
  Lato, 
  Montserrat,
  Open_Sans,
  Raleway,
  Playfair_Display,
  Merriweather,
  Source_Sans_3,
  Fira_Code,
  JetBrains_Mono,
  Space_Mono,
  Source_Code_Pro,
  Inconsolata
} from 'next/font/google';

// Sans-serif fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});

// Serif fonts
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sourcesans',
});

// Monospace fonts
const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-firacode',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-spacemono',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-sourcecodepro',
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
});

// Export font dictionary
export const fonts = {
  // Sans-serif
  inter,
  roboto,
  poppins,
  nunito,
  lato,
  montserrat,
  openSans,
  raleway,
  
  // Serif
  playfairDisplay,
  merriweather,
  sourceSans,
  
  // Monospace
  firaCode,
  jetbrainsMono,
  spaceMono,
  sourceCodePro,
  inconsolata
};

// Helper to get all font variables as a class string
export function getFontVariablesClass() {
  return Object.values(fonts).map(font => font.variable).join(' ');
}
