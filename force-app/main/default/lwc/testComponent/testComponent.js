import { LightningElement } from 'lwc';

export default class TestComponent extends LightningElement {
    
  users=['manohar','akash','charan']
  num1 =10
  num2=20

  get firstUser(){
    return this.users[0]
  }
  get multiply(){
    return this.num1*this.num2
  }
}