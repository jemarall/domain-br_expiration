module.exports = {
    reactStrictMode: false,
    webpack5: true,
    webpack: (config) => {
//      config.experiments = {topLevelAwait: true}
//      config.externals = ['bufferutil', 'utf-8-validate']
      config.resolve.fallback = {
        dns : false, 
        fs : false, 
        net: false, 
        tls: false, 
        child_process: false,
        readline: false,
      };

      return config;
    }
}
  