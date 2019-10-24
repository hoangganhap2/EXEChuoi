
function timeLive() {
    let reg=/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    let YearofBirth=document.getElementById("input");
    if(reg.test(YearofBirth)){
        document.write(YearofBirth);

    }else {
        document.write("Không hợp lệ")
    }
}