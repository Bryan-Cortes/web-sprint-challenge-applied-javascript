// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

// const tabs = document.querySelector('.tabs');
const topicsContainer = document.querySelector('.topics');

axios 
.get('https://lambda-times-api.herokuapp.com/topics')
.then((response) =>{
  const topicsArray = response.data.topics;
  // console.log(topicsArray)

  // loop thru the topics 
  topicsArray.forEach((item)=>{
    const tabsTopic = document.createElement('div');
    tabsTopic.classList.add('tab');
    tabsTopic.textContent = item
    topicsContainer.appendChild(tabsTopic);
  })
  
})
.catch((error)=>{
  error = "Error 404. Data isn't working"
  console.log(error)
})
// console.log(topicsContainer); 