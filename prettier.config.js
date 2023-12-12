module.exports = {
  plugins: ['prettier-plugin-organize-attributes',
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss'],

  attributeGroups: [
    "$ANGULAR_OUTPUT",
    "$ANGULAR_TWO_WAY_BINDING",
    "$ANGULAR_INPUT",
    "$ANGULAR_STRUCTURAL_DIRECTIVE"
  ],

  importOrder: ['^@core/(.*)$', '', '^@server/(.*)$', '', '^@ui/(.*)$', '', '^[./]'],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
}
