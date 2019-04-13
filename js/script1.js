// document.addEventListener("DOMContentLoaded", function() {

//     function fillCountry() {
//         const lands = document.querySelectorAll(".land");
//         for (let i = 0; i < lands.length; i++) {
//             lands[i].addEventListener('click', function() {
//                 this.classList.toggle("clicked");
//                 console.log(this);
//             })
//         }
//     }


//     setTimeout(fillCountry, 500);

// })



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

map.addEventListener('mouseenter', function() {
    const land = map.querySelectorAll('.land');
    for (let i = 0; i < land.length; i++) {
        land[i].addEventListener('click', function() {
            land.forEach(function(item) {
                item.style.fill = "#ac9d93"
            })
            this.style.fill = "gray";
        })
    }
})