async function getProducts() {
  const res = await fetch(
    "https://blanchedalmond-leopard-753332.hostingersite.com/api/products?output_format=JSON&ws_key=7HZ82T15LCDS64EHG2IEC3YKFVQ1EBE4",
    { cache: "no-store" }
  );

  return res.json();
}

export default async function Home() {
  const data = await getProducts();

  return (
    <main style={{ padding: 40 }}>
      <h1>Productos desde PrestaShop</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
