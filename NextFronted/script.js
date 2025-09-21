document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.review-carousel-track');
    const originalReviewCards = Array.from(document.querySelectorAll('.review-carousel-track > .review-card'));
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');

    let currentLogicalIndex = 0;
    const totalOriginalCards = originalReviewCards.length;

    function getCardsPerView() {
        if (window.innerWidth <= 768) {
            return 1;
        } else if (window.innerWidth <= 992) {
            return 2;
        } else {
            return 2;
        }
    }

    const cardsPerView = getCardsPerView();

    function setupInfiniteCarousel() {
        while (carouselTrack.firstChild) {
            carouselTrack.removeChild(carouselTrack.firstChild);
        }

        for (let i = 0; i < cardsPerView; i++) {
            const clonedCard = originalReviewCards[totalOriginalCards - cardsPerView + i].cloneNode(true);
            carouselTrack.appendChild(clonedCard);
        }

        const prependedClones = [];
        for (let i = 0; i < cardsPerView; i++) {
            prependedClones.push(carouselTrack.children[i]);
        }
        prependedClones.reverse().forEach(clone => {
            carouselTrack.insertBefore(clone, carouselTrack.firstChild);
        });

        originalReviewCards.forEach(card => carouselTrack.appendChild(card));

        for (let i = 0; i < cardsPerView; i++) {
            const clonedCard = originalReviewCards[i].cloneNode(true);
            carouselTrack.appendChild(clonedCard);
        }

        const initialPhysicalIndex = cardsPerView;
        const initialOffset = initialPhysicalIndex * getCardWidth();

        carouselTrack.style.transition = 'none';
        carouselTrack.style.transform = `translateX(${-initialOffset}px)`;

        // No need for a setTimeout here, updateCarousel will apply active class instantly.
    }

    function getCardWidth() {
        const allCardsInTrack = carouselTrack.querySelectorAll('.review-card');
        if (allCardsInTrack.length === 0) return 0;
        return allCardsInTrack[0].offsetWidth + (parseFloat(getComputedStyle(allCardsInTrack[0]).marginLeft) * 2);
    }

    // --- MODIFIED updateCarousel Function ---
    function updateCarousel(isInstantScroll = false) {
        const allPhysicalCards = Array.from(carouselTrack.querySelectorAll('.review-card'));
        const cardWidth = getCardWidth();

        let currentPhysicalIndex = cardsPerView + currentLogicalIndex;

        const translateValue = -currentPhysicalIndex * cardWidth;

        // Apply transition only if not an instant scroll (for jumps)
        carouselTrack.style.transition = isInstantScroll ? 'none' : 'transform 0.5s ease-in-out';
        carouselTrack.style.transform = `translateX(${translateValue}px)`;

        // Immediately update active class for the target physical slide
        allPhysicalCards.forEach((card, index) => {
            card.classList.remove('active');
            if (index === currentPhysicalIndex) {
                card.classList.add('active');
            }
        });

        // Handle infinite looping (teleportation)
        // This logic needs to check the `currentLogicalIndex`
        // AFTER the animation *would have* completed, if it were animated.
        // We'll use a `setTimeout` to mimic waiting for the animation.
        // BUT, the `active` class is applied instantly, so the visual "inactive" flicker is gone.
        if (!isInstantScroll) { // Only run this logic if it was an animated scroll
            setTimeout(() => {
                let needsJump = false;
                let newLogicalIndex = currentLogicalIndex;
                let newPhysicalIndex;

                if (currentLogicalIndex >= totalOriginalCards) {
                    needsJump = true;
                    newLogicalIndex = 0;
                    newPhysicalIndex = cardsPerView;
                } else if (currentLogicalIndex < 0) {
                    needsJump = true;
                    newLogicalIndex = totalOriginalCards - 1;
                    newPhysicalIndex = cardsPerView + (totalOriginalCards - 1);
                }

                if (needsJump) {
                    carouselTrack.style.transition = 'none'; // Disable transition for instant jump
                    const jumpTranslateValue = -newPhysicalIndex * cardWidth;
                    carouselTrack.style.transform = `translateX(${jumpTranslateValue}px)`;
                    currentLogicalIndex = newLogicalIndex; // Update logical index for next navigation

                    // Re-apply active class immediately after the jump
                    // We need to re-evaluate which card is active after the instant jump
                    // This function effectively re-runs the active class setting for the new physical position
                    allPhysicalCards.forEach((card, index) => {
                        card.classList.remove('active');
                        if (index === newPhysicalIndex) { // Apply active to the new physical position
                            card.classList.add('active');
                        }
                    });

                    // Re-enable transition for subsequent animated scrolls
                    setTimeout(() => {
                        carouselTrack.style.transition = 'transform 0.5s ease-in-out';
                    }, 50); // Small delay
                }
            }, 500); // This delay matches your CSS transition duration.
                     // It's when we *check* if a jump is needed.
                     // The *active* class update isn't waiting for this.
        }
    }

    function showNextCards() {
        currentLogicalIndex++;
        updateCarousel(); // Default isInstantScroll to false
    }

    function showPrevCards() {
        currentLogicalIndex--;
        updateCarousel(); // Default isInstantScroll to false
    }

    nextArrow.addEventListener('click', showNextCards);
    prevArrow.addEventListener('click', showPrevCards);

    // Initial setup: Duplicate slides and set starting position
    setupInfiniteCarousel();
    updateCarousel(true); // Call with true for initial instant setup of position and active class

    window.addEventListener('resize', () => {
        currentLogicalIndex = 0;
        setupInfiniteCarousel();
        updateCarousel(true);
    });
});