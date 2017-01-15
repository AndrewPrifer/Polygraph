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

  analysis.emotion = word(/you|your/i).test(title);
  analysis.quote = word(/"[^"]*"|'[^']*'/).test(title);
  analysis.uncertainty = word(/might|may|maybe|probably|certanly/i).test(title) || /\?$/.test(title);
  analysis.omission = word(/this|these|here/i).test(title);
  analysis.listicle = word(/(^|the )\d+/i).test(title);
  analysis.exaggeration = word(/total|fucking|garantee|literally|awesome/i).test(title) || /!$/.test(title);

  return analysis;
}

/**
 * Ensures that only whole words are matched.
 */
function word(pattern) {
  return new RegExp(`([^a-z]|^)(${pattern.source})([^a-z]|$)`, pattern.flags);
}
