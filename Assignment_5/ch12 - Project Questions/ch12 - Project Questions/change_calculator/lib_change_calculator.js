"use strict"

class ChangeEvent {
     
    constructor(quarters, dimes, nickels, pennies) {
        this.quarters = quarters;
        this.dimes = dimes;
        this.nickels = nickels;
        this.pennies = pennies;

    }

    isValidCoins(coins) {
        if (coins > 99 || coins < 0) {
            return false;
        }
        else {
            return true;
        }
    }
}