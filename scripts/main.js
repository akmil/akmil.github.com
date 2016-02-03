$(document).ready(function () {
    var apikey = '7elxdku9GGG5k8j0Xm8KWdANDgecHMV0';

    $.ajax({
        type: "GET",
        url: "https://app.ticketmaster.com/discovery/v1/events.json?size=1&apikey="+apikey,
        async: true,
        dataType: "json",
        success: function (json) {
            var $title = $('#status').text(json.links);
            var $categories = $('<p>').text(json._embedded.events[0]._embedded.categories);
            //var $img = $('<p>').text(json._embedded.events._embedded.attractions.url);
            //var $adress = $('<p>').text(json._embedded.events[0].embedded.venue[0].address);
            var $type = $('<p>').text('type is: ' + json._embedded.events[0].type);
            $('#info')
                //.append($title)
                //.append($categories)
                .append($type);
        },
        error: function (xhr, status, err) {
            // This time, we do not end up here!
        }
    });

    $.getJSON("https://app.ticketmaster.com/discovery/v1/events.json?size=1&apikey="+apikey,
        function(data){

            var host = 'http://www.ticketmaster.com';
            var data0 = data._embedded.events[0];
            $('#stage').html('<p> Name: ' + data0.name + '</p>');
            $('#stage').append('<p>EventId : ' + data0.id+ '</p>');
            $('#stage').append('<p> City: ' + data0._embedded.venue[0].city.name + '</p>');

            //_embedded.attractions
            $.each(data0._embedded.attractions, function(i,item){
                console.log(data._embedded.attractions , item);
                $("#stage")
                    .append('<p>')
                    .append('<h2><a href="'+host + item.url +'" target="_blank">See available tickets and places</a></h2>')
                    .append('<span> in ' + item.name + ' </span>')
                    .append('</p>');
                //Atlanta-Braves-Stadium-Tour-tickets/artist/1096381
                //http://www.ticketmaster.com/json/search/event?aid=852425
                if ( i == 10 ) return false;
            });

            var categories = data._embedded.events[0]._embedded.categories;
            $.each(categories, function(i,item){
                $("#categories")
                    .append('<p></p>')
                    .append('<p>category: ' + item.name+ ' ( id : ' + item.id+ '  )</p>');
                if ( i == 10 ) return false;
            });
        });



    $("#button").click(function(){

        $.getJSON( "https://app.ticketmaster.com/commerce/v2/events/3A004EFFFBB168E6/offers.json?apikey="+apikey ,
        //$.getJSON( "https://app.ticketmaster.com/commerce/v2/events/05004F24E0B864B3/offers.json?apikey="+apikey ,
            function(result){
                console.log('\n search/event?aid=852425', result);
        });

        var MIN_COUNT =200;
        var count = Math.round( Math.random(1)*500 );
        var price = Math.round( Math.random(1)*500 );
        var showCount = function (){
            $("#count").html('<p><b>'+count+'</b> price is: <b>'+price+'$</b></p>');
            if(count < MIN_COUNT){
                console.log(count , 'less ten '+ MIN_COUNT );
                var auction = $("#count")
                    .html('<p>There are less then <b style="color: #2a7ae2" >'+MIN_COUNT+'</b> tickets left, so you can set your price in auction</p>')
                    .append('<p><b>'+count+'</b> price is: <b>'+price+'.00$</b></p>')
                    .append('set your price(more then '+price+'.00$ ): <input type="number"> <button id="newPrice">send my price offer</button>');

                auction.wrapAll('<div class="auction-wrapper"></div>');
                $('.auction-wrapper').css("border" ," 2px solid orange" );

                $("#newPrice").click(function(){
                    $("#count").append('new price is send');
                    return false;
                });
            }

        };
        showCount();
    });



});
