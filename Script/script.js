$(document).ready(function() {

    $( document ).on( 'click', function( event ) {
      event.preventDefault();
        
      // Assign the id of the clicked element to a variable named id, so that it can differentiate between question sections
      var id = $( this ).attr( 'id' );
          console.log(this);



          // ethical questions example array 

          var ethical = [['Are you at risk of not getting call back from a job interview based on your overall attractivness?', 'Percent chance an attractive person will receive a callback after an interview 72.32%'],['If you knew would not get caught cheating on your significant other would you do it?', 'Men 74% Women 68%']];

          // financial questions example array 

          var financial = [['Are you more likely to be homeless as a man?', 'Men are 44% more likely to be homeless'],['Do you typically have enough money on hand to cover one mortgage/rent payment or to purchase one month of groceries?', 'According to Healthways.com, 64% of Americans don’t have enough cash on hand to cover one mortgage payment or to purchase one month of groceries for their families.']];

          // health questions example array 

          var health = [['Do you think males or femals have a higher risk of dying from heat related causes?', '2013: 63% of all heat related fatalities were men. (Men 70-79 are the highest risk)'],['Do you feel it is safe to canoe in Town Lake?', 'Your risk of injuy is roughly 1/10,000']];

          // recreation questions example array 

          var recreation = [['Do you think you think it is safe to ride a bike in Austin?', 'On Average, 6 people per year die in Austin on their Bikes'],['Do you think it iss safer to drive a motorcycle during the day or at night? ', '60% of motorcycle accidents occur during the daytime']];

          // saftey questions example array 

          var saftey = [['Is it risky to chew on a ball point pen?', 'On average, 100 people choke to death on ballpoint pens every year'],['Do you think sleeping on a pillow is dangerous?', 'More than 6,000 people with pillow-related injuries check into U.S. emergency rooms every year.']];

          // javascript to populate and loop through questions on each page

      var questionPopulate = "<ul>"

            // Create your for loop here
            // HINT: the string should look like '<li>' + friends[x] + "</li>" + ....

                var runQuestion = function(){ 
                      for(i=0; i < friends.length; i++) {
                      list += '<li>'+sconomic[i]+ '</li>'
                };
                

                var changeQuestion = function(){
                    friends.push(friendName);
                };



                  list = list + '</li>'


                  $("body").append(list);
                  

                   $("#addFriend").on('click', function(e) {
                      e.preventDefault();
                        var createList = $("#friendName").val(); 
});
};
});
});
    