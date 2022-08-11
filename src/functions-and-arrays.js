// Arrays 

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

const wordsUnique = [
    'crab',
    'poison',
    'contagious',
    'simple',
    'bring',
    'sharp',
    'playground',
    'poison',
    'communion',
    'simple',
    'bring'
];

const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

// Functions

function maxOfTwoNumbers(number1, number2) {
    if(number1 > number2)
        return number1;
    else
        return number2;

}

function findLongestWord(wordArray) {
    let longestWord = "";

    if(!Array.isArray(wordArray) || wordArray.length === 0)
        return null;

    wordArray.forEach(function(word) {

        if(word.length > longestWord.length)
            longestWord = word;
    });

    return longestWord;
}

function sum(arrayToSum) {
    let result = 0;

    if(!Array.isArray(arrayToSum) || arrayToSum.length === 0)
        return 0;    
    
    arrayToSum.forEach(function(element) {
        type = typeof element;
        switch(type) {
            case 'string':
                result += element.length;
                break;
            case 'number':
                result += element;
                break;
            case 'boolean':
                result += (element ? 1 : 0);
                break;
            default:
                throw new Error("Unsupported data type sir or ma'am")
        }
    });

    return result;
}

function sumNumbers(numberArray) {
    let result = 0;

    if(!Array.isArray(numberArray) || numberArray.length === 0)
        return 0;
    
    numberArray.forEach(function(number) {
        result += number;
    });

    return result;
}

function averageNumbers(numberArray) {

    if(!Array.isArray(numberArray) || numberArray.length === 0)
        return null;

    let sum = sumNumbers(numberArray);
    let avg = sum / numberArray.length;

    return avg;

}

function uniquifyArray(wordsArray) {
    let uniquifiedArray = [];

    if(!Array.isArray(wordsArray) || wordsArray.length === 0)
        return null;

    wordsArray.forEach(function(word) {
        if(uniquifiedArray.indexOf(word) === -1)
            uniquifiedArray.push(word);
    });

    return uniquifiedArray;
}

function doesWordExist(wordsArray, wordToFind) {

    let result = false;

    if(!Array.isArray(wordsArray) || wordsArray.length === 0)
        return null;

    wordsArray.forEach(function(word) {
        
        if(word == wordToFind)
            result = true;
        
    });

    return result;
}

function howManyTimes(wordsArray, wordToCount) {
    wordCount = 0;

    wordsArray.forEach(function(word) {

        if(word == wordToCount)
            wordCount++;
    });

    return wordCount;

}

function averageWordLength(wordsArray) { 

    if(!Array.isArray(wordsArray) || wordsArray.length === 0)
        return null;

    wordsLengthSum = 0;
    wordsLengthAvg = 0;

    wordsArray.forEach(function(word) {
        wordsLengthSum += word.length;
    });

    wordsLengthAvg = wordsLengthSum / wordsArray.length;

    return wordsLengthAvg;

}

function avg(arrayToAvg) {    

    if(!Array.isArray(arrayToAvg) || arrayToAvg.length === 0)
        return null;

    let elementsSum = sum(arrayToAvg);
    let result = elementsSum / arrayToAvg.length;

    return result;
}

function greatestProduct(numbersMatrix) {

    max = 0;
    result = 0;

    for (i = 0; i < numbersMatrix.length; i++)
    {
        for (j = 0; j < numbersMatrix[i].length; j++)
        {
            if ((j - 3) >= 0)
            {
                result = numbersMatrix[i][j] * numbersMatrix[i][j - 1] *
                         numbersMatrix[i][j - 2] * numbersMatrix[i][j - 3];
                 
                if (max < result)
                    max = result;
            }

            if ((i - 3) >= 0)
            {
                result = numbersMatrix[i][j] * numbersMatrix[i - 1][j] *
                         numbersMatrix[i - 2][j] * numbersMatrix[i - 3][j];
                 
                if (max < result)
                    max = result;
            }

            if ((i - 3) >= 0 && (j - 3) >= 0)
            {
                result = numbersMatrix[i][j] * numbersMatrix[i - 1][j - 1] *
                         numbersMatrix[i - 2][j - 2] * numbersMatrix[i - 3][j - 3];
                 
                if (max < result)
                    max = result;
            }

            if ((i - 3) >= 0 && (j - 1) <= 0)
            {
                result = numbersMatrix[i][j] * numbersMatrix[i - 1][j + 1] *
                         numbersMatrix[i - 2][j + 2] * numbersMatrix[i - 3][j + 3];
     
                if (max < result)
                    max = result;
            }
        }
    }
 
    return max;
}