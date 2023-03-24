import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "/styles/Home.module.scss";
import AngledDiv from "@/components/angledDiv/AngledDiv";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Zachary Jowett Portfolio</title>
				<meta name="Zachary Jowett's Portfolio" content="" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js" />
			</Head>
			<main className={styles.main}>
				<AngledDiv />
			</main>
		</>
	);
}
