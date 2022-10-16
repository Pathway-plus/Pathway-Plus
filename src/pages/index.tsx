import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import {GiDiscussion} from "react-icons/gi";
import {AiOutlineFileSearch} from "react-icons/ai";
import {BiCalendarStar} from "react-icons/bi";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Pathway Plus</title>
				<meta name="description" content="Pathway Plus" />
				<link rel="icon" href="/favicon.ico" />
			</Head>	
			
			<main className={styles.main}>
				<h1 className={styles.title}>
          Welcome to Pathway Plus!
				</h1>
				<div>
				<p className={styles.description}>Planning to study abroad? This is the right place for your goal!</p>
				</div>
				<div className={styles.grid}>
				<button className="w-40 py-3 rounded-lg text-white bg-orange-500 hover:bg-orange-600 shadow-[0_0px_10px_2px_rgba(0,0,0,0.25)] hover:shadow-[0_0px_10px_2px_rgba(0,0,0,0.05)] transition-all">
				<a href="/consulting">
				Explore Now
				</a>
				</button>
				</div>

				

				<p className={styles.description}>
          Links: {" "}
					<a href="/consulting" className={styles.link}>consulting, </a>
					<a href="/consulting/booking" className={styles.link}>bookings, </a>
				</p>

				<p className={styles.description}>
				Our Services
			</p>

			
	
				<div className={styles.services}>
			
					<a href="/consulting" className={styles.card}>
					<GiDiscussion className={styles.icon1}></GiDiscussion>
						<h2>Consultation </h2>
						<p>Learn More &rarr;</p>
					</a>
					
					

					<a href="https://nextjs.org/learn" className={styles.card}>
						<AiOutlineFileSearch className={styles.icon2}/>
						<h2>Proofreading </h2>
						<p> Learn More &rarr;</p>
					</a>

					<a
						href="https://github.com/vercel/next.js/tree/canary/examples"
						className={styles.card}>
						<BiCalendarStar className={styles.icon3}/>
						<h2>Events </h2>
						<p>Learn More &rarr;</p>
					</a>
				</div>
			</main>

			<p className={styles.description}>
				Our Consultants
			</p>

		</div>
	);
};

export default Home;
