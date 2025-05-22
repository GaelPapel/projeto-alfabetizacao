<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Cadastro de Usuário</title>
</head>
<body>
    <h1>Cadastro de Usuário</h1>

    <form action="/cadastro" method="POST">
        @csrf

        <label for="nome">Nome Completo:</label><br>
        <input type="text" name="nome" id="nome" required><br><br>

        <label for="email">E-mail:</label><br>
        <input type="email" name="email" id="email" required><br><br>

        <label for="senha">Senha:</label><br>
        <input type="password" name="password" id="password" required><br><br>

        <label for="data_nascimento">Data de Nascimento:</label><br>
        <input type="date" name="data_nascimento" id="data_nascimento" required><br><br>

        <label for="estado">Estado:</label><br>
        <select name="estado" id="estado" required>
            <option value="">Selecione...</option>
            <option value="MG">Minas Gerais</option>
            <option value="SP">São Paulo</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="BA">Bahia</option>
            <!-- Adicione outros estados conforme necessário -->
        </select><br><br>


      

        <button type="submit">Cadastrar</button>
    </form>
</body>
</html>
