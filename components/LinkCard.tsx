import Image from 'next/image';
import { CiExport } from 'react-icons/ci';

type LinkProps = {
	title: string;
	href: string;
	image?: string | any;
	clicks: string;
};

export default function LinkCard({ title, href, image }: LinkProps) {
	return (
		<a
			className="group flex items-center p-1 rounded-full w-full max-w-2xl bg-slate-200 dark:bg-slate-800 hover:scale-105 transition-all border border-slate-500 mb-4 h-16 shadow-m hover:shadow-2xl hover:bg-white dark:hover:bg-slate-700 duration-200 ease-out"
			href={href}
			target="_blank"
		>
			<div className="h-12 w-12 relative object-cover rounded-full">
				{image && (
					<Image className="rounded-full" src={image} alt={title} fill={true} />
				)}
			</div>

			<div className="flex flex-col items-center justify-center mx-auto ">
				<h2 className="font-semibold text-size-xl justify-center">{title}</h2>
			</div>

			<div>
				<CiExport className="h-6 w-6 m-3 text-slate-500 invisible group-hover:visible" />
				{/* <ArrowUpOnSquareIcon className="h-12 w-12 m-4 text-slate-500 invisible group-hover:visible" /> */}
			</div>
		</a>
	);
}
