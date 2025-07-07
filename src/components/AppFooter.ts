import '../styles/layout/footer.scss'

export class AppFooter extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `
      
    <footer class="footer">
  <div class="container">
    <section class="footer-contact">
      <article class="footer-contact__section">
        <h2>Nous contacter</h2>
        
        <div class="footer-contact__section-wrapper">
          <div class="footer-contact__section-wrapper__container">
            <img src="/mail.png" alt="icone de mail">
            <span class="separator"></span>
            <img src="/pin-3.png" alt="icone d'un pin de carte">
          </div>
        </div>
        
        <p class="address">
          35 rue Marengo
          13006 Marseille
        </p>
        
        <ul class="social-links">
          <li>
            <a href=""><img src="/logo-facebook.png" alt=""></a>
          </li>
          <li>
            <a href=""><img src="/logo-instagram.png" alt=""></a>
          </li>
          <li>
            <a href=""><img src="/logo-messenger.png" alt=""></a>
          </li>
        </ul>
      </article>
      <form action="" class="footer-contact__form">
        <input type="text" name="" id="" placeholder="Nom">
        <input type="email" name="" id="" placeholder="Email">
        <textarea name="" id="" cols="30" rows="8" placeholder="Message"></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
    <section class="footer-copyright">
      <small>
      2025 &copy; Cornfood - by <a href="">La Passerelle</a>
      </small>
    </section>
  </div>
</footer>
    `
  }
}

customElements.define("app-footer", AppFooter)