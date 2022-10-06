function openOrSenior(data){
    return data.map((arr) => {
        return arr[0]>=55&&arr[1]>7 ? 'Senior' : 'Open'
    }).concat()
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))

