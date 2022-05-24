let img = document.querySelector('.gr-iph')
let green = document.querySelector('.cont3')
let silver = document.querySelector('.cont4')
let gold = document.querySelector('.cont5')
let graphite = document.querySelector('.cont6')
let sierra = document.querySelector('.cont7')
let deals = document.querySelector('.deals')

console.log(green);
console.log(img);
console.log(silver);
console.log(gold);
console.log(sierra);
console.log(deals);



green.onclick = () => {
    img.setAttribute('src' , 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-green-select?wid=470&hei=556&fmt=png-alpha&.v=1644969385505')
}

silver.onclick = () => {
    console.log('works');
    img.setAttribute('src' , 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-silver-select?wid=470&hei=556&fmt=png-alpha&.v=1645552345849')
}

gold.onclick = () => {
    
    img.setAttribute('src' , 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-gold-select?wid=470&hei=556&fmt=png-alpha&.v=1645552345862')
}

graphite.onclick = () => {
    img.setAttribute('src' , 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-graphite-select?wid=470&hei=556&fmt=png-alpha&.v=1645552346276')
}

sierra.onclick = () => {
    img.setAttribute('src' , 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-blue-select?wid=470&hei=556&fmt=png-alpha&.v=1645552346275')
}

document.addEventListener("DOMContentLoaded", function(){
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openModal"]').addEventListener('click',function(){
      document.body.style.overflow = 'hidden';
      document.querySelector('#openModal').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#close"]').addEventListener('click',function(){
      document.body.style.overflow = 'visible';
      document.querySelector('#openModal').style.marginLeft = '0px';
    });
  });

  let acc = document.getElementsByClassName('accordion');
let i;

for(i = 0; i < acc.length; i++){
   acc[i].onclick = function (){
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show")
      let panel = this.nextElementSibling;
       if (panel.style.display === "block") {
         panel.style.display = "none";
       } else {
         panel.style.display = "block";
       }
   }
}