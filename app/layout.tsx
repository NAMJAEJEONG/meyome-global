export const metadata = {
  title: "Meyome Global",
  description: "Global vintage bag store from Seoul",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "#f7f4ef",
          color: "#181818",
          fontFamily:
            "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
