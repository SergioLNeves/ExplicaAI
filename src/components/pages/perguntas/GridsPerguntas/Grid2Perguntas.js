import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Modal,
  Box,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { ListarPerguntas } from "../../../functions/firebase/listar/ListarPergunta";
import { adicionarRespostas } from "../../../functions/firebase/adicionar/AdicionarResposta";
import { deletarPergunta } from "../../../functions/firebase/deletar/DeletarPergunta";
import { useNavigate } from "react-router-dom";

const Grid2Perguntas = () => {
  const [perguntas, setPerguntas] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [perguntaSelecionada, setPerguntaSelecionada] = useState(null);
  const [resposta, setResposta] = useState("");
  const navigate = useNavigate();
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  const verDetalhes = (perguntaId) => {
    navigate(`/pergunta/${perguntaId}`);
  };

  useEffect(() => {
    const carregarPerguntas = async () => {
      const perguntas = await ListarPerguntas();
      setPerguntas(perguntas);
    };

    carregarPerguntas();
  }, []);

  const abrirModal = (pergunta) => {
    setPerguntaSelecionada(pergunta);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setPerguntaSelecionada(null);
    setModalAberto(false);
    setResposta("");
  };

  const handleDeletarPergunta = async (perguntaId) => {
    try {
      await deletarPergunta(perguntaId);
      console.log(`Pergunta com ID ${perguntaId} deletada com sucesso!`);
      const updatedPerguntas = perguntas.filter(
        (pergunta) => pergunta.id !== perguntaId
      );
      setPerguntas(updatedPerguntas);
    } catch (error) {
      console.error("Erro ao deletar pergunta:", error);
    }
  };

  const enviarResposta = async () => {
    console.log("Pergunta Selecionada:", perguntaSelecionada);
    console.log("Resposta:", resposta);

    if (!perguntaSelecionada) {
      console.log("Erro: Nenhuma pergunta selecionada");
      return;
    }

    try {
      // Convertendo o ID para string explicitamente
      const perguntaIdString = perguntaSelecionada.id.toString();
      await adicionarRespostas(perguntaIdString, [resposta]);
      console.log("Resposta enviada com sucesso!");
      fecharModal();
      window.location.reload();
    } catch (err) {
      console.error("Erro ao enviar resposta:", err);
    }
  };
  const materias = [
    "Todas as Categorias",
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
    <div className="mx-5">
      <div className="grid min-w-full justify-center justify-items-center ">
        <div className="mb-5">
          <Box sx={{ minWidth: 250 }}>
            <FormControl fullWidth variant="standard">
            <InputLabel id="demo-simple-select-label">Matérias</InputLabel>
              <Select
                value={categoriaSelecionada}
                onChange={(e) => setCategoriaSelecionada(e.target.value)}
                inputProps={{
                  name: "categoria",
                  id: "categoria-native",
                }}
              >
                {materias.map((materia, index) => (
                  <MenuItem key={index} value={materia}>
                    {materia}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
        {perguntas
          .filter(
            (pergunta) =>
            categoriaSelecionada === "Todas as Categorias"
            ? " " // Retorna falso para exibir uma lista vazia
            : !categoriaSelecionada || pergunta.materia === categoriaSelecionada
          )
          .map((pergunta, index) => (
            <div className="mb-4" key={index}>
              <Card
                sx={{
                  height: "max-content",
                  maxWidth: "320px",
                  minWidth: "280px",
                }}
              >
                <CardContent>
                  <div className="flex flex-row justify-between pb-5">
                    <Typography
                      variant="body2"
                      className=" text-black font-medium"
                    >
                      {pergunta.materia}
                    </Typography>
                    <button
                      className=" px-2 rounded-full bg-red-500"
                      onClick={() => handleDeletarPergunta(pergunta.id)}
                    >
                      X
                    </button>
                  </div>
                  <Typography
                    gutterBottom
                    className="line-clamp-3"
                    component="div"
                  >
                    {pergunta.pergunta}
                  </Typography>
                </CardContent>
                <CardActions className="flex flex-row justify-between">
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => abrirModal(pergunta)}
                  >
                    Responder
                  </Button>

                  <Button
                    variant="contained"
                    size="small"
                    color="success"
                    className=""
                    onClick={() => verDetalhes(pergunta.id)}
                  >
                    Ver Mais
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))}
      </div>

      <Modal open={modalAberto} onClose={fecharModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Responder à Pergunta
          </Typography>
          <TextField
            label="Sua Resposta"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            value={resposta}
            onChange={(e) => setResposta(e.target.value)}
          />
          <Button onClick={enviarResposta} variant="contained" sx={{ mt: 2 }}>
            Enviar Resposta
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Grid2Perguntas;
