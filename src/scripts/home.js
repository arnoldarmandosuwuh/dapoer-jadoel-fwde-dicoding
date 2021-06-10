const getRestaurant = () => {
  const restaurantItem = document.querySelector("#restaurants");
  restaurantItem.innerHTML = "";
  import("../DATA.json").then(({ default: dataRestaurant }) => {
    let data = dataRestaurant["restaurants"];
    data.map((items) => {
      let data = JSON.stringify(items);
      restaurantItem.innerHTML += `
        <card-item value='${data}'></card-item>
      `;
    });
  });
};

export default getRestaurant;
