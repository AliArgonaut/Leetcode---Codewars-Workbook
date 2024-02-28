function complement(dna){
    const side = ['']
    for(x=0;x<dna.length;x++){
        switch(dna[x]){
            case 'A': side.push('T'); break
            case 'T': side.push('A'); break
            case 'C': side.push('G'); break
            case 'G': side.push('C'); break
        }
    }
    console.log(side.join('').replace(/,/g, ''))
}

complement('CTAGC')