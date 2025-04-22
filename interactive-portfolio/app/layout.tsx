import Navbar from '@/components/Navbar';
import InfiniteScroll from '@/components/scroll';
import '@/cssFiles/globals.css';
import '@/cssFiles/homepage.css';
import '@/cssFiles/loading.css';
import '@/cssFiles/navbar.css';

export const metadata = {
  title: "Interactive Portfolio",
  description: "Interactive portfolio built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <InfiniteScroll>
          <div className="layout-wrapper">
            <div className="layout-container">
              {children}
            </div>
          </div>
        </InfiniteScroll>
      </body>
    </html>
  );
}
