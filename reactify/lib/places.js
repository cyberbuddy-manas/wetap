import { places } from "@/data";

export async function getPlaceBySlug(slug) {
  return places[slug] ?? null;
}
