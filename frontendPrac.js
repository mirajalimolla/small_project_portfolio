/*
    This is the bubble game created
   ==================================
let bubbleContainer = document.querySelector("#bubble-container");
let bubbleStore = document.querySelector(".bubble-store");
let target = document.querySelector(".target");
let timer = document.querySelector(".timer");
let score = document.querySelector(".score");
let scoreVal = 0;
let time;
let bubbleUpdate;


// Create target
function targetFunc(){
    target.innerHTML = Math.floor(Math.random() * 10);
}
targetFunc();


// Create timer
function timerFunc(){
    time = 59;
    let timeSet = setInterval(function(){
        if(time >= 0){
            timer.innerHTML = time--;
        }else{
            clearInterval(timeSet);
            
            bubbleStore.remove();

            target.innerHTML = "-";
            timer.innerHTML = "-";
            
            let gmOverContainer = document.createElement("div")
            gmOverContainer.classList.add("gmOver-container");
            bubbleContainer.appendChild(gmOverContainer);

            let gmOverH1 = document.createElement("h1");
            gmOverH1.innerText = "GAME OVER";
            gmOverContainer.appendChild(gmOverH1);
            
            let gmOverBtn = document.createElement("button");
            gmOverBtn.innerText = "Play Again";
            gmOverContainer.appendChild(gmOverBtn);
            
            gmOverBtn.addEventListener("click", function(){
                location.reload();
            });
        }
    }, 1000);
}
timerFunc();


// Check Which bubble I clicked and score increase
bubbleContainer.addEventListener('click', function(click){
    let bubbleNo = click.target.textContent;
    if(bubbleNo == target.textContent){
        scoreVal++;
        score.innerHTML = scoreVal;
        targetFunc();
        bubbleGenerate();
    }
});


// Create bubbles and generate random number in bubble
function bubbleGenerate(){
    let bubble = "";
    for(let i=0; i< 114;i++){
        let rn = Math.floor(Math.random()*10);
        bubble += `<div class="bubble">${rn}</div>`;
        bubbleStore.innerHTML = bubble;
    }
}
bubbleGenerate();
*/




//    This is a TODO App
// ========================

// let form = document.querySelector("#form-container");
// let name = document.querySelector("#name");
// let time = document.querySelector("#time");
// let place = document.querySelector("#place");
// let submit = document.querySelector("#submit");
// let tbody = document.querySelector("tbody");
// let taskNo = 1;
// let tr;
// let task;
// let edit;
// let remove;

// function add(){
//     form.style.visibility = "visible";
//     document.querySelector("h1").style.opacity=0;
// }

// function exit(){
//     form.style.visibility = "hidden";
//     document.querySelector("h1").style.opacity=1;
    
// }

// submit.addEventListener("click", function(e){
//     e.preventDefault();
//     if((name.value.length >= 1) && (time.value.length >= 1) &&(place.value.length >= 1) ){
        
//         tr = document.createElement("tr");
//         tbody.appendChild(tr);
//         tr.classList.add("task");
//         let td = document.createElement("td");
//         tr.appendChild(td);
//         let td1 = document.createElement("td");
//         tr.appendChild(td1);
//         let td2 = document.createElement("td");
//         tr.appendChild(td2);
//         let td3 = document.createElement("td");
//         tr.appendChild(td3);
//         let td4 = document.createElement("td");
//         tr.appendChild(td4);
        
//         td.innerHTML = taskNo++;
//         td1.innerHTML = name.value;
//         td2.innerHTML = time.value;
//         td3.innerHTML = place.value;

//         td4.style.display = "flex";
//         td4.style.gap = "6px";

//         let edit = document.createElement("button");
//         edit.innerHTML = "Edit"
//         td4.appendChild(edit);
//         edit.classList.add("edit")
        
//         let remove = document.createElement("button");
//         remove.innerHTML = "Remove"
//         td4.appendChild(remove);
//         remove.classList.add("remove")
        
        
//         // name.value = "";
//         // time.value = "";
//         // place.value = "";
        
        
//         exit();
//         console.log("Your task created successfully");
//     }
//     else{
//         console.log("Wrong");
//     }

//     task = document.querySelector(".task");
//     edit = document.querySelector(".edit");
//     remove = document.querySelector(".remove");
    
// });

// edit.addEventListener("click", function(){
//     console.log("Yes I am");
// });

// remove.addEventListener("click", function(){
//     console.log("Yes I am");
// });





// Start the code of a calulator
// ==============================

// let numPad = document.querySelector(".numPad");
// let numInput = document.querySelector("#numInput");
// let plus = document.querySelector(".plus");
// let minus = document.querySelector(".minus");
// let devide = document.querySelector(".devide");
// let miltipli = document.querySelector(".miltipli");
// let persentage = document.querySelector(".persentage");


// function backspace(){
//     numInput.value = numInput.value.slice(0, -1);
// }
// function result(){
//     if(numInput.value.length >= 1 ){
//         let nuValue = numInput.value;
//         numInput.value = eval(nuValue);
//         console.log("Yes");
//     }else{
//         numInput.value = "";
//         console.log("No")
//     }
// }



// This is a fire game
// ========================

let hero = document.querySelector(".hero");
let heroCharContainer = document.querySelector(".heroChar-container");

function fire(){
        let triger = document.querySelector(".triger");
        let bullet = document.createElement("span");
        triger.appendChild(bullet);
        bullet.classList.add("bullet");
}

hero.addEventListener("mousemove", function(details){
    heroCharContainer.style.marginLeft = `${details.clientX - 33}px`;
});