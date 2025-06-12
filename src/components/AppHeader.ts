export class AppHeader extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `
      <header>
        <p class="underline">test</p>
      </header>
    `
  }
}

customElements.define("app-header", AppHeader)