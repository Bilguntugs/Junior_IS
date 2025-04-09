import Navbar from '@/components/Navbar';
import InfiniteScroll from '@/components/scroll';
import '@/cssFiles/globals.css';


export const metadata = {
  title: "Interactive Portfolio",
  description: "Interactive portfolio built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <InfiniteScroll>
          <div className="pt-16">{children}</div>
        </InfiniteScroll>
      </body>
    </html>
  );
}
