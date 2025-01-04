const initializeSalientTimeline = () => {
    const timeline = document.querySelector('.timeline');

    const items = [...timeline.querySelectorAll('ul li')];
    const totalItems = items.length;  // Total number of list items
    const isHorz = timeline.classList.contains('timeline-horz');  // Check if timeline is horizontal

    // Retrieve showCount from data-show-count attribute
    let showCount = parseInt(timeline.dataset.showCount, 10) || 3;  // Default to 3 if undefined
    let startIndex = 0;

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
        items.forEach((item, index) => {
            if (index >= startIndex && index < startIndex + showCount) {
                item.style.transform = isHorz ? `translateX(0)` : `translateY(0)`;  // Reset position for visible items
                item.style.display = 'block';  // Make sure visible items are displayed
            } else {
                item.style.transform = isHorz ? `translateX(200%)` : `translateY(200%)`; // Shift invisible items
                item.style.display = 'none';  // Hide invisible items
            }
        });
    };

    // Handle back button click
    document.querySelector('.toggle-back').addEventListener('click', () => {
        if (startIndex - showCount < 0) {
            // Not enough items to form a full batch, go back to the beginning
            startIndex = 0;
        } else {
            // Enough items to go back by a full batch
            startIndex -= showCount;
        }
    
        updateVisibleItems();
        updateUlSize(); // Adjust height for the new visible items
    });

    // Handle forward button click
    document.querySelector('.toggle-forward').addEventListener('click', () => {
        const remainingItems = totalItems - startIndex - showCount; // Calculate remaining items
        if (remainingItems > 0) {
            if (remainingItems >= showCount) {
                startIndex += showCount; // Move forward by a full set
            } else {
                startIndex = totalItems - showCount; // Align to show the last set
            }
            updateVisibleItems();
            updateUlSize(); // Adjust height for the new visible items
        }
    });

    // Initialize view
    updateUlSize();  // Set ul size based on the visible items
    updateVisibleItems();  // Adjust visibility and positions of items
};

export default initializeSalientTimeline;

//window.addEventListener('DOMContentLoaded', initializeSalientTimeline);