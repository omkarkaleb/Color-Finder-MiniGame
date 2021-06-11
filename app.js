let rr = Math.floor(Math.random()*1000)
let gg = Math.floor(Math.random()*500)
let bb = 144

var result = document.getElementById('score')

console.log("Red:"+rr+" Green:"+gg+" Blue:"+bb)


box = document.getElementById('box')
box.addEventListener('mousemove', changecolor)
sbox = document.getElementById('sbox')
sbox.style.backgroundColor = "rgb("+rr+","+gg+",144)"

function changecolor(e){
    box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",144)"
    box.addEventListener('click', getcolor)
}

function getcolor(e){
    let red = e.offsetX
    let green = e.offsetY
    let blue = 144
    
    console.log("Red:"+red+" Green:"+green+" Blue:"+blue)

    checkcolor(red, green, blue);
}

function checkcolor(r, g, b){
    if (r==rr && g==gg && b==bb){
        console.log("YOU WIn")
    }else{
        getscore(r,g,b)
    }
}

function getscore(r, g, b){
    let rdiff = (rr-Math.abs((r-rr)))/rr
    let gdiff = (gg-Math.abs((g-gg)))/gg
    let bdiff = (bb-Math.abs((b-bb)))/bb

    

    sec = ((rdiff+gdiff+bdiff)*100)/3
    score = sec + 2
    console.log(score)

    if (score > 99){
        result.textContent = "You Matched 100%"
    }else{
        result.textContent = Math.ceil(score) + "%"
    }
    
}