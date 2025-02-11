export const onPreBuild = function ({ netlifyConfig, utils }) {
    const basicAuth = 'test:344157test';

    if (basicAuth === undefined) {
        utils.build.failBuild('      BASIC_AUTH is not defined!');
    }

    console.log('      Setting basic auth:', basicAuth);
    netlifyConfig.headers.push({
        for: '/*',
        values: { 'Basic-Auth': basicAuth }
    });
};
