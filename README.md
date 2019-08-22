# gatsby-plugin-zendesk-chat

Easily add a [Zendesk chat widget](https://www.zendesk.com/chat/) to a Gatsby site.

## Install

`npm install --save gatsby-plugin-zendesk-chat`

## How to Use

You'll need a Zendesk account to use this plugin - sign up at [https://www.zendesk.com/register/](https://www.zendesk.com/register/).

When you open the chat dashboard you will see a welcome popup; click through to the "Embed widget" step. Here you will see a script to embed the widget that contains your key:

```js
<!-- Start of  Zendesk Widget script -->
<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=639c5c41-135b-4f1f-8c95-38e573f7a6b1"> </script>
<!-- End of  Zendesk Widget script -->
```

The string of characters after `key=` is your Zendesk key.

You can also access the embed script by clicking Settings -> Widget in the left-hand menu of the chat dashboard.

In `gatsby-config.js` configure the plugin with your key:

```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-zendesk-chat',
      options: {
        zendeskKey: 'your-zendesk-key',
        enableDuringDevelop: false, // Optional. Disables Zendesk chat widget when running Gatsby dev server. Defaults to true.
      },
    },
  ],
}
```

Restart your Gatsby server for the plugin to take effect.

## Acknowledgements

This plugin was inspired by [gatsby-plugin-crisp-chat](https://github.com/ryanditjia/gatsby-plugin-crisp-chat/), with the goal of creating something similar for Zendesk's chat widget.
