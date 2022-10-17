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
				<p className="text-xl text-left">
          Welcome To </p><p className="text-2xl text-left"> Pathway Plus!
				</p>
				<div>
				<p className="py-5 text-sm">Planning to study abroad? This is the right place for your goal!</p>
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

				<p className="text-sm font-semibold text-center">
				Our Services
			</p>
			<br />

			
	
				<div className="px-5 py-5 grid grid-flow-col grid-rows-1 grid-cols-3 gap-8">
		
					<a href="/consulting" className="w-64 h-72 py-10 px-20 bg-white rounded shadow border-b">
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

			<div className="py-20 text-white text-center bg-orange-600 transition-all">

				<span>
					Events 50+ 
				</span>
				<span>
					Volunteers 100+
				</span>
				<span>
					Total Proofreading 500+
				</span>


			</div>

			
			<div>
			<p className="px-5 py-5 text-center font-semibold text-sm">
				Our Consultants
				<br />
				Find More Consultants &rarr;
				<br />
				pictures
			</p>
			</div>

			<div>
			<p className="px-5 py-5 text-center font-semibold text-sm">
				Testimonials
				<br />
				gird and pics
			</p>
			</div>
			
			<div>
			<p className="px-5 py-5 text-center font-semibold text-sm">
				Latest Blogs
				<br />
				See More Blogs &rarr;
				<br />
				girds
			</p>
			</div>

		</div>
	);
};

export default Home;