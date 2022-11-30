class bloqueUno extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = `
                        <div class="lugar1">   
                            <caja-logo></caja-logo>
                            <caja-relleno></caja-relleno>
                            <caja-redes></caja-redes>
                        </div>`
    }
}

window.customElements.define("bloque-1",bloqueUno)

class bloqueDos extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = `
                        <div class="lugar2">
                            <small>&copy; 2022 <b>T3News</b> - Todos los Derechos Reservados.</small>
                        </div>
                        `
    }
}

window.customElements.define("bloque-2",bloqueDos)

class cajaLogo extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = `
                        <div class="caja">
                            <a href="#" id="logo">T3NEWS</a>
                        </div>
                        `
    }
}

window.customElements.define("caja-logo",cajaLogo)

class cajaRelleno extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = `
                        <div class="caja">
                            <h2>Sobre nosotros</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, quae.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, quae.</p>
                        </div>
                        `
    }
}

window.customElements.define("caja-relleno",cajaRelleno)

class cajaRedes extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = `
                        <div class="caja" id="cajaRedes">
                            <h2>Siguenos</h2>
                            <caja-redes-detalle></caja-redes-detalle>
                        </div>
                        `
    }
}

window.customElements.define("caja-redes",cajaRedes)

class cajaRedesDetalle extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = `
                        <div class="red-social">
                            <a href="#" class="fa fa-facebook"></a>
                            <a href="#" class="fa fa-instagram"></a>
                            <a href="#" class="fa fa-twitter"></a>
                            <a href="#" class="fa fa-youtube"></a>
                            <a href="/doc" target="_blank" class="fa-solid fa-book"></a>
                        </div>
                        `
    }
}

window.customElements.define("caja-redes-detalle",cajaRedesDetalle)