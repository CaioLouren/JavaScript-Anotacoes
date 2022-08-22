function recursiva(max) {
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);//RECURSIVA, UM FUNÇÃO Q SE CHAMA DE VOLTA
