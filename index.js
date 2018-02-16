const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

//Form event listener
searchForm.addEventListener('submit', e =>{
    //Get search term
    const searchTerm = searchInput.value;
    //Get sort
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
    //Get limit
    const searchLimit = document.getElementById('limit').value;

    //Check input
    if(searchTerm === ''){
        //Show msg
        showMessage('Please add search term', 'alert-danger');
    }

    //Clear input
    searchInput.value = '';

    //Search Reddit

    /*
     reddit api calls will go here.
    */
    e.preventDefault();
});

//Show msg function
function showMessage(message, className){
    //Creat div
    const div = document.createElement('div');
    //Add class
    div.className = `alert ${className}`;
    //Add text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const searchContainer = document.getElementById('search-container');
    //Get search
    const search = document.getElementById('search');

    //Insert msg
    searchContainer.insertBefore(div, search);

    //Timeout alert
    setTimeout(()=> document.querySelector('.alert').remove(), 3000);
}