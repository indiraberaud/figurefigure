'use strict';

exports.onCreateWebpackConfig = ({ stage, actions, loaders }) => {
  // const config = _ref.config, stage = _ref.stage;

  const svgFiles = /\.icon$/;
  const svgLoader = 'svg-sprite-loader';

  switch (stage) {
    case 'develop': {
      actions.setWebpackConfig({
        module: { rules: [{ test: svgFiles, use: [svgLoader] }] },
      });
      break;
    }

    case 'build-css': {
      actions.setWebpackConfig({
        module: { rules: [{ test: svgFiles, use: [svgLoader] }] },
      });
      break;
    }

    case 'develop-html':
    case 'build-html':
    {
      actions.setWebpackConfig({
        module: { rules: [{ test: svgFiles, use: [svgLoader] }] },
      });
      break;
    }
    case 'build-javascript':
    {
      actions.setWebpackConfig({
        module: { rules: [{ test: svgFiles, use: [svgLoader] }] },
      });
      break;
    }
    default:
    {
      break;
    }
  }
};
