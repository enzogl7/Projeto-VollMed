package med.voll.api.domain.consulta.validacoes;

import med.voll.api.domain.ValidacaoException;
import med.voll.api.domain.consulta.DadosCancelamentoConsulta;
import org.springframework.stereotype.Component;

@Component
public class ValidadorMotivoDoCancelamentoDaConsulta implements ValidadorCancelamentoDeConsulta{
    public void validar(DadosCancelamentoConsulta dados) {
        if (dados.motivo() == null) {
            throw new ValidacaoException("O motivo de cancelamento deve ser informado.");
        }
    }
}
