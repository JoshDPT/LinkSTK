import profile from '@/public/profile.jpeg';
import Image from 'next/image';
import data from 'data.json';
import LinkCard from '@/components/LinkCard';
import DarkModeButton from '@/components/DarkModeButton';
import Views from '@/components/Views';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import SocialBar from '@/components/SocialBar';
import Header from '@/components/Header';

export default function Home() {
	return (
		<div className="flex items-center flex-col mx-auto w-full max-w-2xl px-8 justify-center mt-16">
			{/* Header */}
			<Header data={data} profile={profile} />

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

			<SocialBar />

			{/* Link cards */}
			{data.links.map((link) => (
				<LinkCard key={link.href} {...link} />
			))}

			{/* Page views */}
			<Views />

			{/* Created by */}
			<h3 className="text-md text-black font-bold dark:text-white select-none transition-all duration-300 ease-out mb-16">
				Created by <span className='text-sky-500 dark:text-sky-400'>{data.name}</span>
			</h3>
		</div>
	);
}
