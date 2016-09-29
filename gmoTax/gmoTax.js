// A new law has been passed that mandates a tax on genetically modified
// food. A certain farmer decides to increase the price of his goods by 15%
// in response, and wants your help on analyzing the difference. Given the
// farmer’s catalog of original prices and a category name, your task is to
// return the sum of all price increases for foods in that category after the
// 15% increase (round to the nearest cent).
//
// NOTE: You are required to use at least one filter. Pros can use reduce to
// make their code even more functional-style.
//
//
// Examples
// Input	                                                      Output
// foods:
// [ { "id": 243, "name": "Rice",
// "centsPerUnit": 20, "category": "grains" },             ||    135
// { "id": 153, "name": "Wheat", "centsPerUnit": 540,
// "category": "grains" }, { "id": 234, "name": "Corn",
// "centsPerUnit": 400, "category": "vegetables" },
// { "id": 634, "name": "Celery", "centsPerUnit": 240,
// "category": "vegetables" }, { "id": 634, "name": "Spinach",
// "centsPerUnit": 260, "category": "vegetables" },
// { "id": 145, "name": "Pineapple", "centsPerUnit": 400,
// "category": "fruits" }, { "id": 145, "name": "Pears",
// "centsPerUnit": 140, "category": "fruits" } ]
// 
// category:
// "vegetables"

function getTaxIncrease (foods, category) {
  //return the sum of all price increases in each category
  var food = foods.filter(function(obj) {
    return obj.category === category;
  })
  var sumPrice = 0;
  food.forEach(function(obj){
    sumPrice += obj.centsPerUnit;
  })
  return sumPrice * 1.15 - sumPrice;
};
