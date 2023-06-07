// Store the shoe names and their corresponding image URLs in an object
const shoeData = {
  'Adidas Originals': 'https://i8.amplience.net/i/jpl/sz_596969_c?qlt=92&w=750&h=580&v=1&fmt=auto',
  
  'Vans Old Skool': 'https://www.vanssaleindia.in/images/vanssaleindia/Vans_ComfyCush_Old_Skool_Women_s_Casual_-INZ632847.jpg',
  
  'AirForce 1': 'https://cdn.shopify.com/s/files/1/0577/7784/8502/products/cw2288111_nike_air_force_1_07_white_white_2_671x.jpg?v=1661289535',
  
  'Converse AllStar': 'https://images.journeys.com/images/products/1_46328_ZM_THERO.JPG',
  
  'Adidas Superstar': 'https://i.ebayimg.com/images/g/tIoAAOSw6NVeAhuY/s-l1600.jpg',
  
  'Roadstar White Sneaker': 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2238939/2017/12/19/11513660466013-Roadster-Men-Casual-Shoes-1151513660465880-1.jpg',
  
  'Nike ZoomZx': 'https://s1.dswcdn.com/uploads/Nike_Other_Shoes/Nike_ZoomX_Invincible_Run_FK_3_Noise_Aqua_Green_Abyss_Blue_Lightning_DR2615-401_P1.jpg',
  
  'Black Formals': 'https://www.grenson.com/cdn11_bigcommerce_com/s-nomnt8gvvb/images/stencil/1280x1280/products/2101/3500/cambridge_113864_threequarter_print__82184.1647964199.jpg?c=1',
  
  'Brown Formals': 'https://rukminim1.flixcart.com/image/832/832/k6wiefk0/shoe/f/b/f/tpr108-46-romero-ferrera-brown-original-imafp9hjugzu7zpu.jpeg?q=70',
  
  'Nike Sliders': 'https://www.price-hunt.com/content/images/shoes/nike-black-sliders-men_l.jpg',
  
  'Zudio Sandals': 'https://ae01.alicdn.com/kf/Sdb90247179824b7786b4461ba6b4ebafC/Summer-New-Men-s-Shoes-Casual-Comfortable-Sandals-Slippers-Couple-Buckle-Sandals-Slippers-Men-s-Sandals.jpg'
};


const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const shoeName = button.previousElementSibling.textContent;
    const imageUrl = shoeData[shoeName];
    const image = document.createElement('img');
    image.src = imageUrl;
    button.parentNode.appendChild(image);
  });
});