import "../styles/global.css";
import Header from "../components/UI/common/Header/Header";
import Footer from "../components/UI/common/Footer";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="layout">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
