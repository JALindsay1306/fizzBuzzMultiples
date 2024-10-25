function fizzBuzzMultiplesTotal(inputNumber,index3=3,index5=5,fizzBuzzTotal=0){
    if(inputNumber<=3){
        return 0;
    } else {
        if(index3<inputNumber){
            fizzBuzzTotal+=index3;
            if(index5<inputNumber && index5%3!==0){
                fizzBuzzTotal+=index5;
            }
            return fizzBuzzMultiplesTotal(inputNumber,index3+3,index5+5,fizzBuzzTotal);
        }
    };
    return fizzBuzzTotal;
}



module.exports = fizzBuzzMultiplesTotal;