window.onload = function(){

   let button = document.getElementById("searchbtn");

    button.addEventListener("click",searchBtnClick);

    /*function searchBtnClick(e){
        console.log("mmm");
        const htr = new XMLHttpRequest();

        htr.open("GET", "http://localhost/info2180-lab4/superheroes.php");

        htr.onload = () => {
            alert(htr.response);
        };

        htr.send(); 

    }*/

    function sanitizeStr(str){
        str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
        return str.trim();
    }

    function searchBtnClick(e){
        e.preventDefault();

        const htr = new XMLHttpRequest();

        search = sanitizeStr(document.getElementById("bar").value);

        htr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                document.getElementById("message").innerHTML = this.responseText;
            }
        }

        htr.open("GET", "http://localhost/info2180-lab4/superheroes.php?q="+search);
        htr.send();

    }
}