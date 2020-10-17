
module.exports = {
    test1: function(){
        return "hello"
    },
    test2(){
        return "world"
    },
    test3(){
        // ! test5 is not defined
        //return test5();
    },
    test4(){
        return this.test5();

    },
    test5(){
        return "inside function"
    },

    test6(){
        // ! Not defined on exports
        // return test7();
    },
    test7: function() {
        return "Mapped function"
    }


}