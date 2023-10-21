/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        if (!responsiveNavItem.classList.contains('dropdown-toggle')) {
            responsiveNavItem.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        }
    });

    const workCarouselModal = document.getElementById('workCarouselModal')
    if (workCarouselModal) {
        workCarouselModal.addEventListener('show.bs.modal', event => {
            const button = event.relatedTarget
            const targetSlideID = button.getAttribute('data-bs-set-active')

            // set active carousel item
            const carouselItems = workCarouselModal.querySelectorAll('.carousel-item')
            carouselItems.forEach(carouselItem => {
                carouselItem.classList.remove('active')
            });
            const selectedCarouselItem = workCarouselModal.querySelector(`.carousel-inner #${targetSlideID}`)
            selectedCarouselItem.classList.add('active')

            // set active carousel indicator
            const carouselIndicators = workCarouselModal.querySelectorAll('.carousel-indicator')
            carouselIndicators.forEach(carouselIndicator => {
                carouselIndicator.classList.remove('active')
            });
            const selectedCarouselIndicators = workCarouselModal.querySelector(`.carousel-indicators #${targetSlideID}`)
            selectedCarouselIndicators.classList.add('active')
        })
    }

});
