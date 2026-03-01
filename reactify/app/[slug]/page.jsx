import { notFound } from "next/navigation";
import { getPlaceBySlug } from "@/lib/places";
import Background from "@/components/Background";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const place = await getPlaceBySlug(slug);
  if (!place) return {};

  return {
    title: place.meta?.title || `${place.name || slug} — WeTap`,
    description: place.meta?.description || place.subtitle || "",
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const place = await getPlaceBySlug(slug);
  if (!place) notFound();

  const bg = place.theme?.background;

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: 24,
        color: "#e9eef7",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
      }}
    >
      <Background bg={bg} />

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h1 style={{ margin: 0 }}>{place.name}</h1>
        <p style={{ marginTop: 8, opacity: 0.9 }}>{place.subtitle}</p>
      </div>
    </main>
  );
}
