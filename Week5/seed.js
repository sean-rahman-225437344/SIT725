const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myprojectDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
});

const Project = mongoose.model("Project", ProjectSchema);


const cardData = [
  {
    title: "Afternoon",
    image: "images/lunch.jpg",
    description: "<ul><li>Grilled Chicken</li><li>Salad</li><li>Avocado</li></ul>",
  },
  {
    title: "Night",
    image: "images/dinner.jpg",
    description: "<ul><li>Tortilla</li><li>Salad</li></ul>",
  },
];


Project.insertMany(cardData)
  .then(() => {
    console.log("Sample data inserted");
    mongoose.connection.close();
  })
  .catch((err) => console.error(err));