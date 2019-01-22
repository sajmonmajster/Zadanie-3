class ToDoItem extends HTMLElement {

  constructor() {
    super();
    this._image = "";
    this._title = "";
  }

  get image() {
    if (this._image) {
      return this._image;
    } else {
      return "http://source.unsplash.com/800x800";
    }
  }

  get title() {
    return this._title;
  }

  static get observedAttributes() {
    return [ 'title', 'image', 'pinned' ];
  }

  attributeChangedCallback(name, oldVal, newVal) {

    switch(name) {
      case 'title':
        this._title = newVal;
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

      <div class="tile">

      <a target="_blank" href="#" class="feedLink">
        <div class="postPhoto">
          <img class="hero-image" src="${this.image}">
        </div>
        <div class="postInfo">
          <div class="source-wrapper">
            <span class="source" style="background-image: url(&quot;images/icon_invisionapp.png&quot;);"></span>
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
              word1, word2
            </span>
          </div>

        </div>
      </div>
    </div>
    `;

    this.innerHTML = template;
  }

}

window.customElements.define('todo-item', ToDoItem);
