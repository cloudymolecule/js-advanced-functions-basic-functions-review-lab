function saturdayFun(string="roller-skate"){
    return `This Saturday, I want to ${string}!`
}

let mondayWork = function(string="go to the office") {
    return `This Monday, I will ${string}.`
}

function wrapAdjective(char='*') {
    return function(param="special"){
        return `You are ${char}${param}${char}!`
    }
}

const Calculator = {
    add: function(){return (1+3)},
    subtract: function(){return (1-3)},
    multiply: function(){return (1*3)},
    divide: function(){return (10/5)}
}

function actionApplyer(integer, array){
    let res = integer
    for (let i = 0; i < array.length; i++) {
        let insideFunc = array[i]
        res = insideFunc(res)
    }
    return res
}