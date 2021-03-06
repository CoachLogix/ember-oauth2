module.exports = {
  all: {
    src: 'dist/ember-oauth2.amd.js',
    options: {
      specs: 'src/spec/*.spec.js',
      bower_components: [
        './bower_components/loader.js',
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/handlebars/handlebars.min.js',
        './bower_components/ember/ember.js',
        './bower_components/sinonjs/sinon.js'
      ]
    }
  }
}
