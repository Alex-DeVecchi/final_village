class FireMaster extends Update{
    constructor(UpdateName, cost, building){
        super(UpdateName, cost);
        this.building = building;
    }

    purchase() {
        super.purchase();
        clickStrength++;
        this.building.doubleUpgrade++;
        this.building.applyUpgrade();
    }
}
