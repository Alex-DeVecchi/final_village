class FireMaster extends Update{
    constructor(updateName, cost, building){
        super(updateName, cost);
        this.building = building;
    }

    purchase() {
        super.purchase();
        clickStrength++;
        this.building.doubleUpgrade++;
        this.building.applyDoubleUpgrade();
    }
}

class master1 extends Update{
    constructor(updateName, cost, building){
        super(updateName, cost);
        this.building = building;
    }

    purchase() {
        super.purchase();
        this.building.doubleUpgrade++;
        this.building.applyDoubleUpgrade();
    }
}
