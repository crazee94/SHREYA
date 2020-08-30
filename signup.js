class Form1 {

    constructor() {
      this.button = createButton('SIGN AS A CUSTOMER');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.greeting1 = createElement('h2');
      this.greeting2 = createElement('h2');
      this.fname = createElement('h4');
      this.lname = createElement('h4');
    

    }

    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
  
    }
  
    display(){
      this.title.html("APP NAME");
      this.title.position(550, 20);
  
      this.button.position(570, 120);
     
  
      this.button.mousePressed(()=>{
     

         
          this.fname.html("First Name");
          this.fname.position(450,60);
          
          this.lname.html("Last Name");
          this.lname.position(430,100);
          
          this.submit = createButton('SUBMIT');
          this.submit.position(550, 350);

            this.button.hide();
            
          this.submit.mousePressed(()=>{
           
            this.fname.hide();
            this.lname.hide();
        
            this.submit.hide();
            this.greeting1.html("Added Successfully");
            this.greeting1.position(540,100);
            
          });

        });
        

  
     
  
    }
  }