// Exercice 01
function Ex1(){
    let Exercice1=document.getElementById("exercice").textContent="Exercice 01";
    const a=Number(prompt("Veuillez entrer un nombre: "));
    const b=Number(prompt("Veuillez entrer un nombre: "));

    console.log("Somme :", a + b);
    console.log("Différence :", a - b);
    console.log("Produit :", a * b);
    console.log("Quotient :", a / b);
}


// Exercice 02
function Ex2(){
    let Exercice2=document.getElementById("exercice").textContent="Exercice 02";

    let nombreSecret = Math.round(Math.random() * 10);

    let tentative = 0;
    let proposition;
    do {
        proposition = Number(prompt("Devinez un nombre entre 1 et 10 :"));
        tentative++;

        if (proposition < nombreSecret) {
             alert("Le nombre est plus grand !");
        }else if (proposition > nombreSecret) {
             alert("Le nombre est plus petit !");
       } else {
          alert("Bravo !  Score => " + tentative + " tentatives.");
        }

    }while (proposition !== nombreSecret);

}
// Exercice 03
function Quiz(){
    let Exercice3=document.getElementById("exercice").textContent="Exercice 03";

    let Q1=[
      ["Quelle est la capitale de l'Espagne ?", "Madrid"],
      ["Quelle est la capitale de l'Italie ?", "Rome"],
     ["Quelle est la capitale du Maroc ?", "Rabat"],
     ["Quelle est la capitale du Japon ?", "Tokyo"],
     ["Quelle est la capitale du Canada ?", "Ottawa"]
    ];
    let total_question=Q1.length
    let compteur=0;

    for (let i=0 ;i<total_question;i++){
        let array_Question=Q1[i][0]
        let Reponse=String(prompt(array_Question))
        Reponse=Reponse.charAt(0).toUpperCase()+Reponse.slice(1)

        let array_Reponse=Q1[i][1]
        if (Reponse===array_Reponse){
            compteur++
            alert("Réponse juste")
         }
        else{
           alert("Réponse fausse")
         }
    
    }


    alert("Vous avez répondu correctement à "+compteur+" question sur "+total_question)
}