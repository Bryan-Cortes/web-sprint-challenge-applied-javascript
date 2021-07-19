// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//      <div class="img-container">
//        <img src={url of authors image} />
//      </div>
//      <span>By {author's name}</span>
//   </div>
// </div> 
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.



axios 
.get('https://lambda-times-api.herokuapp.com/articles')
.then((response)=>{
  const articleData = response.data.articles;
  const cardContainer = document.querySelector('.cards-container');
  
  Object.keys(articleData).forEach((key)=>{
    articleData[key].forEach((article)=>{
      cardContainer.appendChild(articleCardMaker(article));
    })
  })

  cardContainer.addEventListener('click',(event)=>{
    console.log(event.target);
  })
})
.catch((error) =>{
  error = "Error 404. Data isn't working"
  console.log(error)
})



function articleCardMaker(articleObject){

  // instantiating the elements

  const card = document.createElement('div');
  const headline = document.createElement('div');

  const author = document.createElement('div');
  const imageContainer = document.createElement('div');
  const image = document.createElement('img');
  const authorName = document.createElement('span');


  // creating the hierarchy

  card.appendChild(headline);
  card.appendChild(author);

  author.appendChild(imageContainer);
  imageContainer.appendChild(image);
  author.appendChild(authorName);

  // setting class names
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imageContainer.classList.add('img-container');

  // setting attributes
  image.src = articleObject.authorPhoto;

  // setting text
  headline.textContent = articleObject.headline;
  authorName.textContent = articleObject.authorName;

  return card;
}


