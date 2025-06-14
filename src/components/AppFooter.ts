import '../styles/layout/footer.scss'

export class AppFooter extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p class="">test</p>
      </footer>
    `
  }
}

customElements.define("app-footer", AppFooter)