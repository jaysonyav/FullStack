let headers = document.getElementsByTagName('h1');
let firstHeader = headers[0];
console.log(firstHeader.textContent);

console.log($('h1:first').text());

console.log($('h1:nth-child(2)').text());

$('h1:nth-child(2)').mouseenter(function () { 
    $('h1:nth-child(2)').css('color','red')
});
$('h1:nth-child(2)').mouseout(function () { 
    $('h1:nth-child(2)').css('color','black')
});

// $('...')
// $('.className')
// $('#id')
// $('tag')


// $('#h').click(()=>{$('.thisOne').hide(1000)});
// $('#s').click(()=>{$('.thisOne').show(1000)});
// $('#t').click(()=>{$('.thisOne').toggle(1000)});

// $('#h').click(()=>{$('.thisOne').fadeOut(1000)});
// $('#s').click(()=>{$('.thisOne').fadeIn(1000)});
// $('#t').click(()=>{$('.thisOne').fadeToggle(1000)});

$('#h').click(()=>{$('.thisOne').slideUp(1000)});
$('#s').click(()=>{$('.thisOne').slideDown(1000)});
$('#t').click(()=>{$('.thisOne').slideToggle(1000)});