let n = 10
let arr=[]
for(let i=1; i<=n; i++)
{
    arr[i-1] = i;
}
let sum = arr.reduce((prev, currentV) =>{
    return prev+currentV;
} )
console.log(sum);
