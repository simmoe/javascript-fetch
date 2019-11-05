//Check out the open rick and morty api: https://rickandmortyapi.com/

// We fetch using await:
async function apiGet() {
    const b = await fetch("https://rickandmortyapi.com/api/character")
    const json = await b.json()
    console.log(json)
    showCharacters(json)
}

apiGet()

// now that we got data, build some html 
function showCharacters(json) {
    //console.log(json)

    let html = ""
    const css = {}
    json.results.map(
        character => {
            html += `
            <article>
                <img src="${character.image}">
                <div class="info">
                    <h2>${character.name}</h2>
                     <ul>
                        <li>Location: ${character.location.name}</li>
                        <li>Gender: ${character.gender}</li>
                    </ul>
                </div>
            </article>`
        }
    )

    const main = document.querySelector("main")
    main.innerHTML = html
}

