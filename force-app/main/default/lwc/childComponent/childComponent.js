import { LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {
    constructor(){
        super()
        console.log('Child Constructor Called')    }
        connectedCallback(){
            console.log('Child Connected callBack called');
            throw new Error('child component throws error');
        }
        renderedCallback(){
            console.log('Child Rendered callbacK called')
        }
        disconnectedCallback(){
            alert('child Component disconnected')
        }
}