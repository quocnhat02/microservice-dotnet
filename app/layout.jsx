import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className='bg-gray-300 p-4'>
          <nav>
            <ul className='flex gap-5'>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/about/team"}>Team</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  )
}