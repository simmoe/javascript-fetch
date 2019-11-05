//Check out the open tv maze api: http://www.tvmaze.com/api

// We fetch using await:
async function apiGet(str) {
    const b = await fetch(`http://api.tvmaze.com/search/shows?q=${str}`)
    const json = await b.json()
    console.log(json)
    json.length > 1 ? showSeries(json) : document.querySelector("main").innerHTML = "No results"
}

//hook up the search input field
const search = document.querySelector('#search')
search.addEventListener('change', (e) => {
    apiGet(e.target.value)
})

// now that we got data, build some html 
function showSeries(json) {
    let html = ""
    json.map(
        series => {
        
        html += `<article>`
        html += series.show.image ? `<img src="${series.show.image.medium}">`: ``
        html += `<div class="info">
                    <h2>${series.show.name}</h2>
                     <ul>`
        html += series.score ? `<li>score: ${series.score}</li>` : ``                         
        html += series.show.network ? `<li>${series.show.network.name}, ${series.show.network.country.name}</li>` : ``                         
        html += series.show.status ? `<li>${series.show.status}</li>` : ``                         
        if(series.show.genres){
            series.show.genres.map( genre => html += `${genre} `)
        }
        html +=     `</ul>
                </div>
            </article>`
        }
    )

    const main = document.querySelector("main")
    main.innerHTML = html
}

