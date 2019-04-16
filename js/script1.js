document.addEventListener("DOMContentLoaded", function() {

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

    body.addEventListener('mouseenter', function() {
        const land = body.querySelectorAll('.land');
        const event = document.createEvent("Event");
        event.initEvent("click", true, true);
        [...land].map(function(item) {
            item.addEventListener('click', function(e) {
                input.value = "Write country name:";
                land.forEach(function(item) {
                    item.style.fill = "#ac9d93"
                })
                this.style.fill = "gray";
                let value = this.getAttribute("title");
                fetch(`https://restcountries.eu/rest/v2/name/` + value)
                    .then(resp => {
                        return resp.json()
                    })
                    .then(data => {
                        name.textContent = "Name: " + data[0].name;
                        region.textContent = "Region: " + data[0].region;
                        subregion.textContent = "Subregion: " + data[0].subregion;
                        nativeName.textContent = "Native name: " + data[0].nativeName;
                        capital.textContent = "Capital: " + data[0].capital;
                        language.textContent = "Language: " + data[0].languages[0].name;
                        currency.textContent = "Currency: " + data[0].currencies[0].code;
                        population.textContent = "Population: " + data[0].population.toLocaleString();
                        img.setAttribute("src", data[0].flag);
                        img.style.boxShadow = '0 0 3px 3px gray';

                    })
            }, false);
        })
        input.addEventListener('click', function() {
            input.value = "";
        });
        submit.addEventListener('submit', function(e) {
            e.preventDefault();
            const value = input.value;
            // console.log(document.querySelector('div.map path[title="' + value + '"]'));
            document.querySelector('div.map path[title="' + value + '"]').dispatchEvent(event);
        });
    })

})