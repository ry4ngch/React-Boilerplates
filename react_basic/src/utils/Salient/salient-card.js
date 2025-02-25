const initCardTiltEffect = () => {
    // Adjustable resolution (Note: the current CSS only support 10 x 10 grid)
    let cols = 10;
    let rows = 10;

    const card_tilt = document.querySelectorAll('.card_tilt');

    // dynamically setting resolution
    const setResolution = (rows, cols) => {
        card_tilt.forEach(card => {
            card.style.setProperty('--rows', rows);
            card.style.setProperty('--cols', cols);
        })
        
    }

    setResolution(rows, cols);

    // Just for generating the HTML so I don't have to write all that out by hand lol
    const addGrid = (state) => {

        if(state){
            card_tilt.forEach(card => {
                let cells = [];
                let tracker_div = document.createElement('div');
                tracker_div.classList.add('tracker__cells');
                tracker_div.setAttribute('aria-hidden', true);
                
                for (let i=0;i<rows*cols;i++) {
                    cells.push(document.createElement('div'));
                } 
                
                cells.map(cell => cell.classList.add('cell'));
                
                cells.forEach(cell => tracker_div.appendChild(cell));
                card.insertBefore(tracker_div, card.firstChild);
            })
            
        } else {
            card_tilt.forEach(card => {
                const allCells = card.querySelector('.tracker__cells');
                allCells.remove();
            })
            
        }
            
    }

    addGrid(true);

}

export default initCardTiltEffect;