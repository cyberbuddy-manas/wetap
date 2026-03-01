import { notFound } from "next/navigation";
import { getPlaceBySlug } from "@/lib/places";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const place = await getPlaceBySlug(slug);
  if (!place) return {};

  return {
    title: place.meta?.title || `${place.name || slug} — WeTap`,
    description: place.meta?.description || place.subtitle || "",
    alternates: { canonical: `https://wetap.pro/${slug}` },
    openGraph: {
      title: place.meta?.title || `${place.name || slug} — WeTap`,
      description: place.meta?.description || place.subtitle || "",
      url: `https://wetap.pro/${slug}`,
      siteName: "WeTap",
      type: "website",
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const place = await getPlaceBySlug(slug);
  if (!place) notFound();

  return (
    <div
      style={{
        padding: 24,
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
      }}
    >
      <h1 style={{ margin: 0 }}>{place.name}</h1>
      <p style={{ marginTop: 8 }}>{place.subtitle}</p>
      <p style={{ marginTop: 16, opacity: 0.6 }}>/{place.slug}</p>
    </div>
  );
}
