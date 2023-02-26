# 🏙 Capitle - Geo Guessing Game 🎯

Capitle is a guessing game. Each day a new country capital will be randomly calculated which you have to guess.

## Development

Capitle is a React web app.

Run `npm install` and `npm start` to run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

Run `npm test` to launch the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Deployment

How to deploy the app.

### Setup

Adapted from [https://github.com/gitname/react-gh-pages](https://github.com/gitname/react-gh-pages).

- Execute `npm install gh-pages --save-dev` in terminal
- In `package.json` 
  - add `"homepage": "https://{username}.github.io/{repo-name}"` to root node
  - add `"predeploy": "npm run build"` and `"deploy": "gh-pages -d build -o gh-pages"` to `scripts` node
- Create and copy personal access token in github under [https://github.com/settings/tokens](https://github.com/settings/tokens)
- Add git remote: `git remote add gh-pages https://{username}:{personal-access-token}@github.com/{usename}/{repo-name}.git`
- After executing for the first time (see below): define source as deployment branch `gh-pages` under [https://github.com/{username}}/{repo-name}/settings/pages](https://github.com/{username}/{repo-name}/settings/pages)

### Execute: deploy

- Execute `npm run predeploy`
- Execute `npm run deploy`

## Acknowledgements

Sources and inspiration:

- Capitals with geo data [techslides.com](http://techslides.com/list-of-countries-and-capitals) (partially updated and corrected)
- List of countries recognized by the UN [Seterra](https://www.geoguessr.com/seterra/en/vgp/3356)
- Favicon from [City icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/city)
- General game and implementation ideas from [Worldle](https://github.com/teuteuf/worldle/)
- Implementation ideas from [Globle](https://github.com/the-abe-train)
