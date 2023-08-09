
async function getCards() {
    try {
      const response = await fetch('API/carsd.json');
      const cards = await response.json();
      getTemplateCards(cards);
    } catch (error) {
      console.error(error);
    }
  }
  
  /**
   * Hace una petición al archivo handlebars y lo compila
   */
  async function getTemplateCards(cards) {
    try {
      const response = await fetch( 'templates/cards.hbs');
      const templateCards = await response.text();
  
      const template = Handlebars.compile(templateCards);
      const htmlCards = cards.map((producto) => template(producto)).join('');
      document.getElementById('products-container').innerHTML = htmlCards;
    } catch (error) {
      console.error(error);
    }
  }
  
  getCards();
  
