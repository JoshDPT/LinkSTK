type Props = {
	title: string;
	href: string;
	image?: string;
};

export default function LinkCard(props: Props) {
	return (
		<a
			className="flex items-center p-4 rounded-full w-full max-w-2xl bg-slate-100 hover:scale-105 transition-all border border-slate-500 mb-2 shadow-m hover:shadow-2xl hover:bg-slate-50"
			href={props.href}
			target="_blank"
		>
			<div className="flex flex-col items-center justify-center mx-auto">
				<h2 className="font-semibold text-size-xl justify-center">{props.title}</h2>
			</div>
		</a>
	);
}
