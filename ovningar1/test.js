function ValueFunction(value) {
    this.value = value;
    this.getValue = function () {
    return this.value;
    }
    this.setValue = function (a) {
    this.value += a;
    }
    }
    let valueTest = new ValueFunction(10);
    valueTest.setValue(20);
    console.log(valueTest.getValue());