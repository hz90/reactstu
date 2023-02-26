/*
 * @FilePath: /vite-project/lint-staged.config.js
 * @Description: lint-staged 配置文件
 *
 */
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.{scss,less,styl}': ['stylelint --fix', 'prettier --write'],
  '*.md': ['prettier --write']
};
