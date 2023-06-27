import classNames from "classnames";
import {Metadata} from "next";
import Header from "@/app/ui/Header/Header";
import Footer from "@/app/ui/Footer/Footer";
import {roboto, sf_pro} from "@/app/fonts";
import { StoreProvider } from "@/app/ui/StoreProvider/StoreProvider";
import './globals.css';

export const metadata: Metadata  = {
  title: {
    template: 'Билетопоиск - %s',
    default: 'Билетопоиск'
  },
  description: 'Cервис поĸупĸи билетов в ĸино',
  keywords: ['Билет', 'Поиск', 'Кино'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <html lang="ru">
          <body className={classNames(roboto.variable, sf_pro.variable)}>
            <StoreProvider>
              <Header />

              <main className="container">
                {children}
              </main>

              <div id="modals">
                {/* Wrapper for modals  */}
              </div>

              <div id="dropdowns">
                {/* Wrapper for dropdowns  */}
              </div>

              <Footer />
            </StoreProvider>
          </body>
        </html>
  )
}
