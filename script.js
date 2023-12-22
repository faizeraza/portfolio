body,html,.main-container{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
}
.main-container a{
    text-decoration: none;
}
body.div{
    align-items: flex-start;
    background: #FFF; 
}
.main-container{
    flex-direction: column;
    position: relative; 
    background: white;
}
.block1{
    height: fit-content;
    width: inherit;
    position: relative;
    flex-direction: row;
    justify-content: flex-start; 
    display: inline-flex;
}
.nav{
    left: 3%;
    position: absolute; 
    background: #FFF; 
    border-radius: 6px; 
    border: 1px white solid; 
    justify-content: center; 
    align-items: center; 
    gap: 9px; 
    display: inline-flex;
    height: fit-content;
}
.sub-4{
    left: 3%;
    margin-top: 12%;
    margin-bottom: 10%;
    position: relative; 
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
    gap: 24px;
}
.Home{
    width: 35%; text-align: center; color: #A53DFF; font-size: 15px; font-family: 'Poppins', sans-serif; font-weight: 600; line-height: 35px; word-wrap: break-word;
}
.sub-4-1-1{
    flex-direction: row; justify-content: flex-start; align-items: flex-start; display: flex;
}
.sub-4-1-1-name{
    color: #132238; font-size: 3vw; font-family:'Poppins', sans-serif; font-weight: 500; line-height: 60px; word-wrap: break-word; display: inline;
    text-shadow: 0 0 20px #A53DFF;
}
.about{
    width: 648px; color: #556070; font-family:'Poppins', sans-serif; font-size: 18px; font-weight: 400; line-height: 24px; word-wrap: break-word; margin-bottom: 24px;
    text-shadow: 0 0 20px #fec45f;
}
#sub-6{
    /* left: 4.3%; 
    top: 353px;  */
    margin-top: 24px;
    position: relative; 
    background: rgba(237, 216, 255, 0.50); 
    border-radius: 6px; 
    border: 1px white solid; 
    justify-content: center; 
    align-items: center; 
    gap: 9px; 
    display: inline-flex;
    box-shadow :  20px 20px 10px rgba(43, 56, 76, 0.09);

}
.sectionSGPA{
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
    gap: 5px; 
    display: inline-flex;
}
#section-1{
    width: 160px; text-align: center; color: #424E60; font-size: 28px; font-family: 'Poppins', sans-serif; font-weight: 600; line-height: 35px; word-wrap: break-word;
}
#section-2{
    width: 160px; text-align: center; color: #697484; font-size: 14px; font-family: 'Poppins', sans-serif; font-weight: 400; line-height: 21px; word-wrap: break-word;
}
.sectionSolvedProblems{
    flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 5px; display: inline-flex;
}
.contributions{
    flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 5px; display: inline-flex;
}
.hello-button{
    padding: 10px 10px;
    background: #A53DFF; 
    border-radius: 10px; 
    text-align: center; 
    gap: 12px; 
    display: inline-flex; 
    color: white;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500; 
    cursor: pointer; 
    -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    position: relative;
    border: #FFF;
}

.hello-button:hover{
    box-shadow: 0 30px 90px 0 #FFF,0 30px 30px 0 #A53DFF;
}

#image-container {
    width: 436px; 
    height: 536px; 
    margin-left: 5%;
    margin-top: 3%;
    position: relative; 
    background: linear-gradient(0deg, white 0%, white 100%); 
    border-radius: 25px; object-fit:cover ;
    perspective: 500px;
    z-index: 1;
    box-shadow :  20px 20px 10px rgba(43, 56, 76, 0.09);
}

#image-container img {
    transform-style: preserve-3d;
    transition: transform 0.2s ease-in-out;
}

#image-container:hover img {
        transform: translateZ(100px) rotateX(5deg) rotateY(5deg);
}   

#sub-7{
    width: 80px;
    margin-left: 6%;
    margin-top: 15%;
    height:fit-content;
    position: relative; 
    background: rgba(237, 216, 255, 0.50); 
    border-radius: 6px; 
    border: 1px white solid; 
    align-items: center; 
    display: inline-flex;
    flex-direction: column;
}

#section-a{
    padding-top: 5px; padding-left: 20px; width: 60px; align-content: center; color: #424E60;
}

#section-b{
    padding-bottom: 5px; text-align: center; color: #697484; font-size: 10px; font-family: 'Poppins', sans-serif; font-weight: 400; line-height: 21px;
}

.cursor {
    position: fixed;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    z-index: 999;
    filter: blur(20px);
    /* animation: swirl 3s ease-in-out infinite; */
    -webkit-transition-duration: 1s; 
    transition-duration: 1s;
    background: 30px 30px#A53DFF;
}
  
  /* @keyframes swirl {
    from {
        box-shadow: 0 30px 30px 0 #A53DFF,0 50px 50px 0 #A53DFF;
        transform: scale(1.5);

    }
    to {
        box-shadow: 0 30px 30px 0 #A53DFF,0 50px 50px 0 #A53DFF;
        transform: scale(0.5);

    }
  } */

.cursor1{
    position: fixed;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    z-index: 999;
    filter: blur(10px);
    /* animation: swirl1 3s ease-in-out infinite; */
    -webkit-transition-duration: 1.2s; 
    transition-duration: 1.2s;
    background: linear-gradient(181deg, #FFDFA8 0%, rgba(255, 225.79, 175.72, 0.96) 0%, rgba(255, 234, 198, 0.67) 100%, rgba(249.69, 210.59, 143.57, 0.80) 100%);
}
.section-titles{
    width: fit-content; color: #132238; font-family:'Poppins', sans-serif; font-size: 20px; font-weight: 400; line-height: 24px; word-wrap: break-word;
    text-shadow: 0 0 10px #A53DFF ;
}
.Projects{
    width: 100%;
    height: fit-content;
}
.VA{
    margin-left: 3%; 
    margin-top: 2%;

    flex-direction: row;
    justify-content: flex-start; 
    display: inline-flex;
}
.numbering{
    justify-content: end; width: fit-content; color: #556070; font-family:'Poppins', sans-serif; font-size: 18px; font-weight: 200; line-height: 24px; word-wrap: break-word;
    text-shadow: 0 0 8px #fec45f;margin-top: -2%;
}
.projectimg{
    margin-left: 10%; width: 70%; height: 90%; border-radius: 25px; object-fit:cover ;
    box-shadow :  20px 20px 10px rgba(43, 56, 76, 0.09); margin-bottom: 2%;
}
.projectimg:hover{
    transform: scale(1.03);
    -webkit-transition-duration: 1.6s; 
    transition-duration: 1.6s;
}
.projectabout{
    width: 70%; height: fit-content; color: #556070; font-family:'Poppins', sans-serif; font-size: 1vw; font-weight: 400; line-height: 24px; word-wrap: break-word; 
    justify-content: center;margin-left: 10%;
}
.break {
    flex-basis: 100%;
    height:0;
  }
.stack{
    width: 60%; height: fit-content; color: #556070; font-family:'Poppins', sans-serif; font-size: 15px; font-weight: 400; line-height: 24px; word-wrap: break-word;
    justify-content: center;margin-left: 10%; text-align: center;flex-direction:row; flex-wrap: wrap;display: flex;margin-top: 2%;
}
.capsule{
    width: fit-content; background: #A53DFF; border-radius: 15px; padding: 3px;margin: 5px;
}
.capsule:hover{
    transform: scale(1.03);
    box-shadow: 0 0 8px #fdb63b;
    -webkit-transition-duration: 1s; 
    transition-duration: 1s;
}
#Vagif{
    width: 40%; height: 70%; margin-top: -80%; margin-left: 35%; margin-bottom: 7%;
}
.front-end{
    margin-top: 2%;
    margin-left: 3%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.bubble{
    width: 30%;
    height: 92px;
    margin-top: 2%;
    margin-left: 2%;
    position: relative;
    font-family:'Poppins', sans-serif;
    text-align: center;
}
.skill-set{
    height: fit-content;
    width: 28%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-shadow: 20px 20px 8px rgba(145, 152, 163, 0.09);
}
.skill-about{
    width: 40%; height: fit-content; color: #556070; font-family:'Poppins', sans-serif; font-size: 1vw; font-weight: 400; line-height: 24px; word-wrap: break-word; 
    justify-content: center;margin-right: 5%;margin-left: 5%;
}
/* article:first-of-type {
	--base: 270;
	--spread: 40;
	--outer: 1;
}
article:last-of-type {
	--outer: 1;
	--base: 270;
	--spread: 40;
} */
*,
*:after,
*:before {
	box-sizing:border-box;
}
article {
    aspect-ratio: 3 / 4;
    border-radius: 10%;
    padding: 1rem;
    gap: 1rem;
    backdrop-filter: blur(calc(var(--cardblur, 5) * 1px));
  }
  /* Glow specific styles */
[data-glow] {
    --base:220;
    --spread:60;
    --border-size: calc(var(--border, 2) * 1px);
    --spotlight-size: calc(var(--size, 150) * 1px);
    --hue: calc(var(--base) + (var(--xp, 0) * var(--spread, 0)));
    background-image: radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.1)), transparent
    );
    background-color: var(--backdrop, transparent);
    background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
    background-position: 50% 50%;
    background-attachment: fixed;
    border: var(--border-size) solid var(--backup-border);
    position: relative;
    touch-action: none;
  }
  
  [data-glow]::before,
  [data-glow]::after {
    pointer-events: none;
    content: "";
    position: absolute;
    inset: calc(var(--border-size) * -1);
    border: var(--border-size) solid transparent;
    border-radius: 10%;
    background-attachment: fixed;
    background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
    background-repeat: no-repeat;
    background-position: 50% 50%;
    mask:
      linear-gradient(transparent, transparent),
      linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    mask-composite: intersect;
  }
  
  /* This is the emphasis light */
  [data-glow]::before {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)), transparent 100%
    );
    filter: brightness(2);
  }
  /* This is the spotlight */
  [data-glow]::after {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(0 100% 100% / var(--border-light-opacity, 1)), transparent 100%
    );
  }
  [data-glow] [data-glow] {
    position: absolute;
    inset: 0;
    will-change: filter;
    opacity: var(--outer, 1);
  }
  [data-glow] > [data-glow] {
    border-radius: 10%;
    border-width: calc(var(--border-size) * 20);
    /* filter: blur(calc(var(--border-size) * 10)); */
    background: none;
    pointer-events: none;
  }
  [data-glow] > [data-glow]::before {
    inset: -10px;
    border-width: 10px;
  }
  [data-glow] [data-glow] {
    border: none;
  }
  [data-glow] :is(a, button) {
    border-radius: 10%;
    border: var(--border-size) solid transparent;
  }
  [data-glow] :is(a, button) [data-glow] {
    background: none;
  }
  [data-glow] :is(a, button) [data-glow]::before {
    inset: calc(var(--border-size) * -1);
    border-width: calc(var(--border-size) * 1);
  }
/* @keyframes swirl1 {
    from {
        background: linear-gradient(181deg, #FFDFA8 0%, rgba(255, 225.79, 175.72, 0.96) 0%, rgba(255, 234, 198, 0.67) 100%, rgba(249.69, 210.59, 143.57, 0.80) 100%);
        transform: scale(1.5);

    }
    to {
        background:linear-gradient(181deg, #FFDFA8 0%, rgba(255, 225.79, 175.72, 0.96) 0%, rgba(255, 234, 198, 0.67) 100%, rgba(249.69, 210.59, 143.57, 0.80) 100%);
        transform: scale(0.5);
    }
  } */

@media all and (max-device-width: 1300px) { 
    body,html,.main-container{
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }
    .main-container{
        position: relative;
        flex-direction: column;
        background: white;
    }
    .main-container a{
        text-decoration: none;
    }
    body.div{
        align-items: flex-start;
        background: #FFF; 
    }
    .nav{
        left: 3%;
        top: 0px;
        position: absolute; 
        background: #FFF; 
        border-radius: 6px; 
        border: 1px white solid; 
        justify-content: center; 
        align-items: center; 
        gap: 9px; 
        display: inline-flex;
        height: fit-content;
    }
    .Home{
        width: 35%; text-align: center; color: #A53DFF; font-size: 10px; font-family: 'Poppins', sans-serif; font-weight: 600; line-height: 35px; word-wrap: break-word;
    }
    .block1{
        height: fit-content;
        width: fit-content;
        position: relative;
        flex-direction: column-reverse;
        justify-content: flex-start; 
        display: inline-flex;
    }
    #image-container {
        top: 5%;
        margin-left: 30%;
        width: 200px; 
        height: 200px; 
        position: absolute; 
        background: linear-gradient(0deg, white 0%, white 100%); 
        box-shadow: 0px 24px 116px rgba(145, 152, 163, 0.09); 
        border-radius: 100px; 
        object-fit:cover ;
        perspective: 500px;
    }
    #image-container img {
        transform-style: preserve-3d;
        transition: transform 0.2s ease-in-out;
    }
    #image-container:hover img {
            transform: translateZ(100px) rotateX(5deg) rotateY(5deg);
    }   
    .sub-4{
        left: 4%; 
        margin-top: 80%;
        width: 300px;
        height: fit-content;
        position: relative ; 
        flex-direction: column; 
        justify-content: flex-start; 
        align-items: flex-start; 
        gap: 5px; 
        display: inline-flex;
    }
    .sub-4-1-1{
        flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex;
    }
    .sub-4-1-1-name{
        color: #132238; font-size: 3vw; font-family:'Poppins', sans-serif; font-weight: 400px; line-height: 25px; word-wrap: break-word; display: inline;
    }
    .about{
        width:70%; font-size:2vw; font-weight: 300%; line-height: 24px; word-wrap: break-word;
    }
    .hello-button{
        padding: 05px 09px;
        background: #A53DFF; 
        border-radius: 10px; 
        text-align: center; 
        gap: 10px; 
        display: inline-flex; 
        color: white;
        font-size: 2vw;
        font-family: 'Poppins', sans-serif;
        font-weight: 600; 
        cursor: pointer; 
        -webkit-transition-duration: 0.4s; 
        transition-duration: 0.4s;
    }
    .hello-button:hover{
        box-shadow: 0 50px 50px 0 #A53DFF,0 50px 50px 0 #A53DFF;
    }
    #sub-6{
        position: relative; 
        background: rgba(237, 216, 255, 0.50); 
        border-radius: 6px; 
        border: 1px white solid; 
        justify-content: center; 
        align-items: center; 
        gap: 1px; 
        display: inline-flex;
    }
    .sectionSGPA{
        flex-direction: column; 
        justify-content: flex-start; 
        align-items: flex-start; 
        gap: 1px; 
        display: inline-flex;
    }
    .sectionSolvedProblems{
        flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 1px; display: inline-flex;
    }
    .contributions{
        flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 1px; display: inline-flex;
    }
    #section-1{
        width: 75px; text-align: center; color: #424E60; font-size: 12px; font-family: 'Poppins', sans-serif; font-weight: 400; line-height: 25px; word-wrap: break-word;
    }
    #section-2{
        width: 75px; text-align: center; color: #697484; font-size: 08px; font-family: 'Poppins', sans-serif; font-weight: 200; line-height: 11px; word-wrap: break-word;
    }
    #sub-7{
        left: 100%; 
        top: 10%;
        width: fit-content;
        position: absolute; 
        background: rgba(237, 216, 255, 0.50); 
        border-radius: 6px; 
        border: 1px white solid; 
        gap: 1px;
        flex-direction: column;
        align-items: center;
    }
    .github{
        width: fit-content;
        flex-direction: column; 
        gap: 5px; 
    }
    #section-a{
        padding-top: 5px; width:60px; color: #424E60; position: relative; padding-right: 15px;
    }
    #section-b{
        padding-bottom: 5px; color: #697484; font-size: 10px; font-family: 'Poppins', sans-serif; font-weight: 400; line-height: 21px;
    }
    .cursor {
        position: fixed;  
        width: 10px;
        height: 30px;
        border-radius: 50%;
        z-index: 999;  
        /* animation: swirl 5s ease-in-out infinite; */
        -webkit-transition-duration: 1s; 
        transition-duration: 1s;   
    }
    .cursor1{
        position: fixed;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        z-index: 999;
        filter: blur(10px);
        /* animation: swirl1 3s ease-in-out infinite; */
        -webkit-transition-duration: 1.2s; 
        transition-duration: 1.2s;
        background: linear-gradient(181deg, #FFDFA8 0%, rgba(255, 225.79, 175.72, 0.96) 0%, rgba(255, 234, 198, 0.67) 100%, rgba(249.69, 210.59, 143.57, 0.80) 100%);
    }
    .section-titles{
        width: fit-content; color: #132238; font-family:'Poppins', sans-serif; font-size: 20px; font-weight: 400; line-height: 24px; word-wrap: break-word;
        text-shadow: 0 0 20px #A53DFF ;
    }
    .Projects{
        width: 100%;
        height: fit-content;
    }
    .VA{
        margin-left: 3%; 
        margin-top: 2%;
        flex-direction: column;
        justify-content: flex-start; 
        display: inline-flex;
    }
    .numbering{
        justify-content: end; width: fit-content; color: #556070; font-family:'Poppins', sans-serif; font-size: 18px; font-weight: 400; line-height: 24px; word-wrap: break-word;
    }
    .projectimg{
        margin-top: 2%; margin-left: 10%; width: 70%; height: 70%; border-radius: 25px; object-fit:cover ;
        box-shadow :  10px 10px 10px rgba(43, 56, 76, 0.09); margin-bottom: 2%;opacity: 1;
    }
    .projectabout{
        width: 70%; height: fit-content; color: #556070; font-family:'Poppins', sans-serif; font-size: 10px; font-weight: 400; line-height: 20px; word-wrap: break-word; margin-bottom: 24px;
        justify-content: center;margin-left: 10%; 
    }
    #Vagif{ width: 40%; height: 40%; margin-top: -110%; margin-left: 35%; margin-bottom: 7%;}
    .front-end{
        margin-top: 2%;
        margin-left: 3%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .skill-set{
        margin-top: 3%;
        margin-bottom: 6%;
        height: fit-content;
        width: 70%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        box-shadow: 20px 20px 8px rgba(145, 152, 163, 0.09);
    }
    .skill-about{
        width: 70%; height: fit-content; color: #556070; font-family:'Poppins', sans-serif; font-size: 10px; font-weight: 400; line-height: 20px; word-wrap: break-word; 
        justify-content: center;margin-right: 5%;margin-left: 5%;
    }
    /* .stack
    {

    } */
    /* @keyframes swirl {
        from {
            box-shadow: 0 30px 30px 0 #A53DFF,0 50px 50px 0 #A53DFF;
            transform: scale(1.5);
    
        }
        to {
            box-shadow: 0 30px 30px 0 #A53DFF,0 50px 50px 0 #A53DFF;
            transform: scale(0.5);
    
        }
      } */
}
