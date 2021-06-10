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
      // restaurantItem.innerHTML += `
      // <article tabindex="0" class="card-item" alt="List restaurant">
      //     <img tabindex="0" class="card-item-pic" src="${items.pictureId}" alt="${items.name}" title="${items.name}">
      //         <div class="card-item-content">
      //         <h1 tabindex="0" class="card-item-title"><a href="#">${items.name}</a></h1>
      //             <div class="card-item-box">
      //                 <p tabindex="0" class="card-item-city">${items.city}</p>
      //                 <p tabindex="0" class="card-item-rate"><strong tabindex="0">${items.rating}</strong> <em class="fas fa-star"></em></p>
      //             </div>
      //             <p tabindex="0" class="card-item-description">${items.description}</p>
      //         </div>
      // </article>
      // `;
    });
  });
};

export default getRestaurant;
