class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                    <nav>
                        <div class="logo">
                        <a href="#">
                            <img src="/images/logo/logo.png" alt="Logo brand Dapoer Jadoel" />
                            <h1>Dapoer Jadoel</h1>
                        </a>
                        </div>
                        <button class="menu-toggle" aria-label="hamburger menu">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        </button>
                        <ul tabindex="0">
                        <li>
                            <a href="/"><em class="fas fa-home"></em> Home</a>
                        </li>
                        <li>
                            <a href="#"><em class="fas fa-heart"></em> Favorite</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/arnold-armando-suwuh/"
                            ><em class="fas fa-user"></em> About Us</a
                            >
                        </li>
                        </ul>
                    </nav>
                    `;
  }
}

customElements.define('navbar-section', Navbar);
