document.addEventListener('DOMContentLoaded', () => {
    const card_headings = document.querySelectorAll('.accordian-heading');

    const handleAccordianToggle = (event) => {
        const currentParent = event.target.closest('.accordian-card');
        const currentContentEl = currentParent.querySelector('.accordian-body');
        if(currentParent.classList.contains('open')){
            currentContentEl.style.removeProperty('display');
        } else {
            currentContentEl.style.display = 'block';
        }
        requestAnimationFrame(() => {
            currentParent.classList.toggle('open');
        });
    }
    card_headings.forEach((cardHeading) => {
        cardHeading.addEventListener('click', handleAccordianToggle);
    });
    
});