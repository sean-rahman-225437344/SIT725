// Import the service
const foodService = require('../services/foodService');

// Controller uses the service to get data
exports.getAllFood = (req, res) => {
  const { meal } = req.query;
  const items = foodService.getFoodByMeal(meal);

  if (!items) {
    return res.status(400).json({ 
      status: 400, 
      message: 'Invalid meal type. Please use breakfast, lunch, or dinner.' 
    });
  }

  res.status(200).json({
    status: 200,
    meal: String(meal).toLowerCase(),items,
    message: 'Food retrieved successfully.'
  });
};