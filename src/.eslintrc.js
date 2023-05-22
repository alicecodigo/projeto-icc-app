module.exports={
    root: true,
    extends: '@react-native-comunity',
    plugins:['react', 'react-hooks', 'import'],
    settins:{
        'import/resolve':{
            'babel-plugins-root-import':{
                rootPathSuffix: 'src',
            },
        },
    },
    rules: {
        semi: [2, 'never'],
        'no-extra-boolean-cast': 'off',
    },
}