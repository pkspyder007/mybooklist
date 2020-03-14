let books = [
    {
        title: 'Alchemist',
        author: 'Eaul',
        isbn: 8844
    },
    {
        title: 'Ninja Hattori',
        author: 'Kali charan',
        isbn : 9211
    }
];

let bookList = document.querySelector('#book-list');

books.forEach(function(book){
    let row = document.createElement('tr'); 
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td>`;
    bookList.appendChild(row);
});

let form = document.querySelector('#book-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let title = document.querySelector('#book-title').value;
    let author = document.querySelector('#book-author').value;
    let isbn = document.querySelector('#book-isbn').value;
    if(title === '' || author === '' || isbn === '') {
        let msg = document.querySelector('#msg');
        msg.innerHTML = '<div class="message alert alert-danger">Please Enter all the fields</div>';
        setTimeout(function(){
            console.log('hhh');
            document.querySelector('.message').remove();
        }, 3000);
    } else {
        let row = document.createElement('tr'); 
        row.innerHTML = `<td>${title}</td><td>${author}</td><td>${isbn}</td>`;
        bookList.appendChild(row);
    }
    

})














