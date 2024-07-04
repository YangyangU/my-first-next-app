# my first next app

# eslint

```json
{
  "extends": ["next", "next/core-web-vitals", "eslint:recommended"],
  "globals": {
    "React": "readonly"
  },
  "rules": {
    "no-unused-vars": [1, { "args": "after-used", "argsIgnorePattern": "^_" }]
  }
}
```

# prettier
yarn add -D prettier


# husky

yarn add -D husky
npx husky install 创建.husky文件夹

npx husky add .husky/pre-commit "yarn lint"