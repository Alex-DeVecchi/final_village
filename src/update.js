class Update {
    constructor(UpdateName, cost) {
        this.UpdateName = UpdateName;
        this.cost = cost;
        this.cost = cost;
        this.buttonId = "buy" + UpdateName;
    }

    purchase() {
        score -= this.cost;
        this.owned = true;
    }

    buttonState() {
        if (!this.visible) {
            document.getElementById(this.buttonId).style.display = 'none';
            if (score >= this.cost) {
                this.visible = true;
                document.getElementById(this.buttonId).style.display =
                    'initial';
            }
        }

        if (score < this.cost) {
            document.getElementById(this.buttonId).disabled = true;
        } else {
            document.getElementById(this.buttonId).disabled = false;
        }

        document.getElementById(this.buttonId).innerHTML = 'Buy ' + this.UpdateName + ' (Cost: $' + Math.ceil(this.cost).toLocaleString() +') <br> Adds $' +
            (this.baseCps * (1000 / tickRate)).toLocaleString() + ' Per Second <br> [Owned: ' + this.amountOwned + ']';
    }
}