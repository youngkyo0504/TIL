'use strict';

// Original: https://github.com/dracula/visual-studio-code
// Converted automatically using ./tools/themeFromVsCode
var theme = {
  plain: {
    color: "#d8dee9",
    backgroundColor: "#3b4252"
  },
  styles: [{
    types: ["prolog"],
    style: {
      color: "#636f88"
    }
  },{
    types: [ "constant"],
    style: {
      color: "#d8dee9"
    }
  }, {
    types: ["function"],
    style: {
      color: "#81a1c1"
    }
  },{
    types: ["inserted"],
    style: {
      color: "#81a1c1"
    }
  }, {
    types: ["deleted"],
    style: {
      color: "rgb(255, 85, 85)"
    }
  }, {
    types: ["changed"],
    style: {
      color: "rgb(255, 184, 108)"
    }
  }, {
    types: ["punctuation", "symbol"],
    style: {
      color: "#81A1C1"
    }
  }, {
    types: ["string", "char",  "selector"],
    style: {
      color: "#d08770"
    }
  },  {
    types: [ "tag","property"],
    style: {
      color: "rgb(193 106 153)"
    }
  },{
    types: ["keyword", "variable"],
    style: {
      color: "rgb(193 106 153)",
    }
  }, {
    types: ["comment"],
    style: {
      color: "rgba(151, 154, 155, 0.95)"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#A3BE8C"
    }
  },{
    types: ["operator","important","builtin"],
    style: {
      color: "#ebcb8b"
    }
  },{
    types: ["number"],
    style: {
      color: "#b48ead"
    }
  },]
};

module.exports = theme;
