const foodItems=
  {
    breakfast: [
      { id: 1, name: 'Avacado Toast', price: '$12' },
      { id: 2, name: 'Pancake', price: '$8' },
    ],
    lunch: [
      { id: 1, name: 'Chicken Salad', price: '$12' },
      { id: 2, name: 'Wrap', price: '$8' },
    ],
    dinner: [
      { id: 1, name: 'Salmon', price: '$12' },
      { id: 2, name: 'Pasta ', price: '$8' },
    ],
  };

function getFoodByMeal(meal) {
  if(!meal) return null;
  const food=String(meal).toLowerCase()
  return foodItems[food];
}
  
module.exports = {
  getFoodByMeal
};
  