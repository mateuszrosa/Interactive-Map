document.addEventListener('DOMContentLoaded', function() {

    const submit = document.querySelector("form");
    const input = document.querySelector("input");
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

    body.addEventListener('mouseenter', () => {
        const land = body.querySelectorAll('.land');
        const event = document.createEvent("Event");
        event.initEvent("click", true, true);
        [...land].forEach(function(item) {
            item.addEventListener('click', function(e) {
                input.value = "Write country name:";
                land.forEach(function(item) {
                    item.style.fill = "#ac9d93"
                });
                this.style.fill = "gray";
                let value = this.getAttribute("title");
                console.log(value);
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
                        nativeName.textContent = "Native name: " + data[0].nativeName;
                        capital.textContent = "Capital: " + country.capital;
                        language.textContent = "Language: " + country.languages[0].name;
                        currency.textContent = "Currency: " + country.currencies[0].code;
                        population.textContent = "Population: " + country.population.toLocaleString();
                        img.setAttribute("src", country.flag);
                        img.style.boxShadow = '0 0 3px 3px gray';

                    })
            }, false);
        })
        input.addEventListener('click', () => {
            input.value = "";
        })
        submit.addEventListener('submit', e => {
            toTitleCase = str => {
                return str.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
            }
            e.preventDefault();
            const value = toTitleCase(input.value);
            document.querySelector('.map path[title="' + value + '"]').dispatchEvent(event);
        })
    })
})