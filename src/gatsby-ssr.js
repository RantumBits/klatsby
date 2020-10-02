const React = require('react')

exports.onRenderBody = (
  { setHeadComponents },
  { tidioKey, enableDuringDevelop = true },
) => {
  if (!enableDuringDevelop && process.env.NODE_ENV === 'development') {
    console.log(
      'enableDuringDevelop is set to false - gatsby-plugin-klaviyo will not load in development mode',
    )
    return null
  }

  if (!tidioKey) {
    console.log(
      'No Klaviyo key provided! gatsby-plugin-klaviyo will not load. Please add klaviyoKey in gatsby-config.js',
    )
    return null
  }

  return setHeadComponents([
    <script
      id="ze-snippet"
      key="gatsby-plugin-klaviyo"	      
      src={`https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${klaviyoKey}`}
      type="text/javascript" 
      async
    />,
  ])
}
