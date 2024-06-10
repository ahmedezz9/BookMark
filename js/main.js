var siteName = document.getElementById('sitename');
var siteUrl = document.getElementById('siteurl');
var table = document.getElementById('table');

if(localStorage.getItem('adress')!=null){
var urls = JSON.parse(localStorage.getItem('adress'));
displayUrl();
}

else{
    var urls = [];
}

function addUrl(){
    var url = {
        urlName:siteName.value,
        url:siteUrl.value
    };
urls.push(url);

var x = JSON.stringify(urls);
localStorage.setItem('address',x);

displayUrl();
clear();   
}

function clear(){
    siteName.value=null;
    siteUrl.value=null;
}

function displayUrl(){

    var str=`
    <thead>
    <tr>
      <th scope="col">Index</th>
      <th scope="col">Web Site Name</th>
      <th scope="col">Visit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>`;

    for(var i=0;i<urls.length;i++){
        str+=`
        <tr>
        <td>${i+1}</td>
        <td>${urls[i].urlName}</td>
        <td><a href="${urls[i].url}" target="_blank" class="btn btn-success"><i class="fa-solid fa-eye text-white px-1"></i>Visit</a></td>
        <td><button class="btn btn-danger" onclick="deleteUrl(${i})"><i class="fa-solid fa-trash text-white px-1"></i>Delete</button</td>
    </tr>`;

     }
     
table.innerHTML=str;
}

function deleteUrl(index){
    urls.splice(index,1);
    var y = JSON.stringify(urls);
    localStorage.setItem('address',y);
    displayUrl();
}