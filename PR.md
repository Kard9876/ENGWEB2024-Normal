# Persistência dos Dados

Os único dados que a aplicação utiliza e necessitam percistência são os dados relativos aos diversos contratos. Para permitir a sua persistência, recorri ao MongoDB e a um ficheiro em JSON. Visto o dataset inicial ser fornecido em formato CSV, foi necessário transformá-lo para JSON. Para tal, recorri ao site [csvjson](https://csvjson.com/csv2json) e, de seguida, troquei o nome do campo "idcontrato" para "_id". Por fim, foi necessário passar alguns valores do campo "precoContratual" que se encontravam no formato de string para o formato, o que fiz com recurso ao atalho "ctrl + h" do VSCode e realizei a substituição por regex.

# Setup da Base de dados

A base de dados em MongoDB está localizada dentro de um Docker Container. Para tal, após executar o comando "docker-compose up -d --build", os dados do ficheiro contratos2024.json devem ser importados para a base de dados. Para isso, basta correr o comando "docker exec engweb2024_test_mongodb mongoimport -d contratos -c contratos --file /tmp/contratos2024.json --jsonArray"

# Instruções para a execução dos programas

Para executar o docker-compose que criará todos os container necessários, basta executar o comando "docker-compose up -d --build" caso ainda não se tenha feito o setup da base de dados.

Se desejar criar cada um dos containers individualmente, dirija-se à diretoria com o *dockerfile* correspondente e executa o comando "docker run -d -p my_port:docker_port --name nome_container nome_imagem". Caso escolha esta alternativa, tenha em atenção que existem dependências entre os diversos containers que deverá resolver.

# Respostas teóricas

A resposta ao exercício 1.2 encontra-se no ficheiro [queries.txt](ex1\queries.txt) na diretoria ex1.