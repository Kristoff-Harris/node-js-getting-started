const express = require('express')
const cors = require('cors');
const path = require('path')
const PORT = process.env.PORT || 5000



class ConferenceAttendee {
    constructor(confName, confCompany) {
        this._name = confName;
        this._company = confCompany;
    }

    get name(){
        return this._name;
    }

    set name(confName){
        this._name = confName;
    }

    get company(){
        return this._company;
    }

    set company(confCompany){
        this._company = confCompany;
    }

}


let myAttendees = {
    attendees: []
}

myAttendees.attendees.push(new ConferenceAttendee("Dave", "XYZ Co"));
myAttendees.attendees.push(new ConferenceAttendee("Josh", "ABC Co"));
myAttendees.attendees.push(new ConferenceAttendee("Wendy", "XYZ Co"));
myAttendees.attendees.push(new ConferenceAttendee("Jonhnes", "ABC Co"));


//const checkResponse(){
//
//}


express()
  .use(express.static(path.join(__dirname, 'public')))
    .use(cors({origin: '*'}))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
    .get('/attendees', (req, res) => res.send(myAttendees) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
