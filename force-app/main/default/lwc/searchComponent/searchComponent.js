import { LightningElement,track,api,wire } from 'lwc';
import fetchAccounts from '@salesforce/apex/testApexController.getAccounts';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class SearchComponent extends LightningElement {
    



    @wire(fetchAccounts) accountsList;


    @api recordId;
    @api enteredValue;
    @api accountsResponseList;
    @track actions = [ {
        'label': 'View',
        'name': 'view'
    } ,
    {
        'label': 'Edit',
        'name': 'edit'
    }
];
    @api columns = [
                    { label: 'Account Name', fieldName: 'Name', type: 'text' },
                    { label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'text' }
                    ];

                    
                                 
                    
    connectedCallback(){ 
        // Logic on Load of the Component
        console.log('Connected Call Back is Loaded');
    }

    renderedCallback(){
        // Logic when something changes on the componet
        console.log('Rendered Call Back is Loaded');
    }

    searchEntered(event){
        console.log('Search Entered');
        console.log('Entered Value : '+this.enteredValue);
        this.enteredValue = event.target.value;
        console.log(event.target.value);
        console.log(event.target.label);
        console.log(event.target.type);
        setTimeout(() => {
            console.log('Started Searching');
            console.log('Current Table Information'+JSON.stringify(this.accountsResponseList));

            console.log('Filtering the data');
            let currentData = this.accountsResponseList;
            let modifiedData = [];
            for(var r = 0; r < currentData.length ; r++){
                if (currentData[r].Name.includes(this.enteredValue)) //Check if searh term matches the condition
                {
                    modifiedData.push(currentData[r]); // Push matching account into the JS Array
                }
            }

            console.log('Reset the Table data');
            this.accountsResponseList =  modifiedData;
            console.log('End Searching'+JSON.stringify(this.accountsResponseList));
        }, 3000);
    }

    handleRowAction( event ) {

        const actionName = event.detail.action.name;
        const row = event.detail.row;
console.log(actionName);

    }


buttonClicked(){

   
        console.log('Button Clicked');
        console.log('Current Value : '+this.enteredValue);
        //console.log('Fecthed Accounts'+JSON.stringify(this.accountsList));

        // Imperatively
        fetchAccounts().
        then(
            result => {
                console.log(result);
                // Delcare an empty JS Array
                this.accountsResponseList = [];

                // Iterate over Result
                for(var r = 0; r < result.length ; r++){
                    console.log(JSON.stringify(result[r].Name+'--'+result[r].AnnualRevenue));
                    this.accountsResponseList.push(result[r]); // Push every account into the JS Array
                }


                if(result === null){
                    console.log('Exception occurred!!');
                }
            }
        ).catch(
            error => {
                console.log('Error is '+error);
                const evt = new ShowToastEvent({
                    title: 'Error Occuured!!',
                    message: error.body.message+'--'+error.body.stackTrace,
                    variant: 'error',
                });
                this.dispatchEvent(evt);
            }
        );
    }

    getSelectedRow(event){
        const selectedRows = event.detail.selectedRows;
        console.log(selectedRows);
    }


}
