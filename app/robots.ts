import { MetadataRoute } from "next";
import { headers } from "next/headers";

const disallow: MetadataRoute.Robots = {
  rules: [
    {
      userAgent: "*",
      disallow: "/",
    },
  ],
};

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const host = headersList.get("host");

  return disallow;
}
