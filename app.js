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

    function searchBtnClick(e){
        const htr = new XMLHttpRequest();

        search = document.getElementById("bar").value;

        htr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                document.getElementById("message").innerHTML = this.responseText;
            }
        }

        htr.open("GET", "http://localhost/info2180-lab4/superheroes.php?q="+search);
        htr.send();

    }
}