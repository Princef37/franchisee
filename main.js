function tp() {
    var toggle = document.getElementById("toggle");

      // Toggle the 'hide' class to hide or show the side panel
      toggle.classList.toggle('hide');
}

function toggleSubItems(id) {
    var subItems = document.getElementById(id);
    var toggleItem = subItems.previousElementSibling;

    // Toggle the visibility of the sub-items
    if (subItems.style.display === "block") {
        subItems.style.display = "none";
    } else {
        subItems.style.display = "block";
    }

    // Toggle the class for the rotation of the toggle symbol
    toggleItem.classList.toggle('expanded');
}