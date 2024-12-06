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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex gap-4 flex-col sm:flex-row lg:flex-row lg:items-start items-center justify-center mx-auto w-full max-w-7xl  md:px-24 lg:px-4 ">
          <nav className=" w-full sm:w-2/12">
            <NavRouteList />
          </nav>

          <section className="flex gap-2 flex-col lg:flex-row w-full ">
            <main className="w-full border-r border-l border-gray-700 lg:w-[61%] ">
              {children}
            </main>
            <section className=" hidden lg:block w-full lg:w-[39%] px-4">
              <Sidebar />
            </section>
          </section>
        </div>
      </body>
    </html>
  );
}
