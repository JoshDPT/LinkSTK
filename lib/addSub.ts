export default async function addSub(email: string) {
	const response = await fetch(`/api/subscribers`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email }),
	});
	return response.json();
}