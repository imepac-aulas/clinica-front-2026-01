# Funcionalidades dos Modulos - Clinica Medica

Este documento descreve as funcionalidades esperadas para cada modulo do sistema com base na estrutura atual de diretorios.

## 1. Modulo Administrativo

Diretorio base: `modulos-autenticados/administrativo/`

Submodulos identificados:
- `convenio/`
- `especialidade/`
- `funcionarios/`
- `medico/`
- `perfil/`

### Funcionalidades

#### 1.1 Convenios
- Cadastrar convenio (deve conter: nome, codigo, tipo de cobertura, contato e status inicial)
- Listar convenios (deve conter: busca por nome/codigo, filtro por status e paginacao)
- Editar convenio (deve conter: historico basico de alteracoes e validacao de campos obrigatorios)
- Inativar/ativar convenio (deve conter: motivo da alteracao e data da ultima mudanca)


#### 1.2 Especialidades
- Cadastrar especialidade medica (deve conter: nome da especialidade, descricao curta e status)
- Listar especialidades (deve conter: ordenacao alfabetica e filtro por status)
- Editar especialidade (deve conter: ajuste de descricao e controle de duplicidade por nome)
- Inativar/ativar especialidade (deve conter: bloqueio de uso em novos cadastros quando inativa)

#### 1.3 Funcionarios
- Cadastrar funcionario (deve conter: nome, CPF, contato, cargo e data de admissao)
- Listar funcionarios (deve conter: filtros por cargo, status e pesquisa por nome/CPF)
- Editar dados cadastrais (deve conter: atualizacao de contato, cargo e dados pessoais)
- Inativar/ativar funcionario (deve conter: data, motivo e impacto de acesso ao sistema)
* Vincular funcionario a perfil de acesso (atencao: esse vinculo define quais telas e acoes o usuario podera executar)

#### 1.4 Medicos
- Cadastrar medico (deve conter: nome, CRM, UF do CRM, contato e especialidades)
- Listar medicos (deve conter: filtros por especialidade, status e pesquisa por CRM/nome)
- Editar dados (deve conter: atualizacao de contato, especialidades e dados profissionais)
- Inativar/ativar medico (deve conter: bloqueio para novas agendas quando inativo)

#### 1.5 Perfil (Acesso)
- Cadastrar perfil de usuario (ex.: recepcao, enfermagem, medico, administracao) (deve conter: nome do perfil e descricao de uso)
- Listar perfis (deve conter: quantidade de usuarios vinculados e nivel de permissao)
- Editar perfil (deve conter: ajuste de nome, descricao e regras de acesso)
* Definir permissoes por modulo e funcionalidade (atencao: essa configuracao impacta seguranca e operacao de todos os modulos)


## 2. Modulo de Agendamento

Diretorio base: `modulos-autenticados/agendamento/`

Submodulos identificados:
- `consulta/`
- `pacientes/`

### Funcionalidades

#### 2.1 Pacientes
- Cadastrar paciente (deve conter: nome, data de nascimento, CPF, contato e endereco basico)
- Listar pacientes (deve conter: filtro por ativo/inativo e acesso rapido ao cadastro)
- Editar dados do paciente (deve conter: atualizacao de contato, endereco e dados pessoais)
- Consultar historico basico de agendamentos (deve conter: data, medico, especialidade e status)
- Localizar paciente por nome, CPF, telefone ou prontuario (deve conter: busca rapida com retorno em tabela)

#### 2.2 Consulta (Agenda)
- Agendar consulta (deve conter: paciente, medico, especialidade, data, hora e convenio/particular)
- Reagendar consulta (deve conter: data/hora anterior, nova data/hora e motivo)
- Cancelar consulta (deve conter: motivo do cancelamento e identificacao de quem cancelou)
- Confirmar consulta (deve conter: canal de confirmacao e horario da confirmacao)
- Visualizar agenda por dia, profissional e especialidade (deve conter: visao em lista e filtros combinados)
* Registrar status da consulta (agendada, confirmada, cancelada, realizada, falta) (atencao: status deve ser unico e consistente entre Agendamento e Atendimento)

## 3. Modulo de Atendimento

Diretorio base: `modulos-autenticados/atendimento/`

Submodulos identificados:
- `consulta/`
- `prontuario/`

### Funcionalidades

#### 3.1 Consulta (Atendimento)
- Listar consultas do dia para atendimento (deve conter: fila por horario, profissional e prioridade)
- Iniciar atendimento da consulta confirmada (deve conter: validacao de presenca e abertura do contexto clinico)
- Atualizar status da consulta em tempo real (em espera, em atendimento, finalizada) (deve conter: hora da mudanca e usuario responsavel)
- Encaminhar consulta para registro de prontuario (deve conter: atalho direto para o prontuario do paciente)

#### 3.2 Prontuario
- Abrir prontuario do paciente (deve conter: identificacao do paciente e resumo clinico recente)
- Registrar anamnese (deve conter: queixa principal, historia da doenca atual e antecedentes)
- Registrar evolucao clinica (deve conter: achados, avaliacao e progresso do quadro)
- Registrar conduta/orientacoes (deve conter: prescricao, exames solicitados e orientacoes de retorno)
- Consultar historico de atendimentos e evolucoes (deve conter: linha do tempo por data e profissional)

## 4. Regras de Integracao entre Modulos

- O cadastro de medicos e especialidades (Administrativo) alimenta o Agendamento.
- O cadastro de pacientes (Agendamento) deve estar disponivel no Atendimento.
- Consultas agendadas e confirmadas (Agendamento) devem aparecer na fila de Atendimento.
- Informacoes clinicas registradas em Prontuario (Atendimento) compoem o historico do paciente.

Este documento representa uma base funcional inicial inferida pela estrutura de diretorios. Conforme regras de negocio reais da clinica forem detalhadas, as funcionalidades podem ser ajustadas.