import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="p-6">
            <body className={inter.className}>
                <nav>
                    <ul className="flex items-center gap-4">
                        <li><Link href='/'>Home</Link></li>
                        |
                        <li><Link href='/about'>About</Link></li>
                    </ul>
                </nav>
                <hr></hr>
                {children}
            </body>
        </html>
    );
}
