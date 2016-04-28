function factorialize(num) {
    var count = num;
    var result = 1;

    for (var i = 1; i <= count; i++) {
        result *= i;
    }
    num = result;

    return num;
}

factorialize(5);
