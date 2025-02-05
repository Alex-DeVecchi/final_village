class SwordMaster extends Update{
    constructor(updateName, cost, building){
        super(updateName, cost);
        this.building = building;
    }

    purchase() {
        super.purchase();
        clickStrength *= 2;
        this.building.doubleUpgrade *= 2;
        this.building.applyDoubleUpgrade();
    }
}

class master extends Update{
    constructor(updateName, cost, building){
        super(updateName, cost);
        this.building = building;
    }

    purchase() {
        super.purchase();
        this.building.doubleUpgrade *= 2;
        this.building.applyDoubleUpgrade();
    }
}
