import ViewChart from '@/components/ViewChart';
import getLinks from '@/lib/getLinks';
import Link from 'next/link';

export default async function Home() {
	const links = await getLinks();

	return (
		<div className="flex items-center flex-col mx-auto w-full max-w-2xl gap-4 px-8 justify-center my-16">
			{links.map((e, i) => (
				<ViewChart key={i} title={e.title} views={e.views} />
			))}
			<div className="fixed flex justify-center content-center left-0 w-full h-20 bottom-0 bg-slate-700 p-2 bg-transparent">
				<Link
					className="flex w-full max-w-3xl h-16 justify-center content-center items-center rounded-full bg-white/30 backdrop-blur-md ring-1 ring-gray-400/30"
					href="/"
				>
					<div className='text-3xl font-bold text-slate-600'>Home</div>
				</Link>
			</div>
		</div>
	);
}
