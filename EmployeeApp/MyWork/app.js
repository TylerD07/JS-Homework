$("#view").on("click", function () {
    for (let i = 0; i < employeeList.length; i++) {
        $("#viewPage").hmtl(`<div class="employeeId"><p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</p></div>`)
    }
});




// const showList = function () {
//     $(‘#viewPage’).empty;
//     for (let i = 0; i < employeeList.length; i++) {
//         $(“#viewPage”).append(`<div class="employeeId"><p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</p></div>`)
//     }
// })
//     showList();

// $(“#view”).on(‘click’, showList)