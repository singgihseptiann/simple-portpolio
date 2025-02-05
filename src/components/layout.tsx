import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto mt-5 max-w-6xl overflow-hidden p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
