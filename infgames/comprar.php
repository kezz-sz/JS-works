<?php include'inc/cabecalho.inc.php'?>
    <title>Comprar PC</title>
    <script type="text/javascript" src="js/jquery-3.7.1.min.js"></script>
    <script type="text/javascript" src="js/validacao.js"></script>
    <h2 class="title">Cadastro de compras</h2>
    <form method="post" class="buy">
        <fieldset>
            <label>Nome:</label>
            <input type="text" name="nome" autofocus required="required" autocomplete="off"><br><br>
            <label id="l1" onclick="Cpf()" class="bolinha">
                <input class="check" type="radio" name="opt" value="cpf" checked id="radiocpf">CPF
            </label>
            <label id="l2" onclick="Cnpj()" class="bolinha">
                <input class="check" type="radio" name="opt" value="cnpj"  id="radiocnpj">CNPJ
            </label>
            <div id="divcpf">
                <label for="cpf">CPF:</label>
                <input name="cpf" type="text" id="cpf">
            </div>
            <div id="divcnpj">
                <label for="cnpj">CNPJ:</label>
                <input name="cnpj" type="text" id="cnpj">
            </div>
            <br><br>
            <label>Sécsu</label><br>
            <label id="g1" onclick="Male()" class="bolinha">
            <input id="idmasc" type="radio" name="gender" value="masculino">masculino <br>
            </label>
            <label id="g2" onclick="Female()" class="bolinha">
            <input id="idfem" type="radio" name="gender" value="feminino">Feminino <br>
            </label>
            <label id="g3" onclick="Feiki()" class="bolinha">
            <input type="radio" name="gender" value="feiki">Outro/prefiro não opinar 
            </label><br><br>
            <label>Email:</label>
            <input id="email" type="email" name="email" require="required"><br><br>
            <label>Estado</label>
            <select id="estado" name="estado">
                <option value="nothing"></option>
                <option value="ac">Acre</option>
                <option value="al">Alagoas</option>
                <option value="ap">Amapá</option>
                <option value="am">Amazonas</option>
                <option value="ba">Bahia</option>
                <option value="ce">Ceará</option>
                <option value="df">Distrito Federal</option>
                <option value="es">Espírito Santo</option>
                <option value="go">Goiás</option>
                <option value="ma">Maranhão</option>
                <option value="mt">Mato Grosso</option>
                <option value="ms">Mato Grosso do Sul</option>
                <option value="mg">Minas Gerais</option>
                <option value="pa">Pará</option>                
                <option value="pb">Paraíba</option>
                <option value="pr">Paraná</option>
                <option value="pe">Pernambuco</option>
                <option value="pi">Piauí</option>
                <option value="rj">Rio de Janeiro</option>
                <option value="rn">Rio Grande do Norte</option>
                <option value="rs">Rio Grande do Sul</option>
                <option value="ro">Rondônia</option>
                <option value="rr">Roraima</option>
                <option value="sc">Santa Catarina</option>
                <option value="sp">São Paulo</option>
                <option value="se">Sergipe</option>
                <option value="to">Tocantins</option>
            </select><br><br>
            <label>Cidade:</label>
            <input id="cidade" type="text" name="cidade"><br>
            <label>Bairro:</label>
            <input id="bairro" type="text" name="bairro"><br>
            <label>Rua:</label>
            <input id="rua" type="text" name="rua" require="required"><br>
            <label>Número:</label>
            <input id="numero" type="text" name="numero"><br>
            <label>CEP:</label>
            <input id="cep" type="text" name="cep" require="required"><br> 
            <label>Informação Adicional:</label>
            <input id="comp" type="text" name="infoadc"><br><br><br>
            <label>Quantidade:</label>
            <input id="num" type="number" name="quant" require="required"><br><br>
            <input type="submit" name="submit" value="comprar" onclick="myFunction()">
        </fieldset>
    </form>
<?php include'inc/rodape.inc.php' ?>