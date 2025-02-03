  // the search form element has a search-closed class applied in the block--search twig template
// Search form open/close trigger
((Drupal) => {
//
//   // Create open/close toggle button
//   const searchTrigger = document.getElementById("search-toggle");
//
//   // Create form wrapper object - this contains the form being opened/closed
//   const searchForm = document.getElementById("search-form-drawer");
//
//
//   // Add both click and focus keydown events
//   ['mousedown', 'focus.keydown'].forEach(event => searchTrigger.addEventListener(event, showHideSearch));
//
//   function showHideSearch(event) {
//     event.preventDefault();
//     console.log('search clicked');
//
//     // Search-open removes the closed transform from the form it contains
//     searchForm.classList.toggle("search-open");
//
//
//     // aria-expanded switch
//     // get the aria-expanded state of the toggler and if it's true, make it false
//     if (searchForm.getAttribute("aria-expanded") === "true") {
//       searchForm.setAttribute("aria-expanded", "false");
//     } else {
//       // otherwise if it's false, make it true
//       searchForm.setAttribute("aria-expanded", "true");
//     };
//   };


})(Drupal);
