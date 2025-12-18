let items = [250, 645, 300, 900, 50]
let offer = 10
console.log(`A ${items}`);
for(let i = 0; i < items.length; i++){
    items[i] = items[i] - (items[i] / offer)
}
console.log(`B ${items}`);

