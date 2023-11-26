import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ListarRespostas } from "../../functions/firebase/listar/ListarResposta";
import { ListarDetalhesPerguntas } from "../../functions/firebase/listar/ListarDetalhesPerguntas";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Box,
  Button,
  Modal,
  TextField,
  CardActions,
} from "@mui/material";
import { adicionarRespostas } from "../../functions/firebase/adicionar/AdicionarResposta";
import { deletarResposta } from "../../functions/firebase/deletar/DeletarResposta";

const DetalhesPergunta = () => {
  const { id } = useParams();
  const [pergunta, setPergunta] = useState({});
  const [respostas, setRespostas] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [perguntaSelecionada, setPerguntaSelecionada] = useState(null);
  const [resposta, setResposta] = useState("");
  const paginaAtualId = id;

  useEffect(() => {
    const carregarDetalhes = async () => {
      try {
        const detalhesPergunta = await ListarDetalhesPerguntas(id);
        setPergunta(detalhesPergunta);
        const respostasData = await ListarRespostas(id);
        setRespostas(respostasData);
      } catch (error) {
      }
    };

    carregarDetalhes();
  }, [id]);

  const enviarResposta = async () => {
    if (!perguntaSelecionada) {
      return;
    }

    try {
      // Convertendo o ID para string explicitamente
      const perguntaIdString = perguntaSelecionada.toString();
      await adicionarRespostas(perguntaIdString, [resposta]);
      fecharModal();
      window.location.reload();
    } catch (err) {
    }
  };

const handleDeletarPergunta = async (respostaId) => {
  try {
    const perguntaIdString = paginaAtualId;
    ;
    const respostaIdString = respostaId.toString();
    await deletarResposta(perguntaIdString, respostaIdString);
    const updatedRespostas = respostas.filter(
      (resposta) => resposta.id !== respostaIdString
    );
    setRespostas(updatedRespostas);
  } catch (error) {
  }
};


  const abrirModal = (pergunta) => {
    setPerguntaSelecionada(pergunta.id);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setPerguntaSelecionada(null);
    setModalAberto(false);
    setResposta("");
  };

  return (
    <div className="container mx-auto">
      <div className="grid min-w-full min-h-screen justify-center justify-items-center ">
        <div className="mt-36">
          <Card
            className="mx-2"
            sx={{
              height: "max-content",
              maxWidth: "500px",
              minWidth: "280px",
            }}
            variant="outlined"
          >
            <CardContent>
              <p className="text-xs font-medium ">{pergunta.materia}</p>
              <p className="pt-2 text-xl" component="div">
                {pergunta.pergunta}
              </p>
              <CardActions>
                <button
                  className="mt-5 bg-indigo-300 font-semibold p-2 text-black rounded-lg"
                  onClick={() => abrirModal(pergunta)}
                >
                  Responder
                </button>
              </CardActions>
            </CardContent>
          </Card>

          {respostas.map((resposta) => (
            <Card
              className="mt-5 mx-2"
              sx={{
                height: "max-content",
                maxWidth: "500px",
                minWidth: "280px",
              }}
              variant="outlined"
            >
              <CardContent>
                <Typography variant="h6" component="div">
                  Resposta
                </Typography>
                <List>
                  <React.Fragment key={resposta.id}>

                    <button
                      className=" px-2 rounded-full flex flex-row  bg-red-500"
                      onClick={() => handleDeletarPergunta(resposta.id)}
                    >
                      X
                    </button>
                    <ListItem className="my-5">{resposta.resposta}</ListItem>
                  </React.Fragment>
                </List>
              </CardContent>
            </Card>
          ))}
        </div>

        <Modal open={modalAberto} onClose={fecharModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 300,
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
    </div>
  );
};

export default DetalhesPergunta;
