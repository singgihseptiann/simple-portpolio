import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto mt-5 max-w-6xl p-4 md:mt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
