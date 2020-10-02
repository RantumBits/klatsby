# gatsby-plugin-klaviyo

Easily add [Klaviyo email marketing](https://www.klaviyo.com/) to a Gatsby site.

## Install

`npm install --save gatsby-plugin-klaviyo`

## How to Use

You'll need a Klaviyo account to use this plugin - sign up at [Klaviyo](https://www.klaviyo.com/partner/signup?utm_source=0010V00002Ogx4q&utm_medium=partner).

When you've signed up and logged in to the dashboard, go to Account -> Settings -> API Keys and look for the `API key / Site ID' in bold.

In `gatsby-config.js` configure the plugin with your key:

```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-klaviyo',
      options: {
        klaviyoKey: 'your-klaviyo-key',
        enableDuringDevelop: false, // Optional. Disables Klaviyo when running Gatsby dev server. Defaults to true.
      },
    },
  ],
}
```

Restart your Gatsby server for the plugin to take effect.

## Acknowledgements

Based off [gatsby-plugin-tidio-chat](https://github.com/garethpbk/tidio-chat/)

Plugin updated for Klaviyo email marketing by [ecomloop](https://ecomloop.com)
