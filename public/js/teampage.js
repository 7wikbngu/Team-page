
$(function () {
    var db = firebase.database();
    // var employeeHtml = '<div class="employee my-2 py-2"><img src="https://placecage.com/125/125" class="rounded-circle" alt=""><div class="employee-info invisible mt-1"><h5>Sravan Nerella</h5><p>Software Developer</p></div></div>';
    // for (var i = 0; i < 25; i++) {
    //     $(".employees").append(employeeHtml);
    // }
    
    // Firebase code
    var email = "sathwikbongu@gmail.com";
    var password = "sathwik";
    
    firebase.auth().signInWithEmailAndPassword(email, password).then( (data) => {
        console.log("Data: ", data);
        var employee = db.ref('members');
        employee.once('value', (snapshot) => {
            console.log(snapshot.val());
            generate(snapshot.val());
        }, (err) => {
            console.error(err);
        });
    }, (err) => {
        console.error("Error: ", err);
    })

    function generate(deptsObj){
        for (dept in deptsObj){
            if (deptsObj.hasOwnProperty(dept)){
                for(var i = 0;i < deptsObj[dept].length; i++){
                    console.log("Name: ",deptsObj[dept][i].fullname);
                    // console.log("Position: ",deptsObj[dept][i].position);
                    var employeeHtml = '<div class="employee my-2 py-2"><img src="https://placecage.com/125/125" class="rounded-circle" alt=""><div class="employee-info invisible mt-1"><h5>'+deptsObj[dept][i].fullname+'</h5><p>'+deptsObj[dept][i].position+'</p></div></div>';
                    
                    $(".employees").append(employeeHtml);
                }
            }
        }
    }

    // Firebase Signout  

    // firebase.auth().signOut().then( (data) => {
    //     console.log("Data: ", data);
    // }, (err) => {
    //     console.error("Error: ", err);
    // });

});