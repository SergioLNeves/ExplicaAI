import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const cards = [
  {
    title: "4º Ano Fundamental – Nova Escola",
    image: "https://www.baixelivros.com.br/media/2022/02/caderno-do-aluno.jpg",
    materia: "(Português/Matemática)",
    link: "https://domainpublic.files.wordpress.com/2022/02/c.a-4o-ano-aluno.pdf",
  },
  {
    title: "Manual do Enem 2021 – Danilo Cabral",
    image: "https://www.baixelivros.com.br/media/2021/11/manual-enem.jpg",
    materia: "(ENEM)",
    link: "https://www.manualdoenemifpa.com.br/wp-content/uploads/2021/07/MANUAL_DO_ENEM_2021.pdf",
  },{
    title: "Como Organizar os Seus Estudos – Enem",
    image: "https://www.baixelivros.com.br/media/2021/06/como-organizar-estudos.jpg",
    materia: "(ENEM)",
    link: "https://5ca0e999-de9a-47e0-9b77-7e3eeab0592c.usrfiles.com/ugd/5ca0e9_c1a5fcc1f84a4182b7455dd205e02395.pdf",
  },
  {
    title: "Enem: Questões e Dicas – Maxi",
    image: "https://www.baixelivros.com.br/media/2020/05/enem-questoes-dicas.jpg",
    materia: "(ENEM)",
    link: "https://cursinhomaximize.org.br/wp-content/uploads/2018/06/ebook-2ªed.pdf",
  },{
    title: "Linguagens e seus Códigos – Português e Inglês",
    image: "https://www.baixelivros.com.br/media/2020/05/linguagens-e-codigos.jpg",
    materia: "(Português/Inglês)",
    link: "https://www.baixelivros.com.br/download-gratuito?linguagens-e-codigos.pdf",
  },
  {
    title: "Ciências da Natureza e Suas Tecnologias – Vários Autores",
    image: "https://www.baixelivros.com.br/media/2020/02/ciencias-da-natureza.jpg",
    materia: "(Química/Física/Biologia)",
    link: "https://www.unicesumar.edu.br/wp-content/themes/unicesumar-child-ensinomedio/arquivos/ebook/ebook-ciencias-da-natureza-e-suas-tecnologias.pdf",
  },{
    title: "História das Américas – Luciane Chaves",
    image: "https://www.baixelivros.com.br/media/2022/06/historia-das-americas.jpg",
    materia: "(História)",
    link: "https://md.uninta.edu.br/geral/historia-das-americas-i/pdf/Historia-das-Americas-I.pdf",
  },
  {
    title: "Geografia Física II – Fernando Moreira",
    image: "https://www.baixelivros.com.br/media/2022/04/geografia-fisica.jpg",
    materia: "(Geografia/Física)",
    link: "https://domainpublic.files.wordpress.com/2022/04/geografia-fisica-ii_compressed.pdf",
  },{
    title: "Aplicações da Energia Nuclear na Saúde – Vários Autores",
    image: "https://www.baixelivros.com.br/media/2021/10/energia-nuclear.jpg",
    materia: "(Química/Física)",
    link: "https://www.gov.br/cnen/pt-br/material-divulgacao-videos-imagens-publicacoes/publicacoes-1/aplicacoesenergianuclearnasaude.pdf",
  },
  {
    title: "Mudanças Climáticas (Vol. 13) – Vários Autores",
    image: "https://www.baixelivros.com.br/media/2020/06/mundancas-climaticas.jpg",
    materia: "(Biologia)",
    link: "https://5ca0e999-de9a-47e0-9b77-7e3eeab0592c.usrfiles.com/ugd/5ca0e9_46baeb440f144635846b7a35976d5e19.pdf",
  },{
    title: "Astronomia – Ensino Fundamental e Médio",
    image: "https://www.baixelivros.com.br/media/2020/06/astronomia.jpg",
    materia: "(Astronomia)",
    link: "https://5ca0e999-de9a-47e0-9b77-7e3eeab0592c.usrfiles.com/ugd/5ca0e9_4eeafe5b76794efa9d064c41998a1803.pdf",
  },
  {
    title: "Português e Matemática – Vol.1 – Ensino Médio",
    image: "https://www.baixelivros.com.br/media/2021/04/aprender-sempre-volume-um.jpg",
    materia: "(Português/Matemática)",
    link: "https://doc-0c-4o-docs.googleusercontent.com/docs/securesc/u1ek441g748f81i0sb97kjpupkaufn6t/r986ffrd35rghdhqtffms4kknh5ikmdu/1699927200000/18157093437177021428/09892245068010553321/10gWqrWSQPfGMwi46RTF-2OqGOVdMTg8E?e=view&ax=AI0foUpVnUjn7cdWFKVwJZX6RiaPAuEL5HeautxdnCuLcQnBtLG4cclJOlF9XWYPL6J1nV1fONvGEBNxcqJ2xpYSu04MNxag5DR6vfEIh12w-9Ke-9ydd0BvLDBLyAJLZsZR7ZVzjMcamn1JQHcHvphClsb76wyFO0axwcg7w3VVYEg2ZIPMogSkCnl1diyh1myJuATFzAZZevu9EVtvaxN18NsK6LB5XXZ0LcEd_NK48ikuea_qOGHXRHXdP1803AJGB0Iv54U0JD9J22C6o5Kq8GxOEgRREvgCmaqqOZMf_vkkb-tCjgmgmro6HaMEvpYKdZfnStSTfvLkn0HmxRPm7QMj8tFPtEDplG85e3E5CuAD70KdqZydr_KFLgg922h89g8Q5mdo_z6eygfiOFHGbeGjxCnrG4D3N7t6pob-XFoFmJqaFKfBL3eURr6pQG1DN4htucfnWnDHRD5xmxlvjyV_BNEBwB4sXS2lkRxSkwAgkjjXofzZRFnzzKRbxtB2Jl8T7lmcNJRWYIUXInPiZrkPqohrj4mPucUwkABldfLGrppt_CYdM8UdVNoOy4l9IlxiL5pZ6qo3idSjmPPGPwzF3GIJcNUvbD17H4VXqRQ_elzzUhJdyUU1qBz9r-GUW4qkGfl_8vXxBKfPvwYpdGieZhtEES_gZ1a9R8XJCuiMx7-LAX2XbOjGwwdIRF0ihTNaCBR4JBFhrae2Nnt6EaWIEJZpbobmwtjyqdWV64EUGNJvegVxtQ0FH_resRQNyJfvLisA_1YBcLVpDE1NiyAKRfzZI-4bqhzLbQR2CV0KlyD7bFhVTR_TGTTXM-_o6oPcLjndtrydVyqdnYSmGMbCo14eEslRLYTxbTibDcY&uuid=a17be6ce-9427-4966-9231-01817186b5c7&authuser=0&nonce=5ujvqop6no6to&user=09892245068010553321&hash=6vuardgmoef4hmfgv1f2bhpa1hfk01nd",
  },
];

const Biblioteca = () => {
  return (
    <div className="grid mt-40 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 content-center min-w-full min-h-screen justify-items-center">
      {cards.map((card, index) => (
        <div className="mb-4" key={index}>
          <div>
            <Card sx={{ minWidth: 205, maxWidth: 205}}>
              <CardMedia
                sx={{ height: 150 }}
                image={card.image}
                title={card.title}
              />
              <CardContent className="h-44" >
                <Typography gutterBottom variant="h6" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.materia}
                </Typography>
              </CardContent>
              <CardActions>
              <a href={card.link} > <button className="bg-zinc-950 text-white rounded-lg px-3 py-1" >Leia mais </button></a>
              </CardActions>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Biblioteca;
