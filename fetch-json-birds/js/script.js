// save these data as a file called birds.json: https://raw.githubusercontent.com/dariusk/corpora/master/data/animals/birds_antarctica.json


// We can either fetch using await:
async function birdsAwait() {
    const b = await fetch("https://raw.githubusercontent.com/dariusk/corpora/master/data/animals/birds_antarctica.json")
    const json = await b.json()
    showBirds(json)
}

// Or promise:
fetch("https://raw.githubusercontent.com/dariusk/corpora/master/data/animals/birds_antarctica.json")
    .then( result => result.json())
    .then( data => showBirds (data) )

// now that we got data, build some html 
function showBirds(json) {
    //console.log(json)
    let html = ""
    json.birds.map(
        fam => {
            html += `<section class="family">`
            html += `<h2>${fam.family}</h2>`
            html += `<ul>`

            fam.members.map(
                (member, i) => {
                    html += `<li>${member}</li>`
                }
            )

            html += `</ul>`
            html += `</section>`
        }
    )

    const main = document.querySelector("main")
    main.innerHTML = html
}

