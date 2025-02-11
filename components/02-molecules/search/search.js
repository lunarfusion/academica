
;(function (Drupal, once) {
  Drupal.behaviors.searchBehaviour = {
    attach: function (context) {
      once(
        "search-processed",
        context.querySelectorAll("#search-toggle")
      ).forEach((searchTrigger) => {
        const searchForm = context.querySelector("#search-form-drawer")
        if (!searchForm) {
          return
        }

        function showHideSearch(event) {
          event.preventDefault()
          console.log("search clicked")

          // Search-open removes the closed transform from the form it contains
          searchForm.classList.toggle("search-open")

          // aria-expanded switch
          // get the aria-expanded state of the toggler and if it's true, make it false
          if (searchForm.getAttribute("aria-expanded") === "true") {
            searchForm.setAttribute("aria-expanded", "false")
          } else {
            // otherwise if it's false, make it true
            searchForm.setAttribute("aria-expanded", "true")
          }
        }

        ;["mousedown", "focus.keydown"].forEach((event) =>
          searchTrigger.addEventListener(event, showHideSearch)
        )
      })
    }
  }
})(Drupal, once)
