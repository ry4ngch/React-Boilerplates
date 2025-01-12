const initializeSalientTimeline = () => {
    const timeline = document.querySelector('.timeline');

    const items = [...timeline.querySelectorAll('ul li')];
    const totalItems = items.length;  // Total number of list items
    const isHorz = timeline.classList.contains('timeline-horz');  // Check if timeline is horizontal
    const timeline__ul = timeline.querySelector('ul');
    const isMidScreen = () => window.innerWidth > 768 && window.innerWidth < 992 ; //middle screen size
    const toggleBackBtn = document.querySelector('.toggle-back');
    const toggleForwardBtn = document.querySelector('.toggle-forward');

    // Retrieve showCount from data-show-count attribute
    let showCount = parseInt(timeline.dataset.showCount, 10) || 3;  // Default to 3 if undefined
    let startIndex = 0;

    /** Temporary Fix for Staggered Horizontal Timeline events layout */
    //** Step 1:  get the max height of initialize li element **/
    const max_li_height = Math.max(...items.map((el) => (el.offsetHeight)));
    const marginTopAfterEventIcon = 2; //em size
    const marginBtmForEventTimeline = 6.5 //em size
    
    // Get the font-size of the base element in pixels
    const fontSize = parseFloat(getComputedStyle(timeline).fontSize);
    
    // initialize the height of timeline horz staggered
    if(['timeline-staggered', 'timeline-horz'].every(cls => timeline.classList.contains(cls)) && isMidScreen()) {
        timeline__ul.style.setProperty('height', `${max_li_height*2  + (marginTopAfterEventIcon * fontSize) + (marginBtmForEventTimeline * fontSize)}px`);
    }

    //** Step 2:  check if the timeline is horizontal and staggered and resize the Ul **/
    const resizeTimelineUl = () => {
        
        if(['timeline-staggered', 'timeline-horz'].every(cls => timeline.classList.contains(cls)) && isMidScreen()){
              
            // Measure the height of the inner <small> instead of the <li>
            const maxTextHeight = Math.max(
                ...items.map(li => {
                    const smallText = li.querySelector('small'); // Adjust the selector if needed
                    return smallText ? smallText.offsetHeight : 0; // Safely handle missing <small>
                })
            ); 
            
            if(max_li_height !== -Infinity){
                const totalHeightOfTimelineDiv = max_li_height*2 + Math.max(0, (maxTextHeight - max_li_height))*2 + (marginTopAfterEventIcon * fontSize) + (marginBtmForEventTimeline * fontSize);
            
                timeline__ul.style.setProperty('height', `${totalHeightOfTimelineDiv}px`);
            }
            
        } else {
            timeline__ul.style.removeProperty('height');
        };
    }

    /** End of Temporary Fix **/
    

    // Function to calculate the total height or width of the currently visible items
    const calculateItemSize = () => {
        let totalSize = 0;
        // Calculate the total width/height of the first 'showCount' items
        for (let i = startIndex; i < startIndex + showCount; i++) {
            if (!isHorz) {
                totalSize += items[i]?.offsetHeight || 0;  // Add height if vertical
            }
        }
        return totalSize;
    };

    // Update the size (height) of the ul element to match the visible items
    const updateUlSize = () => {
        if (!isHorz) {  // Only adjust height for vertical layout
            const ulSize = calculateItemSize();  // Get the total size of visible items (height)
            timeline.querySelector('ul').style.height = `${ulSize}px`;  // Update height for vertical
        }
    };

    // Update item visibility based on scroll or navigation
    const updateVisibleItems = () => {

        // set all items to be display none first for animation to take effect
        items.forEach(item => {
            item.style.display = 'none';
            item.style.opacity = 0;
            item.style.transform = isHorz ? 'translateX(200%)' : 'translateY(200%)';
        });

        // now set the items to be visible or invisible after timeout
        requestAnimationFrame(() => {
            items.forEach((item, index) => {
                if (index >= startIndex && index < startIndex + showCount) {
    
                    item.style.display = 'block';  // Make sure visible items are displayed
                    
                    // Force reflow to ensure browser registers display changes
                    //void item.offsetWidth; // Access a layout property to trigger reflow

                    requestAnimationFrame(() => {
                        item.style.transform = isHorz ? `translateX(0)` : `translateY(0)`; // Reset position for visible items
                        item.style.opacity = 1;
                    });  
                } else {
                    item.style.transform = isHorz ? `translateX(200%)` : `translateY(200%)`; // Shift invisible items
                    item.style.display = 'none';  // Hide invisible items
                    item.style.opacity = 0;
                }
            });
        });
        
    };

    const setToggleBtnState = () => {
        // Disable back button if at the start of the list
        if (startIndex === 0) {
            toggleBackBtn.setAttribute('disabled', true);
            toggleBackBtn.style.cursor = "not-allowed";
        } else {
            toggleBackBtn.removeAttribute('disabled');
            toggleBackBtn.style.removeProperty('cursor');
        }
    
        // Disable forward button if at the end of the list
        if (startIndex + showCount >= totalItems) {
            toggleForwardBtn.setAttribute('disabled', true);
            toggleForwardBtn.style.cursor = "not-allowed";
        } else {
            toggleForwardBtn.removeAttribute('disabled');
            toggleForwardBtn.style.removeProperty('cursor');
        }
    };


    // Handle back button click
    toggleBackBtn.addEventListener('click', () => {
        if (startIndex - showCount < 0) {
            // Prevent moving before the start
            startIndex = 0;
        } else {
            // Move back by one batch
            startIndex -= showCount;
        }

        // Update everything
        setToggleBtnState();
        updateVisibleItems();
        updateUlSize(); // Adjust height for the new visible items
    });

    toggleForwardBtn.addEventListener('click', () => {
        const maxStartIndex = totalItems - showCount; // The last valid start index
    
        if (startIndex + showCount > maxStartIndex) {
            // Prevent moving beyond the end
            startIndex = maxStartIndex;
        } else {
            // Move forward by one batch
            startIndex += showCount;
        }
    
        // Update everything
        setToggleBtnState();
        updateVisibleItems();
        updateUlSize(); // Adjust height for the new visible items
    });

    // Initialize view
    setToggleBtnState();
    updateUlSize();  // Set ul size based on the visible items
    updateVisibleItems();  // Adjust visibility and positions of items

    // for fixing horizontal staggered timeline layout
    window.addEventListener('resize', resizeTimelineUl);
}

export default initializeSalientTimeline;

//window.addEventListener('DOMContentLoaded', initializeSalientTimeline);