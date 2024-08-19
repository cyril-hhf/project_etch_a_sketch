
document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');
    const submitButton = document.getElementById('submitButton');
    const numberInput = document.getElementById('numberInput');

    submitButton.addEventListener('click', () => {
        const inputValue = numberInput.value;
        gridContainer.innerHTML = '';

        const itemSize = 800 / inputValue;
        gridContainer.style.width = `${inputValue * itemSize}px`;
        gridContainer.style.height = `${inputValue * itemSize}px`;

        for (let i = 1; i <= inputValue * inputValue; i++) {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            gridItem.style.width = `${itemSize}px`;
            gridItem.style.height = `${itemSize}px`;
            gridItem.addEventListener('mouseenter', () => {
                gridItem.classList.add('hovered');
            });
            gridContainer.appendChild(gridItem);
        }
    });
});

