//player
 var nave,imagenave
 var tiro
 var fogo, fogoex;
 var escudo,imagen_escudo;
 var parede_jogador;
 
 var arma_rifle
//player

  //outros
     //inimigo
     var nave_inimiga,imagen_nave_inimiga
     var movimento_inimigo;
     var tiro_inimigo,imagen_tiro_inimigo
     var escudo_inimigo,imagen_escudo_inimigo
     //inimigo

   var asteroide,asteroideImage
   var explosao,imagen_explosao

   var placar,imagenplacar

   var energia
   var vida
   
   var dano,imagen_dano
   

  //outros
   
 var parede
 var parede_invisivel
 
  //grupos
 
 var varias_paredes;
 
 var grupo_asteroides
  //grupos
 
  //estados
  var estadojogo = "loby";
  var fundo,imagenfundo;
  var cenario,imagencenario
  var seleçao,imagen_seleçao
  //estados
  
  //botoes
  
  var botao_batalha,imagen_botão_batalha
  
  
  
  //fim_botões

 function preload() {
  
  //fundo
  imagencenario = loadImage ("Design sem nome (4).png");
  
  imagenfundo = loadImage ("espaço para começar.png");
  
  imagen_seleçao = loadImage ("menu_selecao.png");
  //fundo

  //player
  imagenave = loadImage ("png-transparent-pixel-art-unidentified-flying-object-ufo-miscellaneous-game-cartoon (1).png");
  fogoex = loadAnimation ("fogo1.png","fogo2.png","fogo3.png","fogo1.png","fogo2.png","fogo3.png");
  
  
  bala = loadImage ("v2-3fa8845efb02dc9142d1b5237ba56544_b.png");
  
  imagen_escudo = loadImage ("escudo.png");
  
  parede_imagen = loadImage ("parede.png");
  
  imagen_dano = loadImage ("dano.png");
  //player
  
  //outros
  
  imagen_nave_inimiga = loadImage ("nave inimiga.png");
  imagen_tiro_inimigo = loadImage ("tiro_inimigo.png");
  
  imagen_escudo_inimigo = loadImage   ("escudo_inimigo.png");
  
  asteroideImage = loadImage ("135-1350584_pixel-art-asteroid-sprite-hd-png-download (1).png");
  
  imagen_explosão = loadAnimation ("esplosão1.png","esplosão2.png","explosão3.png","explosão4.png","explosão5.png","explosão6.png");
  
  
  imagenplacar = loadImage ("painel.png");
  
  imagen_rifle = loadAnimation ("arma_energia.png");
  

  
  //outros
  
  
  
  imagen_botao_batalha = loadImage ("botão_batalha.png");
  
  
  
}



function setup() {
  createCanvas(640, 400);
  
  parede_jogador = createSprite (900,800,1,1);
  parede_jogador.addImage ("imagenparede",parede_imagen);
  
  
  
  //cenario
  cenario = createSprite (320,140,640,400);
  cenario.addImage ("espaçofundo",imagencenario);
  //cenario.y = cenario.height/2;
  
  imagencenario.height = 800;
  imagencenario.width = 640;
  //cenario
  
  
  //jogador
  tiro = createSprite (320,300,5,50);
  tiro.addImage ("balaço",bala);
  tiro.scale = 0.20;
  tiro.visible = false;
  
  
  nave = createSprite (320,330,40,40);
  nave.addImage ("nave",imagenave);
  nave.setCollider("circle",0,-15,30);
  nave.debug = false;
  imagenave.height = 100;
  imagenave.width = 100;
  
  escudo = createSprite (-20,-20,40,40);
  escudo.addImage ("proteção",imagen_escudo);
  escudo.scale = 0.60;
  escudo.visible = false;
  escudo.setCollider("circle",0,-40,90);
  escudo.debug = false;
 
  
  //jogador
  
  
      //assesorio
      //fogo = createSprite (320,370,20,20);
      //fogo.addAnimation ("exp",fogoex)

      //fogo.height = 10;
      //fogo.width = 10;
  
  
  explosao = createSprite (320,330,40,40);
  explosao.visible = false;
  


  //assesorio
  
  
  //outros
  
  
  //inimigo
  nave_inimiga = createSprite (320,100,40,40);
  nave_inimiga.addImage ("naveinimiga",imagen_nave_inimiga);
  nave_inimiga.scale = 0.35;
  nave_inimiga.visible = false;
  

  
  escudo_inimigo = createSprite (320,10,40,40);
  escudo_inimigo.addImage ("proteção_inimiga",imagen_escudo_inimigo);
  escudo_inimigo.visible = false;
  
  escudo_inimigo.scale = 0.60;
  
  tiro_inimigo = createSprite (-10,-10,40,40);
  tiro_inimigo.addImage("tiroteio",imagen_tiro_inimigo);
  tiro_inimigo.scale = 0.15;
  tiro_inimigo.visible = false;
  //fim_inimigo
  
      asteroide = createSprite (320,-20,40,40);
      asteroide.addImage ("obistaculo",asteroideImage);

      asteroideImage.height = 80;
      asteroideImage.width = 80;
  
  placar = createSprite (320,345,50,50);
      placar.addImage ("placar",imagenplacar);
      placar.scale = 0.35;
      
  
      energia1= createSprite (320,350,150,10);
      energia = createSprite (320,350,5,10);
      energia.shapeColor = "lightblue";
      vida = createSprite (320,365,150,12);
      vida = createSprite (320,365,150,12);
      vida.shapeColor = "lightgreen";
  
       parede = createEdgeSprites();
       parede_invisivel = createSprite (320,130,650,2);
       parede_invisivel.visible = false;
      
  arma_rifle = createSprite (50,360,40,40);
  arma_rifle.addAnimation ("animação",imagen_rifle);
  arma_rifle.scale = 0.25;
  
        //flag = 0;
  //outros
  
  
  //fundo
  
  seleçao = createSprite (320,200,640,400);
  seleçao.addImage ("seleçao",imagen_seleçao);
  seleçao.scale = 0.28;
  botao_batalha = createSprite (320,250,1,1);
  botao_batalha.addImage("botão_selecao",imagen_botao_batalha)
  botao_batalha.scale = 0.50;
  
  fundo = createSprite (320,250,640,400);
  fundo.addImage ("lobyfundo",imagenfundo);
  
  imagenfundo.height = 500;
  imagenfundo.width = 720;
  
  
  //fundo
  
  //grupos
  grupo_asteroides = new Group();
  varias_paredes = new Group();
  
  //grupos
  
  
  
}

function draw() {
  background("black");
  createEdgeSprites();
  //gerarAsteroide();
  
  varias_paredes.add(parede_jogador);
  
  
  //outros
  
  nave.collide(parede);
  nave_inimiga.collide(parede);
  nave_inimiga.collide(parede_invisivel);
  
  escudo.x = nave.x;
  escudo.y = nave.y;
  
  //outros
  
  
  if (keyWentDown("q") && energia.width > 20){     
    parede_jogador = createSprite (320,200,40,40);
    parede_jogador.addImage ("imagenparede",parede_imagen);
    parede_jogador.scale = 0.30;
    parede_jogador.x = nave.x;
    parede_jogador.y = nave.y;
    parede_jogador.lifetime = 300;  
    
    energia.width = energia.width - 20;
  }
  
  //if
  
  //modo de jogos
        if (keyDown("space") && estadojogo === "loby") {
          fundo.destroy();
          estadojogo = "seleçao";
        }
 
  
        if (keyDown("1") && estadojogo === "seleçao") {
          seleçao.destroy();
          estadojogo = "jogar";
          asteroide.velocityX = 1;
          asteroide.velocityY = 1;
        }
  
  
         if (mousePressedOver(botao_batalha) && estadojogo === "seleçao") {
             estadojogo = "batalha";
             seleçao.destroy();
             botao_batalha.destroy();
             
         }
  
   
        if (estadojogo === "batalha") {        
          gerar_nave_inimiga();
          nave_inimiga.visible = true;
          
            if (frameCount %1 === 0 ) {
             energia.width = energia.width + 0.50;
            }
            
           if (keyWentDown("w") && energia.width > 20 && escudo.visible === false) {
             
              tiro.visible = true;
              tiro.x = nave.x;
              tiro.y = nave.y;
              energia.width = energia.width - 15;
              tiro.velocityY = -50;
            }
          
              //escudo             
              if (keyDown("e") && energia.width > 10) {
               escudo.visible = true;
                
                if (frameCount %1 === 0) {
                  
                  energia.width = energia.width - 0.60;
                }
                
              }
          
              if (keyWentUp("e") || energia.width < 11) {   
               escudo.visible = false;
              }
              //escudo
        }
        
  

        if (estadojogo === "jogar") {
            cenario.velocityY = 0.70;
            gerarAsteroide();

          if (frameCount %5 === 0 ) {
           energia.width = energia.width + 1;
          }

           if (tiro.isTouching(asteroide)) {
            explosao = createSprite (320,330,40,40);

            explosao.visible = true;
            explosao.x = asteroide.x;
            explosao.y = asteroide.y;
            explosao.addAnimation ("qualquercoisa",imagen_explosão);

            asteroide.destroy();

            explosao.lifetime = 24;
         }
          
          


         if (cenario.y > 400) {
            cenario.y = 140; 
         }
          
              if (keyWentDown("e")) {
               escudo.visible = true;
              }
          
              if (keyWentUp("e")) {   
               escudo.visible = false;
              }

      }
  
   //modo de jogos

    

    if (energia.width > 149) {
        energia.width = 150;
    }

    //controle
      if (keyDown("right") && estadojogo === "jogar" || keyDown("right") && estadojogo === "batalha"){

          nave.x = nave.x + 8;
      }


      if (keyDown("left") && estadojogo === "jogar" ||  keyDown("left") && estadojogo === "batalha"){

          nave.x = nave.x - 8;

      }


      if (keyDown ("up") && estadojogo === "jogar"|| keyDown("up") && estadojogo === "batalha"){

        nave.y = nave.y - 8;
      
      }


      if (keyDown ("down") && estadojogo === "jogar"|| keyDown("down") && estadojogo === "batalha") {

        nave.y = nave.y + 8;
      
      }
      if (keyWentDown("w") && estadojogo === "jogar" &&    energia.width > 20) {


          tiro.visible = true;
          tiro.x = nave.x;
          tiro.y = nave.y;

        energia.width = energia.width - 15;

          tiro.velocityY = -50;
      }
    //controle

     if (tiro_inimigo.isTouching(varias_paredes)) {
        
        tiro_inimigo.destroy();
    }
  
  
  
  //console.log (cenario.y);
  
  
  //if

  
   
   drawSprites();
   
}

 //funcões

  function gerarAsteroide() {
    if (frameCount % 70 === 0) {
        
      asteroide = createSprite (320,-1,40,40);
      asteroide.addImage ("obistaculo",asteroideImage);

      asteroideImage.height = 80;
      asteroideImage.width = 80;
      
      asteroide.velocityX = Math.round(random(-1,-2))
      asteroide.velocityY = Math.round(random(1,3))
     
      asteroide.x = Math.round(random(20,620))
      
      
      //depth
      
  
  
      //depth
      
      grupo_asteroides.add(asteroide);
      
    }
  }

  function gerar_nave_inimiga() {
    
              escudo_inimigo.x = nave_inimiga.x;
    escudo_inimigo.y = nave_inimiga.y;
    
 
    
    
    if (frameCount %65 === 0) {
        
      escudo_inimigo = createSprite (320,10,40,40);
      escudo_inimigo.addImage ("proteção_inimiga",imagen_escudo_inimigo);
         escudo_inimigo.x = nave_inimiga.x;
    escudo_inimigo.y = nave_inimiga.y;
      escudo_inimigo.scale = 0.60;
      escudo_inimigo.visible = true;
      escudo_inimigo.lifetime = 10;
    }
    
    if (frameCount %5 === 0) {
        
        
        movimento_inimigo = Math.round(random(1,4))
        switch (movimento_inimigo){
            
            case 1: nave_inimiga.velocityX = nave_inimiga.velocityX + 3;break;
            
            case 2: nave_inimiga.velocityX = nave_inimiga.velocityX - 3;break;
            
            case 3 : nave_inimiga.velocityY = nave_inimiga.velocityY + 3;break;
            
            case 4 : nave_inimiga.velocityY = nave_inimiga.velocityY - 3;break;
            
        }
    }
    
    if (frameCount %20 === 0) {
        
      tiro_inimigo = createSprite (-10,-10,40,40);
      tiro_inimigo.addImage("tiroteio",imagen_tiro_inimigo);
      tiro_inimigo.scale = 0.15;
      
      tiro_inimigo.visible = true;
      
      tiro_inimigo.x = nave_inimiga.x;
      tiro_inimigo.y = nave_inimiga.y;
      
      tiro_inimigo.velocityY = 30;
      
      tiro_inimigo.depth = nave_inimiga.depth;
      nave_inimiga.depth = nave_inimiga.depth + 1;
      
        
    }
    
    if (tiro_inimigo.isTouching(nave)) {
      
      
        tiro_inimigo.destroy();
      
  
        vida.width = vida.width - 10;
    }
    
     if (tiro_inimigo.isTouching(escudo) && escudo.visible === true){
                  
                  tiro_inimigo.destroy();  
                    
    }
    
    
    tiro_inimigo.lifetime = 10;
    
  
    
  }


  
 //funçoes

