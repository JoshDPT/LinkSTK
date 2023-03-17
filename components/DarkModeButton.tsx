'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect, use } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function DarkModeButton() {
	const [mounted, setMounted] = useState(false);
	const { systemTheme, theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const currentTheme = theme === 'system' ? systemTheme : theme;

	return (
		<button>
			{currentTheme === 'dark' ? (
				<SunIcon
					className="h-8 w-8 hover:scale-110 cursor-pointer text-yellow-500"
					onClick={() => setTheme('light')}
				/>
			) : (
				<MoonIcon
					className="h-8 w-8 hover:scale-110 cursor-pointer text-violet-500"
					onClick={() => setTheme('dark')}
				/>
			)}
		</button>
	);
}
