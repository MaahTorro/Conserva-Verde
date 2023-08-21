import "./boxcontato.css";

function BoxContato() {
  return (
    <section className="contatosection">
      <div className="tituloinicio">
        <div className="tituloalinhamento">
          <h1 className="teste1">CONTATO</h1>
          <h2 className="teste2">ENTRAR EM CONTATO</h2>
        </div>
      </div>

      <div className="centrocontato">
        <div className="text">
          <h2 className="titulotext">Envie-nos uma mensagem!</h2>
          <p className="texto">
          Estamos aqui para ouvir você. Compartilhe suas perguntas, sugestões e preocupações preenchendo o formulário abaixo. Sua mensagem é importante para nós e será tratada com cuidado pela nossa equipe.
         <br />
         <br />
          Número: (11) 987654321
          <br />
          <br />
          Email: conservaverde@gov.com.br
          </p>
        </div>

        <div className="inputshow">
          <input
            className="emailinputcontato"
            type="text"
            name=""
            id=""
            placeholder="Nome"
          />
          <input
            className="emailinputcontato"
            type="email"
            name=""
            id=""
            placeholder="Email"
          />
          <textarea
            className="texinputcontato"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Digite sua mensagem"
          ></textarea>

            <button className="BOTAO">Enviar</button>

        </div>
      </div>
    </section>
  );
}

export default BoxContato;
