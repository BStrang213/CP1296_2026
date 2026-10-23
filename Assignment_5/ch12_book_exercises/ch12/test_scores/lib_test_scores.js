"use strict"

class TestScores {
    #scores

    constructor() {
        this.#scores = [];
    }

    add(score) {
        this.#scores.add(score);
        return this.#scores;
    }

    get avg() {
        let total = 0;
        for (i = 0; i < this.#scores.length; i++) {
            total += score[i];
        }
        return total / this.#scores.length;
    }

    toStrings() {
        this.#scores.join(", ");
    }

    toLetterString() {
        for (i = 0; i < this.#scores.length; i++) {
            if (score > 90) {
                score.add("A")
            }
            else if (score < 80) {
                score.add("B")
            }
            else if (score < 70) {
                score.add("C")
            }
            else if (score < 60) {
                score.add("D")
            }
            else if (score < 50) {
                score.add("F")
            }
        }
    }
}