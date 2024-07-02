import Link from "next/link";

export default function AboutLayout({ children }) {
    return (
        <div>
            <nav className="mt-6">
                <nav>
                    <ul className="flex items-center gap-4">
                        <li><Link href='/about/mission'>Mission</Link></li>
                        |
                        <li><Link href='/about'>Vision</Link></li>
                    </ul>
                </nav>

            </nav>
            {children}
        </div>
    )
}