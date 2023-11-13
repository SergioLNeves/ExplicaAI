import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {  Pagination, Scrollbar } from "swiper/modules";
import 'swiper/css/scrollbar';
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
    materia: "(Port/Mat)",
    link: "https://domainpublic.files.wordpress.com/2022/02/c.a-4o-ano-aluno.pdf",
  },
  {
    title: "4º Ano Fundamental – Nova Escola",
    image: "https://www.baixelivros.com.br/media/2022/02/caderno-do-aluno.jpg",
    materia: "(Port/Mat)",
    link: "https://domainpublic.files.wordpress.com/2022/02/c.a-4o-ano-aluno.pdf",
  },{
    title: "4º Ano Fundamental – Nova Escola",
    image: "https://www.baixelivros.com.br/media/2022/02/caderno-do-aluno.jpg",
    materia: "(Port/Mat)",
    link: "https://domainpublic.files.wordpress.com/2022/02/c.a-4o-ano-aluno.pdf",
  },
  {
    title: "4º Ano Fundamental – Nova Escola",
    image: "https://www.baixelivros.com.br/media/2022/02/caderno-do-aluno.jpg",
    materia: "(Port/Mat)",
    link: "https://domainpublic.files.wordpress.com/2022/02/c.a-4o-ano-aluno.pdf",
  },
];

const Biblioteca = () => {
  return (
    <div className="">
      <h2 className="mx-10 text-2xl font-semibold my-8">Livros Educativos</h2>
    <Swiper 
      slidesPerView={2}
      spaceBetween={95}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      scrollbar={{
        hide: false,
      }}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 170,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 200,
        },
        1920: {
          slidesPerView: 5,
          spaceBetween: 200,
        },
      }}
      modules={[Pagination, Scrollbar]}
      className="mySwiper"
    >
      {cards.map((card, index) => (
        <SwiperSlide className="mb-9" key={index}>
          <div>
            <Card sx={{ minWidth: 200, maxWidth: 205}}>
              <CardMedia
                sx={{ height: 150 }}
                image={card.image}
                title={card.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.materia}
                </Typography>
              </CardContent>
              <CardActions>
                <button className="bg-zinc-950 text-white rounded-lg px-3 py-1" >Leia mais</button>
              </CardActions>
            </Card>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default Biblioteca;
