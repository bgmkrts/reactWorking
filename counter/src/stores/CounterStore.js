import { makeAutoObservable } from "mobx";
import { } from "@mui/material";



class CounterStore {
  count = 0;  

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}


const abc = new CounterStore();

export default abc;
