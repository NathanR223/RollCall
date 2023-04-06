var blnOption;
var err;

function getMenu() {
    // set variables
    var url = window.location.pathname;
    var nav = document.getElementById('nav');

    // create menu tabs from menu array
    for (x = 0; x < aryMenu.length; x++) {

        // create new list item
        var li = document.createElement('li');

        // get page
        var pageName = aryMenu[x][0];

        // set active status of tab
        if (url.indexOf(pageName) > 0) {
            li.setAttribute('class', 'active')
        } else {
            li.setAttribute('class', 'inactive')
        }

        // create anchor tag
        let a = document.createElement('a');
        a.href = aryMenu[x][0];
        a.innerText = aryMenu[x][1];

        // append anchor tag to li
        li.appendChild(a);

        //append li to ul
        nav.appendChild(li);
    }
}

function getSemester() {
    // set variables
    var semesterId = document.getElementById('semesterList');
    var option = document.createElement('option');

    // add a placeholder option
    option.value = 0;
    option.text = 'Select a Semester';
    semesterId.add(option);

// populate semester list from array
    for (x = 0; x < arySemesters.length; x++) {
        option = document.createElement('option');
        option.value = arySemesters[x][0];
        option.text = arySemesters[x][1];
        semesterId.add(option);
    }
}

function getClass(objSemester, blnOpt) {
    // set variables
    var semesterId = objSemester.options[objSemester.selectedIndex].value;
    var aryClasses = eval(`ary${semesterId}`);
    var classId = document.getElementById('classList');
    var option = document.createElement('option');

    // reset class list
    classId.length = 0;

    // show 'Select a Class' if blnOpt is given true
    blnOption = blnOpt;
    // I chose to do this because although it would populate correctly in student.html, 
    // class.html would put 'Select a Class' within the classList where we don't want it
    // so I added the parameter to choose where we want to show 'Select a Class'

    if(blnOption) {
        // add a placeholder option
        option.value = 0;
        option.text = 'Select a Class';
        classId.add(option);
    }

    //populate class list from array
    for (x = 0; x < aryClasses.length; x++) {
        var option = document.createElement('option');
        option.value = aryClasses[x][0];
        option.text = aryClasses[x][1];
        classId.add(option);
    }
}

function getStudent(objSemester) {
    // set variables
    var classSection = objSemester.options[objSemester.selectedIndex].value;
    var aryClass = eval(`ary${classSection}`);
    var studentId = document.getElementById('studentList');
    var option = document.createElement('option');

    // reset class list
    studentId.length = 0;

    //populate class list from array
    for (x = 0; x < aryClass.length; x++) {
        var option = document.createElement('option');
        option.value = aryClass[x][0];
        option.text = aryClass[x][1];
        studentId.add(option);
    }
}