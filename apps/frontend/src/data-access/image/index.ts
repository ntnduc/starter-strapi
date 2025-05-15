import { strapiPost } from "@/lib/api/strapi";

export async function uploadImage() {
  const response = await strapiPost("api::article.article", {
    data: {
      title: "Sample Title",
      slug: "sample-title",
      description: "Sample description",
      seo: {
        metaTitle: "Sample Meta Title",
        metaDescription: "Sample Meta Description",
      },
      image: 1, // Replace with the actual image ID
      author: "1", // Replace with the actual author ID
    },
  });

  return response;
}
