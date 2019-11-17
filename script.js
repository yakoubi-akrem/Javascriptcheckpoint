

var getText = document.getElementById("Text")


function onBold(){
    
    if(getText.style.fontWeight=="bold")
       {
           getText.style.fontWeight="normal"
        }
       else
       {
        getText.style.fontWeight="bold"
       }
}

function italics(){

    if(getText.style.fontStyle=="italic")
    {
        getText.style.fontStyle="normal"
     }
    else
    {
     getText.style.fontStyle="italic"
    }

}

function underline(){

    if(getText.style.textDecoration=="underline")
    {
        getText.style.textDecoration="none"
    }
    else
    {
        getText.style.textDecoration="underline"
    }
}


function taille_texte()
{
    getText.style.fontSize=document.getElementById("size").value
}


function changement()
{
    getText.style.fontFamily=document.getElementById("change").value
}

  