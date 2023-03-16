'use client';
import { ChartBarIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Views() {
	const [views, updateViews] = useState(11111);

	return (
		<div
			className="group flex items-center p-1 my-16 rounded-lg bg-slate-200 dark:bg-slate-800 transition-all border border-slate-500 shadow-m duration-200 ease-out"
			onClick={() => updateViews(views + 1)}
		>
			<ChartBarIcon className="w-5 h-5 mr-2" />
			<h2 className="normal-nums font-sans select-none">{views}</h2>
		</div>
	);
}
