import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Pathway Plus</title>
				<meta name="description" content="Pathway Plus" />
				<link rel="icon" href="/favicon.ico" />
			</Head>	
			<div className={styles.container}>
			<header className={styles.header}>
				<a>
          Header
				</a>
			</header>
		</div>
			
			<main className={styles.main}>
				<h1 className={styles.title}>
          Welcome to Pathway Plus!
				</h1>
				<div>
				<p className={styles.description}>Planning to study abroad? This is the right place for your goal!</p>
				</div>
				<div className={styles.grid}>
					<a href="#" className={styles.card}>
						<h2>Explore Now</h2>
					</a>
				</div>

				

				<p className={styles.description}>
          Links: {" "}
					<a href="/consulting" className={styles.link}>consulting, </a>
					<a href="/consulting/booking" className={styles.link}>bookings, </a>
				</p>

				<p className={styles.description}>
				Our Services
			</p>

				<div className={styles.grid}>
					<a href="/consulting" className={styles.card}>
						<h2>Consultation &rarr;</h2>
						<p>Find in-depth information about Next.js features and API.</p>
					</a>

					<a href="https://nextjs.org/learn" className={styles.card}>
						<h2>Proofreading &rarr;</h2>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</a>

					<a
						href="https://github.com/vercel/next.js/tree/canary/examples"
						className={styles.card}
					>
						<h2>Events &rarr;</h2>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>
				</div>
			</main>

			<p className={styles.description}>
				Our Consultants
			</p>

			<footer className={styles.footer}>
				<a>
          Footer
				</a>
			</footer>
		</div>
	);
};

export default Home;
