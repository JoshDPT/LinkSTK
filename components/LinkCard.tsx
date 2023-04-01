'use client';
import Image from 'next/image';
import { CiExport } from 'react-icons/ci';
import updateLink from '@/lib/updateLink';
import Clicks from './Clicks';
import { useState, useEffect } from 'react';

// needs to tie in clicks with state to update with each click on the client side? could possibly useSWR for some easy to use real time updates

// bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-rose-400 via-fuchsia-500 to-indigo-500

export default function LinkCard({
	id,
	title,
	href,
	image,
	clicks,
}: LinkProps) {
	const [count, setCount] = useState(clicks);

	useEffect(() => {
		updateLink(id, count)
			.then((data) => {
				console.log('Link updated successfully:', data);
			})
			.catch((error) => {
				console.error('Failed to update link:', error);
			});
	}, [count, id]);

	const incrementCount = () => {
		setCount(count + 1);
	};

	return (
		<a
			className="group flex items-center p-1 rounded-full w-full max-w-2xl bg-slate-200 dark:bg-slate-800 hover:scale-105 transition-all border border-slate-500 mb-4 h-16 shadow-m hover:shadow-2xl hover:bg-white dark:hover:bg-slate-700 duration-200 ease-out relative"
			href={href}
			target="_blank"
			onMouseDown={() => {
				incrementCount();
			}}
		>
			<div className="relative h-12 w-12 rounded-full">
				{image && (
					<Image
						className="rounded-full w-full object-cover"
						src={image}
						alt={title}
						fill={true}
					/>
				)}
			</div>

			<div className="flex flex-col items-center justify-center mx-auto ">
				<h2 className="font-semibold text-size-xl justify-center">{title}</h2>
			</div>

			<div>
				<CiExport className="h-6 w-6 m-3 text-slate-500 invisible group-hover:visible" />
				{/* <ArrowUpOnSquareIcon className="h-12 w-12 m-4 text-slate-500 invisible group-hover:visible" /> */}
			</div>
			<Clicks clicks={count} />
		</a>
	);
}
