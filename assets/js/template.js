$(document).ready(function () {


    $('select').formSelect();
    $(".SelectDivisao").fadeIn(); //Operação Default

    $('form[name="checksOperation"]').submit(function (event) {

        event.preventDefault();
        var type = $(this).attr('type');
        //Pega os valores do formulario
        var n1 = parseFloat($('input[name=numero1]').val());
        var n2 = parseFloat($('input[name=numero2]').val());
        //1-verificar campos vazio e mostrar alert
        //2-deve aceitar somente numeros
        //3-não deve fazer refresh na pagina

        switch (type) {
            case 'divisao':
                divisao(n1, n2);
                break;
            case 'igualdade':
                igualdade(n1, n2);
                break;
            default:

        }

    });
});
//Mostra Operação
function showOperation() {

    var operacao = document.getElementById("mySelect").value;
    var isVisible = $(".verifica").is(":visible");
    $(".verifica").fadeOut("fast", function () {
        if (operacao == '1') {//Operação Soma
            $(".SelectDivisao").delay("fast").fadeIn("slow");
        } else if (operacao == '2') {//Operação multiplicação
            $(".SelectIgualdade").delay("fast").fadeIn("slow");
        } else if (operacao == '3') {//Operação Divisão

        }
    });
}
function converter(n1, n2) {

    var first = [], second = [], fita = [];
    for (var i = 0; i < n1; i++) {
        first[i] = "*";
    }
    for (var i = 0; i < n2; i++) {
        second[i] = "*";
    }

    var qt = n1 + n2;
    var vazio = [];
    for (var i = 0; i < qt * 2; i++) {
        vazio[i] = "_";
    }

    var init = [">"];
    fita = init.concat(first, "_", second, vazio);
    return fita;
}

function espacetounderline(escrito) {
    if (escrito === ' ') {
        escrito = '_';
    }
}

function underlinetoespace(escrito) {
    if (escrito === '_') {
        escrito = ' ';
    }
}

function resultadoDivisao(fita) {

    var i = 0, resultado = 0, estado = 0;
    do {
        if (fita[i] === '>' && estado === 0) {
            i++;
        } else
        if (fita[i] === '_' && estado === 0) {
            i++;
        } else
        if (fita[i] === '*' && estado === 0) {
            estado = 1;
        } else
        if (fita[i] === '*' && estado === 1) {
            resultado++;
            i++;
        } else
        if (fita[i] === '_' && estado === 1) {
            estado = 2;
        }

    } while (estado !== 2);
    return resultado;
}
function restoDivisao(fita) {

    var i = 0, resto = 0, estado = 0;
    do {
        if (fita[i] === '>' && estado === 0) {
            i++;
        } else
        if (fita[i] === '_' && estado === 0) {
            i++;
        } else
        if (fita[i] === '*' && estado === 0) {
            estado = 1;
        } else
        if (fita[i] === '*' && estado === 1) {
            i++;
        } else
        if (fita[i] === '_' && estado === 1) {
            estado = 2;
            i++;
        } else
        if (fita[i] === '*' && estado === 2) {
            resto++;
            i++;
        } else
        if (fita[i] === '_' && estado === 2) {
            estado = 3;
        }

    } while (estado !== 3);
    return resto;
}
//var fita = converter(n1, n2);
/*
 * 
 *  $('.resultado').html(read);
 
 $('.resultado .teste').html(fita[pos]);
 
 break;
 */
function divisao(n1, n2) {





    //var fita = [">","*","*","*","*","*","*"];
    var fita = converter(n1, n2);

    var estado = "->", nextQ, direcao;
    var lido, escrito;
    var fim = 0;
    var pos = 0;

    var read = [];

    var cont = 0;
    do {
        if (estado === "->" && fita[pos] === ">") {
            lido = ">";
            escrito = ">";
            nextQ = "q0";
            direcao = "Dir";
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            fita[pos] = escrito;
            estado = nextQ;
            pos++;



            //system("PAUSE");
        } else if (estado === "q0" && fita[pos] === "*") {
            lido = "*";
            escrito = "*";
            nextQ = "q0";
            direcao = "Dir";
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            fita[pos] = escrito;
            estado = nextQ;
            pos++;
            //system("PAUSE");
        } else if (estado === "q0" && fita[pos] === '_') {
            lido = '_';
            escrito = '_';
            nextQ = "q1";
            direcao = "Dir";
            espacetounderline(escrito);
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            underlinetoespace(escrito);
            fita[pos] = escrito;
            estado = nextQ;
            pos++;

            //system("PAUSE");
        } else if (estado === "q0" && fita[pos] === "A") {
            lido = "A";
            escrito = "A";
            nextQ = "q3";
            direcao = "Esq";
            cont++;
            espacetounderline(escrito);
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            underlinetoespace(escrito);
            fita[pos] = escrito;
            estado = nextQ;
            pos--;


        } else if (estado === "q1" && fita[pos] === "*") {
            lido = "*";
            escrito = "*";
            nextQ = "q1";
            direcao = "Dir";
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            fita[pos] = escrito;
            estado = nextQ;
            pos++;



            //system("PAUSE");
        } else if (estado === "q1" && fita[pos] === "_") {
            lido = "_";
            escrito = "_";
            nextQ = "q2";
            direcao = "Esq";
            espacetounderline(escrito);

            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            underlinetoespace(escrito);
            fita[pos] = escrito;
            estado = nextQ;
            pos--;


            //system("PAUSE");
        } else if (estado === "q1" && fita[pos] === "A") {
            lido = "A";
            escrito = "A";
            nextQ = "q2";
            direcao = "Esq";

            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            fita[pos] = escrito;
            estado = nextQ;
            pos--;


            //system("PAUSE");
        } else if (estado === "q2" && fita[pos] === "*") {


            lido = '*';
            escrito = 'A';

            //alert(escrito);
            nextQ = 'q3';
            direcao = "Esq";
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            fita[pos] = escrito;
            estado = nextQ;
            pos--;

            //system("PAUSE");
        } else if (estado === "q2" && fita[pos] === "_") {
            lido = "_";
            escrito = "_";
            nextQ = "q5";
            direcao = "Dir";
            espacetounderline(escrito);
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            underlinetoespace(escrito);
            fita[pos] = escrito;
            estado = nextQ;
            pos++;
            //system("PAUSE");
        } else if (estado === "q2" && fita[pos] === "A") {
            lido = "A";
            escrito = "A";
            nextQ = "q2";
            direcao = "Esq";
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            fita[pos] = escrito;
            estado = nextQ;
            pos--;
            //system("PAUSE");
        } else if (estado === "q3" && fita[pos] === "*") {
            lido = "*";
            escrito = "*";
            nextQ = "q3";
            direcao = "Esq";
            cont++;
            espacetounderline(escrito);
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            underlinetoespace(escrito);
            fita[pos] = escrito;
            estado = nextQ;
            pos--;

            //system("PAUSE");
        } else if (estado === "q3" && fita[pos] === "_") {
            lido = "_";
            escrito = "_";
            nextQ = "q3";
            direcao = "Esq";
            espacetounderline(escrito);
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            underlinetoespace(escrito);
            fita[pos] = escrito;
            estado = nextQ;
            pos--;


            //system("PAUSE");
        } else if (estado === "q3" && fita[pos] === ">") {
            lido = ">";
            escrito = ">";
            nextQ = "q4";
            direcao = "Dir";
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            fita[pos] = escrito;
            estado = nextQ;
            pos++;


            //system("PAUSE");
        } else if (estado === "q4" && fita[pos] === "*") {
            lido = "z";
            escrito = "_";
            nextQ = "q0";
            direcao = "Dir";
            espacetounderline(escrito);
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            underlinetoespace(escrito);
            fita[pos] = escrito;
            estado = nextQ;
            pos++;

            //system("PAUSE");
        } else if (estado === "q4" && fita[pos] === "_") {
            lido = "_";
            escrito = "_";
            nextQ = "q4";
            direcao = "Dir";
            espacetounderline(escrito);
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            underlinetoespace(escrito);
            fita[pos] = escrito;
            estado = nextQ;
            pos++;
            //system("PAUSE");
        } else if (estado === "q4" && fita[pos] === "A") {
            lido = "A";
            escrito = "_";
            nextQ = "q8";
            direcao = "Dir";
            espacetounderline(escrito);
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            underlinetoespace(escrito);
            fita[pos] = escrito;
            estado = nextQ;
            pos++;
            //system("PAUSE");
        } else if (estado === "q5" && fita[pos] === "_") {
            lido = "_";
            escrito = "_";
            nextQ = "q6";
            direcao = "Dir";
            espacetounderline(escrito);
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            underlinetoespace(escrito);
            fita[pos] = escrito;
            estado = nextQ;
            pos++;
            //system("PAUSE");
        } else if (estado === "q5" && fita[pos] === "A") {
            lido = "A";
            escrito = "*";
            nextQ = "q5";
            direcao = "Dir";
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            fita[pos] = escrito;
            estado = nextQ;
            pos++;
            //system("PAUSE");
        } else if (estado === "q6" && fita[pos] === "*") {
            lido = "*";
            escrito = "*";
            nextQ = "q6";
            direcao = "Dir";
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            fita[pos] = escrito;
            estado = nextQ;
            pos++;
            //system("PAUSE");
        } else if (estado === "q6" && fita[pos] === "_") {
            lido = "_";
            escrito = "*";
            nextQ = "q7";
            direcao = "Esq";
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            fita[pos] = escrito;
            estado = nextQ;
            pos--;
            //system("PAUSE");
        } else if (estado === "q7" && fita[pos] === "*") {
            lido = "*";
            escrito = "*";
            nextQ = "q7";
            direcao = "Esq";
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            fita[pos] = escrito;
            estado = nextQ;
            pos--;
            //system("PAUSE");
        } else if (estado === "q7" && fita[pos] === "_") {
            lido = "_";
            escrito = "_";
            nextQ = "q2";
            direcao = "Esq";
            espacetounderline(escrito);
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            underlinetoespace(escrito);
            fita[pos] = escrito;
            estado = nextQ;
            pos--;
            //system("PAUSE");
        } else if (estado === "q8" && fita[pos] === "*") {
            lido = "*";
            escrito = "*";
            nextQ = "Fim";
            direcao = "Esq";
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            fita[pos] = escrito;
            estado = nextQ;
            pos--;
            fim = 1;


            //cout << "Resultado da Fita : -" << fita << "\n";
            var resultado = resultadoDivisao(fita);
            var resto = restoDivisao(fita);





            for (var i = 0; i < read.length; i++) {
                $('.resultado .mostrar').append("<tr><td>" + read[i][0] + "</td></tr>");
                $('.resultado .mostrar').append("<td>" + read[i][1] + "</td>");
                $('.resultado .mostrar').append("<td>" + read[i][2] + "</td>");
                $('.resultado .mostrar').append("<td>" + read[i][3] + "</td>");
                $('.resultado .mostrar').append("<td>" + read[i][4] + "</td>");
                $('.resultado .mostrar').append("<td>" + read[i][5] + "</td>");

            }
            /*
             for (var i = 0; i < read.length; i++) {
             
             for (j = 0; j < quant; j++) {
             
             $('.resultado .mostrar').append("<td>" + read[i][j] + "<td>");
             }
             }*/


            return;
        } else if (estado === "q8" && fita[pos] === "_") {
            lido = "_";
            escrito = "_";
            nextQ = "q8";
            direcao = "Dir";
            espacetounderline(escrito);
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            underlinetoespace(escrito);
            fita[pos] = escrito;
            estado = nextQ;
            pos++;

            //system("PAUSE");
        } else if (estado === "q8" && fita[pos] === "A") {
            lido = "A";
            escrito = "_";
            nextQ = "q9";
            direcao = "Dir";
            espacetounderline(escrito);
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            underlinetoespace(escrito);
            fita[pos] = escrito;
            estado = nextQ;
            pos++;
            //system("PAUSE");
        } else if (estado === "q9" && fita[pos] === "_") {
            lido = "_";
            escrito = "_";
            nextQ = "q10";
            direcao = "Dir";
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            fita[pos] = escrito;
            estado = nextQ;
            pos++;
            //system("PAUSE");
        } else if (estado == "q9" && fita[pos] === "A") {
            lido = "A";
            escrito = "A";
            nextQ = "q9";
            direcao = "Dir";
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            fita[pos] = escrito;
            estado = nextQ;
            pos++;
            //system("PAUSE");
        } else if (estado === "q10" && fita[pos] === "*") {
            lido = "*";
            escrito = "*";
            nextQ = "q10";
            direcao = "Dir";
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            fita[pos] = escrito;
            estado = nextQ;
            pos++;
            //system("PAUSE");
        } else if (estado === "q10" && fita[pos] === "_") {
            lido = "_";
            escrito = "_";
            nextQ = "q11";
            direcao = "Dir";
            espacetounderline(escrito);
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            underlinetoespace(escrito);
            fita[pos] = escrito;
            estado = nextQ;
            pos++;
            //system("PAUSE");
        } else if (estado === "q11" && fita[pos] === "*") {
            lido = "*";
            escrito = "*";
            nextQ = "q11";
            direcao = "Dir";
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            fita[pos] = escrito;
            estado = nextQ;
            pos++;
            //system("PAUSE");
        } else if (estado === "q11" && fita[pos] === "_") {
            lido = "_";
            escrito = "*";
            nextQ = "q12";
            direcao = "Esq";
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            fita[pos] = escrito;
            estado = nextQ;
            pos--;
            //system("PAUSE");
        } else if (estado === "q12" && fita[pos] === "*") {
            lido = "*";
            escrito = "*";
            nextQ = "q12";
            direcao = "Esq";
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            fita[pos] = escrito;
            estado = nextQ;
            pos--;
            //system("PAUSE");
        } else if (estado === "q12" && fita[pos] === "_") {
            lido = "_";
            escrito = "_";
            nextQ = "q12";
            direcao = "Esq";
            espacetounderline(escrito);
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            underlinetoespace(escrito);
            fita[pos] = escrito;
            estado = nextQ;
            pos--;
            //system("PAUSE");
        } else if (estado === "q12" && fita[pos] === "A") {
            lido = "A";
            escrito = "A";
            nextQ = "q12";
            direcao = "Esq";
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            fita[pos] = escrito;
            estado = nextQ;
            pos--;
            //system("PAUSE");
        } else if (estado === "q12" && fita[pos] === ">") {
            lido = ">";
            escrito = ">";
            nextQ = "q8";
            direcao = "Dir";
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            fita[pos] = escrito;
            estado = nextQ;
            pos++;
            //system("PAUSE");
        }


    } while (fim === 0 && estado !== "Fim");


}

function igualdade(n1, n2) {


    //var fita = [">","*","*","*","*","*","*"];
    var fita = converter(n1, n2);
    var estado = "->", nextQ, direcao;
    var lido, escrito;
    var fim = 0;
    var pos = 0;
    var read = [];
    var cont = 0;

    console.log(fita);

    do {
        
        if (estado === "->" && fita[pos] === ">") {
            lido = ">";
            escrito = ">";
            nextQ = "q0";
            direcao = "Dir";
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            fita[pos] = escrito;
            estado = nextQ;
            pos++;
            
            
           // $('.resultado .mostrar').html(fita);
            
           
            
            
        }else if (estado === "q0" && fita[pos] === "*") {
            
            lido = "*";
            escrito = "*";
            nextQ = "q1";
            direcao = "Dir";
            cont++;
            read[cont] = [estado, lido, pos, escrito, direcao, nextQ];
            fita[pos] = escrito;
            estado = nextQ;
            pos++;
            
            $('.resultado .mostrar').append(read);
            
            break;
        }

    } while (fim === 0 && estado !== "Fim");

}