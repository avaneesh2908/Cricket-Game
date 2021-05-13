var canvas;
var wicket,wicketImage;
var player,playerImage;
var ball,ballImage;
var one;
var two;
var three;
var four;
var six;
var out;
var pitch;
var bat,bat1,bat2;
var invisible,invisible2;
var invisibleBlock;
var score = 0;
var gameState;
var start;

function preload() {
    pitch = loadImage("pitch.png");
    wicketImage = loadImage("wicket.png");
    ballImage = loadImage("ball.png");
    playerImage = loadImage("player.png");
    bat1 = loadImage("bat2.png");
    bat2 = loadImage("bat1.png");
}

function setup() {
    canvas = createCanvas(1000,400);
    wicket = createSprite(100,230,10,100);
    wicket.addImage(wicketImage);
    wicket.scale = 0.8;
    wicket.setCollider("rectangle",0,0,200,70);
    player = createSprite(300,200,10,10);
    player.addImage(playerImage);
    invisibleBlock = createSprite(500,370,400,10);
    invisibleBlock.visible = false;
    ball = createSprite(1050,250,10,10);
    ball.addImage(ballImage);
    ball.scale = 0.2;
    invisible = createSprite(205,204,50,5);
    invisible.shapeColor=color(121,120,37);
    invisible2 = createSprite(205,208,50,5);
    invisible2.shapeColor=color(121,120,37);
    bat = createSprite(208,198,10,10);
    bat.addImage("batting", bat1);
    bat.scale=0.4;
    bat.setCollider("rectangle",0,0,15,20);
    one = createSprite(995,334,10,132);
    one.shapeColor = "red";
    two = createSprite(995,200,10,134);
    two.shapeColor = "blue";
    three = createSprite(995,67,10,134);
    three.shapeColor = "yellow";
    four = createSprite(890,5,200,10);
    four.shapeColor = "brown";
    six = createSprite(690,5,200,10);
    six.shapeColor = "purple";
    out = createSprite(295,5,590,10);
    out.shapeColor = "violet";
    start = createButton("Start");
    start.position(500,200);
}

function draw() {
    background(pitch);

    start.mousePressed(()=> {
        gameState = "play";
        score = 0;
        ball.velocityX = random(-25,-30);
        ball.velocityY = random(8,11);
        start.hide();
    })

    if(gameState == "play") {
        ball.bounceOff(invisibleBlock);

        if(keyDown("space")) {
            bat.addImage("batting", bat2);
            bat.y = 230;
        }
    
        if(keyWentUp("space")) {
            bat.addImage("batting", bat1);
            bat.y = 198;
        }
    
        if(ball.isTouching(bat)) {
            ball.bounceOff(bat);
            ball.velocityX = random(-1,15);
            ball.velocityY = random(3,-6);
            invisibleBlock.destroy();
        }
    
        if(ball.isTouching(one)) {
            score = score+1;
            ball.x = 850;
            ball.y = 250;
            ball.velocityX = random(-25,-30);
            ball.velocityY = random(8,11);
            invisibleBlock = createSprite(500,370,400,10);
            invisibleBlock.visible = false;
        }
    
        if(ball.isTouching(two)) {
            score = score+2;
            ball.x = 850;
            ball.y = 250;
            ball.velocityX = random(-25,-30);
            ball.velocityY = random(8,11);
            invisibleBlock = createSprite(500,370,400,10);
            invisibleBlock.visible = false;
        }
    
        if(ball.isTouching(three)) {
            score = score+3;
            ball.x = 850;
            ball.y = 250;
            ball.velocityX = random(-25,-30);
            ball.velocityY = random(8,11);
            invisibleBlock = createSprite(500,370,400,10);
            invisibleBlock.visible = false;
        }
    
        if(ball.isTouching(four)) {
            score = score+4;
            ball.x = 850;
            ball.y = 250;
            ball.velocityX = random(-25,-30);
            ball.velocityY = random(8,11);
            invisibleBlock = createSprite(500,370,400,10);
            invisibleBlock.visible = false;
        }
    
        if(ball.isTouching(six)) {
            score = score+6;
            ball.x = 850;
            ball.y = 250;
            ball.velocityX = random(-25,-30);
            ball.velocityY = random(8,11);
            invisibleBlock = createSprite(500,370,400,10);
            invisibleBlock.visible = false;
        }
    
        if(ball.isTouching(out) || ball.isTouching(wicket)) {
            gameState = "end";
        }

        if(ball.x<0 || ball.y>400) {
            ball.x = 850;
            ball.y = 250;
            ball.velocityX = random(-25,-30);
            ball.velocityY = random(8,11);
            invisibleBlock = createSprite(500,370,400,10);
            invisibleBlock.visible = false;
        }
    }

    if(gameState == "end") {
        textSize(45);
        fill("red");
        stroke("blue");
        text("You are OUT",400,150);
        ball.destroy();
        location.reload();
    }

    drawSprites();

    textSize(25);
    fill("black");
    text("1",988,334);
    text("2",988,200);
    text("3",988,67);
    text("4",890,18);
    text("6",690,18);
    text("OUT",295,18);

    textSize(30);
    fill("maroon");
    stroke("");
    text("Score : "+score,50,50);

    text("Press space to hit the ball",300,380)
}