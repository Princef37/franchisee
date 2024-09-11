let hide = document.getElementById('hide-search');
let show = document.getElementById('show-search');

let searchDiv = document.getElementsByClassName('search-bar-div');

hide.addEventListener('click', function () {
    let searchDiv = document.querySelector('.search-bar-div');
    searchDiv.style.width = '0px';
})
show.addEventListener('click', function () {
    let searchDiv = document.querySelector('.search-bar-div');
    searchDiv.style.width = '18rem';
})

document.getElementById('fullscreen-button').addEventListener('click', function () {
    let icon = document.getElementById('logo1')
    if (document.fullscreenElement) {
        // Exit fullscreen mode
        if (document.exitFullscreen) {
            document.exitFullscreen();
            // icon.classList.remove('fa-expand');
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
            // icon.classList.remove('fa-expand');
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
            // icon.classList.remove('fa-expand');
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
            // icon.classList.remove('fa-expand');
        }
        icon.classList.remove('fa-compress');
        icon.classList.add('fa-expand');
    } else {
        // Enter fullscreen mode
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
            // icon.classList.add('fa-expand');
        } else if (document.documentElement.mozRequestFullScreen) { // Firefox
            document.documentElement.mozRequestFullScreen();
            // icon.classList.add('fa-expand');
        } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
            document.documentElement.webkitRequestFullscreen();
            // icon.classList.add('fa-expand');
        } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
            document.documentElement.msRequestFullscreen();
            // icon.classList.add('fa-expand');
        }
        icon.classList.add('fa-compress');
        icon.classList.remove('fa-expand');
    }
});


function tp() {
    var toggle = document.getElementById("toggle");
    let right_con = document.getElementById("right-container");

    // Toggle the 'hide' class to hide or show the side panel
    let isset = toggle.classList.toggle('hide');
    if (isset) {
        right_con.style.width = '100vw';
        right_con.style.marginLeft = '0vw';
    } else {
        right_con.style.width = '80vw';
        right_con.style.marginLeft = '18.5vw';
    }

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

function loadContent(url) {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Configure it: GET-request for the URL /article/.../load
    xhr.open('GET', url, true);

    // Set up a function that is called when the request is complete
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Successful response
            document.getElementById('right-container').innerHTML = xhr.responseText;

            // localStorage.setItem('savedContent', xhr.responseText);
        } else {
            // Handle error
            document.getElementById('right-container').innerHTML = 'Error loading content.';
        }

    };
    xhr.send();
}

window.onload = function () {
    var savedContent = localStorage.getItem('savedContent');
    if (savedContent) {
        // document.getElementById('right-container').innerHTML = savedContent;
    }
    else {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', "Dashboard.html", true);

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {

                document.getElementById('right-container').innerHTML = xhr.responseText;

                // localStorage.setItem('savedContent', xhr.responseText);
            } else {

                document.getElementById('right-container').innerHTML = 'Error loading content.';
            }

        };
        xhr.send();
    }
};
// for user_icon
// let usericon = document.querySelector('.user_ic');
// let userclass = document.querySelector('.user-1');

//     usericon.addEventListener('click', function () {
//         if (userclass.style.display === "none") {
//             userclass.style.display = "block";
//         }
//         else {
//             userclass.style.display = "none";
//         }
//     });

// document.addEventListener('click', function (event) {
//     // Check if the click was outside of the userclass and usericon
//     if (!event.target.closest('.user-1')&& !event.target.closest('.user_ic')) {
//         if (userclass.style.display === 'block') {
//             userclass.style.display = 'none';
//         }
//     }
// });
// for cus_care icon
// let cus_care_icon = document.querySelector('.support_text');
// let cus_care = document.querySelector('.cus_care');

//     cus_care_icon.addEventListener('click', function () {
//         if (cus_care.style.display === "none") {
//             cus_care.style.display = "block";
//         }
//         else {
//             cus_care.style.display = "none";
//         }
//     });

// document.addEventListener('click', function (event) {
//     // Check if the click was outside of the userclass and usericon
//     if (!event.target.closest('.cus_care')&& !event.target.closest('.support_text')) {
//         if (cus_care.style.display === 'block') {
//             cus_care.style.display = 'none';
//         }
//     }
// });

// for cus_care icon
// let powerofficon = document.querySelector('.poweroff-icon');
// let poweroff = document.querySelector('.poweroff');

//     powerofficon.addEventListener('click', function () {
//         if (poweroff.style.display === "none") {
//             poweroff.style.display = "block";
//         }
//         else {
//             poweroff.style.display = "none";
//         }
//     });

// document.addEventListener('click', function (event) {
//     // Check if the click was outside of the userclass and usericon
//     if (!event.target.closest('.poweroff')&& !event.target.closest('.poweroff-icon')) {
//         if (poweroff.style.display === 'block') {
//             poweroff.style.display = 'none';
//         }
//     }
// });

// this is for front page
// this is front page end
