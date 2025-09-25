# Sistema de Gestão de Manutenção (SGM) - Formativa

## Briefing
O projeto consiste no desenvolvimento de um Sistema de Gestão de Manutenção (SGM) no formato de uma aplicação web. O objetivo é centralizar e otimizar o controle das atividades de manutenção de máquinas e equipamentos de uma empresa. A plataforma permitirá o cadastro de equipamentos, agendamento de manutenções preventivas e corretivas, e o gerenciamento de ordens de serviço.

## Objetivo do Projeto
- Gerenciar informações sobre equipamento e manutenção realizadas pela empresa
- Realizar abertura de chamado de manutenção (ordens de serviço)
- Dashboard de historicos de manutenção
- Proteger acesso aos dados do sistema (criptografia e autenticação)

## Público-Alvo
- Técnicos de Manutenção (usuários finais)
- Gestores de Manutenção (usuários intermediários)
- Administradores do Sistema (Gerenciar a permissão dos usuários)

## Levantamento de Requisitos do Projeto

- ### Requisitos Funcionais

- ### Requisitos Não Funcionais

## Recursos do Projeto

- ### Tecnológicos
    - Framework de Desenvolvimento Next/React
    - Linguagem de Programação: TypeScript
    - Banco de Dados: Não Relacional (MongoDB)
    - GitHub
    - VSCode
    - Figma

- ### Pessoal
    - Somente Eu 🗿 (aura farming +1000)

## Análise de Risco


## Diagramas

1. ### Classe
Descrever o Compotamento das Entidades de um Projeto

- Usuário (User/Usuario)
    -Atributos: id, nome, email, senha, função
    -Métodos: create, read, update, delete, login, logout
- Equipamento (Equipment/Equipamento)
    -Atributos: id, modelo, marca, localização, status, numeroSerie
    -Métodos: CRUD

- Ordem de Serviço (OrdemServico)
    -Atributos: id, titulo, descricao, tipoManuntenção, status, idTecnico, idEquipamento

```mermaid

classDiagram

    class Usuario{
        +String id
        +String nome
        +String email 
        +String senha
        +Enum funcao
        +login()
        +logout()
        +CRUD()
    }

    class Equipamento{
        +String id
        +String modelo
        +String marca
        +String localizacao
        +boolean status
        +String numSerie
        +CRUD()
    }

    class OrdemServico{
        +String id
        +String titulo
        +String descricao
        +String tipoManutencao
        +Enum status
        +String idTecnico
        +String idEquipamento
        +CRUD()
    }

    Usuario "1"--"1+" OrdemServico: "é Responsável por"
    Equipamento "1"--"1+" OrdemServico: "associada a"

```
    

2. ### Casos de Uso
Ilustra as interaçãoes dos diferentes tipos de usuário (Atores) com as funcionalidade do Sistema

- Caso de Uso:
    - Técnico: Gerenciar Ordens de Serviço (CRUD) e acessar o Dashboard;
    - Gerente: Funções do técnico + Gerenciamento de Equipamentos (CRUD)
    - Admin: Gerenciar Usuários do Sistema, acessar o Dashboard

    Fazer o login -> Antes de Qualquer Ação
```mermaid

graph TD

    subgraph "SGM"
        caso1([Fazer Login])
        caso2([Gerenciar Orden de Serviço - CRUD])
        caso3([Gerenciar Equipamentos - CRUD])
        caso4([Gerenciar Usuários])
        caso5([Acessar o DashBoard])
    end

    Tecnico([Técnico de Manutenção])
    Gerente([Gerente de Manutenção])
    Admin([Administrador do Sistema])

    Tecnico --> caso1
    Tecnico --> caso2
    Tecnico --> caso5

    Gerente --> caso1b
    Gerente --> caso2
    Gerente --> caso3
    Gerente --> caso5

    Admin --> caso1
    Admin --> caso4
    Admin --> caso5

    caso1 -.-> caso2
    caso1 -.-> caso3
    caso1 -.-> caso4
    caso1 -.-> caso5

```

3. ### Fluxo
Detalha o passo a passo para realizar uma ação no sistema

- Diagrama de fluxo de login
    - O usuário acessa a tela de login
    - Insere as credenciais
    - O sistema verifica as credenciais
        - se sim: gera um JWT (Token) => DashBoard
        - se não: manda uma mensagem de erro - permanece na tela de Login
```mermaid

graph TD
    A[Início] --> B[Acessa a Tela de Login]
    B --> C[Preencher Email e Senha]
    C --> D[Validade as Credenciais]
    D --> SIM --> E[Gerar um Token JWT]
    E --> F[Dashboard]
    D --> NÃO --> G[Mensagem de Erro]
    G --> B

```