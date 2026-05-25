// This page demonstrates how to integrate your Next.js front‑end with the
// Cafe24 Front API so that your global site can display live product data
// from your main Meyome store (meyome.kr).  It is written as a server
// component and uses environment variables to store sensitive credentials.
//
// Before using this component you must create a `.env.local` file at the
// root of your project with the following variables:
//
// NEXT_PUBLIC_CAFE24_MALL_ID=meyome               # your mall ID
// NEXT_PUBLIC_CAFE24_CLIENT_ID=<client_id>        # your Front API client id
// NEXT_PUBLIC_CAFE24_ACCESS_TOKEN=<access_token>  # your Front API access token
//
// Visit https://developers.cafe24.com for instructions on registering
// an app, obtaining your client id and generating an access token.
// Make sure the token has the `mall.read_product` scope.

import React from 'react';

// Define a TypeScript interface to describe the product structure we expect
// from the Cafe24 API.  Only the fields we use are defined here.
interface Cafe24Product {
  product_no: number;
  product_code: string;
  product_name: string;
  price: string;
  selling: string;
  list_image?: string;
}

// Because this component is an async server component, it can perform
// fetches directly.  The `fetch` call runs on the server, so you don't
// expose your token to the client.
async function getProducts(): Promise<Cafe24Product[]> {
  const mallId = process.env.NEXT_PUBLIC_CAFE24_MALL_ID;
  const accessToken = process.env.NEXT_PUBLIC_CAFE24_ACCESS_TOKEN;
  const clientId = process.env.NEXT_PUBLIC_CAFE24_CLIENT_ID;

  if (!mallId || !accessToken || !clientId) {
    console.warn(
      'Cafe24 API credentials are missing. Check your .env.local file.'
    );
    return [];
  }

  try {
    const res = await fetch(
      `https://${mallId}.cafe24api.com/api/v2/products?display=50&embed=images`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'X-Cafe24-Client-Id': clientId,
        },
        // Revalidate the data at most once per hour.  Adjust as needed.
        next: { revalidate: 60 * 60 },
      }
    );
    const data = await res.json();
    return data?.products ?? [];
  } catch (err) {
    console.error('Failed to fetch products:', err);
    return [];
  }
}

export default async function HomePage() {
  const products = await getProducts();
  return (
    <main
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: '#fff8fb',
        paddingBottom: '80px',
      }}
    >
      {/* Hero section with background image and tagline */}
      <section
        style={{
          minHeight: '80vh',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center',
          padding: '20px',
          overflow: 'hidden',
        }}
      >
        <img
          src='https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=2000&auto=format&fit=crop'
          alt='Meyome Global'
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.55))',
            zIndex: 1,
          }}
        />
        <div
          style={{ position: 'relative', zIndex: 2, paddingTop: '40px' }}
        >
          <p
            style={{
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              fontSize: '12px',
              marginBottom: '20px',
            }}
          >
            Meyome Seoul Archive
          </p>
          <h1
            style={{
              fontSize: '64px',
              lineHeight: '1',
              margin: 0,
              fontWeight: 700,
            }}
          >
            Meyome Global
          </h1>
          <p
            style={{
              maxWidth: '600px',
              marginTop: '24px',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.85)',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Vintage bags, jelly pieces and strange little treasures selected
            by Meyome. We ship worldwide via EMS with PayPal checkout
            available.
          </p>
          <a
            href='#shop'
            style={{
              marginTop: '40px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '200px',
              height: '56px',
              borderRadius: '999px',
              background: '#fff',
              color: '#181818',
              textDecoration: 'none',
              fontWeight: 700,
            }}
          >
            SHOP NOW
          </a>
        </div>
      </section>

      {/* Shop section listing products from Cafe24 */}
      <section id='shop' style={{ padding: '40px 20px' }}>
        <h2
          style={{ textAlign: 'center', fontSize: '32px', marginBottom: 12 }}
        >
          Available Pieces
        </h2>
        {products.length === 0 && (
          <p style={{ textAlign: 'center', color: '#666' }}>
            No products found. Check your API credentials or add products to
            your store.
          </p>
        )}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {products.map((item) => {
            // Derive a link to the product on your main store.  The Cafe24
            // product_code is used in the URL on meyome.kr.  Adjust the
            // template below if your store uses a different URL scheme.
            const productUrl = `https://www.meyome.kr/product/${item.product_code}/`; // or your product detail URL
            const imageSrc = item.list_image ||
              'https://placehold.co/300x300?text=No+Image';
            return (
              <div
                key={item.product_no}
                style={{
                  border: '1px solid #eee',
                  borderRadius: 16,
                  padding: 16,
                  background: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    paddingBottom: '100%',
                    position: 'relative',
                    borderRadius: 12,
                    overflow: 'hidden',
                    background: '#f7f7f7',
                  }}
                >
                  <img
                    src={imageSrc}
                    alt={item.product_name}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <h3 style={{ fontSize: 20, margin: '16px 0 4px' }}>
                  {item.product_name}
                </h3>
                <p style={{ fontWeight: 700, margin: 0 }}>{item.price}</p>
                <a
                  href={productUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{
                    marginTop: 'auto',
                    display: 'inline-block',
                    padding: '12px 0',
                    fontWeight: 700,
                    color: '#181818',
                  }}
                >
                  View on Meyome.kr →
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
