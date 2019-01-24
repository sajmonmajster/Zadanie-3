class ToDoItem extends HTMLElement {

  constructor() {
    super();
    this.shadow = this.createShadowRoot();
    this._image = "";
    this._title = "";
    this._status = "";
  }

  get image() {
    if (this._image) {
      return this._image;
    } else {
      return "http://source.unsplash.com/800x800";
    }
  }

  get status() {
    return this._status;
  }  

  get title() {
    return this._title;
  }

  static get observedAttributes() {
    return [ 'title', 'image', 'status' ];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    var statusDot = this.shadow.querySelector('.created');

    switch(name) {
      case 'title':
        this._title = newVal;
      break;
      case 'status':
        this._status = newVal;
        if (statusDot) statusDot.className = "created " + newVal;
      break;
      case 'image':
        if (newVal != null && newVal != '') {
          this._image = newVal;
        } else {
          this._image = "http://source.unsplash.com/800x800";
        }
      break;
    }
  }

  connectedCallback() {
    var template = `

      <style>
        @import "stylesheets/index.css";
      </style>

      <div class="tile">

      <a target="_blank" href="#" class="feedLink">
        <div class="postPhoto">
          <img class="hero-image" src="${this.image}">
        </div>
        <div class="postInfo">
          <div class="source-wrapper">
            <span class="source ${this.status}"></span>
          </div>
          <h3 class="hero-title">${this.title}</h3>
          <span class="created">4 days ago</span>
        </div>
      </a>

      <div class="postMeta">

        <div class="details angular-animate">

          <span class="favorite icon-fav"></span>

          <div class="stats pull-right">
            <span title="" title-top="true">
              <a href="#">word1</a> , <a href="#">word2</a>
            </span>
          </div>

        </div>
      </div>
    </div>
    `;

    this.shadow.innerHTML = template;
  }

}

window.customElements.define('todo-item', ToDoItem);
