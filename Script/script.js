$(document).ready(function() {

    $( document ).on( 'click', '.section-type', function( event ) {
      // Prevent the default action of the event
      event.preventDefault();
      console.log("Perception Back End Loaded");  

      // Assign the id of the clicked element to a variable named id
      var id = $( this ).attr( 'id' );
        // console.log(id);

      // Remove the class 'is-active' from all menu item headings
      $( '.section-type' ).removeClass( 'is-active' );

      console.log( $('.section-type').hasClass( 'is-active'));

      console.log(this);
      
      $( this ).addClass( 'is-active' );

      // Once you're started with TODO #2, call the getMenu function here,
      // passing id as the argument
      // getMenu( id );
    });
  });


//     // TODO #2 Create a function, getMenu, to get the menu for a course

//     // There are menus available for each course:
//     // - http://mksrestaurantapi.herokuapp.com/menu-breakfast.json
//     // - http://mksrestaurantapi.herokuapp.com/menu-lunch.json
//     // - http://mksrestaurantapi.herokuapp.com/menu-dinner.json
//     // - http://mksrestaurantapi.herokuapp.com/menu-dessert.json
//     // - http://mksrestaurantapi.herokuapp.com/menu-cocktails.json
//     // - http://mksrestaurantapi.herokuapp.com/menu-wine.json

//     // By setting a parameter of `course`, we can pass the course we want the
//     // menu for into this function

//     function getMenu( course ) {
//       // Use `$.getJSON` to get the menu for whatever menu heading was clicked
//       $.getJSON( 'http://mksrestaurantapi.herokuapp.com/menu-' + course + '.json', function( json ) {
//         // console.log("what menu should I be seeing", course);
//         populateMenu( json );
//         // Once you're started with TODO #3, call the populateMenu function here
//         // and pass json as the argument
//       });
//     }



//     // TODO #3 Create a function, populateMenu, to add a menu to the DOM

//     function populateMenu( json ) {
//       html = '';

//       for( var i = 0; i < json.length; i++ ){
//         html += '<div class="menu-group columns small-12 medium-4">';
//         html += '<h4>' + json[i].section + '</h4>';

//         for( var j = 0; j < json[i].content.length; j++ ) {
//           html += '<div class="menu-item">';
//           html += '<div class="menu-item-dish">' + json[i].content[j].dish + '</div>';
//               if (json[i].content[j].ingredients != undefined) html += '<p class="menu-item-ingredients">' + json[i].content[j].ingredients + '</p>';
//           html += '<div class="menu-item-price">' + json[i].content[j].price + '</div>';
//           html += '</div>';
//         }

//         html += '</div>';


//       }

//       // Use `.html` to replace the contents of `.menu-section-content`
//       $( '.menu-section-content' ).html( html );

//     }



//     // TODO #4 Call getMenu with a menu of your choice and set that menu's
//     // header to active so that a menu is loaded with the page by default

//     getMenu('dinner');

