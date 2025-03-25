import { LightningElement, wire, track, api } from 'lwc';

export default class UpdateStageOpp extends LightningElement {

    @api recordId;
    objectApiName = 'Opportunity';

    handleSubmit(event){
        try{

            event.preventDefault();       // stop the form from submitting
            const fields = event.detail.fields;
            console.log(fields);
            this.template.querySelector('lightning-record-edit-form').submit(fields);
        }catch(e){
            console.log('handleSubmit: ', e);
        }
    }

    handleSuccess(event){
        try{
            console.log('handleSucess');
            const updatedRecord = event.detail.id;
            console.log('onsuccess: ', updatedRecord);
            const stageName = event.detail.fields.StageName.value;

            let baseURL = 'https://www.myinstants.com/media/sounds/';
            
            if(stageName == 'Desejo'){
                baseURL = baseURL+'pratique.mp3';
            }else if(stageName == 'Excitação'){
                baseURL = baseURL+'nossa-que-tesao-hommer-maldito-cutmp3.mp3';
            }else if(stageName == 'Quero gozaaaaar'){
                baseURL = baseURL+'eu-quero-gozarr.mp3';
            }else if(stageName == 'Broxou'){
                baseURL = baseURL+'yt1s_dH51DI6.mp3';
            }else if(stageName == 'Todo gozado'){
                baseURL = baseURL+'ilarilarie-xuxa-47.mp3';
            }

            console.log('BaseURL');
            console.log(baseURL);
            const audioEl = this.template.querySelector('.audio');
            audioEl.setAttribute('src',baseURL);
            audioEl.volume = 0.3;
            audioEl.play();
        }catch(e){
            console.log('handleSubmit: ', e);
        }
    }
}