document.addEventListener('DOMContentLoaded', () => {
    const card_headings = document.querySelectorAll('.accordian-heading');

    const handleAccordianToggle = (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        const currentParent = event.target.closest('.accordian-card');
        const currentContentEl = currentParent.querySelector('.accordian-body');
        if(currentParent.classList.contains('open')){
            currentParent.classList.remove('open');
        } else {
            currentContentEl.style.display = 'block';
            requestAnimationFrame(() => {
                currentParent.classList.add('open');
            });
        }
    }

    
    card_headings.forEach((cardHeading) => {
        cardHeading.addEventListener('click', handleAccordianToggle);
        
        // handle for removal of display property when accordian is closing
        let cardBody;
        let currentParent;
        currentParent = cardHeading.closest('.accordian-card');
        cardBody = currentParent.querySelector('.accordian-body');
        cardBody.addEventListener('transitionend', () => {
            if(!currentParent.classList.contains('open')){
                cardBody.style.removeProperty('display');
            }
        })
    });
    
});