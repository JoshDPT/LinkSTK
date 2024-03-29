export default function ClickCount({ clicks }: ClickProps) {
	return (
		<div className="absolute flex text-white text-xs h-7 w-7 rounded-full items-center justify-center -top-2 -right-3 shadow-lg bg-violet-600">
			{clicks}
		</div>
	);
}
