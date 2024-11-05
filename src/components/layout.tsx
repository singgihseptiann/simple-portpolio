import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto mt-20 max-w-4xl p-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
