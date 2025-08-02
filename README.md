# Canoa Fit Pro - App de Treinos Personalizados

Um webapp moderno e profissional para gerenciamento de treinos personalizados, inspirado em apps como MyFitnessPal. Desenvolvido com React, Tailwind CSS e foco em experiência do usuário.

**Criado por Thaís Souza com carinho para a comunidade de canoa Havaiana** ❤️

## 🚀 Características

### Design Profissional
- **Interface moderna** inspirada em apps de fitness populares
- **Design responsivo** otimizado para desktop e mobile
- **Animações suaves** e micro-interações
- **Paleta de cores profissional** com gradientes modernos
- **Tipografia clara** e hierarquia visual bem definida

### Funcionalidades Principais
- **Dashboard intuitivo** com visão geral do programa de treinos
- **Progresso em tempo real** com barras de progresso animadas
- **Player de vídeo integrado** para demonstrações dos exercícios
- **Sistema de notificações** toast para feedback do usuário
- **Persistência de dados** com localStorage
- **Navegação fluida** entre telas

### Arquitetura Limpa
- **Componentes reutilizáveis** com design system consistente
- **Hooks customizados** para lógica de negócio
- **Context API** para gerenciamento de estado global
- **Separação de responsabilidades** bem definida
- **Código modular** e fácil de manter

## 🛠️ Tecnologias

- **React 19** - Framework principal
- **Tailwind CSS 4** - Estilização moderna
- **Lucide React** - Ícones
- **Vite** - Build tool
- **ESLint** - Linting de código

## 📦 Instalação

```bash
# Clone o repositório
git clone <repository-url>
cd Personal_Assist

# Instale as dependências
npm install
# ou
pnpm install

# Execute o projeto
npm run dev
# ou
pnpm dev
```

## 🎯 Jornada do Usuário

### 1. Primeira Visita
- **Landing page** com visão geral do programa
- **Dashboard principal** com estatísticas do treino
- **Cards visuais** para cada dia de treino
- **Progresso geral** em tempo real

### 2. Seleção de Treino
- **Cards interativos** com status de progresso
- **Informações visuais** (duração, exercícios, categoria)
- **Animações suaves** ao passar o mouse
- **Indicadores visuais** de treinos completados

### 3. Detalhes do Exercício
- **Header informativo** com progresso do dia
- **Lista organizada** por categoria de exercício
- **Informações detalhadas** (séries, carga, pausa)
- **Botões de ação** claros e intuitivos
- **Player de vídeo** modal para demonstrações

### 4. Interação e Feedback
- **Notificações toast** para ações do usuário
- **Marcação de exercícios** com feedback visual
- **Progresso animado** em tempo real
- **Celebração** ao completar treinos

### 5. Navegação e Acessibilidade
- **Header responsivo** com progresso geral
- **Botão de voltar** intuitivo
- **Design mobile-first** para todos os dispositivos
- **Foco em acessibilidade** e UX

## 🎨 Design System

### Componentes UI
- **Button** - Botões com variantes e tamanhos
- **Card** - Cards com efeitos glass morphism
- **ProgressBar** - Barras de progresso animadas
- **Toast** - Notificações temporárias
- **LoadingSpinner** - Indicadores de carregamento

### Paleta de Cores
- **Primária**: Gradientes azul/roxo
- **Sucesso**: Verde para ações positivas
- **Aviso**: Laranja para informações
- **Erro**: Vermelho para alertas
- **Neutro**: Tons de cinza para texto

### Tipografia
- **Inter** como fonte principal
- **Hierarquia clara** de títulos
- **Legibilidade** otimizada para mobile

## 🔧 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/           # Componentes reutilizáveis
│   ├── Dashboard.jsx # Dashboard principal
│   ├── Header.jsx    # Header da aplicação
│   ├── WorkoutDetail.jsx # Detalhes do treino
│   └── VideoPlayer.jsx   # Player de vídeo
├── contexts/
│   └── ToastContext.jsx  # Contexto para notificações
├── hooks/
│   └── useWorkoutProgress.js # Hook para progresso
├── utils/
│   └── cn.js         # Utilitário para classes CSS
├── data/
│   └── training-data.js # Dados dos treinos
└── App.jsx           # Componente principal
```

## 🚀 Deploy no Vercel

### Configuração Automática
O projeto está configurado para deploy automático no Vercel com:
- **Build otimizado** para produção
- **Headers de segurança** configurados
- **Região Brasil** (gru1) para melhor performance
- **Framework detection** automático

### Passos para Deploy
1. **Conecte seu repositório** ao Vercel
2. **Configure as variáveis de ambiente** (se necessário)
3. **Deploy automático** será executado
4. **URL será gerada** automaticamente

### Contato para Deploy
Para suporte técnico e configuração de deploy:
- **Email**: falecom@seuagentedigital.com
- **Desenvolvedora**: Thaís Souza

## 🚀 Melhorias Implementadas

### Código Limpo
- ✅ **Separação de responsabilidades** com hooks customizados
- ✅ **Componentes reutilizáveis** com design system
- ✅ **Arquitetura modular** e escalável
- ✅ **Código bem documentado** e organizado

### Design Profissional
- ✅ **Interface moderna** inspirada em apps populares
- ✅ **Responsividade completa** para todos os dispositivos
- ✅ **Animações suaves** e micro-interações
- ✅ **Paleta de cores profissional** com gradientes
- ✅ **Tipografia clara** e hierarquia visual

### Jornada do Usuário
- ✅ **Navegação intuitiva** entre telas
- ✅ **Feedback visual** com notificações toast
- ✅ **Progresso em tempo real** com animações
- ✅ **Acessibilidade** com foco em UX
- ✅ **Performance otimizada** com lazy loading

### Funcionalidades Avançadas
- ✅ **Sistema de notificações** centralizado
- ✅ **Player de vídeo** integrado
- ✅ **Persistência de dados** com localStorage
- ✅ **Estados de loading** e skeleton
- ✅ **Animações de transição** suaves

## 📱 Responsividade

O app é totalmente responsivo e otimizado para:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🎯 Próximos Passos

- [ ] **PWA** - Transformar em Progressive Web App
- [ ] **Offline** - Funcionalidade offline completa
- [ ] **Sincronização** - Backup na nuvem
- [ ] **Estatísticas** - Gráficos de progresso
- [ ] **Social** - Compartilhamento de conquistas

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

**Desenvolvedora**: Thaís Souza  
**Email**: falecom@seuagentedigital.com  
**Projeto**: Canoa Fit Pro - App de Treinos Personalizados

---

**Criado com ❤️ para a comunidade de canoa Havaiana**

Desenvolvido para transformar a experiência de treinos em algo mais profissional e motivador.

