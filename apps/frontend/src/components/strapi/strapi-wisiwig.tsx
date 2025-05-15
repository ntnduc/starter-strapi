import type { GetValues } from "@starter-strapi/backend";

export default function StrapiWysiwig(props: GetValues<"block.wysiwig">) {
  return <div>{props.content}</div>;
}
