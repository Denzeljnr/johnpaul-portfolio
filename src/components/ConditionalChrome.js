"use client";
import { usePathname } from "next/navigation";
import Nav from "./Nav";
import Footer from "./Footer";
import Aurora from "./Aurora";
import CursorGlow from "./CursorGlow";
import ScrollProgress from "./ScrollProgress";

export default function ConditionalChrome({ children }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/studio")) return <>{children}</>;

  return (
    <>
      <Aurora />
      <CursorGlow />
      <ScrollProgress />
      <Nav />
      {children}
      <Footer />
    </>
  );
}