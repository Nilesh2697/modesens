var mensData=[
    {
        image_url:"https://cdn.modesens.com/product/31996402_24?w=400&" , 
        name: "GIVENCHY",
        price: "785 "

    },
    {
        image_url:"https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/221404M193008_1.jpg" , 
        name: "VERSACE",
        price: "692" 
    },
    {
        image_url:"https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/212404M213043_1.jpg" , 
        name: "VERSACE",
        price: "168 "
    },
    {
        image_url:"https://cdn.modesens.com/product/37598146_1?w=400&", 
        name: "BALMAIN",
        price: "553"
    },
    {
        image_url:"https://cdn-images.farfetch-contents.com/15/28/39/23/15283923_37190551_1000.jpg", 
        name: "BALMAIN",
        price: " 229"
    },
    {
        image_url:"https://cdn.modesens.com/product/23934485_32?w=400&", 
        name: "ALEXANDER MCQUEEN",
        price: " 218"
    },
    {
        image_url:"https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/221278M193001_1.jpg", 
        name: "GIVENCHY",
        price: " 605"
    },
     {
        image_url:"https://images.lvrcdn.com/Zoom75I/66H/008_c20c8be4-bc13-497a-9d55-5f6539a419b1.JPG", 
        name: "CASABLANCA",
        price: " 586"
    },
    {
        image_url:"https://cdn-images.farfetch-contents.com/17/40/35/05/17403505_36827128_1000.jpg", 
        name: "DOLCE & GABBANA",
        price: " 719"
    },
    {
        image_url:"https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/221653M208025_1.jpg", 
        name: "VEACE",
        price: " 333"
    },
    {
        image_url:"https://images.lvrcdn.com/Zoom75I/G06/021_612e9fef-2cec-4fbb-b850-0759b22c7066.JPG", 
        name: "ALEXANDER MCQUEEN",
        price: " 160"
    },
    // {
    //     image_url:"https://modesens.com/banner/11380/getimg/?img=%2Fbanner%2F20220327-modesens-Woolrich-280x400-EN.jpg", 
    //     // name: "ALEXANDER MCQUEEN",
    //     // price: " 160 -  446"
    // },
    {
        image_url:"https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/221259M213329_1.jpg", 
        name: "ALEXANDER MCQUEEN",
        price: " 225"
    },
    {
        image_url:"https://cdn-images.farfetch-contents.com/17/45/82/44/17458244_37401366_1000.jpg", 
        name: "MAIDON MARGIELA",
        price: " 740"
    },
    {
        image_url:"https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/221404M193008_1.jpg", 
        name: "VEACE",
        price: " 692"
    },
    {
        image_url:"https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/221404M193007_1.jpg", 
        name: "VEACE",
        price: " 641"
    },
    {
        image_url:"https://img.ssensemedia.com/images/221259M213344_1/white-sneaker-skeleton-t-shirt.jpg", 
        name: "ALEXANDER MCQUEEN",
        price: " 204"
    },
    {
        image_url:"https://images.lvrcdn.com/Zoom75I/WUE/028_7a4c203d-0b42-4b7d-a68d-a031c5d4c8d4.JPG", 
        name: "AMIRI",
        price: " 721"
    },
    {
        image_url:"https://cdn-images.farfetch-contents.com/15/76/54/88/15765488_28910874_1000.jpg", 
        name: "A.P.C",
        price: " 76 "
    },
    {
        image_url:"https://cdn-images.farfetch-contents.com/17/70/78/98/17707898_37113698_1000.jpg", 
        name: "ALEXANDER MCQUEEN",
        price: " 208"
    },
    {
        image_url:"https://cdn-images.farfetch-contents.com/16/87/50/84/16875084_34302082_1000.jpg", 
        name: "AMBUSH",
        price: " 234"
    },
    {
        image_url:"https://cdn.modesens.com/availability/43110024?w=400&", 
        name: "ALEXANDER MCQUEEN",
        price: " 542"
    },
    {
        image_url:"https://cdn.modesens.com/availability/43753845?w=400&", 
        name: "ETRO",
        price: "226"
    },
]

var cartData=JSON.parse(localStorage.getItem("cart"))||[]
mensData.map(function(elem){
    var box = document.createElement("div")

    var img = document.createElement("img")
    img.src=elem.image_url

    var name =document.createElement("P")
    name.textContent=elem.name

    var price = document.createElement("p")
    price.innerText=elem.price

    var btn = document.createElement("button")
    btn.innerText="Add to Cart"
    btn.addEventListener("click",function(){
        addToCart(elem)
    })
    box.append(img,name,price,btn)
    document.querySelector("#container").append(box)
});
function addToCart(elem){
    console.log(elem);
    cartData.push(elem)
    localStorage.setItem("cart",JSON.stringify(cartData))
    alert("item added to cart")
}