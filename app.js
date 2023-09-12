// 1. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს
// თუ ციფრი დადებითია ფუნქციამ უნდა დააბრუნოს "დადებითია", თუ
// არა "უარყოფითია"
function positiveOrNegativeNumber (num){
    if(num > 0){
        return "დადებითია"
    }
    else{
        return "უარყოფითია"
    }
}
const test = positiveOrNegativeNumber(7)
console.log(test)
// 2. დაწერეთ ფუნქცია რომელიც დააბრუნებს ყველა ციფრის ჯამს
// 1 დან 100 მდე
function getSum(){
    let sum = 0
    for(let i = 0 ; i<100 ;i++){
        sum +=i
    }
    return sum
}
console.log(getSum())
// 3. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს, ფუნქციამ უნდა
// დააბრუნოს ეს ციფრი კენტია თუ ლუწი
function oddOrEven (num){
    if(num % 2===0){
        return "ლუწია"
    }
    else{
        return "კენტია"
    }
}
console.log(oddOrEven(5))
// 4. შექმენით ობიექტი car რომელსაც ექნება year და model.
// დაწერეთ ფუნქცია რომელსაც გადასცემთ ამ მანქანის ობიექტს
// და ფუნქციამ უნდა დააბრუნოს მანქანის ასაკი
const car = {
    year : 2009 ,
    model : 'honda' ,
}
function getAge(obj){
    const age = 2023 - obj.year
    return age
}
console.log(getAge(car))
// 5. დაწერეთ ფუნქცია რომელსაც გადავცემთ ციფრების მასივს,
// მაგალითად [1,4,88,99, 123]. ფუნქციამ უნდა იპოვოს და დააბრუნოს
// მასივის უდიდესი ციფრი
function findLagrestNum(arr){
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if(max < arr[i]){
            max = arr[i]
        }
    }
    return max
}
const numbers = [12, 5, 67, 8, 101, 42];
const largestNumber = findLagrestNum(numbers);
console.log(largestNumber)
// 6. გააკეთეთ იგივე ოღონდ დააბრუნეთ უმცირესი ციფრი
function findSmallestNum(arr) {
    let min = arr[0]
    for(let i = 1 ; i<arr.length ; i++){
        if(min>arr[i]){
            min = arr[i]
        }
    }
    return min
}
const smallestNumber = findSmallestNum(numbers);
console.log(smallestNumber)
// 7. დაწერეთ ფუნქცია რომელსაც გადასცემთ სიტყვას,
// ფუნქციამ უნდა დააბრუნოს ამ სიტყვის შებრუნებული ვერსია,
// მაგალითად თუ გადავცემთ someFn("ერთი"), უნდა დააბრუნოს "ითრე"
function getReversedWord(word){
    let splitString = word.split('')
    let reverseStr = splitString.reverse()
    let joinStr = reverseStr.join("")
    return joinStr
}
console.log(getReversedWord("erti"))