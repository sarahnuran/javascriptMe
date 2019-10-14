window.onload = function() {
    readFile('https://raw.githubusercontent.com/promo3Saint-Maur/files/master/articles.json', function(articles) {
        console.log(articles);

        // --------------------- STEP 0 (informations) ---------------------
            // Dans le dossier data ce trouve un fichier 'JSON' qui contient une liste d'article
            // CI-DESSUS la fonction 'readFile' fait une 'requette ajax' pour récuperer le contenue du fichier 'articles.json'
            // Le premier parametre de la fonction est le chemin d'acces au fichier
            // le deuxieme, est une fonction 'callback' qui nous permet d'avoir accès au données sous la forme d'une variables
            // cette variable est un 'array' contenant une plusieurs objet correspondant chacun a un article








        // --------------------- STEP 1 ---------------------
            // 1. FAITE EN SORTE DE POUVOIR INSTANCIER UN OBJET 'Article' A PARTIR DES DONNEES DE LA VARIABLE 'articles'
                // exemple : var article = new Article(articles.title, articles.author, articles.publishedDate, articles.img, articles.content, articles.resumes);

            // 1.2 DEFINIR DES GETTER/SETTER POUR CHAQUE PROPRIETES DE LA CLASS Article
                // exemple : this.SetTitle = function(newTitle) { this.title = newTitle; } <----- ceci est un SETTER

                class Articles {
                    constructor (id, title, author, publishedDate, img, content, resumes) {
                        this.id = id;
                        this.title = title;
                        this.author = author;
                        this.publishedDate = publishedDate;
                        this.img = img;
                        this.content = content;
                        this.resumes = resumes;
                    }
                
                    getId() {
                        return this.id;
                    }
                    setId (newId) {
                        this.id = newId;
                    }
                
                    getTitle() {
                        return this.title;
                    }
                    setTitle (newTitle) { 
                        this.title = newTitle;
                    }
                
                    getAuthor() {
                        return this.author;
                    }
                    setAuthor (newAuthor) { 
                        this.author = newAuthor;
                    }
                
                    getPublishedDate() {
                        return this.publishedDate;
                    }
                    setPublishedDate (newPublishedDate) { 
                        this.publishedDate = newPublishedDate;
                    }
                
                    getImg() {
                        return this.img;
                    }
                    setImg (newImg) { 
                        this.img = newImg;
                    }
                
                    getContent() {
                        return this.content;
                    }
                    setContent (newContent) { 
                        this.content = newContent;
                    }
                
                    getResumes() {
                        return this.resumes;
                    }
                    setResumes (newResumes) { 
                        this.resumes = newResumes;
                    }
                }
                






        // ------------------- STEP 2 ---------------------
            // AFFICHER DANS LA SECTION DU MAIN DE LA PAGE 'home.html' QUI EST LINK A CE SCRIPT LES ARTICLES

                // exemple structure html pour les articles ------------------------>
                    // <article class="article-preview" data-id="1">
                    //     <h2>Un super article 1</h2>
                    //     <div class="article-preciew-body">
                    //         <div class="article-preview-img">
                    //             <img src="http://fauxsite.com/content/medias/img/article1.jpg" alt="miniature article 1">
                    //         </div>
                    //         <div class="article-preview-content">
                    //             <p>Ceci est un texte taper au pif donc ne jugé pas sur l'orthographe général des documents fournis...</p>
                    //         </div>
                    //         <div class="article-preview-tags">
                    //             <p>tag1 tag2 tagada</p>
                    //         </div>
                    //     </div>
                    // </article>

                // exemple code javascript pour la generation des elements html ----------------->
                     // var articleBloc = document.createElement('article');
                     // articleBloc.ClassList.add('article-preview');
                     // articleBloc.setAttribute('data-id', articles[i].getId()) // <---- Dans cette exemple il faut s'imaginer qu'on boucle (for) sur un tableau contenant des 'instances' de la class 'Article'
                     // var articleTitle = document.createElement('h2');
                     // articleTitle.innerText = articles[i].getTitle(); // <---- Dans cette exemple il faut s'imaginer qu'on boucle (for) sur un tableau contenant des 'instances' de la class 'Article'
                     // articleBloc.append(articleTitle);
                     // etc.....

                     for (let i = 0; i < articles.length; i++) {
                        const article = new Articles (articles[i].id, articles[i].title, articles[i].author, articles[i].publishedDate, articles[i].img, articles[i].content, articles[i].resumes);
                        const section = document.getElementsByTagName("section")[0];
                        const articleBloc = document.createElement("article");
                        articleBloc.classList.add("article-preview");
                        articleBloc.setAttribute("data-id", article.getId());
                        section.appendChild(articleBloc);
            
                        const articleTitle = document.createElement("h2");
                        articleTitle.innerText = article.getTitle();
                        articleBloc.appendChild(articleTitle);
            
                        const articleBody = document.createElement("div");
                        articleBody.classList.add("article-preview-body");
                        articleBloc.appendChild(articleBody);
            
                        const articleImg = document.createElement("div");
                        articleImg.classList.add("article-preview-img");
                        articleBody.appendChild(articleImg);
            
                        const img = document.createElement("img");
                        img.setAttribute("alt", "miniature article " + article.getId());
                        img.setAttribute("src", article.getImg());
                        articleImg.appendChild(img);
            
                        const articleContent = document.createElement("div");
                        articleContent.classList.add("article-preview-content");
                        articleBody.appendChild(articleContent);
            
                        const content = document.createElement("p");
                        content.innerText = article.getResumes();
                        articleContent.appendChild(content);
            
                        const articleTags = document.createElement("div");
                        articleTags.classList.add("article-preview-tags");
                        articleBody.appendChild(articleTags);
            
                        const tags = document.createElement("p");
                        tags.innerText = "tag1 tag2 tagada";
                        articleTags.appendChild(tags);
                    
                        articleBloc.addEventListener("click", function(){
                            window.location.href = "article.html?id=" + article.getId();
                       })
           
                   }
               });
           }            




        // ------------------ STEP 3 -----------------------
            // AU CLICK SUR LA PREVIEW D'UN ARTICLE (l'elements html) REDIRIGER VERS LA PAGE 'article.html' --->
                // L'url devras ressembler à celle ci (le chemin d'accès vers le fichier + un parametre de type GET) :
                    // 'file:///C:/Users/brian/Desktop/JavascriptMe/article.html?id=1' <----
                        // --- La valeur du parametre id présent dans l'url doit correspondre a l'article clicker




