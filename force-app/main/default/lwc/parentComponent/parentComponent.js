import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    isChildVisible=false
    constructor(){
        super()
        console.log('Parent Constructor Called')    }
        connectedCallback(){
            console.log('Parent Connected callBack called');
        }
        renderedCallback(){
            console.log('Parent Rendered callbacK called')
        }
        
        showHandler(){
            this.isChildVisible=!this.isChildVisible
        }
        errorCallback(error,stack){
            console.log(error.message)
            console.log(stack)
        }
}