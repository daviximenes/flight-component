import { LightningElement } from 'lwc';

export default class Soccerdle extends LightningElement {

    soccerPlayerName = '';
    soccerPlayerNationality = '';
    soccerPlayerAge = '';
    soccerPlayerName = '';
    soccerPlayerName = '';

    connectedCallback(){
        this.getPlayer();
    }

    async getPlayer(){
        const myHeaders = new Headers();
        myHeaders.append("x-rapidapi-key", "647f302f41msh4d91eaf54e4cd9cp1ee71fjsn4d27091cc69f");
        myHeaders.append("x-rapidapi-host", "api-football-v1.p.rapidapi.com");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        let result
        this.soccerPlayerName = JSON.parse(result).response[0].player.name;
        this.soccerPlayerNationality = JSON.parse(result).response[0].player.nationality;
        this.soccerPlayerAge = JSON.parse(result).response[0].player.age;
        this.soccerPlayerPhoto = JSON.parse(result).response[0].player.photo;
        this.soccerPlayerName = JSON.parse(result).response[0].player.name;

        // await fetch("https://api-football-v1.p.rapidapi.com/v3/players?id=276&season=2020", requestOptions)
        // .then((response) => response.text() )
        // .then((result) => 
        //     {
        //         console.log(result);
        //         console.log(JSON.parse(result));
        //         this.soccerPlayerName = JSON.parse(result).response[0].player.name;
        //         this.soccerPlayerNationality = JSON.parse(result).response[0].player.nationality;
        //         this.soccerPlayerAge = JSON.parse(result).response[0].player.age;
        //         this.soccerPlayerPhoto = JSON.parse(result).response[0].player.photo;
        //         this.soccerPlayerName = JSON.parse(result).response[0].player.name;
        //         console.log(this.soccerPlayerName);
        //     }
        // )
        // .catch((error) => console.error(error));
    }

    checkName(){
        var inp=this.template.querySelectorAll("lightning-input");
        let nameInputed = '';
        inp.forEach(function(element){
            if(element.name=="input1")
                nameInputed=element.value;
        });

        if(nameInputed == this.soccerPlayerName){
            console.log('Acertou');
        }else{
            console.log('Errou');
        }
    }

}

/*
{
   "get":"players",
   "parameters":{
      "id":"276",
      "season":"2020"
   },
   "errors":[
      
   ],
   "results":1,
   "paging":{
      "current":1,
      "total":1
   },
   "response":[
      {
         "player":{
            "id":276,
            "name":"Neymar",
            "firstname":"Neymar",
            "lastname":"da Silva Santos J\u00fanior",
            "age":32,
            "birth":{
               "date":"1992-02-05",
               "place":"Mogi das Cruzes",
               "country":"Brazil"
            },
            "nationality":"Brazil",
            "height":"175 cm",
            "weight":"68 kg",
            "injured":false,
            "photo":"https:\/\/media.api-sports.io\/football\/players\/276.png"
         },
         "statistics":[
            {
               "team":{
                  "id":85,
                  "name":"Paris Saint Germain",
                  "logo":"https:\/\/media.api-sports.io\/football\/teams\/85.png"
               },
               "league":{
                  "id":61,
                  "name":"Ligue 1",
                  "country":"France",
                  "logo":"https:\/\/media.api-sports.io\/football\/leagues\/61.png",
                  "flag":"https:\/\/media.api-sports.io\/flags\/fr.svg",
                  "season":2020
               },
               "games":{
                  "appearences":18,
                  "lineups":15,
                  "minutes":1416,
                  "number":null,
                  "position":"Attacker",
                  "rating":"7.455555",
                  "captain":false
               },
               "substitutes":{
                  "in":3,
                  "out":2,
                  "bench":3
               },
               "shots":{
                  "total":53,
                  "on":21
               },
               "goals":{
                  "total":9,
                  "conceded":0,
                  "assists":5,
                  "saves":null
               },
               "passes":{
                  "total":916,
                  "key":61,
                  "accuracy":40
               },
               "tackles":{
                  "total":14,
                  "blocks":null,
                  "interceptions":9
               },
               "duels":{
                  "total":362,
                  "won":173
               },
               "dribbles":{
                  "attempts":155,
                  "success":87,
                  "past":null
               },
               "fouls":{
                  "drawn":67,
                  "committed":33
               },
               "cards":{
                  "yellow":6,
                  "yellowred":1,
                  "red":1
               },
               "penalty":{
                  "won":null,
                  "commited":null,
                  "scored":5,
                  "missed":1,
                  "saved":null
               }
            },
            {
               "team":{
                  "id":85,
                  "name":"Paris Saint Germain",
                  "logo":"https:\/\/media.api-sports.io\/football\/teams\/85.png"
               },
               "league":{
                  "id":66,
                  "name":"Coupe de France",
                  "country":"France",
                  "logo":"https:\/\/media.api-sports.io\/football\/leagues\/66.png",
                  "flag":"https:\/\/media.api-sports.io\/flags\/fr.svg",
                  "season":2020
               },
               "games":{
                  "appearences":3,
                  "lineups":2,
                  "minutes":137,
                  "number":null,
                  "position":"Attacker",
                  "rating":"6.700000",
                  "captain":false
               },
               "substitutes":{
                  "in":1,
                  "out":2,
                  "bench":1
               },
               "shots":{
                  "total":4,
                  "on":2
               },
               "goals":{
                  "total":1,
                  "conceded":0,
                  "assists":1,
                  "saves":null
               },
               "passes":{
                  "total":77,
                  "key":2,
                  "accuracy":20
               },
               "tackles":{
                  "total":null,
                  "blocks":null,
                  "interceptions":null
               },
               "duels":{
                  "total":43,
                  "won":19
               },
               "dribbles":{
                  "attempts":19,
                  "success":9,
                  "past":null
               },
               "fouls":{
                  "drawn":10,
                  "committed":6
               },
               "cards":{
                  "yellow":1,
                  "yellowred":0,
                  "red":0
               },
               "penalty":{
                  "won":null,
                  "commited":null,
                  "scored":0,
                  "missed":0,
                  "saved":null
               }
            },
            {
               "team":{
                  "id":85,
                  "name":"Paris Saint Germain",
                  "logo":"https:\/\/media.api-sports.io\/football\/teams\/85.png"
               },
               "league":{
                  "id":2,
                  "name":"UEFA Champions League",
                  "country":"World",
                  "logo":"https:\/\/media.api-sports.io\/football\/leagues\/2.png",
                  "flag":null,
                  "season":2020
               },
               "games":{
                  "appearences":9,
                  "lineups":9,
                  "minutes":746,
                  "number":null,
                  "position":"Attacker",
                  "rating":"7.355555",
                  "captain":false
               },
               "substitutes":{
                  "in":0,
                  "out":3,
                  "bench":0
               },
               "shots":{
                  "total":23,
                  "on":17
               },
               "goals":{
                  "total":6,
                  "conceded":0,
                  "assists":2,
                  "saves":null
               },
               "passes":{
                  "total":365,
                  "key":20,
                  "accuracy":33
               },
               "tackles":{
                  "total":5,
                  "blocks":1,
                  "interceptions":3
               },
               "duels":{
                  "total":182,
                  "won":86
               },
               "dribbles":{
                  "attempts":63,
                  "success":33,
                  "past":null
               },
               "fouls":{
                  "drawn":44,
                  "committed":11
               },
               "cards":{
                  "yellow":3,
                  "yellowred":0,
                  "red":0
               },
               "penalty":{
                  "won":null,
                  "commited":null,
                  "scored":1,
                  "missed":0,
                  "saved":null
               }
            },
            {
               "team":{
                  "id":85,
                  "name":"Paris Saint Germain",
                  "logo":"https:\/\/media.api-sports.io\/football\/teams\/85.png"
               },
               "league":{
                  "id":667,
                  "name":"Friendlies Clubs",
                  "country":"World",
                  "logo":"https:\/\/media.api-sports.io\/football\/leagues\/667.png",
                  "flag":null,
                  "season":2020
               },
               "games":{
                  "appearences":2,
                  "lineups":2,
                  "minutes":92,
                  "number":null,
                  "position":"Attacker",
                  "rating":null,
                  "captain":false
               },
               "substitutes":{
                  "in":0,
                  "out":2,
                  "bench":0
               },
               "shots":{
                  "total":null,
                  "on":null
               },
               "goals":{
                  "total":3,
                  "conceded":null,
                  "assists":null,
                  "saves":null
               },
               "passes":{
                  "total":null,
                  "key":null,
                  "accuracy":null
               },
               "tackles":{
                  "total":null,
                  "blocks":null,
                  "interceptions":null
               },
               "duels":{
                  "total":null,
                  "won":null
               },
               "dribbles":{
                  "attempts":null,
                  "success":null,
                  "past":null
               },
               "fouls":{
                  "drawn":null,
                  "committed":null
               },
               "cards":{
                  "yellow":0,
                  "yellowred":0,
                  "red":0
               },
               "penalty":{
                  "won":null,
                  "commited":null,
                  "scored":null,
                  "missed":null,
                  "saved":null
               }
            }
         ]
      }
   ]
}
*/