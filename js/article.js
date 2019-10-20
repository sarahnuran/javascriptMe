window.onload = function() {
    readFile('https://raw.githubusercontent.com/promo3Saint-Maur/files/master/articles.json', function(articles) { 
        
    // VOUS Y ETES PRESQUE !!!

    // let params = (new URL(document.location)).searchParams;
    // let id = parseInt(params.get('id'));
    // for (let i = 0; i < articles.length ; i++) {
        function readTextFile(file) {
            var rawFile = new XMLHttpRequest(); 
            rawFile.open("GET", file, false); 
            rawFile.onreadystatechange = function ()
            {
                if(rawFile.readyState === 4) 
                {
                    if(rawFile.status === 200) 
                    {
                        var id = rawFile.responseText; 
                        console.log(id);
                    }
                }
            }
            rawFile.send(null); 
        }
        


    
    // ------------- FINAL STEP -----------------
        // A PARTIR DU PARAMETRE 'ID' PRESENT DANS L'URL :
            // 1. Récupérer l'article correspondant à partir du fichier 'JSON'
            // 2. Utiliser les données pour instancier un nouvelle object 'Article'
            // 3. Inserer l'article dans la page 'article.html' sous la forme d'un element HTML


    // -- IMPORTANT --------------->
        // ---- comme vous pouvez le constater pour cette final step rien de bien nouveau, allons nous réecrire un code déjà fait ?
        // BIEN SUR QUE NON !
        // Il serait donc peut-etre jusdicieux d'organiser notre code en utilisant des fonctions dynamique réutilisable ;-)



    })}
