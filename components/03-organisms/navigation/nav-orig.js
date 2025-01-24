((Drupal) => {
// MOBILE MENU OPEN/CLOSE TOGGLE BUTTON
  // Create open/close toggle button
  const menuTrigger = document.getElementById("menu-toggle");

  // Create form wrapper object - this contains the form being opened/closed
  const mainMenu = document.getElementById("main-menu-hider");

  // Add both click and focus keydown events - use mousedown to preventDefault focus indicator on click
  ['mousedown', 'focus.keydown'].forEach(event => menuTrigger.addEventListener(event, showHideMenu));

  function showHideMenu(event) {
    // preventDefault so focus does not fire on click
    event.preventDefault();

    // Search-open removes the closed transform from the form it contains
    mainMenu.classList.toggle("menu-opened");
    mainMenu.classList.toggle("menu-closed");

    // change toggle button to is-open
    menuTrigger.classList.toggle("is-open");

    // aria-expanded switch
    // get the aria-expanded state of the toggler and if it's true, make it false
    if (mainMenu.getAttribute("aria-expanded") === "true") {
      mainMenu.setAttribute("aria-expanded", "false");
    } else {
      // otherwise if it's false, make it true
      mainMenu.setAttribute("aria-expanded", "true");
    };
  };

// SUBMENU TOGGLE ICONS
  // Add a has-children class to menu-items with submenus
  // find the child menu-wrapper
  const submenuWrappers = document.querySelectorAll('.menu-item .menu-wrapper');

  // Detect if has children
  submenuWrappers.forEach(function(wrapper) {
    // find the parent of menu-wrapper, add has-children class
    wrapper.parentNode.classList.add('menu-item--has-children');

    // collase all by default
    wrapper.parentNode.classList.add('menu-item--collapsed');
    wrapper.parentNode.classList.remove('menu-item--expanded');
  });


// SUBMENU TOGGLE FUNCTION
  // Toggle - Find the span within expanded or collapsed menu items
  // do not use the menu item, as the click area will be too large
  const menuItemDropdownToggles = document.querySelectorAll('.menu-item--has-children > button');

  // TOGGLE ATTRIBUTES - find each toggle object
  menuItemDropdownToggles.forEach(function(dropdownToggle) {
    // Make span into button
    dropdownToggle.setAttribute("aria-expanded", "false");
    dropdownToggle.setAttribute("aria-haspopup", "true");
    dropdownToggle.setAttribute("tabindex", "0");
    dropdownToggle.setAttribute("type", "button");
    dropdownToggle.setAttribute("target", "self");
    dropdownToggle.setAttribute("aria-label", "toggle submenu");

    // Create parent menu item to toggle expanded/collapsed
    const dropdownMenuItemParent = dropdownToggle.parentNode;

    // Find submenu under dropdown
    var anySubMenu = dropdownMenuItemParent.querySelector(".menu");

    // hide submenu by default
    anySubMenu.setAttribute("aria-hidden", "true");

    // hidden links not focusable by default
    let unfocusableLinks = document.querySelectorAll('.menu-item .menu-wrapper .menu a');
    unfocusableLinks.forEach(function(link) {
      link.setAttribute("tabindex", "-1");
    });


// TOGGLE ACTIONS - Add both click and focus keydown events
    ['mousedown', 'focus.keydown'].forEach(event => dropdownToggle.addEventListener(event, showHideDropdown));

      // Toggle click/keydown event
      function showHideDropdown(event) {
        event.preventDefault();
        console.log('dropdown clicked');

        // Find the current nav element
        thisParentNav = dropdownToggle.closest('nav');

  // ALL DROPDOWNS = close
        let allMenuItems = thisParentNav.querySelectorAll('.menu > .menu-item--has-children');
        // collapse all the other dropdowns
        allMenuItems.forEach(function(menuItem) {
          menuItem.classList.remove('menu-item--expanded');
          menuItem.classList.add('menu-item--collapsed');
          //anyOtherSubMenu.setAttribute("aria-hidden", "true");
        });

  // ALL DROPDOWNS = aria-expanded = false
        let allDropdownTriggers = thisParentNav.querySelectorAll('.menu-item--has-children > button');
        allDropdownTriggers.forEach(function(dropdownTrigger) {
          dropdownTrigger.setAttribute("aria-expanded", "false");
        });

  // ALL DROPDOWNS = aria-hidden = true
        let allSubmenus = thisParentNav.querySelectorAll('.menu-item .menu-wrapper .menu');
        allSubmenus.forEach(function(subMenu) {
          subMenu.setAttribute("aria-hidden", "true");
        });

  // THIS DROPDOWN - Expand this dropdown's parent nav item
        dropdownMenuItemParent.classList.add('menu-item--expanded');
        dropdownMenuItemParent.classList.remove('menu-item--collapsed');

  // THIS DROPDOWN - toggle aria expanded
        if (dropdownToggle.getAttribute("aria-expanded") === "false") {
          dropdownToggle.setAttribute("aria-expanded", "true");
          // don't let focus fire on active
          dropdownToggle.blur();
        } else {
          dropdownToggle.setAttribute("aria-expanded", "false");
        };

  // THIS DROPDOWN - unhide submenu
        let currentSubMenu = dropdownMenuItemParent.querySelector(".menu");

        // Make submenu unhidden
        if (currentSubMenu.getAttribute("aria-hidden") === "true") {
          currentSubMenu.setAttribute("aria-hidden", "false");
        } else {
          // otherwise if it's false, make it true
          currentSubMenu.setAttribute("aria-hidden", "true");
        };

  // THIS DROPDOWN - links become focusable
        let focusableLinks = dropdownMenuItemParent.querySelectorAll(".menu a");
        focusableLinks.forEach(function(link) {
          link.setAttribute("tabindex", "0");
        });
    };
  // end showHideDropdown function


// WIP WIP WIP CLOSE ALL ON CLICK OF ANYTHING
    // Need to add keyboard version, close dropdowns when focus leaves menu item
    // Main Menu Only - Close all dropdowns when main content is clicked
    var menuItems = document.querySelectorAll(".menu--main .menu-item");

    document.getElementById("main-content").addEventListener("mousedown", function (event) {
      console.log('clicked');
      event.preventDefault();

      // close all dropdown menus
       menuItems.forEach((item) => {
         item.classList.remove("menu-item--expanded");
         item.classList.add("menu-item--collapsed");
         item.setAttribute("aria-expanded" , "false");
       });
    });
  });
})(Drupal);
