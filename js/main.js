// Header de la pagina (solo html)
let cad1 = `
<div class="logo">Matecito</div>
<input type="checkbox" id="toggle">
<label for="toggle"><img class="menu" src="./img/icon/bars-solid.svg" alt="menu"></label>

<nav class="navigation">

    <ul>
        <li><a href="a">Inicio</a></li>
        <li><a href="a">Nosotros</a></li>
        <li><a href="./formulario2.html" >Club Matecito</a></li>
        <li><a href="a">Contacto</a></li>
        <li><a href="a">Carrito<i class="fa-solid fa-cart-shopping"></i></a>
            <ul>
                <li><a href="a">Mates</a></li>
                <li><a href="a">Termos</a></li>
                <li><a href="a">Kit Matero</a></li>
                <li><a href="a">Varios</a></li>
            </ul>
        </li>
    </ul>
</nav>
`
document.querySelector("header").innerHTML=cad1

// Footer de la pagina (solo html)
let cad2 = `
<footer class="footer">
    <div class="container">
        <div class="footer-row">
            <div class="col-xs-12 col-sm-4">
                <div class="footer-links">
                    <h4>CONTACTO</h4>
                        <ul>
                            <li><a href="https://www.gmail.com/"> <img width="40px" src="./img/icon/mail.png"
                                        alt="">matecito@gmail.com</a> <br></li>
                            <li><a href="a"> <img width="40px" src="./img/icon/tel.png" alt="">1122334455</a><br></li>
                            <li><a href="a"> <img width="40px" src="./img/icon/ubicacion.png" alt="">Av.siempreviva 123</a></li>
                        </ul>
                </div>
            </div>
                <div class="footer-links">
                    <h4>MEDIOS DE PAGO</h4>
                        <ul>
                            <a href="a"> <img width="50px" height="27px" src="./img/icon/visa1.jpg" alt=""></a><br>
                            <a href="a"> <img width="50px" src="./img/icon/master1.jpg" alt=""></a><br>
                            <a href="a"> <img width="50px" src="./img/icon/mercadopago.png" alt=""></a>
                        </ul>
                </div>
                    <div class="footer-links">
                        <h4>SIGUENOS</h4>
                        <div class="social-links">
                            <ul>
                                <a href="a"><i class="fab fa-facebook-f "></i></a>
                                <a href="a"><i class="fab fa-instagram "></i></a>
                                <a href="a"><i class="fab fa-linkedin "></i></a>
                                <a href="a"><i class="fab fa-twitter"></i></a>
                            </ul>
                        </div>
                    </div>
        </div>
                <p class="firma" align="center">Copyright MATECITO.©2023</p>
    </div>
</footer>`
document.querySelector("footer").innerHTML=cad2