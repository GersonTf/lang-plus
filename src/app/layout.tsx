import './globals.css';
import { roboto } from './fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={roboto.variable}>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
