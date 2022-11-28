class sliderMain extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
                        <div class="slider">
                            <ul id="contenidoSlider"></ul>
                        </div>`;
  }
}

window.customElements.define("slider-main", sliderMain);

class noticiasMain extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
                        <div class="noticias"></div>
                        `;
  }
}

window.customElements.define("noticias-main", noticiasMain);

class crud extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
                    <div id="seccionCrud">
                        
                    </div>
                    `;
  }
}

window.customElements.define("seccion-crud", crud);

class formulario extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
                    <form id="formCrud" action="/crearNota" enctype="multipart/form-data" method="post">
                        <div class="inputsCrud">
                            <div id="imagenCrud" class="formStyles">
                            <input type="file" name="imagenCrud" />
                            </div>
                            <div id="tituloCrud" class="formStyles">
                            <input type="text" placeholder="Titulo" name="tituloCrud" />
                            </div>
                            <div id="subtituloCrud" class="formStyles">
                            <input type="text" placeholder="Subtitulo" name="subtituloCrud" />
                            </div>
                            <div id="cuerpoCrud">
                            <textarea name="cuerpo"></textarea>
                            </div>
                            <div id="btnSubmit" class="formStyles">
                            <input type="submit" value="Guardar" />
                            </div>
                        </div>
                    </form>
                      `;
  }
}

window.customElements.define("seccion-form", formulario);
