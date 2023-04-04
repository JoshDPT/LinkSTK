'use client';
import { ChartBarIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import updateLink from '@/lib/updateLink';

export default function Views({ clicks, id }: ViewProps) {
	const [count, setCount] = useState(clicks);

	function clickHandler() {
		setCount(count + 1);
		updateLink(id, count)
			.then((data) => {
				console.log('Link updated successfully:', data);
			})
			.catch((error) => {
				console.error('Failed to update link:', error);
			});
	}

	useEffect(() => {
		clickHandler();
	}, []);

	return (
		<div className="group flex items-center p-1 my-16 rounded-lg bg-slate-200 dark:bg-slate-800 transition-all border border-slate-500 shadow-m duration-200 ease-out">
			<ChartBarIcon className="w-5 h-5 mr-2" />
			<h2 className="normal-nums font-sans select-none">{count}</h2>
		</div>
	);
}
