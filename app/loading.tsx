import data from 'data.json';

type Props = { href: string };

function FakeCard(props: Props) {
	return (
		<a
			className="animate-pulse group flex items-center p-1 rounded-full w-full max-w-2xl bg-slate-400 mb-2"
			href={props.href}
			target="_blank"
		>
			<div className="h-20 flex flex-col items-center justify-center mx-auto "></div>
		</a>
	);
}

export default function Fake() {
	return (
		<div className="flex items-center flex-col mx-auto w-full px-8 justify-center mt-16">
			<div className="absolute right-4 top-4 h-8 w-8 "></div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-32 h-32 animate-pulse text-slate-200"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
				/>
			</svg>

			<h1 className="animate-pulse mx-auto my-8 text-2xl font-bold select-none text-slate-200">
				Loading...
			</h1>

			{data.links.map((link) => (
				<FakeCard key={link.href} {...link} />
			))}
		</div>
	);
}
