export default async ({ app }) => {
    const GITHUB_USER = 'ZiToon34'
    const GITHUB_REPO = 'Auberge'
    const BRANCH = 'master'
    const RAW = (path) => `https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_REPO}/${BRANCH}/${path}?t=${Date.now()}`
  
    try {
      const res = await fetch(RAW('content.json'))
      const cms = await res.json()
  
      // Construire l'objet de surcharge (gère les clés imbriquées "a.b.c")
      const overrides = {}
      cms.sections.forEach(section => {
        section.fields.forEach(field => {
          if (field.type === 'text' && field.value) {
            const parts = field.id.split('.')
            let node = overrides
            for (let i = 0; i < parts.length - 1; i++) {
              node[parts[i]] = node[parts[i]] || {}
              node = node[parts[i]]
            }
            node[parts[parts.length - 1]] = field.value
          }
        })
      })
      app.i18n.mergeLocaleMessage('fr', overrides)
  
      // Données CMS accessibles partout
      const getSection = (id) => cms.sections.find(s => s.id === id)?.fields || []
      const getField = (fields, id) => fields.find(f => f.id === id)?.value
      window.$cms = { data: cms, getSection, getField, img: (f) => RAW(`images/${f}`) }
    } catch (e) {
      console.warn('CMS non chargé', e)
    }
  }