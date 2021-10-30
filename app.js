window.onload = function(){
    
    let button = document.getElementById("searchbtn");

    button.addEventListener("click",searchBtn);

    function searchBtn(e){
        const htr = new XMLHttpRequest();

        htr.open("GET", "http://localhost/info2180-lab4/superheroes.php");

        htr.onload = () => {
            alert(htr.response);
        };

        htr.send();

    }
}