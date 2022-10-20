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
			<div className="py-10">
				<p className="px-10 text-xl text-left">
          Welcome To </p><p className="px-10 py-3 text-2xl text-bold text-left"> Pathway Plus!
				</p>
				<div>
				<p className=" px-10 py-5 text-xs">Planning to study abroad? This is the right <br/> place for your goal!</p>
				<br />
				</div>
				<div className="px-10">
				<button className="w-48 py-3 rounded-lg text-white bg-orange-500 hover:bg-orange-600 shadow-[0_0px_10px_2px_rgba(0,0,0,0.25)] hover:shadow-[0_0px_10px_2px_rgba(0,0,0,0.05)] transition-all">
				<a href="/consulting">
				Explore Now
				</a>
				</button>
				</div>
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

			
	
				<div className="px-5 py-5 grid grid-flow-col grid-rows-1 grid-cols-3 gap-4">
		
					<a href="/consulting">
					<div className="w-54 h-40 bg-green-400 rounded-lg shadow-lg border-b">
					<GiDiscussion className={styles.icon1}></GiDiscussion>
					</div>
					<div className="w-54 h-40 bg-white rounded-lg shadow-lg border-b">
						<p className = "text-sm text-center py-3 ">Consultation </p>
						<br />
						<p className = "text-xs text-center py-3 text-orange-600">Learn More &rarr;</p>
					</div>	
					</a>
					
					

					<a href="#">
						<div className="w-54 h-40 bg-blue-500 rounded-lg shadow-lg border-b">
						<AiOutlineFileSearch className={styles.icon2}/>
						</div>
						<div className="w-54 h-40 bg-white rounded-lg shadow-lg border-b">
						<p className= "text-sm text-center py-3">Proofreading </p>
						<br />
						<p className = "text-xs text-center py-3 text-orange-600"> Learn More &rarr;</p>
						</div>
					</a>

					<a href="#">
						<div className = "w-54 h-40 bg-purple-500 rounded-lg shadow-lg border-b">
						<BiCalendarStar className={styles.icon3}/>
						</div>
						<div className="w-54 h-40 bg-white rounded-lg shadow-lg border-b">
						<p className= "text-sm text-center py-3">Events </p>
						<br />
						<p className = "text-xs text-center py-3 text-orange-600">Learn More &rarr;</p>
						</div>
					</a>
				</div>
		
		

			<div className="h-32 bg-orange-500 text-white px-4 flex flex-row items-center">
					<p className="text-center text-sm border-r-2 basis-1/3"> Events 
					<br />
					<p className="py-3 text-xl">50+</p>
					</p>
					<p className="text-center text-sm border-r-2 basis-1/3" > Volunteers
					<br /> 
					<p className="py-3 text-xl">100+</p>
					</p>
					<p className="text-center text-sm basis-1/3" > Total Proofreading
					<br /> 
					<p className="py-3 text-xl">500+</p>
					</p>

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