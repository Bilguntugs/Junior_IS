"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "./LoadingSign";

const pages = ['/', '/about', '/projects', '/experiences', '/contactMe'];

export default function InfiniteScroll({ children }: { children: React.ReactNode }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const isNavigating = useRef(false);
  const router = useRouter();

  const navigateToPage = useCallback((newIndex: number) => {
    if (newIndex < 0 || newIndex >= pages.length || isNavigating.current) return;

    isNavigating.current = true;
    setLoading(true);
    setPageIndex(newIndex);
    router.push(pages[newIndex]);

    setTimeout(() => {
      window.scrollTo(0, 0);
      setLoading(false);
      setTimeout(() => {
        isNavigating.current = false;
      }, 500); // Cooldown after navigation
    }, 1000); // Loading duration
  }, [router]);

  const handleWheel = useCallback((event: WheelEvent) => {
    if (isNavigating.current || loading) return;

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const isAtBottom = scrollTop + windowHeight >= documentHeight - 5;
    const isAtTop = scrollTop <= 5;

    if (event.deltaY > 0) {
      // User scrolled DOWN
      if (isAtBottom || documentHeight <= windowHeight + 5) {
        navigateToPage(pageIndex + 1);
      }
    } else if (event.deltaY < 0) {
      // User scrolled UP
      if (isAtTop) {
        navigateToPage(pageIndex - 1);
      }
    }
  }, [pageIndex, loading, navigateToPage]);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  return (
    <div style={{ position: 'relative' }}>
      {loading && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 9999
        }}>
          <LoadingSpinner />
        </div>
      )}
      {children}
    </div>
  );
}
