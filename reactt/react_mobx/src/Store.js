import {makeAutoObservable} from 'mobx'

export default class Store{

    count=0;

    constructor(){
        makeAutoObservable(this)
    }
    // get countText(){
    //     return this.count>5 ? "Evet":"Hayır"
    // }
    inc(){
        this.count+=1;
    }
    dec(){
        this.count-=1;
    }
    incWithParams(number){
        this.count+=number
    }
}