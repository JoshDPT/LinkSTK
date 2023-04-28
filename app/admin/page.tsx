import ViewChart from "@/components/ViewChart";
import getLinks from "@/lib/getLinks";

export default async function Home() {
	const links = await getLinks()
	
	return (
		<div className="flex items-center flex-col mx-auto w-full max-w-2xl gap-4 px-8 justify-center my-16">
			{links.map((e,i)=> <ViewChart key={i} title={e.title} views={e.views}/>)}
			{/* <ViewChart views={views} />
      {views.reverse().map(e => <div className='dark:bg-slate-800 bg-slate-200 p-4 rounded-sm outline outline-pink-500 md:w-96 w-80 flex content-center items-center justify-center' key={e.id}>Date: {e.date.toLocaleDateString()} | Link: {e.linkId} | Views: {e.viewsCount}</div>)} */}
		</div>
	);
}
