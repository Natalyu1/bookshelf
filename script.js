const books = [
    {
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      authors: 'Erich Gamma, John Vlissides, Ralph Johnson, Richard Helm',
      year: '1994',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81gtKoapHFL.jpg'
    },
    {
      title: 'JavaScript: The Good Parts',
      authors: 'Douglas Crockford',
      year: '2008',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg'
    },
    {
      title:
      'JavaScript Patterns: Build Better Applications with Coding and Design Patterns',
      authors: 'Stoyan Stefanov',
      year: 2008,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51%2BSiphz7AL._SX377_BO1,204,203,200_.jpg'
    },
    {
      title:
      'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
      authors: 'David Flanagan',
      year: 2011,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51WD-F3GobL._SX379_BO1,204,203,200_.jpg'
    }
    ]

    const container = document.getElementById("myContainer")

    books.forEach((book) => {
    container.innerHTML += `
       <div class = "books-container"> 
       <div class = "limiter-container">
       <div class = "limiter">
       <img alt="" class="imge" src="${book.image}">
       <h2 class = "title">${book.title}</h2>
       <p class = "year">${book.year}</p>
       <p class = "authors">${book.authors}</p>
       </div>

       <div class = "button-container">
       <div >
       <button class = "button">Изменить</button>
       </div>
       <div>
       <button class = "button">Удалить</button>
       </div>
       </div>
       </div>
       
    `
  }
  )