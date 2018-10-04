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

// const verify = function () {
//     $("#verifyButton").on("click", function () {
//         let employeeName = $("#nameInput2").value;
//         console.log("employeeName");
//     })
// };


//Executions

$("#view").on("click", function () {
    $("#visiblePage").empty();
    $("#select").addClass("hideForm");
    $("#inputBarID").addClass("inputBar");

    // $(".inputBar").toggleClass( "inputBar", false );

    renderList();
});

$("#add").on("click", function () {
    $("#visiblePage").empty();
    $("#select").addClass("hideForm");
    $(".inputBar").toggleClass("inputBar", false);
})

add();

$("#verify").on("click", function () {
    $("#visiblePage").empty();
    $("#inputBarID").addClass("inputBar");
    $("#select").removeClass("hideForm");

})


// verify();