import localFont from "next/font/local";
import "./../globals.css";
import NavRouteList from "../components/navComponent/NavRouteList";
import Sidebar from "../components/sidebar/Sidebar";

const geistSans = localFont({
  src: "./../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Twitter-x ©️ || Home ",
  description: "What's Happening",
};

export default function RootLayout({ children, sidebar }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex gap-4 flex-col sm:flex-row lg:flex-row lg:items-start justify-center mx-auto w-full max-w-[85rem] md:px-24 lg:px-4 relative ">
          <nav className="bg-opacity-90 bg-gray-950 sm:bg-transparent sm:bg-opacity-100 w-full fixed bottom-0 left-0 right-0 sm:h-screen sm:sticky sm:top-0 sm:w-[100px] xl:w-[350px]">
            <NavRouteList />
          </nav>

          <main className="flex gap-2 flex-col lg:flex-row w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
