import Head from 'next/head';
import Image from 'next/image';
import { Feed } from '../components/Feed';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Widgets } from '../components/Widgets';

export default function Home() {
	return (
		<div className='h-screen bg-gray-100 overflow-hidden'>
			<Head>
				<title>Facebook App Next JS</title>
				<meta name='description' content='Facebook Clon con Next JS por Gerardo Chaico Padilla' />
				<link rel='icon' href='/facebook.png' />
			</Head>
			<Header />
			<main className='flex'>
				<Sidebar />
				<Feed />
				<Widgets />
			</main>
		</div>
	);
}
