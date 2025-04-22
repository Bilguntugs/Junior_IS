"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "./LoadingSign"; 

const pages = ['/', '/about', '/projects', '/experiences', '/contactMe'];

export default function InfiniteScroll({ children }: { children: React.ReactNode }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const isScrolling = useRef(false);
  const router = useRouter();

  const navigateToPage = async (newIndex: number) => {
    if (newIndex < 0 || newIndex >= pages.length) return;
    isScrolling.current = true;
    setLoading(true); // show spinner
    try {
      setPageIndex(newIndex);
      await router.push(pages[newIndex]);
    } catch (error) {
      console.error("Navigation error:", error);
    } finally {
      setTimeout(() => {
        isScrolling.current = false;
        setLoading(false); // hide spinner
      }, 1000); // lock and spinner duration
    }
  };

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isScrolling.current) return;

      if (event.deltaY > 0) {
        navigateToPage(pageIndex + 1);
      } else if (event.deltaY < 0) {
        navigateToPage(pageIndex - 1);
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [pageIndex, router]);

  return (
    <div>
      {loading && <LoadingSpinner />}
      {children}
    </div>
  );
}
