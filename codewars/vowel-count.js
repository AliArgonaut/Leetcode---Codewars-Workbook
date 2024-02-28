function vowelcount(str){
    let count = 0
    const vowels = 'aeiou'
    for(i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            count++
        }
    }
    console.log(count)
}

vowelcount('aeiou')