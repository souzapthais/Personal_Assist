# 🏄‍♂️ Canoa Fit Pro

**Treino Estruturado para Canoa Havaiana - Força, Potência e Funcionalidade**

Uma aplicação web moderna e responsiva para acompanhar treinos específicos de canoa havaiana, desenvolvida com React e Tailwind CSS.

## 🚀 Funcionalidades

- **Dashboard Interativo**: Visão geral do programa de treino com estatísticas
- **Progresso Semanal**: Acompanhamento do progresso dos treinos
- **5 Dias de Treino**: Programa completo estruturado por dias da semana
- **44 Exercícios Totais**: Exercícios específicos para canoa havaiana
- **Mini Player de Vídeo**: Player integrado para vídeos demonstrativos do YouTube
- **Design Responsivo**: Interface adaptada para desktop e mobile
- **Metodologia Científica**: Baseado em princípios científicos de treinamento

## 🎯 Estrutura do Programa

### Dias da Semana:
- **Segunda**: Membros Inferiores + Potência (9 exercícios, 45-50 min)
- **Terça**: Costas, Core & Tração Funcional (9 exercícios, 45-50 min)
- **Quarta**: Glúteo + Posterior + Potência (8 exercícios, 45-50 min)
- **Quinta**: Peito + Ombro + Tríceps + Core (8 exercícios, 45-50 min)
- **Sexta**: Força Total + Metabólico (10 exercícios, 50-55 min)

### Categorias de Exercícios:
- **Ativação & Mobilidade**: Aquecimento e preparação
- **Força Principal**: Exercícios base de força
- **Força Acessória**: Exercícios complementares
- **Potência**: Desenvolvimento de explosão

## 🛠️ Tecnologias Utilizadas

- **React 18**: Framework JavaScript para interface
- **Vite**: Build tool e dev server
- **Tailwind CSS**: Framework CSS utilitário
- **Lucide React**: Ícones modernos
- **shadcn/ui**: Componentes de interface
- **Framer Motion**: Animações (disponível)

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- pnpm (recomendado) ou npm

### Passos para executar:

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd canoa-fit-pro
```

2. **Instale as dependências**
```bash
pnpm install
# ou
npm install
```

3. **Execute o servidor de desenvolvimento**
```bash
pnpm run dev
# ou
npm run dev
```

4. **Acesse a aplicação**
```
http://localhost:5173
```

## 🏗️ Estrutura do Projeto

```
canoa-fit-pro/
├── public/                 # Arquivos estáticos
├── src/
│   ├── components/         # Componentes React
│   │   ├── Dashboard.jsx   # Tela principal
│   │   ├── WorkoutDetail.jsx # Detalhes do treino
│   │   ├── VideoPlayer.jsx # Player de vídeo
│   │   └── ui/            # Componentes UI
│   ├── data/
│   │   └── training-data.js # Dados dos treinos
│   ├── assets/            # Imagens e recursos
│   ├── App.jsx            # Componente principal
│   ├── App.css            # Estilos principais
│   └── main.jsx           # Ponto de entrada
├── package.json
├── vite.config.js
└── README.md
```

## 🎥 Mini Player de Vídeo

O player de vídeo integrado oferece:
- **Reprodução de vídeos do YouTube**: Integração direta com vídeos demonstrativos
- **Controles customizados**: Play/pause, mute/unmute
- **Abertura no YouTube**: Link direto para visualização completa
- **Interface responsiva**: Adaptada para diferentes tamanhos de tela

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:
- **Desktop**: Layout completo com grid de cards
- **Tablet**: Layout adaptado para telas médias
- **Mobile**: Interface otimizada para toque

## 🎨 Design

- **Gradiente moderno**: Fundo com gradiente azul-roxo-laranja
- **Cards coloridos**: Cada dia da semana tem sua cor específica
- **Glassmorphism**: Efeito de vidro nos componentes
- **Tipografia clara**: Hierarquia visual bem definida

## 📊 Dados dos Treinos

Os dados dos treinos são baseados em uma planilha estruturada contendo:
- Nome dos exercícios
- Séries e repetições
- Cargas recomendadas
- Tempos de pausa
- URLs dos vídeos demonstrativos
- Categorias de exercícios

## 🚀 Deploy

Para fazer deploy da aplicação:

1. **Build de produção**
```bash
pnpm run build
```

2. **Preview local**
```bash
pnpm run preview
```

3. **Deploy em plataformas**
- Vercel
- Netlify
- GitHub Pages
- Outras plataformas de hosting estático

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## ⚠️ Aviso Importante

Este programa foi desenvolvido seguindo metodologias científicas de treinamento esportivo. Consulte sempre um profissional de Educação Física ou médico antes de iniciar qualquer programa de exercícios. Respeite seus limites e execute os movimentos com técnica adequada.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ para a comunidade de canoa havaiana.

---

**Canoa Fit Pro** - Transforme seu treino, transforme sua performance! 🏄‍♂️💪

