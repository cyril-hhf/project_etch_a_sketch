
document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');
    const submitButton = document.getElementById('submitButton');
    const numberInput = document.getElementById('numberInput');

    submitButton.addEventListener('click', () => {
        const inputValue = numberInput.value;
        gridContainer.innerHTML = '';
        for (let i = 1; i <= inputValue * inputValue; i++) {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            gridItem.addEventListener('mouseenter', () => {
                gridItem.classList.add('hovered');
            });
            gridContainer.appendChild(gridItem);
        }
    });
});

