const repo = 'kongallis.github.io'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const isGithubActions = process.env.GITHUB_ACTIONS || false

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: 'imgix',
    path: '/public',
  },
}