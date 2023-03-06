const cells = document.querySelectorAll('.cell')
const nameCurrentPlayer = document.getElementById('current-player')
const namePlayer1 = document.getElementById('player1')
const namePlayer2 = document.getElementById('player2')
let currentPlayer = 'X'
let gameOver = false

const cell1 = document.getElementById('cell-1')
const cell2 = document.getElementById('cell-2')
const cell3 = document.getElementById('cell-3')
const cell4 = document.getElementById('cell-4')
const cell5 = document.getElementById('cell-5')
const cell6 = document.getElementById('cell-6')
const cell7 = document.getElementById('cell-7')
const cell8 = document.getElementById('cell-8')
const cell9 = document.getElementById('cell-9')

function updateNameCurrentPlayer() {
    if (currentPlayer === 'X') {
        nameCurrentPlayer.innerText = `Vez de ${namePlayer2.value} jogar`
    } else {
        nameCurrentPlayer.innerText = `Vez de ${namePlayer1.value} jogar`
    }
}

document.getElementById('start').addEventListener('click', jogar)
document.getElementById('reset').addEventListener('click', resetGame)

function resetGame() {
    nameCurrentPlayer.innerText = ''
    nameCurrentPlayer.style.removeProperty('color')
    namePlayer1.value = ''
    namePlayer2.value = ''
    gameOver = false
    cells.forEach(function (cell) {
        cell.classList.remove('win')
        cell.innerText = ''
    })
}

function jogar() {
    nameCurrentPlayer.innerText = `Vez de ${namePlayer1.value} jogar`
    cells.forEach(function (cell) {
        cell.addEventListener('click', function () {
            if (cell.innerText !== '' || gameOver) return

            updateNameCurrentPlayer()

            cell.innerText = currentPlayer

            checkWinner()
            checkDraw()

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
        })
    })
}

function checkWinner() {
    let winCells = []

    if (cell1.innerText === currentPlayer && cell2.innerText === currentPlayer && cell3.innerText === currentPlayer) {
        currentPlayer = currentPlayer === 'X' ? namePlayer1.value : namePlayer2.value
        nameCurrentPlayer.innerText = `${currentPlayer.toUpperCase()} VENCEU!`
        gameOver = true
        winCells.unshift(cell1, cell2, cell3)
    } else if (cell4.innerText === currentPlayer && cell5.innerText === currentPlayer && cell6.innerText === currentPlayer) {
        currentPlayer = currentPlayer === 'X' ? namePlayer1.value : namePlayer2.value
        nameCurrentPlayer.innerText = `${currentPlayer.toUpperCase()} VENCEU!`
        gameOver = true
        winCells.unshift(cell4, cell5, cell6)
    } else if (cell7.innerText === currentPlayer && cell8.innerText === currentPlayer && cell9.innerText === currentPlayer) {
        currentPlayer = currentPlayer === 'X' ? namePlayer1.value : namePlayer2.value
        nameCurrentPlayer.innerText = `${currentPlayer.toUpperCase()} VENCEU!`
        gameOver = true
        winCells.unshift(cell7, cell8, cell9)
    } else if (cell1.innerText === currentPlayer && cell4.innerText === currentPlayer && cell7.innerText === currentPlayer) {
        currentPlayer = currentPlayer === 'X' ? namePlayer1.value : namePlayer2.value
        nameCurrentPlayer.innerText = `${currentPlayer.toUpperCase()} VENCEU!`
        gameOver = true
        winCells.unshift(cell1, cell4, cell7)
    } else if (cell2.innerText === currentPlayer && cell5.innerText === currentPlayer && cell8.innerText === currentPlayer) {
        currentPlayer = currentPlayer === 'X' ? namePlayer1.value : namePlayer2.value
        nameCurrentPlayer.innerText = `${currentPlayer.toUpperCase()} VENCEU!`
        gameOver = true
        winCells.unshift(cell2, cell5, cell8)
    } else if (cell3.innerText === currentPlayer && cell6.innerText === currentPlayer && cell9.innerText === currentPlayer) {
        currentPlayer = currentPlayer === 'X' ? namePlayer1.value : namePlayer2.value
        nameCurrentPlayer.innerText = `${currentPlayer.toUpperCase()} VENCEU!`
        gameOver = true
        winCells.unshift(cell3, cell6, cell9)
    } else if (cell1.innerText === currentPlayer && cell5.innerText === currentPlayer && cell9.innerText === currentPlayer) {
        currentPlayer = currentPlayer === 'X' ? namePlayer1.value : namePlayer2.value
        nameCurrentPlayer.innerText = `${currentPlayer.toUpperCase()} VENCEU!`
        gameOver = true
        winCells.unshift(cell1, cell5, cell9)
    } else if (cell3.innerText === currentPlayer && cell5.innerText === currentPlayer && cell7.innerText === currentPlayer) {
        currentPlayer = currentPlayer === 'X' ? namePlayer1.value : namePlayer2.value
        nameCurrentPlayer.innerText = `${currentPlayer.toUpperCase()} VENCEU!`
        gameOver = true
        winCells.unshift(cell3, cell5, cell7)
    }
    paintCellsWinner(winCells)
}

function checkDraw() {
    if (cell1.innerText !== '' && cell2.innerText !== '' && cell3.innerText !== '' && cell4.innerText !== '' && cell5.innerText !== ''
        && cell6.innerText !== '' && cell7.innerText !== '' && cell8.innerText !== '' && cell9.innerText !== ''
        && checkWinner() === undefined
    ) {
        nameCurrentPlayer.innerText = 'Empate!'
        nameCurrentPlayer.style.color = 'red'
    }
}

function paintCellsWinner(winCells) {
    winCells.forEach(function (cell) {
        cell.classList.add('win')
    })
}