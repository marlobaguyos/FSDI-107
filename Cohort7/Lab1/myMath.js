module.exports = {
    sayHello: function(text){
        console.log('Hello there!' + text);
    },
    sum: function(num1, num2){
        return num1 + num2;
    },
    greater: function(num1, num2){
        //return the greater of num1 and num2
        if(num1 > num2) {
            return num1;
        }
        return num2;
    },

    isEven: function(num){
        if(num%2 != 0){
            return("Your number is ODD")
        }
        return("Your number is EVEN")
    },

    min: function(num1, num2){
        if(num1 < num2){
            return(num1 + " is less than " + num2);
        }
        return(num2 + " is less than " + num1);
    }

};