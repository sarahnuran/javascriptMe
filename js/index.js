window.onload = function() {

    // --------------------- STEP 1 ---------------------
        // Par defaut le formulaire de connection est afficher, le formulaire d'inscription quand a lui est en 'display: none';
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button-empty'
            // DE MASQUER LE LOGIN FORM POUR AFFICHER LE REGISTER FORM, ET INVERSEMENT <->

            const buttons = document.getElementsByClassName("square-button-empty");
            const connectionForm = document.getElementById("connexion-form");
            const registerForm = document.getElementById("register-form");

            for(let i = 0; i<buttons.length; i++){
                buttons[i].addEventListener("click", function(e){
                    if(e.target.getAttribute("data-form") == 0 ){
                        connectionForm.style.display="none";
                        registerForm.style.display="flex";
                    } else {registerForm.style.display="none";
                    connectionForm.style.display="flex";

                    }
                })
            };







    // --------------------- STEP 2 ----------------------
        // maintenant que l'on peut afficher nos 2 formulaires l'intéret serait maintenant qu'ils fonctionnent ! pour cela :
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button' DE :
            //  1. récuperer la valeur de tout les champs de formulaires
            //  2. vérifier que le 'username' fait au moins 5 caracteres alphanumérique
            //  3. vérifier que le password fait au moins 8 caracteres et contient a minima une majuscule/minuscule ainsi qu'un entier (integer)

       
            class User{


                constructor(username, email, password){
                    this.username = username;
                    this.email = email;
                    this.password = password;
                    

                    } 
                

                    getUsername(){return this.username}
                    getEmail(){return this.email}
                    getPassword(){return this.password}

                    }   

                    // var user = new User('Toto', 'toto@email.fr', 'tamereenslip');
                    // console.log('Bonjour ' + user.getUsername() + ' !');

       

       
       
            //  d'abord viser le bouton sur lequel on va recup les infos
        const envoi1 = document.querySelector("#envoi1");
        const envoi2 = document.querySelector("#envoi2");
        
        // je vise la ou je vais recup les infos
        const inputs = document.querySelectorAll(".form-control");

        // 1ere recup
        envoi1.addEventListener("click", function(e){
        
            const logIn = inputs[0].value;
            const log = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (log.test(logIn)==false)
                {
                    alert("You have entered an invalid email address!");
                    // return (false);
                }
                // console.log(logIn)
                   

            const mdp = inputs[1].value;
            const pwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
            if (pwd.test(mdp)==false) 
                {
                    alert("Password Should contain atleast 8 characters, One Number, One UpperCase and a lowercase letter");   
                    // return (false);  
                }
                // console.log(mdp);

                var user = localStorage.getItem("user");
                user = JSON.parse(user);
                if (user === null) {
                    alert("Account does not exist, please register.");
                    // return false;
                
                  } else if(logIn !== user.email){
                        alert("Wrong email.")
                        // return false;
                    } else {
                        // (user.email == logIn && user.password == mdp){
                    window.location.href="home.html";
                } 

                    
                  })
                  
                  
                
                // console.log(user);

                          
            

        // 2eme recup
        envoi2.addEventListener("click", function(e){
        
            const username = inputs[2].value;
            if (username.length < 5) {
                alert("Username should contain minimum of 5 characters");
                // return false;
            }
                console.log(username);

                const email = inputs[3].value;
            const valide = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (valide.test(email)==false)
                {
                    alert("You have entered an invalid email address!");
                    // return (false);
                }          
                console.log(email);

               
                const mdp = inputs[4].value;
            const pwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
            if (pwd.test(mdp)==false) 
                {
                    alert("Password Should contain atleast 8 characters, One Number, One UpperCase and a lowercase letter");   
                    // return (false);  
                }
                console.log(mdp);

                const secondmdp = inputs[5].value;
            if (secondmdp != mdp) 
                {
                    alert("Passwords are differents");
                    // return false;
                }
                console.log(secondmdp);

            //    if(error == false){}
                var user = new User(username, email, mdp);
                localStorage.setItem("user", JSON.stringify(user));

                // console.log(user);



            })



            // for (let i = 0; i<inputs.length; i++){
            
            //     let form = inputs[i].value;
            // console.log(form);
            // }
            

            

            // 2eme 
            // for (let i = 0; i<inputs.length; i++){
            //     envoi2.addEventListener("click", function(e){
            //         let form = inputs[i].value;
            //     // console.log(form);

            //     var userName = document.querySelector("#userName").value;
            //     if (userName.length < 5) {
            //         alert("Password should contain minimum f characters");
            //        return false;
            //     }
            //     }
            //     )};


            



     //ESSAI  
     
     //     const squareButton = document.querySelectorAll(".square-button");
        // const input = document.querySelectorAll(".form-control").value;

        // for( let i = 0; i<input.length; i++){
        //     squareButton[i].addEventListener("click", function(e){


        //     })
        // }

// var validation = document.getElementById("boutonenvoi");
// validation.addEventListener("click")

// this.document.forms["connexion-form"].addEventListener("submit", function(e){
// var erreur;
// var inputs = this;
// for(var i = 0; i<inputs.length; i++){
//     console.log(inputs[i]);
//     if(!inputs[i].value){
//         erreur = "veuillez rensigner";
//     }
// }

// });




    // --------------------- STEP 3 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A L'INSCRIPTION :

            // 1. le code commenter ci-dessous devras etre fonctionnelle (pour ça vous allez devoir déclarer une class 'User' -> POO Javascript)
                // cette classe devras avoir des les propriétés 'username', 'email', 'password' ainsi qu'une methode nommé 'getUsername' --->
                // --> qui devra retourner l'username de l'instance courante de 'User'

                // var user = new User('Toto (username)', 'toto@email.fr (email)', 'tamereenslip (password)');
                // console.log('Bonjour ' + user.getUsername() + ' !');


            // 2. Modifier ensuite le code ci dessus pour qu'a l'instantation d'un nouvelle 'User' ---
            // --> on utilise les données saisie du formulaire d'inscription pour setup les propriétés notre nouvelle 'User'
            // puis on stocke ce nouvelle objet utilisateurs dans le 'localStorage' sous la clé 'user'

           
                
                    



    // --------------------- STEP 4 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A LA CONNEXION :

            // 1. Vérifier l'existance dans le 'localStorage' de la clé 'user'
                // 1.1 Si la clé 'user' n'existe pas, retourner un message d'erreur a l'utilisateurs (Account do not exist, please register.)
                // 1.2 Si la clé existe, comparer les données saisie a celle présente dans le 'localStorage'
                    // 1.2.1 si l'email ou le mot de passe ne correspondent pas, retourner un message d'erreur (les alert() sont proscrit)

            // 2. Si les données saisies correspondent a celles présentes dans le 'localStorage', rediriger l'utilisateur sur la page 'home.html'


}
