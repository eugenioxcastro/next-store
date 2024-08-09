import { Roboto } from 'next/font/google';
import { Inter } from "next/font/google";
import { Header } from "../components/shared/Header/Header";
import { Footer } from "../components/shared/Footer";
import '../sass/globals.sass'

const roboto = Roboto({
	weight: ['100', '300', '500'],
	subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en">
			<body className={roboto.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
