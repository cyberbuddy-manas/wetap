import { NextResponse } from "next/server";

export function proxy(req) {
  const host = req.headers.get("host") || "";
  const hostname = host.split(":")[0];

  if (hostname === "wetap.pro" || hostname === "www.wetap.pro") {
    return NextResponse.next();
  }

  if (!hostname.endsWith(".wetap.pro")) {
    return NextResponse.next();
  }

  const slug = hostname.replace(".wetap.pro", "");
  const url = req.nextUrl.clone();
  url.pathname = `/${slug}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)"],
};
