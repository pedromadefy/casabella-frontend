import React from "react";
import AuthContext from "../../context/AuthProvider";
import { useContext, useState } from "react";
import { Navigate } from "react-router";
import { Login } from "..";
import * as S from "./styles";

export default function Terms() {
  const [cancel, setCancel] = useState(false);
  const [alltermsAccepted, setAlltermsAccepted] = useState(false);
  const { setAuth } = useContext(AuthContext);

  if (cancel) {
    return <Navigate to="/" component={<Login />} />;
  }

  if (alltermsAccepted) {
    return <Navigate to="/home" component={<Login />} />;
  }


  function handleLgpdTerms() {
    setAuth({ lgpdMainTerms: true });
    setAlltermsAccepted(true);
  }
  return (
    <S.TermsWrapper>
      <S.TermsContent>
        <h1>Termos e Condições da Casabella Fragrâncias</h1>
        <p>
          Em observância à Lei nº. 13.709/18 – Lei Geral de Proteção de Dados
          Pessoais e demais normativas aplicáveis sobre proteção de Dados
          Pessoais, manifesto-me de forma informada, livre, expressa e
          consciente, no sentido de autorizar o SISTEMA SEBRAE a realizar o
          tratamento de meus Dados Pessoais para as finalidades e de acordo com
          as condições aqui estabelecidas. Finalidades do tratamento Os meus
          Dados Pessoais poderão ser utilizados pelo SISTEMA SEBRAE para: 1.
          Cumprir as obrigações contratuais, legais e regulatórias do SISTEMA
          SEBRAE, em razão de suas atividades; 2. Execução de seus Programas e
          prestação de serviços; 3. Fomentar, desenvolver e melhorar soluções
          para empreendedores e pequenos negócios; 4. Oferecer produtos e
          serviços que sejam do meu interesse; 5. Realizar pesquisas com os
          clientes que foram atendidos pelo SISTEMA SEBRAE; 6. Realizar a
          comunicação oficial pelo SISTEMA SEBRAE ou por seus prestadores de
          serviço, por meio de quaisquer canais de comunicação (telefone,
          e-mail, SMS, WhatsApp, etc.). Estou ciente que o SISTEMA SEBRAE poderá
          compartilhar os meus Dados Pessoais com seus parceiros e demais
          prestadores de serviços, restringindo-se às funções e atividades por
          cada um desempenhadas e em aderência às finalidades acima
          estabelecidas. Estou ciente que o SISTEMA SEBRAE poderá tomar decisões
          automatizadas com base em meus Dados Pessoais, sendo garantido a mim o
          direito de solicitar, por meio da Ouvidoria do SEBRAE, a revisão
          dessas decisões. Confidencialidade Estou ciente do compromisso
          assumido pelo SISTEMA SEBRAE de tratar os meus Dados Pessoais de forma
          sigilosa e confidencial, mantendo-os em ambiente seguro e não sendo
          utilizados para qualquer fim que não os descritos acima. Revogação
          Estou ciente que, a qualquer tempo, posso retirar o consentimento ora
          fornecido, hipótese em que as atividades desenvolvidas pelo SISTEMA
          SEBRAE, no âmbito de nossa relação, poderão restar prejudicadas.
          Declaro e concordo que os meus Dados Pessoais poderão ser armazenados,
          mesmo após o término do tratamento – inclusive após a revogação do
          consentimento –, (i) para cumprimento de obrigação legal ou
          regulatória pelo SISTEMA SEBRAE ou (ii) desde que tornados anônimos.
          Canal de Atendimento Estou ciente que posso utilizar o canal de
          atendimento à LGPD do SEBRAE, por meio do endereço sebrae.ro/lgpd,
          para tirar dúvidas e/ou realizar solicitações relacionadas ao
          tratamento dos meus Dados Pessoais. Por fim, declaro ter lido e ter
          sido suficientemente informado sobre o conteúdo deste Termo e concordo
          com o tratamento dos meus Dados Pessoais aqui descrito de forma livre
          e esclarecida, em observância à Lei Geral de Proteção de Dados e às
          demais normativas sobre proteção de Dados Pessoais aplicáveis. Canal
          de Comunicação Manifesto-me de forma informada, livre, expressa e
          consciente, no sentido de autorizar o SISTEMA SEBRAE a realizar
          contato comigo através dos seguintes canais: e-mail: ligação SMS
          (preencher com todos os números autorizados) App de comunicação
          (Whatsapp) _____________________, ______ de _________________ de
          _________ _________________________________ assinatura Especificação e
          Tratamento de Dados Pessoais Para atendimento dos empreendedores e dos
          pequenos negócios brasileiros, o Sebrae realiza a coleta de dados
          pessoais de seus clientes por meio de seu cadastro. Abaixo,
          apresentamos as informações pessoais coletadas pelo Sebrae e suas
          respectivas finalidades: • CPF: usamos esse dado para permitir a sua
          identificação em nossos canais de atendimento, como chave de
          autenticação ao acessar as áreas restritas de nossos canais digitais e
          como referência para o enriquecimento e atualização de seu cadastro; •
          Nome: usamos esse dado para permitir a sua identificação em nossos
          canais de atendimento; • Nome de tratamento: usamos esse dado para
          permitir um atendimento mais personalizado; • Data de Nascimento:
          usamos esse dado para confirmação de sua identidade e para garantir a
          segurança infantil, de acordo com a legislação; • Gênero: usamos esse
          dado para personalizar o seu contato, para divulgação de ações e
          soluções direcionadas para gêneros específicos e para realização de
          pesquisas segmentadas; • Deficiente físico: usamos esse dado como
          referência para permitir a preparação ou adequação do atendimento do
          Sebrae para o público de deficientes físicos; • Situação atual: usamos
          esse dado para verificar se você tem um pequeno negócio, formal,
          informal ou se você é um potencial empreendedor, o que nos permite um
          melhor direcionamento de nossa comunicação e avaliar como está o nosso
          atendimento para cada um desses públicos; • Cargo: usamos esse dado
          para permitir verificar a qual público de nossos serviços você
          pertence; • Telefone: usamos esse dado para ações de divulgação de
          produtos e serviços, para realização de pesquisas por meio de ligação
          ou de mensagem de texto, para responder às suas solicitações ou
          pedidos feitos em nossos canais ou para informá-lo de questões
          transacionais, como mudança de horário do atendimento ou de um evento,
          por exemplo. o Realizamos ligações e envio de mensagens de texto com
          fins promocionais de acordo com a sua preferência e sua autorização,
          você pode entrar em contato conosco para revisar essa autorização. •
          E-mail: usamos esse dado para ações de divulgação de produtos e
          serviços, para realização de pesquisas por meio de ligação ou de
          mensagem de texto, para responder às suas solicitações ou pedidos
          feitos em nossos canais, ou para informá-lo de questões transacionais,
          como dados de uma contratação de serviços do Sebrae, por exemplo; o
          Realizamos o envio de e-mails com fins promocionais de acordo com a
          sua preferência e sua autorização, você pode entrar em contato conosco
          para revisar essa autorização. • Informações de localidade (CEP, UF,
          cidade, bairro e endereço): usamos esses dados para permitir a
          identificação de como podemos apoiá-lo localmente, para trazer
          informações importantes sobre a cidade em que você está para apoiar em
          nosso processo de entendimento de suas necessidades, para envio de
          material de qualificação de alguns de nossos eventos, como
          destinatário em mala direta, para envio de cobrança judicial,
          direcionamento do atendimento em grandes cidades, para permitir o seu
          direcionamento ao atendimento por equipes de seu estado e para
          permitir um melhor planejamento do Sebrae na atuação em sua região.
        </p>
      </S.TermsContent>
      <S.AcceptDeclineButtons>
        <button onClick={() => setCancel(true)}>Cancelar</button>
        <button onClick={handleLgpdTerms}>Aceitar</button>
      </S.AcceptDeclineButtons>
    </S.TermsWrapper>
  );
}
