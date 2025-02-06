  // the search form element has a search-closed class applied in the block--search twig template
// Search form open/close trigger
((Drupal) => {

  let searchTrigger = document.getElementById("search-toggle");
  let searchForm = document.getElementById("search-form-drawer");

  ["mousedown", "focus.keydown"].forEach((event) =>
    searchTrigger?.addEventListener(event, showHideSearch)
  );

    function showHideSearch(event) {
      alert("Click event worked");
      console.log('search clicked');

//       event.preventDefault();
//       console.log('search clicked');
//
//       // Search-open removes the closed transform from the form it contains
//       searchForm.classList.toggle("search-open");
//
//
//       // aria-expanded switch
//       // get the aria-expanded state of the toggler and if it's true, make it false
//       if (searchForm.getAttribute("aria-expanded") === "true") {
//         searchForm.setAttribute("aria-expanded", "false");
//       } else {
//         // otherwise if it's false, make it true
//         searchForm.setAttribute("aria-expanded", "true");
//       };
    };

})(Drupal);
