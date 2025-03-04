document.addEventListener("DOMContentLoaded", function () {
    function checkVisibility() {
        const sections = document.querySelectorAll('.filter, .productos, #title_prod');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
    
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                section.classList.add('show');
            } 
            else {
                section.classList.remove('show');
            }
        });
    }
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('load', checkVisibility);
    const priceRange = document.getElementById("priceRange");
    const priceValue = document.getElementById("priceValue");
    if (priceRange && priceValue) {
        priceRange.addEventListener("input", function() {
            priceValue.textContent = `$${new Intl.NumberFormat().format(priceRange.value)}`;
        });
    }
    const resetFilters = document.getElementById("resetFilters");
    if (resetFilters) {
        resetFilters.addEventListener("click", function() {
            document.querySelectorAll(".filter_check input, select").forEach(input => {
                if (input.type === "checkbox" || input.type === "radio") {
                    input.checked = false;
                } else {
                    input.value = "all";
                }
            });
        });
    }
    let currentIndex = 0;
    const images = document.querySelectorAll(".prod_comprar_carousel_images img");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    if (images.length > 0) {
        function moveSlide(step) {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + step + images.length) % images.length;
            images[currentIndex].classList.add("active");
        }
        if (prevButton && nextButton) {
            prevButton.addEventListener("click", () => moveSlide(-1));
            nextButton.addEventListener("click", () => moveSlide(1));
        }
    }
});
