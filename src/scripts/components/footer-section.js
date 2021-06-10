class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                    <footer tabindex="0">
                      <p tabindex="0">Copyright &copy; 2021 - Dapoer Jadoel.</p>
                    </footer>
                  `;
  }
}

customElements.define("footer-section", Footer);
