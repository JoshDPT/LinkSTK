'use client';

import Image from 'next/image';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

export default function HeaderCard({ name, profile }: HeaderProps) {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={`fixed flex justify-center content-center left-0 w-full h-20 top-0 py-3 px-2 bg-transparent z-10 ${
				scrollPosition >= 46 ? '' : 'invisible'
			}`}
		>
			<div className="flex w-full max-w-3xl h-16 p-2 justify-between content-center items-center rounded-full bg-white/30 backdrop-blur-md ring-1 ring-gray-400/30">
				<Image
					className="rounded-full"
					src={profile}
					alt="profile picture"
					height={44}
					width={44}
					priority
				/>
				<div className="flex flex-row content-center items-center">
					<h3 className="flex text-lg text-black dark:text-white font-bold select-none">
						{name}
					</h3>
					<CheckBadgeIcon className="flex w-5 h-5 text-sky-500 dark:text-sky-400 font-bold select-none" />
				</div>
				{/* <DarkModeButton /> */}
				<div className="h-8 w-8"></div>
			</div>
		</div>
	);
}
