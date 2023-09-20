module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-undef": "off",
    "no-unused-vars": "off",
    "vue/no-unused-vars": "off",
    "no-console": "off", 
    "no-debugger": "off" 
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
