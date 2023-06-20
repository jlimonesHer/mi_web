<script src="js/form.js"></script>
        <script src="js/maps.js"></script>
        <script async
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBXZHQcvXebmIq7zRxwl8Ijh3RYA7sJ1uI&region=ES&language=es&callback=initMap">
            </script>
        <h1 class="form_title">Contacto</h1>
            <div class="div_contac">
                <h4>Jose Carlos Limones Hernandez</h4>
                <h4>josec.limones@gmail.com</h4>
                <h4>Telefono de contacto: 691541352</h4>
                <h4>Direccion: Calle Real Nº 82 B <br>El Viso del Alcor (41520)<br>Sevilla</h4>
                <h4>Si quieres recibir mas informacion <br>rellena nuestro formulario <br> y te llamarenos gratis <br> y
                    sin
                    compromiso.</h4>
            </div>

            <form class="div_form" action="" method="POST" name="form_contac">
                <fieldset>
                    <div class="input_form">
                        <label for="nombre" class="form_label">Nombre</label>
                        <input type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre">

                        <label for="apellidos" class="form_label">Apellidos</label>
                        <input type="text" id="apellidos" name="apellidos" placeholder="Escribe tus apellidos">

                        <label for="direccion" class="form_label">Direccion</label>
                        <input type="text" id="direccion" name="direccion" value="" placeholder="Escribe tu direccion">

                        <label for="telefono" class="form_label">Telefono</label>
                        <input type="tel" id="telefono" name="telefono" value="" placeholder="Escribe tu telefono">

                        <label for="mail" class="form_label">Email</label>
                        <input type="text" id="mail" name="mail" value="" placeholder="Escribe tu Email">
                    </div>
                    <div class="span_pol">
                        <label for="privacidad"><a href="#" class="politica">Terminos y condiciones</a></label>
                        <input type="checkbox" name="privacidad" value="acepto" class="privacidad">
                    </div>

                    <div id="button_contac">
                        <div class="envio">
                            <input type="submit" class="enviar" value="enviar datos" name="enviar"
                                onclick="valFor1(this.form); return false;">
                            <input type="reset" name="boton" class="enviar" value="Borrar formulario">
                        </div>
                    </div>
                </fieldset>
            </form>

            <div id="mapa"></div>
            <div id="container_map"></div>
            <div id="buttons_map">
                <input type="text" id="input_map" placeholder="Sevilla">
                <input type="button" value="Como llegar" id="button_map" onclick="calcularRuta()">
            </div>
