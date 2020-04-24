class Form{
    constructor(){
        this.greeting = createElement('h2');
        this.input = createInput("");
        this.input.style('width', '160px');
        this.email = createInput("");
        this.email.style('width', '160px');
        this.button = createButton('Submit'); 
        this.title = createElement('h2');
        this.name = createElement('h4');
        this.emailinput = createElement('h4');
        


        this.button.style('width','100px');
        this.button.style('height','40px');
        this.button.style('background','lavender');

        

        
        this.question1 = createElement('h4', "Q1. DO YOU USE A BUCKET AS APPOSED TO A SHOWER FOR BATHING");
        this.radio = createRadio('h4');
        this.radio.option('YES');
        this.radio.option('NO');
        this.radio.option('SOMETIMES');
        this.radio.style('width', '60px');

        
        this.question2 = createElement('h4', "Q2. DO YOU RESUSE THE WATER USED FOR COOKING AND CLEANING?");
        this.radio1 = createRadio('h5');
        this.radio1.option('YES');
        this.radio1.option('NO');
        this.radio1.style('width', '60px');

        
        this.question3 = createElement('h4', "Q3. DO YOU PRACTICE RAINWATER HARVESTING");
        this.radio2 = createRadio('h5');
        this.radio2.option('YES');
        this.radio2.option('NO');
        this.radio2.style('width', '60px');
        
        

        
    }
    display(){
        this.title.html("STUDENT SURVEY FORM");
        this.title.position(displayWidth/2 + 50 ,20);
        this.name.html("Your Name");
        this.name.position(displayWidth/2 + 50 ,125);
        this.input.position(displayWidth/2 + 300 , 155);
        this.emailinput.html("Your Email");
        this.emailinput.position(displayWidth/2 + 50 ,200);
        this.email.position(displayWidth/2 + 300 ,225);
        this.button.position(displayWidth/2 + 100, displayHeight-140);

        this.question1.position(displayWidth/2-100, 300);
        this.radio.position(displayWidth/2 +150, 337);
        
        this.question2.position(displayWidth/2-100, 400);
        this.radio1.position(displayWidth/2 +150, 460);

        this.question3.position(displayWidth/2-100, 500);
        this.radio2.position(displayWidth/2 +150, 560);


        this.button.mousePressed(() => {
            this.greeting.show();
            this.greeting.html("Thanks for your Submisssion!!");
            this.greeting.position(displayWidth/2-30,810);
            this.greeting.style('width', '500px');
            this.greeting.style('height', '50px');
            this.greeting.style('background','lavender');
            this.greeting.style('padding','30px');
            User.input = this.input.value();
            User.email = this.email.value();
            User.radio= this.radio.value();
            User.radio1= this.radio1.value();
            User.radio2= this.radio2.value();
            peopleCount += 1;
            User.index = peopleCount;
            User.update();
            User.updateCount(peopleCount);
            

            
        });
        
    }
}