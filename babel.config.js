module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@mocks': './__mocks__',
          '@utils': './src/utils',
          '@showdown': './src/showdown',
          '@store': './src/store',
          '@test': './test',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
