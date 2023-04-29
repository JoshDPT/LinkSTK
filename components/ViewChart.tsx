'use client';
import { Card, AreaChart, Title } from '@tremor/react';

interface Props {
	title: string;
	views: View[];
}

export default function ViewChart({ title, views }: Props) {
	const data = views.map((e) => ({
		Views: e.viewsCount,
		date: e.date
			.toLocaleString('en-US', {
				hour: 'numeric',
				hour12: false,
			})
			.slice(5, 10),
	}));

	const viewFormatter = (view: number) => `${view} Views`;

	return (
		<Card className="bg-slate-200">
			<Title>{title}</Title>
			<AreaChart
				className="mt-6"
				data={data}
				showLegend
				index="date"
				categories={['Views']}
				colors={['fuchsia']}
				minValue={0}
				valueFormatter={viewFormatter}
				yAxisWidth={40}
			/>
		</Card>
	);
}
