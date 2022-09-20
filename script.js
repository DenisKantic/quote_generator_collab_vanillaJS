const quote = document.getElementsByClassName('quote')[0];
const nameOfAuthor = document.getElementsByClassName('nameOfAuthor')[0];
const btn = document.getElementsByClassName('btn')[0];

const displayInfo = (data) => {
	quote.innerText = data.Quote;
	nameOfAuthor.innerText = data.Speaker;
}

btn.addEventListener("click", () => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'd21bfe54c4msh420a0871374d5d3p188258jsn3d48e86f4482',
			'X-RapidAPI-Host': 'marvel-quote-api.p.rapidapi.com'
		}
	};

	fetch('https://marvel-quote-api.p.rapidapi.com/', options)
		.then(response => response.json())
		.then(response => displayInfo(response))
		.catch(err => console.error(err));
});
