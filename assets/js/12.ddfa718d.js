(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{211:function(e,t,a){"use strict";a.r(t);var i=a(0),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"csv-dialect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csv-dialect"}},[e._v("#")]),e._v(" CSV Dialect")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Author(s): Rufus Pollock\nJSON Schema (for spec): /schemas/csv-dialect.json\nVersion: 1.2\n")])])]),a("h3",{attrs:{id:"language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#language"}},[e._v("#")]),e._v(" Language")]),e._v(" "),a("p",[e._v("The key words "),a("code",[e._v("MUST")]),e._v(", "),a("code",[e._v("MUST NOT")]),e._v(", "),a("code",[e._v("REQUIRED")]),e._v(", "),a("code",[e._v("SHALL")]),e._v(", "),a("code",[e._v("SHALL NOT")]),e._v(", "),a("code",[e._v("SHOULD")]),e._v(", "),a("code",[e._v("SHOULD NOT")]),e._v(", "),a("code",[e._v("RECOMMENDED")]),e._v(", "),a("code",[e._v("MAY")]),e._v(", and "),a("code",[e._v("OPTIONAL")]),e._v(" in this document are to be interpreted as described in "),a("a",{attrs:{href:"www.google.com"}},[e._v("RFC 2119")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("CSV Dialect defines a simple format to describe the various dialects of CSV files in a language agnostic manner. It aims to deal with a reasonably large subset of the features which differ between dialects, such as terminator strings, quoting rules, escape rules and so on. The specification has been modeled around the union of the csv modules in Python and Ruby, and the bulk load capabilities of MySQL and PostgresQL.")]),e._v(" "),a("h3",{attrs:{id:"excluded"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#excluded"}},[e._v("#")]),e._v(" Excluded")]),e._v(" "),a("p",[e._v("CSV Dialect has nothing to do with the names, contents or types of the headers or data within the CSV file, only how it is formatted. However, CSV Dialect does allow the presence or absence of a header to be specified, similarly to "),a("a",{attrs:{href:"https://www.ietf.org/rfc/rfc4180.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC4180"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("CSV Dialect is also orthogonal to the character encoding used in the CSV file. Note that it is possible for files in CSV format to contain data in more than one encoding.")]),e._v(" "),a("h3",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("CSV Dialect is useful for programmes which might have to deal with multiple dialects of CSV file, but which can rely on being told out-of-band which dialect will be used in a given input stream. This reduces the need for heuristic inference of CSV dialects, and simplifies the implementation of CSV readers, which must juggle dialect inference, schema inference, unseekable input streams, character encoding issues, and the lazy reading of very large input streams.")]),e._v(" "),a("p",[e._v("Some related work can be found in "),a("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1wjzil1q3t606IPahyBNNqB42OFF-JzxqhXqDDkPP_mc/edit#gid=0",target:"_blank",rel:"noopener noreferrer"}},[e._v("this comparison of csv dialect support"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://panda.readthedocs.io/en/latest/api.html#data-uploads",target:"_blank",rel:"noopener noreferrer"}},[e._v("this example of similar JSON format"),a("OutboundLink")],1),e._v(", and in "),a("a",{attrs:{href:"https://www.python.org/dev/peps/pep-0305/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python's PEP 305"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("p",[e._v("A CSV Dialect descriptor, dialect, MUST be a JSON object with the following properties:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("delimiter")]),e._v(" - specifies the character sequence which should separate fields (aka columns). Default = ,. Example \\t.")]),e._v(" "),a("li",[a("code",[e._v("lineTerminator")]),e._v(" - specifies the character sequence which should terminate rows. Default = \\r\\n")]),e._v(" "),a("li",[a("code",[e._v("quoteChar")]),e._v(' - specifies a one-character string to use as the quoting character. Default = "')]),e._v(" "),a("li",[a("code",[e._v("doubleQuote")]),e._v(" - controls the handling of quotes inside fields. If true, two consecutive quotes should be interpreted as one. Default = true")]),e._v(" "),a("li",[a("code",[e._v("escapeChar")]),e._v(" - specifies a one-character string to use for escaping (for example, ), mutually exclusive with quoteChar. Not set by default")]),e._v(" "),a("li",[a("code",[e._v("nullSequence")]),e._v(" - specifies the null sequence (for example \\N). Not set by default")]),e._v(" "),a("li",[a("code",[e._v("skipInitialSpace")]),e._v(" - specifies how to interpret whitespace which immediately follows a delimiter; if false, it means that whitespace immediately after a delimiter should be treated as part of the following field. Default = true")]),e._v(" "),a("li",[a("code",[e._v("header")]),e._v(" - indicates whether the file includes a header row. If true the first row in the file is a header row, not data. Default = true")]),e._v(" "),a("li",[a("code",[e._v("commentChar")]),e._v(" - indicates a one-character string to indicate lines whose remainder should be ignored")]),e._v(" "),a("li",[a("code",[e._v("caseSensitiveHeader")]),e._v(" - indicates that case in the header is meaningful. For example, columns CAT and Cat should not be equated. Default = false")]),e._v(" "),a("li",[a("code",[e._v("csvddfVersion")]),e._v(" - a number, in n.n format, e.g., 1.2. If not present, consumers should assume latest schema version.")])]),e._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("p",[e._v("Here's an example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "dialect": {\n    "csvddfVersion": 1.2,\n    "delimiter": ";",\n    "doubleQuote": true,\n    "lineTerminator": "\\r\\n",\n    "quoteChar": "\\"",\n    "skipInitialSpace": true,\n    "header": true,\n    "commentChar": "#"\n  }\n}\n')])])]),a("h3",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("p",[e._v("See the "),a("a",{attrs:{href:"https://frictionlessdata.io/specs/changelog/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Changelog"),a("OutboundLink")],1),e._v(" for information.")]),e._v(" "),a("h3",{attrs:{id:"implementations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementations"}},[e._v("#")]),e._v(" Implementations")]),e._v(" "),a("p",[e._v("The following implementations are available for csv-dialect:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-py",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-js",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("See the "),a("a",{attrs:{href:"www.specsimplementation.com"}},[e._v("implementation")]),e._v(" page for further information on writing an implementation of a Frictionless Data specification.")])])}),[],!1,null,null,null);t.default=r.exports}}]);