module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv'],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    out: '../static'
  },
  proxy: {
    "/starter.zip": "http://localhost:3000/reflexgen.zip"
  },
  alias: {
    /* ... */
  },
};
