import React from 'react'
import WhatsAppUrl from 'whatsapp-url'

export const More = ({ data, classes }) => {
  const whatsAppLink = WhatsAppUrl({
    phone: data.site.siteMetadata.author.phone,
    text: `Olá Fernando! Eu vi o seu site, e gostaria de conversar.`
  })

  return (
    <div className={classes.text}>
      <h2>Quer mais?</h2>
      <p>
        Se você quiser atualizações aleatórias e regulares sobre o que eu ando
        fazendo da vida, você pode...
      </p>
      <ul>
        <li>
          ... me seguir no Twitter em{' '}
          <a
            href="https://twitter.com/oseunando"
            rel="noopener noreferrer"
            target="_blank"
          >
            @oseunando
          </a>
        </li>
        <li>
          Ou seguir no Instagram em{' '}
          <a
            href="https://instagram.com/oseunando"
            rel="noopener noreferrer"
            target="_blank"
          >
            @oseunando
          </a>
          .
        </li>
      </ul>
      <p>Mas... Se peferir um contato mais direto pode me chamar no...</p>
      <ul>
        <li>
          ...{' '}
          <a
            href="https://t.me/oseunando"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>{' '}
          ou no{' '}
          <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          .
        </li>
        <li>
          Ou se preferir pode enviar um email para{' '}
          <a
            href="mailto:hi@nandomoreira.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            hi@nandomoreira.dev
          </a>{' '}
          que é sucesso!
        </li>
      </ul>
    </div>
  )
}
