# SIFacisaAPP

Flow de desenvolvimento:
- Cria task no project
- Quando for iniciar a tarefa, passa da coluna 'TODO' para 'In Progress' e transforma a task em 'Issue'
- Cria uma branch com a numeração da nova Issue a partir da brnach 'development' e faz as alterações da task
- Commita nessa última branch criada, passa a task da coluna 'In progress' para a coluna 'Done', e depois faz pull request dela na branch 'development'
- Quando ela for aprovada e for feito merge na branch 'development', passa a task da coluna 'Done' para a coluna 'Merged in development'
- Quando tivermos uma versão para produção fazemos merge das funcionalidades da branch 'development' para a branch 'master' e passamos as tasks referentes da coluna 'Merged in development' para a coluna 'Merged in master'
