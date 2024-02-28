function sort(n){
    arr = Array.from(String(n), Number);
    x = arr.sort((a, b) => b - a)
    console.log(x.join().replace(/,/g, ''))
    console.log(typeof x[0])
}

sort(0)