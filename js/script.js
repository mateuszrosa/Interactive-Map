$(document).ready(function() {

    $('div.map path').css('fill', 'black');

    function toTitleCase(str) {
        return str.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    }

    $('#info > form > input').eq(1).on('click', function(event) {
        event.preventDefault();

        let input = $('#info > form > input').eq(0);
        let value = toTitleCase(input.val());
        console.log(value);

        $('div.map path[title="' + value + '"]').trigger('click');

    })

    $('body').on('click', 'path', function() {
        console.log(this);
        $('div.map path').css('fill', '#AC9D93');
        $(this).css('fill', '#483E37');


        // $('div.map path').css('z-index', '1');
        // $(this).css('z-index', '2');
        //
        // $('div.map path').css('transform', 'scale(1)');
        // $(this).css('transform', 'scale(1.03)');

        var title = $(this).attr('title');
        let input = $('#info > form > input').eq(0);
        let input1 = $('#info > form > input').eq(1);

        let h3_0 = $('#info > h3').eq(0);
        let h1 = $('#info > h1');
        let h3_1 = $('#info > h3').eq(1);
        let h3_2 = $('#info > h3').eq(2);
        let h3_3 = $('#info > h3').eq(3);
        let h3_4 = $('#info > h3').eq(4);
        let h3_5 = $('#info > h3').eq(5);
        let h3_6 = $('#info > h3').eq(6);
        let h3_7 = $('#info > h3').eq(7);

        let img = $('img');

        $.ajax({
            url: `https://restcountries.eu/rest/v2/name/${title}`,
            dataType: 'json'
        }).done(data => {
            h3_0.text("")
            h1.text('Name: ' + data[0].name)
            h3_1.text('Region: ' + data[0].region)
            h3_2.text('Subregion: ' + data[0].subregion)
            h3_3.text('Native name: ' + data[0].nativeName)
            h3_4.text('Capital: ' + data[0].capital)
            h3_5.text('Language: ' + data[0].languages[0].name)
            h3_6.text('Currency: ' + data[0].currencies[0].code)
            h3_7.text('Population: ' + parseFloat(data[0].population).toLocaleString())
                // img.attr('border', '1px solid black');
            img.attr('src', data[0].flag)
        });
    })
})