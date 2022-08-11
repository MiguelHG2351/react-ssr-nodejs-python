import path from 'path'
import fs from 'fs'
// el manifest tiene las rutas de vendors y common
export function renderFullPage(html, manifest) {
  const main = manifest ? manifest['main.js'] : ''
  const mainCss = manifest ? manifest['main.css'] : ''
  const common = manifest ? manifest['commons.js'] : ''
  const vendor = manifest ? manifest['vendors.js'] : ''
  const runtime = manifest ? manifest['runtime.js'] : ''

  let scripts = `
    <script defer src="${main}"></script>
    <script defer src="${common}"></script>
    <script defer src="${vendor}"></script>
    <script defer src="${runtime}"></script>
    `
  if(process.env.NODE_ENV === 'development') {
    const __what = manifest ? manifest['__what.js'] : ''

    scripts += `
      <script defer src="${__what}"></script>
    `
  }


    return `
      <!doctype html>
      <html>
        <head>
          <title>React Challenge :D | MiguelHG2351</title>
          <link rel="stylesheet" type="text/css" href="${mainCss}" />
          </head>
          <body>
          <div id="root">${html}</div>
          ${scripts}
        </body>
      </html>
      `
}

export function getManifest() {
  try {
    return JSON.parse(
      fs.readFileSync(path.resolve(__dirname, '../public/manifest.json'))
    ) 
  } catch (err) {
    console.error('F')
  }
}