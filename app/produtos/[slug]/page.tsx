import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/lib/products";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CategoryDetail from "@/components/category-detail";

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Produto nao encontrado" };
  return {
    title: `${category.name} - Sol & Neve Caraguatatuba`,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <main>
      <Header />
      <CategoryDetail category={category} />
      <Footer />
    </main>
  );
}
