import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { adicionarPergunta } from "../../firebase/adicionar/AdicionarPerguntas";

export function CardPergunta() {
  const [materia, setMateria] = useState("");
  const [pergunta, setPergunta] = useState("");

  const handleChangeMateria = (event) => {
    setMateria(event.target.value);
  };

  const handleChangePergunta = (event) => {
    setPergunta(event.target.value);
  };

  const handleEnviarPergunta = () => {
    // Verifica se ambos os campos estão preenchidos antes de enviar para o Firebase
    if (materia.trim() !== "" && pergunta.trim() !== "") {
      adicionarPergunta(materia, pergunta);
      // Limpa os campos após enviar a pergunta
      setMateria("");
      setPergunta("");
    } else {
      console.error("Por favor, preencha ambos os campos antes de enviar.");
    }
  };

  const materias = [
    "Biologia",
    "Química",
    "Física",
    "Matemática",
    "História",
    "Geografia",
    "Português",
    "Inglês",
    "Educação Física",
    "Artes",
  ];

  return (
    <div className="mx-5 grid lg:grid-cols-2 ">
      <Card className="mt-6 h-max ">
        <CardBody>
          <Typography variant="h5" className="text-black text-3xl mb-10">
            Tire sua dúvida
          </Typography>
          <TextField
            id="filled-multiline-flexible"
            fullWidth
            multiline
            rows={5}
            variant="outlined"
            label="Escreva Sua Pergunta Aqui"
            value={pergunta}
            onChange={handleChangePergunta}
          />

          <Box className="mt-5">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Seleciona sua Matéria
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={materia}
                label="Matérias"
                onChange={handleChangeMateria}
              >
                {materias.map((materia) => (
                  <MenuItem key={materia} value={materia}>
                    {materia}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </CardBody>

        <CardFooter className="pt-0 text-black">
          <Button
            className="bg-indigo-400 hover:bg-indigo-300 text-black p-4"
            onClick={handleEnviarPergunta}
          >
            Enviar Pergunta
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
