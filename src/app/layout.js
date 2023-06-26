import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeContextProvider } from '@/app/Context/store'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book Store",
  description: "Book store using google book api",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={inter.className}>
         <ThemeContextProvider>
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
