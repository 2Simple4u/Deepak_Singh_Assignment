function pigLatinTranslator(str, bool) {
    const arr = str.split(' ');
    const finalArr = [];
    if (bool) {
        arr.map(e => {
            let strArr = e.split('');
            let first = strArr.shift();
            if (first === first.toUpperCase()) {
                first = first.toLowerCase();
                strArr[0] = strArr[0].toUpperCase();
            }
            strArr.push(first + 'ay');
            const newStr = strArr.join('');
            finalArr.push(newStr);
        });
    } else {
        arr.map(e => {
            let strArr = e.split('');
            const strLength = strArr.length;
            while (strArr.length > strLength - 2) {
                strArr.pop();
            }
            let last = strArr.pop();
            let first = strArr[0];
            if (first === first.toUpperCase()) {
                strArr[0] = first.toLowerCase();
                last = last.toUpperCase();
            }
            strArr.unshift(last);
            const newStr = strArr.join('');
            finalArr.push(newStr);
        });
    }
    return finalArr.join(' ');
}

console.log(pigLatinTranslator("The quick brown fox", true));