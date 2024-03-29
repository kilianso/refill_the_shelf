# Refill shelf
A tiny collaborative game where you have to refill empty shelves with toiletpaper, hand-sanitizer, pasta, cans and so on and then donated the value of your refill to charity.

## Get started

Install the dependencies...

```bash
yarn install
```

## Important

There is a currently an open issue, where Svelte routing fails if you remove DOM nodes after mounting.
This is the case in this project! Till there is a real fix, i made a patch file that will update the `detach` function in `node_modules/svelte/internal/index.mjs` automatically after you run `yarn install`.

Track the issue here:
https://github.com/sveltejs/svelte/issues/2086#issuecomment-603245101

...then start [Rollup](https://rollupjs.org):

```bash
yarn run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.


## Building and running in production mode

To create an optimised version of the app:

```bash
yarn run build
```

You can run the newly built app with `yarn run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
yarn add -g now
```

Then, from within your project folder:

```bash
cd public
now deploy --name my-project
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
yarn add -g surge
```

Then, from within your project folder:

```bash
yarn run build
surge public my-project.surge.sh
```
