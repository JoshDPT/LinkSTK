import data from 'data.json';
import { ChartBarIcon } from '@heroicons/react/24/solid';

export default function Views() {
	const numberViews = Number(data.views);
	const presentViews = numberViews.toLocaleString('en-US');

	return (
		<div className="group flex items-center p-1 mt-8 rounded-lg bg-slate-200 dark:bg-slate-800 transition-all border border-slate-500 shadow-m duration-200 ease-out">
			<ChartBarIcon className="w-5 h-5 mr-2" />
			<h2 className='normal-nums font-sans select-none'>{presentViews}</h2>
		</div>
	);
}
