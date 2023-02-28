import profile from '@/public/profile.jpeg';
import Image from 'next/image';
import data from 'data.json';
import LinkCard from '@/components/LinkCard';

export default function Home() {
	console.log(data.links);
	return (
		<div className="flex items-center flex-col mx-auto w-full px-8 justify-center mt-16">
			<Image
				className="rounded-full shadow-2xl border border-gray-600"
				src={profile}
				alt="profile picture"
				height={120}
				width={120}
			/>
			<h1 className="mx-auto my-8 text-2xl text-black font-bold select-none">
				{data.name}
			</h1>
			{data.links.map((link) => (
				<LinkCard key={link.href} {...link} />
			))}
		</div>
	);
}
