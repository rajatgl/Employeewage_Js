//
function attendence(){
    var check = Math.floor(Math.random() * 10) % 2

    if (check) {
        console.log("Employee is Absent");
    }
    else{
        console.log("Employee is Present");
    }
}
for(i=0;i<5;i++){
    attendence()
}


