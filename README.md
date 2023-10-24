
## Getting Started

First, install dependencies:

```bash
npm install
```


run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Figma Sync
`tokens/export-tokens.json` is generated by token.studio in Figma. Those values are referenced in `src/theme/*` as vanilla-extract tokens.

### Workflow
1. Make changes to tokens in Figma and push to main to generate `tokens/export-tokens.json`
2. Run `npm run transform:tokens` to generate `tokens/transformed-tokens.json`. This removes any reference, which are not readable by style-dictionary. 
3. run `generate:tokens` to generate `./output/transformed-tokens.css` via style-dictionary.
3.1 run `generate:tokens-via-sd-transforms` to generate `./build/**` via sd-transforms. 


### Docs
Token Transformer:
https://www.npmjs.com/package/token-transformer

Style Dictionary:
https://amzn.github.io/style-dictionary

Style Dictionary Transforms by Tokens Studio:
https://www.npmjs.com/package/@tokens-studio/sd-transforms

Token Studio (export examples):
https://docs.tokens.studio/sync/github

## Notes
- Hot-reload vanilla-extract not working, so refresh after change is necessary
- Flags `--expandTypography`, `--expandShadow` need to be added while calling token-transform in order to spread the objects and to generate the correct output by style-dictionary. If not, the output will result in [object Object]. 