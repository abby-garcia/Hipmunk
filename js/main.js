$(function() {
    $( ".from" ).autocomplete({
        source: function( request, response ) {
            $.ajax({
                url: "http://www.air-port-codes.com/search/",
                jsonp: "callback",
                dataType: "jsonp",
                data: {
                    term: request.term, // input field value
                    limit: 7, // default is 30
                    size: 3, // default is 0
                    key: "f04eaa30cd" // dont forget to add your API Key from your air-port-codes account
                },
                success: function( data ) {
                    if (data.status) { // success
                        response( $.map( data.airports, function( item ) {
                            return {
                                label: item.name + ' (' + item.iata + ')',
                                value: item.name + ' (' + item.iata + ')',
                                code: item.iata
                            }
                        }));
                    } else { // no results
                        response();
                    }
                }
            });
        },
        select: function( event, ui ) {
            // do something for click event
            console.log(ui.item.code);
        }
    });
});



//  Date Picker
$('.input-daterange').datepicker({
                    todayBtn: "linked"
                });




$('.fa-caret-up').on('click', function() {
    $(this).closest('.city-block').addClass('open')


});

$('.fa-caret-down').on('click', function() {
    $(this).closest('.city-block').removeClass('open')


});