import StyleDictionaryModule from 'style-dictionary'

const StyleDictionary = StyleDictionaryModule.extend({
  source: ['./data/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: './data/build/',
      files: [
        {
          destination: '_variables.css',
          format: 'css/variables'
        }
      ]
    },
    ts: {
      transformGroup: 'js',
      buildPath: './data/build/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/module'
        },
        {
          destination: 'tokens.d.ts',
          format: 'typescript/module-declarations'
        }
      ]
    }
  }
})
StyleDictionary.buildAllPlatforms()
