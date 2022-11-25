/* different async functions to fetch different 
data from database to display on the host page */

//for fetching products on page - available rooms
async function fetchRoomData() {
    await fetch("/rooms")
        .then((res) => {
            const responses = res.json();
            console.log(responses);
            return responses;
        })
        .then((data) => {
            console.log(data);
            let values = data;
            let dataLen = values.length;
            let cardsDiv = document.querySelector('.cards');
            console.log("Length of data: " + dataLen);
            if (dataLen != 0) {
                let node;
                for (let i = 0; i < dataLen; i++) {
                    let ratingVal = values[i].ratings;
                    console.log("rating length: " + ratingVal.length);
                    console.log(i);
                    node = document.createElement('div');
                    nodeInside = document.createElement('div');
                    node.classList.add('blocks');
                    nodeInside.classList.add('expand-blocks');
                    cardsDiv.appendChild(node);
                    cardsDiv.appendChild(nodeInside);
                    //node.appendChild(nodeInside);
                    node.innerHTML += `
                        <img src="./uploads/${values[i].images[0][0]}"></img>
                        <h4>${values[i].name}</h4>
                        <p>${values[i].city}, ${values[i].state}</p>
                        <p>${values[i].country}</p>
                        <p><strong>&#8377 ${values[i].price}</strong></p>
                        <p class="ratingCard"></p>
                    `;
                    nodeInside.innerHTML += `
                        <div class="location-rating">
                            <div>
                                <p>${values[i].city} &bullet; ${values[i].state} &bullet; ${values[i].country}</p>
                                <p class="rateHeadExpand"></p>
                            </div>
                            <div class="cancelDiv">
                                <button class="cancelBtnRooms" type="button"><i class="bi bi-x-square-fill"></i></button>
                            </div>
                        </div>
                        <div class="imgShow">
                            <div class="imgLeft">
                                <img src="./uploads/${values[i].images[0][0]}"></img>
                            </div>
                            <div class="imgRight">
                                <img src="./uploads/${values[i].images[0][1]}"></img>
                                <img src="./uploads/${values[i].images[0][2]}"></img>
                                <img src="./uploads/${values[i].images[0][3]}"></img>
                                <img src="./uploads/${values[i].images[0][4]}"></img>
                            </div>
                        </div>
                        <div class="content-manager">
                            <div class="content-left">
                                <div class="roomHead">
                                    <div>
                                        <h6>${values[i].name} by ${values[i].owner}</h6>
                                    </div>
                                    <div>
                                        <p>${values[i].maxAccommodate} Guests &bullet; ${values[i].beds} beds</p>
                                    </div>
                                </div>
                                <div class="describe">
                                    <p>Description: <em>${values[i].description}</em></p>
                                </div>
                                <div class="roomAddons">
                                    <strong>Amenities</strong>
                                    <div class = "amenity">
                                        <div>
                                            <p><i class="fa-solid fa-square-parking"></i> Parking: ${values[i].parking}</p>
                                            <p><i class="fa-solid fa-wifi"></i> WiFi: ${values[i].wifi}</p>
                                        </div>
                                        <div>
                                            <p><i class="fa-solid fa-wind"></i> Air Conditioner: ${values[i].ac}</p>
                                            <p><i class="fa-solid fa-shirt"></i> Laundry: ${values[i].laundry}</p>
                                        </div>
                                        <div>
                                            <p><i class="fa-solid fa-kitchen-set"></i> Kitchen: ${values[i].kitchen}</p>
                                            <p><i class="fa-solid fa-ban-smoking"></i> Smoke Alarm (Fire Safety): ${values[i].smokeAlarm}</p>
                                        </div>
                                        <div>
                                            <p><i class="fa-solid fa-paw"></i> Pets Permitted: ${values[i].petsPermission}</p>
                                            <p><i class="fa-solid fa-mug-saucer"></i> Breakfast Availability: ${values[i].breakfast}</p>
                                        </div>
                                    </div>
                                    <div class="disclaimer">
                                        <p style="color: rgb(173, 44, 66);"><em>You are a <strong>Host</strong> user. Therefore, you are not allowed to book room. However, you can check the price of rooms according to dates. To book room, please signup as <strong>Guest</strong> user. Thank you !</em></p>
                                    </div>
                                </div>
                            </div>
                            <div class="content-right">    
                                <div class="price-booking">
                                    <div>
                                        <h6>&#8377 <span class="priceValue">${values[i].price}</span></h6>
                                    </div>
                                    <div class="booking-query">
                                        <form>
                                            <label for="dateCheckIn">Pick a Check-in Date</label>
                                            <input type="date" class="dateCheckIn" min="" value="">
                                            <label for="dateCheckOut">Pick a Check-in Date</label>
                                            <input type="date" class="dateCheckOut" value="">
                                            <input type="text" class="numRoom" placeholder="Number of room to book">
                                            <button type="submit" class="dateBtn">Calculate price</button>
                                        </form>
                                        <h6 class=totPrice></h6>
                                    </div>
                                </div>
                            </div>    
                        </div>    
                        <div class="comments">
                            <h3>Recent Comment</h3>
                            <hr>
                            <h6 class="commentHeadRate"></h6>
                            <p class="userNameRate">By: </p>
                            <p class="descriptionRate"></p>
                            <hr>
                        </div>  
                    `;
                    let ratingHeadCard = document.querySelectorAll('.ratingCard');
                    let ratingHeadExpanded = document.querySelectorAll('.rateHeadExpand');
                    let commentHeadRate = document.querySelectorAll('.commentHeadRate');
                    let userNameRate = document.querySelectorAll('.userNameRate');
                    let descriptionRate = document.querySelectorAll('.descriptionRate');
                    //rating related display
                    if(ratingVal.length == 0){
                        ratingHeadCard[i].innerHTML=`No Ratings`;
                        ratingHeadExpanded[i].innerHTML = `No Ratings`;
                    }
                    if(ratingVal !=0){
                        let rateCal = 0;
                        let ratingCal;
                        for(let k = 0; k < ratingVal.length; k++){
                            rateCal += values[i].ratings[k].rating;
                            console.log("ratecal: "+ rateCal);
                            let rateDeno = ratingVal.length;
                            ratingCal = rateCal/rateDeno;
                            console.log("rating cal: " + ratingCal);
                            ratingHeadCard[i].innerHTML = `Current Rating: ${ratingCal}`;
                            ratingHeadExpanded[i].innerHTML = `Current Rating: ${ratingCal}`;
                            commentHeadRate[i].innerHTML = `${values[i].ratings[k].reviewHead}`;
                            userNameRate[i].innerHTML = `By: ${values[i].ratings[k].userID}`;
                            descriptionRate[i].innerHTML = `${values[i].ratings[k].reviewDescription}`;
                        }
                        
                    }
                    console.log(values[i].images[0][0]);
                    console.log("value of i: " + i);
                }
            }
            let blockClick = document.querySelectorAll('.blocks');
            let expandBlock = document.querySelectorAll('.expand-blocks');
            let cancelBtnRooms = document.querySelectorAll('.cancelBtnRooms');
            //to set min field for date input
            let minDate = new Date();
            let minMonth = (minDate.getMonth() + 1);
            let minDay = minDate.getDate();
            if(minMonth < 10){
                minMonth = "0" + minMonth;
                console.log(minMonth);
            }
            if(minDay < 10){
                minDay = "0" + minDay;
            }

            //date picker related controls
            let minDateVal = minDate.getFullYear() + "-"+minMonth + "-" + minDay;
            let dateStartField = document.querySelectorAll('.dateCheckIn');
            let dateEndField = document.querySelectorAll('.dateCheckOut');
            let dateBtn = document.querySelectorAll('.dateBtn');
            let priceVal = document.querySelectorAll('.priceValue');
            let roomNum = document.querySelectorAll('.numRoom');
            let totPrice = document.querySelectorAll('.totPrice');


            //for expanding the room details
            for (let k = 0; k < blockClick.length; k++) {
                blockClick[k].addEventListener('click', () => {
                    console.log("Inside click function");
                    expandBlock[k].style.display = "flex";
                    //to close the div
                    cancelBtnRooms[k].addEventListener('click', () => {
                        console.log("inside cancel function");
                        expandBlock[k].style.display = "none";
                    });
                    //to calculate price and dates
                    dateStartField[k].setAttribute('min', minDateVal);
                    dateEndField[k].setAttribute('min', minDateVal);
                    dateBtn[k].addEventListener('click',(e)=>{
                        e.preventDefault();
                        console.log("Inside date function");
                        let startDate = new Date(dateStartField[k].value);
                        let endDate = new Date(dateEndField[k].value);
                        let priceRoom = priceVal[k].textContent;
                        let roomValue = roomNum[k].value;
                        let millisecPerDay = 1000 * 60 * 60 * 24;
                        let daysCount = Math.floor((endDate - startDate)/millisecPerDay);
                        let totalPrice = priceRoom * daysCount * roomValue;
                        console.log(totalPrice);
                        totPrice[k].innerHTML = `Total Cost for ${daysCount} days is &#8377 ${totalPrice}`;
                    })

                });
            }

            

        })
        .catch(err => { console.log(err) })
}
/* ----------------------------------------------------- */

//for fetching data on the host page - user data
async function fetchData() {
    await fetch("/loginHostAuth")
        .then((res) => {
            const responses = res.json();
            console.log(responses);
            return responses;
        })
        .then((data) => {
            console.log(data);
            //for different forms accessed by host
            let userNameDisplay = document.getElementById('userNameDisplay');
            let contactFormUser = document.getElementById('userName');
            let contactFormEmail = document.getElementById('userEmail');
            let publishEmail = document.getElementById('ownerEmail');
            let userProfileImage = document.getElementById('userImage');
            //for username
            userNameDisplay.innerHTML = data.pFname;
            userProfileImage.innerHTML =`<img src="${data.profileImg}"></img>`;
            //for contact form
            contactFormUser.value = data.pFname + " " + data.pLname;
            contactFormEmail.value = data.pEmail;
            publishEmail.value = data.pEmail;
            
        })
        .catch(err => {console.log(err)})
}
/* ------------------------------------- */

//for fetching published room data by host
async function fetchPublishedData() {
    await fetch("/userRoomFetchHost")
        .then((res) => {
            const responses = res.json();
            console.log(responses);
            return responses;
        })
        .then((data) => {
            console.log(data);
            let values = data;
            let dataLen = values.length;
            //function for getting date of booking and other booking data.
            console.log("Length of data: " + dataLen);
            if(dataLen!=0){
                let userPublishingCards = document.querySelector('.userPublicationDetails');
                //for delete button                     
                let deleteInput = document.querySelectorAll('.propertyField');
                let node;
                for (let i = 0; i < dataLen; i++) {
                    console.log(values[i].propertyID);
                    console.log(i);
                    node = document.createElement('div');
                    node.classList.add('blockBooking');
                    userPublishingCards.appendChild(node);
                    node.innerHTML += `
                        <div class="sideImage">
                            <img src="./uploads/${values[i].images[0][0]}"></img>
                        </div>
                        <div class="rightSideContent">
                            <div class="rightTop">
                                <h4>${values[i].name}</h4>
                                <p>${values[i].city}, ${values[i].state}</p>
                                <p>${values[i].country}</p>
                                <p class="total-price"></p>
                            </div>
                            <div class="rightMid">
                                <h6>${values[i].name} by ${values[i].owner}</h6>
                                <p>${values[i].maxAccommodate} Guests &bullet; ${values[i].beds} beds</p>
                                <p>Description: <em>${values[i].description}</em></p>
                            </div>
                            <div class="rightBottom">
                                <form action="/deleteRoom" method="POST">
                                <lable for="propertyID">Property ID - </label>
                                <input type="text" name="propertyID" id="propertyID" class="propertyField" value="${values[i].propertyID}" readonly>
                                <hr>
                                <button type="submit" class="deleteRoomBtn">Delete This Room</button>
                                </form>    
                            </div>
                        </div>  
                     `;
                }
                
            }
        })
        .catch(err => {console.log(err)})
}
/* --------------------------- */

//on window load
window.addEventListener('load', () => {
    alert("SUCCESS!!");
    fetchData();
    fetchRoomData();
    fetchPublishedData();
})