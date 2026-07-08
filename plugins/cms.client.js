export default async ({ app }) => {
    const GITHUB_USER = 'ZiToon34'
    const GITHUB_REPO = 'Auberge'
    const BRANCH = 'master'
    const RAW = (path) => `https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_REPO}/${BRANCH}/${path}?t=${Date.now()}`
  
    try {
      const res = await fetch(RAW('content.json'))
      const cms = await res.json()
  
      // 1. Surcharger les textes i18n avec les valeurs du CMS
      const overrides = {}
      cms.sections.forEach(section => {
        section.fields.forEach(field => {
          if (field.type === 'text' && field.value) {
            overrides[field.id] = field.value
          }
        })
      })
      app.i18n.mergeLocaleMessage('fr', overrides)
  
      // 2. Rendre les données CMS accessibles partout
      app.$cmsData = cms
      window.$cmsData = cms
      window.$cmsImg = (filename) => RAW(`images/${filename}`)
    } catch (e) {
      console.warn('CMS non chargé', e)
    }
  }