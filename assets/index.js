"use strict";

var _master = _interopRequireDefault(require("./master"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _master.default)();
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _foundation = _interopRequireDefault(require("foundation-sites/js/foundation"));

var _skillsCloud = _interopRequireDefault(require("./skills-cloud"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Application = function Application() {
  var skillsCloud = document.getElementById('skillsCloud');
  if (!skillsCloud) return;

  _skillsCloud.default.map(function (value, index) {
    var a = document.createElement('a');
    a.appendChild(document.createTextNode("#".concat(value)));
    a.href = "https://twitter.com/hashtag/".concat(value);
    a.target = '_blank';
    a.setAttribute('title', value);
    skillsCloud.appendChild(a);
  });
};

var _default = Application;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = ['ux', 'ui', 'usability', 'visual', 'interaction', 'product', 'ia', 'design', 'photography', 'scrum', 'agile', 'psychology', 'mbti', 'jung', 'archetype', 'git', 'gitlab', 'jquery', 'redis', 'electron', 'test', 'research', 'analyze', 'software', 'engineering', 'development', 'programming', 'web', 'mobile', 'desktop', 'sketch', 'sketchmeasure', 'framer', 'photoshop', 'illustrator', 'indesign', 'principle', 'ecma', 'babel', 'react', 'redux', 'golang', 'css', 'html', 'sass', 'less', 'echo', 'framework', 'typescript', 'vim', 'vscode', 'atom', 'mac', 'linux', 'unix', 'nodejs', 'mongodb', 'sqite', 'mysql', 'page', 'keynote', 'numbers', 'docker'];
exports.default = _default;
//# sourceMappingURL=index.js.map
