export default function Clicks({ clicks }: ClickProps) {
	return (
		<div className="absolute flex text-white text-xs h-7 w-7 rounded-full items-center justify-center -top-2 -right-3 shadow-lg bg-purple-500">
			{clicks}
		</div>
	);
}
