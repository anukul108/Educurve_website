// const { json } = require("body-parser");

const categories = {
    '1': {
        'id': '1',
        'img': 'img/amazon.png',
        'category': {
            '1-1': { 'img': 'img/amazonimg/amazon1.png', 'text': 'AWS Certified Cloud Practitioner', 'price': '$199' }
        },
        'desc': 'Amazon'
    },
    '2': {
        'id': '2',
        'img': 'img/microsoft.png',
        'category': {
            '2-1': { 'img': 'img/microsoftimg/microsoft1.png', 'text': 'Microsoft Azure az-104', 'price': '$199' },
            '2-2': { 'img': 'img/microsoftimg/microsoft2.png', 'text': 'Microsoft Azure az-204', 'price': '$199' },
            '2-3': { 'img': 'img/microsoftimg/microsoft3.png', 'text': 'Microsoft Azure az-303', 'price': '$199' },
            '2-4': { 'img': 'img/microsoftimg/microsoft4.png', 'text': 'Microsoft Azure az-900', 'price': '$199' }
        },
        'desc': 'Microsoft'
    },
    '3': {
        'id': '3',
        'img': 'img/comptia.png',
        'category': '',
        'desc': 'CompTIA Security+'
    },
    '5': {
        'id': '5',
        'img': 'img/pdxn.jpg',
        'category': {
            '5-1': { 'img': 'img/pmiimg/pmi1.png', 'text': 'Project Management Professional (PMP)', 'price': '$199' },
            '5-2': { 'img': 'img/pmiimg/pmi2.png', 'text': 'Risk Management Professional (RMP)', 'price': '$199' },
            '5-3': { 'img': 'img/pmiimg/pmi3.png', 'text': 'CAPM', 'price': '$199' },
            '5-4': { 'img': 'img/pmiimg/pmi4.png', 'text': '(PMBOK) 7th Edition', 'price': '$199' }
        },
        'desc': 'Project Management Institue'
    },
    '6': {
        'id': '6',
        'img': 'img/axelos.png',
        'category': {
            '6-1': { 'img': 'img/Axelosimg/axelos.png', 'text': 'Prince 2 Certification', 'price': '$199' }
        },
        'desc': 'Axelos'
    },
    '7': {
        'id': '7',
        'img': 'img/lean66.jpg',
        'category': {
            '7-1': { 'img': 'img/images/product/24/null', 'text': 'Six Sigma Black Belt', 'price': '$199' }
        },
        'desc': 'Lean Six Sigma'
    },
    '8': {
        'id': '8',
        'img': 'img/cisco.jpg',
        'category': {
            '8-1': { 'img': 'img/ciscoimg/cisco1.png', 'text': 'CCNA (Cisco Certified Network Associate)', 'price': '$199' },
            '8-2': { 'img': 'img/ciscoimg/cisco2.png', 'text': 'CCNP (Cisco Certified Network Professional)', 'price': '$199' }
        },
        'desc': 'CISCO'
    },
    '10': {
        'id': '10',
        'img': 'img/isaca.jpg',
        'category': {
            '10-1': { 'img': 'img/isacaimg/isaca1.png', 'text': 'CISA', 'price': '$249' },
            '10-2': { 'img': 'img/isacaimg/isaca2.png', 'text': 'CISM (Certified Information Security Manager)', 'price': '$249' }
        },
        'desc': 'Isaca'
    },
    '9': {
        'id': '9',
        'img': 'img/isc.png',
        'category': {
            '9-1': { 'img': 'img/iscimg/isc.png', 'text': 'CISSP', 'price': '$299' }
        },
        'desc': '(ISC)'
    },
    '4': {
        'id': '4',
        'img': 'img/togaf.png',
        'category': {
            '4-1': { 'img': 'img/togafimg/togaf.png', 'text': 'TOGAF® 9 Combined Part 1 and Part 2', 'price': '$149' }
        },
        'desc': 'TOGAF'
    }
}

var str1 = '';
let pdt = document.querySelector('.pdt-name');
for (let i of Object.keys(categories)) {
    str1 = `${str1}<div id = '${categories[i].id}' class = 'pdt'><a  href = 'category.html?category=${categories[i].id}'><span >${categories[i].desc}</span></a></div>`;
}
pdt.innerHTML = str1;


//coursal 

if (document.querySelectorAll('.slide').length != 0) {
    const slideContainer = document.querySelector('.coursel-container');
    const slide = document.querySelector('.slides');
    const pre = document.getElementById('prev-btn');
    const next = document.getElementById('next-btn');

    let slides = document.querySelectorAll('.slide');
    console.log(slides);
    let index = 1;
    let set;


    const firstclone = slides[0].cloneNode(true);
    console.log(firstclone);
    const lastclone = slides[slides.length - 1].cloneNode(true);

    firstclone.id = 'first-clone';
    lastclone.id = 'last-clone';

    slide.append(firstclone);
    slide.prepend(lastclone);

    const slideWidth = slides[index].clientWidth;

    slide.style.transform = `translateX(${-slideWidth * index}px)`;

    const startSlide = () => {
        set = setInterval(() => {
            movenext();
        }, 3000);
    }
    slide.addEventListener('transitionend', () => {
        slides = document.querySelectorAll('.slide');
        if (slides[index].id === firstclone.id) {
            slide.style.transition = 'none';
            index = 1;
            slide.style.transform = `translateX(${-slideWidth * index}px)`;
        }
        if (slides[index].id === lastclone.id) {
            slide.style.transition = 'none';
            index = slides.length - 2;
            slide.style.transform = `translateX(${-slideWidth * index}px)`;
        }
    });

    const movenext = () => {
        slides = document.querySelectorAll('.slide');
        if (index >= slides.length - 1) {
            return;
        }
        index++;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
        slide.style.transition = '.7s';
    }

    const movepre = () => {
        if (index <= 0) {
            return;
        }
        index--;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
        slide.style.transition = '2s';
    }

    slideContainer.addEventListener('mouseenter', () => {
        clearInterval(set);
    });

    slideContainer.addEventListener('mouseleave', startSlide);

    next.addEventListener('click', movenext);

    pre.addEventListener('click', movepre);

    startSlide();


    const x1 = document.querySelector('.middle-box');
    let str2 = '';
    for (let i of Object.keys(categories)) {
        str2 = `${str2}<div id="${categories[i].id}" class="box">
                            <div class="img-box">
                                <img src = '${categories[i].img}'>
                            </div>
                            <div class="span-items">
                                <span>${categories[i].desc}</span>
                                <span>courses</span>
                            </div>
                        </div>`
    }
    
    x1.innerHTML = str2;
}



const categoryid = window.location.search.split('=')[1];
var categoryid1;

if (categories[categoryid]) {
    display(categoryid);
    // console.log(categoryid);
}


function display(x) {
    const x2 = document.getElementById('category-container');
    let str3 = '';

    for (let i of Object.keys(categories[x].category)) {

        str3 = `${str3}
                        <div class="item-box">
                            <div class="item-img">
                                <a  href = 'product.html?product=${i}'  >
                                    <img src = "${categories[x].category[i].img}">
                                </a>    
                            </div>
                            <div class="course-name">
                                <h4>${categories[x].category[i].text}</h4>
                                <span class = "price">${categories[x].category[i].price}</span>
                            </div>
                        </div>`
    }
    x2.innerHTML = str3;
}

// product-container

if (window.location.search.split('=')[1]) {
    const pdtid = window.location.search.split('=')[1];
    // console.log(pdtid[0]);
    if (categories[pdtid[0]].category[pdtid]) {
        display_pdt(pdtid)
    }
    function display_pdt(x) {
        const x3 = document.getElementById('product-container');
        let str4 = '';

        str4 = `${str4}
                    <div class = "sub-pdt-box">
                        <div class="pdt-img-box">
                            <img src="${categories[pdtid[0]].category[x].img}" alt="">
                        </div>
                        <div class="pdt-content-box">
                            <h3>${categories[pdtid[0]].category[x].text}</h3>
                            <span>${categories[pdtid[0]].category[x].price}</span>
                            <div class="pdt-details">
                                <h4>Product Details</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, porro rerum officia voluptate 
                                    dolores blanditiis, tenetur iusto eligendi consequuntur dignissimos soluta omnis, quas est 
                                </p>
                                <hr>
                                <div class="pdt-price">
                                    <h4>Total Price</h4>
                                    <span>${categories[pdtid[0]].category[x].price}</span>
                                </div>
                                <div class="btn-add">
                                        <button type = "button" onclick = "add_id('${x}')">Add to bag</button>   
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <hr>
                `


        let str5 = '';
        str5 = `${str5}<div class="similar-pdt">
                    
                    <div class="similar-head"><h4>Similar Products</h4></div>
                    <div class="similar-pdt-items">
                        
                    </div>
                </div>`

        str4 = str4 + str5;
        x3.innerHTML = str4;

        const x4 = document.querySelector('.similar-pdt-items');
        let str6 = '';
        for (let j of Object.keys(categories[pdtid[0]].category)) {
            if (j !== x) {
                str6 = `${str6}<div class = "similar-pdt-col">
                            <img  src = '${categories[pdtid[0]].category[j].img}'>
                            <div class = 'col-bottom'>
                                <h4>${categories[pdtid[0]].category[j].text}</hr>
                                <p>${categories[pdtid[0]].category[j].price}</p>
                            </div>
                        </div>`
            }
        }
        x4.innerHTML = str6;
    }

}

// add function

var arr = [];
add_id = (pdt_id) => {
    arr = localStorage.getItem('details') ? JSON.parse(localStorage.getItem('details')) : [];
    if(!arr.includes(pdt_id)){
        arr.push(pdt_id);  
        swal("Good job!", "Your item is successfully added to cart", "success");
    }
    else{
        swal("sorry!", "Your item is already present in cart", "success");
    }
    localStorage.setItem('details', JSON.stringify(arr));
}

const cartid = window.location.search;
if(!cartid){
    // console.log(cartid);
    display_cart();
}

function display_cart(){
    const x5 = document.querySelector('.cart-items');
    let str7 = '';
    let total = 0;

    if(localStorage.getItem('details')){
        for(let i of JSON.parse(localStorage.getItem('details'))){
            total = total + parseInt((categories[i[0]].category[i].price).substr(1));
            str7 = `${str7}<div class="cart-items-det">
                                <div class="cart-items-img">
                                    <img src="${categories[i[0]].category[i].img}" alt="">
                                </div>
                                <div class="cart-items-content">
                                    <h4>${categories[i[0]].category[i].text}</h4>
                                    <span>${categories[i[0]].category[i].price}</span>
                                    <button onclick = delete1('${i}')>Delete</button>
                                </div> 
                            </div>
                            <hr>`;
            console.log(i);
        }
        if(x5){
            x5.innerHTML = str7;
        }
    }

    

    const x6 = document.querySelector('.price-div');
    let str8 = '';

    str8 = `${str8}<div class="bag-div">
                        <h4>Bag Total</h4>
                        <div class="amount">
                            <div class="amount-sub">
                                <span>Products amount</span>
                                <span>$${total}</span>
                            </div>
                            <hr>
                            <div class="amount-sub">
                                <span>Total discount</span>
                                <span>-$0</span>
                            </div>
                            <div class="amount-sub">
                                <span>Total bill</span>
                                <span>$${total}</span>
                            </div> 
                        </div>
                        <div class="buy">
                            <button>Buy now</button>
                        </div>
                    </div>`
    if(x6){
        x6.innerHTML = str8;
    }
    
}

// delete function

function delete1(del_id){
    let arr = JSON.parse(localStorage.getItem('details'));
    arr.splice(arr.indexOf(del_id),1);
    localStorage.setItem('details', JSON.stringify(arr));
    console.log(arr);
    display_cart();
}

// add address

function address_form() {
    const x7 = document.querySelector('.add-details');
    str9 = '';

    str9 = `${str9}<div class="new-add">
                        <h4>Add new address</h4>
                    </div>
                    <div class="form-det">
                        <input type="text" placeholder = "Recevier's Name" id = "name">
                        <input type="tel" placeholder = "Contact no." id = "contact">
                        <input type="text" placeholder = "Block and House No" id = "address">
                        <input type="text" placeholder = "City" id = "city">
                        <input type="text" placeholder = "State" id = "state">
                        <input type="text" placeholder = "Country" id = "country">
                    </div>
                    <div class="save-btn">
                        <button onclick = "save_address()">Save Address</button>
                    </div>`

    x7.innerHTML = str9;
}

var arr1 = [];


let str10 = '';
if(localStorage.getItem('add-det')){
    
    arr1 = localStorage.getItem('add-det') ? JSON.parse(localStorage.getItem('add-det')) : [];
    
    let j = 1;
    for(let i of arr1){
        str10 = `${str10}<div class="address">
                            <div class="head-add">
                                <h5>Address ${j}</h5>
                            </div>
                            <span>Name : ${i.name}</span>
                            <span>Contact no. : ${i.number}</span>
                            <span>${i.address}, ${i.city}, ${i.state}, ${i.country}</span>
                        </div>`
        j++;
    }
    document.querySelector('.add-display').innerHTML = str10;
}

// save address

function save_address() {

    let js1 = {'name' : '', 'number' : '', 'address' : '', 'city' : '', 'state' : '', 'country' : ''};
    js1.name = document.getElementById('name').value;
    js1.number = document.getElementById('contact').value;
    js1.address = document.getElementById('address').value;
    js1.city = document.getElementById('city').value;
    js1.state = document.getElementById('state').value;
    js1.country = document.getElementById('country').value;
    if(js1.name === '' || js1.number === '' || js1.address === '' || js1.city === '' || js1.state === '' || js1.state === '' || js1.country === ''){
        alert("Please enter the address details");
    }
    else{
        arr1.push(js1);
        localStorage.setItem('add-det', JSON.stringify(arr1));

        arr1 = localStorage.getItem('add-det') ? JSON.parse(localStorage.getItem('add-det')) : [];

        
        let str11 = '';
        str11 = `${str11}<div class="address">
                                    <div class="head-add">
                                        <h5>Address </h5>
                                    </div>
                                    <span>Name : ${js1.name}</span>
                                    <span>Contact no. : ${js1.number}</span>
                                    <span>${js1.address}, ${js1.city}, ${js1.state}, ${js1.country}</span>
                                </div>`

        str10 = str10 + str11;
        document.querySelector('.add-display').innerHTML = str10;
    }
    document.getElementById('name').value = '';
    document.getElementById('contact').value = '';
    document.getElementById('address').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').value = '';
    document.getElementById('country').value = '';
}


// order details

if(localStorage.getItem('details')){
    order_details();
}
else{
    console.log("details not present");
}

 function order_details(){
    const x8 = document.querySelector('.order-main1');
    let str12 = '';
    let obj = localStorage.getItem('details');
    obj = JSON.parse(obj);
    console.log(obj);

    let j = 1;
    for(let data of obj){
        console.log(typeof(data))
        str12=`${str12}
                            <div class="order-1">
                            <div class="order-1-div">
                                <div class="left-div">
                                    <span>Order ID ${j}</span>
                                    <div onclick = "view_pdt('${data}')">
                                        <button>
                                            View Order Details
                                        </button>
                                    </div>
                                </div>
                                <div class="centre-div">
                                    <span>Price Total: ${categories[data[0]].category[data].price}</span>
                                </div>
                                <div class="right-div">
                                    <span>Order Status: Pending</span>
                                </div>
                            </div>
                            <div id="${data}" class="view-pdt-main-div">
                                <div class="view_pdt-det">
                                    <div class="order-det">
                                        <h3>Order Details</h3>
                                        <hr>
                                        <div class="pdt-order-det">
                                                <img src=${categories[data[0]].category[data].img} alt="">
                                            <div class="pdt-order-name">
                                                <h3>${categories[data[0]].desc}</h3>
                                                <span>${categories[data[0]].category[data].price}/-</span>
                                            </div>
                                            <button>Buy it Again</button>  
                                        </div>
                                        <hr>
                                    </div>
                                    <div class="billing-det">
                                        <div class="billing-det-heading">
                                            <h5>Billing Details</h5>
                                        </div>
                                        <div class="billing-head"> 
                                            <div class="order-date-left">
                                                <h3>Order ID : #</h3>
                                                <h5>Order Date: </h5>
                                                <p>Total items: </p>
                                                <p>Items price Total: </p>
                                                <p>Discount: </p>
                                                <h5>Total Price: </h5>
                                            </div>
                                            <div class="order-date-right">
                                                <h5>27 July</h5>
                                                <span>1</span>
                                                <span>${categories[data[0]].category[data].price}</span>
                                                <span>$ 0</span>
                                                <span>${categories[data[0]].category[data].price}</span>        
                                            </div>
                                        </div>
                                        <div class="billing-head">
                                            <div class="billing-add-left">
                                                <h3>Billing Address</h3>
                                                <p>Name: </p>
                                                <p>Address: # </p>
                                                <p>Phone no. </p>
                                            </div>
                                            <div class="billing-add-right">
                                                <span>Anukul</span>
                                                <div class="billing-address">
                                                    <h5>Near, Durja Talkies, Kaimganj, Farrukhabad</h5>
                                                </div>
                                                <span>123455788990</span>
                                            </div>        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>     
                            `;
                            j++;
    }
    if(x8){
        x8.innerHTML = str12;
    }
    
}

var view = 0;
function view_pdt(j){
    let id = document.getElementById(j); 
    if(view === 0){
        id.style.display="block";
    }
    else{
        id.style.display="none";
    }
    view^=1;
}

function navigation_slider()
{
    document.getElementsByClassName('pdt-name')[0].style.display = "block";
}





