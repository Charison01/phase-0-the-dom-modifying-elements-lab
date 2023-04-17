// Write your code here!
//Remove the main with ID in the DOM
const body = document.querySelector('body')
body.remove(main)

//Add newHeader with ID victory
const newHeader = document.createElement('h1')
newHeader.id = 'victory'

//Adding contents inside
newHeader.innerHTML = "YOUR-NAME is the champion"
