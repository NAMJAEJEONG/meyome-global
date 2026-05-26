import "./globals.css";

export const metadata = {
  title: "Meyome Global",
  description: "Global bag store from Seoul",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
