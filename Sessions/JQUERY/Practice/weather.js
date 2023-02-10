const form = $('form:first');
const input = $('input:first');
const list = $('ul.cities:first');
const msg = $('.msg:first');

form.on('submit', e =>{
    e.preventDefault();
    getWeatherDetails();
})

const getWeatherDetails = () =>{
    let entered = input.val().trim();
   // console.log(entered);
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${entered}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric&lang=en`;

    $.ajax({
        type: 'GET',  // What type of action will perform Get / read
        url: apiUrl,  // Where should be reached?
        dataType: 'json', // expected data type
        success: (response)=>{
        
            const {name, main, weather, sys} = response;
            let foundDuplicate = false;
            let arrayListing = Array.from($('.city'));
           // let completeList = $('.city');
           // console.log(completeList);
           //    console.log('In Success');
           //    console.log(response);
           //    console.log('Complete list', arrayListing);

            if(arrayListing.length > 0 ){
                let filtered = arrayListing.filter((theLi) => $(theLi).find('.city-name span').text() == name);
            //    console.log('from filtered : ', filtered);
                if(filtered.length > 0){
                    $(msg).text(`${name} was displayed earlier.`);
                    setTimeout(()=>{
                        $(msg).text('');
                    },3000);
                    foundDuplicate = true;
                }
            }

            if(!foundDuplicate){
                let liCity = $(document.createElement('li'));
                liCity.addClass('city');
                let liContent = `
                    <h2 class="city-name" data-name="${name}, ${sys.country}">
                        <span>${name}</span>
                        <sup> ${sys.country}</sup>
                    </h2>
                    <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
                    <figure>
                        <img class="city-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg">
                        <figcaption>${weather[0].description}</figcaption>
                    </figure>`;
                liCity.html(liContent);
                $(list).append(liCity);
            }
        },
        complete: ()=>{
            input.val('');
            input.focus();
        //    console.log('In Complete');
        },
        beforeSend: ()=>{
        //    console.log('In Before Send');
        },
        error: (jqXHR, textStatus, errorThrown)=>{

            $(msg).text(`${input.val()} was not found.`);
            setTimeout(()=>{
                $(msg).text('');
            },3000);

            // console.log(jqXHR);
            // console.log(textStatus);
            // console.log(errorThrown);
            //   console.log('In Error');
        }
    })

}