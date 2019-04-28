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

    body.addEventListener('mouseenter', () => {
        const land = body.querySelectorAll('.land');
        const event = document.createEvent("Event");
        event.initEvent("click", true, true);
        [...land].forEach(function(item) {
            item.addEventListener('click', function(e) {
                inputName.value = "Write country name:";
                land.forEach(function(item) {
                    item.style.fill = "#ac9d93"
                });
                this.style.fill = "gray";
                let value = this.getAttribute("title");
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
                        name.textContent = "Name: " + country.name;
                        region.textContent = "Region: " + country.region;
                        subregion.textContent = "Subregion: " + country.subregion;
                        nativeName.textContent = "Native name: " + country.nativeName;
                        capital.textContent = "Capital: " + country.capital;
                        language.textContent = "Language: " + country.languages[0].name;
                        currency.textContent = "Currency: " + country.currencies[0].code;
                        population.textContent = "Population: " + country.population.toLocaleString();
                        img.setAttribute("src", country.flag);
                        img.style.boxShadow = '0 0 3px 3px gray';

                    })
            }, false);
        })
        inputName.addEventListener('click', () => {
            inputName.value = "";
            infos.forEach(item => {
                item.textContent = "";
            });
            land.forEach(function(item) {
                item.style.fill = "#ac9d93"
            });
            img.setAttribute("src", "");
            img.style.boxShadow = '0 0 0 0';
        })
        submit.addEventListener('submit', function(e) {
            e.preventDefault();
            toTitleCase = str => {
                return str.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
            }
            let value1 = toTitleCase(inputName.value);
            let selection = document.querySelector(`.map path[title="${value1}"]`) !== null;
            if (!selection) {
                console.log(`'${value1}' The element does not exists in the page.`);
                inputName.value = "Invalid country name";
            } else {
                console.log(`'${value1}' The element exists in the page.`);
                document.querySelector(`.map path[title="${value1}"]`).dispatchEvent(event);
                inputName.value = "Write country name:";
            }
        })
    })
})