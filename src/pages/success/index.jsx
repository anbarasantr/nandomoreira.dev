import React from 'react'
import Layout from 'components/Layout'
import Container from 'components/Container'

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
