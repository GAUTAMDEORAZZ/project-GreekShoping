var row2 =[
    {name: "SENBONO Max2 Smartwatch",
    img:"https://img.gkbcdn.com/s3/bn/2205/497705-626f45ba2b40c9339c112e8e.jpg",
    },

    {name: "ROIDMI EVE Plus",
    img:"https://img.gkbcdn.com/s3/bn/2205/449701-626f45ea2b40c9339c112e8f.jpg",
    },

    {name: "SYL-14 Off-Road E-Skateboard",
    img:"https://img.gkbcdn.com/s3/bn/2205/463887-626f45612b40c9339c112e8d.jpg",
    },

    {name: "Garden Supplies",
    img:"https://img.gkbcdn.com/s3/bn/2205/499068-626f46232b40c9339c112e90.jpg",
    },
]

display2(row2)

function display2(data)
{
  data.forEach(function (ele){
     var div = document.createElement("div")

     var h3 = document.createElement("h3")
     h3.innerText=ele.name
     var img = document.createElement("img")
     img.setAttribute("src",ele.img)
div.append(h3,img)
document.querySelector("#row2").append(div)
console.log(div)
  })
}

var  row3 = [
    {
        image_url: "https://img.gkbcdn.com/p/2022-03-29/LOKMAT-APPLLP-MAX-Android-Watch-Phone-Black-498482-0._w280_p1_.jpg",
        price: 3847.04,
        strikedoffprice : 6281.89 ,
        discount: "$24% Off",
    },
    {
        image_url: "https://img.gkbcdn.com/p/2022-02-19/LOKMAT-Time-2-Sport-Smart-Watch-Black-496727-0._w280_p1_.jpg" ,
       
        price: 3926.26 ,
        strikedoffprice : 4946.14 ,
       discount: "$26% Off",
    },
    {
        image_url: "https://img.gkbcdn.com/p/2017-07-26/xiaomi-wifi-amplifier-pro-black-1574132393616._w280_p1_.jpg" ,
        price: 2434.07 ,
        strikedoffprice : 3619.38 ,
        discount: "$21% Off",
    },
    {
        image_url: "https://img.gkbcdn.com/p/2021-11-29/razer-deathadder-essential-optical-gaming-mouse-black-aa9d23-1638169302886._w280_p1_.jpg" ,
        price: 8381.49,
        strikedoffprice : 10172.36,
        discount: "$9% Off",
    },
    {
        image_url: "https://img.gkbcdn.com/p/2019-03-22/tronsmart-glary-virtual-7-1-gaming-headset-1571985014193._w280_p1_.jpg" ,
        price: 8381.49,
        strikedoffprice : 11772.36,
        discount: "9% Off",
    },
];

display3(row3)

function display3(data)
{
  data.forEach(function (ele){
     var div = document.createElement("div")

     var img = document.createElement("img")
     img.setAttribute("src",ele.image_url)

     var h4 = document.createElement("h4")
     h4.innerText=ele.price
     var em = document.createElement("em")
     em.innerText = ele.strikedoffprice

     var h5 = document.createElement("h5")
     h5.innerText = ele.discount
   
div.append(img,h4,em,h5)
document.querySelector("#row3").append(div)
console.log(div)
  })
}

var  row4 = [
   
    {
           imge: "https://img.gkbcdn.com/s3/bn/2204/laser-6260f66a2b40c93724be1ee9.jpg",
            name: "Tronsmart T6 Pro",
            dis :"Patented SoundPulse technology,three EQ effects,up to 24 hours playtime " ,
           
        },
        {
            imge : "https://img.gkbcdn.com/s3/bn/2204/Gamesir-6260f6532b40c93724be1ee8.jpg" ,
           
            name: "Wlyoys RC Car ",
           dis: "independent 60A ESC, up to 75km/h, aliminum alloy body",
        },
        {
            imge: "https://img.gkbcdn.com/s3/bn/2203/481198-623d205c2b40c91d90971af4.jpg" ,
            name: "Eleglide D1 Off-road E-Scooter",
            dis: "10'' pneumatic tires, 500W motor,48V 18A battery,45/h max speed",
        },
        {
            imge: "https://img.gkbcdn.com/s3/bn/2204/497217-624fa3172b40c931484ec7f2.jpg" ,
            name: "ACGAM B1-402 Treadmill",
            dis: "Jogging & running 2 in 1, installation-free built-in Bluetooth speaker",
        },
     
    ];

    display4(row4)

    function display4(data){
        data.map(function(ele){
            var div = document.createElement("div")

            var p = document.createElement("h4")
            p.textContent=ele.name;

            var image = document.createElement("img")
            image.setAttribute("src",ele.imge)

   

            var pone = document.createElement("h5")
            pone.textContent=ele.dis

            div.append(p,image,pone);
           document.querySelector("#row4").append(div);
        })
    }


    
    var  row5 = [
        {
            image_url: "https://img.gkbcdn.com/p/2022-04-28/Zeblaze-Stratos-2-Smartwatch-1-3---AMOLED-Display-Blue-500033-0._w280_p1_.jpg",
            price: "₹38475.04",
            para : "Zeblaze Stratos 2 Smartwatch 1.3'' AMOLED Display 24" ,
            discount: "$24% Off",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2022-04-18/KUMI-KU5-Smartwatch-1-22---TFT-Screen-Black-499724-0._w280_p1_.jpg" ,
           
            price: "₹39260.26" ,
            para : "KUMI KU5 Smartwatch 1.22'' TFT Screen Real-time Health" ,
           discount: "$26% Off",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2022-04-25/A-pair-of-LED-Luminous-Chopsticks-499968-0._w280_p1_.jpg" ,
            price:" ₹24341.07" ,
            para : "A pair of LED Luminous Chopsticks Creative Tableware" ,
            discount: "$21% Off",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2022-04-21/ALLDOCUBE-iWork-GT-2-in-1-Tablet-Windows-11-i5-1135G7-CPU-499845-0._w280_p1_.jpg" ,
            price: "₹83814.49",
            para : "ALLDOCUBE iWork GT 2 in 1 Tablet Windows 11 i5-1135G7",
            discount: "$9% Off",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2022-04-13/Magene-HRM60-Heart-Rate-Monitor-499514-0._w280_p1_.jpg" ,
            price: "₹83814.49",
            para : "Magene HRM60 Heart Rate Monitor IML Colorful Shell ANT+/",
            discount: "9% Off",
        },
    ];
    
    display5(row5)
    
    function display5(data)
    {
      data.forEach(function (ele){
         var div = document.createElement("div")
    
         var img = document.createElement("img")
         img.setAttribute("src",ele.image_url)
    
         var h4 = document.createElement("h4")
         h4.innerText=ele.price

         var  para = document.createElement("p")
         para.innerText = ele.para

    div.append(img,para,h4)
    document.querySelector("#row5").append(div)
    // console.log(div)
      })
    }

    var  row6 = [
        {
            image_url: "https://img.gkbcdn.com/p/2019-03-22/tronsmart-glary-virtual-7-1-gaming-headset-1571985014193._w280_p1_.jpg",
            price: "₹2357.90",
            para : "Tronsmart Glary Gaming Headset 7.1 Virtual Surround" ,
            discount: "$24% Off",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2019-10-11/jjrc-x12-4k-gps-rc-drone-white-two-batteries-with-bag-1574132236117._w280_p1_.jpg" ,
           
            price: "₹17296.27" ,
            para : "JJRC X12 AURORA 4K 5G WIFI 3KM FPV GPS Foldable" ,
           discount: "$26% Off",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2021-12-09/A9-1080P-Mini-Wireless-WIFI-IP-Camera-480325-0._w280_p1_.jpg" ,
            price:"₹1178.56" ,
            para : "A9 1080P HD Mini Wireless WIFI IP Camera DVR Night" ,
            discount: "$21% Off",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2019-10-28/enchen-blackstone-3d-smart-electric-shaver-black-1574132742777._w280_p1_.jpg" ,
            price: "₹1493.05",
            para : "Xiaomi Enchen BlackStone 3D Smart Floating Blade Head",
            discount: "$9% Off",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2021-11-29/razer-deathadder-essential-optical-gaming-mouse-black-aa9d23-1638169302886._w280_p1_.jpg" ,
            price: "₹2593.77",
            para : "Razer DeathAdder Essential Optical Professional Grade",
            discount: "9% Off",
        },
    ];
    
    display6(row6)
    
    function display6(data)
    {
      data.forEach(function (ele){
         var div = document.createElement("div")
    
         var img = document.createElement("img")
         img.setAttribute("src",ele.image_url)
    
         var h4 = document.createElement("h4")
         h4.innerText=ele.price

         var  para = document.createElement("p")
         para.innerText = ele.para

    div.append(img,para,h4)
    document.querySelector("#row6").append(div)
    // console.log(div)
      })
    }
    

    var  row7 = [
        {
            image_url: "https://img.gkbcdn.com/p/2022-02-10/a6r-tws-wireless-earphones-black-4570b2-1644488631155._w280_p1_.jpg",
            price: "₹675.37",
            para : "A6R TWS Bluetooth V5.0 Button Control IPX4 Waterproof" ,
            discount: "$24% Off",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2017-08-11/xiaomi-yeelight-motion-sensor-night-light-white-1571990951696._w280_p1_.jpg" ,
           
            price: "₹1493.05" ,
            para : "JJRC X12 AURORA 4K 5G WIFI 3KM FPV GPS Foldable" ,
           discount: "$26% Off",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2022-02-09/gamebox-g5-32gb-video-game-console-with-2-gamepads-8fec60-1644387756223._w280_p1_.jpg" ,
            price:"₹3615.87" ,
            para : "GAMEBOX G5 32GB Video Game Console with 2" ,
            discount: "$21% Off",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2020-04-22/sabbat-e12-bluetooth-5-0-tws-earphone-gunmetal-1587519936946._w280_p1_.jpg" ,
            price: "₹3930.36",
            para : "Sabbat E12 Ultra Qualcomm QCC3020 CVC8.0 TWS",
            discount: "$9% Off",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2019-11-20/xiaomi-mijia-aqara-water-sensor-white-20191120083734594._w280_p1_.jpg" ,
            price: "₹1571.67",
            para : "Xiaomi Mijia Aqara Water Sensor Smart Leaking Alarm",
            discount: "9% Off",
        },
    ];
    
    display7(row7)
    
    function display7(data)
    {
      data.forEach(function (ele){
         var div = document.createElement("div")
    
         var img = document.createElement("img")
         img.setAttribute("src",ele.image_url)
    
         var h4 = document.createElement("h4")
         h4.innerText=ele.price

         var  para = document.createElement("p")
         para.innerText = ele.para

    div.append(img,para,h4)
    document.querySelector("#row7").append(div)
    // console.log(div)
      })
    }