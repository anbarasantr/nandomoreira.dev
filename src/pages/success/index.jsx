import React from 'react'
import { Main, Container } from 'components/Layout'

const styles = {
  padding: '120px 0 40px',
  textAlign: 'center'
}

const SuccessPage = () => (
  <Main>
    <Container>
      <div style={styles}>
        <h1>Seu email foi enviado com sucesso.</h1>
        <p>
          Aguarde, que em breve retornarei com uma respota para o seu pedido.
        </p>
      </div>
    </Container>
  </Main>
)

export default SuccessPage
