import type { Common } from "@starter-strapi/backend";

export type ApiContentTypeUid = Extract<
  Common.UID.ContentType,
  `api::${string}`
>;

export const API_ENDPOINTS: {
  [K in ApiContentTypeUid]: string;
} = {
  "api::page.page": "/pages",
  "api::article.article": "/articles",
};
