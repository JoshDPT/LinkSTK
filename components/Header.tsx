'use client';

import Image, { StaticImageData } from 'next/image';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import DarkModeButton from './DarkModeButton';
import { useState, useEffect } from 'react';

type HeaderProps = {
	data: {
		name: string;
	};
	profile: StaticImageData;
};

export default function Header({ data, profile }: HeaderProps) {
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
			className={`fixed left-1/2 -translate-x-1/2 top-3 h-16 content-center w-full max-w-3xl z-10 bg-white/30 backdrop-blur-md ring-1 ring-gray-400/30 rounded-full flex flex-row px-3 justify-between items-center ${
				scrollPosition >= 46 ? '' : 'invisible'
			}`}
		>
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
					{data.name}
				</h3>
				<CheckBadgeIcon className="flex w-5 h-5 text-sky-500 dark:text-sky-400 font-bold select-none" />
			</div>
			<DarkModeButton/>
		</div>
	);
}
