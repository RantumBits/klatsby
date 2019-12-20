const React = require('react')

exports.onRenderBody = (
  { setHeadComponents },
  { zendeskKey, enableDuringDevelop = true },
) => {
  if (!enableDuringDevelop && process.env.NODE_ENV === 'development') {
    console.log(
      'enableDuringDevelop is set to false - gatsby-plugin-zendesk-chat will not load in development mode',
    )
    return null
  }

  if (!zendeskKey) {
    console.log(
      'No Zendesk key provided! gatsby-plugin-zendesk-chat will not load. Please add zendeskKey in gatsby-config.js',
    )
    return null
  }

  return setHeadComponents([
    <script
      id="ze-snippet"
      key="gatsby-plugin-zendesk-chat"
      src={`https://static.zdassets.com/ekr/snippet.js?key=${zendeskKey}`}
    />,
  ])
}
