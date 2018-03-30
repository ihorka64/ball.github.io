var canvas,ctx,ufo,space,x,y,vx,vy,loaded=0,angle=0;

function start(){
  canvas=document.createElement('canvas');
  canvas.width=600;
  canvas.height=400;
  document.body.appendChild(canvas);
  ctx=canvas.getContext('2d');
  
  ufo=new Image();
  space=new Image();
  space.src='space.jpg';
  ufo.src='ufo.png';
  ufo.onload=load;
  space.onload=load;
}

function load(){
  loaded++;
  if(loaded==2)init();
}

function init(){
  x=300;
  y=200;
  vx=Math.random()>0.5?2:-2;
  vy=Math.random()>0.5?2:-2;
  
  setInterval(loop,1000/60);
}

function loop(){
  ctx.drawImage(space,0,0,600,400);
  
  angle+=0.1;
  
  x+=vx;
  y+=vy;
  
  if(x<40){
    vx=Math.abs(vx);
  }else if(x>560){
    vx=-Math.abs(vx);
  }
  
  if(y<40){
    vy=Math.abs(vy);
  }else if(y>360){
    vy=-Math.abs(vy);
  }
  
  ctx.save();
    ctx.translate(x,y);
    ctx.rotate(angle);
    ctx.drawImage(ufo,-40,-40,80,80);
  ctx.restore();
}