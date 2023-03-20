const allFilterItems = document.querySelectorAll('.filter');
const occasionFilterItems = document.querySelectorAll('.occasionfilter');
const colourFilterItems = document.querySelectorAll('.colourfilter');
const allFilterBtns = document.querySelectorAll('.filterbtn');
const occasionFilterBtns = document.querySelectorAll('.occasionbtn');
const colourFilterBtns = document.querySelectorAll('.colourbtn');
const applyBtn = document.querySelectorAll('.applybtn');

displayOccasion()

allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    });
});

function showFilteredContent(btn){
    allFilterItems.forEach((item) => {
        if(item.classList.contains(btn.id)){
            resetActiveBtn();
            btn.classList.add('btn-active');
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function resetActiveBtn(){
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('btn-active');
    });
}

function displayOccasion(){
    const occasionFilter = document.querySelectorAll('.occasion');
    const colourFilter = document.querySelectorAll('.colour');
    const orderFilter = document.querySelectorAll('.order');
    const occasionSelect = document.querySelectorAll('.occasionselect');
    const colourSelect = document.querySelectorAll('.colourselect');
    const orderSelect = document.querySelectorAll('.orderselect');

    // console.log("e");
    occasionFilter.forEach((item) => {
        item.style.display = "block";
    });
    colourFilter.forEach((item) => {
        item.style.display = "none";
    });
    orderFilter.forEach((item) => {
        item.style.display = "none";
    });

    occasionSelect.forEach((btn) => {
        btn.classList.add('tab-active');
    });
    colourSelect.forEach((btn) => {
        btn.classList.remove('tab-active');
    });
    orderSelect.forEach((btn) => {
        btn.classList.remove('tab-active');
    });


}

function displayColour(){
    const occasionFilter = document.querySelectorAll('.occasion');
    const colourFilter = document.querySelectorAll('.colour');
    const orderFilter = document.querySelectorAll('.order');
    const occasionSelect = document.querySelectorAll('.occasionselect');
    const colourSelect = document.querySelectorAll('.colourselect');
    const orderSelect = document.querySelectorAll('.orderselect');

    // console.log("e");
    colourFilter.forEach((item) => {
        item.style.display = "block";
    });
    occasionFilter.forEach((item) => {
        item.style.display = "none";
    });
    orderFilter.forEach((item) => {
        item.style.display = "none";
    });

    occasionSelect.forEach((btn) => {
        btn.classList.remove('tab-active');
    });
    colourSelect.forEach((btn) => {
        btn.classList.add('tab-active');
    });
    orderSelect.forEach((btn) => {
        btn.classList.remove('tab-active');
    });

}

function displayOrder(){
    const occasionFilter = document.querySelectorAll('.occasion');
    const colourFilter = document.querySelectorAll('.colour');
    const orderFilter = document.querySelectorAll('.order');
    const occasionSelect = document.querySelectorAll('.occasionselect');
    const colourSelect = document.querySelectorAll('.colourselect');
    const orderSelect = document.querySelectorAll('.orderselect');

    // console.log("e");
    colourFilter.forEach((item) => {
        item.style.display = "none";
    });
    occasionFilter.forEach((item) => {
        item.style.display = "none";
    });
    orderFilter.forEach((item) => {
        item.style.display = "block";
    });

    occasionSelect.forEach((btn) => {
        btn.classList.remove('tab-active');
    });
    colourSelect.forEach((btn) => {
        btn.classList.remove('tab-active');
    });
    orderSelect.forEach((btn) => {
        btn.classList.add('tab-active');
    });

}
