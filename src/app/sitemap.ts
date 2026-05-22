
import { MetadataRoute } from "next";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  return [
    {
      url: `${process.env.BASE_URL}/home`,
      lastModified: new Date(),
        changeFrequency: "monthly",
  priority: 1,
    },
    {
      url: `${process.env.BASE_URL}/`,
      lastModified: new Date(),
        changeFrequency: "monthly",
  priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/terms-and-condition`,
      lastModified: new Date(),
        changeFrequency: "monthly",
  priority: 0.8,
    },
    {
        url: `${process.env.BASE_URL}/privacy-policy`,
        lastModified: new Date(),
          changeFrequency: "monthly",
    priority: 0.8,
    }
  ];
}
