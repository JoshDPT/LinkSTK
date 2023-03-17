import profile from '@/public/profile.jpeg';
import Image from 'next/image';
import data from 'data.json';
import LinkCard from '@/components/LinkCard';
import DarkModeButton from '@/components/DarkModeButton';
import Views from '@/components/Views';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import SocialBar from '@/components/SocialBar';
import Header from '@/components/Header';
import { PrismaClient } from '@prisma/client';
import Footer from '@/components/Footer';

const prisma = new PrismaClient();

export default async function Home() {
	const links = await prisma.link.findMany();

	const socials = new Set([
		'facebook',
		'github',
		'instagram',
		'linkedin',
		'twitter',
		'youtube',
	]);

	return (
		<main className="flex items-center flex-col mx-auto w-full max-w-2xl px-8 justify-center mt-16">
			{/* Header */}
			<Header data={data} profile={profile} />

			{/* floating DarkModeButton */}
			{/* TODO: Clean up this div */}
			<div className="fixed left-1/2 -translate-x-1/2 top-3 h-16 content-center w-full max-w-3xl z-10 rounded-full flex flex-row px-3 justify-end items-center">
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
					src={profile}
					alt="profile picture"
					height={96}
					width={96}
					priority
				/>
			</span>

			{/* Name */}
			<div className="flex mx-auto my-8 items-center">
				<h1 className="text-2xl text-black dark:text-white font-bold select-none transition-all duration-300 ease-out">
					{data.name}
				</h1>
				<CheckBadgeIcon className="static w-5 h-5 text-sky-500 dark:text-sky-400 m-1 -mr-6 font-bold select-none transition-all duration-300 ease-out" />
			</div>

			{/* Social Logo Links */}
			<SocialBar links={links} />

			{/* Link cards */}
			<section className="w-full">
				{links
					.filter((e) => !socials.has(e.title))
					.map((link) => (
						<LinkCard key={link.href} {...link} />
						))}
			</section>

			{/* Page views */}
			<Views />

			{/* Created by */}
			<Footer data={data} />
		</main>
	);
}
