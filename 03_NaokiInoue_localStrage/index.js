const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");
async function getUsers() {
  const res = await fetch("https://api.nhk.or.jp/v2/pg/now/130/g1.json?key=eRchxdO6eDFQ30JyTROqElpOYGjRjqyZ");
  const arrays = await res.json();
  const array = arrays.nowonair_list.g1;
  const list = document.createElement("li");
	//　 previous以外も可能
  list.innerText = array.previous.title;
  return lists.appendChild(list);
}

button.onclick = () => {
  getUsers();
};

document.querySelector("#myFileInput").addEventListener("change",function(){
  const reader = new FileReader(); 

   reader.addEventListener("load", () => {
    　　localStorage.setItem("recent-image", reader.result);
   })

   reader.readAsDataURL(this.files[0])
})

document.addEventListener("DOMContentLoaded", () => {
  const recentImageDataUrl =localStorage.getItem("recent-image");

  if(recentImageDataUrl){
     document.querySelector("#imgPreview").setAttribute("src", recentImageDataUrl)
    }
})