<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <link rel="stylesheet" href="./assets/css/template.css">
        <link rel="stylesheet"href="./assets/css/materialize.min.css">


    </head>
    <body>

        <nav>

            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Maquina de Turing</a>
            </div>
        </div>
    </nav>

    <div class="contanner">
        <?php $this->loadViewInTemplate($viewName, $viewData); ?>
    </div>
    <script type="text/javascript" src="./assets/js/jquery.js"></script>
    <script type="text/javascript" src="./assets/js/jquery.form.js"></script>

    <script type="text/javascript" src="./assets/js/materialize.min.js"></script>
    <script type="text/javascript" src="./assets/js/template.js"></script>
</body>
</html>
