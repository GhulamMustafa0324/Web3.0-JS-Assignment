function carMaker(manufacturer, model, other = null) {
  let obj = {
    manufacturer,
    model,
  };
  for (let i in other) {
    obj[i] = other[i];
  }
  return obj;
}

console.log(carMaker("honda", "2005"));
console.log(
  carMaker("GMC", "2020", { color: "black", feature: "only 1 in world" })
);
