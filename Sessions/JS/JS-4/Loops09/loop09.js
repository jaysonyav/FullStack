for (let row = 0; row <= 5; row++) {

    let result = '';
    for(let col=1;col<=5;col++){
        result +=`${row} x ${col} = ${row*col} | `;
    }
    console.log(result);
}