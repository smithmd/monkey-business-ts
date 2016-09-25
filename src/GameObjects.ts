class Monkey {
    monkeyType: string;
    bananasDropped: number;
    cost: number;

    // TODO: Implement poop throwin and stealing bananas
    constructor(monkeyType:string, bananasDropped: number, cost: number) {
        this.monkeyType = monkeyType;
        this.bananasDropped = bananasDropped;
        this.cost = cost;
    }

    dropBananas() {
        return this.bananasDropped;
    }
}

