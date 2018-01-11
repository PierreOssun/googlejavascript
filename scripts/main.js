let cacher = document.getElementById("center-div");
let button = document.querySelector("button");
cacher.style.display = "none";

function hide() {
  cacher.style.display = "block";
  button.style.display = "none";
  cacher.style.display='flex';
}

function gs(){
  let search = document.getElementById("barre").value;
  document.location.href = "https://www.google.fr/#q="+search;
}

setTimeout(function() { alert("Hey le site 9gag est trop bien. Viens dessus stp please"); }, 10000);
