let data=JSON.parse(localStorage.getItem("products"))||[];
console.log(data);
append(data)
function append(data){
    console.log("hello");
    let all_products=document.getElementById("all_products");
    all_products.innerHTML=null;
    data.forEach(function(el,index){
      //console.log(el);
      let box=document.createElement("div");
      let type=document.createElement("p")
      type.innerText=el.type;
      let desc=document.createElement("p");
      desc.innerText=el.desc;
      let price=document.createElement("p");
      price.innerText=el.price;
      let image=document.createElement("img")
      image.src=el.image;
      let btn=document.createElement("button");
      btn.innerText="Remove Product"
      btn.setAttribute("id","remove_product");
      btn.addEventListener("click",function(){
          remove(el,index);
      })
      box.append(image,type,desc,price,btn)
      document.getElementById("all_products").append(box);
    })
}

function remove(el,index){
    data.splice(index,1);
    localStorage.setItem("products",JSON.stringify(data))
    window.location.reload();
}