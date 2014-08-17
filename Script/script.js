$(document).ready(function() {

  var questions = {
        // ethical questions example array 

    Ethical: [
      {
        question: 'Are you at risk of not getting call back from a job interview based on your overall attractivness?', 
        answer: 'Percent chance an attractive person will receive a callback after an interview 72.32%'
      },
      {
        question: 'If you knew would not get caught cheating on your significant other would you do it?', 
        answer: 'Men 74% Women 68%'
      }
    ],

// financial questions example array 

    Financial: [
      ['Are you more likely to be homeless as a man?', 'Men are 44% more likely to be homeless'],['Do you typically have enough money on hand to cover one mortgage/rent payment or to purchase one month of groceries?', 'According to Healthways.com, 64% of Americans don’t have enough cash on hand to cover one mortgage payment or to purchase one month of groceries for their families.']
    ],

// health questions example array 

    Health: [
      ['Do you think males or femals have a higher risk of dying from heat related causes?', '2013: 63% of all heat related fatalities were men. (Men 70-79 are the highest risk)'],['Do you feel it is safe to canoe in Town Lake?', 'Your risk of injuy is roughly 1/10,000']
    ],

// recreation questions example array 

    Recreation: [
      ['Do you think you think it is safe to ride a bike in Austin?', 'On Average, 6 people per year die in Austin on their Bikes'],['Do you think it iss safer to drive a motorcycle during the day or at night? ', '60% of motorcycle accidents occur during the daytime']
    ],

// saftey questions example array 

    Saftey: [
      ['Is it risky to chew on a ball point pen?', 'On average, 100 people choke to death on ballpoint pens every year'],['Do you think sleeping on a pillow is dangerous?', 'More than 6,000 people with pillow-related injuries check into U.S. emergency rooms every year.']
    ]
  };

  var currentQ = 0;


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

      // Traversing Arrays
      // console.log(questions[id]);
      // console.log(questions[id][0]);
      // console.log(questions[id][0][0]);

      // Traversing Objects
      console.log('q: ' + questions.Ethical[0].question);
      console.log('a: ' + questions.Ethical[0].answer);
      console.log('q: ' + questions.Ethical[1].question);
      console.log('a: ' + questions.Ethical[1].answer);

// function to populate and loop through questions on each page


// create an if then function that checks if the ID is equal to a certain id. if it is, then we want to call that array and loop through it 

      $('.p-question').replaceWith('<p class="p-question">' + questions[id][currentQ].question + '</p>');

      currentQ += 1;

      console.log(currentQ);

// '<div class="row">
//             <div class="button-container column large-6 column medium-6">
//               <a class="button">Men</a>
//               <a class="button">Women</a>
//             </div>'




});
});
    