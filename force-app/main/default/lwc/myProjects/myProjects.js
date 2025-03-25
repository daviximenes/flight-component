import { LightningElement, wire, track } from 'lwc';
import getProjects from '@salesforce/apex/ProjectsDAO.getAllProjects';

export default class MyProjects extends LightningElement {
    projects;

    @wire(getProjects)
    wiredProjects({ error, data }) {
        console.log('@wiredProjects');
        if (data) {
            console.log(data);
            this.projects = data;

            this.error = undefined;

        } else if (error) {

            console.log(error);
            this.error = error;

            this.projects = undefined;

        }

    };
}