interface Transport {
    marca:string
    model:string
    anul:number
    caroserie:string
    tractiune:string
}
interface Masina extends Transport {
    motor: string
    cutie: string
}

export default Masina;