const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let startingPosition = 0;
prev.disabled = true;

prev.addEventListener('click', () => {
    slideCheck();

    removeActive(slides[startingPosition]);
    startingPosition--;
    addActive(slides[startingPosition]);
    addDot(startingPosition);

    slideCheck();
});

next.addEventListener('click', () => {
    slideCheck();

    removeActive(slides[startingPosition]);
    startingPosition++;
    addActive(slides[startingPosition]);
    addDot(startingPosition);

    slideCheck();
});

dots.forEach((item, index) => {
    item.addEventListener('click', () => {
        startingPosition = index;

        slideCheck();
        addDot(index);
        resetActive();
        addActive(slides[index]);
    });
});

/*------------------------------------------------------*/

const addActive = (element) => {
    element.classList.add('active');
}

const removeActive = (element) => {
    element.classList.remove('active');
}

const resetActive = () => {
    slide.forEach(item => {
        item.classList.remove('active');
    });
}

const slideCheck = () => {
    prev.disabled = false;
    next.disabled = false;

    if (startingPosition === 0) {
        prev.disabled = true;
        return;
    }
    if (startingPosition === 2) {
        next.disabled = true;
        return;
    }
}

const addDot = (numberOfActiveSlides) => {
    dots.forEach((item, index) => {
        if (index === numberOfActiveSlides)
            addActive(item);
        else
            removeActive(item);
    });
}