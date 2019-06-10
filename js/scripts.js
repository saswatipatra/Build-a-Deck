$(function() {


  // var cards= [];

    var suits= ["Hearts","Clubs","Diamonds","Spades"];
    var ranks=[ "Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
    suits.forEach(function(suit) {
      ranks.forEach(function(rank){

        // var concat= rank + " of " +suit
        // cards.push(concat);
        $("ol").append("<li>" + rank + " of " + suit + "</li>");
      });

    });
    alert("hi");
});
