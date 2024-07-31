import { LightningElement,track } from 'lwc';

export default class TrackDemo extends LightningElement {

    @track fullName = {firstName: "", lastName: ""}

    handleFirstNameChange(event){
        this.fullName.firstName = event.target.value
    }

    handleLastNameChange(event){
        this.fullName.lastName = event.target.value
    }


}