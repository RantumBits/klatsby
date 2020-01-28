# gatsby-plugin-tidio-chat

Easily add a [Tidio chat widget](https://www.tidio.com/) to a Gatsby site.

## Install

`npm install --save gatsby-plugin-tidio-chat`

## How to Use

You'll need a Tidio account to use this plugin - sign up at [https://www.tidio.com/panel/register/](https://www.tidio.com/panel/register/).

When you've signed up and logged in to the dashboard, go to Settings -> Developer and look for `Public Key` under Project Data.

In `gatsby-config.js` configure the plugin with your key:

```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-tidio-chat',
      options: {
        tidioKey: 'your-tidio-key',
        enableDuringDevelop: false, // Optional. Disables Tidio chat widget when running Gatsby dev server. Defaults to true.
      },
    },
  ],
}
```

Restart your Gatsby server for the plugin to take effect.

## Acknowledgements

Based off of the author's [gatsby-plugin-zendesk-chat](https://github.com/garethpbk/gatsby-plugin-zendesk-chat/) which in turn was inspired by [gatsby-plugin-crisp-chat](https://github.com/ryanditjia/gatsby-plugin-crisp-chat/).

There is an existing Gatsby Tidio plugin [gatsby-plugin-tidio](https://github.com/CodeDrips/gatsby-plugin-tidio) but it does not work and does not appear to be maintained, so better solution was to publish a new plugin rather than rely on a PR that doesn't seem likely to be addressed.
