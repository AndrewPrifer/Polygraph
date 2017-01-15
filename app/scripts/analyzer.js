export default function analyze(title) {
  let analysis = {
    emotion: false,
    opinion: false,
    quote: false,
    bias: false,
    exaggeration: false,
    uncertainty: false,
    omission: false,
    listicle: false,
  };

  // TODO: add whitespace around all tokens
  analysis.emotion = word(/you/i).test(title);
  analysis.opinion = word(/should|need/i).test(title);
  analysis.quote = word(/"[^"]*"|'[^']*'/).test(title);
  analysis.uncertainty = word(/might|may|maybe|probably|certanly|\?$/i).test(title);
  analysis.omission = word(/this|these|here/i).test(title);
  analysis.listicle = word(/(^|the )\d+/i).test(title);
  analysis.exaggeration = word(/total|fucking|garantee|literally|awesome|!$/i).test(title);

  return analysis;
}

/**
 * Ensures that only whole words are matched.
 */
function word(pattern) {
  return new RegExp(`([^a-z]|^)(${pattern.source})([^a-z]|$)`, pattern.flags);
}
