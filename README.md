# Polygraph
Polygraph is a Chrome extension for detecting clickbaity, possibly dishonest news articles. It works by checking the headline of the webpage against a set of rules that recogize certain "dishonesty traits". These are then presented to the user as a Page Action popup in the form of a list of expandable descriptions. A badge is also shown with the number of detected traits.

![Screenshot](http://i.imgur.com/XrjwBh0.png)

Note, Polygraph is not meant to be used to accurately measure the truthfulness of an article and I provide no guarantee of that. The idea behind this project (at least in its current form) is to encourage and promote the use of honest, useful, non-clickbaity headlines.

This is an early release and as such functions as more of a proof of concept and as a framework to build upon in the feature.

## How it works
Polygraph works by matching the headline of articles against a set of regular expressions to detect dishonesty traits.

### Examples of traits
- **Exaggerated value:** The article is trying to grab attention by exaggerating the value it provides to the reader.
- **Quotation or loose definition:** Out-of-context quotations can sometimes convey a completely different meaning than what was originally intended.
- **Uncertainty:** Communicating uncertainty in the title allows the author to convey information that is false or inaccurate without taking responsibility for it.
- **Incomplete title:** Information is omitted from the title in order to entice curiosity.
- **Exaggeration:** The article uses exaggeration for sensationalistic purposes.

## Limitations
Polygraph only displays meaningful results on actual articles. Since it cannot detect whether a webpage is an online newspaper or not, it will sometimes also analyze headlines on regular webpages.

# Development
`npm install`

Run `gulp --watch` and load the `dist`-directory into chrome.

## Tasks

### Build
`gulp`

| Option         | Description                                                           |
|----------------|-----------------------------------------------------------------------|
| `--watch`      | Starts a livereload server and watches all assets.                    |
| `--production` | Minifies all assets.                                                  |
| `--verbose`    | Log additional data to the console.                                   |
| `--vendor`     | Compile the extension for different vendors (chrome, firefox, opera). |
| `--sourcemaps` | Force the creation of sourcemaps.                                     |

### Pack
Zips your `dist` directory and saves it in the `packages` directory.

`gulp pack --vendor=firefox`

### Version
Increments version number of `manifest.json` and `package.json`,
commits the change to git and adds a git tag.


`gulp patch` => 0.0.X

or

`gulp feature` => 0.X.0

or

`gulp release` => X.0.0


## Globals
The build tool also defines a variable named `ENV` in your scripts. It will be set to `development` unless you use the `--production` option.

**Example:** `./app/background.js`

```javascript
if(ENV === 'development'){
  console.log('We are in development mode!');
}
```
