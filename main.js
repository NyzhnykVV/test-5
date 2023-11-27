function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let l = 0; l < arr.length - i - 1; l++) {
            if (arr[l] > arr[l + 1]) {
                let n = arr[l];
                arr[l] = arr[l + 1];
                arr[l + 1] = n;
            }
        }
    }
}

let arr = [10, 14, 22, 8, 31, 97, 12, 63, 21, 1, 47];
let target = 22;

bubbleSort(arr);
console.table(arr);

let left = 0;
let right = arr.length - 1;
let searchResult = -1;

while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
        searchResult = mid;
        break;
    } else if (arr[mid] < target) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

if (searchResult === -1) {
    console.log(`Ваш масив посортовано, елемент ${target} не знайдено :(`);
} else {
    searchResult++;
    console.log(`Ваш масив посортовано, елемент ${target} є ${searchResult} з ${arr.length} елементів`);
}

console.log(`Мінімальне число в масиві --> ${arr[0]}`);
console.log(`Максимальне число в масиві --> ${arr[arr.length - 1]}`);