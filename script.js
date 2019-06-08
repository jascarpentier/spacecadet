const button = document.querySelector('button');
const API_KEY = 'AIzaSyCMRkIUhX9QITmY8RIsacHdHSCB_DM_jLA';
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;
const DOMAIN = '';
const list = document.querySelector('list');
const collectionName = document.querySelector('collectionName');

button.addEventListener('click', async () => {
  const searchValue = document.querySelectorI('input').value;
  const response = await axios.get('https://www.googleapis.com/books/v1/${collectionName}/resourceID?parameters')

})