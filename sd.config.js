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
    }
  }
})
StyleDictionary.buildAllPlatforms()
