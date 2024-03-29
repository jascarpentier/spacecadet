const DOMAIN = 'https://www.googleapis.com/books/v1/volumes?q=search+terms';
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;
const button = document.querySelector('button');
const list = document.querySelector('list');
const collectionName = document.querySelector('collectionName');
const bookList = document.querySelector('bookList');
const buyBooks = document.querySelector('.buyBooks');

const render = (books) => {
  books.forEach(book => {
    const el = document.createElement('div');
    el.classList.add('bookDiv');
    console.log(el)

    el.innerHTML = `
          <h2>${book.volumeInfo.title}</h2>
          <img src=${book.volumeInfo.imageLinks.thumbnail}>
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

    buyBooks.appendChild(el)
  });

}

button.addEventListener('click', async () => {
  const searchTerms = document.querySelector('input').value;
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`)
  const books = response.data.items;
  console.log(books)
  render(books)
})

