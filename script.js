function res() {

    var tv1 = window.document.getElementById(`text1`)
    var res = window.document.getElementById(`resultado`)
    var r = (tv1.value)

    if (r == `15`) {
        res.innerHTML=`
        <div class="caixa">
        <div class="frase">

        <h2 class="obrigado">Obrigado Amigo! Agora sei que posso contar com você!! Vamos em frente.<h2/>

        <h2>Crowley, o único aliado de Anton o acompanhava pelo fato de que o mesmo sempre o acolheu, diferentemente de todos os outros, que o julgavam uma aberração e não um robô.
        Assim que Anton nasceu, crowley em sua primeira versão o protegeu para que a PRI (Polícia Robótica Internacional) não o levasse para o laboratório malígno robótico, onde todos os bebês humanos ao nascer, passam por um procedimento cirúrgico onde é implantado um microship para que ao se desenvolver não tenha a capacidade de questionar os métodos robóticos impostos pela alta cúpula dos robôres lideres. 
        </h2>
        </div>
        <img src="imagem/fugitivo.jpg" alt="Crowley Fugitivo">
    </div>

    <div class="caixa">
        <div class="frase">
        <h2>Um dia antes de Anton nascer, seus pais foram orientados a deixar seu bebê, durante seis mesês sob cuidados de mães que foram criadas para analisar os possíveis sinais de um bebê saudável ou problemático, pois com base em suas análises só haveria duas opções, em caso de boa saúde, ser entregue ao governo para quê pudessem instruir a criança a colaborar em futuros experimentos humanos, e em caso de problemas, a única opção seria servir em seu laboratório para experimentos ainda não testados cem por cento. 
        </h2>
        </div>
        <img src="imagem/laboratorio.jpg" alt="Laboratório">
    </div>
    
    
    <div class="caixa">
        <div class="frase">
        <h2> Os pais de Anton, sabendo que tudo iria contra seus modos de pensar, resolveram um dia antes da data prevista para a cesariana, forçar um parto normal para que pudesse deixar seu filho em um galpão abandonado próximo ao laboratório, na esperança de alguém pudesse o encontrar e levar para longe de todos os metódos robóticos possíveis, já que eles não tinham forças para lutar contra todo o sistema robótico.  
        </h2>
        </div>
        <img src="imagem/abandono.jpg" alt="Galpão Abandonado">
    </div>

    <div class="caixa">
        <div class="frase">
        <h2> Os pais de Anton nunca souberam quem o encontrou ou mesmo se o encontraram, pois deixaram que o destino o levasse apenas desejando que o melhor acontecesse, já que para eles, entregar seu pequeno príncipe em mãos robóticas seria bem pior do que etregar para o destino.  
        </h2>
        </div>
        <img src="imagem/pais-de-anton.jpg" alt="">
    </div>
   
    

    <div class="mensagem">
    <h3>Mensagem de Anton para você: Amigo, amigo, seja honesto comigo, você acha que meus pais me amavam, sim ou não ??</h3> 


    <input type="text" name="text2" id="text2" >
    <input class="buton" type="button" value="Responder" onclick="res2()">
</div>
<div id="resultado2"></div>

    
    `
   
}

else if (r != `15`) 
    res.innerHTML= `<p>Crowley diz que algo não está certo! Pense mais um pouco e o ajude!</p>`
    
}

function res2() {

    var tv2 = window.document.getElementById(`text2`)
    var res = window.document.getElementById(`resultado2`)
    var r2 = (tv2.value)


if (r2 == `Sim` || r2 == `sim`) {
    res.innerHTML= ` <div class="caixa">
    <div class="frase">

    <h2 class="obrigado"> Mensagem de Crowley: Estou muito feliz em saber que você tem ajudado meu pequeno Anton! Agora também te ajudarei caro amigo.<h2/>

    <h2>Anos atrás quando a sociedade ainda era dominada por humanos, os próprios deram a liberdade para que todos os robôs pudessem criar outros robôs, mesmo sabendo que eles aprendiam absolutamente tudo e muito mais do que qualquer humano seria capaz.
    Mas o problema é que os robôs irtepretavam tudo da sua maneira, pois foram projetados para aprender sem que houvesse um limite.   
    </h2>
    </div>
    <img src="imagem/criacao.jpg" alt="o começo de tudo">
</div>

<p>Continuação em breve...<p/>`
}

if (r2 == `Não` || r2 == `não`) {
    res.innerHTML= `<p>Seja um bom amigo, não magoe ainda mais seu coração!</p>`
}
}