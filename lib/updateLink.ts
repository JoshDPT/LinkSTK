export default async function updateLink(id: number, clicks: number) {
	const response = await fetch(`/api/click`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ id, clicks }),
	});
	return response.json();
}

// needs better error handling
// needs to add some authorization?
// clicks = clicks + 1;
