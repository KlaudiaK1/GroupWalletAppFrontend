module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
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
          '.png',
          '.svg',
        ],
        alias: {
          '@components': './src/app/components',
          '@styles': './src/app/styles',
          '@images': './src/app/assets/images',
          '@icons': './src/app/assets/icons',
          '@shared': './src/app/shared',
        },
      },
    ],
  ],
};
