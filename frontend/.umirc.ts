import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history:{type:'hash'},
  "theme": {
    "primary-color": "#1DA57A",
  },
});
