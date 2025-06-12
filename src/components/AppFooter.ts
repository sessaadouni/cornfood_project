export class AppFooter extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p class="font-2xl">test</p>
      </footer>
    `
  }
}

customElements.define("app-footer", AppFooter)