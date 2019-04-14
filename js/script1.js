let mySVGsToInject = document.querySelectorAll('img.inject-me');

let injectorOptions = {
    evalScripts: 'once',
    pngFallback: 'assets/png',
    each: function(svg) {
        // Callback after each SVG is injected
        console.log('SVG injected: ' + svg.getAttribute('id'));
    }
};

SVGInjector(mySVGsToInject, injectorOptions, function(totalSVGsInjected) {
    // Callback after all SVGs are injected
    console.log('We injected ' + totalSVGsInjected + ' SVG(s)!');
});

const map = document.querySelector('.map');
const name = document.querySelector("h3:nth-of-type(2)");
const region = document.querySelector("h3:nth-of-type(3)");
const subregion = document.querySelector("h3:nth-of-type(4)");
const nativeName = document.querySelector("h3:nth-of-type(5)");
const capital = document.querySelector("h3:nth-of-type(6)");
const language = document.querySelector("h3:nth-of-type(7");
const currency = document.querySelector("h3:nth-of-type(8)");
const population = document.querySelector("h3:nth-of-type(9)");

map.addEventListener('mouseenter', function() {
    const land = map.querySelectorAll('.land');
    for (let i = 0; i < land.length; i++) {
        land[i].addEventListener('click', function() {
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
                    console.log(data[0].region);
                    name.textContent = "Name: " + data[0].name;
                    region.textContent = "Region: " + data[0].region;
                    subregion.textContent = "Subregion: " + data[0].region;
                })
        });
    }
})