import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { getPage, getPages } from "../components/FetchData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Awesome Site!",
  description: "Generated by Nextjs & Sanity",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //get all of our pages
  const pages = await getPages();

  return (
    <html lang="en">
      <body className="max-w-5xl mx-auto p-10 ">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-xl font-bold">
            Rizwan
          </Link>
          <div className="flex item-center gap-5 text-sm text-gray-600 ">
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="hover:underline">
                {page.slug}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
