function makeVissible(param){    
    if(document.getElementsByClassName("TextSection")[param].style.display == "block"){
        document.getElementsByClassName("TextSection")[param].style.display = "none";
        document.getElementsByClassName("Container-Img")[param].style.backgroundColor = "black";
    }
    else{
        var img = document.getElementsByClassName("TextSection")
        var container = document.getElementsByClassName("Container-Img")
        img[param].style.display = "block";
        container[param].style.backgroundColor = "mediumpurple";
        
        for(let i = 0 ; i < img.length ; i++){
            if(i != param){
                document.getElementsByClassName("TextSection")[i].style.display = "none";
                document.getElementsByClassName("Container-Img")[i].style.backgroundColor = "black";
            }
        }
    }
}
