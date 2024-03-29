import Image from 'next/image';
import LinkCard from '@/components/LinkCard';
import DarkModeButton from '@/components/DarkModeButton';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import SocialBar from '@/components/SocialBar';
import HeaderCard from '@/components/HeaderCard';
import getLinks from '@/lib/getLinks';
import Head from 'next/head';
import { defaultPicture, socials } from '@/constants';
import PageViewCount from '@/components/PageViewCount';
import Link from 'next/link';
import SubscriberForm from '@/components/SubscriberForm';

export default async function Home() {
	const links = await getLinks();
	console.log(links.at(0)?.views);

	const main = links.find((e) => e.title === 'main');
	const name = main?.href ?? 'unknown name';
	const picture = main?.image ?? defaultPicture;

	const socialsSet = new Set(socials);

	return (
		<div className="flex items-center flex-col mx-auto w-full max-w-2xl px-8 justify-center mt-16">
			<title>{name}</title>
			{/* EXAMPLE NEW NEXT METADATA */}
			<Head>
				<title>LinkSTK</title>
				<meta
					name="description"
					content="LinkSTK is an open-source link tree for developers"
					key="desc"
				/>
				<meta property="og:title" content={`LinkSTK for ${name}`} />
				<meta
					property="og:description"
					content="This page shows all of our links to pages I want to share"
				/>
				<meta property="og:image" content="" />
			</Head>

			{/* Header */}
			<HeaderCard name={name} profile={picture} />

			{/* floating DarkModeButton */}
			{/* TODO: Clean up this div */}
			<div className="fixed left-1/2 -translate-x-1/2 top-3 h-16 content-center w-full lg:max-w-3xl z-10 rounded-full flex flex-row px-3 justify-end items-center">
				<DarkModeButton />
			</div>

			{/* Profile picture with two animated shadows */}
			<span
				className="rounded-full 
				shadow-[-30px_35px_60px_-15px_rgba(153,0,205,.5)] 
				dark:shadow-[-30px_35px_60px_-15px_rgba(0,255,255,.5)] 
				transition-all duration-500 ease-out"
			>
				<Image
					className="rounded-full outline outline-gray-100 dark:outline-sky-500 dark:border-slate-200 
						shadow-[30px_35px_60px_-15px_rgba(0,255,255,.5)] 
						dark:shadow-[30px_35px_60px_-15px_rgba(153,0,205,.5)]
						transition-all duration-500 ease-out"
					src={picture}
					alt="profile picture"
					height={96}
					width={96}
					priority
				/>
			</span>

			{/* Name */}
			<div className="flex mx-auto my-8 items-center">
				<h1 className="text-2xl text-black dark:text-white font-bold select-none transition-all duration-300 ease-out">
					{name}
				</h1>
				<CheckBadgeIcon className="static w-5 h-5 text-sky-500 dark:text-sky-400 m-1 -mr-6 font-bold select-none transition-all duration-300 ease-out" />
			</div>

			<SocialBar links={links} />

			{/* Link cards */}
			{links &&
				links
					.filter((e: LinkProps) => !socialsSet.has(e.title))
					.filter((e: LinkProps) => e.title !== 'main')
					.map((link: LinkProps) => (
						<LinkCard
							key={link.href}
							id={link.id}
							title={link.title}
							href={link.href}
							image={link.image}
							clicks={link.clicks}
						/>
					))}

			{/* Page views */}
			{main ? <PageViewCount clicks={main?.clicks} id={main?.id} /> : null}

			<SubscriberForm />

			{/* Created by */}
			<h3 className="text-md text-black font-bold dark:text-white select-none transition-all duration-300 ease-out mb-16">
				Created by{' '}
				<span className="text-sky-500 dark:text-sky-400">{name}</span>
			</h3>
			<Link className='fixed left-10 bottom-10 bg-slate-200 dark:bg-slate-800 rounded-full p-2 hover:scale-110 shadow-lg' href='/admin' >Admin</Link>
		</div>
	);
}
