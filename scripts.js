let buttonFind = document.getElementById('button');
let inputBox = document.getElementById('isbnBook');
let enteredText;
let coverImage = document.getElementById('cover');
let apiResponseElement = document.getElementById('apiResponse');

buttonFind.addEventListener('click', () => {
  enteredText = inputBox.value;
  locateISBN(enteredText);
});

async function locateISBN(code) {
  try {
    const response = await fetch(`https://brasilapi.com.br/api/isbn/v1/${code}`);
    if (response.ok) {
      const book = await response.json();
      document.getElementById('isbn').textContent = enteredText || 'Not Found';
      document.getElementById('title').textContent = book.title || 'Not Found';
      document.getElementById('author').textContent = book.authors || 'Not Found';
      document.getElementById('provider').textContent = book.provider || 'Not Found';
      document.getElementById('publisher').textContent = book.publisher || 'Not Found';
      document.getElementById('publishedDate').textContent = book.year || 'Not Found';
   
      console.log(book)
      
      if (book.cover) {
        coverImage.src = book.cover;
      } else {
        coverImage.src = 'placeholder.jpg';
      }

    } else {
    }
  } catch (error) {
    }
}
