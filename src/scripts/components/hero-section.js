class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                    <div tabindex="0" class="hero">
                        <div class="hero-card">
                            <h1 tabindex="0" class="hero-title">Dapoer Jadoel</h1>
                            <p tabindex="0" class="hero-subtitle">Best restaurant in town.</p>
                        </div>
                    </div>
                `;
  }
}

customElements.define('hero-section', Hero);
