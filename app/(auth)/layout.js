import localFont from "next/font/local";
import "../globals.css";
import Footer from "@/app/components/footer/Footer";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "X What's happening...!?   || ©️",
  description: "Login or Create Id",
};

export default function AuthLayout({ children, modal }) {
  console.log("modal", modal);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className=" mx-auto ">
          {children} {modal}
        </main>
        <div className="absolute bottom-2 left-0 right-0">
          <Footer />
        </div>

        <div id="modal-root-content"></div>
      </body>
    </html>
  );
}
