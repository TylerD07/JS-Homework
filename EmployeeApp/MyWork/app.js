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
            room: document.getElementById("roomInput").value,
            number: document.getElementById("numInput").value,
        }
        employeeList.push(newEmployee);
        renderList();
    
    });

};

//Executions

$("#view").on("click", function () {
    $("#visiblePage").empty();
    renderList();
});

add();

$("#add").on("click", function(){
    $("#visiblePage").empty();
    $(".inputBar").toggleClass( "inputBar", false );
})



