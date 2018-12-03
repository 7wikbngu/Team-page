
$(function () {
    var db = firebase.database();
    var filterEmployee, filterLeader;
    var filterStatus = 0;

    // Firebase code
    var email = "sathwikbongu@gmail.com";
    var password = "sathwik";
    
    firebase.auth().signInWithEmailAndPassword(email, password).then( (data) => {
        console.log("Data: ", data);
        var employee = db.ref('members');

        var leadership = db.ref('leadership');

        leadership.once('value', (snapshot) => {
            // console.log("Leadership: ",[snapshot.val()]);
            generateLeaders(snapshot.val());
        }, (err) => {
            console.error(err);
        });

        employee.once('value', (snapshot) => {
            // console.log("Members:",[snapshot.val()]);
            generateEmployees(snapshot.val());
        }, (err) => {
            console.error(err);
        });
    }, (err) => {
        console.error("Error: ", err);
    })

    function generateLeaders(leadersObj){
        filterLeader = leadersObj;
        console.log([leadersObj]);
        if(filterStatus === 0){
            for(var i = 0; i < leadersObj.length; i++){
                var leaderHtml = '<div class="leader row mb-2 mx-3"><img src="https://placecage.com/125/125" class=" col-5 align-self-center" alt=""><div class="leader-info text-uppercase align-self-center mt-1 col-7"><h5>'+leadersObj[i].fullname+'</h5><p>'+leadersObj[i].position+'</p></div></div>';
                
                $(".leadership").append(leaderHtml);
            }
        }else {

        }
    }

    function generateEmployees(deptsObj){
        filterEmployee = 
        console.log([deptsObj]);
        for (dept in deptsObj){
            if (deptsObj.hasOwnProperty(dept)){
                for(var i = 0;i < deptsObj[dept].length; i++){
                    // console.log("Name: ",deptsObj[dept][i].fullname);
                    // console.log("Position: ",deptsObj[dept][i].position);
                    var employeeHtml = '<div class="employee my-2 py-2"><img src="https://placecage.com/125/125" class="rounded-circle" alt=""><div class="employee-info invisible text-uppercase mt-1"><h5>'+deptsObj[dept][i].fullname+'</h5><p>'+deptsObj[dept][i].position+'</p></div></div>';
                    
                    $(".employees").append(employeeHtml);
                }
            }
        }
    }

    // Search bar filter
    $('#filter').on('keyup', () => {
        var output = $("#filter").val();
        console.log("Search:",output);
    })
    





    // Firebase Signout  

    // firebase.auth().signOut().then( (data) => {
    //     console.log("Data: ", data);
    // }, (err) => {
    //     console.error("Error: ", err);
    // });

});