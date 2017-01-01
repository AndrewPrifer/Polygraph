export default function analyze(title) {
  let analysis = {
    emotion: false,
    opinion: false,
    quote: false,
    bias: false,
    exaggeration: false,
    uncertainty: false,
    pointing: false,
    listicle: false,
  };

  analysis.emotion = /you/i.test(title);
  analysis.opinion = /should|need/i.test(title);
  analysis.quote = /"[^"]*"|'[^']*'/.test(title);
  analysis.uncertainty = /might|may|maybe|probably|certanly|\?$/i.test(title);
  analysis.pointing = /this|here/i.test(title);
  analysis.listicle = /(^|the )\d+/i.test(title);
  analysis.exaggeration = /total|fucking|garantee|literally|!$/i.test(title);

  return analysis;
}
