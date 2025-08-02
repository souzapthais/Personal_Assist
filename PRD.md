# PRD - Webapp de Treinos Personalizados

## 1. Visão Geral do Produto

### Problema
Pessoas que fazem treinos em planilhas enfrentam dificuldades para:
- Visualizar exercícios de forma clara e organizada
- Acessar vídeos demonstrativos rapidamente
- Acompanhar progresso e completar treinos
- Manter motivação com interface visual atrativa

### Solução
Um webapp clean e elegante que transforma planilhas de treino em uma experiência visual interativa, com vídeos demonstrativos integrados e acompanhamento de progresso.

## 2. Objetivos

### Objetivo Principal
Criar uma interface visual moderna e intuitiva para transformar planilhas de treino em uma experiência de usuário superior.

### Objetivos Específicos
- Simplificar a visualização de treinos
- Integrar vídeos demonstrativos de forma fluida
- Permitir acompanhamento de progresso
- Manter design clean e elegante
- Funcionar offline (dados locais)

## 3. Usuário Alvo

### Persona Principal
- **Perfil**: Pessoas que fazem treinos em casa ou academia
- **Nível**: Intermediário
- **Idade**: 25-45 anos
- **Comportamento**: Usa planilhas para treinos, busca praticidade e visualização clara

### Necessidades do Usuário
- Visualização clara dos exercícios
- Acesso rápido aos vídeos demonstrativos
- Interface intuitiva e responsiva
- Acompanhamento de progresso
- Design moderno e motivador

## 4. User Stories

### Funcionalidades Principais

#### Como um usuário, eu quero:
1. **Ver meu treino do dia** para saber exatamente o que fazer
   - Critério: Lista clara de exercícios com séries, reps e cargas
   - Prioridade: Alta

2. **Acessar vídeos demonstrativos** para ver como executar os exercícios
   - Critério: Player integrado que abre vídeos do YouTube
   - Prioridade: Alta

3. **Marcar exercícios como concluídos** para acompanhar meu progresso
   - Critério: Checkbox ou botão para marcar como feito
   - Prioridade: Média

4. **Ver meu progresso semanal** para manter motivação
   - Critério: Dashboard com estatísticas de treinos completados
   - Prioridade: Média

5. **Navegar entre dias de treino** facilmente
   - Critério: Interface com tabs ou cards para cada dia
   - Prioridade: Alta

6. **Ver detalhes do exercício** (séries, reps, pausa)
   - Critério: Informações claras e organizadas
   - Prioridade: Alta

## 5. Requisitos Funcionais

### RF1 - Visualização de Treinos
- Exibir treinos organizados por dia da semana
- Mostrar exercícios com séries, repetições, cargas e pausas
- Interface responsiva para desktop e mobile

### RF2 - Player de Vídeo
- Integração com vídeos do YouTube
- Player customizado com controles básicos
- Abertura em nova aba para visualização completa

### RF3 - Acompanhamento de Progresso
- Marcação de exercícios como concluídos
- Contador de exercícios completados por dia
- Histórico de treinos realizados

### RF4 - Navegação
- Navegação entre dias de treino
- Interface intuitiva e rápida
- Design consistente

## 6. Requisitos Não Funcionais

### RNF1 - Performance
- Carregamento rápido (< 3 segundos)
- Interface responsiva
- Funcionamento offline

### RNF2 - Usabilidade
- Interface intuitiva
- Design clean e elegante
- Acessibilidade básica

### RNF3 - Compatibilidade
- Funcionar em navegadores modernos
- Responsivo para mobile e desktop
- Sem dependências de backend

## 7. Estrutura de Dados

### Dados dos Treinos
```javascript
{
  dia: "Dia 1",
  exercicios: [
    {
      nome: "Mobilidade de Ombro com Bastão",
      series: "2x10-15 reps",
      carga: "0kg",
      pausa: "30-45 segundos",
      video: "https://www.youtube.com/watch?v=GyZ5U_-iLko",
      categoria: "Mobilidade"
    }
  ]
}
```

## 8. Interface do Usuário

### Design Guidelines
- **Paleta**: Tons de azul, verde e branco (cores fitness)
- **Tipografia**: Fonte clean e legível
- **Layout**: Cards organizados por dia
- **Interação**: Hover effects e animações suaves
- **Responsividade**: Mobile-first design

### Componentes Principais
1. **Header**: Logo e navegação
2. **Dashboard**: Visão geral dos treinos
3. **Cards de Treino**: Cada dia em um card
4. **Modal de Exercício**: Detalhes + vídeo
5. **Player de Vídeo**: Integrado ao modal

## 9. Critérios de Aceitação

### Funcionalidades Básicas
- [ ] Usuário consegue ver todos os 5 dias de treino
- [ ] Usuário consegue acessar vídeos demonstrativos
- [ ] Usuário consegue marcar exercícios como concluídos
- [ ] Interface é responsiva em mobile e desktop
- [ ] Design é clean e elegante

### Performance
- [ ] App carrega em menos de 3 segundos
- [ ] Vídeos carregam corretamente
- [ ] Navegação é fluida e rápida

### Usabilidade
- [ ] Interface é intuitiva
- [ ] Informações são claras e organizadas
- [ ] Funciona offline

## 10. Escopo

### Incluído no MVP
- Visualização de todos os 5 dias de treino
- Player de vídeo integrado
- Marcação de exercícios concluídos
- Design responsivo
- Interface clean e elegante

### Não Incluído (Futuras Versões)
- Sistema de login/usuários
- Banco de dados
- Personalização de treinos
- Notificações
- Compartilhamento de progresso

## 11. Cronograma

### Fase 1 (MVP) - 1-2 dias
- Estrutura básica do projeto
- Componentes principais
- Dados dos treinos
- Interface básica

### Fase 2 - 1 dia
- Player de vídeo
- Marcação de progresso
- Polimento da interface

### Fase 3 - 1 dia
- Testes e ajustes
- Deploy e documentação

## 12. Riscos e Mitigações

### Riscos
- Vídeos do YouTube podem não carregar
- Interface pode ficar lenta com muitos dados
- Design pode não ser intuitivo

### Mitigações
- Fallback para links diretos do YouTube
- Otimização de performance
- Testes de usabilidade
- Design iterativo

---

**Status**: Aprovado para desenvolvimento
**Versão**: 1.0
**Data**: Janeiro 2025 