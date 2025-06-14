import '../styles/layout/header.scss'

export class AppHeader extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `
      <header>
        <p class="underline">test</p>
        <h2>haha</h2>
      </header>
    `
  }
}

customElements.define("app-header", AppHeader)