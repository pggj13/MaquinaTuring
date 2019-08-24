
<div class="body">
    <div class="row">

        <div class="input-field col s4">
            <div class="">Máquina de Turing:<br><i>Author: Paulo Joao</i><br><i>Author: Duarte Gongo</i></div>

            <select id="mySelect" onchange="showOperation()">
                <option value="" disabled selected>Informe outra operação</option>
                <option value="1">Divisão</option>
                <option value="2">Igualdade</option>
            </select>
            <form name="checksOperation" type="divisao" class="col s6 SelectDivisao verifica "id="form" >
                <div class="col s12"><i>Operação:Divisão</i></div>
                <div class="col s12 erro"><i>Todos campos são obrigatorios</i></div>
                <div class="row">
                    <div class="input-field col s6">
                        <input id="last_name"name="numero1" type="text" class=""value="6">
                        <label for="last_name"><i>Número 1:</i></label>
                    </div>
                    <div class="input-field col s6">
                        <input id="" type="text"name="numero2" class=""value="2">
                        <label for="last_name"><i>Número 2:</i></label>
                    </div>
                </div>
                <button class="btn waves-effect waves-light" type="submit" name="action">Calcular
                </button>
            </form>
            <form name="checksOperation" type="igualdade" class="col s6 SelectIgualdade verifica"id="form" >
                <div class="col s12"><i>Operação:Igualdade</i></div>
                <div class="col s12 erro"><i>Todos campos são obrigatorios</i></div>
                <div class="row">
                    <div class="input-field col s6">
                        <input id="last_name"name="numero1" type="text" class=""value="4">
                        <label for="last_name"><i>Número 1:</i></label>
                    </div>
                    <div class="input-field col s6">
                        <input id="" type="text"name="numero2" class=""value="2">
                        <label for="last_name"><i>Número 2:</i></label>
                    </div>
                </div>
                <button class="btn waves-effect waves-light" type="submit" name="action">Calcular
                </button>
            </form>
        </div>

        <div class="col s8 resultado">
            <table class="centered">
                <thead>
                    <tr>
                        <th>Estado</th>
                        <th>Leitura</th>
                        <th>Posição/Fita</th>
                        <th>Escreve</th>
                        <th>Direção</th>
                        <th>Prox</th>
                    </tr>
                </thead>
                <tbody class="mostrar">
                   
                </tbody>
            </table>
        </div>
    </div>
    <!-- Form Divisão-->


    <!-- fim form iguldade -->

</div> 


