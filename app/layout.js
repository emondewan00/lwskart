import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Copyright from "@/components/shared/Copyright";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
const fonts = [poppins, roboto];
const fontsClassName = fonts.map((font) => font.variable).join(" ");

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontsClassName}>
        <Header />
        <Navbar />
        {children}
        <Footer />
        <Copyright />
      </body>
    </html>
  );
}
