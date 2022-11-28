class seccionFecha extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
                        <div id="clima"></div>
                        <div id="fechaydolar">
                            <div id="fecha"></div>
                            <div id="barra"></div>
                            <div id="cotizacion"></div>
                        </div>`;
  }
}

window.customElements.define("seccion-fecha", seccionFecha);

class barraBotones extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
                            <button class="btn" id="economia">ECONOMÍA</button>
                            <button class="btn" id="politica">POLÍTICA</button>
                            <button class="btn" id="farandula">FARÁNDULA</button>
                            <button class="btn" id="finanzas">FINANZAS</button>
                            <button class="btn" id="clasificados">CLASIFICADOS</button>
                            <button class="btn" id="deportes">DEPORTES</button>
                            <button class="btn" id="internacional">INTERNACIONAL</button>
                            <button class="btn" id="columnistas">COLUMNISTAS</button>
                            <button class="btn" id="ciencia">CIENCIA</button>
                        `;
  }
}

window.customElements.define("barra-de-botones", barraBotones);

class cajaHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
                        <div id="cajaHeader">
                            <a id="logo"href="../../">T3NEWS</a>
                            <div id="cajaEditar">
                                <button id="btnEditar">
                                    <a href="../../crud">Tus noticias</a>
                                </button>
                            </div>
                            <div id="cajaBusqueda">
                                <label for="">
                                    <input type="text" placeholder="  Buscar" id="busqueda">
                                    <button id="submit">🔎</button>
                                </label>
                            </div>
                        </div>`;
  }
}

window.customElements.define("caja-header", cajaHeader);

class checkboxCaja extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
                        <label for="check" id="botonCheck">
                            <i class="fa-solid fa-bars"></i>
                        </label>`;
  }
}

window.customElements.define("checkbox-caja", checkboxCaja);
