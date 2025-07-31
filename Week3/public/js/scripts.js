const cardList = [
  {
    title: "Afternoon",
    image: "images/lunch.jpg",
    desciption: 
    '<ul><li>Grilled Chicken</li><li>Salad</li><li>Avacado</li></ul>',
  },
  {
    title: "Night",
    image: "images/dinner.jpg",
    desciption:
    '<ul><li>Tortilla</li><li>Salad</li></ul>',
  },
];

const submitForm = () => {
  let formData = {};
  formData.email = $('#email').val();
  console.log("Form Data Submitted: ", formData);
}

const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
      item.image +
      '">' +
      '</div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '</span><p><a href="#">' +
      "</a></p></div>" +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.desciption +
      "</p>" +
      "</div></div></div>";
    $("#card-section").append(itemToAppend);
  });
};
$(document).ready(function () {
  $(".materialboxed").materialbox();
  addCards(cardList);
  $('#formSubmit').click(()=>{
      submitForm();
  });
  $(".modal").modal();
});
 
 