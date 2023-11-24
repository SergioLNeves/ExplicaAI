import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { listarBiblioteca } from "../../../functions/firebase/listar/listarBiblioteca";

const Biblioteca = () => {
  const [biblioteca, setBiblioteca] = useState([]);

  useEffect(() => {
    const carregarPosts = async () => {
      const biblioteca = await listarBiblioteca();
      // @ts-ignore
      setBiblioteca(biblioteca);
    };

    carregarPosts();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-2 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 content-center min-w-full min-h-screen justify-items-center">
        {biblioteca.map((card, index) => (
          <div className="mb-4" key={index}>
            <div>
              <Card sx={{ minWidth: 180, maxWidth: 180 }}>
                <CardMedia
                  sx={{ height: 150 }}
                  // @ts-ignore
                  image={card.image}
                  // @ts-ignore
                  title={card.title}
                />
                <CardContent className="h-44">
                  <Typography gutterBottom variant="h6" component="div">
                    {card.
// @ts-ignore
                    title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.
// @ts-ignore
                    materia}
                  </Typography>
                </CardContent>
                <CardActions>
                  <a href={card.
// @ts-ignore
                  link}>
                    {" "}
                    <button className="bg-zinc-950 text-white rounded-lg px-3 py-1">
                      Leia mais{" "}
                    </button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Biblioteca;
