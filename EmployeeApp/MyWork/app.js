//Functions

const renderList = function () {
    for (let i = 0; i < employeeList.length; i++) {
        $("#visiblePage").append(`<div class="employeeId"><p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</p></div>`)
    }
};

const add = function () {
    $("button").on("click", function () {
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

//Executions

$("#view").on("click", function () {
    $("#visiblePage").empty();
    $("#inputBarID").addClass("inputBar");

    // $(".inputBar").toggleClass( "inputBar", false );

    renderList();
});

$("#add").on("click", function(){
    $("#visiblePage").empty();
    $(".inputBar").toggleClass( "inputBar", false );
})

add();



