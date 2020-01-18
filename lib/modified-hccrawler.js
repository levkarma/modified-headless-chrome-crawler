const HCCrawler = require('./hccrawler.js')
module.exports = class ModifiedHCCrawler extends HCCrawler {
	constructor(browser, options) {
		this._options = extend({
		 ignoreUrlParameters: false,
		 ignoreInternalAnchors: false,
		  maxDepth: 1,
		  maxConcurrency: 10,
		  maxRequest: 0,
		  priority: 0,
		  delay: 0,
		  retryCount: 3,
		  retryDelay: 10000,
		  timeout: 30000,
		  jQuery: true,
		  browserCache: true,
		  persistCache: false,
		  skipDuplicates: true,
		  depthPriority: true,
		  obeyRobotsTxt: true,
		  followSitemapXml: false,
		  skipRequestedRedirect: false,
		  cookies: null,
		  screenshot: null,
		  viewport: null,
		}, options);
	super(browser, options)
	}
	  /**
   * @param {!Object} options
   * @return {!Promise<!boolean>}
   * @private
   */
  async _checkRequested(options) {
    if (!options.skipDuplicates) return false;
    const key = generateKey(options);
    const value = await this._cache.get(key);
    return !!value;
  }
}