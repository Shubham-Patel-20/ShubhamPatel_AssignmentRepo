
function isAnagram(str1, str2)
{
    //First step in this function is to convert string into uppercase, and sort them according to their alphabetical order. 
    //This will help us in comparing both strings letter by letter
    let Text1 = str1.toUpperCase().split('').sort().join('');
    let Text2 = str2.toUpperCase().split('').sort().join('');
    var i;
    //Second step is to check each letter and if all the letter matches of a string matches with other, it's an Anagram
    if(Text1.length == Text2.length)
    {
        for(i=0; i<Text1.length;i++)
        {
            if(Text1[i] != Text2[i])
            {
                return false
            }
        }
        return true
    }
    else{
        return false;
    } 
}


function calculateTotalSpentByCategory(transactions) {
    // This function creates sums the price by category. 
    const categoryTotal = transactions.reduce((acc, transaction) => {
        const {category, price} = transaction;
        acc[category] = (acc[category] || 0) + price;
        return acc;
    }, {});

    const objToArr = Object.entries(categoryTotal).map(([category, total]) => ({ category, total }));

    return objToArr;
}


function findLargestElement(numbers)
{
    //In this function, we run a for loop to find the largest number. 
    //Here we are taking "j" as a variable which will store the index of the largest number.
    var i;
    let j=0;
    for(i = 1; i< numbers.length; i++)
    {
        if(numbers[j] < numbers[i])
        {
            j=i;
        }
    }
    return numbers[j];
}

function isPalindrome(str)
{
    //In this function we reverse the given string and if the reversed string is equal to given string, it's a Palindrome.
    const ReversedString =  str.split('').reverse().join('');
    if(ReversedString == str)
    {
        return true;
    }
    else{
        return false;
    }
}

function calculateTime(n) {
    //This function gets the time before and after executing the sum of n elements
    var startTime = new Date();
    
    let sum = n * (n + 1) / 2;
    console.log(sum);

    var endTime = new Date();
    timeTaken = (endTime.getMilliseconds() - startTime.getMilliseconds()) / 1000;

    return timeTaken;
}

function countVowels(str)
{
    //Fitst step in this function is to convert our string into uppercase which will make it easy for us to find vowel.
    var Text1= str.toUpperCase();
    var i;
    var count = 0;
    
    for(i=0 ; i<Text1.length; i++)
    {
        //We will run a simple if-condition to check if a letter is "A,E,I,O,U" or not
        if(Text1[i] == "A" || Text1[i] == "E" ||Text1[i] == "I" ||Text1[i] == "O" ||Text1[i] == "U")
        {
            count++;
        }
    }
    return count;
}

function sumArray(SUMARRAY)
{
    //In this function we will traverse our array using for-loop and store addition of each loop in "sum" variable
    var i;
    var sum =0;
    for(i=0 ; i<SUMARRAY.length; i++)
    {
        sum = sum + SUMARRAY[i];
    }
    return  sum;
}

function filterEvenNumbers(numbers)
{
    //In this function, we are creating "NewArray" array that will store even numbers.
    var NewArray = [];
    //We will run a simple for-loop and if-condition to check whether a given number is even or not
    for(var i=0 ; i<numbers.length; i++)
    {
        if(numbers[i] % 2 == 0)
        {
            NewArray.push(numbers[i]);
        }
    }
    return NewArray;
}

function findSmallestElement(numbers)
{
    //In this function, we run a for loop to find the smallest number. 
    //Here we are taking "j" as a variable which will store the index of the smallest number.
    var i;
    let j=0;
    for(i = 1; i< numbers.length; i++)
    {
        if(numbers[j] > numbers[i])
        {
            j=i;
        }
    }
    return numbers[j];
}

function reverseString(str)
{
    //In this function, first we will convert our string into array using split() function, apply reverse() function and join it using join() function.
    //This will give us reversed string
     return str.split('').reverse().join('');
}

function fibonacci(n)
{
    var l=0; //Previous number
    var h=1; //Current number
    var p; //New number produced by addition of l and h
    var str = "0 1 " // Store the series in a string form
    for(var i=1; i<n-2 ; i++)
    {
        p = l+h;
        str = str + p + " ";
        l = h;
        h = p;
    }
    return str;
}

function removeDuplicates(arr) {
    //In this function we will use inbuilt function to remove duplicate elements
    return Array.from(new Set(arr));
}

function countOccurences(str, char) {
    //In this function we are uing filter function to find the occurance of the character.
    return [...str].filter((a) => a === char).length;
}

function findCommonElements(arr1, arr2) {
    arr1 = Array.from(new Set(arr1));
    //We are creating "arr3" array which will store common elements in it.
    let arr3 = [];

    //We are using simple for-loop and if-statement to check if there is a common element in both the arrays
    for(let i of arr1) {
        for(let j of arr2) {
            if(i === j) {
                arr3.push(i);
                break;
            }
        }
    }
    return arr3;
}

function sortStrings(str){
    //In this function, we are using inbuilt "sort()" fucntion to sort the given string
    return str.sort();
}




//Anagram
console.log(isAnagram("Silent","Listen"));

//calculateTotalSpentByCategory
let transaction = [111,287,33,4,15,16,7,28,9];
console.log(calculateTotalSpentByCategory(transaction));


//Largest Number
let numbers = [111,287,33,4,15,16,7,28,9];
console.log(findLargestElement(numbers));

//isPalindrome
console.log(isPalindrome("saas"));

//calculateTime
console.log(calculateTime(40));


//countVowels
console.log(countVowels("Shubham"))

//SUMARRAY
const SUMARRAY = [1,2,3,4,5,6,7,8,9,10];
console.log(sumArray(SUMARRAY));

//filterEvenNumbers
console.log(filterEvenNumbers(SUMARRAY));

//findSmallestElement
console.log(findSmallestElement(numbers));

//reverseString
console.log(reverseString("numbers"));

//fibonacci
console.log(fibonacci(6));

//removeDuplicates
const arr2 = [1,2,4,4,65,7,8,12,56,67,56];
console.log(removeDuplicates(arr2));

//countOccurences
console.log(countOccurences("Shubham"));

//findCommonElements
let numbersX = [111,287,33,4,15,16,7,28,9];
let numbersY = [111,7,33,41,15,5,7,74,9];

console.log(findCommonElements());

//sortStrings
const Str1 = ['a','x','t','d','c'];
console.log(sortStrings(Str1))