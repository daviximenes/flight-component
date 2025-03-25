// flightBookingSystem.js
import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import searchFlights from '@salesforce/apex/FlightController.searchFlights';
import createPassengerRecord from '@salesforce/apex/FlightController.createPassengerRecord';
import LightningAlert from 'lightning/alert';


const columns = [
    { label: 'Flight Number', fieldName: 'Flight_Number__c' },
    { label: 'Departure Date', fieldName: 'Departure_Date__c'},
    { label: 'Origin', fieldName: 'Origin__c' },
    { label: 'Destination', fieldName: 'Destination__c'},
];


export default class FlightBookingSystem extends LightningElement {
    flightNumber;
    departureDate;
    origin;
    destination;
    columns = columns;

    flights = [];
    showResults = false;
    selectedFlightId = '';
    flightRadioOptions = [];
    
    showPassengerForm = false;
    passengerFirstName;
    passengerLastName;
    passengerDOB;
    passengerGender;
    passengerEmail;
    passengerPhone;

    genderOptions = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' },
        { label: 'Prefer not to say', value: 'Prefer not to say' }
    ];

    handleFlightNumberChange(event) {
        this.flightNumber = event.target.value;
    }
    
    handleDateChange(event) {
        this.departureDate = event.target.value;
    }
    
    handleOriginChange(event) {
        this.origin = event.target.value;
    }
    
    handleDestinationChange(event) {
        this.destination = event.target.value;
    }
    
    handleFirstNameChange(event) {
        this.passengerFirstName = event.target.value;
    }
    
    handleLastNameChange(event) {
        this.passengerLastName = event.target.value;
    }
    
    handleDOBChange(event) {
        this.passengerDOB = event.target.value;
    }
    
    handleGenderChange(event) {
        this.passengerGender = event.detail.value;
    }
    
    handleEmailChange(event) {
        this.passengerEmail = event.target.value;
    }
    
    handlePhoneChange(event) {
        this.passengerPhone = event.target.value;
    }
    
    handleSearch() {
        if (!this.origin || !this.destination) {
            this.showToast(
                'Missing Required Information', 
                'Please enter both origin and destination to search for flights.', 
                'error'
            );
            return;
        }
        searchFlights({
            flightNumber: this.flightNumber,
            departureDate: this.departureDate,
            origin: this.origin,
            destination: this.destination
        })
        .then(result => {
            this.flights = result;
            
            this.showResults = true;
            this.showPassengerForm = false;
        })
        .catch(error => {
            this.showToast('Error', error.body.message, 'error');
        });
    }
    
    handleFlightSelection(event) {
        this.selectedFlightId = event.detail.selectedRows[0].Id;
        this.showPassengerForm = true;
    }
    
    handleSubmit() {
        createPassengerRecord({
            flightId: this.selectedFlightId,
            firstName: this.passengerFirstName,
            lastName: this.passengerLastName,
            dob: this.passengerDOB,
            gender: this.passengerGender,
            email: this.passengerEmail,
            phone: this.passengerPhone
        })
        .then(passengerId => {
            this.showToast('Success', 'Passenger information saved successfully', 'success');
            this.resetForm();
        })
        .catch(error => {
            this.showToast('Error', error.body.message, 'error');
        });
    }
    
    showToast(title, message, variant) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: title,
                message: message,
                variant: variant
            })
        );
    }
    
    resetForm() {
        this.flightNumber = null;
        this.departureDate = null;
        this.origin = null;
        this.destination = null;
        this.flights = [];
        this.showResults = false;
        this.selectedFlightId = null;
        this.showPassengerForm = false;
        this.passengerFirstName = null;
        this.passengerLastName = null;
        this.passengerDOB = null;
        this.passengerGender = null;
        this.passengerEmail = null;
        this.passengerPhone = null;
    }
}