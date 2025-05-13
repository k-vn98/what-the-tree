class Modal{
  constructor(text,content){
    this.text = text;
    this.content = content;
  }
  render(container){
    this.button = document.createElement("div");
    this.button.innerHTML = this.text;
    this.button.addEventListener("click",()=>{
      this.modal.style.display = "block";
    })
a
    this.modal = document.createElement("div");
    this.modal.setAttribute("class","modal");

    this.modal_content = document.createElement("div");
    this.modal_content.setAttribute("class","modal-content");

    this.modal_header = document.createElement("div");
    this.modal_header.setAttribute("class","modal-header");

    this.modal_body = document.createElement("div");
    this.modal_body.setAttribute("class","modal-body");
    console.log(typeof(this.content) == "object")
    if(typeof(this.content) == "object"){
      this.modal_body.append(this.content);
    }else{
      this.modal_body.innerHTML = this.content;
    }
    
    this.closeButton = document.createElement("span");
    this.closeButton.setAttribute("class","close");
    this.closeButton.innerHTML = "&times";
    this.closeButton.addEventListener("click",()=>{
      this.modal.style.display = "none";
    })

    this.modal_header.append(this.closeButton);
    this.modal_content.append(this.modal_header);
    this.modal_content.append(this.modal_body);
    this.modal.append(this.modal_content);

    document.getElementById(container).append(this.button)
    document.getElementById(container).append(this.modal)
  }
}

class FlipCard{
  constructor(front,back){
    this.front = front;
    this.back = back;
  }
  render(container){
    this.obj = document.createElement("div");
    this.obj.setAttribute("class","flip-card");
    this.obj.addEventListener("click",()=>{
      // console.log(this.obj);
      // spamm-y feature
      this.obj.classList.toggle("flip");
    })
    let build = "";
    build += `<div class="flip-front">${this.front}</div>`
    build += `<div class="flip-back">${this.back}</div>`

    this.obj.innerHTML = build
    document.getElementById(container).append(this.obj)
  }
}

class Collapsible{
  constructor(text,content){
    this.text = text;
    this.content = content;
  }
  render(container){
    this.button = document.createElement("button");
    this.button.setAttribute("class","collapsible");
    this.button.innerHTML = this.text;

    this.div = document.createElement("div");
    this.div.setAttribute("class","content");
    this.div.innerHTML = this.content;

    this.button.addEventListener("click",function(){
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    })

    document.getElementById(container).append(this.button)
    document.getElementById(container).append(this.div)
  }
}

class Gallery{
  constructor(images){
    this.index = 0;
    this.images = images;
  }
  render(container){
    this.obj = document.createElement("img");
    this.obj.src = this.images[0];
    this.obj.addEventListener("click",()=>{
      this.next();
    })
    if(container){
      document.getElementById(container).append(this.obj)
    }else{
      return this.obj;
    }
    
  }
  next(){
    this.index++;
    this.obj.src = this.images[this.index % this.images.length];
  }
  play(){
    this.next();
    setTimeout(this.play.bind(this),1000);
    //https://coursesweb.net/javascript/settimeout-this-class-function-javascript_t#:~:text=setTimeout()%20can%20be%20used,with%20the%20special%20word%20this%20.
  }
}