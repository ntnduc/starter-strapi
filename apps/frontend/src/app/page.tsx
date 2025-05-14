import { Suspense } from "react";
import Hero from "./_layouts/hero";
import PageList from "./shared/page/page-list";

export default function Home() {
  return (
    <main className="space-y-24">
      <Hero />

      <PageList />
      <Suspense fallback={<div>loading...</div>}></Suspense>
    </main>
  );
}
