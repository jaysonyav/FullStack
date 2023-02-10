let headers = document.getElementsByTagName('h1');
let firstHeader = headers[0];
console.log(firstHeader.textContent);

console.log($('h1:first').text());

// $('...')
// $('.className')
// $('#id')
// $('tag')


// $('#h').click(()=>{$('.thisOne').hide(1000)});
// $('#s').click(()=>{$('.thisOne').show(1000)});
// $('#t').click(()=>{$('.thisOne').toggle(1000)});

$('#h').click(()=>{$('.thisOne').fadeOut(1000)});
$('#s').click(()=>{$('.thisOne').fadeIn(1000)});
$('#t').click(()=>{$('.thisOne').fadeToggle(1000)});