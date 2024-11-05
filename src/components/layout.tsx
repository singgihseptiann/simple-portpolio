import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto bg-red-500 dark:bg-slate-800">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
