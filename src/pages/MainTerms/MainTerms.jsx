import React from "react";
import AuthContext from "../../context/AuthProvider";
import { useContext, useState } from "react";
import { Navigate } from "react-router";
import { Login } from "..";
import * as S from "./styles";

export default function Terms() {
  const [nextTerms, setNextTerms] = useState(false)
  const { setAuth } = useContext(AuthContext);
  const [exit, setExit] = useState(false)

  if (exit) {
    return <Navigate to="/" component={<Login />} />;
  }

  if (nextTerms) {
    return <Navigate to="/lgpdTerms" component={<Login />} />;
  }

  function handleAcceptCasabellaTerms() {
    setAuth({ casabellaMainTerms: true });
    setNextTerms(true)
  }
  return (
    <S.TermsWrapper>
      <S.TermsContent>
        <h1>Termos e Condições da Casabella Fragrâncias</h1>
        <p>
          Estes Termos e condições aplicam-se ao uso dos serviços oferecidos por
          MERCADO ENVIOS SERVIÇOS DE LOGÍSTICA LTDA. , devidamente inscrita no
          CNPJ/MF sob o n° 20.121.850/0001-55, situado na Avenida das Nações
          Unidas, 3003, Osasco, São Paulo, CEP 06233-903, denominado “Mercado
          Envios Flex”. Antes de utilizar quaisquer dos serviços
          disponibilizados, o usuário afirma ter lido, entendido e aceitado
          todas as condições estabelecidas nestes Termos e condições do Mercado
          Envios Flex (“Termos e Condições”), bem como os Termos e condições
          gerais do uso do site. I. Do Objeto 1.1. Os Usuários Vendedores que
          oferecem seus produtos na plataforma de comércio eletrônico (“Site”)
          operada por Mercado Livre (“Mercado Livre”) e que contam com soluções
          logísticas próprias ou contratadas com a finalidade de regular a
          prestação dos seguintes serviços, por parte de Mercado Envios Flex, a
          favor dos Usuários Vendedores (conjuntamente, “Serviços”): a. o acesso
          e uso do software denominado “Mercado Envios Flex ” ( “Aplicativo”); e
          b. a referência de usuários compradores (“Usuários Compradores”) do
          Site, interessados em contratar soluções logísticas que possam ser
          oferecidas pelos Usuários Vendedores que utilizam o Aplicativo. II.
          Registro 2.1. Todo Usuário Vendedor que queira contratar e utilizar os
          Serviços deve ler previamente e aceitar todas as condições
          estabelecidas nestes Termos e Condições, bem como as previstas nos
          Termos e condições gerais de uso do Site, Políticas de Privacidade e
          Confidencialidade da Informação, Termos e Condições de uso do Mercado
          Pago e os Termos e condições do Mercado Envios, que, por referência,
          ficam incorporados aos presentes. 2.2. Qualquer pessoa que não aceitar
          estes Termos e Condições, que têm caráter obrigatório e vinculante,
          deverá abster-se de utilizar os Serviços. 2.3. A Mercado Envios Flex
          se reserva o direito de recusar uma solicitação, cancelar ou
          suspender, com ou sem causa, de maneira temporária ou definitiva, a
          prestação de Serviços, sem que tal decisão dê ao Usuário Vendedor
          direitos a indenização ou ressarcimento. III. Abrangência do Serviço
          3.1. Uso do Aplicativo O Aplicativo é uma solução tecnológica que
          Mercado Envios Flex coloca à disposição do Usuário Vendedor, para uso
          através de conexão com a internet, com o objetivo de melhorar não só a
          experiência do serviço de transporte e distribuição prestado pelo
          Usuário Vendedor para envio das compras feitas através do Site
          (“Serviço de Transporte”), mas também para proporcionar uma melhor
          experiência de compra no Site. 3.1.1. Neste sentido, o Aplicativo
          possibilita o acompanhamento do envio por parte dos Usuários
          Vendedores e dos Usuários Compradores, já que (i) facilita a leitura
          do código QR das etiquetas correspondentes aos envios do Usuário
          Vendedor e (ii) registra cada passo dessas entregas, transmitindo a
          informação aos sistemas da Mercado Envios Flex para que ela possa
          compartilhá-la com os usuários (vendedor e comprador) que contrataram
          entre si o Serviço de Transporte. 3.1.2. É responsabilidade do Usuário
          Vendedor que os transportadores escolhidos para realizar o Serviço de
          Transporte (funcionários ou prestadores de serviços do Usuário
          Vendedor, sob qualquer modalidade) utilizem o Aplicativo (doravante,
          os “Transportadores”). Para tanto, o Usuário Vendedor solicitará que
          os Transportadores baixem o Aplicativo. 3.2. Indicação de Usuários
          Compradores Ao se registrar como usuário dos Serviços e utilizar o
          Aplicativo, a Mercado Envios Flex indicará ao Usuário Vendedor certos
          Usuários Compradores que tenham solicitado o serviço de envio do
          produto vendido pelo Usuário Vendedor. Para fazer o indicação
          mencionada, a Mercado Envios Flex levará em conta a capacidade
          operacional do Usuário Vendedor de cumprir a promessa de entrega, com
          base em seu prévio comportamento no Site. 3.2.1. O Usuário Vendedor
          aceita e reconhece que Mercado Envios Flex não será obrigada, em
          qualquer momento, a encaminhar ao Usuário Vendedor um volume mínimo de
          Usuários Compradores para eventual contratação do Serviço de
          Transporte, nem garante, de forma alguma, um volume de negócios ou
          determinada entrada de dinheiro. 3.2.2. Caso a Mercado Envios Flex
          encaminhe um Usuário Comprador para a prestação do Serviço de
          Transporte, o Usuário Vendedor coordenará com seus Transportadores a
          distribuição do produto adquirido pelo Usuário Comprador, de forma que
          este seja entregue ao Usuário Comprador dentro do prazo prometido pelo
          Usuário Vendedor. 3.3. Uso do Aplicativo. Direitos de propriedade
          intelectual O Aplicativo, incluindo, sem limitação, os conteúdos das
          telas, bem como os programas, bases de dados, redes, arquivos etc. que
          permitem ao Usuário Vendedor acessar e usar o Aplicativo, são
          propriedade exclusiva da Mercado Envios Flex. A Mercado Envios Flex se
          reserva todos os direitos sobre o Aplicativo que não sejam
          expressamente outorgados pelo Usuário Vendedor através do presente.
          3.3.1. A Mercado Envios Flex outorga ao Usuário Vendedor o uso
          limitado, pessoal (para si e para seus Transportadores), revogável,
          não exclusivo e intransferível do Aplicativo, unicamente para o
          objetivo de facilitar o Serviço de Transporte e melhorar a experiência
          de compra do Usuário Comprador e não para sua comercialização. 3.3.2.
          O Usuário Vendedor reconhece que o Aplicativo, bem como sua estrutura,
          organização e código-fonte são segredos comerciais valiosos, que
          pertencem à Mercado Envios Flex. Portanto, exceto pelo uso e licenças
          expressamente previstos no presente, o Usuário Vendedor não poderá,
          direta ou indiretamente, por si ou através de terceiros, (a)
          modificar, adaptar, alterar ou traduzir o Aplicativo ou criar a partir
          do Aplicativo; (b) distribuir, conceder ou permitir o uso a terceiros,
          oferecer em locação ou empréstimo, ou transferir de qualquer outro
          modo o uso do Aplicativo a terceiros; ou (c) aplicar ferramentas de
          engenharia inversa para decodificar, descompilar, desmontar, acessar,
          consultar ou tentar, de qualquer outro modo, decifrar o código-fonte
          do Aplicativo. IV. Não exclusividade por indicação de Usuários
          Compradores 4.1. Cada Usuário Vendedor que queira contratar os
          Serviços, reconhece e aceita que a Mercado Envios Flex indique
          Usuários Compradores em condições iguais ou similares às que o faz a
          favor desse Usuário Vendedor a outros Usuários Vendedores e/ou a
          prestadores de serviços de logística, transporte e/ou serviços postais
          e o autoriza de maneira expressa. V. Responsabilidade da Mercado
          Envios Flex 5.1. Responsabilidade pelo Aplicativo A Mercado Envios
          Flex coloca à disposição e permite o uso do Aplicativo por parte de
          determinados Usuários Vendedores, sem prestar qualquer garantia
          expressa, implícita ou legal, inclusive de disponibilidade, adequação
          para usos ou sistemas determinados, ausência de violações ou erros. A
          Mercado Envios Flex não garante o uso contínuo e ininterrupto do
          Aplicativo. Portanto, os Usuários Vendedores não poderão imputar à
          Mercado Envios Flex qualquer responsabilidade, nem exigir pagamento
          por lucro cessante, em virtude de prejuízos resultantes de (i)
          dificuldades técnicas ou falhas nos sistemas, na Internet ou qualquer
          outro tipo de erro ou (ii) indisponibilidade causada por manutenção ou
          melhorias. 5.1.1. A falta de funcionamento adequado do Aplicativo não
          será motivo para que o Usuário Vendedor se exima de cumprir as
          obrigações assumidas com o Usuário Comprador, especialmente no que se
          refere à entrega do produto acordado e demais obrigações que figuram
          nestes Termos e Condições e em outros documentos. 5.1.2. O Usuário
          Vendedor reconhece e aceita que as limitações de responsabilidade
          acordadas nestes Termos e Condições são parte essencial do acordo e,
          portanto, são razoáveis, já que constituem um elemento fundamental
          para manter as condições gerais. 5.2. Responsabilidade pela indicação
          de Usuários Compradores Os Usuários Vendedores reconhecem e aceitam
          que: a. A Mercado Envios Flex limita sua responsabilidade a indicar
          certos Usuários Compradores que comprem um produto oferecido pelo
          Usuário Vendedor através do Site a favor de tal Usuário Vendedor; b. A
          Mercado Envios Flex é um terceiro em relação ao Serviço de Transporte
          celebrado entre os Usuários Vendedores e os Usuários Compradores.
          Portanto, não será responsável por nenhuma das obrigações contraídas
          pelas partes (inclusive, sem carácter limitativo, que o produto chegue
          no prazo prometido e nas condições acordadas, que haja uma pessoa para
          receber o produto no local, data e hora combinados entre as partes, o
          cumprimento das obrigações de cada uma das partes, a emissão de um
          comprovante fiscal etc.); c. indicar ou não Usuários Compradores e a
          quantidade de indicações realizadas fica a total critério da Mercado
          Envios Flex. VI. Obrigações do Usuário Vendedor 6.1. O Usuário
          Vendedor reconhece e aceita ser o único responsável pelo Serviço de
          Transporte e pela contratação e supervisão dos Transportadores, que
          tenham baixado o Aplicativo e a quem tenham sido entregues pacotes,
          cujo envio seja realizado utilizando o Aplicativo. 6.2. O Usuário
          Vendedor se obriga a indenizar plenamente e a manter ileso Mercado
          Envios Flex, as empresas relacionadas e seus respectivos diretores,
          gerentes, funcionários, representantes, agentes e empregados, em
          relação a qualquer dano, custo, prejuízo, passivo, gasto (inclusive,
          sem limitação, honorários de advogados, peritos e gastos com a
          justiça) proveniente de ações judiciais e/ou extrajudiciais originadas
          por e/ou vinculadas a qualquer: (i) descumprimento do Usuário Vendedor
          e/ou de seus Transportadores, seu pessoal e/ou contratados às
          obrigações assumidas pelo Usuário Vendedor nestes Termos e Condições
          e/ou (ii) falsidade ou inexatidão das declarações formuladas pelo
          Usuário Vendedor nos Termos e Condições (doravante, “Obrigação de
          Responsabilidade”). 6.2.1. Especialmente, mas sem limitação, o Usuário
          Vendedor assume a Obrigação de Resposanbilidade a respeito de qualquer
          ação judicial e/ou extrajudicial (a) trabalhista, por acidentes de
          trabalho ou enfermidades profissionais ou similares, que afetem
          empregados, atendentes, funcionários e/ou pessoal que desempenhe ou
          que tenha desempenhado relação de atendimento, ou como contratado do
          Usuário Vendedor e/ou seus Transportadores, seja ele fundamentado na
          lei de contrato de trabalho, lei de riscos trabalhistas, Código Civil
          ou em qualquer outra norma; e/ou (b) relacionado ao Serviço de
          Transporte prestado pelo Usuário Vendedor, incluindo, sem limitação:
          os honorários de mediadores, peritos, advogados, despesas, gastos e
          custos, e qualquer outro valor derivado da ação em questão. 6.3. A
          Mercado Envios Flex poderá invocar a Obrigação de Responsabilidade
          mesmo em casos de transação, conciliação ou similares em que o Usuário
          Vendedor não tenha feito intervenção. 6.4. A Mercado Envios Flex
          comunicará ao Usuário Vendedor por escrito (sendo válida, para tanto,
          uma comunicação ao endereço de e-mail registrado no Site), no prazo de
          5 (cinco) dias úteis, a partir de quando tomar conhecimento, a
          existência de qualquer queixa relacionada ao Serviço de Transporte ou
          a outros assuntos pelos quais o Usuário Vendedor tenha acordado a
          Obrigação de Responsabilidade. A demora em tal notificação não poderá
          ser interpretada como isenção de responsabilidade do Usuário Vendedor
          e não prejudicará em nada a Obrigação de Responsabilidade. 6.5.O
          Serviço de Transporte deverá ser prestado pelo Usuário Vendedor por si
          ou através dos Transportadores que ele contratar, de modo seguro,
          aplicando as capacidades, experiência, recursos materiais, aptidões,
          tecnologia e técnicas idôneas para obter-se o resultado esperado.
          6.5.1.O Usuário Vendedor e/ou Transportadores deverão trabalhar de
          forma prudente, respeitosa, e com cuidado e diligência de um
          profissional, conforme o tipo de atividade desenvolvida e os padrões
          aplicáveis à atividade e, em cumprimento à respectiva norma. 6.6. Caso
          um produto não chegue ao Usuário Comprador por qualquer motivo, o
          Usuário Vendedor deve comunicar a Mercado Envios Flex e ao Mercado
          Livre para que seja retido na conta do Mercado Pago do Usuário
          Vendedor, um montante equivalente ao valor do produto vendido no Site
          e não entregue, além do preço cobrado pelos serviços de entrega, para
          que se faça o reembolso ao Usuário Comprador. Para tanto, será
          considerado o valor da publicação no site dos produtos não entregues.
          6.6.1.O mecanismo previsto no parágrafo anterior também será aplicado
          em caso de danos ou roubos ocorridos enquanto um produto estiver sob a
          responsabilidade do Usuário Vendedor ou dos Transportadores. 6.7. O
          Usuário Vendedor ou os Transportadores deverão contratar e
          responsabilizar-se pelo pagamento de todos os seguros correspondentes,
          em virtude da natureza do Serviço de Transporte, conforme o que
          dispõem as normas legais vigentes aplicáveis e as que futuramente as
          substituírem no lugar da prestação do serviço. 6.8. O Usuário Vendedor
          ou os Transportadores serão totalmente responsáveis por todos os
          gastos decorrentes da prestação do Serviço de Transporte, incluindo
          remunerações de qualquer natureza, combustível, aportes, pagamentos
          pelo uso de ligações por celulares ou troca de dados, contribuições ou
          impostos, multas, seguros e habilitações exigidas pelas normas
          aplicáveis na época ou as que futuramente as substituírem, e qualquer
          outra obrigação de pagamento que surja em relação ao vínculo
          trabalhista e/ou contratual entre o Usuário Vendedor e seus
          funcionários ou prestadores de serviço, incumbidos da prestação do
          Serviço de Transporte. O Usuário Vendedor declara e garante que
          cumprirá estritamente e da maneira devida essas obrigações. 6.9. O
          Usuário Vendedor e/ou os Transportadores deverão utilizar dispositivos
          compatíveis com a última versão do Aplicativo. VII. Relação entre o
          Usuário Vendedor e a Mercado Envios Flex 7.1. O Usuário Vendedor e a
          Mercado Envios Flex declaram ser independentes entre si, sem nenhuma
          relação societária ou comercial além da pactuada nestes Termos e
          Condições, e daqueles aplicáveis em relação aos Termos e condições
          gerais de uso do site, Termos e condições de uso do Mercado Pago e
          Termos e condições do Mercado Envios Flex e qualquer outro Serviço ou
          produto oferecido pelo Mercado Livre e/ou Mercado Envios Flex. Cada um
          deles será o único responsável por seu pessoal próprio e/ou contratado
          e manterá o outro ileso por qualquer queixa (incluindo os custos e
          gastos associados a ela) derivada das obrigações contratuais,
          impositivas, trabalhistas, previdenciárias que sejam de sua
          responsabilidade ou que estejam baseadas em normas sobre
          responsabilidade civil decorrente de danos sofridos por pessoas ou
          coisas. 7.2. O Usuário Vendedor especialmente reconhece e aceita que o
          uso do Aplicativo por parte dos Transportadores e/ou as tarefas que
          possam realizar em relação ao Serviço de Transporte prestado pelo
          Usuário Vendedor não altera em nada sua independência em relação à
          Mercado Envios Flex. 7.3. Se a Mercado Envios Flex considerar que a
          utilização do Aplicativo e/ou, em geral, a utilização dos Serviços por
          parte do Usuário Vendedor e/ou dos Transportadores pode gerar algum
          tipo de responsabilidade para si ou para o Mercado Livre, poderá tomar
          todas as medidas que considere necessárias para evitar qualquer
          responsabilidade que possa recair sobre a Mercado Envios Flex, Mercado
          Livre ou qualquer outra empresa vinculada ou relacionada. VIII.
          Tarifas e forma de pagamento dos Serviços de Transporte 8.1. A Mercado
          Envios Flex sugerirá àqueles Usuários Vendedores que utilizem o
          Serviço uma tarifa por envio. O Usuário Vendedor poderá acordar com o
          Usuário Comprador a prestação de Serviços similares aos Serviços de
          Transporte, com total liberdade para fixar a tarifa aplicável
          recorrendo à opção “retirar no endereço do vendedor”. Nesse caso, a
          Mercado Envios Flex não oferecerá os Serviços. 8.2. O Usuário Vendedor
          informa à Mercado Envios Flex que a única forma de pagamento para a
          cobrança dos Serviços de Transporte que forem prestados com a
          utilização dos Serviços será o Mercado Pago. Em consequência, o
          Usuário Vendedor instrui o Mercado Livre a realizar tais cobranças de
          acordo com os Termos e Condições de uso do Mercado Pago. 8.3. O
          Usuário Vendedor reconhece e aceita que é o único responsável pela
          emissão e entrega de um comprovante fiscal relativo à prestação dos
          Serviços de Transporte. IX. Autorizações 9.1. Os prazos estimados para
          a entrega de produtos aos Usuários Compradores que forem indicados no
          fluxo de compra de produtos do Site, serão ajustados de acordo com o
          histórico de entregas dos Transportadores contratados pelo Usuário
          Vendedor, verificados no Aplicativo. Esses prazos nunca poderão
          ultrapassar o dia útil seguinte à realização da transação no Site. A
          Mercado Envios Flex informará ao Usuário Vendedor o prazo de entrega
          para cada envio. 9.2. A Mercado Envios Flex poderá instalar no
          Aplicativo, sem autorização dos Usuários Vendedores e/ou dos
          Transportadores, programas de proteção ou segurança contra ataques
          externos, antivírus, firewall, upgrades de software e hardware. 9.3.
          Os Usuários Vendedores e/ou Transportadores que utilizem o Aplicativo
          deverão autorizar em seus dispositivos móveis o acesso à câmera de
          fotos ou outro mecanismo para o registro de imagens, e aos sistemas ou
          hardware que permitam a geolocalização dos Transportadores. 9.4. O
          Usuário Vendedor declara e garante que conta com as autorizações dos
          Transportadores para transferir a terceiros informação destes,
          incluindo, mas não limitado a seu nome, imagem, localização geográfica
          e dados do veículo em uso para a utilização do Aplicativo (“Dados
          Pessoais do Transportador”). X. Consequências do descumprimento 10.1.
          Caso haja alguma violação aos Termos e Condições, a Mercado Envios
          Flex poderá - sem necessidade de prévia notificação - suspender (pelo
          prazo a ser definido por Mercado Envios Flex) ou finalizar, totalmente
          ou em parte, os Serviços, bloquear qualquer atividade abusiva e/ou
          realizar qualquer ação considerada apropriada, a seu exclusivo
          critério. A Mercado Envios Flex se reserva o direito de denunciar tais
          violações às autoridades pertinentes e revelar qualquer informação com
          a finalidade de cumprir as leis, regulamentos e/ou a pedido de uma
          autoridade competente, para cooperar com elas em sua resolução. 10.2.
          Sem prejuízo de outras medidas, a Mercado Envios Flex poderá, a seu
          critério, advertir, restringir e/ou suspender, de forma temporária
          (pelo prazo determinado pela Mercado Envios Flex) ou definitiva, o
          acesso ao Aplicativo, bem como seu uso por parte do Usuário Vendedor
          e/ou seus Transportadores, iniciar as ações que julgue pertinentes
          e/ou aplicar uma sanção que impacte negativamente a reputação do
          Usuário Vendedor se (a) descumprir alguma lei ou qualquer uma das
          disposições dos presentes Termos e Condições, incluindo, sem
          limitação, os Termos e Condições de uso do Site, Termos e Condições de
          uso do Mercado Pago e os Termos e Condições do Mercado Envios Flex do
          Mercado Livre, aceitos no momento do registro; (b) descumprir o
          compromisso de entrega no tempo previsto e/ou (c) incorrer, a critério
          da Mercado Envios Flex, em condutas ou atos dolosos ou fraudulentos.
          XI. Confidencialidade 11.1. Cada uma das Partes concorda: (i) que não
          divulgará a qualquer terceiro, ou utilizará qualquer Informação
          Confidencial a ela revelada pela outra Parte, exceto se expressamente
          autorizado neste termos e condições; (ii) em tomar todas as medidas
          razoáveis à manutenção da confidencialidade das Informações
          Confidenciais da outra Parte, que estejam em seu poder e controle,
          sendo que referidas medidas em nenhum momento serão inferiores às
          medidas tomadas na manutenção da confidencialidade de informações de
          sua propriedade e de mesma importância. 11.2. Ademais, as Partes
          comprometem-se a não solicitar, uma da outra, informações não
          relacionadas com o exercício das obrigações assumidas por cada uma das
          Partes nos termos e condições. Tais informações somente serão
          fornecidas dentro dos limites e das condições em cada caso permitidas
          pela legislação vigente. 11.3. As obrigações de confidencialidade ora
          previstos sobreviverão à extinção do termo pelo prazo de 5 (cinco)
          anos a contar da data do seu término. XII. Notificações 12.1. A
          Mercado Envios Flex poderá enviar mensagens através do Aplicativo, por
          mensagem de texto ou e-mail. Essas mensagens serão notificações
          válidas em relação aos Usuários Vendedores e/ou Transportadores que
          tenham baixado o Aplicativo a pedido de Usuários Vendedores, que
          deverão manter sempre atualizados seus dados de contato. 12.2. O
          Usuário Vendedor deverá notificar imediatamente à Mercado Envios Flex
          em caso de roubo, extravio ou qualquer outra circunstância que atrase
          ou impossibilite o envio, ou a perda por qualquer motivo, de
          dispositivos em que tenha sido baixado o Aplicativo. XIII. Dados
          Pessoais 13.1. Para o correto funcionamento do Aplicativo, o Mercado
          Libre coletará e utilizará os dados cadastrais fornecidos pelos
          Vendedores do Site Mercado Libre, que desejam utilizar o Mercado
          Shipping Flex. 13.2. Para saber mais sobre como cuidamos de seus dados
          pessoais, você pode consultar nossa Declaração de Informações de
          Privacidade e Confidencialidade. XIV. Das disposições finais 14.1. As
          partes declaram, que não estão envolvidas em práticas incompatíveis
          com os direitos da criança e do adolescente estabelecidos na
          legislação vigente, em especial aquelas que determinam a não
          contratação de crianças ou adolescentes abaixo da idade mínima
          permitida, bem como à proteção dos mesmos contra qualquer trabalho
          considerado arriscado ou que interfira na sua educação ou possa ser
          prejudicial à sua saúde ou ao seu desenvolvimento físico, mental,
          espiritual, moral ou social. 14.2. Declaram, ainda, as partes que não
          se utilizarão, em hipótese alguma, de trabalhadores submetidos ou
          forçados a condições ilegais de domínio do empregador (trabalho
          escravo), sob pena de rescisão imediata e de pleno direito deste
          instrumento, submetendo-se a parte que infringir esta cláusula ao
          ressarcimento das perdas e danos causados, além de pagamento de multa
          contratual, bem como às penalidades previstas em lei. 14.3. Toda e
          qualquer tolerância quanto ao descumprimento ou cumprimento irregular
          das obrigações aqui previstas, por qualquer das partes, não
          constituirá novação ou alteração das disposições ora pactuadas, mas
          tão somente liberalidade. 14.4. É vedado a qualquer das partes ceder
          ou transferir os direitos e obrigações oriundas dos presentes Termos e
          Condições, sem o prévio e expresso consentimento da outra parte. 14.5.
          Estes Termos e Condições obrigam as partes, seus sucessores e
          cessionários a qualquer título. 14.6. Estes Termos e Condições revogam
          e substituem todos e quaisquer entendimentos, acordos ou contratos
          anteriormente celebrados entre as partes, tenham sido escritos ou
          verbais, representando o completo e integral entendimento entre as
          partes com relação ao objeto nele previsto. 14.7. As partes reconhecem
          que a prestação dos serviços ora contratados não estabelecerá qualquer
          relação ou vínculo empregatício dos empregados das partes, que
          permanecerão livres de quaisquer responsabilidades ou obrigações com
          relação aos empregados da outra parte. 14.5. Licenças e habilitações.
          Capacidade. O Usuário Vendedor declara e garante que ele e os
          Transportadores a quem instruir a baixar, acessar e utilizar o
          Aplicativo e realizar o Serviço de Transporte têm pleno direito, e
          contam com as permitems, habilitações, licenças, seguros da atividade
          devidamente concedidas pelas respectivas autoridades, se aplicável, de
          acordo com a regulamentação local, poderes e autoridade para assumir
          as obrigações, de acordo com estes Termos e Condições, as leis e
          regulamentos aplicáveis. Em caso de não conformidade, o Usuário
          Vendedor será responsável por todas as consequências, incluindo multas
          e sanções de acordo com os regulamentos aplicáveis. 14.5. Alterações.
          O Usuário Vendedor aceita e reconhece que a Mercado Envios Flex poderá
          alterar os Termos e Condições a qualquer tempo, tornando públicos, no
          Site ou em qualquer página onde figurem estes Termos e Condições, as
          alterações feitas. Todos os termos alterados entrarão em vigor 10
          (dez) dias após a sua publicação. Tais modificações serão comunicadas
          pelo Mercado Livre aos Usuários Vendedores que tenham informado na
          configuração da conta do Mercado Livre que desejam receber
          notificações de mudanças nos Termos e Condições. Todo Usuário Vendedor
          que não estiver de acordo com as modificações realizadas pela Mercado
          Envios Flex poderá solicitar o encerramento do Serviço. XV. Lei
          aplicável e juiz competente Todos os itens deste acordo serão regidos
          pelas leis vigentes no Brasil. Qualquer controvérsia decorrente dos
          Termos e Condições, sua existência, validade, interpretação,
          abrangência ou cumprimento, será submetida ao Foro da Cidade de São
          Paulo.
        </p>
      </S.TermsContent>
      <S.AcceptDeclineButtons>
        <button onClick={() => setExit(true)}>Cancelar</button>
        <button onClick={handleAcceptCasabellaTerms}>Aceitar</button>
      </S.AcceptDeclineButtons>
    </S.TermsWrapper>
  );
}
