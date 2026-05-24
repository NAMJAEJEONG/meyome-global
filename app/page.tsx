export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=2000&auto=format&fit=crop"
        alt="Meyome Global"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.55))",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <p
          style={{
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            fontSize: "12px",
            marginBottom: "20px",
          }}
        >
          Meyome Seoul Archive
        </p>

        <h1
          style={{
            fontSize: "72px",
            lineHeight: "1",
            margin: 0,
            fontWeight: 700,
          }}
        >
          Meyome Global
        </h1>

        <p
          style={{
            maxWidth: "600px",
            marginTop: "24px",
            lineHeight: "1.7",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          Curated vintage bags and selected archive pieces from Seoul.
          Worldwide shipping via EMS and secure PayPal checkout.
        </p>

        <a
          href="#shop"
          style={{
            marginTop: "40px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "180px",
            height: "56px",
            borderRadius: "999px",
            background: "#fff",
            color: "#181818",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          SHOP NOW
        </a>
      </div>
    </main>
  );
}
