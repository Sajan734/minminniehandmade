const productContact = document.querySelectorAll('.contacting');
const productSelect = document.querySelectorAll('.selectproduct');
const productPurchase = document.querySelectorAll('.purchase');

const contactStep = document.querySelectorAll('.contactstep');
const selectStep = document.querySelectorAll('.selectstep');
const purchaseStep = document.querySelectorAll('.purchasestep');

const contactbtn = document.querySelectorAll('.contactbtn');
const selectbtn = document.querySelectorAll('.selectbtn');
const purchasebtn = document.querySelectorAll('.purchasebtn');

const finishbtn = document.querySelectorAll('.finish');

displayContact()

function displayContact(){
    productContact.forEach((item) => {
        item.style.display = "block";
    });
    productSelect.forEach((item) => {
        item.style.display = "none";
    });
    productPurchase.forEach((item) => {
        item.style.display = "none";
    });
    contactbtn.forEach((item) => {
        item.style.display = "none";
    });
    selectbtn.forEach((item) => {
        item.style.display = "block";
    });
    purchasebtn.forEach((item) => {
        item.style.display = "none";
    });
    finishbtn.forEach((item) => {
        item.style.display = "none";
    });
    contactStep.forEach((item) => {
        item.classList.add("step-primary");
    });
    selectStep.forEach((item) => {
        item.classList.remove("step-primary");
    });
    purchaseStep.forEach((item) => {
        item.classList.remove("step-primary");
    });
}

function displaySelect(){
    productContact.forEach((item) => {
        item.style.display = "none";
    });
    productSelect.forEach((item) => {
        item.style.display = "block";
    });
    productPurchase.forEach((item) => {
        item.style.display = "none";
    });
    contactbtn.forEach((item) => {
        item.style.display = "block";
    });
    selectbtn.forEach((item) => {
        item.style.display = "none";
    });
    purchasebtn.forEach((item) => {
        item.style.display = "block";
    });
    finishbtn.forEach((item) => {
        item.style.display = "none";
    });
    contactStep.forEach((item) => {
        item.classList.add("step-primary");
    });
    selectStep.forEach((item) => {
        item.classList.add("step-primary");
    });
    purchaseStep.forEach((item) => {
        item.classList.remove("step-primary");
    });
}

function displayPurchase(){
    productContact.forEach((item) => {
        item.style.display = "none";
    });
    productSelect.forEach((item) => {
        item.style.display = "none";
    });
    productPurchase.forEach((item) => {
        item.style.display = "block";
    });
    contactbtn.forEach((item) => {
        item.style.display = "none";
    });
    selectbtn.forEach((item) => {
        item.style.display = "block";
    });
    purchasebtn.forEach((item) => {
        item.style.display = "none";
    });
    finishbtn.forEach((item) => {
        item.style.display = "block";
    });
    contactStep.forEach((item) => {
        item.classList.add("step-primary");
    });
    selectStep.forEach((item) => {
        item.classList.add("step-primary");
    });
    purchaseStep.forEach((item) => {
        item.classList.add("step-primary");
    });
} 
