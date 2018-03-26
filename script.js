//menu expanded
(function() {

    let menu = {
        navToggle: document.querySelector('.nav-toggle'),
        nav: document.querySelector('nav'),

        doToggle: function(event) {
            event.preventDefault();
            this.navToggle.classList.toggle('expanded');
            this.nav.classList.toggle('expanded');
        }
    };

    menu.navToggle.addEventListener('click', function(event) {
        menu.doToggle(event);
    });
}());

