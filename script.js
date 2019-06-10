const DOMAIN = 'https://www.googleapis.com/books/v1/volumes?q=search+terms';
const API_KEY = 'AIzaSyCMRkIUhX9QITmY8RIsacHdHSCB_DM_jLA';
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;
const button = document.querySelector('button');
const list = document.querySelector('list');
const collectionName = document.querySelector('collectionName');
const bookList = document.querySelector('bookList');


const render = (books) => {
  books.forEach(book => {
    const el = document.createElement('div');
    console.log(el)

    el.innerHTML = `
          <h2>${book.volumeInfo.title}</h2>
          <p>${book.volumeInfo.authors}</p>
          <p>${book.searchInfo.textSnippet}</p>
          <p>${book.volumeInfo.categories}</p>`;
    if (book.saleInfo.buyLink) {
      el.innerHTML += `
      <button>Buy now</button>
      `
      const buyButton = el.querySelector('button');
      buyButton.onclick = () => {
        location.href = book.saleInfo.buyLink;
      }
    }

    document.body.appendChild(el)
  });

}




button.addEventListener('click', async () => {
  const searchTerms = document.querySelector('input').value;
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`)
  const books = response.data.items;
  console.log(books)
  render(books)
})

