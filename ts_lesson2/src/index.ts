


class Hero {
    public heroName: string;
    private id: string;
    private power: number;

    constructor(heroName: string, id?: string) {
        this.heroName = heroName;
        this.id = id || `id-${Date.now()}`;
        this.power = 0;
    }

    addMorePower(power: number) {
        if (power < 1000) {
            this.power += power;
        }

    }

    getMorePower() {
        return this.power
    }

    getId() {
        return this.id;
    }

}

class SuperMan extends Hero {
    public flySpeed: number;
    public flyHeight: number;

    constructor(name: string, speed: number, height: number) {
        super(name);
        this.flySpeed = speed
        this.flyHeight = height;
    }

    fly() {
        console.log(`Hi my name is: ${this.heroName}
         and i can fly in Height: ${this.flyHeight} and speed ${this.flySpeed}`)
    }
}


const hero1 = new Hero("Matan");
hero1.addMorePower(50);

const superMan1: SuperMan = new SuperMan("Yonatan", 500, 200)
const superMan2: SuperMan = new SuperMan("Adir", 400, 100)
superMan1.addMorePower(99999999999)
// for (let index = 0; index < 100; index++) {
//     const current = new SuperMan("name" + index, index * 10, index * 2)
//     console.log(current)

// }

// superMan1.fly();
// console.log(superMan1.power)
// superMan2.addMorePower(500)
// console.log(superMan2.power)
// console.log(superMan1, superMan2)
console.log(superMan1.getId())
