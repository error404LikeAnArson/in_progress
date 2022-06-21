
//until resolve of problem "connection before page display"
function getContact(){
    return {
        number: "0601079455",
        mail: 'ajtservices@gmail.com'
    }
}

// read admin data in database

// async function getContactPre(){
//     const contain = await Contain.findOne( { id:1 } );
//     const contact = await contain.contact.id(ObjectId("62ab2cb6f2867b33bc19df7a"));
//     return {
//         number: contact.number,
//         mail: contact.mail
//     };
// }

// function getContact(){
//     getContactPre().then(contact => {
//         return contact;
//     })
//         .catch(error => {});
// }



//get about text before resolve of problem "connection before page display"
function getText(){
    return {
        titlePage: "AJT services, votre agence de nettoyage 100% orientée vers les professionnels!",
        text1: "Nous nous chargeons pour vous, efficacement du nettoyage et de la desinfection de vos établissements.", 
        text2CatchPhrase: "Notre mission?",
        text2: "Faire briller les moindre recoins de vos entreprises! nous intervenons principalement, dans des locations de vacances, les parties commune de residences, les bureaux, restaurants snacks, et autres commerces.",
        text3: "Spécialisée dans le nettoyage de locaux professionnels, AJT Services est aujourd’hui connue pour sa fiabilité et son amour du travail bien réalisé." 
    };
}

// read text about in database
// async function getTextPre(){
//     const contain = await Contain.findOne( {id: 1} );
//     const text = await contain.aboutText.id(ObjectId("62ab2cb6f2867b33bc19df78"));
//     return {
//         titlePage: text.titlePage,
//         text1: text.text1, 
//         text2CatchPhrase: text.text2CatchPhrase,
//         text2: text.text2,
//         text3: text.text3 
//     };
// }

// function getText(){
//     getTextPre().then(aboutText => {
//         return aboutText;
//     })
//         .catch(error => {});
// }



//get data before resolve of problem "connection before page display"
function getReponseTime(){
    return {
        timeNumber: 72,
        timeUnit: "heures"
    };
}

// get data of estimate answer time in database
// async function getReponseTime(){
//     const contain = await Contain.findOne( {id: 1} );
//     const reponseTime = await contain.reponseTime.id(1);
//     return { 
//         timeNumber: reponseTime.timeNumber,
//         timeUnit: reponseTime.timeUnit
//     }
// }

module.exports = {getContact, getText, getReponseTime};