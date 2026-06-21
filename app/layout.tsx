import "./globals.css";
import Link from "next/link";

export default function RootLayout({children}:{ children: React.ReactNode }){
  return (
    <html lang="ja">
      <body>
      <header className="SiteHeader">
        <Link href="/blog"className="HeaderLink">ブログ</Link>
        <Link href="/inquiry" className="HeaderLink">お問い合わせ</Link>  
      </header>
      
      <main>{children}</main>
      </body>
    </html>
  );
}

      