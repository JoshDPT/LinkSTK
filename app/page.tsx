import profile from '@/public/profile.jpeg';
import Image from 'next/image';
import data from 'data.json';
import LinkCard from '@/components/LinkCard';
import DarkModeButton from '@/components/DarkModeButton';

export default function Home() {
	return (
		<div className="flex items-center flex-col mx-auto w-full px-8 justify-center mt-16">
			<div className="absolute right-4 top-4 h-8 w-8 ">
				<DarkModeButton />
			</div>
			<span className="rounded-full shadow-[-30px_35px_60px_-15px_rgba(153,0,205,.5)] dark:shadow-[30px_35px_60px_-15px_rgba(0,255,255,.5)] transition-all duration-500 ease-out">
				<Image
					className="rounded-full outline outline-gray-100 dark:outline-sky-500 dark:border-slate-200 shadow-[30px_35px_60px_-15px_rgba(0,255,255,.5)] dark:shadow-[-30px_35px_60px_-15px_rgba(153,0,205,.5)]  transition-all duration-500 ease-out"
					src={profile}
					alt="profile picture"
					height={128}
					width={128}
					priority
				/>
			</span>
			<h1 className="mx-auto my-8 text-2xl text-black dark:text-white font-bold select-none transition-all duration-300 ease-out">
				{data.name}
			</h1>
			{data.links.map((link) => (
				<LinkCard key={link.href} {...link} />
			))}
		</div>
	);
}
