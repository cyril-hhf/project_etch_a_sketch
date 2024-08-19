
document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');

    for (let i = 1; i <= 256; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.addEventListener('mouseenter', () => {
            gridItem.classList.add('hovered');
        });
        gridContainer.appendChild(gridItem);
    }
});