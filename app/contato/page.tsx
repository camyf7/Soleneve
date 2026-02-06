import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactContent from "@/components/contact-content";

export const metadata = {
  title: "Contato - Sol & Neve Caraguatatuba",
  description:
    "Entre em contato conosco ou visite nossa loja em Caraguatatuba. Horario de funcionamento, endereco e formas de contato.",
};

export default function ContatoPage() {
  return (
    <main>
      <Header />
      <ContactContent />
      <Footer />
    </main>
  );
}
