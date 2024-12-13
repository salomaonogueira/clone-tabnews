function status(request, response) {
  response.status(200).json({ chave: "Sou um aluno acima da média" });
}

export default status;
