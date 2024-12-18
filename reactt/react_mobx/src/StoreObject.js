import { makeAutoObservable } from "mobx";

export const storeWithObject=makeAutoObservable(
    {
        users:[],
        get count(){
            return this.users.length
        },
        addUser(data){
            console.log('store',storeWithObject)
            storeWithObject.users.push(data)
        },
        getUsers(){
            return storeWithObject.users
        }
    }

)