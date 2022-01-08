export class GlassesList {
  constructor() {
    this.glist = [];
  }

  addGlasses(glasses) {
    this.glist.push(glasses);
  }

  renderGlasses() {
    //các thẻ HTML chứa nội dung của các đối tượng kính
    let content = '';
    content = this.glist.reduce((glContent, item, index) => {
      //glContent = glContent (nội dung cũ) + `Nội dung mới`
      glContent += `
          <div class="col-4">
              <img 
                class="img-fluid vglasses__items" 
                data-id="${item.id}" 
                src="${item.src}" 
                alt="Glasses"
                onclick="tryOnGlasses(event)" 
              >
          </div>
      `;
      // onClick para phải ghi rõ event
      return glContent;
    }, '');

    return content;
  }
}
