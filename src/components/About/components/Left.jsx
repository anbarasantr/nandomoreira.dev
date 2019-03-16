import React from 'react'
import { SocialIcons, Image } from 'Components/Common'
import { Feed } from 'Components/Instagram'
import { Skills } from 'Components/About/Skills'

export const Left = ({ data, classes }) => (
  <div className={`about__left ${ classes.left }`}>
    <div className={`card ${ classes.inner }`}>
      <Image
        node={data.file}
        className={classes.image}
        title="Foto de Fernando Moreira Costa"
        alt="Foto de Fernando Moreira Costa"
      />
      <SocialIcons icons={data.site.siteMetadata.social} />
      <Feed
        show={data.site.siteMetadata.isProduction}
        options={{
          total: 8,
          accessToken: '304341723.1677ed0.4f4681f740ed4a9daadc777de9fe2716',
          clientId: '4503fb5f1ba64fcbb61b7994dd792cee',
          get: 'user', // popular, user
          userId: 304341723,
          user: `${ data.site.siteMetadata.author.instagram }`
        }}
      />

      <Skills size="small" skills={data.site.siteMetadata.skills} />
    </div>
  </div>
)
