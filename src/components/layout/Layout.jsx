import GrainField from "../decor/GrainField.jsx";
import AnnouncementBar from "./AnnouncementBar.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function Layout({ children }) {
  return (
    <GrainField>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink focus:shadow-card">Skip to content</a>
      <AnnouncementBar />
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </GrainField>
  );
}
