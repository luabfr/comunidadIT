
    var usuarioYPassword = 'pepito2017,12345';
    var nombreDeUsuario = usuarioYPassword.substr( 0, 10 );
    var pass = usuarioYPassword.substr( 11, 17 );

    console.log(`El usuario ${nombreDeUsuario} tiene ${pass} como password`);
