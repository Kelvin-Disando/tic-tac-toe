class TicTacToe {
    constructor() {
        this.playField = [[null, null, null], [null, null, null], [null, null, null]];
        this.playerSymbol = 'x';
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.playerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.playField[rowIndex][columnIndex] === null) {
            this.playField[rowIndex][columnIndex] = this.playerSymbol;
            if (this.playerSymbol === 'x') {
                this.playerSymbol = 'o';
            }
            else { this.playerSymbol = 'x'; }
        }
    }

    isFinished() {
        if (this.isDraw() || this.getWinner() !== null) {
            return true;
        }
        else {
            return false;
        }
    }

    getWinner() {
        let winCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [0, 4, 8]
        ];

        for (var i = 0; i < winCombos.length; i++) {
            if (this.playField.join().split(",")[winCombos[i][0]] == 'x' && this.playField.join().split(",")[winCombos[i][1]] == 'x' && this.playField.join().split(",")[winCombos[i][2]] == 'x') {
                this.winner = 'x';
            }
            if (this.playField.join().split(",")[winCombos[i][0]] == 'o' && this.playField.join().split(",")[winCombos[i][1]] == 'o' && this.playField.join().split(",")[winCombos[i][2]] == 'o') {
                this.winner = 'o';
            }
        }
        return this.winner;
    }

    noMoreTurns() {
        if (this.playField.reduce((common, element) => {return common.concat(element)},[]).includes(null)) {
            return false;
        }
        else {return true;}
    }

    isDraw() {
        if (this.noMoreTurns() == true && this.getWinner() == null) {
            return true;
        }
        else {return false;}
    }

    getFieldValue(rowIndex, colIndex) {
        return this.playField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
