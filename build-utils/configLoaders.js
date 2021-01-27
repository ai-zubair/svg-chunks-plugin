const { merge } = require('webpack-merge');

const loadPresets = (presets) => {
  let presetNameList = presets.split(',');
  presetNameList = presetNameList.filter((presetName) => presetName !== '');
  const presetConfigList = presetNameList.map((presetName) =>
    require(`./presets/webpack.${presetName}.js`)()
  );
  return merge({}, ...presetConfigList);
};

const loadModeConfig = (buildMode) => {
  return require(`./mode-configs/webpack.${buildMode}.js`)();
};

module.exports = {
  loadPresets,
  loadModeConfig,
};
