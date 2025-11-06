export default {
	async fetch(request, env, ctx) {
		const rand = Math.random();
		return new Response(rand < 0.5 ? 'Bad Request' : 'Hello World!', { status: rand < 0.5 ? 400 : 200 });
	},
};
