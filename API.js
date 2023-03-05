const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a05dc01bc4msh4ce44a752e32965p1ff6dfjsn1ddc20b5e1bd',
        'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
    }
};

var Res = fetch('https://google-search74.p.rapidapi.com/?query=Nike&limit=10&related_keywords=true', options)
    .then(response => response.json())
    .then(response => {
        response.results.map((event) => {
            console.log(event.position);
        })
    })
    .catch(err => console.error(err));