import type { NextPage } from 'next';
import Link from 'next/link';
import styles from './homePage.module.css';
import Head from 'next/head';

const ChemEng: NextPage = () => {
	return (
		<>
			<Head>
				<title>Chem Eng Home</title>
			</Head>

			<div className={styles.main}>
				<h1 className={styles.title}>Chem Eng Tools</h1>

				<div className={styles.linksContainer}>
					<h2 className={styles.linksTitle}>Links</h2>

					<Link href="/gases">
						<a className={styles.link}>Gas Conversion</a>
					</Link>
				</div>
			</div>
		</>
	);
};

export default ChemEng;
