//menu expanded
(function () {

    let menu = {
        navToggle: document.querySelector('.nav-toggle'),
        nav: document.querySelector('nav'),

        doToggle: function (event) {
            event.preventDefault();
            this.navToggle.classList.toggle('expanded');
            this.nav.classList.toggle('expanded');
        }
    };

    menu.navToggle.addEventListener('click', function (event) {
        menu.doToggle(event);
    });
}());

//accordion
let accordions = document.getElementsByClassName('accordion-title');

for (let i = 0; i <= accordions.length; i++) {
    accordions[i].onclick = function () {
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}
