const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const PORTA = 8080

const pescaria = [
  {id: 1,
  nome: 'Anzol',
  descricao: '10 Anzol em aço carbono Maruseigo, super resistente, niquelado/prateado, afiado a laser. Tamanho 6 - medindo 12mm por 5mm.',
  imagem: 'https://iscaecompanhia.com.br/content/produtos/principal/17052019_152909_1.jpg'
  },
  {id: 2,
    nome: 'Linha',
    descricao: '100m de Linha Monofilamento 0,30mm que suporta até 6kg, linha especial com baixa memória e ótima resistência, linha na cor transparente ou fumê.',
    imagem: 'https://cdn.awsli.com.br/800x800/1109/1109216/produto/45572918/81a11f9d60.jpg'
  },
  {id: 3,
    nome: 'Molinete',
    descricao: '01 Molinete200 Albatroz ,Baihui , Pico , Beat, toto , Xingu , HT 100 , Lamazon , Sol , Jymmi , Marine , Maruri, Plusfish com 1rolamento, Cores e Modelos Enviados Conforme Disponibilidade de estoque, sistema balanceado, relação de recolhimento 5.2:1, carretel em plástico, super leve e macio para uso. Capacidade de linha 0,18mm 245 m 0,20mm 200m 0,25mm 125m.',
    imagem: 'https://www.pescaki.com/juninho/original/uranofto1-43746.jpg'
  },
  {id: 4,
    nome: 'Boia Para Molinete',
    descricao: '01 Boia de arremesso em isopor colorido indicada para peixes pequenos, médios e grandes. Também é utilizada para controlar a profundidade da isca em pesqueiros, lagos e represa quando colocada no chicote entre o anzol e a boia.',
    imagem: 'https://cdn.awsli.com.br/600x450/363/363555/produto/19953825/8ffb408b3e.jpg'
  },
  {id: 5,
    nome: 'Vara de Pescaria',
    descricao: '01 Vara 1,35m 100% Fibra de Vidro para molinete, cabo em EVA, passadores em cerâmica, em duas partes, medindo 65cm cada uma, facilitando o armazenamento e transporte. Indicada para peixes até 6Quilos . 4-12lb Ação Média.',
    imagem: 'https://www.pescapinheiros.com.br/produtos/original/midori-s-para-molinetes-6-25947.jpg'
  },
  {id: 6,
    nome: 'Maleta de Pescaria',
    descricao: '01 Estojo em polipropileno com 8 divisórias. Um ótimo organizador para facilitar sua pescaria, podendo armazenar anzois, giradores, miçangas, chumbadas, grampos, boias e outros. Medindo 12,6cm x 9,5cm x 2,6cm.',
    imagem: 'https://http2.mlstatic.com/maleta-pesca-dupla-face-azul-hi-44-divisorias-isca-anzol-D_NQ_NP_701432-MLB31187579562_062019-F.jpg'
  },
  {id: 7,
    nome: 'Suporte para Vara de Pesca',
    descricao: 'Suporte unitário para vara de pesca (molinete e carretilha), desmontável.',
    imagem: 'https://images.tcdn.com.br/img/img_prod/682776/suporte_de_varas_pesqueiro_apoio_pesca_ac300_245_1_20200116104351.jpg'
  },
  {id: 8,
    nome: 'Isca Artificial',
    descricao: '01 pct Isca especial para pesca Bolinha Ninja. Ração com óleo de peixe, óleo de salmão, essencia e atrativo. Turbine sua pescaria com este item.',
    imagem: 'https://images.tcdn.com.br/img/img_prod/660705/isca_artificial_pesca_tucunare_kit_com_10_269_1_20200201194500.jpg'
  },
  {id: 9,
    nome: 'Viveiro',
    descricao: '01 Viveiro/Samburá para guardar seus peixes. Em nylon, tela de mosquiteiro. Tamanho M (31cmx17xm)',
    imagem: 'https://d26lpennugtm8s.cloudfront.net/stores/723/962/products/sambura-cesto-viveiro-pesca-com-flutuadores-em-nylon-verde1-969a716c15e67ac5ba15397086767635-1024-1024.jpg'
  },
  {id: 10,
    nome: 'Kit de Pescaria Completo',
    descricao: 'Kit Pesca Pescaria Completa Vara Molinete Maleta + 72 Itens.',
    imagem: 'https://http2.mlstatic.com/conjunto-de-pesca-pescaria-completa-vara-molinete-72-itens-D_NQ_NP_785103-MLB42580084087_072020-F.jpg'
  },

];

app.use(bodyParser.json());
app.use(cors());

// retorna todos os itens do array
app.get("/pescaria", (req, res) => {
  res.send(pescaria);
});

// inicializa servidor http na porta PORTA
app.listen(PORTA, () => {
  console.log(`Servidor node ouvindo na porta ${PORTA}`);
});
