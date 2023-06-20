<?php session_start(); ?>
<div id="modificar">
    <table>
        <tr class="trreg">
            <td>Nombre</td>
            <td><?php 
            echo $_SESSION['nombre']; ?></td>
        </tr>
        <tr class="trreg">
            <td>Contraseña</td>
            <td><?php echo '****' ?></td>
        </tr>
        <tr class="trreg">
            <td>Email</td>
            <td><?php echo $_SESSION['email']; ?></td>
        </tr>
        <tr class="trreg">
            <td>Telefono</td>
            <td><?php echo $_SESSION['telefono']; ?></td>
        </tr>
        <tr class="trreg">
            <td>Rol</td>
            <td><?php echo $_SESSION['rol']; ?></td>
        </tr>
    </table>
</div>

<div id="actualizar">
    <a href="registo.php" class="btn_act" id="btn_modificar">Modificar usuario</a>
    <a href="borrar.php" class="btn_act" id="btn_baja">Baja de usuario</a>
</div>
</body>

</html>