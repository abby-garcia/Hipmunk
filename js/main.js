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
    $('#sandbox-container .input-daterange').datepicker({
    startDate: "10/15/2015",
    endDate: "10/15/2016",
    todayBtn: "linked",
    clearBtn: true,
    orientation: "top auto",
    autoclose: true,
    defaultViewDate: { year: 2015, month: 10, day: 31 }
});




$('.fa-caret-up').on('click', function() {
    $(this).closest('.city-block').addClass('open')


});

$('.fa-caret-down').on('click', function() {
    $(this).closest('.city-block').removeClass('open')


});