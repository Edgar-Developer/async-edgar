const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCD3-EISTb_aPV56DdErNvXA&part=snippet%2Cid&order=date&maxResults=5';
const content = null || document.getElementById('content')
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f1c182a219msh48db5fbd6b9a638p19a89ajsn0f789adaf0d6',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchVideos() {
try {
	const response = await fetch(API, options);
	const result = await response.json();
	let view = `
	${result.items.map(video => `
		<div class="group relative">
		<div
			class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
			<img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
		</div>
		<div class="mt-4 flex justify-between">
			<h3 class="text-sm text-gray-700">
				<span aria-hidden="true" class="absolute inset-0"></span>
				${video.snippet.title}
			</h3>
		</div>
	</div>
	`).slice(0,4).join('') }	
	`; content.innerHTML = view;
	console.log(result);
} catch (error) {
	console.error(error);
}
};

fetchVideos();