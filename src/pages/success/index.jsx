import React from 'react'
import { Layout, Container } from 'Components/Common'

const styles = {
  padding: '120px 0 40px',
  textAlign: 'center',
}

const SuccessPage = () => (
  <Layout>
    <Container>
      <div style={styles}>
        <h1>Seu email foi enviado com sucesso.</h1>
        <p>
          Aguarde, que em breve retornarei com uma respota para o seu pedido.
        </p>
      </div>
    </Container>
  </Layout>
)

export default SuccessPage
