$(document).ready(function() {


// Assign the id of the clicked element to a variable named id, so that it can differentiate between question sections

    $( document ).on( 'click', '.section-type a', function( event ) {
      event.preventDefault();

      var id = $( this ).attr( 'id' );
      // Removing the class is-active from nav section
       $( '.section-type a' ).removeClass( 'is-active' );
      // Add the class is-active to the clicked nav secion
      $( this ).addClass( 'is-active' );
      // this line toggles the selected section into the H1 
      $('.section-question h1').replaceWith('<h1>' + id + '</h1>');

      console.log(id);


// ethical questions example array 

          var ethicalArray = [['Are you at risk of not getting call back from a job interview based on your overall attractivness?', 'Percent chance an attractive person will receive a callback after an interview 72.32%'],['If you knew would not get caught cheating on your significant other would you do it?', 'Men 74% Women 68%']];

// financial questions example array 

          var financialArray = [['Are you more likely to be homeless as a man?', 'Men are 44% more likely to be homeless'],['Do you typically have enough money on hand to cover one mortgage/rent payment or to purchase one month of groceries?', 'According to Healthways.com, 64% of Americans don’t have enough cash on hand to cover one mortgage payment or to purchase one month of groceries for their families.']];

// health questions example array 

          var healthArray = [['Do you think males or femals have a higher risk of dying from heat related causes?', '2013: 63% of all heat related fatalities were men. (Men 70-79 are the highest risk)'],['Do you feel it is safe to canoe in Town Lake?', 'Your risk of injuy is roughly 1/10,000']];

// recreation questions example array 

          var recreationArray = [['Do you think you think it is safe to ride a bike in Austin?', 'On Average, 6 people per year die in Austin on their Bikes'],['Do you think it iss safer to drive a motorcycle during the day or at night? ', '60% of motorcycle accidents occur during the daytime']];

// saftey questions example array 

          var safteyArray = [['Is it risky to chew on a ball point pen?', 'On average, 100 people choke to death on ballpoint pens every year'],['Do you think sleeping on a pillow is dangerous?', 'More than 6,000 people with pillow-related injuries check into U.S. emergency rooms every year.']];

// function to populate and loop through questions on each page

  function questionPopulate (questions){

          // for (var i = id+'Array'.length - 1; i >= 0; i--) {
          //   id+'Array'[i]
          // };

          // if (id="Ethical") {
        // $(".p-question").replaceWith(id);

          // };




};
});
});
    