$(document).ready(function() {
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
  }
});