
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
/*
 type="text/javascript"//this script write for color cursor
    
    const ccursor = document.querySelector(".ccursor");
     var timeout;
     
    //follow cursor on mousemove
    document.addEventListener("mousemove", (e) => {
      let x = e.pageX;
      let y = e.pageY;

      ccursor.style.top = y + "px";
      ccursor.style.left = x + "px";
      ccursor.style.display = "block";

      //cursor effects when mouse stopped
      function mouseStopped(){
        ccursor.style.display = "none";
      }

      clearTimeout(timeout);
      timeout = setTimeout(mouseStopped,1000000);
    });
    document.addEventListener("mouseout", () => {
     
    });
*/

function sendmail(){
    
    var params = {
        name  : document.getElementById('name').value,
         mail  : document.getElementById('mail').value,
         number  : document.getElementById('number').value,
         subject  : document.getElementById('subject').value,
         message  : document.getElementById('message').value
    };

const serviceID = "service_xjnud9c";
const templateID="template_lbsmnoc"

emailjs
.send(serviceID, templateID, params)
.then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("mail").value = "";
        document.getElementById("number").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your Message Sent Successfully");
    })
    .catch((err)=>console.log(err));
}



/*
const sections = document.querySelectorAll('.section');
const sectbtns = document.querySelectorAll('.controlls');
const sectbtn = document.querySelectorAll('.control');
const allsections = document.querySelectorAll('.main-content');

function pageTransitions(){
    //button click active class
    for(let i=0; i<sectbtn.length; i++){
        sectbtn[i].addEventListener('click', function(){
            let currentbtn = document.querySelectorAll('.active-btn')
            currentbtn[0].className = currentbtn[0].className.replace(' active-btn','')
            this.className += ' active-btn'
        })
    }

    //Section Active Class
    allsections.addEventListener('click', (e) =>{
        const id =e.target.dataset.id;
        if(id){
            //remove selected from the other 
            sectbtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            
            //hide other sections 
            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active')
        }
    })

}

pageTransitions():*/