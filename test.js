console.log(document.getElementById("title"));
document.addEventListener("DOMContentLoaded",
function(event){
    function sayHello(){
        this.textContent="Submitted!";
        var name=document.getElementById("name").value;
        var message="<h3>Hello "+name+"!</h3>";
        // document.getElementById("content").textContent=message;
        document.getElementById("content").innerHTML=message;
        if(name==="student"){
            var title=document.querySelector("#title").textContent;
            title+=" & Lovin' it!";
            document.querySelector("#title").textContent=title;
        }
    }
    
    document.querySelector("button").addEventListener("click",sayHello);
    
    document.querySelector("body").addEventListener("mousemove", 
        function(event){
            if(event.shiftKey===true){
                console.log("x: "+event.clientX);
                console.log("y: "+event.clientY);
            }
        }
    );
});

