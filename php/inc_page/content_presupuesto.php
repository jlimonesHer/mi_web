<div class="caja1">
    <div class="form_header">
        <h1 class="form_title">Solicitud de presupuesto</h1>
    </div>
    <form action="" method="POST" name="presupuesto" id="presupuesto" autocomplete="on">
        <fieldset>
            <div class="div_form">
                <div class="input_form">
                    <label for="nombre" class="form_label">Nombre</label>
                    <input type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre" required>

                    <label for="apellidos" class="form_label">Apellidos</label>
                    <input type="text" id="apellidos" name="apellidos" placeholder="Escribe tus apellidos" require>

                    <label for="direccion" class="form_label">Direccion</label>
                    <input type="text" id="direccion" name="direccion" placeholder="Escribe tu direccion" required>

                    <label for="telefono" class="form_label">Telefono</label>
                    <input type="tel" id="telefono" name="telefono" value="" placeholder="Escribe tu telefono" maxlength="9" pattern="[0-9]{9}" required>

                    <label for="email" class="form_label">Email</label>
                    <input type="email" id="email" name="email" value="" placeholder="Escribe tu Email" required>
                </div>
                <div id="div_presupuesto" onchange="preFinal()">
                    <h2>¿Que tipo de web necesitas?</h2>

                    <select name="tipo" id="tipo" onchange="tipoWeb()">
                        <option value="elige" id="elige">Elige</option>
                        <option value="blog" id="blog">Blog</option>
                        <option value="e-commerce" id="ecomerce">E-commerce</option>
                        <option value="corporativa" id="corporativa">Corporativa</option>
                        <option value="personal" id="personal">personal</option>
                        <option value="foro" id="foro">Foro</option>
                    </select>

                    <h2>Plazo para la entrega en meses</h2>

                    <div class="tiempo">
                        <input type="number" id="meses" onchange="descuento()">
                    </div>

                    <h2>Marque las secciones que deseas</h2>

                    <div class="secciones" onchange="sd()">
                        <label for="check1" class="labelplus">Quienes somos
                            <input type="checkbox" name="plus" class="plus" id="check1">
                        </label>
                        <label for="check2" class="labelplus">Donde estamos
                            <input type="checkbox" name="check2" class="plus" id="check2">
                        </label>
                        <label for="check3" class="labelplus">Galeria de fotos
                            <input type="checkbox" name="check3" class="plus" id="check3">
                        </label>
                        <label for="check4" class="labelplus">eComerce
                            <input type="checkbox" name="check4" class="plus" id="check4">
                        </label>
                        <label for="check5" class="labelplus">Gestion interna
                            <input type="checkbox" name="check5" class="plus" id="check5">
                        </label>
                        <label for="check6" class="labelplus">Noticias
                            <input type="checkbox" name="check6" class="plus" id="check6">
                        </label>
                        <label for="check7" class="labelplus">facebook
                            <input type="checkbox" name="check7" class="plus" id="check7">
                        </label>
                        <label for="check8" class="labelplus">Twitter
                            <input type="checkbox" name="check8" class="plus" id="check8">
                        </label>

                    </div>


                </div>

                <div id="content_presupuesto">
                    <label id="label_pre">EL presupuesto es de :
                        <input type="text" id="pre" readonly> €
                    </label>
                </div>

            </div>
            <div class="span_pol">
                <label for="privacidad"><a href="#" class="politica">Terminos y condiciones</a></label>
                <input type="checkbox" name="privacidad" value="acepto" id="privacidad">
            </div>

            <div class="envio">
                <input type="submit" class="enviar" value="enviar datos" name="enviar" onclick="valFor(this.form);return false">
                <input type="reset" name="boton" value="Borrar formulario" class="enviar">
            </div>
        </fieldset>
    </form>

</div>
<script type="text/javascript" src="js/form.js"></script>
</div>