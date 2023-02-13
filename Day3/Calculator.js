const calculator = {
    lastOperation: '',
    availableOperations: ['min', 'max', 'random', 'ceil', 'round',
                                'pow', 'sqrt'],
    showOperations(){
        return this.availableOperations.join('\n');
    },

    min(num1,num2,num3,num4){
        this.lastOperation = 'min';
        return Math.min(num1,num2,num3,num4);
    },

    max(num1,num2,num3,num4){
        this.lastOperation = 'max';
        return Math.max(num1,num2,num3,num4);
    },

    random(){
        this.lastOperation = 'random';
        return Math.random();
    }, 

    ceil(num){
        this.lastOperation = 'ceil';
        return Math.ceil(num);
    },

    pow(num1,num2){
        this.lastOperation = 'pow';
        return Math.pow(num1,num2);
    },

    sqrt(num1,num2){
        this.lastOperation = 'sqrt';
        return Math.sqrt(num1,num2);
    }

    
}


console.log("Available operations:", calculator.showOperations().toUpperCase());
