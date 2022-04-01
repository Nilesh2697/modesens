var mensData=[
    {
        image_url:"https://images.selfridges.com/is/image/selfridges/R03748751_WHITE_M?$CHANNEL_INTELLIGENCE$" , 
        name: "BURBERRY",
        price: "357"

    },
    {
        image_url:"https://cdn-images.farfetch-contents.com/17/07/49/39/17074939_36905758_1000.jpg" , 
        name: "ZIMMERMANN",
        price: "488" 
    },
    {
        image_url:"https://cdn-images.farfetch-contents.com/17/07/66/92/17076692_36892801_1000.jpg" , 
        name: "ZIMMERMANN",
        price: "168 "
    },
    {
        image_url:"https://cdn.modesens.com/product/19022596_152?w=400&", 
        name: "BALMAIN",
        price: "553"
    },
    {
        image_url:"https://cdn.modesens.com/product/39187798_12?w=400&", 
        name: "ZIMMERMANN",
        price: "730"
    },
    {
        image_url:"https://images.lvrcdn.com/Zoom75I/L5Z/117_d054d26e-051f-4e6f-8fed-1dbf30f57375.JPG", 
        name: "BALMAIN",
        price: "1297"
    },
    {
        image_url:"https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/212251F111010_1.jpg", 
        name: "BALMAIN",
        price: "481"
    },
     {
        image_url:"https://cdn.modesens.com/product/37104523_3?w=400&", 
        name: "ZIMMERMANN",
        price: " 586"
    },
    {
        image_url:"https://img.ssensemedia.com/images/221251F110007_1/pink-cropped-logo-t-shirt.jpg", 
        name: "BALMAIN",
        price: "192"
    },
    {
        image_url:"https://cdn.modesens.com/product/39934471_18?w=400&", 
        name: "DOLCE & GABBANA",
        price: "339"
    },
    {
        image_url:"https://cdn.modesens.com/product/36439496_4?w=400&", 
        name: "bURBERRY",
        price: "269"
    },
    {
        image_url:"https://cdn-images.farfetch-contents.com/17/07/49/44/17074944_37145276_1000.jpg", 
        name: "ZIMMERMANN",
        price: " 1225"
    },
    {
        image_url:"https://cdn-images.farfetch-contents.com/17/73/23/65/17732365_37159558_1000.jpg", 
        name: "ZIMMERMANN",
        price: " 740"
    },
    {
        image_url:"https://cdn.modesens.com/product/36253441_1?w=400&", 
        name: "BALMAIN",
        price: " 692"
    },
    {
        image_url:"https://cdn.modesens.com/product/34019317_20?w=400&", 
        name: "DOLCE",
        price: " 641"
    },
    {
        image_url:"https://img.ssensemedia.com/images/221259M213344_1/white-sneaker-skeleton-t-shirt.jpg", 
        name: "ALEXANDER MCQUEEN",
        price: "204"
    },
    {
        image_url:"https://images.lvrcdn.com/Zoom75I/WUE/028_7a4c203d-0b42-4b7d-a68d-a031c5d4c8d4.JPG", 
        name: "AMIRI",
        price: "721"
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