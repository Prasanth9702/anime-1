// divi.
async function foo(){
let res= await fetch("https://anime-facts-rest-api.herokuapp.com/api/v1");
let res1=await res.json()
 console.log(res1);
let arrdata=res1.data
console.log(arrdata);

for(let i=0;i<arrdata.length-1;i++){
    //  console.log(arrdata[i]);
    let divi=document.createElement("div");
    divi.innerHTML=`
    <div class="col-md-4">
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <img src="${arrdata[i].anime_img}" class="img-thumbnail" alt="..." class="avimg" style="height:200px;width:200px">
      <h5 class="card-title">Animie Id:${arrdata[i].anime_id}</h5>
      <h5 class="card-title">Animie Name:${arrdata[i].anime_name}</h5>
    </div>
    </div>
    </div>`
    document.getElementById("div").append(divi)
  
}

}

foo()
