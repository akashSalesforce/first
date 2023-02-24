import { LightningElement } from 'lwc';
import Monkey_Hands from '@salesforce/resourceUrl/hands'
import Monkey_Head from '@salesforce/resourceUrl/monkey'
import Monkey_pwd from '@salesforce/resourceUrl/monkey_pwd'

export default class ConditionalComponent extends LightningElement {
    hands=Monkey_Hands+'/images/hands.png'
    head=Monkey_Head
    mp=Monkey_pwd
    hand
    ani

    hand  =document.getElementById("hands")
    ani=document.getElementById("animcon")
 closeye()
{
    this.ani.style.backgroundImage="url('images/monkey.gif')"
 this.hand.style.marginTop="0%";
}
 openeye()
{
    this.ani.style.backgroundImage="url('images/monkey_pwd.gif')"
 this.hand.style.marginTop="110%";
}
}