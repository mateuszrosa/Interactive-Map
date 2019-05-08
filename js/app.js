document.addEventListener('DOMContentLoaded', function() {

    const submit = document.querySelector("form");
    const inputName = document.querySelector("input");
    const body = document.querySelector('body');
    const name = document.querySelector("h3:nth-of-type(2)");
    const region = document.querySelector("h3:nth-of-type(3)");
    const subregion = document.querySelector("h3:nth-of-type(4)");
    const nativeName = document.querySelector("h3:nth-of-type(5)");
    const capital = document.querySelector("h3:nth-of-type(6)");
    const language = document.querySelector("h3:nth-of-type(7");
    const currency = document.querySelector("h3:nth-of-type(8)");
    const population = document.querySelector("h3:nth-of-type(9)");
    const img = document.querySelector(".info img");
    const infos = document.querySelectorAll('.infos');

    const worldMap = () => {
        const land = body.querySelectorAll('.land');
        const event = document.createEvent("Event");
        event.initEvent("click", true, true);

        const markingCountry = () => {
            [...land].forEach(item => {
                item.addEventListener('click', e => {
                    inputName.value = "Write country name:";
                    inputName.style = "color: black";
                    land.forEach(function(item) {
                        item.style.fill = "#ac9d93"
                    });
                    e.target.style.fill = "gray";
                    let value = e.target.getAttribute("title");
                    if (value === "South Korea") {
                        value = "Korea (Republic of)";
                    } else if (value === "North Korea") {
                        value = "Korea (Democratic People's Republic of)";
                    } else if (value === "Republic of Congo") {
                        value = "Congo";
                    } else if (value === "Democratic Republic of Congo") {
                        value = "Congo (Democratic Republic of the)"
                    }
                    fetch(`https://restcountries.eu/rest/v2/name/` + value)
                        .then(resp => {
                            return resp.json()
                        })
                        .then(data => {
                            let country = data[0];
                            if (value === "India") {
                                country = data[1];
                            }
                            name.innerHTML = `Name: <span class="inf">${country.name}</span>`
                            region.innerHTML = `Region: <span class="inf">${country.region}</span>`
                            subregion.innerHTML = `Subegion: <span class="inf">${country.subregion}</span>`
                            nativeName.innerHTML = `Native: <span class="inf">${country.nativeName}</span>`
                            capital.innerHTML = `Capital: <span class="inf">${country.capital}</span>`
                            language.innerHTML = `Language: <span class="inf">${country.languages[0].name}</span>`
                            currency.innerHTML = `Currency: <span class="inf">${country.currencies[0].code}</span>`
                            population.innerHTML = `Population: <span class="inf">${country.population.toLocaleString()}</span>`
                            img.setAttribute("src", country.flag);
                            img.style.boxShadow = '0 0 3px 3px gray';

                        })
                }, false);
            })
        }

        const byInput = () => {
            inputName.addEventListener('click', function() {
                inputName.value = "";
                inputName.style = "color: black";
                infos.forEach(item => {
                    item.textContent = "";
                });
                land.forEach(function(item) {
                    item.style.fill = "#ac9d93"
                });
                img.setAttribute("src", "");
                img.style.boxShadow = '0 0 0 0';
            })
        }

        const clickSubmit = () => {
            submit.addEventListener('submit', function(e) {
                e.preventDefault();
                toTitleCase = str => {
                    return str.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
                };
                const value = toTitleCase(inputName.value);
                const selection = document.querySelector(`.map path[title="${value}"]`) !== null;
                if (!selection) {
                    inputName.value = "Invalid country name";
                    inputName.style = "color: red";
                } else {
                    inputName.value = "Write country name:";
                    document.querySelector(`.map path[title="${value}"]`).dispatchEvent(event);
                }
            })
        }

        markingCountry()
        byInput();
        clickSubmit();
    }

    setTimeout(() => {
        worldMap();
    }, 500);

})