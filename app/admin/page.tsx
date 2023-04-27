import ViewChart from "@/components/ViewChart";
import getViews from "@/lib/getViews";

export default async function Home() {
	const views = await getViews()
	console.log(views)
	
	return (
		<div className="flex items-center flex-col mx-auto w-full max-w-2xl gap-4 px-8 justify-center my-16">
			<ViewChart views={views} />
      {views.reverse().map(e => <div className='dark:bg-slate-800 bg-slate-200 p-4 rounded-sm outline outline-pink-500 md:w-96 w-80 flex content-center items-center justify-center' key={e.id}>Date: {e.date.toLocaleDateString()} | Link: {e.linkId} | Views: {e.viewsCount}</div>)}
		</div>
	);
}
