var botao= document.querySelector(".calculo");
         botao.addEventListener("click", Calculo );
         
         
         function Calculo () {
         var nome = prompt('Insira seu nome:');
         var q_passageiros = prompt('Insira a quantidade de passageiros:');
         var valor_viagem = prompt('Insira o valor da viagem:');
         var resultado = (valor_viagem * q_passageiros)
         
         
         var mensagem = "Orçamento <br> <br>  Sr(a): "+  nome + "<br> <br>";
         mensagem = mensagem + "Valor total da viagem, já incluso a quantidade de '" + q_passageiros + "' passageiros:<br> R$:"+ resultado +"<br><br> Boa Viagem!";
         
         document.querySelector(".resultado").innerHTML= mensagem;
         
         } 