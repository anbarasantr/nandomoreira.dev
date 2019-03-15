const {
  join,
  resolve,
  parse
} = require('path')
const _ = require('lodash')
const webpackLodashPlugin = require('lodash-webpack-plugin')
const slugify = require('slugify')

const templatePath = join(__dirname, `src`, `templates`)

const slugifySettings = {
  replacement: '-',
  remove: true,
  lower: true
}

let postNodes = []

function addSiblingNodes(createNodeField) {
  postNodes = postNodes.filter(post => (post.id.indexOf('/posts/') > 0) ? post : null)

  postNodes.sort(
    ({
      frontmatter: {
        date: date1
      }
    }, {
      frontmatter: {
        date: date2
      }
    }) =>
    new Date(date1) - new Date(date2)
  )

  for (let i = 0; i < postNodes.length; i += 1) {
    const nextID = i + 1 < postNodes.length ? i + 1 : 0
    const prevID = i - 1 > 0 ? i - 1 : postNodes.length - 1
    const currNode = postNodes[i]
    const nextNode = postNodes[nextID]
    const prevNode = postNodes[prevID]

    createNodeField({
      node: currNode,
      name: 'nextTitle',
      value: nextNode.frontmatter.title
    })

    createNodeField({
      node: currNode,
      name: 'nextSlug',
      value: nextNode.fields.slug
    })

    createNodeField({
      node: currNode,
      name: 'prevTitle',
      value: prevNode.frontmatter.title
    })

    createNodeField({
      node: currNode,
      name: 'prevSlug',
      value: prevNode.fields.slug
    })
  }
}

exports.onCreateNode = ({
  node,
  actions,
  getNode
}) => {
  let slug
  const {
    createNodeField
  } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent)
    const parsedFilePath = parse(fileNode.relativePath)

    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`
    } else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`
    } else if (parsedFilePath.dir === '') {
      slug = `/${parsedFilePath.name}/`
    } else {
      slug = `/${parsedFilePath.dir}/`
    }

    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'path')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.path)}`
    }

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })

    postNodes.push(node)
  }
}

exports.setFieldsOnGraphQLNodeType = ({
  type,
  actions
}) => {
  if (type.name === 'MarkdownRemark') {
    addSiblingNodes(actions.createNodeField)
  }
}

exports.createPages = ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
        {
          postsQuery: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { layout: { eq: "post" } } },
          ) {
            edges {
              node {
                excerpt(pruneLength: 250)
                frontmatter {
                  layout
                  path
                  title
                  date
                  category
                  tags
                }
              }
            }
          }
          projectsQuery: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { layout: { eq: "project" } } },
          ) {
            edges {
              node {
                excerpt(pruneLength: 250)
                frontmatter {
                  layout
                  path
                  title
                  date
                  category
                  tags
                }
              }
            }
          }
          snippetsQuery: allMarkdownRemark(
            filter: { frontmatter: { layout: { eq: "snippets" } } },
          ) {
            edges {
              node {
                excerpt(pruneLength: 250)
                frontmatter {
                  layout
                  path
                  title
                  category
                }
              }
            }
          }
          allMarkdownRemark {
            edges {
              node {
                id
                frontmatter {
                  layout
                  path
                  title
                  tags
                  category
                }
              }
            }
          }
        }
      `
      ).then(result => {
        if (result.errors) reject(result.errors)

        const {
          postsQuery,
          projectsQuery,
          snippetsQuery,
          allMarkdownRemark
        } = result.data

        allMarkdownRemark.edges.forEach(({
          node
        }) => {
          createTagPages(createPage, node.frontmatter.tags)
          createCategoryPages(createPage, node.frontmatter.category)
          createSinglePages(createPage, node.frontmatter)
        })

        contentPaginate(createPage, postsQuery, '/blog', 'blog')
        contentPaginate(createPage, projectsQuery, '/portfolio', 'projects', 16)
        contentPaginate(createPage, snippetsQuery, '/snippets', 'snippets-list')
      })
    )
  })
}

exports.onCreatePage = ({
  page
}) => {
  if (page.path.startsWith('/404')) {
    page.layout = '404.index'
  }
}

exports.onCreateWebpackConfig = ({
  stage,
  actions
}) => {
  if (stage === `build-javascript`) {
    actions.setWebpackConfig({
      devtool: false,
      plugins: [webpackLodashPlugin]
    })
  }

  actions.setWebpackConfig({
    resolve: {
      modules: [
        resolve(__dirname),
        resolve(__dirname, 'src'),
        'node_modules'
      ],
    },
  })
}

function createTagPages(createPage, tags) {
  const tagSet = new Set()
  const basePath = '/tag'

  if (tags) {
    tags.forEach(tag => tagSet.add(tag))

    Array.from(tagSet).forEach(tag => {
      createPage({
        path: `${basePath}/${_.kebabCase(tag)}/`,
        component: join(templatePath, `tag-template.jsx`),
        context: {
          tag
        }
      })
    })
  }
}

function createCategoryPages(createPage, category) {
  const categorySet = new Set()
  const basePath = '/categoria'

  if (category) {
    category.forEach(category => categorySet.add(category))

    Array.from(categorySet).forEach(category => {
      createPage({
        path: `${basePath}/${_.kebabCase(category)}/`,
        component: join(templatePath, `category-template.jsx`),
        context: {
          category
        }
      })
    })
  }
}

function createSinglePages(createPage, frontmatter) {
  const _layout = frontmatter.layout ? String(frontmatter.layout) : `project`
  const _slug = slugify(frontmatter.title, slugifySettings)
  let _path = `/${_slug}`

  if (_layout === 'post') {
    let _path = `/blog/${_slug}`
  }

  if (_layout === 'project') {
    _path = `/projeto${_path}`
  }

  if (frontmatter.path) {
    _path = slugify(`${frontmatter.path}`, slugifySettings)
  }

  createPage({
    path: _path,
    component: join(templatePath, `${_layout}-template.jsx`),
    context: {}
  })
}

function contentPaginate(createPage, posts, path = '/blog', template = 'blog', totalPerPage = 12) {
  const totalPages = Math.ceil(posts.edges.length / totalPerPage)

  Array.from({
    length: totalPages
  }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `${path}` : `${path}/${i + 1}`,
      component: join(templatePath, `${template}-template.jsx`),
      context: {
        limit: totalPerPage,
        skip: i * totalPerPage,
        numPages: totalPages,
        currentPage: i + 1
      }
    })
  })
}

function paginate(array, page_size, page_number) {
  return array.slice(0).slice((page_number - 1) * page_size, page_number * page_size);
}
