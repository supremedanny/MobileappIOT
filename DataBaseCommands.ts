import * as firebase from "firebase";


/**This file contains all the database commands**/



/** This only runs when a user is created through the sign up page,
 * it can be assumed that a new user has 0 bottles and 0 points. **/
export function addUserDataOnDatabase(newUserId: any, newUserName: any, newUserEmail: any) {
    //this adds a new user to the users branch on the realtime database
    if(firebase.apps.length > 0){
        firebase.database().ref('Users/').child(newUserId);

        //adding child for email
        firebase.database().ref('Users/' + newUserId).child('Email').set(newUserEmail).then();

        //after this, it creates two children for bottle count and points
        //both with a default value of 0
        firebase.database().ref('Users/' + newUserId).child('bottles').set(0).then();
        firebase.database().ref('Users/' + newUserId).child('points').set(0).then();
    }

}


//gets the bottle count from a given user id
export function getBottleCount(){
    if(firebase.apps.length > 0){//this will only run if firebase has been set up on the landing screen to avoid errors
        const userId = firebase.auth().currentUser?.uid; const bottlesReference = firebase.database().ref('Users/' + userId + '/bottles');
        let bottles;//using let instead of const such that i don't have to initialize it
        bottlesReference.on('value', (snapshot) => {
            bottles = snapshot.val();//updates the bottle variable
        });

        /** this limits the function to only return numbers **/
        if(bottles == undefined) {
            return (-2);//if the reading came out as undefined it will send -2
        }
        else{
            return bottles;
        }
    }
    else{
        return (-1);//this is here for debugging purposes, if the bottle count is -1 (i.e. impossible) then something went wrong when reading the user info
    }

}

//gets the points from a given user id
export function getPoints(){
    if(firebase.apps.length > 0){//this will only run if firebase has been set up on the landing screen to avoid errors
        const userId = firebase.auth().currentUser?.uid
        const pointsReference = firebase.database().ref('Users/' + userId + '/points');
        let points;//same as above
        pointsReference.on('value',(snapshot) => {
            points = snapshot.val();
        });

        /** this limits the function to only return numbers **/
        if(points == undefined) {
            return (-2); //same as the above function^^
        }
        else{
            return points;
        }
    }
    else{
        return (-1);//same as above the above function^^
    }
}

