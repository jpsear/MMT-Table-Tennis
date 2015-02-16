$(document).ready(function() {
  // var LeagueTable = document.registerElement('league-table', {
  //   prototype: Object.create(HTMLElement.prototype),
  //   extends: 'div'
  // });

  var URL = "1hbk9T1h9hZeSvj_wegtb_4l0I7lF-yk7Ja1R5tcx3mo";
  Tabletop.init( { key: URL, callback: myData, simpleSheet: true } )

  function myData(data) {
    console.log(data)

    var tableOptions = { 
      "data": data, 
      "pagination": 30, 
      "tableDiv": "#leaderboard"
    }

    Sheetsee.makeTable(tableOptions)
    $('.loader').hide();

    var topPlayer = $('#leaderboard').find('tbody tr:first .player'),
        html = topPlayer.html();
        topPlayer.html('<a target="blank" title="groovy baby, yeeeaaahhh" href="http://media.giphy.com/media/14nrGscYvd6wMw/giphy.gif">'+ html + '</a>');

    console.log('Easter eggs:\n1. Kate Middleton\n2. tbc...')
  }
});