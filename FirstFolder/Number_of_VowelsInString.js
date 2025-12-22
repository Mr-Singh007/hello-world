str = "Manveer"
function findVol(str){
    number = 0;
    for(let ch of str)
    {
        if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' )
        {
            number++;
        }
    }

    return number;
}
console.log(findVol(str));
