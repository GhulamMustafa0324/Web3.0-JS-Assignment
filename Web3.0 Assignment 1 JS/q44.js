function orderSandwich (...items){
    process.stdout.write(`\nYour sandwich with items `);
    for(let i=0; i<items.length; i++) {
        process.stdout.write(items[i]+ ", ");
    }
    process.stdout.write("is in making");
}

orderSandwich("chicken","ketchup", "mayonaise");
orderSandwich("beef","mustard sauce");
orderSandwich("bbq","hot sauce")