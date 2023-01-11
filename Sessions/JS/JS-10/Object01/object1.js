const book={
    title: 'JS',
    firstName: 'John',
    lastName: 'Doe',
    pages: 214,
    chapters: ['introduction','type of variables','loops'],
    published: true,
    // 0: 'testing',
    tutorialCD:{
        size: 'full',
        capacity: '700Mb',
        title: 'Tutorial JS'
    }
}

console.log(book);
console.log(book.title);
book.title='JS for Beginners'
console.log(book.title);
console.log(book['pages']);

let indicator = 'last';

console.log(book[`${indicator}Name`]);

console.log(book.ISBN);
// book.ISBN=235473989;
book['ISBN']=12312414124;
console.log(book.ISBN);

console.log(book.tutorialCD.capacity);
console.log(book['tutorialCD']['capacity']);

console.log(book.tutorialCD.size);
book.tutorialCD.size = 'small';
console.log(book.tutorialCD.size);







