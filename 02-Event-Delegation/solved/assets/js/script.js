var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

function handleFormSubmit(event) {
  event.preventDefault();

  var shoppingItem = $('input[name="shopping-input"]').val();

  if (!shoppingItem) {
    console.log('No shopping item filled out in form!');
    return;
  }

  var shoppingListItemEl = $('<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">');
  shoppingListItemEl.text(shoppingItem);

  // add delete button to remove shopping list item
  shoppingListItemEl.append('<button class="btn btn-danger btn-small delete-item-btn">Remove</button>');

  // print to the page
  shoppingListEl.append(shoppingListItemEl);

  // clear the form input element
  $('input[name="shopping-input"]').val('');
}

// Function to handle removing a list item
function handleItemRemoval(event) {
  // Ensure the clicked element has the class .delete-item-btn
  if ($(event.target).hasClass('delete-item-btn')) {
    // Remove the parent li element of the clicked button
    $(event.target).closest('li').remove();
  }
}

// Use event delegation to listen for click events on any element with a class of .delete-item-btn
shoppingListEl.on('click', '.delete-item-btn', handleItemRemoval);

// Event listener for form submission
shoppingFormEl.on('submit', handleFormSubmit);




// var shoppingFormEl = $('#shopping-form');
// var shoppingListEl = $('#shopping-list');

// function handleFormSubmit(event) {
//   event.preventDefault();

//   var shoppingItem = $('input[name="shopping-input"]').val();

//   if (!shoppingItem) {
//     console.log('No shopping item filled out in form!');
//     return;
//   }

//   var shoppingListItemEl = $(
//     '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
//   );
//   shoppingListItemEl.text(shoppingItem);

//   // add delete button to remove shopping list item
//   shoppingListItemEl.append(
//     '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
//   );

//   // print to the page
//   shoppingListEl.append(shoppingListItemEl);

//   // clear the form input element
//   $('input[name="shopping-input"]').val('');
// }

// // TODO: Create a function to handle removing a list item when `.delete-item-btn` is clicked

// // TODO: Use event delegation and add an event listener to `shoppingListEl` to listen for a click event on any element with a class of `.delete-item-btn` and execute the function created above

// shoppingFormEl.on('submit', handleFormSubmit);
