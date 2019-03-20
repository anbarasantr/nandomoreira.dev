import React from 'react'
import { graphql } from 'gatsby'
import moment from 'moment'
import 'moment/locale/pt-br'
import { SEO, PageHeader } from 'components/Common'
import { Main, Container } from 'components/Layout'
import classes from './now.module.styl'

const title = 'O que estou fazendo agora?'
const description = 'Uma página tirada da idéia de Derek Sivers em Nownownow.com, onde blogueiros e proprietários de sites do mundo compartilham o que eles estão fazendo.'

export default ({ data }) => {
  const { list, updated } = data.site.siteMetadata.now
  const dateFormated = moment(updated).format('LL')
  return (
    <Main>
      <SEO
        title={title}
        description={description}
        pathname="/now"
      />
      <PageHeader
        smallTitle={`Now`}
        title={title}
        isSmall={true}
        className={classes.header}
      >
        <p>
          Now é uma página tirada da idéia de <strong>Derek Sivers</strong> em <a
            href="https://nownownow.com/"
            rel="nofollow noopener noreferrer"
            target="_blank"
          ><em>Nownownow.com</em></a>, onde blogueiros e proprietários de sites do mundo compartilham o que eles estão fazendo.
        </p>
        <p>última atualização em: <strong>{dateFormated}</strong></p>
      </PageHeader>
      <Container
        className={classes.container}
        isSmall
      >
        {list.map((now, key) => {
          return (
            <div
              key={key}
              className={`card ${ classes.item }`}
            >
              <h4>{now.title}</h4>
              <ul className={classes.list}>
                {now.items.map((n, i) => <li key={i}><em>{n}</em></li>)}
              </ul>
            </div>
          )
        }
        )}
      </Container>
    </Main>
  )
}

export const nowQuery = graphql`
  query nowQuery {
    site {
      siteMetadata {
        now {
          updated
          list {
            title
            items
          }
        }
      }
    }
  }
`
