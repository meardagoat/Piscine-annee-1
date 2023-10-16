// fonction pour la promesse
function checkStatus(promise) {
    // '.then()' pour la faire fonctionner
    promise.then(message => {
        console.log(message);
        console.log("Checking status over");
    })
        // '.catch()' pour rejeter la promesse
        .catch(error => {
            console.log(error);
            console.log("Checking status over");
        });
}
// utiliser
checkStatus(promiseMe(" fly to the moon "));
