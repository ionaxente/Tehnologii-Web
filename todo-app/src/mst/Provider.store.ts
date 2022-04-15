import { types } from "mobx-state-tree"
import type { Instance } from 'mobx-state-tree'

const Transport = types
    .model({
        id: '',
        marca: '',
        model: '',
        anul: types.number,
        caroserie:  '',
        tractiune: '',
    })
    .actions((self) =>({
        updateField<Key extends keyof typeof self>(field: Key, value: typeof self[Key]) {
            self[field] = value
            rootStore.saveToLocalStorage();
        },
    }))

export type ITransport = Instance<typeof Transport>

export const Masina = types
    .model({
        id: '', 
        transportId: '',
        motor: '',
        cutie: '',
    })
    .actions((self) =>({
        updateField<Key extends keyof typeof self>(field: Key, value: typeof self[Key]) {
            self[field] = value
            rootStore.saveToLocalStorage();
        },
    }))
    .views((self) => ({
        get transportData(): ITransport{
            return rootStore.getTransportById(self.transportId)
        }
    }))

export type IMasina = Instance<typeof Masina>


export const Root = types
    .model({
        transporturi: types.optional(types.array(Transport), []),
        masini: types.optional(types.array(Masina), []),
        isFetchedWithLocalStorage: false
    })
    .actions((self) => ({
        updateField<Key extends keyof typeof self>(field: Key, value: typeof self[Key]) {
            self[field] = value
            this.saveToLocalStorage();
        },
        getTransportById(id: string){
            return self.transporturi.filter(item=>item.id===id)[0]
        },
        saveToLocalStorage() {
            localStorage && localStorage.setItem('Lab5', JSON.stringify({transporturi:self.transporturi, masini:self.masini}))
        },
        clearLocalStorage(){
            localStorage && localStorage.setItem('Lab5', JSON.stringify({transporturi:[], masini: []}))
            window.location.reload()
        },
        setLocalStorageTestData() {
            localStorage && localStorage.setItem('Lab5', JSON.stringify(initialState))
            setTimeout(() => window.location.reload(), 2000);
            
        }
    }))
    .actions((self) => ({
        getLocalStorage(){
            const isLSData = localStorage && localStorage.getItem('Lab5')
            const lsData = isLSData ? JSON.parse(localStorage.getItem('Lab5') || '') : {}
            if(!self.isFetchedWithLocalStorage){
                if(lsData && lsData.transporturi && lsData.transporturi.length == 0 && lsData.masini && lsData.masini.length == 0) {
                    self.saveToLocalStorage()
                }
                else {
                    self.updateField("transporturi", lsData.transporturi || [])
                    self.updateField("masini", lsData.masini || [])
                }
                self.isFetchedWithLocalStorage = true
            }
            return lsData
        },
    }))
 

const rootStore = Root.create({})
const initialState = {
    transporturi: [
        {
            id: 'p-001',
            marca: "BMW",
            model:"M5",
            anul: 2010,
            caroserie:"Sedan",
            tractiune:"Spate"
        },
    ],
    masini: [
    {
        id: 'st-001',
        transportId: 'p-001',
        motor: "2.4",
        cutie:"Automata"
    }
    ]
}
export default rootStore

