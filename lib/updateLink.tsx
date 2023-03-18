export default async function updateLink(id: number, clicks: number) {
	// needs better error handling
	clicks = clicks + 1;
	const response = await fetch(`http://localhost:3000/api/click`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ id, clicks }),
	});
	return response.json();
}