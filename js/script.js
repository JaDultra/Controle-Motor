var energia = false;

function general(liga) {
    if (liga == 0) {
        energia = false;
        chaveGeral = "assets/btn-general-off.png";
        ledVermelho = "assets/red-light-off.png";
        generalSw.setAttribute("onclick", "general(1)");
        motor.setAttribute("class", "motor-off");
        ledVerde = "assets/green-light-off.png";
    }
    if (liga == 1) {
        energia = true;
        chaveGeral = "assets/btn-general-on.png";
        ledVermelho = "assets/red-light-on.png";
        generalSw.setAttribute("onclick", "general(0)");
    }
    document.getElementById("generalSw").src = chaveGeral;
    document.getElementById("redLight").src = ledVermelho;
    document.getElementById("greenLight").src = ledVerde;
}

function controller(ligaMotor) {
    if (energia == true) {
        if (ligaMotor == 0) {
            ledVerde = "assets/green-light-off.png";
            motor.setAttribute("class", "motor-off");
        }
        if (ligaMotor == 1) {
            ledVerde = "assets/green-light-on.png";
            motor.setAttribute("class", "motor-on");
        }
        document.getElementById("greenLight").src = ledVerde;
    }
}