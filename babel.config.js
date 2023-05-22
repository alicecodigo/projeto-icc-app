module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins:[
      ['babel/plugin-sintax-decorators',{legacy: true}],
      ['babel-plugin-root-import'],
      {rootPathSuffix: 'src',},
    ],
  };
};

