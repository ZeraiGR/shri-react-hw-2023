'use client';

import { FATAL_UNKNOWN_ERROR } from './constants';
import ErrorWrapper from './ui/ErrorWrapper/ErrorWrapper';
import Footer from './ui/Footer/Footer';
import Header from './ui/Header/Header';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <html>
      <body>
        <Header />

        <main className="container">
          <ErrorWrapper msg={FATAL_UNKNOWN_ERROR} />
        </main>

        <Footer />
      </body>
    </html>
  )
}