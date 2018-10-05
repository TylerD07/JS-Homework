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
        let checker = false
        for (let i = 0; i < employeeList.length; i++) {
            if (employeeName == employeeList[i].name) {
                checker = true
            }

        }

        if (checker) {
            $("#visiblePage").append('<p class= "confirm"> Yes, this employee is in the system.</p>');
        }
        else {
            $("#visiblePage").append("<p class ='invalid'> Employee name is not valid.</p>");
        }
    })

};

const update = function () {
    $(".updateButton").on("click", function () {
        $("#visiblePage").empty();

        let employeeName = document.getElementById("updateName").value;
        let checker = false;
        for (let i = 0; i < employeeList.length; i++) {
            if (employeeName == employeeList[i].name) {
                if (document.getElementById("updateRoom").value != '')  {
                    employeeList[i].officeNum = document.getElementById("updateRoom").value;
                }

                if (document.getElementById("updateNum").value != '') {
                    employeeList[i].phoneNum = document.getElementById("updateNum").value;

                }
                checker = true;
            }

        }

        if (!checker) {
            let newEmployee = {
                name: document.getElementById("updateName").value,
                officeNum: document.getElementById("updateRoom").value,
                phoneNum: document.getElementById("updateNum").value,
            }
            employeeList.push(newEmployee);


        }
        renderList();
    });

};

const remove = function () {
    $("#removeButton").on("click", function () {
        $("#visiblePage").empty();
        console.log("test");
        let employeeName = document.getElementById("removeName").value;
        for (let i = 0; i < employeeList.length; i++) {
            if (employeeName == employeeList[i].name) {

                employeeList.splice(i, 1);

            }
        }
        renderList();
    });
};

//Executions

$("#view").on("click", function () {
    $("#visiblePage").empty();
    $("#select").addClass("hideForm");
    $(".updateInput").addClass("showTextbox");
    $("#removeForm").addClass("hideRemove");
    $("#inputBarID").addClass("inputBar");



    renderList();
});

$("#add").on("click", function () {
    $("#visiblePage").empty();
    $("#select").addClass("hideForm");
    $(".updateInput").addClass("showTextbox");
    $("#removeForm").addClass("hideRemove");
    $(".inputBar").toggleClass("inputBar", false);
})

add();

$("#verify").on("click", function () {
    $("#visiblePage").empty();
    $("#inputBarID").addClass("inputBar");
    $(".updateInput").addClass("showTextbox");
    $("#removeForm").addClass("hideRemove");
    $("#select").removeClass("hideForm");

})


verify();

$("#update").on("click", function () {
    $("#visiblePage").empty();
    $("#select").addClass("hideForm");
    $("#inputBarID").addClass("inputBar");
    $("#removeForm").addClass("hideRemove");
    $(".updateInput").removeClass("showTextbox");

});

update();

$("#delete").on("click", function () {
    $("#visiblePage").empty();
    $("#select").addClass("hideForm");
    $("#inputBarID").addClass("inputBar");
    $(".updateInput").addClass("showTextbox");
    $("#removeForm").removeClass("hideRemove");
});

remove();
