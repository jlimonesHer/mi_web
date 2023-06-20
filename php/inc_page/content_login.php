<div class="form_header">
    <h1 class="form_title">Log in</h1>
</div>

<div id="login">
    <form method="POST" action=""  id="formLogin">
        <fieldset>
            <div id="div_login">
                <label for="usuario">Usuario</label>
                <input type="text" name="usuario" id="usuario" class="plus"><br>

                <label for="password">Contraseña</label>
                <input type="password" name="password" id="password" class="plus"><br>
            </div>
            <input type="submit" value="Entrar" id="btn_submit">
        </fieldset>
    </form>
</div>
<input type="button" value="Registrate" class="enviar" id="boton_reg">

<div id="respuesta">
</div>
<a href="php/includes/salir.php" class="enviar" id="close_session">Cerrar sesion</a>