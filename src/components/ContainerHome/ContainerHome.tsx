import Head from 'next/head';
//import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
// import Link from 'next/link';
import styles from './ContainerHome.module.css';
import Image from 'next/image';

interface Props {
	href: string;
	text: string;
}

// export const NavItem: React.FC<Props> = ({ href, text }) => {
//	router is used to get the url
// 	const router = useRouter();
// 	const isActive = router.asPath === href;

// 	return (
// 		<Link href={href}>
// 			<a
// 				className={
// 					isActive
// 						? `${styles.link} ${styles.selected}`
// 						: `${styles.link} ${styles.notSelected}`
// 				}
// 			>
// 				<span className="capsize">{text}</span>
// 			</a>
// 		</Link>
// 	);
// };

export const ContainerHome: React.FC<any> = (props) => {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	// After mounting, we have access to the theme
	useEffect(() => setMounted(true), []);

	const { children, ...customMeta } = props;
	const meta = {
		title: 'Chem Eng',
		description: `Chemical engineering helper tools`,
		image: 'https://nextjslearning-liard.vercel.app/static/images/banner.png',
		type: 'website',
		...customMeta,
	};

	return (
		<div className={styles.layout}>
			<Head>
				<meta name="robots" content="follow, index" />
				<meta content={meta.description} name="description" />

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />

				<meta property="og:type" content={meta.type} />
				<meta property="og:site_name" content="Chem Eng" />
				<meta property="og:description" content={meta.description} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:image" content={meta.image} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="" />
				<meta name="twitter:title" content={meta.title} />
				<meta name="twitter:description" content={meta.description} />
				<meta name="twitter:image" content={meta.image} />
			</Head>
			<div className={styles.container}>
				<nav className={styles.nav}>
					<span>
						{mounted &&
							(resolvedTheme === 'dark' ? (
								<Image
									src="/tagsDark1.svg"
									alt="SRTags Logo"
									width={30}
									height={30}
								/>
							) : (
								<Image
									src="/tagsLight1.svg"
									alt="SRTags Logo"
									width={30}
									height={30}
								/>
							))}
					</span>
					{/* <NavItem href="/" text="Home" />
					<NavItem href="/gasconvert" text="GasConv" />
					<NavItem href="/comments" text="Comments" />
					<NavItem href="/gases" text="Gases" /> */}

					<button
						aria-label="Toggle Dark Mode"
						type="button"
						className={styles.button}
						onClick={() => {
							setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
						}}
					>
						{mounted &&
							(resolvedTheme === 'dark' ? (
								<svg width="24" height="24" viewBox="0 0 512 512">
									<path
										fill="currentColor"
										d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
									></path>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
								>
									<path
										fill="currentColor"
										d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
									/>
								</svg>
							))}
					</button>
				</nav>
			</div>
			<main className={styles.mainContent}>{children}</main>
		</div>
	);
};
