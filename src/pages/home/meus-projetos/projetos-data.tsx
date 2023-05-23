import { ImageAPI, ImageNpm } from "../../../services/imagens";

interface ProjetoData {
  id: string;
  nome: string;
  linguagem: string;
  descricao: string;
  link: string;
  imagem: string;
}

export const ProjetosData: ProjetoData[] = [
  {
    id: "1",
    nome: "Max Bot",
    linguagem: "Python",
    descricao:
      "Bot apelidado de Max para realizar tarefas automaticas da heroup entre elas responder mensagens e fazer scrapy de dados. Foi desenvolvido com linguagem Python. Como todo progama o BotMax ainda não se encontra finalizado, pois estamos sempre em constante evolução.",
    link: "https://github.com/guiffsouza/max-bot",
    imagem:
      "https://camo.githubusercontent.com/7fe18c2cfc23fd725120bbf3b41252138a9fbfd87c97bee50658894b7bfbc6ce/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f313039373935303437313330373636393631352f313130303832373635323435303934333033362f31663964316430312d653032662d346663332d386331382d6538386231346364376235662e6a70673f77696474683d393030266865696768743d363030",
  },
  {
    id: "2",
    nome: "Integração com Pagarme",
    linguagem: "JavaScript",
    descricao:
      "Integração com a API de pagamento do Pagarme utilizando ORM Sequelize com banco de dados Relacional mysql.",
    link: "https://github.com/guiffsouza/api-pagamento-nodejs",
    imagem: ImageAPI,
  },
  {
    id: "3",
    nome: "Max Bot",
    linguagem: "JavaScript",
    descricao:
      "Um package NPM com Components React de um formulario. Para facilitar na reutilização de códigos interno.",
    link: "https://github.com/guiffsouza/lib-formulario",
    imagem: ImageNpm,
  },
];
