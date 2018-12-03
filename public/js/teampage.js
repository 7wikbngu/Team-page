
$(function () {
    var db = firebase.database();
    var filterEmployee, filterLeader;
    var filterStatus = 0;

    // Firebase code
    var email = "sathwikbongu@gmail.com";
    var password = "sathwik";
    var employees;
    
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
                var leaderHtml = '<div class="leader row mb-2 mx-3"><img src="https://placecage.com/125/125" class="rounded-circle col-5 align-self-center" alt=""><div class="leader-info text-uppercase align-self-center mt-1 col-7"><h5>'+leadersObj[i].fullname+'</h5><p>'+leadersObj[i].position+'</p></div></div>';
                
                $(".leadership").append(leaderHtml);
            }
        }else {

        }
    }

    function generateEmployees(deptsObj) {
        filterEmployee = deptsObj;
        employees = deptsObj;
        console.log([deptsObj]);
        for (var i = 0; i < deptsObj.length; i++) {
            // console.log("Name: ",deptsObj[dept][i].fullname);
            // console.log("Position: ",deptsObj[dept][i].position);
            var employeeHtml = '<div class="employee my-2 py-2"><img src="https://placecage.com/125/125" class="rounded-circle" alt=""><div class="employee-info invisible text-capitalize mt-1"><h5 id="employeeName">' + deptsObj[i].fname + ' ' + deptsObj[i].lname + '</h5><p>' + deptsObj[i].position + '</p></div></div>';

            $(".employees").append(employeeHtml);
        }
    }

    // Search bar filter
    $('#filter').on('keyup', () => {
        var output = $("#filter").val();
        var pattern = new RegExp(output.toLowerCase());
        console.log(output, employees);
        $(".employees").empty();
        employees.map( employee => {
            if(pattern.test(employee.fname.toLowerCase()) || pattern.test(employee.lname.toLowerCase())){
                console.log(employee.fname);
                var employeeHtml = '<div class="employee my-2 py-2"><img src="https://placecage.com/125/125" class="rounded-circle" alt=""><div class="employee-info invisible text-capitalize mt-1"><h5 id="employeeName">' + employee.fname + ' ' + employee.lname + '</h5><p>' + employee.position + '</p></div></div>';
                $(".employees").append(employeeHtml);
            }
        });

    })
    





    // Firebase Signout  

    // firebase.auth().signOut().then( (data) => {
    //     console.log("Data: ", data);
    // }, (err) => {
    //     console.error("Error: ", err);
    // });

});