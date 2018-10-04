//Functions

const renderList = function () {
    for (let i = 0; i < employeeList.length; i++) {
        $("#visiblePage").append(`<div class="employeeId"><p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</p></div>`)
    }
};

const add = function () {
    $(".submit").on("click", function () {
        let newEmployee = {
            name: document.getElementById("nameInput").value,
            officeNum: document.getElementById("roomInput").value,
            phoneNum: document.getElementById("numInput").value,
        }
        employeeList.push(newEmployee);
        console.log(newEmployee)
        renderList();

    });

};

const verify = function () {
    $("#verifyButton").on("click", function () {
        $("#visiblePage").empty();
        let employeeName = document.getElementById("nameInput2").value;
        for (let i = 0; i < employeeList.length; i++) {
            if(employeeName == employeeList[i].name){
                $("#visiblePage").append('<p class= "confirm"> Yes, this employee is in the system.</p>');
            }
            else{
                $("#visiblePage").append("<p class ='invalid> Employee name is not valid.</p>");
            } // fix else statement
            
        }
    })
};

const update = function(){

};

//Executions

$("#view").on("click", function () {
    $("#visiblePage").empty();
    $("#select").addClass("hideForm");
    $(".updateInput").addClass("showTextbox");
    $("#inputBarID").addClass("inputBar");



    renderList();
});

$("#add").on("click", function () {
    $("#visiblePage").empty();
    $("#select").addClass("hideForm");
    $(".updateInput").addClass("showTextbox");
    $(".inputBar").toggleClass("inputBar", false);
})

add();

$("#verify").on("click", function () {
    $("#visiblePage").empty();
    $("#inputBarID").addClass("inputBar");
    $(".updateInput").addClass("showTextbox");
    $("#select").removeClass("hideForm");

})


verify();

$("#update").on("click", function() {
    $("#visiblePage").empty();
    $("#select").addClass("hideForm");
    $("#inputBarID").addClass("inputBar");
    $(".updateInput").removeClass("showTextbox");

});


    