'use client';
import { Card, AreaChart, Title } from '@tremor/react';

interface Props {
	views: View[];
}

export default function ViewChart({ views }: Props) {
  const days = views.map(e => new Date(e.date).toLocaleString('en-US', {
    hour: 'numeric',
    hour12: false
  })).slice(0, 10);

  const data = views.map((e, i)=> ({
    time: Number(e.date),
    'views': e.viewsCount,
  }));

  const viewFormatter = (view: number) => `${view} views`

	return (
		<Card>
			<Title></Title>
			<AreaChart 
        className='mt-6'
        data={data}
        showLegend
        index='time'
        categories={['views']}
        colors={['rose']}
        minValue={0}
        valueFormatter={viewFormatter}
        yAxisWidth={40}
      />
		</Card>
	);
}
