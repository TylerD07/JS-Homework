//Functions

const renderList = function () {
    for (let i = 0; i < employeeList.length; i++) {
        $("#visiblePage").append(`<div class="employeeId"><p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</p></div>`)
    }
};

const add = function(){
    
}

//Executions

$("#view").on("click", function () {
    $("#visiblePage").empty();
    renderList();
});

