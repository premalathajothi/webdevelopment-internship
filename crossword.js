const crosswordData = {
    grid: [
        ['H', 'O', 'N', 'E', 'Y'],
        ['O', ' ', ' ', ' ', 'A'],
        ['N', ' ', 'T', ' ', 'R'],
        ['E', ' ', ' ', 'C', ' '],
        ['Y', ' ', ' ', ' ', ' ']
    ],
    clues: [
        { clue: "1 Across: A sweet substance made by bees. (5 letters)", answer: "HONEY" },
        { clue: "2 Across: A fruit that shares its name with a color. (6 letters)", answer: "ORANGE" },
        { clue: "3 Across: A sweet liquid produced by flowers. (6 letters)", answer: "NECTAR" },
        { clue: "4 Across: Small domesticated feline animals. (4 letters)", answer: "CATS" },
        { clue: "5 Across: Informal term for 'yes'. (2 letters)", answer: "YA" },
        { clue: "1 Down: Greeting used to begin a conversation. (5 letters)", answer: "HELLO" },
        { clue: "2 Down: Earth's only natural satellite. (4 letters)", answer: "MOON" },
        { clue: "3 Down: The sixth day of the week. (3 letters)", answer: "SAT" },
        { clue: "4 Down: The seventh planet from the sun. (6 letters)", answer: "URANUS" }
    ]
};

function createCrosswordTable() {
    const table = document.getElementById('crossword-table');
    for (let i = 0; i < crosswordData.grid.length; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < crosswordData.grid[i].length; j++) {
            const cell = document.createElement('td');
            if (crosswordData.grid[i][j] !== ' ') {
                const input = document.createElement('input');
                input.setAttribute('maxlength', '1');
                input.setAttribute('data-row', i);
                input.setAttribute('data-col', j);
                cell.appendChild(input);
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

function displayClues() {
    const cluesList = document.getElementById('clues-list');
    crosswordData.clues.forEach((clue, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = clue.clue;
        cluesList.appendChild(listItem);
    });
}

function checkCrossword() {
    let correct = true;
    crosswordData.grid.forEach((row, i) => {
        row.forEach((letter, j) => {
            if (letter !== ' ') {
                const input = document.querySelector(`input[data-row="${i}"][data-col="${j}"]`);
                if (input.value.toUpperCase() !== letter) {
                    correct = false;
                    input.style.color = 'red';
                } else {
                    input.style.color = 'green';
                }
            }
        });
    });
    if (correct) {
        alert('Congratulations! You have completed the crossword correctly.');
    } else {
        alert('Some answers are incorrect. Please try again.');
    }
}

window.onload = () => {
    createCrosswordTable();
    displayClues();

    const checkButton = document.createElement('button');
    checkButton.textContent = 'Check Answers';
    checkButton.onclick = checkCrossword;
    document.body.appendChild(checkButton);
};
