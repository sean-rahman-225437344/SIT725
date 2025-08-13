const foodItems = [
    { id: 1, name: 'Bacon Gravy Whopper', price: '$12' },
    { id: 2, name: 'Bacon Gravy Grilled Chicken', price: '$8' },
    { id: 3, name: 'Bacon Gravy Jacks Fried Chicken', price: '$15' },
    { id: 4, name: 'Parmi Grilled Chicken', price: '$10' },

  ];
  
  // Service function to get all food items
  const getAllFood = () => {
    return foodItems;
  };
  
  module.exports = {
    getAllFood
  };
  