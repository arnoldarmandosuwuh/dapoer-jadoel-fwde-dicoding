class CardItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  //   get value() {
  //     return this.getAttribute("value");
  //   }

  //   set value(newValue) {
  //     this.setAttribute("value", newValue);
  //   }

  render() {
    let items = JSON.parse(this.attributes.value.value);
    // console.log();
    // // let items = this.value;
    this.innerHTML = `
            <article tabindex="0" class="card-item" alt="List restaurant">
                <img tabindex="0" class="card-item-pic" src="${items.pictureId}" alt="${items.name}" title="${items.name}">
                    <div class="card-item-content">
                    <h1 tabindex="0" class="card-item-title"><a href="#">${items.name}</a></h1>
                        <div class="card-item-box">
                            <p tabindex="0" class="card-item-city">${items.city}</p>
                            <p tabindex="0" class="card-item-rate"><strong tabindex="0">${items.rating}</strong> <em class="fas fa-star"></em></p>
                        </div>
                        <p tabindex="0" class="card-item-description">${items.description}</p>
                    </div>
            </article>
        `;
  }
}

customElements.define("card-item", CardItem);
