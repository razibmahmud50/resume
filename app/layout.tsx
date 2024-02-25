import PrelineScript from "./_components/PrelineScript";
import Script from "next/script";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Profile from "./_components/Profile";
import "./styles/swiper-bundle.min.css";
import "./globals.css";

export const metadata = {
	title: "Razib portfolio",
	description: "Pesonal portfolio website",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`relative h-screen overflow-y-auto overflow-x-hidden bg-light text-dark dark:bg-dark-2 dark:text-light `}>
				<div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-4 p-4 lg:gap-6 lg:p-6">
					<Header />
					<main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
						<Profile />
						{children}
					</main>
					<Footer />
				</div>
				<div className="shapes">
					<div
						className="fixed -left-1/2 -top-1/2 -z-10 animate-spin-very-slow xl:-left-[20%] xl:-top-1/3">
						<img src="images/gradient-1.png" alt="" className="" />
					</div>

					<div
						className="fixed -right-[50%] top-[10%] -z-10 animate-spin-very-slow xl:-right-[15%] xl:top-[10%]">
						<img src="images/gradient-2.png" alt="" className="" />
					</div>

					<div className="move-with-cursor fixed left-[10%] top-[20%] -z-10">
						<img src="icons/object-3d-1.png" alt="" className="" />
					</div>

					<div className="move-with-cursor fixed bottom-[20%] right-[10%] -z-10">
						<img src="icons/object-3d-2.png" alt="" className="" />
					</div>
				</div>
				<Script src="scripts/plugins/clipboard.min.js" />
				<Script src="scripts/main.js" />
			</body>
			<PrelineScript />
		</html>
	);
}
