"use strict"

class Event {
    #dateString;
    
    constructor(name, dateString) {
        this.name = name;
        this.date = Date(dateString);
        this.#dateString = dateString;
    }

    get hasName() {
        if (this.name.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }

    get hasDate() {
        if (this.#dateString.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }

    get isValidDate() {
        if (this.date.toString() == null) {
            return true;
        }
        else {
            return false;
        }
    }

    get days() {
        const today = new Date();
        const msFromToday = today.getDate() - today.getTime();
        const msForOneDay = 24 * 60 * 60 * 1000; // hrs * mins * secs * milliseconds  
        const daysToDate = Math.ceil( msFromToday / msForOneDay );
        return today, msFromToday, msForOneDay, daysToDate
    }

    get message() {
        let msg = "";
        const date = this.date;
        if (daysToDate == 0) {
            msg = `Hooray! Today is ${eventName}! (${date})`;
        } else if (daysToDate > 0) {
            msg = `${daysToDate} day(s) until ${eventName}! (${date})`;
        } else if (daysToDate < 0) {
            msg = `${eventName} happened ${Math.abs(daysToDate)} 
                   day(s) ago. (${date})`;
        }
        messageLbl.textContent = msg;
    }

}