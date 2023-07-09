let logUrl = document.getElementById("long");
let button = document.getElementById("btn");
let shortUrl = document.getElementById("short");
let copy=document.getElementById("copy");
button.addEventListener("click", myUrl);
async function myUrl() { 
    let _rul = logUrl.value;
    var result = await fetch(`https://api.shrtco.de/v2/shorten?url=${_rul}`).then((response) => response.json()).then((value) => {
        
    shortUrl.value = value.result.short_link;
    }).catch((err) => {
        alert(err.message)
    })
    
}
copy.addEventListener("click", () => { 
    navigator.clipboard.writeText(shortUrl.value);
    copy.innerHTML = "copied ";
    setTimeout(() => { 
        copy.innerHTML = "copy";
    },1000)
})