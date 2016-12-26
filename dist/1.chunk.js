webpackJsonp([1],{

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(93)

/* script */
__vue_exports__ = __webpack_require__(96)

/* template */
var __vue_template__ = __webpack_require__(86)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\panwenhua\\Documents\\HBuilderProject\\vue-CalendarListView\\src\\views\\historyorder.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c65cf638"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c65cf638", __vue_options__)
  } else {
    hotAPI.reload("data-v-c65cf638", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] historyorder.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },

/***/ 60:
/***/ function(module, exports) {

/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */

var Zepto = module.exports = (function() {
  var undefined, key, $, classList, emptyArray = [], slice = emptyArray.slice, filter = emptyArray.filter,
    document = window.document,
    elementDisplay = {}, classCache = {},
    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },
    fragmentRE = /^\s*<(\w+|!)[^>]*>/,
    singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    rootNodeRE = /^(?:body|html)$/i,
    capitalRE = /([A-Z])/g,

    // special attributes that should be get/set via method calls
    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],

    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],
    table = document.createElement('table'),
    tableRow = document.createElement('tr'),
    containers = {
      'tr': document.createElement('tbody'),
      'tbody': table, 'thead': table, 'tfoot': table,
      'td': tableRow, 'th': tableRow,
      '*': document.createElement('div')
    },
    readyRE = /complete|loaded|interactive/,
    simpleSelectorRE = /^[\w-]*$/,
    class2type = {},
    toString = class2type.toString,
    zepto = {},
    camelize, uniq,
    tempParent = document.createElement('div'),
    propMap = {
      'tabindex': 'tabIndex',
      'readonly': 'readOnly',
      'for': 'htmlFor',
      'class': 'className',
      'maxlength': 'maxLength',
      'cellspacing': 'cellSpacing',
      'cellpadding': 'cellPadding',
      'rowspan': 'rowSpan',
      'colspan': 'colSpan',
      'usemap': 'useMap',
      'frameborder': 'frameBorder',
      'contenteditable': 'contentEditable'
    },
    isArray = Array.isArray ||
      function(object){ return object instanceof Array }

  zepto.matches = function(element, selector) {
    if (!selector || !element || element.nodeType !== 1) return false
    var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector ||
                          element.oMatchesSelector || element.matchesSelector
    if (matchesSelector) return matchesSelector.call(element, selector)
    // fall back to performing a selector:
    var match, parent = element.parentNode, temp = !parent
    if (temp) (parent = tempParent).appendChild(element)
    match = ~zepto.qsa(parent, selector).indexOf(element)
    temp && tempParent.removeChild(element)
    return match
  }

  function type(obj) {
    return obj == null ? String(obj) :
      class2type[toString.call(obj)] || "object"
  }

  function isFunction(value) { return type(value) == "function" }
  function isWindow(obj)     { return obj != null && obj == obj.window }
  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
  function isObject(obj)     { return type(obj) == "object" }
  function isPlainObject(obj) {
    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
  }
  function likeArray(obj) { return typeof obj.length == 'number' }

  function compact(array) { return filter.call(array, function(item){ return item != null }) }
  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
  function dasherize(str) {
    return str.replace(/::/g, '/')
           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
           .replace(/_/g, '-')
           .toLowerCase()
  }
  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }

  function classRE(name) {
    return name in classCache ?
      classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
  }

  function maybeAddPx(name, value) {
    return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
  }

  function defaultDisplay(nodeName) {
    var element, display
    if (!elementDisplay[nodeName]) {
      element = document.createElement(nodeName)
      document.body.appendChild(element)
      display = getComputedStyle(element, '').getPropertyValue("display")
      element.parentNode.removeChild(element)
      display == "none" && (display = "block")
      elementDisplay[nodeName] = display
    }
    return elementDisplay[nodeName]
  }

  function children(element) {
    return 'children' in element ?
      slice.call(element.children) :
      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })
  }

  // `$.zepto.fragment` takes a html string and an optional tag name
  // to generate DOM nodes nodes from the given html string.
  // The generated DOM nodes are returned as an array.
  // This function can be overriden in plugins for example to make
  // it compatible with browsers that don't support the DOM fully.
  zepto.fragment = function(html, name, properties) {
    var dom, nodes, container

    // A special case optimization for a single tag
    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))

    if (!dom) {
      if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
      if (!(name in containers)) name = '*'

      container = containers[name]
      container.innerHTML = '' + html
      dom = $.each(slice.call(container.childNodes), function(){
        container.removeChild(this)
      })
    }

    if (isPlainObject(properties)) {
      nodes = $(dom)
      $.each(properties, function(key, value) {
        if (methodAttributes.indexOf(key) > -1) nodes[key](value)
        else nodes.attr(key, value)
      })
    }

    return dom
  }

  // `$.zepto.Z` swaps out the prototype of the given `dom` array
  // of nodes with `$.fn` and thus supplying all the Zepto functions
  // to the array. Note that `__proto__` is not supported on Internet
  // Explorer. This method can be overriden in plugins.
  zepto.Z = function(dom, selector) {
    dom = dom || []
    dom.__proto__ = $.fn
    dom.selector = selector || ''
    return dom
  }

  // `$.zepto.isZ` should return `true` if the given object is a Zepto
  // collection. This method can be overriden in plugins.
  zepto.isZ = function(object) {
    return object instanceof zepto.Z
  }

  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
  // takes a CSS selector and an optional context (and handles various
  // special cases).
  // This method can be overriden in plugins.
  zepto.init = function(selector, context) {
    var dom
    // If nothing given, return an empty Zepto collection
    if (!selector) return zepto.Z()
    // Optimize for string selectors
    else if (typeof selector == 'string') {
      selector = selector.trim()
      // If it's a html fragment, create nodes from it
      // Note: In both Chrome 21 and Firefox 15, DOM error 12
      // is thrown if the fragment doesn't begin with <
      if (selector[0] == '<' && fragmentRE.test(selector))
        dom = zepto.fragment(selector, RegExp.$1, context), selector = null
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined) return $(context).find(selector)
      // If it's a CSS selector, use it to select nodes.
      else dom = zepto.qsa(document, selector)
    }
    // If a function is given, call it when the DOM is ready
    else if (isFunction(selector)) return $(document).ready(selector)
    // If a Zepto collection is given, just return it
    else if (zepto.isZ(selector)) return selector
    else {
      // normalize array if an array of nodes is given
      if (isArray(selector)) dom = compact(selector)
      // Wrap DOM nodes.
      else if (isObject(selector))
        dom = [selector], selector = null
      // If it's a html fragment, create nodes from it
      else if (fragmentRE.test(selector))
        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined) return $(context).find(selector)
      // And last but no least, if it's a CSS selector, use it to select nodes.
      else dom = zepto.qsa(document, selector)
    }
    // create a new Zepto collection from the nodes found
    return zepto.Z(dom, selector)
  }

  // `$` will be the base `Zepto` object. When calling this
  // function just call `$.zepto.init, which makes the implementation
  // details of selecting nodes and creating Zepto collections
  // patchable in plugins.
  $ = function(selector, context){
    return zepto.init(selector, context)
  }

  function extend(target, source, deep) {
    for (key in source)
      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
        if (isPlainObject(source[key]) && !isPlainObject(target[key]))
          target[key] = {}
        if (isArray(source[key]) && !isArray(target[key]))
          target[key] = []
        extend(target[key], source[key], deep)
      }
      else if (source[key] !== undefined) target[key] = source[key]
  }

  // Copy all but undefined properties from one or more
  // objects to the `target` object.
  $.extend = function(target){
    var deep, args = slice.call(arguments, 1)
    if (typeof target == 'boolean') {
      deep = target
      target = args.shift()
    }
    args.forEach(function(arg){ extend(target, arg, deep) })
    return target
  }

  // `$.zepto.qsa` is Zepto's CSS selector implementation which
  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
  // This method can be overriden in plugins.
  zepto.qsa = function(element, selector){
    var found,
        maybeID = selector[0] == '#',
        maybeClass = !maybeID && selector[0] == '.',
        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked
        isSimple = simpleSelectorRE.test(nameOnly)
    return (isDocument(element) && isSimple && maybeID) ?
      ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :
      (element.nodeType !== 1 && element.nodeType !== 9) ? [] :
      slice.call(
        isSimple && !maybeID ?
          maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
          element.getElementsByTagName(selector) : // Or a tag
          element.querySelectorAll(selector) // Or it's not simple, and we need to query all
      )
  }

  function filtered(nodes, selector) {
    return selector == null ? $(nodes) : $(nodes).filter(selector)
  }

  $.contains = document.documentElement.contains ?
    function(parent, node) {
      return parent !== node && parent.contains(node)
    } :
    function(parent, node) {
      while (node && (node = node.parentNode))
        if (node === parent) return true
      return false
    }

  function funcArg(context, arg, idx, payload) {
    return isFunction(arg) ? arg.call(context, idx, payload) : arg
  }

  function setAttribute(node, name, value) {
    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
  }

  // access className property while respecting SVGAnimatedString
  function className(node, value){
    var klass = node.className || '',
        svg   = klass && klass.baseVal !== undefined

    if (value === undefined) return svg ? klass.baseVal : klass
    svg ? (klass.baseVal = value) : (node.className = value)
  }

  // "true"  => true
  // "false" => false
  // "null"  => null
  // "42"    => 42
  // "42.5"  => 42.5
  // "08"    => "08"
  // JSON    => parse if valid
  // String  => self
  function deserializeValue(value) {
    try {
      return value ?
        value == "true" ||
        ( value == "false" ? false :
          value == "null" ? null :
          +value + "" == value ? +value :
          /^[\[\{]/.test(value) ? $.parseJSON(value) :
          value )
        : value
    } catch(e) {
      return value
    }
  }

  $.type = type
  $.isFunction = isFunction
  $.isWindow = isWindow
  $.isArray = isArray
  $.isPlainObject = isPlainObject

  $.isEmptyObject = function(obj) {
    var name
    for (name in obj) return false
    return true
  }

  $.inArray = function(elem, array, i){
    return emptyArray.indexOf.call(array, elem, i)
  }

  $.camelCase = camelize
  $.trim = function(str) {
    return str == null ? "" : String.prototype.trim.call(str)
  }

  // plugin compatibility
  $.uuid = 0
  $.support = { }
  $.expr = { }

  $.map = function(elements, callback){
    var value, values = [], i, key
    if (likeArray(elements))
      for (i = 0; i < elements.length; i++) {
        value = callback(elements[i], i)
        if (value != null) values.push(value)
      }
    else
      for (key in elements) {
        value = callback(elements[key], key)
        if (value != null) values.push(value)
      }
    return flatten(values)
  }

  $.each = function(elements, callback){
    var i, key
    if (likeArray(elements)) {
      for (i = 0; i < elements.length; i++)
        if (callback.call(elements[i], i, elements[i]) === false) return elements
    } else {
      for (key in elements)
        if (callback.call(elements[key], key, elements[key]) === false) return elements
    }

    return elements
  }

  $.grep = function(elements, callback){
    return filter.call(elements, callback)
  }

  if (window.JSON) $.parseJSON = JSON.parse

  // Populate the class2type map
  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
    class2type[ "[object " + name + "]" ] = name.toLowerCase()
  })

  // Define methods that will be available on all
  // Zepto collections
  $.fn = {
    // Because a collection acts like an array
    // copy over these useful array functions.
    forEach: emptyArray.forEach,
    reduce: emptyArray.reduce,
    push: emptyArray.push,
    sort: emptyArray.sort,
    indexOf: emptyArray.indexOf,
    concat: emptyArray.concat,

    // `map` and `slice` in the jQuery API work differently
    // from their array counterparts
    map: function(fn){
      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))
    },
    slice: function(){
      return $(slice.apply(this, arguments))
    },

    ready: function(callback){
      // need to check if document.body exists for IE as that browser reports
      // document ready when it hasn't yet created the body element
      if (readyRE.test(document.readyState) && document.body) callback($)
      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
      return this
    },
    get: function(idx){
      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
    },
    toArray: function(){ return this.get() },
    size: function(){
      return this.length
    },
    remove: function(){
      return this.each(function(){
        if (this.parentNode != null)
          this.parentNode.removeChild(this)
      })
    },
    each: function(callback){
      emptyArray.every.call(this, function(el, idx){
        return callback.call(el, idx, el) !== false
      })
      return this
    },
    filter: function(selector){
      if (isFunction(selector)) return this.not(this.not(selector))
      return $(filter.call(this, function(element){
        return zepto.matches(element, selector)
      }))
    },
    add: function(selector,context){
      return $(uniq(this.concat($(selector,context))))
    },
    is: function(selector){
      return this.length > 0 && zepto.matches(this[0], selector)
    },
    not: function(selector){
      var nodes=[]
      if (isFunction(selector) && selector.call !== undefined)
        this.each(function(idx){
          if (!selector.call(this,idx)) nodes.push(this)
        })
      else {
        var excludes = typeof selector == 'string' ? this.filter(selector) :
          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
        this.forEach(function(el){
          if (excludes.indexOf(el) < 0) nodes.push(el)
        })
      }
      return $(nodes)
    },
    has: function(selector){
      return this.filter(function(){
        return isObject(selector) ?
          $.contains(this, selector) :
          $(this).find(selector).size()
      })
    },
    eq: function(idx){
      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)
    },
    first: function(){
      var el = this[0]
      return el && !isObject(el) ? el : $(el)
    },
    last: function(){
      var el = this[this.length - 1]
      return el && !isObject(el) ? el : $(el)
    },
    find: function(selector){
      var result, $this = this
      if (!selector) result = $()
      else if (typeof selector == 'object')
        result = $(selector).filter(function(){
          var node = this
          return emptyArray.some.call($this, function(parent){
            return $.contains(parent, node)
          })
        })
      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))
      else result = this.map(function(){ return zepto.qsa(this, selector) })
      return result
    },
    closest: function(selector, context){
      var node = this[0], collection = false
      if (typeof selector == 'object') collection = $(selector)
      while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
        node = node !== context && !isDocument(node) && node.parentNode
      return $(node)
    },
    parents: function(selector){
      var ancestors = [], nodes = this
      while (nodes.length > 0)
        nodes = $.map(nodes, function(node){
          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
            ancestors.push(node)
            return node
          }
        })
      return filtered(ancestors, selector)
    },
    parent: function(selector){
      return filtered(uniq(this.pluck('parentNode')), selector)
    },
    children: function(selector){
      return filtered(this.map(function(){ return children(this) }), selector)
    },
    contents: function() {
      return this.map(function() { return slice.call(this.childNodes) })
    },
    siblings: function(selector){
      return filtered(this.map(function(i, el){
        return filter.call(children(el.parentNode), function(child){ return child!==el })
      }), selector)
    },
    empty: function(){
      return this.each(function(){ this.innerHTML = '' })
    },
    // `pluck` is borrowed from Prototype.js
    pluck: function(property){
      return $.map(this, function(el){ return el[property] })
    },
    show: function(){
      return this.each(function(){
        this.style.display == "none" && (this.style.display = '')
        if (getComputedStyle(this, '').getPropertyValue("display") == "none")
          this.style.display = defaultDisplay(this.nodeName)
      })
    },
    replaceWith: function(newContent){
      return this.before(newContent).remove()
    },
    wrap: function(structure){
      var func = isFunction(structure)
      if (this[0] && !func)
        var dom   = $(structure).get(0),
            clone = dom.parentNode || this.length > 1

      return this.each(function(index){
        $(this).wrapAll(
          func ? structure.call(this, index) :
            clone ? dom.cloneNode(true) : dom
        )
      })
    },
    wrapAll: function(structure){
      if (this[0]) {
        $(this[0]).before(structure = $(structure))
        var children
        // drill down to the inmost element
        while ((children = structure.children()).length) structure = children.first()
        $(structure).append(this)
      }
      return this
    },
    wrapInner: function(structure){
      var func = isFunction(structure)
      return this.each(function(index){
        var self = $(this), contents = self.contents(),
            dom  = func ? structure.call(this, index) : structure
        contents.length ? contents.wrapAll(dom) : self.append(dom)
      })
    },
    unwrap: function(){
      this.parent().each(function(){
        $(this).replaceWith($(this).children())
      })
      return this
    },
    clone: function(){
      return this.map(function(){ return this.cloneNode(true) })
    },
    hide: function(){
      return this.css("display", "none")
    },
    toggle: function(setting){
      return this.each(function(){
        var el = $(this)
        ;(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
      })
    },
    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },
    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },
    html: function(html){
      return 0 in arguments ?
        this.each(function(idx){
          var originHtml = this.innerHTML
          $(this).empty().append( funcArg(this, html, idx, originHtml) )
        }) :
        (0 in this ? this[0].innerHTML : null)
    },
    text: function(text){
      return 0 in arguments ?
        this.each(function(idx){
          var newText = funcArg(this, text, idx, this.textContent)
          this.textContent = newText == null ? '' : ''+newText
        }) :
        (0 in this ? this[0].textContent : null)
    },
    attr: function(name, value){
      var result
      return (typeof name == 'string' && !(1 in arguments)) ?
        (!this.length || this[0].nodeType !== 1 ? undefined :
          (!(result = this[0].getAttribute(name)) && name in this[0]) ? this[0][name] : result
        ) :
        this.each(function(idx){
          if (this.nodeType !== 1) return
          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])
          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
        })
    },
    removeAttr: function(name){
      return this.each(function(){ this.nodeType === 1 && name.split(' ').forEach(function(attribute){
        setAttribute(this, attribute)
      }, this)})
    },
    prop: function(name, value){
      name = propMap[name] || name
      return (1 in arguments) ?
        this.each(function(idx){
          this[name] = funcArg(this, value, idx, this[name])
        }) :
        (this[0] && this[0][name])
    },
    data: function(name, value){
      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()

      var data = (1 in arguments) ?
        this.attr(attrName, value) :
        this.attr(attrName)

      return data !== null ? deserializeValue(data) : undefined
    },
    val: function(value){
      return 0 in arguments ?
        this.each(function(idx){
          this.value = funcArg(this, value, idx, this.value)
        }) :
        (this[0] && (this[0].multiple ?
           $(this[0]).find('option').filter(function(){ return this.selected }).pluck('value') :
           this[0].value)
        )
    },
    offset: function(coordinates){
      if (coordinates) return this.each(function(index){
        var $this = $(this),
            coords = funcArg(this, coordinates, index, $this.offset()),
            parentOffset = $this.offsetParent().offset(),
            props = {
              top:  coords.top  - parentOffset.top,
              left: coords.left - parentOffset.left
            }

        if ($this.css('position') == 'static') props['position'] = 'relative'
        $this.css(props)
      })
      if (!this.length) return null
      var obj = this[0].getBoundingClientRect()
      return {
        left: obj.left + window.pageXOffset,
        top: obj.top + window.pageYOffset,
        width: Math.round(obj.width),
        height: Math.round(obj.height)
      }
    },
    css: function(property, value){
      if (arguments.length < 2) {
        var computedStyle, element = this[0]
        if(!element) return
        computedStyle = getComputedStyle(element, '')
        if (typeof property == 'string')
          return element.style[camelize(property)] || computedStyle.getPropertyValue(property)
        else if (isArray(property)) {
          var props = {}
          $.each(property, function(_, prop){
            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))
          })
          return props
        }
      }

      var css = ''
      if (type(property) == 'string') {
        if (!value && value !== 0)
          this.each(function(){ this.style.removeProperty(dasherize(property)) })
        else
          css = dasherize(property) + ":" + maybeAddPx(property, value)
      } else {
        for (key in property)
          if (!property[key] && property[key] !== 0)
            this.each(function(){ this.style.removeProperty(dasherize(key)) })
          else
            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
      }

      return this.each(function(){ this.style.cssText += ';' + css })
    },
    index: function(element){
      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
    },
    hasClass: function(name){
      if (!name) return false
      return emptyArray.some.call(this, function(el){
        return this.test(className(el))
      }, classRE(name))
    },
    addClass: function(name){
      if (!name) return this
      return this.each(function(idx){
        if (!('className' in this)) return
        classList = []
        var cls = className(this), newName = funcArg(this, name, idx, cls)
        newName.split(/\s+/g).forEach(function(klass){
          if (!$(this).hasClass(klass)) classList.push(klass)
        }, this)
        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
      })
    },
    removeClass: function(name){
      return this.each(function(idx){
        if (!('className' in this)) return
        if (name === undefined) return className(this, '')
        classList = className(this)
        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){
          classList = classList.replace(classRE(klass), " ")
        })
        className(this, classList.trim())
      })
    },
    toggleClass: function(name, when){
      if (!name) return this
      return this.each(function(idx){
        var $this = $(this), names = funcArg(this, name, idx, className(this))
        names.split(/\s+/g).forEach(function(klass){
          (when === undefined ? !$this.hasClass(klass) : when) ?
            $this.addClass(klass) : $this.removeClass(klass)
        })
      })
    },
    scrollTop: function(value){
      if (!this.length) return
      var hasScrollTop = 'scrollTop' in this[0]
      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset
      return this.each(hasScrollTop ?
        function(){ this.scrollTop = value } :
        function(){ this.scrollTo(this.scrollX, value) })
    },
    scrollLeft: function(value){
      if (!this.length) return
      var hasScrollLeft = 'scrollLeft' in this[0]
      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset
      return this.each(hasScrollLeft ?
        function(){ this.scrollLeft = value } :
        function(){ this.scrollTo(value, this.scrollY) })
    },
    position: function() {
      if (!this.length) return

      var elem = this[0],
        // Get *real* offsetParent
        offsetParent = this.offsetParent(),
        // Get correct offsets
        offset       = this.offset(),
        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()

      // Subtract element margins
      // note: when an element has margin: auto the offsetLeft and marginLeft
      // are the same in Safari causing offset.left to incorrectly be 0
      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0
      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0

      // Add offsetParent borders
      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0
      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0

      // Subtract the two offsets
      return {
        top:  offset.top  - parentOffset.top,
        left: offset.left - parentOffset.left
      }
    },
    offsetParent: function() {
      return this.map(function(){
        var parent = this.offsetParent || document.body
        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
          parent = parent.offsetParent
        return parent
      })
    }
  }

  // for now
  $.fn.detach = $.fn.remove

  // Generate the `width` and `height` functions
  ;['width', 'height'].forEach(function(dimension){
    var dimensionProperty =
      dimension.replace(/./, function(m){ return m[0].toUpperCase() })

    $.fn[dimension] = function(value){
      var offset, el = this[0]
      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :
        isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :
        (offset = this.offset()) && offset[dimension]
      else return this.each(function(idx){
        el = $(this)
        el.css(dimension, funcArg(this, value, idx, el[dimension]()))
      })
    }
  })

  function traverseNode(node, fun) {
    fun(node)
    for (var i = 0, len = node.childNodes.length; i < len; i++)
      traverseNode(node.childNodes[i], fun)
  }

  // Generate the `after`, `prepend`, `before`, `append`,
  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
  adjacencyOperators.forEach(function(operator, operatorIndex) {
    var inside = operatorIndex % 2 //=> prepend, append

    $.fn[operator] = function(){
      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
      var argType, nodes = $.map(arguments, function(arg) {
            argType = type(arg)
            return argType == "object" || argType == "array" || arg == null ?
              arg : zepto.fragment(arg)
          }),
          parent, copyByClone = this.length > 1
      if (nodes.length < 1) return this

      return this.each(function(_, target){
        parent = inside ? target : target.parentNode

        // convert all methods to a "before" operation
        target = operatorIndex == 0 ? target.nextSibling :
                 operatorIndex == 1 ? target.firstChild :
                 operatorIndex == 2 ? target :
                 null

        var parentInDocument = $.contains(document.documentElement, parent)

        nodes.forEach(function(node){
          if (copyByClone) node = node.cloneNode(true)
          else if (!parent) return $(node).remove()

          parent.insertBefore(node, target)
          if (parentInDocument) traverseNode(node, function(el){
            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
               (!el.type || el.type === 'text/javascript') && !el.src)
              window['eval'].call(window, el.innerHTML)
          })
        })
      })
    }

    // after    => insertAfter
    // prepend  => prependTo
    // before   => insertBefore
    // append   => appendTo
    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){
      $(html)[operator](this)
      return this
    }
  })

  zepto.Z.prototype = $.fn

  // Export internal API functions in the `$.zepto` namespace
  zepto.uniq = uniq
  zepto.deserializeValue = deserializeValue
  $.zepto = zepto

  return $
})()

;(function($){
  var _zid = 1, undefined,
      slice = Array.prototype.slice,
      isFunction = $.isFunction,
      isString = function(obj){ return typeof obj == 'string' },
      handlers = {},
      specialEvents={},
      focusinSupported = 'onfocusin' in window,
      focus = { focus: 'focusin', blur: 'focusout' },
      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }

  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'

  function zid(element) {
    return element._zid || (element._zid = _zid++)
  }
  function findHandlers(element, event, fn, selector) {
    event = parse(event)
    if (event.ns) var matcher = matcherFor(event.ns)
    return (handlers[zid(element)] || []).filter(function(handler) {
      return handler
        && (!event.e  || handler.e == event.e)
        && (!event.ns || matcher.test(handler.ns))
        && (!fn       || zid(handler.fn) === zid(fn))
        && (!selector || handler.sel == selector)
    })
  }
  function parse(event) {
    var parts = ('' + event).split('.')
    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}
  }
  function matcherFor(ns) {
    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
  }

  function eventCapture(handler, captureSetting) {
    return handler.del &&
      (!focusinSupported && (handler.e in focus)) ||
      !!captureSetting
  }

  function realEvent(type) {
    return hover[type] || (focusinSupported && focus[type]) || type
  }

  function add(element, events, fn, data, selector, delegator, capture){
    var id = zid(element), set = (handlers[id] || (handlers[id] = []))
    events.split(/\s/).forEach(function(event){
      if (event == 'ready') return $(document).ready(fn)
      var handler   = parse(event)
      handler.fn    = fn
      handler.sel   = selector
      // emulate mouseenter, mouseleave
      if (handler.e in hover) fn = function(e){
        var related = e.relatedTarget
        if (!related || (related !== this && !$.contains(this, related)))
          return handler.fn.apply(this, arguments)
      }
      handler.del   = delegator
      var callback  = delegator || fn
      handler.proxy = function(e){
        e = compatible(e)
        if (e.isImmediatePropagationStopped()) return
        e.data = data
        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))
        if (result === false) e.preventDefault(), e.stopPropagation()
        return result
      }
      handler.i = set.length
      set.push(handler)
      if ('addEventListener' in element)
        element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
    })
  }
  function remove(element, events, fn, selector, capture){
    var id = zid(element)
    ;(events || '').split(/\s/).forEach(function(event){
      findHandlers(element, event, fn, selector).forEach(function(handler){
        delete handlers[id][handler.i]
      if ('removeEventListener' in element)
        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
      })
    })
  }

  $.event = { add: add, remove: remove }

  $.proxy = function(fn, context) {
    var args = (2 in arguments) && slice.call(arguments, 2)
    if (isFunction(fn)) {
      var proxyFn = function(){ return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }
      proxyFn._zid = zid(fn)
      return proxyFn
    } else if (isString(context)) {
      if (args) {
        args.unshift(fn[context], fn)
        return $.proxy.apply(null, args)
      } else {
        return $.proxy(fn[context], fn)
      }
    } else {
      throw new TypeError("expected function")
    }
  }

  $.fn.bind = function(event, data, callback){
    return this.on(event, data, callback)
  }
  $.fn.unbind = function(event, callback){
    return this.off(event, callback)
  }
  $.fn.one = function(event, selector, data, callback){
    return this.on(event, selector, data, callback, 1)
  }

  var returnTrue = function(){return true},
      returnFalse = function(){return false},
      ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$)/,
      eventMethods = {
        preventDefault: 'isDefaultPrevented',
        stopImmediatePropagation: 'isImmediatePropagationStopped',
        stopPropagation: 'isPropagationStopped'
      }

  function compatible(event, source) {
    if (source || !event.isDefaultPrevented) {
      source || (source = event)

      $.each(eventMethods, function(name, predicate) {
        var sourceMethod = source[name]
        event[name] = function(){
          this[predicate] = returnTrue
          return sourceMethod && sourceMethod.apply(source, arguments)
        }
        event[predicate] = returnFalse
      })

      if (source.defaultPrevented !== undefined ? source.defaultPrevented :
          'returnValue' in source ? source.returnValue === false :
          source.getPreventDefault && source.getPreventDefault())
        event.isDefaultPrevented = returnTrue
    }
    return event
  }

  function createProxy(event) {
    var key, proxy = { originalEvent: event }
    for (key in event)
      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]

    return compatible(proxy, event)
  }

  $.fn.delegate = function(selector, event, callback){
    return this.on(event, selector, callback)
  }
  $.fn.undelegate = function(selector, event, callback){
    return this.off(event, selector, callback)
  }

  $.fn.live = function(event, callback){
    $(document.body).delegate(this.selector, event, callback)
    return this
  }
  $.fn.die = function(event, callback){
    $(document.body).undelegate(this.selector, event, callback)
    return this
  }

  $.fn.on = function(event, selector, data, callback, one){
    var autoRemove, delegator, $this = this
    if (event && !isString(event)) {
      $.each(event, function(type, fn){
        $this.on(type, selector, data, fn, one)
      })
      return $this
    }

    if (!isString(selector) && !isFunction(callback) && callback !== false)
      callback = data, data = selector, selector = undefined
    if (isFunction(data) || data === false)
      callback = data, data = undefined

    if (callback === false) callback = returnFalse

    return $this.each(function(_, element){
      if (one) autoRemove = function(e){
        remove(element, e.type, callback)
        return callback.apply(this, arguments)
      }

      if (selector) delegator = function(e){
        var evt, match = $(e.target).closest(selector, element).get(0)
        if (match && match !== element) {
          evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})
          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))
        }
      }

      add(element, event, callback, data, selector, delegator || autoRemove)
    })
  }
  $.fn.off = function(event, selector, callback){
    var $this = this
    if (event && !isString(event)) {
      $.each(event, function(type, fn){
        $this.off(type, selector, fn)
      })
      return $this
    }

    if (!isString(selector) && !isFunction(callback) && callback !== false)
      callback = selector, selector = undefined

    if (callback === false) callback = returnFalse

    return $this.each(function(){
      remove(this, event, callback, selector)
    })
  }

  $.fn.trigger = function(event, args){
    event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)
    event._args = args
    return this.each(function(){
      // handle focus(), blur() by calling them directly
      if (event.type in focus && typeof this[event.type] == "function") this[event.type]()
      // items in the collection might not be DOM elements
      else if ('dispatchEvent' in this) this.dispatchEvent(event)
      else $(this).triggerHandler(event, args)
    })
  }

  // triggers event handlers on current element just as if an event occurred,
  // doesn't trigger an actual event, doesn't bubble
  $.fn.triggerHandler = function(event, args){
    var e, result
    this.each(function(i, element){
      e = createProxy(isString(event) ? $.Event(event) : event)
      e._args = args
      e.target = element
      $.each(findHandlers(element, event.type || event), function(i, handler){
        result = handler.proxy(e)
        if (e.isImmediatePropagationStopped()) return false
      })
    })
    return result
  }

  // shortcut methods for `.bind(event, fn)` for each event type
  ;('focusin focusout focus blur load resize scroll unload click dblclick '+
  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+
  'change select keydown keypress keyup error').split(' ').forEach(function(event) {
    $.fn[event] = function(callback) {
      return (0 in arguments) ?
        this.bind(event, callback) :
        this.trigger(event)
    }
  })

  $.Event = function(type, props) {
    if (!isString(type)) props = type, type = props.type
    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true
    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
    event.initEvent(type, bubbles, true)
    return compatible(event)
  }

})(Zepto)

;(function($){
  var jsonpID = 0,
      document = window.document,
      key,
      name,
      rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      scriptTypeRE = /^(?:text|application)\/javascript/i,
      xmlTypeRE = /^(?:text|application)\/xml/i,
      jsonType = 'application/json',
      htmlType = 'text/html',
      blankRE = /^\s*$/,
      originAnchor = document.createElement('a')

  originAnchor.href = window.location.href

  // trigger a custom event and return false if it was cancelled
  function triggerAndReturn(context, eventName, data) {
    var event = $.Event(eventName)
    $(context).trigger(event, data)
    return !event.isDefaultPrevented()
  }

  // trigger an Ajax "global" event
  function triggerGlobal(settings, context, eventName, data) {
    if (settings.global) return triggerAndReturn(context || document, eventName, data)
  }

  // Number of active Ajax requests
  $.active = 0

  function ajaxStart(settings) {
    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')
  }
  function ajaxStop(settings) {
    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')
  }

  // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
  function ajaxBeforeSend(xhr, settings) {
    var context = settings.context
    if (settings.beforeSend.call(context, xhr, settings) === false ||
        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
      return false

    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])
  }
  function ajaxSuccess(data, xhr, settings, deferred) {
    var context = settings.context, status = 'success'
    settings.success.call(context, data, status, xhr)
    if (deferred) deferred.resolveWith(context, [data, status, xhr])
    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])
    ajaxComplete(status, xhr, settings)
  }
  // type: "timeout", "error", "abort", "parsererror"
  function ajaxError(error, type, xhr, settings, deferred) {
    var context = settings.context
    settings.error.call(context, xhr, type, error)
    if (deferred) deferred.rejectWith(context, [xhr, type, error])
    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type])
    ajaxComplete(type, xhr, settings)
  }
  // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
  function ajaxComplete(status, xhr, settings) {
    var context = settings.context
    settings.complete.call(context, xhr, status)
    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])
    ajaxStop(settings)
  }

  // Empty function, used as default callback
  function empty() {}

  $.ajaxJSONP = function(options, deferred){
    if (!('type' in options)) return $.ajax(options)

    var _callbackName = options.jsonpCallback,
      callbackName = ($.isFunction(_callbackName) ?
        _callbackName() : _callbackName) || ('jsonp' + (++jsonpID)),
      script = document.createElement('script'),
      originalCallback = window[callbackName],
      responseData,
      abort = function(errorType) {
        $(script).triggerHandler('error', errorType || 'abort')
      },
      xhr = { abort: abort }, abortTimeout

    if (deferred) deferred.promise(xhr)

    $(script).on('load error', function(e, errorType){
      clearTimeout(abortTimeout)
      $(script).off().remove()

      if (e.type == 'error' || !responseData) {
        ajaxError(null, errorType || 'error', xhr, options, deferred)
      } else {
        ajaxSuccess(responseData[0], xhr, options, deferred)
      }

      window[callbackName] = originalCallback
      if (responseData && $.isFunction(originalCallback))
        originalCallback(responseData[0])

      originalCallback = responseData = undefined
    })

    if (ajaxBeforeSend(xhr, options) === false) {
      abort('abort')
      return xhr
    }

    window[callbackName] = function(){
      responseData = arguments
    }

    script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName)
    document.head.appendChild(script)

    if (options.timeout > 0) abortTimeout = setTimeout(function(){
      abort('timeout')
    }, options.timeout)

    return xhr
  }

  $.ajaxSettings = {
    // Default type of request
    type: 'GET',
    // Callback that is executed before request
    beforeSend: empty,
    // Callback that is executed if the request succeeds
    success: empty,
    // Callback that is executed the the server drops error
    error: empty,
    // Callback that is executed on request complete (both: error and success)
    complete: empty,
    // The context for the callbacks
    context: null,
    // Whether to trigger "global" Ajax events
    global: true,
    // Transport
    xhr: function () {
      return new window.XMLHttpRequest()
    },
    // MIME types mapping
    // IIS returns Javascript as "application/x-javascript"
    accepts: {
      script: 'text/javascript, application/javascript, application/x-javascript',
      json:   jsonType,
      xml:    'application/xml, text/xml',
      html:   htmlType,
      text:   'text/plain'
    },
    // Whether the request is to another domain
    crossDomain: false,
    // Default timeout
    timeout: 0,
    // Whether data should be serialized to string
    processData: true,
    // Whether the browser should be allowed to cache GET responses
    cache: true
  }

  function mimeToDataType(mime) {
    if (mime) mime = mime.split(';', 2)[0]
    return mime && ( mime == htmlType ? 'html' :
      mime == jsonType ? 'json' :
      scriptTypeRE.test(mime) ? 'script' :
      xmlTypeRE.test(mime) && 'xml' ) || 'text'
  }

  function appendQuery(url, query) {
    if (query == '') return url
    return (url + '&' + query).replace(/[&?]{1,2}/, '?')
  }

  // serialize payload and append it to the URL for GET requests
  function serializeData(options) {
    if (options.processData && options.data && $.type(options.data) != "string")
      options.data = $.param(options.data, options.traditional)
    if (options.data && (!options.type || options.type.toUpperCase() == 'GET'))
      options.url = appendQuery(options.url, options.data), options.data = undefined
  }

  $.ajax = function(options){
    var settings = $.extend({}, options || {}),
        deferred = $.Deferred && $.Deferred(),
        urlAnchor
    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]

    ajaxStart(settings)

    if (!settings.crossDomain) {
      urlAnchor = document.createElement('a')
      urlAnchor.href = settings.url
      urlAnchor.href = urlAnchor.href
      settings.crossDomain = (originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host)
    }

    if (!settings.url) settings.url = window.location.toString()
    serializeData(settings)

    var dataType = settings.dataType, hasPlaceholder = /\?.+=\?/.test(settings.url)
    if (hasPlaceholder) dataType = 'jsonp'

    if (settings.cache === false || (
         (!options || options.cache !== true) &&
         ('script' == dataType || 'jsonp' == dataType)
        ))
      settings.url = appendQuery(settings.url, '_=' + Date.now())

    if ('jsonp' == dataType) {
      if (!hasPlaceholder)
        settings.url = appendQuery(settings.url,
          settings.jsonp ? (settings.jsonp + '=?') : settings.jsonp === false ? '' : 'callback=?')
      return $.ajaxJSONP(settings, deferred)
    }

    var mime = settings.accepts[dataType],
        headers = { },
        setHeader = function(name, value) { headers[name.toLowerCase()] = [name, value] },
        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
        xhr = settings.xhr(),
        nativeSetHeader = xhr.setRequestHeader,
        abortTimeout

    if (deferred) deferred.promise(xhr)

    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest')
    setHeader('Accept', mime || '*/*')
    if (mime = settings.mimeType || mime) {
      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
      xhr.overrideMimeType && xhr.overrideMimeType(mime)
    }
    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
      setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded')

    if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])
    xhr.setRequestHeader = setHeader

    xhr.onreadystatechange = function(){
      if (xhr.readyState == 4) {
        xhr.onreadystatechange = empty
        clearTimeout(abortTimeout)
        var result, error = false
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'))
          result = xhr.responseText

          try {
            // http://perfectionkills.com/global-eval-what-are-the-options/
            if (dataType == 'script')    (1,eval)(result)
            else if (dataType == 'xml')  result = xhr.responseXML
            else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)
          } catch (e) { error = e }

          if (error) ajaxError(error, 'parsererror', xhr, settings, deferred)
          else ajaxSuccess(result, xhr, settings, deferred)
        } else {
          ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred)
        }
      }
    }

    if (ajaxBeforeSend(xhr, settings) === false) {
      xhr.abort()
      ajaxError(null, 'abort', xhr, settings, deferred)
      return xhr
    }

    if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]

    var async = 'async' in settings ? settings.async : true
    xhr.open(settings.type, settings.url, async, settings.username, settings.password)

    for (name in headers) nativeSetHeader.apply(xhr, headers[name])

    if (settings.timeout > 0) abortTimeout = setTimeout(function(){
        xhr.onreadystatechange = empty
        xhr.abort()
        ajaxError(null, 'timeout', xhr, settings, deferred)
      }, settings.timeout)

    // avoid sending empty string (#319)
    xhr.send(settings.data ? settings.data : null)
    return xhr
  }

  // handle optional data/success arguments
  function parseArguments(url, data, success, dataType) {
    if ($.isFunction(data)) dataType = success, success = data, data = undefined
    if (!$.isFunction(success)) dataType = success, success = undefined
    return {
      url: url
    , data: data
    , success: success
    , dataType: dataType
    }
  }

  $.get = function(/* url, data, success, dataType */){
    return $.ajax(parseArguments.apply(null, arguments))
  }

  $.post = function(/* url, data, success, dataType */){
    var options = parseArguments.apply(null, arguments)
    options.type = 'POST'
    return $.ajax(options)
  }

  $.getJSON = function(/* url, data, success */){
    var options = parseArguments.apply(null, arguments)
    options.dataType = 'json'
    return $.ajax(options)
  }

  $.fn.load = function(url, data, success){
    if (!this.length) return this
    var self = this, parts = url.split(/\s/), selector,
        options = parseArguments(url, data, success),
        callback = options.success
    if (parts.length > 1) options.url = parts[0], selector = parts[1]
    options.success = function(response){
      self.html(selector ?
        $('<div>').html(response.replace(rscript, "")).find(selector)
        : response)
      callback && callback.apply(self, arguments)
    }
    $.ajax(options)
    return this
  }

  var escape = encodeURIComponent

  function serialize(params, obj, traditional, scope){
    var type, array = $.isArray(obj), hash = $.isPlainObject(obj)
    $.each(obj, function(key, value) {
      type = $.type(value)
      if (scope) key = traditional ? scope :
        scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'
      // handle data in serializeArray() format
      if (!scope && array) params.add(value.name, value.value)
      // recurse into nested objects
      else if (type == "array" || (!traditional && type == "object"))
        serialize(params, value, traditional, key)
      else params.add(key, value)
    })
  }

  $.param = function(obj, traditional){
    var params = []
    params.add = function(key, value) {
      if ($.isFunction(value)) value = value()
      if (value == null) value = ""
      this.push(escape(key) + '=' + escape(value))
    }
    serialize(params, obj, traditional)
    return params.join('&').replace(/%20/g, '+')
  }
})(Zepto)

;(function($){
  $.fn.serializeArray = function() {
    var name, type, result = [],
      add = function(value) {
        if (value.forEach) return value.forEach(add)
        result.push({ name: name, value: value })
      }
    if (this[0]) $.each(this[0].elements, function(_, field){
      type = field.type, name = field.name
      if (name && field.nodeName.toLowerCase() != 'fieldset' &&
        !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' &&
        ((type != 'radio' && type != 'checkbox') || field.checked))
          add($(field).val())
    })
    return result
  }

  $.fn.serialize = function(){
    var result = []
    this.serializeArray().forEach(function(elm){
      result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value))
    })
    return result.join('&')
  }

  $.fn.submit = function(callback) {
    if (0 in arguments) this.bind('submit', callback)
    else if (this.length) {
      var event = $.Event('submit')
      this.eq(0).trigger(event)
      if (!event.isDefaultPrevented()) this.get(0).submit()
    }
    return this
  }

})(Zepto)

;(function($){
  // __proto__ doesn't exist on IE<11, so redefine
  // the Z function to use object extension instead
  if (!('__proto__' in {})) {
    $.extend($.zepto, {
      Z: function(dom, selector){
        dom = dom || []
        $.extend(dom, $.fn)
        dom.selector = selector || ''
        dom.__Z = true
        return dom
      },
      // this is a kludge but works
      isZ: function(object){
        return $.type(object) === 'array' && '__Z' in object
      }
    })
  }

  // getComputedStyle shouldn't freak out when called
  // without a valid element as argument
  try {
    getComputedStyle(undefined)
  } catch(e) {
    var nativeGetComputedStyle = getComputedStyle;
    window.getComputedStyle = function(element){
      try {
        return nativeGetComputedStyle(element)
      } catch(e) {
        return null
      }
    }
  }
})(Zepto)

/***/ },

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(63)

/* script */
__vue_exports__ = __webpack_require__(65)

/* template */
var __vue_template__ = __webpack_require__(62)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\panwenhua\\Documents\\HBuilderProject\\vue-CalendarListView\\src\\components\\header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-64e77247"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64e77247", __vue_options__)
  } else {
    hotAPI.reload("data-v-64e77247", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] header.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.getHeader) ? _c('header', {
    class: _vm.opa == false ? {
      white: true
    } : {
      black: true
    }
  }, [(_vm.backType) ? _c('a', {
    class: _vm.getBackClass,
    on: {
      "click": function($event) {
        _vm.aBtn()
      }
    }
  }) : _vm._e(), _vm._v(" "), _c('span', {
    domProps: {
      "textContent": _vm._s(_vm.pageName)
    }
  }), _vm._v(" "), (_vm.clickBtn) ? _c('a', {
    staticClass: "rightButton",
    domProps: {
      "innerHTML": _vm._s(_vm.clickBtn)
    },
    on: {
      "click": _vm.clickAction
    }
  }) : _vm._e()]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-64e77247", module.exports)
  }
}

/***/ },

/***/ 63:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/* global define */

;(function ($) {
  'use strict'

  /*
  * Add integers, wrapping at 2^32. This uses 16-bit operations internally
  * to work around bugs in some JS interpreters.
  */
  function safeAdd (x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF)
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16)
    return (msw << 16) | (lsw & 0xFFFF)
  }

  /*
  * Bitwise rotate a 32-bit number to the left.
  */
  function bitRotateLeft (num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt))
  }

  /*
  * These functions implement the four basic operations the algorithm uses.
  */
  function md5cmn (q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b)
  }
  function md5ff (a, b, c, d, x, s, t) {
    return md5cmn((b & c) | ((~b) & d), a, b, x, s, t)
  }
  function md5gg (a, b, c, d, x, s, t) {
    return md5cmn((b & d) | (c & (~d)), a, b, x, s, t)
  }
  function md5hh (a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t)
  }
  function md5ii (a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | (~d)), a, b, x, s, t)
  }

  /*
  * Calculate the MD5 of an array of little-endian words, and a bit length.
  */
  function binlMD5 (x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << (len % 32)
    x[(((len + 64) >>> 9) << 4) + 14] = len

    var i
    var olda
    var oldb
    var oldc
    var oldd
    var a = 1732584193
    var b = -271733879
    var c = -1732584194
    var d = 271733878

    for (i = 0; i < x.length; i += 16) {
      olda = a
      oldb = b
      oldc = c
      oldd = d

      a = md5ff(a, b, c, d, x[i], 7, -680876936)
      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586)
      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819)
      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330)
      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897)
      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426)
      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341)
      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983)
      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416)
      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417)
      c = md5ff(c, d, a, b, x[i + 10], 17, -42063)
      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162)
      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682)
      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101)
      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290)
      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329)

      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510)
      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632)
      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713)
      b = md5gg(b, c, d, a, x[i], 20, -373897302)
      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691)
      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083)
      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335)
      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848)
      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438)
      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690)
      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961)
      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501)
      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467)
      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784)
      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473)
      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734)

      a = md5hh(a, b, c, d, x[i + 5], 4, -378558)
      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463)
      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562)
      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556)
      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060)
      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353)
      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632)
      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640)
      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174)
      d = md5hh(d, a, b, c, x[i], 11, -358537222)
      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979)
      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189)
      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487)
      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835)
      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520)
      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651)

      a = md5ii(a, b, c, d, x[i], 6, -198630844)
      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415)
      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905)
      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055)
      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571)
      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606)
      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523)
      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799)
      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359)
      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744)
      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380)
      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649)
      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070)
      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379)
      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259)
      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551)

      a = safeAdd(a, olda)
      b = safeAdd(b, oldb)
      c = safeAdd(c, oldc)
      d = safeAdd(d, oldd)
    }
    return [a, b, c, d]
  }

  /*
  * Convert an array of little-endian words to a string
  */
  function binl2rstr (input) {
    var i
    var output = ''
    var length32 = input.length * 32
    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF)
    }
    return output
  }

  /*
  * Convert a raw string to an array of little-endian words
  * Characters >255 have their high-byte silently ignored.
  */
  function rstr2binl (input) {
    var i
    var output = []
    output[(input.length >> 2) - 1] = undefined
    for (i = 0; i < output.length; i += 1) {
      output[i] = 0
    }
    var length8 = input.length * 8
    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32)
    }
    return output
  }

  /*
  * Calculate the MD5 of a raw string
  */
  function rstrMD5 (s) {
    return binl2rstr(binlMD5(rstr2binl(s), s.length * 8))
  }

  /*
  * Calculate the HMAC-MD5, of a key and some data (raw strings)
  */
  function rstrHMACMD5 (key, data) {
    var i
    var bkey = rstr2binl(key)
    var ipad = []
    var opad = []
    var hash
    ipad[15] = opad[15] = undefined
    if (bkey.length > 16) {
      bkey = binlMD5(bkey, key.length * 8)
    }
    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636
      opad[i] = bkey[i] ^ 0x5C5C5C5C
    }
    hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8)
    return binl2rstr(binlMD5(opad.concat(hash), 512 + 128))
  }

  /*
  * Convert a raw string to a hex string
  */
  function rstr2hex (input) {
    var hexTab = '0123456789abcdef'
    var output = ''
    var x
    var i
    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i)
      output += hexTab.charAt((x >>> 4) & 0x0F) +
      hexTab.charAt(x & 0x0F)
    }
    return output
  }

  /*
  * Encode a string as utf-8
  */
  function str2rstrUTF8 (input) {
    return unescape(encodeURIComponent(input))
  }

  /*
  * Take string arguments and return either raw or hex encoded strings
  */
  function rawMD5 (s) {
    return rstrMD5(str2rstrUTF8(s))
  }
  function hexMD5 (s) {
    return rstr2hex(rawMD5(s))
  }
  function rawHMACMD5 (k, d) {
    return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d))
  }
  function hexHMACMD5 (k, d) {
    return rstr2hex(rawHMACMD5(k, d))
  }

  function md5 (string, key, raw) {
    if (!key) {
      if (!raw) {
        return hexMD5(string)
      }
      return rawMD5(string)
    }
    if (!raw) {
      return hexHMACMD5(key, string)
    }
    return rawHMACMD5(key, string)
  }

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return md5
    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else if (typeof module === 'object' && module.exports) {
    module.exports = md5
  } else {
    $.md5 = md5
  }
}(this))


/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _env = __webpack_require__(7);

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	props: ['pageName', 'backAction', "backType", "goback", "clickBtn", "clickAction", "opa"],
	computed: {
		getBackClass: function getBackClass() {
			var back = {
				back: true,
				backWhite: false
			};
			if (this.opa == false) {
				back['back'] = false;
				back['backWhite'] = true;
			}
			return back;
		},
		getHeader: function getHeader() {
			if (localStorage.android == "true") {
				return false;
			} else if (localStorage.ios == "true") {
				return false;
			} else {
				return true;
			}
		}

	},
	methods: {
		aBtn: function aBtn() {
			if (this.backAction != undefined) {
				this.backAction();
			} else {
				var _back = this.$route.query.backUrl;
				console.log(_back);
				if (_back) {
					this.$route.router.go({
						path: _back
					});
				} else {
					history.go(-1);
				}
			}
		}
	}

}; //
//
//
//
//
//
//
//
//
//

/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {'use strict';

var _env = __webpack_require__(7);

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var md5 = __webpack_require__(64);
var getCheck = {
	checkEmail: function checkEmail(val) {
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (filter.test(val)) {
			return true;
		} else {
			return false;
		}
	},
	checkPhone: function checkPhone(val) {
		var filter = /^[1][34578][0-9]{9}$/;

		if (filter.test(val)) {
			return true;
		} else {
			return false;
		}
	},
	checkPassword: function checkPassword(val) {
		var filter = /^[0-9A-Za-z]{6,20}$/;

		if (filter.test(val)) {
			return true;
		} else {
			return false;
		}
	},
	checkIOS: function checkIOS() {
		//判断是否IOS或者安卓
		var u = navigator.userAgent;
		//var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
		if (isiOS) {
			return true;
		} else {
			return false;
		}
	},
	checkWechat: function checkWechat() {
		var ua = window.navigator.userAgent.toLowerCase();
		return ua.match(/MicroMessenger/i) == 'micromessenger';
	},
	checkLogin: function checkLogin() {
		//判断是否login
		var strStoreDate = window.localStorage ? localStorage.getItem("memberId") : Cookie.read("memberId");
		if (strStoreDate) {
			if (strStoreDate.split(",").length != 1) {
				var local_ip = strStoreDate ? strStoreDate.split(",")[0] : "";
				var local_mi = strStoreDate ? strStoreDate.split(",")[1] : "";
				return local_ip == myAjax();
			} else {
				return true;
			}
		} else {
			return false;
		}
	}
};
/**
 *   获取全球唯一标识符
 * 2016-11-04 15:51:39
 */
var getRandom = function getRandom() {
	var guid = "{";
	for (var i = 1; i <= 32; i++) {
		var n = Math.floor(Math.random() * 16.0).toString(16);
		guid += n;
		if (i == 8 || i == 12 || i == 16 || i == 20) guid += "-";
	}
	guid += "}";
	return guid;
};
/**
 *   对Date的扩展，将 Date 转化为指定格式的String 
 *   月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
 *   年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *   例子：
 *   (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 *   (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
 */
var fmtDate = function fmtDate(date, fmt) {
	//author: meizz 
	var o = {
		"M+": date.getMonth() + 1, //月份 
		"d+": date.getDate(), //日 
		"h+": date.getHours(), //小时 
		"m+": date.getMinutes(), //分 
		"s+": date.getSeconds(), //秒 
		"q+": Math.floor((date.getMonth() + 3) / 3), //季度 
		"S": date.getMilliseconds() //毫秒 
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
	}return fmt;
};

/**
 * 由于moment库加进来太大了，自定义了formnow函数，待完善阶段
 */
var MillisecondToDate = function MillisecondToDate(msd) {
	var time = parseFloat(msd) / 1000;
	var str = "";
	if (null != time && "" != time) {

		if (time > 60 && time < 3600) {
			str = parseInt(time / 60.0) + " 分钟前";
		} else if (time >= 3600 && time < 86400) {
			str = parseInt(time / 3600.0) + " 小时前";
		} else if (time >= 86400 && time < 86400 * 30) {
			str = parseInt(time / 86400.0) + " 天前";
		} else if (time >= 86400 * 30 && time < 86400 * 365) {
			str = parseInt(time / (86400.0 * 30)) + " 个月前";
		} else if (time >= 86400 * 365) {
			str = parseInt(time / (86400.0 * 365)) + " 年前";
		} else {
			str = parseInt(time) + " 秒前";
		}
	}
	return str;
};
var sendCode = function sendCode(o) {
	var btncfg = {
		dfwait: 20, //倒计时时间   2个都要改
		wait: 20 //倒计时时间
	};
	var _this = {
		begin: function begin() {
			if (btncfg.wait == -1) {
				$(o).removeAttr("disabled");
				$(o).removeClass("btn-gray");
				$(o).text("获取验证码");
				btncfg.wait = btncfg.dfwait;
			} else {
				$(o).addClass("btn-gray");
				$(o).attr("disabled", "disabled");
				$(o).text("重发(" + btncfg.wait + ")");
				btncfg.wait--;
				setTimeout(function () {
					_this.begin();
				}, 1000);
			}
		}
	};
	return _this.begin();
};

/*
 *作者:panwenhua 
 *时间:2016-11-01 17:11:20
 * 
 * */
var myModal = function myModal() {
	var defaults = {
		modal_id: null,
		overlay: 0.5,
		closeButton: null,
		type: 1, //1为中间弹出 2为下往上弹出 3从右到左
		closefuntion: function closefuntion() {}
	};
	var tipconfig = { //生成的弹窗
		modal_tip: '温馨提示', //温馨提示
		modal_cnt: null, //昵称已经存在
		true_button: null, //确定
		cancel_button: null, //取消
		true_function: function true_function() {},
		cancel_function: function cancel_function() {}
	};
	var F = {
		overlay: function overlay() {
			//添加半透明overlay
			var overlay = $("<div id='overlay_pan'></div>");
			if ($("#overlay_pan").length == 0) {
				$("body").append(overlay);
				$("#overlay_pan").css({
					"position": "fixed",
					"top": "0px",
					"left": "0px",
					"height": "100%",
					"width": "100%",
					"background": "#000",
					"z-index": "999",
					"display": "none"
				});
			}
		},
		flashMod: function flashMod(str) {
			var fshmod = $("<div style='' class='no_search yc flash' id='fshmod'>" + str + "</div>");
			if ($("#fshmod").length == 0) {
				$("body").append(fshmod);
			} else {
				$("#fshmod").text(str);
			}
		},
		tipMod: function tipMod(str) {
			//根据str参数拼接弹窗 
			if (str.cancel_button == null) {
				//如果没有 取消按钮   就不拼接 取消按钮的html
				var tipmod = $('<div class="wd-modal" id="tip_mod"><div class="wd-modal-header"><div class="wd-modal-ti">' + str.modal_tip + '</div><div class="wd-modal-content"><span id="wd-modal-result">' + str.modal_cnt + '</span></div></div><div class="wd-modal-footer"><a class="wd-modal-button doubi_btn" id="true-button">' + str.true_button + '</a></div></div>');
			} else {
				//否则拼接出来
				var tipmod = $('<div class="wd-modal" id="tip_mod"><div class="wd-modal-header"><div class="wd-modal-ti">' + str.modal_tip + '</div><div class="wd-modal-content"><span id="wd-modal-result">' + str.modal_cnt + '</span></div></div><div class="wd-modal-footer"><a id="cancel-button" class="wd-modal-button modal_close">' + str.cancel_button + '</a><a class="wd-modal-button" id="true-button">' + str.true_button + '</a></div></div>');
			}
			if ($("#tip_mod").length == 0) {
				//以下代码防止多弹窗重叠。
				$("body").append(tipmod);
			} else {
				$("#tip_mod").remove();
				$("body").append(tipmod);
			}
		}
	};
	var Modal = {
		showModal: function showModal(options) {
			var _this = this;
			F.overlay();
			options = $.extend(defaults, options);
			var o = options;
			$(this).click(function (e) {
				var modal_id = $(this).attr("href");
				$("#overlay_pan").click(function () {
					_this.closeModal(modal_id);
				});
				$(o.closeButton).click(function () {
					_this.closeModal(modal_id);
					o.closefuntion();
				});
				$("#overlay_pan").css({
					"display": "block",
					"opacity": o.overlay
				});
				$(modal_id).css({
					"position": "fixed",
					"display": "block",
					"z-index": 11000,
					"bottom": o.bottom + "px",
					"top": o.top + "px"
				});
				$(modal_id).addClass("animated zoomIn");
				//取消默认动作
				e.preventDefault();
			});
		},
		openModal: function openModal(options) {
			var _this = this;
			options = $.extend(defaults, options);
			var o = options;
			if (o.type == 1) {
				(function () {
					F.overlay();
					var modal_id = o.modal_id;
					$("#overlay_pan").click(function () {
						_this.closeModal(modal_id);
						return false;
					});
					$(o.closeButton).click(function () {
						_this.closeModal(modal_id);
						o.closefuntion();
						return false;
					});
					$("#overlay_pan").css({
						"display": "block",
						"opacity": o.overlay
					});
					$(modal_id).css({
						"position": "fixed",
						"display": "block",
						"z-index": 11000,
						"bottom": o.bottom + "px",
						"top": o.top + "px"
					});
					$(modal_id).addClass("animated zoomIn");
				})();
			} else if (o.type == 2) {
				//由下往上
				F.overlay();
				var modal_id = o.modal_id;
				$("#overlay_pan").click(function () {
					_this.closeModal(modal_id);
					return false;
				});
				$(o.closeButton).click(function () {
					_this.closeModal(modal_id);
					o.closefuntion();
					return false;
				});

				var $list = $(modal_id);
				$list.css("display", '');
				$list.css("bottom", -$list.height());

				$("#overlay_pan").css({
					"display": "block",
					"opacity": o.overlay
				});
				$(modal_id).css({
					"position": "fixed",
					"display": "block",
					"z-index": 11000,
					"bottom": o.bottom + "px",
					"top": o.top + "px"
				});
				$(modal_id).addClass("animated fadeInUp");
			} else if (o.type == 3) {
				//由you往zuo
				var modal_id = o.modal_id;
				$("#overlay_pan").click(function () {
					_this.closeModal(modal_id);
					return false;
				});
				$(o.closeButton).click(function () {
					_this.closeModal(modal_id);
					o.closefuntion();
					return false;
				});

				var $list = $(modal_id);
				$list.css("display", '');
				$list.css("right", $list.width());

				$("#overlay_pan").css({
					"display": "block",
					"opacity": o.overlay
				});
				$(modal_id).css({
					"position": "fixed",
					"display": "block",
					"z-index": 11000,
					"bottom": o.bottom + "px",
					"top": o.top + "px"
				});
				$(modal_id).addClass("animated fadeInRightBig");
			}
		},
		tipModal: function tipModal(options) {
			var _this = this;
			F.overlay(); //添加半透明蒙层
			var o = $.extend(tipconfig, options); //获取插件配置
			F.tipMod(o); //根据配置 渲染弹窗dom
			var modal_id = '#tip_mod'; //获取渲染的dom 的  id
			$("#overlay_pan").click(function () {
				//点击半透明     触发事件
				_this.closeModal(modal_id); //关闭弹窗
				o.cancel_function("overlay"); //关闭按钮的事件
			});
			$('#true-button').click(function () {
				// 绑定确认按钮
				_this.closeModal(modal_id); //关闭弹窗
				o.true_function(); //触发确认按钮的事件
			});
			$('#cancel-button').click(function () {
				//绑定取消按钮
				_this.closeModal(modal_id); //关闭弹窗
				o.cancel_function("cancel"); //关闭按钮的事件
			});
			$("#overlay_pan").css({ //设置 半透明 overlay的  透明度 并且显示
				"display": "block",
				"opacity": 0.5
			});
			$(modal_id).css({ //显示弹窗
				"position": "fixed",
				"display": "block",
				"z-index": 11000
			});
			$(modal_id).addClass("animated zoomIn"); //添加动画
		},
		closeModal: function closeModal(modal_id) {
			$("#overlay_pan").css({ //隐藏overlay
				"display": "none"
			});
			$(modal_id).css({ //隐藏弹窗
				"display": "none"
			});
		},
		flashInto: function flashInto(str) {
			var _this = this;
			F.flashMod(str);
			$("#fshmod").addClass('yc');
			$("#fshmod").css({
				"position": "fixed",
				"display": "block",
				"z-index": 11000
			});
			$('#fshmod').addClass("animated zoomIn");
			setTimeout(function () {
				_this.flashOut();
			}, 3000);
		},
		flashOut: function flashOut() {
			$("#fshmod").css({
				"display": "none"
			});
		}
	};
	return Modal;
};
/**
 * 自定义ajax
 */

var myAjax = function myAjax(opts) {
	var O = {
		geturlip: function geturlip() {
			var url_ip = void 0;
			if (_env2.default == 'production' || _env2.default == 'pre') {
				url_ip = "https://api.5dou.cn/";
			} else if (_env2.default == 'test' || _env2.default == 'development') {
				url_ip = "https://apitest.5dou.cn/";
			}
			return url_ip;
		},
		getvalue: function getvalue(nativeData, keystr) {
			var cfg = {};
			var iosStr = nativeData && nativeData.split(',');
			if (iosStr) {
				for (var x in iosStr) {
					cfg[iosStr[x].split(':')[0]] = iosStr[x].split(':')[1];
				}
			}
			return cfg[keystr] ? cfg[keystr] : "";
		},
		getaicc: function getaicc() {
			var native_data = localStorage.getItem("native_data");
			var local_aicc = this.getvalue(native_data, "aicc");
			return local_aicc ? local_aicc : "WUDOU_H5";
		},
		getaicp: function getaicp() {
			var native_data = localStorage.getItem("native_data");
			var local_aicp = this.getvalue(native_data, "aicp");
			return local_aicp ? local_aicp : "E2E4882D93CA9347CD02A0C068B77632";
		},
		getbimi: function getbimi() {
			var native_data = localStorage.getItem("native_data");
			var local_bimi = this.getvalue(native_data, "bimi");
			if (local_bimi) {
				return local_bimi;
			} else {
				var strStoreDate = window.localStorage ? localStorage.getItem("memberId") : Cookie.read("memberId");
				if (strStoreDate) {
					if (strStoreDate && strStoreDate.split(",").length != 1) {
						var local_ip = strStoreDate ? strStoreDate.split(",")[0] : "";
						var local_mi = strStoreDate ? strStoreDate.split(",")[1] : "";
						return local_ip == this.geturlip() ? local_mi : "";
					} else {
						return strStoreDate;
					}
				} else {
					return "";
				}
			}
		},
		getbict: function getbict() {
			var native_data = localStorage.getItem("native_data");
			var local_bict = this.getvalue(native_data, "bict");
			return local_bict ? local_bict : "H5";
		},
		getbidn: function getbidn() {
			var native_data = localStorage.getItem("native_data");
			var local_bidn = this.getvalue(native_data, "bidn");
			return local_bidn ? local_bidn : "H5";
		},
		getbidv: function getbidv() {
			var bidv = "";
			var u = navigator.userAgent;
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
			if (isAndroid) {
				bidv = 'Android';
			} else if (isiOS) {
				bidv = 'IOS';
			} else {
				bidv = 'PC';
			}
			return bidv;
		},
		getsid: function getsid() {
			var native_data = localStorage.getItem("native_data");
			var local_sid = this.getvalue(native_data, "sid");
			return local_sid ? local_sid : "H5";
		},
		gettimestamp: function gettimestamp() {
			return Date.parse(new Date()) / 1000;
		},
		getbidm: function getbidm() {
			var native_data = localStorage.getItem("native_data");
			var local_bidm = this.getvalue(native_data, "bidm");
			return local_bidm;
		},
		getbiov: function getbiov() {
			var native_data = localStorage.getItem("native_data");
			var local_biov = this.getvalue(native_data, "biov");
			return local_biov;
		},
		getbiav: function getbiav() {
			var native_data = localStorage.getItem("native_data");
			var local_biav = this.getvalue(native_data, "biav");
			return local_biav;
		},
		getlogin: function getlogin() {
			//这里写获取登录状态的js
			return "0";
		},
		getsign: function getsign(keyArry, datastr) {
			keyArry.sort();
			var keyStr1 = '';
			var sign = '';
			for (var key in keyArry) {
				keyStr1 += datastr[keyArry[key]];
			}
			sign = md5(keyStr1).toUpperCase();
			if (localStorage.android == "true" || localStorage.ios == "true") {
				return md5(this.getaicc() + sign).toUpperCase();
			} else {
				return sign;
			}
		},
		//获取代码信息
		getcodeme: function getcodeme(jsonobj) {
			var code = jsonobj.result.code;
			var mean = '';
			if (jsonobj.result.msg) {
				mean = jsonobj.result.msg;
			} else {
				mean = '';
			}
			return mean;
		},
		//获取code
		getcode: function getcode(jsonobj) {
			var code = jsonobj.result.code;
			return code;
		}
	};
	var defaults = {
		modaltype: 1, //1为闪现框,2为自定义框
		async: true,
		ip: O.geturlip(),
		url: null,
		data: null,
		validate: function validate() {
			return true;
		},
		success: function success() {},
		error: function error() {
			myModal().flashInto("请检查网络");
		}
	};
	var option = $.extend(defaults, opts);
	var datastr;
	var keyArry;
	if (O.getbimi()) {
		//1为登录，0为未登录
		datastr = {
			"ai.cc": O.getaicc(),
			"bi.mi": O.getbimi(),
			"bi.ct": O.getbict(),
			"bi.dv": O.getbidv(),
			"bi.dm": O.getbidm(),
			"bi.av": O.getbiav(),
			"bi.ov": O.getbiov(),
			"bi.dn": O.getbidn()
		};
		keyArry = ["ai.cc", "bi.mi", "bi.ct", "bi.dv", "bi.dm", "bi.av", "bi.ov", "bi.dn"];
	} else {
		datastr = {
			"ai.cc": O.getaicc(),
			"bi.ct": O.getbict(),
			"bi.dv": O.getbidv(),
			"bi.dm": O.getbidm(),
			"bi.av": O.getbiav(),
			"bi.ov": O.getbiov(),
			"bi.dn": O.getbidn()
		};
		keyArry = ["ai.cc", "bi.ct", "bi.dv", "bi.dm", "bi.av", "bi.ov", "bi.dn"];
	}
	var beforeCreate = {
		loadajax: function loadajax() {
			if (!opts) {
				return option.ip;
			}
			if (!option.validate()) {
				return false;
			};
			for (var x in option.data) {
				if (option.data[x] && typeof option.data[x] == 'string') {
					if (option.data[x].substring(0, 1) == '.' || option.data[x].substring(0, 1) == '#') {
						datastr[x] = $(option.data[x]).val();
						keyArry.push(x);
					} else {
						datastr[x] = option.data[x];
						keyArry.push(x);
					}
				} else if (typeof option.data[x] == 'number') {
					datastr[x] = option.data[x];
					keyArry.push(x);
				}
			}
			$.ajax({
				type: 'POST',
				dataType: 'json',
				async: option.async,
				url: option.ip + option.url,
				data: datastr,
				headers: {
					'sid': O.getsid(),
					'timestamp': O.gettimestamp(),
					'aicp': O.getaicp(),
					'ai.cp': O.getaicp(),
					'sign': O.getsign(keyArry, datastr)
				},
				success: function success(rsp) {
					if (option.modaltype == 1) {
						if (O.getcode(rsp) == "7000") {
							myModal().flashInto(O.getcodeme(rsp));
							window.location.href = "/#!/login";
							return false;
						}
						if (O.getcodeme(rsp) != '') {
							myModal().flashInto(O.getcodeme(rsp));
						}
					}
					/* else if(option.modaltype == 2) {
     						if(O.getcode(rsp) == "7000") {
     							window.location.href = "/#!/login";
     							return false;
     						}
     					}*/
					option.success(rsp);
				},
				error: function error(errinfo) {
					option.error(errinfo);
				}
			});
		}
	};
	return beforeCreate.loadajax();
};

/*
 *作者:panwenhua 
 *时间:2016-07-01 11:11:20
 * 
 *   裁剪图片
 * $(id).myImage({
 * that:this, //当前图片对象
 * cutWid:'', //裁剪尺寸
 * quality:0.6, //图片质量0~1
 * limitWid:400, //最小宽度
 * success:function (data) {
 * do something... 
 * */
var myImage = function myImage(obj) {
	var myImage = {
		uploadImage: function uploadImage(obj) {
			var file = obj.that[0].files[0];
			var URL = window.URL || window.webkitURL;
			var blob = URL.createObjectURL(file);
			var base64;
			var Orientation = null;
			var img = new Image();
			img.src = blob;
			var rFilter = /^(image\/jpeg|image\/png)$/i;
			if (!rFilter.test(file.type) && file.type != '') {
				alert("非图片格式！", 1000);
				return;
			}
			img.onload = function () {
				if (img.width < obj.limitWid) {
					alert('图片宽度不得小于' + obj.limitWid + 'px', 1000);
					return false;
				}
				var that = this;

				//生成比例
				var w,
				    scale,
				    h = that.height;
				if (obj.cutWid == '') {
					w = that.width;
				} else {
					w = obj.cutWid;
				}
				scale = w / h;
				h = w / scale;

				//生成canvas
				var canvas = document.createElement('canvas');
				var ctx = canvas.getContext('2d');
				$(canvas).attr({
					width: w,
					height: h
				});
				ctx.drawImage(that, 0, 0, w, h);
				base64 = canvas.toDataURL('image/jpeg', obj.quality || 0.8);

				var result = {
					base64: base64
				};
				//成功后的回调
				obj.success(result);
			};
		}
	};
	return myImage;
};

exports.getCheck = getCheck;
exports.fmtDate = fmtDate;
exports.MillisecondToDate = MillisecondToDate;
exports.myAjax = myAjax;
exports.sendCode = sendCode;
exports.myModal = myModal;
exports.myImage = myImage;
exports.getRandom = getRandom;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(60)))

/***/ },

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(69)

/* script */
__vue_exports__ = __webpack_require__(70)

/* template */
var __vue_template__ = __webpack_require__(68)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\panwenhua\\Documents\\HBuilderProject\\vue-CalendarListView\\src\\components\\calendar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7b3769f8"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b3769f8", __vue_options__)
  } else {
    hotAPI.reload("data-v-7b3769f8", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] calendar.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "calendar-list"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "calendar"
  }, _vm._l((_vm.dateArr), function(date) {
    return _c('div', {
      staticClass: "calendar-item"
    }, [_c('div', {
      staticClass: "calendar-header"
    }, [_c('span', [_vm._v(_vm._s(date.y) + "年" + _vm._s(date.m) + "月")])]), _vm._v(" "), _c('div', {
      staticClass: "calendar-body"
    }, [_c('ul', {
      staticClass: "days"
    }, _vm._l((date.days), function(day) {
      return _c('li', [(day.getMonth() + 1 != date.m) ? _c('div', [_c('span')]) : (_vm.isToday(day)) ? _c('div', {
        class: {
          today: _vm.isCurrentDay(day)
        },
        on: {
          "click": function($event) {
            _vm.clickAction(day)
          }
        }
      }, [_c('span', [_vm._v(_vm._s('今天'))]), _vm._v(" "), _c('i', [_vm._v(_vm._s(_vm.getNum(day)))])]) : _c('div', {
        class: {
          today: _vm.isCurrentDay(day)
        }
      }, [(day < new Date()) ? [_c('span', {
        staticClass: "disabled"
      }, [_vm._v(_vm._s(day.getDate()))])] : [_c('span', {
        on: {
          "click": function($event) {
            _vm.clickAction(day)
          }
        }
      }, [_vm._v(_vm._s(day.getDate()))]), _vm._v(" "), _c('i', {
        staticClass: "nums"
      }, [_vm._v(_vm._s(_vm.getNum(day)))])]], 2)])
    }))])])
  }))])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "week"
  }, [_c('li', {
    staticStyle: {
      "color": "#CCCCCC"
    }
  }, [_vm._v("日")]), _vm._v(" "), _c('li', [_vm._v("一")]), _vm._v(" "), _c('li', [_vm._v("二")]), _vm._v(" "), _c('li', [_vm._v("三")]), _vm._v(" "), _c('li', [_vm._v("四")]), _vm._v(" "), _c('li', [_vm._v("五")]), _vm._v(" "), _c('li', [_vm._v("六")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7b3769f8", module.exports)
  }
}

/***/ },

/***/ 69:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 70:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	data: function data() {
		return {
			currentDate: {
				currentDay: null,
				currentMonth: null,
				currentYear: null,
				currentWeek: null
			},
			dateArr: []
		};
	},

	props: ['aroud', 'clickAction', 'nums', 'selectDate'],
	computed: {},
	created: function created() {
		for (var x = 0; x < this.aroud; x++) {
			var days = this.calendarInit(this.currentDate.currentYear, this.currentDate.currentMonth);
			var timeObj = {
				y: this.currentDate.currentYear,
				m: this.currentDate.currentMonth,
				days: days
			};
			this.dateArr.push(timeObj);
		}
	},
	methods: {
		isCurrentDay: function isCurrentDay(day) {
			var d = this.selectDate;
			if (d != null) {
				return day.getFullYear() == d.getFullYear() && day.getMonth() == d.getMonth() && day.getDate() == d.getDate() ? true : false;
			} else {
				return day.getFullYear() == new Date().getFullYear() && day.getMonth() == new Date().getMonth() && day.getDate() == new Date().getDate() ? true : false;
			}
		},
		getNum: function getNum(date) {
			var lastDay = this.nums.length && this.nums[this.nums.length - 1].reTravelDate;
			var day = this.formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
			if (day > lastDay) {
				console.log(1);
				return '';
			}
			for (var x in this.nums) {
				if (this.nums[x].reTravelDate == day) {
					return '剩' + this.nums[x].availableAmount + '人';
				}
			}
		},
		isToday: function isToday(day) {
			return day.getFullYear() == new Date().getFullYear() && day.getMonth() == new Date().getMonth() && day.getDate() == new Date().getDate() ? true : false;
		},
		getDay: function getDay(date) {
			this.currentDate.currentDay = date.getDate();
			this.currentDate.currentYear = date.getFullYear();
			this.currentDate.currentMonth = date.getMonth() + 1;
			this.currentDate.currentWeek = date.getDay() + 1;
			if (this.currentDate.currentWeek == 0) {
				this.currentDate.currentWeek = 7;
			}
		},
		formatDate: function formatDate(year, month, day) {
			var y = year;
			var m = month;
			if (m < 10) m = "0" + m;
			var d = day;
			if (d < 10) d = "0" + d;
			return y + "-" + m + "-" + d;
		},
		calendarInit: function calendarInit(year, month) {
			var date, d;
			var days = [];
			if (year == null || month == null) {
				var _date = new Date();
				d = new Date(_date.getFullYear(), _date.getMonth() - 1, 1);
			} else {
				d = new Date(year, month - 1, 1);
			}
			d.setDate(42);
			date = new Date(d.getFullYear(), d.getMonth(), 1);
			this.getDay(date);
			for (var i = this.currentDate.currentWeek - 1; i >= 0; i--) {
				var d = new Date(this.currentDate.currentYear, this.currentDate.currentMonth - 1, this.currentDate.currentDay);
				d.setDate(d.getDate() - i);
				days.push(d);
			}
			for (var i = 1; i <= 42 - this.currentDate.currentWeek; i++) {
				var d = new Date(this.currentDate.currentYear, this.currentDate.currentMonth - 1, this.currentDate.currentDay);
				d.setDate(d.getDate() + i);
				days.push(d);
			}
			return days;
		}
	}

};

/***/ },

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/complete.png?v=a4a2c3a3";

/***/ },

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('nv-head', {
    attrs: {
      "page-name": _vm.headTit.tab1,
      "back-type": _vm.headTit.back
    }
  }), _vm._v(" "), _c('section', [_c('ul', {
    staticClass: "historyorder"
  }, _vm._l((_vm.items), function(item) {
    return _c('li', [_c('h4', [_vm._v(_vm._s(item.travelProjectName))]), _vm._v(" "), _c('p', {
      staticClass: "xinxi"
    }, [_vm._v("出行日期："), _c('span', [_vm._v(_vm._s(item.travelDate))])]), _vm._v(" "), _c('p', {
      staticClass: "xinxi"
    }, [_vm._v("出行人数："), _c('span', [_vm._v(_vm._s(item.personAmount))]), _vm._v("人")]), _vm._v(" "), _c('p', {
      class: {
        'sh-statu': item.state == '1', 'xinxi': item.state == '0'
      }
    }, [_vm._v("状态："), _c('span', [_vm._v(_vm._s(_vm._f("orderstate")(item.state)))])]), _vm._v(" "), _c('router-link', {
      staticClass: "more",
      attrs: {
        "to": {
          path: 'completedInfo',
          query: {
            travelCode: item.travelCode,
            orderNum: item.orderNum
          }
        }
      }
    }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm._f("linktext")(item.state)) + ">>\n\t\t\t\t")]), _vm._v(" "), _c('div', {
      class: [item.state == '0' ? 'all-statu' : 'hide']
    }, [_c('img', {
      attrs: {
        "src": __webpack_require__(78)
      }
    })])], 1)
  }))])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-c65cf638", module.exports)
  }
}

/***/ },

/***/ 93:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _$ = __webpack_require__(66);
exports.default = {
	data: function data() {
		return {
			headTit: {
				tab1: '历史订单',
				back: 'ok'
			},
			items: {}
		};
	},

	created: function created() {
		var me = this;
		_$.myAjax({
			modaltype: 2, //1为闪现框,2为自定义框
			url: 'api/travel/travelcard/travelOrderList.json',
			data: {
				'travelCode': 888888,
				'pageInfo.toPage': 0
			},
			success: function success(str) {
				if (str.result.code == "1000") {
					console.log(1);
					me.items = str.data;
				} else {}
			}
		});
	},
	methods: {},
	components: {
		"nvHead": __webpack_require__(61),
		"calendarEl": __webpack_require__(67)
	}
};

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaGlzdG9yeW9yZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9+Ly4wLjAuMUB3ZWJwYWNrLXplcHRvL2luZGV4LmpzPzQ2ZjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnZ1ZT85MjEzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci52dWU/YWQwZSoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnZ1ZT9hYmEzKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjYuMEBibHVlaW1wLW1kNS9qcy9tZDUuanM/Yzc0YSIsIndlYnBhY2s6Ly8vaGVhZGVyLnZ1ZT9iZDk5Iiwid2VicGFjazovLy8uL3NyYy9saWJzL3V0aWxzLmpzP2MzMTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FsZW5kYXIudnVlPzhjZGIqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhbGVuZGFyLnZ1ZT84NDc4KiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYWxlbmRhci52dWU/N2QzMCoiLCJ3ZWJwYWNrOi8vL2NhbGVuZGFyLnZ1ZT9mZTg0Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2NvbXBvbmVudHMvY29tcGxldGUucG5nIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9oaXN0b3J5b3JkZXIudnVlPzZlMWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2hpc3RvcnlvcmRlci52dWU/ZmJhYiIsIndlYnBhY2s6Ly8vaGlzdG9yeW9yZGVyLnZ1ZSJdLCJuYW1lcyI6WyJtZDUiLCJyZXF1aXJlIiwiZ2V0Q2hlY2siLCJjaGVja0VtYWlsIiwidmFsIiwiZmlsdGVyIiwidGVzdCIsImNoZWNrUGhvbmUiLCJjaGVja1Bhc3N3b3JkIiwiY2hlY2tJT1MiLCJ1IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaXNpT1MiLCJtYXRjaCIsImNoZWNrV2VjaGF0IiwidWEiLCJ3aW5kb3ciLCJ0b0xvd2VyQ2FzZSIsImNoZWNrTG9naW4iLCJzdHJTdG9yZURhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiQ29va2llIiwicmVhZCIsInNwbGl0IiwibGVuZ3RoIiwibG9jYWxfaXAiLCJsb2NhbF9taSIsIm15QWpheCIsImdldFJhbmRvbSIsImd1aWQiLCJpIiwibiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiZm10RGF0ZSIsImRhdGUiLCJmbXQiLCJvIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImdldE1pbGxpc2Vjb25kcyIsInJlcGxhY2UiLCJSZWdFeHAiLCIkMSIsImdldEZ1bGxZZWFyIiwic3Vic3RyIiwiayIsIk1pbGxpc2Vjb25kVG9EYXRlIiwibXNkIiwidGltZSIsInBhcnNlRmxvYXQiLCJzdHIiLCJwYXJzZUludCIsInNlbmRDb2RlIiwiYnRuY2ZnIiwiZGZ3YWl0Iiwid2FpdCIsIl90aGlzIiwiYmVnaW4iLCIkIiwicmVtb3ZlQXR0ciIsInJlbW92ZUNsYXNzIiwidGV4dCIsImFkZENsYXNzIiwiYXR0ciIsInNldFRpbWVvdXQiLCJteU1vZGFsIiwiZGVmYXVsdHMiLCJtb2RhbF9pZCIsIm92ZXJsYXkiLCJjbG9zZUJ1dHRvbiIsInR5cGUiLCJjbG9zZWZ1bnRpb24iLCJ0aXBjb25maWciLCJtb2RhbF90aXAiLCJtb2RhbF9jbnQiLCJ0cnVlX2J1dHRvbiIsImNhbmNlbF9idXR0b24iLCJ0cnVlX2Z1bmN0aW9uIiwiY2FuY2VsX2Z1bmN0aW9uIiwiRiIsImFwcGVuZCIsImNzcyIsImZsYXNoTW9kIiwiZnNobW9kIiwidGlwTW9kIiwidGlwbW9kIiwicmVtb3ZlIiwiTW9kYWwiLCJzaG93TW9kYWwiLCJvcHRpb25zIiwiZXh0ZW5kIiwiY2xpY2siLCJlIiwiY2xvc2VNb2RhbCIsImJvdHRvbSIsInRvcCIsInByZXZlbnREZWZhdWx0Iiwib3Blbk1vZGFsIiwiJGxpc3QiLCJoZWlnaHQiLCJ3aWR0aCIsInRpcE1vZGFsIiwiZmxhc2hJbnRvIiwiZmxhc2hPdXQiLCJvcHRzIiwiTyIsImdldHVybGlwIiwidXJsX2lwIiwiZ2V0dmFsdWUiLCJuYXRpdmVEYXRhIiwia2V5c3RyIiwiY2ZnIiwiaW9zU3RyIiwieCIsImdldGFpY2MiLCJuYXRpdmVfZGF0YSIsImxvY2FsX2FpY2MiLCJnZXRhaWNwIiwibG9jYWxfYWljcCIsImdldGJpbWkiLCJsb2NhbF9iaW1pIiwiZ2V0YmljdCIsImxvY2FsX2JpY3QiLCJnZXRiaWRuIiwibG9jYWxfYmlkbiIsImdldGJpZHYiLCJiaWR2IiwiaXNBbmRyb2lkIiwiaW5kZXhPZiIsImdldHNpZCIsImxvY2FsX3NpZCIsImdldHRpbWVzdGFtcCIsIkRhdGUiLCJwYXJzZSIsImdldGJpZG0iLCJsb2NhbF9iaWRtIiwiZ2V0YmlvdiIsImxvY2FsX2Jpb3YiLCJnZXRiaWF2IiwibG9jYWxfYmlhdiIsImdldGxvZ2luIiwiZ2V0c2lnbiIsImtleUFycnkiLCJkYXRhc3RyIiwic29ydCIsImtleVN0cjEiLCJzaWduIiwia2V5IiwidG9VcHBlckNhc2UiLCJhbmRyb2lkIiwiaW9zIiwiZ2V0Y29kZW1lIiwianNvbm9iaiIsImNvZGUiLCJyZXN1bHQiLCJtZWFuIiwibXNnIiwiZ2V0Y29kZSIsIm1vZGFsdHlwZSIsImFzeW5jIiwiaXAiLCJ1cmwiLCJkYXRhIiwidmFsaWRhdGUiLCJzdWNjZXNzIiwiZXJyb3IiLCJvcHRpb24iLCJiZWZvcmVDcmVhdGUiLCJsb2FkYWpheCIsInN1YnN0cmluZyIsInB1c2giLCJhamF4IiwiZGF0YVR5cGUiLCJoZWFkZXJzIiwicnNwIiwibG9jYXRpb24iLCJocmVmIiwiZXJyaW5mbyIsIm15SW1hZ2UiLCJvYmoiLCJ1cGxvYWRJbWFnZSIsImZpbGUiLCJ0aGF0IiwiZmlsZXMiLCJVUkwiLCJ3ZWJraXRVUkwiLCJibG9iIiwiY3JlYXRlT2JqZWN0VVJMIiwiYmFzZTY0IiwiT3JpZW50YXRpb24iLCJpbWciLCJJbWFnZSIsInNyYyIsInJGaWx0ZXIiLCJhbGVydCIsIm9ubG9hZCIsImxpbWl0V2lkIiwidyIsInNjYWxlIiwiaCIsImN1dFdpZCIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiLCJxdWFsaXR5IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0Esc0JBQWdIOztBQUVoSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELG1EQUFtRCxJQUFJO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQztBQUNELGlDQUFpQzs7QUFFakM7Ozs7Ozs7O0FDekNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEMsaUJBQWlCLDRHQUE0RztBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7O0FB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsYUFBYSxlQUFlOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLElBQUk7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsZUFBZTtBQUM3QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixFQUFFO0FBQ3JCLDJDQUEyQyw4Q0FBOEM7QUFDekY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWTs7QUFFdkI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsUTs7Ozs7OztBQy9pREQ7QUFDQTs7QUFFQTtBQUNBLHNCQUFnSDs7QUFFaEg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxtREFBbUQsSUFBSTtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7QUFDRCxpQ0FBaUM7O0FBRWpDOzs7Ozs7OztBQ3pDQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ2xDQSx5Qzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDM0NBLHlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3NCQSw2QkFDQTs7dUJBRUE7OztVQUdBO1VBRUE7QUFIQTtVQUtBO0FBTkE7QUFPQTs7NkJBQ0E7V0FDQTs7aUJBRUE7UUFDQTs7a0JBRUE7dUJBRUE7QUFIQTtrQ0FJQTttQ0FDQTtpQkFDQTtvQkFDQTtZQUNBO0FBRUE7QUFiQTtBQWNBO1VBR0E7O2dDQUVBO29DQUVBO0FBSEE7QUE5QkEsRSIsImZpbGUiOiIxLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzLy4yLjAuMC1iZXRhLjRAZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2xvYWRlci5qcz97XFxcIm9taXRcXFwiOjEsXFxcInJlbW92ZVxcXCI6dHJ1ZX0hdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi1jNjVjZjYzOCZzY29wZWQ9dHJ1ZSFweDJyZW0/cmVtVW5pdD02NSZyZW1QcmVjaXNpb249OCFzYXNzLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vaGlzdG9yeW9yZGVyLnZ1ZVwiKVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaGlzdG9yeW9yZGVyLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtYzY1Y2Y2MzghdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaGlzdG9yeW9yZGVyLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxwYW53ZW5odWFcXFxcRG9jdW1lbnRzXFxcXEhCdWlsZGVyUHJvamVjdFxcXFx2dWUtQ2FsZW5kYXJMaXN0Vmlld1xcXFxzcmNcXFxcdmlld3NcXFxcaGlzdG9yeW9yZGVyLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtYzY1Y2Y2MzhcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYzY1Y2Y2MzhcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYzY1Y2Y2MzhcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBoaXN0b3J5b3JkZXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvaGlzdG9yeW9yZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyogWmVwdG8gdjEuMS42IC0gemVwdG8gZXZlbnQgYWpheCBmb3JtIGllIC0gemVwdG9qcy5jb20vbGljZW5zZSAqL1xuXG52YXIgWmVwdG8gPSBtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVuZGVmaW5lZCwga2V5LCAkLCBjbGFzc0xpc3QsIGVtcHR5QXJyYXkgPSBbXSwgc2xpY2UgPSBlbXB0eUFycmF5LnNsaWNlLCBmaWx0ZXIgPSBlbXB0eUFycmF5LmZpbHRlcixcbiAgICBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudCxcbiAgICBlbGVtZW50RGlzcGxheSA9IHt9LCBjbGFzc0NhY2hlID0ge30sXG4gICAgY3NzTnVtYmVyID0geyAnY29sdW1uLWNvdW50JzogMSwgJ2NvbHVtbnMnOiAxLCAnZm9udC13ZWlnaHQnOiAxLCAnbGluZS1oZWlnaHQnOiAxLCdvcGFjaXR5JzogMSwgJ3otaW5kZXgnOiAxLCAnem9vbSc6IDEgfSxcbiAgICBmcmFnbWVudFJFID0gL15cXHMqPChcXHcrfCEpW14+XSo+LyxcbiAgICBzaW5nbGVUYWdSRSA9IC9ePChcXHcrKVxccypcXC8/Pig/OjxcXC9cXDE+fCkkLyxcbiAgICB0YWdFeHBhbmRlclJFID0gLzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW1xcdzpdKylbXj5dKilcXC8+L2lnLFxuICAgIHJvb3ROb2RlUkUgPSAvXig/OmJvZHl8aHRtbCkkL2ksXG4gICAgY2FwaXRhbFJFID0gLyhbQS1aXSkvZyxcblxuICAgIC8vIHNwZWNpYWwgYXR0cmlidXRlcyB0aGF0IHNob3VsZCBiZSBnZXQvc2V0IHZpYSBtZXRob2QgY2FsbHNcbiAgICBtZXRob2RBdHRyaWJ1dGVzID0gWyd2YWwnLCAnY3NzJywgJ2h0bWwnLCAndGV4dCcsICdkYXRhJywgJ3dpZHRoJywgJ2hlaWdodCcsICdvZmZzZXQnXSxcblxuICAgIGFkamFjZW5jeU9wZXJhdG9ycyA9IFsgJ2FmdGVyJywgJ3ByZXBlbmQnLCAnYmVmb3JlJywgJ2FwcGVuZCcgXSxcbiAgICB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyksXG4gICAgdGFibGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpLFxuICAgIGNvbnRhaW5lcnMgPSB7XG4gICAgICAndHInOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpLFxuICAgICAgJ3Rib2R5JzogdGFibGUsICd0aGVhZCc6IHRhYmxlLCAndGZvb3QnOiB0YWJsZSxcbiAgICAgICd0ZCc6IHRhYmxlUm93LCAndGgnOiB0YWJsZVJvdyxcbiAgICAgICcqJzogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB9LFxuICAgIHJlYWR5UkUgPSAvY29tcGxldGV8bG9hZGVkfGludGVyYWN0aXZlLyxcbiAgICBzaW1wbGVTZWxlY3RvclJFID0gL15bXFx3LV0qJC8sXG4gICAgY2xhc3MydHlwZSA9IHt9LFxuICAgIHRvU3RyaW5nID0gY2xhc3MydHlwZS50b1N0cmluZyxcbiAgICB6ZXB0byA9IHt9LFxuICAgIGNhbWVsaXplLCB1bmlxLFxuICAgIHRlbXBQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICBwcm9wTWFwID0ge1xuICAgICAgJ3RhYmluZGV4JzogJ3RhYkluZGV4JyxcbiAgICAgICdyZWFkb25seSc6ICdyZWFkT25seScsXG4gICAgICAnZm9yJzogJ2h0bWxGb3InLFxuICAgICAgJ2NsYXNzJzogJ2NsYXNzTmFtZScsXG4gICAgICAnbWF4bGVuZ3RoJzogJ21heExlbmd0aCcsXG4gICAgICAnY2VsbHNwYWNpbmcnOiAnY2VsbFNwYWNpbmcnLFxuICAgICAgJ2NlbGxwYWRkaW5nJzogJ2NlbGxQYWRkaW5nJyxcbiAgICAgICdyb3dzcGFuJzogJ3Jvd1NwYW4nLFxuICAgICAgJ2NvbHNwYW4nOiAnY29sU3BhbicsXG4gICAgICAndXNlbWFwJzogJ3VzZU1hcCcsXG4gICAgICAnZnJhbWVib3JkZXInOiAnZnJhbWVCb3JkZXInLFxuICAgICAgJ2NvbnRlbnRlZGl0YWJsZSc6ICdjb250ZW50RWRpdGFibGUnXG4gICAgfSxcbiAgICBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fFxuICAgICAgZnVuY3Rpb24ob2JqZWN0KXsgcmV0dXJuIG9iamVjdCBpbnN0YW5jZW9mIEFycmF5IH1cblxuICB6ZXB0by5tYXRjaGVzID0gZnVuY3Rpb24oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBpZiAoIXNlbGVjdG9yIHx8ICFlbGVtZW50IHx8IGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHJldHVybiBmYWxzZVxuICAgIHZhciBtYXRjaGVzU2VsZWN0b3IgPSBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlbGVtZW50Lm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm9NYXRjaGVzU2VsZWN0b3IgfHwgZWxlbWVudC5tYXRjaGVzU2VsZWN0b3JcbiAgICBpZiAobWF0Y2hlc1NlbGVjdG9yKSByZXR1cm4gbWF0Y2hlc1NlbGVjdG9yLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpXG4gICAgLy8gZmFsbCBiYWNrIHRvIHBlcmZvcm1pbmcgYSBzZWxlY3RvcjpcbiAgICB2YXIgbWF0Y2gsIHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZSwgdGVtcCA9ICFwYXJlbnRcbiAgICBpZiAodGVtcCkgKHBhcmVudCA9IHRlbXBQYXJlbnQpLmFwcGVuZENoaWxkKGVsZW1lbnQpXG4gICAgbWF0Y2ggPSB+emVwdG8ucXNhKHBhcmVudCwgc2VsZWN0b3IpLmluZGV4T2YoZWxlbWVudClcbiAgICB0ZW1wICYmIHRlbXBQYXJlbnQucmVtb3ZlQ2hpbGQoZWxlbWVudClcbiAgICByZXR1cm4gbWF0Y2hcbiAgfVxuXG4gIGZ1bmN0aW9uIHR5cGUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PSBudWxsID8gU3RyaW5nKG9iaikgOlxuICAgICAgY2xhc3MydHlwZVt0b1N0cmluZy5jYWxsKG9iaildIHx8IFwib2JqZWN0XCJcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHR5cGUodmFsdWUpID09IFwiZnVuY3Rpb25cIiB9XG4gIGZ1bmN0aW9uIGlzV2luZG93KG9iaikgICAgIHsgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iaiA9PSBvYmoud2luZG93IH1cbiAgZnVuY3Rpb24gaXNEb2N1bWVudChvYmopICAgeyByZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqLm5vZGVUeXBlID09IG9iai5ET0NVTUVOVF9OT0RFIH1cbiAgZnVuY3Rpb24gaXNPYmplY3Qob2JqKSAgICAgeyByZXR1cm4gdHlwZShvYmopID09IFwib2JqZWN0XCIgfVxuICBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBpc09iamVjdChvYmopICYmICFpc1dpbmRvdyhvYmopICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopID09IE9iamVjdC5wcm90b3R5cGVcbiAgfVxuICBmdW5jdGlvbiBsaWtlQXJyYXkob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqLmxlbmd0aCA9PSAnbnVtYmVyJyB9XG5cbiAgZnVuY3Rpb24gY29tcGFjdChhcnJheSkgeyByZXR1cm4gZmlsdGVyLmNhbGwoYXJyYXksIGZ1bmN0aW9uKGl0ZW0peyByZXR1cm4gaXRlbSAhPSBudWxsIH0pIH1cbiAgZnVuY3Rpb24gZmxhdHRlbihhcnJheSkgeyByZXR1cm4gYXJyYXkubGVuZ3RoID4gMCA/ICQuZm4uY29uY2F0LmFwcGx5KFtdLCBhcnJheSkgOiBhcnJheSB9XG4gIGNhbWVsaXplID0gZnVuY3Rpb24oc3RyKXsgcmV0dXJuIHN0ci5yZXBsYWNlKC8tKyguKT8vZywgZnVuY3Rpb24obWF0Y2gsIGNocil7IHJldHVybiBjaHIgPyBjaHIudG9VcHBlckNhc2UoKSA6ICcnIH0pIH1cbiAgZnVuY3Rpb24gZGFzaGVyaXplKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvOjovZywgJy8nKVxuICAgICAgICAgICAucmVwbGFjZSgvKFtBLVpdKykoW0EtWl1bYS16XSkvZywgJyQxXyQyJylcbiAgICAgICAgICAgLnJlcGxhY2UoLyhbYS16XFxkXSkoW0EtWl0pL2csICckMV8kMicpXG4gICAgICAgICAgIC5yZXBsYWNlKC9fL2csICctJylcbiAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgfVxuICB1bmlxID0gZnVuY3Rpb24oYXJyYXkpeyByZXR1cm4gZmlsdGVyLmNhbGwoYXJyYXksIGZ1bmN0aW9uKGl0ZW0sIGlkeCl7IHJldHVybiBhcnJheS5pbmRleE9mKGl0ZW0pID09IGlkeCB9KSB9XG5cbiAgZnVuY3Rpb24gY2xhc3NSRShuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUgaW4gY2xhc3NDYWNoZSA/XG4gICAgICBjbGFzc0NhY2hlW25hbWVdIDogKGNsYXNzQ2FjaGVbbmFtZV0gPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgbmFtZSArICcoXFxcXHN8JCknKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG1heWJlQWRkUHgobmFtZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PSBcIm51bWJlclwiICYmICFjc3NOdW1iZXJbZGFzaGVyaXplKG5hbWUpXSkgPyB2YWx1ZSArIFwicHhcIiA6IHZhbHVlXG4gIH1cblxuICBmdW5jdGlvbiBkZWZhdWx0RGlzcGxheShub2RlTmFtZSkge1xuICAgIHZhciBlbGVtZW50LCBkaXNwbGF5XG4gICAgaWYgKCFlbGVtZW50RGlzcGxheVtub2RlTmFtZV0pIHtcbiAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVOYW1lKVxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgICAgZGlzcGxheSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgJycpLmdldFByb3BlcnR5VmFsdWUoXCJkaXNwbGF5XCIpXG4gICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudClcbiAgICAgIGRpc3BsYXkgPT0gXCJub25lXCIgJiYgKGRpc3BsYXkgPSBcImJsb2NrXCIpXG4gICAgICBlbGVtZW50RGlzcGxheVtub2RlTmFtZV0gPSBkaXNwbGF5XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50RGlzcGxheVtub2RlTmFtZV1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gJ2NoaWxkcmVuJyBpbiBlbGVtZW50ID9cbiAgICAgIHNsaWNlLmNhbGwoZWxlbWVudC5jaGlsZHJlbikgOlxuICAgICAgJC5tYXAoZWxlbWVudC5jaGlsZE5vZGVzLCBmdW5jdGlvbihub2RlKXsgaWYgKG5vZGUubm9kZVR5cGUgPT0gMSkgcmV0dXJuIG5vZGUgfSlcbiAgfVxuXG4gIC8vIGAkLnplcHRvLmZyYWdtZW50YCB0YWtlcyBhIGh0bWwgc3RyaW5nIGFuZCBhbiBvcHRpb25hbCB0YWcgbmFtZVxuICAvLyB0byBnZW5lcmF0ZSBET00gbm9kZXMgbm9kZXMgZnJvbSB0aGUgZ2l2ZW4gaHRtbCBzdHJpbmcuXG4gIC8vIFRoZSBnZW5lcmF0ZWQgRE9NIG5vZGVzIGFyZSByZXR1cm5lZCBhcyBhbiBhcnJheS5cbiAgLy8gVGhpcyBmdW5jdGlvbiBjYW4gYmUgb3ZlcnJpZGVuIGluIHBsdWdpbnMgZm9yIGV4YW1wbGUgdG8gbWFrZVxuICAvLyBpdCBjb21wYXRpYmxlIHdpdGggYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IHRoZSBET00gZnVsbHkuXG4gIHplcHRvLmZyYWdtZW50ID0gZnVuY3Rpb24oaHRtbCwgbmFtZSwgcHJvcGVydGllcykge1xuICAgIHZhciBkb20sIG5vZGVzLCBjb250YWluZXJcblxuICAgIC8vIEEgc3BlY2lhbCBjYXNlIG9wdGltaXphdGlvbiBmb3IgYSBzaW5nbGUgdGFnXG4gICAgaWYgKHNpbmdsZVRhZ1JFLnRlc3QoaHRtbCkpIGRvbSA9ICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChSZWdFeHAuJDEpKVxuXG4gICAgaWYgKCFkb20pIHtcbiAgICAgIGlmIChodG1sLnJlcGxhY2UpIGh0bWwgPSBodG1sLnJlcGxhY2UodGFnRXhwYW5kZXJSRSwgXCI8JDE+PC8kMj5cIilcbiAgICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpIG5hbWUgPSBmcmFnbWVudFJFLnRlc3QoaHRtbCkgJiYgUmVnRXhwLiQxXG4gICAgICBpZiAoIShuYW1lIGluIGNvbnRhaW5lcnMpKSBuYW1lID0gJyonXG5cbiAgICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lcnNbbmFtZV1cbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJyArIGh0bWxcbiAgICAgIGRvbSA9ICQuZWFjaChzbGljZS5jYWxsKGNvbnRhaW5lci5jaGlsZE5vZGVzKSwgZnVuY3Rpb24oKXtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChpc1BsYWluT2JqZWN0KHByb3BlcnRpZXMpKSB7XG4gICAgICBub2RlcyA9ICQoZG9tKVxuICAgICAgJC5lYWNoKHByb3BlcnRpZXMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKG1ldGhvZEF0dHJpYnV0ZXMuaW5kZXhPZihrZXkpID4gLTEpIG5vZGVzW2tleV0odmFsdWUpXG4gICAgICAgIGVsc2Ugbm9kZXMuYXR0cihrZXksIHZhbHVlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gZG9tXG4gIH1cblxuICAvLyBgJC56ZXB0by5aYCBzd2FwcyBvdXQgdGhlIHByb3RvdHlwZSBvZiB0aGUgZ2l2ZW4gYGRvbWAgYXJyYXlcbiAgLy8gb2Ygbm9kZXMgd2l0aCBgJC5mbmAgYW5kIHRodXMgc3VwcGx5aW5nIGFsbCB0aGUgWmVwdG8gZnVuY3Rpb25zXG4gIC8vIHRvIHRoZSBhcnJheS4gTm90ZSB0aGF0IGBfX3Byb3RvX19gIGlzIG5vdCBzdXBwb3J0ZWQgb24gSW50ZXJuZXRcbiAgLy8gRXhwbG9yZXIuIFRoaXMgbWV0aG9kIGNhbiBiZSBvdmVycmlkZW4gaW4gcGx1Z2lucy5cbiAgemVwdG8uWiA9IGZ1bmN0aW9uKGRvbSwgc2VsZWN0b3IpIHtcbiAgICBkb20gPSBkb20gfHwgW11cbiAgICBkb20uX19wcm90b19fID0gJC5mblxuICAgIGRvbS5zZWxlY3RvciA9IHNlbGVjdG9yIHx8ICcnXG4gICAgcmV0dXJuIGRvbVxuICB9XG5cbiAgLy8gYCQuemVwdG8uaXNaYCBzaG91bGQgcmV0dXJuIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGEgWmVwdG9cbiAgLy8gY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgY2FuIGJlIG92ZXJyaWRlbiBpbiBwbHVnaW5zLlxuICB6ZXB0by5pc1ogPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgemVwdG8uWlxuICB9XG5cbiAgLy8gYCQuemVwdG8uaW5pdGAgaXMgWmVwdG8ncyBjb3VudGVycGFydCB0byBqUXVlcnkncyBgJC5mbi5pbml0YCBhbmRcbiAgLy8gdGFrZXMgYSBDU1Mgc2VsZWN0b3IgYW5kIGFuIG9wdGlvbmFsIGNvbnRleHQgKGFuZCBoYW5kbGVzIHZhcmlvdXNcbiAgLy8gc3BlY2lhbCBjYXNlcykuXG4gIC8vIFRoaXMgbWV0aG9kIGNhbiBiZSBvdmVycmlkZW4gaW4gcGx1Z2lucy5cbiAgemVwdG8uaW5pdCA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gICAgdmFyIGRvbVxuICAgIC8vIElmIG5vdGhpbmcgZ2l2ZW4sIHJldHVybiBhbiBlbXB0eSBaZXB0byBjb2xsZWN0aW9uXG4gICAgaWYgKCFzZWxlY3RvcikgcmV0dXJuIHplcHRvLlooKVxuICAgIC8vIE9wdGltaXplIGZvciBzdHJpbmcgc2VsZWN0b3JzXG4gICAgZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdzdHJpbmcnKSB7XG4gICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnRyaW0oKVxuICAgICAgLy8gSWYgaXQncyBhIGh0bWwgZnJhZ21lbnQsIGNyZWF0ZSBub2RlcyBmcm9tIGl0XG4gICAgICAvLyBOb3RlOiBJbiBib3RoIENocm9tZSAyMSBhbmQgRmlyZWZveCAxNSwgRE9NIGVycm9yIDEyXG4gICAgICAvLyBpcyB0aHJvd24gaWYgdGhlIGZyYWdtZW50IGRvZXNuJ3QgYmVnaW4gd2l0aCA8XG4gICAgICBpZiAoc2VsZWN0b3JbMF0gPT0gJzwnICYmIGZyYWdtZW50UkUudGVzdChzZWxlY3RvcikpXG4gICAgICAgIGRvbSA9IHplcHRvLmZyYWdtZW50KHNlbGVjdG9yLCBSZWdFeHAuJDEsIGNvbnRleHQpLCBzZWxlY3RvciA9IG51bGxcbiAgICAgIC8vIElmIHRoZXJlJ3MgYSBjb250ZXh0LCBjcmVhdGUgYSBjb2xsZWN0aW9uIG9uIHRoYXQgY29udGV4dCBmaXJzdCwgYW5kIHNlbGVjdFxuICAgICAgLy8gbm9kZXMgZnJvbSB0aGVyZVxuICAgICAgZWxzZSBpZiAoY29udGV4dCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gJChjb250ZXh0KS5maW5kKHNlbGVjdG9yKVxuICAgICAgLy8gSWYgaXQncyBhIENTUyBzZWxlY3RvciwgdXNlIGl0IHRvIHNlbGVjdCBub2Rlcy5cbiAgICAgIGVsc2UgZG9tID0gemVwdG8ucXNhKGRvY3VtZW50LCBzZWxlY3RvcilcbiAgICB9XG4gICAgLy8gSWYgYSBmdW5jdGlvbiBpcyBnaXZlbiwgY2FsbCBpdCB3aGVuIHRoZSBET00gaXMgcmVhZHlcbiAgICBlbHNlIGlmIChpc0Z1bmN0aW9uKHNlbGVjdG9yKSkgcmV0dXJuICQoZG9jdW1lbnQpLnJlYWR5KHNlbGVjdG9yKVxuICAgIC8vIElmIGEgWmVwdG8gY29sbGVjdGlvbiBpcyBnaXZlbiwganVzdCByZXR1cm4gaXRcbiAgICBlbHNlIGlmICh6ZXB0by5pc1ooc2VsZWN0b3IpKSByZXR1cm4gc2VsZWN0b3JcbiAgICBlbHNlIHtcbiAgICAgIC8vIG5vcm1hbGl6ZSBhcnJheSBpZiBhbiBhcnJheSBvZiBub2RlcyBpcyBnaXZlblxuICAgICAgaWYgKGlzQXJyYXkoc2VsZWN0b3IpKSBkb20gPSBjb21wYWN0KHNlbGVjdG9yKVxuICAgICAgLy8gV3JhcCBET00gbm9kZXMuXG4gICAgICBlbHNlIGlmIChpc09iamVjdChzZWxlY3RvcikpXG4gICAgICAgIGRvbSA9IFtzZWxlY3Rvcl0sIHNlbGVjdG9yID0gbnVsbFxuICAgICAgLy8gSWYgaXQncyBhIGh0bWwgZnJhZ21lbnQsIGNyZWF0ZSBub2RlcyBmcm9tIGl0XG4gICAgICBlbHNlIGlmIChmcmFnbWVudFJFLnRlc3Qoc2VsZWN0b3IpKVxuICAgICAgICBkb20gPSB6ZXB0by5mcmFnbWVudChzZWxlY3Rvci50cmltKCksIFJlZ0V4cC4kMSwgY29udGV4dCksIHNlbGVjdG9yID0gbnVsbFxuICAgICAgLy8gSWYgdGhlcmUncyBhIGNvbnRleHQsIGNyZWF0ZSBhIGNvbGxlY3Rpb24gb24gdGhhdCBjb250ZXh0IGZpcnN0LCBhbmQgc2VsZWN0XG4gICAgICAvLyBub2RlcyBmcm9tIHRoZXJlXG4gICAgICBlbHNlIGlmIChjb250ZXh0ICE9PSB1bmRlZmluZWQpIHJldHVybiAkKGNvbnRleHQpLmZpbmQoc2VsZWN0b3IpXG4gICAgICAvLyBBbmQgbGFzdCBidXQgbm8gbGVhc3QsIGlmIGl0J3MgYSBDU1Mgc2VsZWN0b3IsIHVzZSBpdCB0byBzZWxlY3Qgbm9kZXMuXG4gICAgICBlbHNlIGRvbSA9IHplcHRvLnFzYShkb2N1bWVudCwgc2VsZWN0b3IpXG4gICAgfVxuICAgIC8vIGNyZWF0ZSBhIG5ldyBaZXB0byBjb2xsZWN0aW9uIGZyb20gdGhlIG5vZGVzIGZvdW5kXG4gICAgcmV0dXJuIHplcHRvLlooZG9tLCBzZWxlY3RvcilcbiAgfVxuXG4gIC8vIGAkYCB3aWxsIGJlIHRoZSBiYXNlIGBaZXB0b2Agb2JqZWN0LiBXaGVuIGNhbGxpbmcgdGhpc1xuICAvLyBmdW5jdGlvbiBqdXN0IGNhbGwgYCQuemVwdG8uaW5pdCwgd2hpY2ggbWFrZXMgdGhlIGltcGxlbWVudGF0aW9uXG4gIC8vIGRldGFpbHMgb2Ygc2VsZWN0aW5nIG5vZGVzIGFuZCBjcmVhdGluZyBaZXB0byBjb2xsZWN0aW9uc1xuICAvLyBwYXRjaGFibGUgaW4gcGx1Z2lucy5cbiAgJCA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBjb250ZXh0KXtcbiAgICByZXR1cm4gemVwdG8uaW5pdChzZWxlY3RvciwgY29udGV4dClcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQsIHNvdXJjZSwgZGVlcCkge1xuICAgIGZvciAoa2V5IGluIHNvdXJjZSlcbiAgICAgIGlmIChkZWVwICYmIChpc1BsYWluT2JqZWN0KHNvdXJjZVtrZXldKSB8fCBpc0FycmF5KHNvdXJjZVtrZXldKSkpIHtcbiAgICAgICAgaWYgKGlzUGxhaW5PYmplY3Qoc291cmNlW2tleV0pICYmICFpc1BsYWluT2JqZWN0KHRhcmdldFtrZXldKSlcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHt9XG4gICAgICAgIGlmIChpc0FycmF5KHNvdXJjZVtrZXldKSAmJiAhaXNBcnJheSh0YXJnZXRba2V5XSkpXG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBbXVxuICAgICAgICBleHRlbmQodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBkZWVwKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoc291cmNlW2tleV0gIT09IHVuZGVmaW5lZCkgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICB9XG5cbiAgLy8gQ29weSBhbGwgYnV0IHVuZGVmaW5lZCBwcm9wZXJ0aWVzIGZyb20gb25lIG9yIG1vcmVcbiAgLy8gb2JqZWN0cyB0byB0aGUgYHRhcmdldGAgb2JqZWN0LlxuICAkLmV4dGVuZCA9IGZ1bmN0aW9uKHRhcmdldCl7XG4gICAgdmFyIGRlZXAsIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcbiAgICBpZiAodHlwZW9mIHRhcmdldCA9PSAnYm9vbGVhbicpIHtcbiAgICAgIGRlZXAgPSB0YXJnZXRcbiAgICAgIHRhcmdldCA9IGFyZ3Muc2hpZnQoKVxuICAgIH1cbiAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24oYXJnKXsgZXh0ZW5kKHRhcmdldCwgYXJnLCBkZWVwKSB9KVxuICAgIHJldHVybiB0YXJnZXRcbiAgfVxuXG4gIC8vIGAkLnplcHRvLnFzYWAgaXMgWmVwdG8ncyBDU1Mgc2VsZWN0b3IgaW1wbGVtZW50YXRpb24gd2hpY2hcbiAgLy8gdXNlcyBgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbGAgYW5kIG9wdGltaXplcyBmb3Igc29tZSBzcGVjaWFsIGNhc2VzLCBsaWtlIGAjaWRgLlxuICAvLyBUaGlzIG1ldGhvZCBjYW4gYmUgb3ZlcnJpZGVuIGluIHBsdWdpbnMuXG4gIHplcHRvLnFzYSA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNlbGVjdG9yKXtcbiAgICB2YXIgZm91bmQsXG4gICAgICAgIG1heWJlSUQgPSBzZWxlY3RvclswXSA9PSAnIycsXG4gICAgICAgIG1heWJlQ2xhc3MgPSAhbWF5YmVJRCAmJiBzZWxlY3RvclswXSA9PSAnLicsXG4gICAgICAgIG5hbWVPbmx5ID0gbWF5YmVJRCB8fCBtYXliZUNsYXNzID8gc2VsZWN0b3Iuc2xpY2UoMSkgOiBzZWxlY3RvciwgLy8gRW5zdXJlIHRoYXQgYSAxIGNoYXIgdGFnIG5hbWUgc3RpbGwgZ2V0cyBjaGVja2VkXG4gICAgICAgIGlzU2ltcGxlID0gc2ltcGxlU2VsZWN0b3JSRS50ZXN0KG5hbWVPbmx5KVxuICAgIHJldHVybiAoaXNEb2N1bWVudChlbGVtZW50KSAmJiBpc1NpbXBsZSAmJiBtYXliZUlEKSA/XG4gICAgICAoIChmb3VuZCA9IGVsZW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZU9ubHkpKSA/IFtmb3VuZF0gOiBbXSApIDpcbiAgICAgIChlbGVtZW50Lm5vZGVUeXBlICE9PSAxICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IDkpID8gW10gOlxuICAgICAgc2xpY2UuY2FsbChcbiAgICAgICAgaXNTaW1wbGUgJiYgIW1heWJlSUQgP1xuICAgICAgICAgIG1heWJlQ2xhc3MgPyBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobmFtZU9ubHkpIDogLy8gSWYgaXQncyBzaW1wbGUsIGl0IGNvdWxkIGJlIGEgY2xhc3NcbiAgICAgICAgICBlbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHNlbGVjdG9yKSA6IC8vIE9yIGEgdGFnXG4gICAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSAvLyBPciBpdCdzIG5vdCBzaW1wbGUsIGFuZCB3ZSBuZWVkIHRvIHF1ZXJ5IGFsbFxuICAgICAgKVxuICB9XG5cbiAgZnVuY3Rpb24gZmlsdGVyZWQobm9kZXMsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yID09IG51bGwgPyAkKG5vZGVzKSA6ICQobm9kZXMpLmZpbHRlcihzZWxlY3RvcilcbiAgfVxuXG4gICQuY29udGFpbnMgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnMgP1xuICAgIGZ1bmN0aW9uKHBhcmVudCwgbm9kZSkge1xuICAgICAgcmV0dXJuIHBhcmVudCAhPT0gbm9kZSAmJiBwYXJlbnQuY29udGFpbnMobm9kZSlcbiAgICB9IDpcbiAgICBmdW5jdGlvbihwYXJlbnQsIG5vZGUpIHtcbiAgICAgIHdoaWxlIChub2RlICYmIChub2RlID0gbm9kZS5wYXJlbnROb2RlKSlcbiAgICAgICAgaWYgKG5vZGUgPT09IHBhcmVudCkgcmV0dXJuIHRydWVcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICBmdW5jdGlvbiBmdW5jQXJnKGNvbnRleHQsIGFyZywgaWR4LCBwYXlsb2FkKSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24oYXJnKSA/IGFyZy5jYWxsKGNvbnRleHQsIGlkeCwgcGF5bG9hZCkgOiBhcmdcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEF0dHJpYnV0ZShub2RlLCBuYW1lLCB2YWx1ZSkge1xuICAgIHZhbHVlID09IG51bGwgPyBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKSA6IG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKVxuICB9XG5cbiAgLy8gYWNjZXNzIGNsYXNzTmFtZSBwcm9wZXJ0eSB3aGlsZSByZXNwZWN0aW5nIFNWR0FuaW1hdGVkU3RyaW5nXG4gIGZ1bmN0aW9uIGNsYXNzTmFtZShub2RlLCB2YWx1ZSl7XG4gICAgdmFyIGtsYXNzID0gbm9kZS5jbGFzc05hbWUgfHwgJycsXG4gICAgICAgIHN2ZyAgID0ga2xhc3MgJiYga2xhc3MuYmFzZVZhbCAhPT0gdW5kZWZpbmVkXG5cbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHN2ZyA/IGtsYXNzLmJhc2VWYWwgOiBrbGFzc1xuICAgIHN2ZyA/IChrbGFzcy5iYXNlVmFsID0gdmFsdWUpIDogKG5vZGUuY2xhc3NOYW1lID0gdmFsdWUpXG4gIH1cblxuICAvLyBcInRydWVcIiAgPT4gdHJ1ZVxuICAvLyBcImZhbHNlXCIgPT4gZmFsc2VcbiAgLy8gXCJudWxsXCIgID0+IG51bGxcbiAgLy8gXCI0MlwiICAgID0+IDQyXG4gIC8vIFwiNDIuNVwiICA9PiA0Mi41XG4gIC8vIFwiMDhcIiAgICA9PiBcIjA4XCJcbiAgLy8gSlNPTiAgICA9PiBwYXJzZSBpZiB2YWxpZFxuICAvLyBTdHJpbmcgID0+IHNlbGZcbiAgZnVuY3Rpb24gZGVzZXJpYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdmFsdWUgP1xuICAgICAgICB2YWx1ZSA9PSBcInRydWVcIiB8fFxuICAgICAgICAoIHZhbHVlID09IFwiZmFsc2VcIiA/IGZhbHNlIDpcbiAgICAgICAgICB2YWx1ZSA9PSBcIm51bGxcIiA/IG51bGwgOlxuICAgICAgICAgICt2YWx1ZSArIFwiXCIgPT0gdmFsdWUgPyArdmFsdWUgOlxuICAgICAgICAgIC9eW1xcW1xce10vLnRlc3QodmFsdWUpID8gJC5wYXJzZUpTT04odmFsdWUpIDpcbiAgICAgICAgICB2YWx1ZSApXG4gICAgICAgIDogdmFsdWVcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gICQudHlwZSA9IHR5cGVcbiAgJC5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvblxuICAkLmlzV2luZG93ID0gaXNXaW5kb3dcbiAgJC5pc0FycmF5ID0gaXNBcnJheVxuICAkLmlzUGxhaW5PYmplY3QgPSBpc1BsYWluT2JqZWN0XG5cbiAgJC5pc0VtcHR5T2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIG5hbWVcbiAgICBmb3IgKG5hbWUgaW4gb2JqKSByZXR1cm4gZmFsc2VcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgJC5pbkFycmF5ID0gZnVuY3Rpb24oZWxlbSwgYXJyYXksIGkpe1xuICAgIHJldHVybiBlbXB0eUFycmF5LmluZGV4T2YuY2FsbChhcnJheSwgZWxlbSwgaSlcbiAgfVxuXG4gICQuY2FtZWxDYXNlID0gY2FtZWxpemVcbiAgJC50cmltID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIHN0ciA9PSBudWxsID8gXCJcIiA6IFN0cmluZy5wcm90b3R5cGUudHJpbS5jYWxsKHN0cilcbiAgfVxuXG4gIC8vIHBsdWdpbiBjb21wYXRpYmlsaXR5XG4gICQudXVpZCA9IDBcbiAgJC5zdXBwb3J0ID0geyB9XG4gICQuZXhwciA9IHsgfVxuXG4gICQubWFwID0gZnVuY3Rpb24oZWxlbWVudHMsIGNhbGxiYWNrKXtcbiAgICB2YXIgdmFsdWUsIHZhbHVlcyA9IFtdLCBpLCBrZXlcbiAgICBpZiAobGlrZUFycmF5KGVsZW1lbnRzKSlcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YWx1ZSA9IGNhbGxiYWNrKGVsZW1lbnRzW2ldLCBpKVxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkgdmFsdWVzLnB1c2godmFsdWUpXG4gICAgICB9XG4gICAgZWxzZVxuICAgICAgZm9yIChrZXkgaW4gZWxlbWVudHMpIHtcbiAgICAgICAgdmFsdWUgPSBjYWxsYmFjayhlbGVtZW50c1trZXldLCBrZXkpXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB2YWx1ZXMucHVzaCh2YWx1ZSlcbiAgICAgIH1cbiAgICByZXR1cm4gZmxhdHRlbih2YWx1ZXMpXG4gIH1cblxuICAkLmVhY2ggPSBmdW5jdGlvbihlbGVtZW50cywgY2FsbGJhY2spe1xuICAgIHZhciBpLCBrZXlcbiAgICBpZiAobGlrZUFycmF5KGVsZW1lbnRzKSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKVxuICAgICAgICBpZiAoY2FsbGJhY2suY2FsbChlbGVtZW50c1tpXSwgaSwgZWxlbWVudHNbaV0pID09PSBmYWxzZSkgcmV0dXJuIGVsZW1lbnRzXG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoa2V5IGluIGVsZW1lbnRzKVxuICAgICAgICBpZiAoY2FsbGJhY2suY2FsbChlbGVtZW50c1trZXldLCBrZXksIGVsZW1lbnRzW2tleV0pID09PSBmYWxzZSkgcmV0dXJuIGVsZW1lbnRzXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzXG4gIH1cblxuICAkLmdyZXAgPSBmdW5jdGlvbihlbGVtZW50cywgY2FsbGJhY2spe1xuICAgIHJldHVybiBmaWx0ZXIuY2FsbChlbGVtZW50cywgY2FsbGJhY2spXG4gIH1cblxuICBpZiAod2luZG93LkpTT04pICQucGFyc2VKU09OID0gSlNPTi5wYXJzZVxuXG4gIC8vIFBvcHVsYXRlIHRoZSBjbGFzczJ0eXBlIG1hcFxuICAkLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yXCIuc3BsaXQoXCIgXCIpLCBmdW5jdGlvbihpLCBuYW1lKSB7XG4gICAgY2xhc3MydHlwZVsgXCJbb2JqZWN0IFwiICsgbmFtZSArIFwiXVwiIF0gPSBuYW1lLnRvTG93ZXJDYXNlKClcbiAgfSlcblxuICAvLyBEZWZpbmUgbWV0aG9kcyB0aGF0IHdpbGwgYmUgYXZhaWxhYmxlIG9uIGFsbFxuICAvLyBaZXB0byBjb2xsZWN0aW9uc1xuICAkLmZuID0ge1xuICAgIC8vIEJlY2F1c2UgYSBjb2xsZWN0aW9uIGFjdHMgbGlrZSBhbiBhcnJheVxuICAgIC8vIGNvcHkgb3ZlciB0aGVzZSB1c2VmdWwgYXJyYXkgZnVuY3Rpb25zLlxuICAgIGZvckVhY2g6IGVtcHR5QXJyYXkuZm9yRWFjaCxcbiAgICByZWR1Y2U6IGVtcHR5QXJyYXkucmVkdWNlLFxuICAgIHB1c2g6IGVtcHR5QXJyYXkucHVzaCxcbiAgICBzb3J0OiBlbXB0eUFycmF5LnNvcnQsXG4gICAgaW5kZXhPZjogZW1wdHlBcnJheS5pbmRleE9mLFxuICAgIGNvbmNhdDogZW1wdHlBcnJheS5jb25jYXQsXG5cbiAgICAvLyBgbWFwYCBhbmQgYHNsaWNlYCBpbiB0aGUgalF1ZXJ5IEFQSSB3b3JrIGRpZmZlcmVudGx5XG4gICAgLy8gZnJvbSB0aGVpciBhcnJheSBjb3VudGVycGFydHNcbiAgICBtYXA6IGZ1bmN0aW9uKGZuKXtcbiAgICAgIHJldHVybiAkKCQubWFwKHRoaXMsIGZ1bmN0aW9uKGVsLCBpKXsgcmV0dXJuIGZuLmNhbGwoZWwsIGksIGVsKSB9KSlcbiAgICB9LFxuICAgIHNsaWNlOiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuICQoc2xpY2UuYXBwbHkodGhpcywgYXJndW1lbnRzKSlcbiAgICB9LFxuXG4gICAgcmVhZHk6IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgIC8vIG5lZWQgdG8gY2hlY2sgaWYgZG9jdW1lbnQuYm9keSBleGlzdHMgZm9yIElFIGFzIHRoYXQgYnJvd3NlciByZXBvcnRzXG4gICAgICAvLyBkb2N1bWVudCByZWFkeSB3aGVuIGl0IGhhc24ndCB5ZXQgY3JlYXRlZCB0aGUgYm9keSBlbGVtZW50XG4gICAgICBpZiAocmVhZHlSRS50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpICYmIGRvY3VtZW50LmJvZHkpIGNhbGxiYWNrKCQpXG4gICAgICBlbHNlIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpeyBjYWxsYmFjaygkKSB9LCBmYWxzZSlcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uKGlkeCl7XG4gICAgICByZXR1cm4gaWR4ID09PSB1bmRlZmluZWQgPyBzbGljZS5jYWxsKHRoaXMpIDogdGhpc1tpZHggPj0gMCA/IGlkeCA6IGlkeCArIHRoaXMubGVuZ3RoXVxuICAgIH0sXG4gICAgdG9BcnJheTogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuZ2V0KCkgfSxcbiAgICBzaXplOiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoXG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUgIT0gbnVsbClcbiAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcylcbiAgICAgIH0pXG4gICAgfSxcbiAgICBlYWNoOiBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICBlbXB0eUFycmF5LmV2ZXJ5LmNhbGwodGhpcywgZnVuY3Rpb24oZWwsIGlkeCl7XG4gICAgICAgIHJldHVybiBjYWxsYmFjay5jYWxsKGVsLCBpZHgsIGVsKSAhPT0gZmFsc2VcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG4gICAgZmlsdGVyOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICBpZiAoaXNGdW5jdGlvbihzZWxlY3RvcikpIHJldHVybiB0aGlzLm5vdCh0aGlzLm5vdChzZWxlY3RvcikpXG4gICAgICByZXR1cm4gJChmaWx0ZXIuY2FsbCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KXtcbiAgICAgICAgcmV0dXJuIHplcHRvLm1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpXG4gICAgICB9KSlcbiAgICB9LFxuICAgIGFkZDogZnVuY3Rpb24oc2VsZWN0b3IsY29udGV4dCl7XG4gICAgICByZXR1cm4gJCh1bmlxKHRoaXMuY29uY2F0KCQoc2VsZWN0b3IsY29udGV4dCkpKSlcbiAgICB9LFxuICAgIGlzOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICByZXR1cm4gdGhpcy5sZW5ndGggPiAwICYmIHplcHRvLm1hdGNoZXModGhpc1swXSwgc2VsZWN0b3IpXG4gICAgfSxcbiAgICBub3Q6IGZ1bmN0aW9uKHNlbGVjdG9yKXtcbiAgICAgIHZhciBub2Rlcz1bXVxuICAgICAgaWYgKGlzRnVuY3Rpb24oc2VsZWN0b3IpICYmIHNlbGVjdG9yLmNhbGwgIT09IHVuZGVmaW5lZClcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgaWYgKCFzZWxlY3Rvci5jYWxsKHRoaXMsaWR4KSkgbm9kZXMucHVzaCh0aGlzKVxuICAgICAgICB9KVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBleGNsdWRlcyA9IHR5cGVvZiBzZWxlY3RvciA9PSAnc3RyaW5nJyA/IHRoaXMuZmlsdGVyKHNlbGVjdG9yKSA6XG4gICAgICAgICAgKGxpa2VBcnJheShzZWxlY3RvcikgJiYgaXNGdW5jdGlvbihzZWxlY3Rvci5pdGVtKSkgPyBzbGljZS5jYWxsKHNlbGVjdG9yKSA6ICQoc2VsZWN0b3IpXG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgaWYgKGV4Y2x1ZGVzLmluZGV4T2YoZWwpIDwgMCkgbm9kZXMucHVzaChlbClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHJldHVybiAkKG5vZGVzKVxuICAgIH0sXG4gICAgaGFzOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KHNlbGVjdG9yKSA/XG4gICAgICAgICAgJC5jb250YWlucyh0aGlzLCBzZWxlY3RvcikgOlxuICAgICAgICAgICQodGhpcykuZmluZChzZWxlY3Rvcikuc2l6ZSgpXG4gICAgICB9KVxuICAgIH0sXG4gICAgZXE6IGZ1bmN0aW9uKGlkeCl7XG4gICAgICByZXR1cm4gaWR4ID09PSAtMSA/IHRoaXMuc2xpY2UoaWR4KSA6IHRoaXMuc2xpY2UoaWR4LCArIGlkeCArIDEpXG4gICAgfSxcbiAgICBmaXJzdDogZnVuY3Rpb24oKXtcbiAgICAgIHZhciBlbCA9IHRoaXNbMF1cbiAgICAgIHJldHVybiBlbCAmJiAhaXNPYmplY3QoZWwpID8gZWwgOiAkKGVsKVxuICAgIH0sXG4gICAgbGFzdDogZnVuY3Rpb24oKXtcbiAgICAgIHZhciBlbCA9IHRoaXNbdGhpcy5sZW5ndGggLSAxXVxuICAgICAgcmV0dXJuIGVsICYmICFpc09iamVjdChlbCkgPyBlbCA6ICQoZWwpXG4gICAgfSxcbiAgICBmaW5kOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICB2YXIgcmVzdWx0LCAkdGhpcyA9IHRoaXNcbiAgICAgIGlmICghc2VsZWN0b3IpIHJlc3VsdCA9ICQoKVxuICAgICAgZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdvYmplY3QnKVxuICAgICAgICByZXN1bHQgPSAkKHNlbGVjdG9yKS5maWx0ZXIoZnVuY3Rpb24oKXtcbiAgICAgICAgICB2YXIgbm9kZSA9IHRoaXNcbiAgICAgICAgICByZXR1cm4gZW1wdHlBcnJheS5zb21lLmNhbGwoJHRoaXMsIGZ1bmN0aW9uKHBhcmVudCl7XG4gICAgICAgICAgICByZXR1cm4gJC5jb250YWlucyhwYXJlbnQsIG5vZGUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIGVsc2UgaWYgKHRoaXMubGVuZ3RoID09IDEpIHJlc3VsdCA9ICQoemVwdG8ucXNhKHRoaXNbMF0sIHNlbGVjdG9yKSlcbiAgICAgIGVsc2UgcmVzdWx0ID0gdGhpcy5tYXAoZnVuY3Rpb24oKXsgcmV0dXJuIHplcHRvLnFzYSh0aGlzLCBzZWxlY3RvcikgfSlcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9LFxuICAgIGNsb3Nlc3Q6IGZ1bmN0aW9uKHNlbGVjdG9yLCBjb250ZXh0KXtcbiAgICAgIHZhciBub2RlID0gdGhpc1swXSwgY29sbGVjdGlvbiA9IGZhbHNlXG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdvYmplY3QnKSBjb2xsZWN0aW9uID0gJChzZWxlY3RvcilcbiAgICAgIHdoaWxlIChub2RlICYmICEoY29sbGVjdGlvbiA/IGNvbGxlY3Rpb24uaW5kZXhPZihub2RlKSA+PSAwIDogemVwdG8ubWF0Y2hlcyhub2RlLCBzZWxlY3RvcikpKVxuICAgICAgICBub2RlID0gbm9kZSAhPT0gY29udGV4dCAmJiAhaXNEb2N1bWVudChub2RlKSAmJiBub2RlLnBhcmVudE5vZGVcbiAgICAgIHJldHVybiAkKG5vZGUpXG4gICAgfSxcbiAgICBwYXJlbnRzOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICB2YXIgYW5jZXN0b3JzID0gW10sIG5vZGVzID0gdGhpc1xuICAgICAgd2hpbGUgKG5vZGVzLmxlbmd0aCA+IDApXG4gICAgICAgIG5vZGVzID0gJC5tYXAobm9kZXMsIGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICAgIGlmICgobm9kZSA9IG5vZGUucGFyZW50Tm9kZSkgJiYgIWlzRG9jdW1lbnQobm9kZSkgJiYgYW5jZXN0b3JzLmluZGV4T2Yobm9kZSkgPCAwKSB7XG4gICAgICAgICAgICBhbmNlc3RvcnMucHVzaChub2RlKVxuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICByZXR1cm4gZmlsdGVyZWQoYW5jZXN0b3JzLCBzZWxlY3RvcilcbiAgICB9LFxuICAgIHBhcmVudDogZnVuY3Rpb24oc2VsZWN0b3Ipe1xuICAgICAgcmV0dXJuIGZpbHRlcmVkKHVuaXEodGhpcy5wbHVjaygncGFyZW50Tm9kZScpKSwgc2VsZWN0b3IpXG4gICAgfSxcbiAgICBjaGlsZHJlbjogZnVuY3Rpb24oc2VsZWN0b3Ipe1xuICAgICAgcmV0dXJuIGZpbHRlcmVkKHRoaXMubWFwKGZ1bmN0aW9uKCl7IHJldHVybiBjaGlsZHJlbih0aGlzKSB9KSwgc2VsZWN0b3IpXG4gICAgfSxcbiAgICBjb250ZW50czogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKSB7IHJldHVybiBzbGljZS5jYWxsKHRoaXMuY2hpbGROb2RlcykgfSlcbiAgICB9LFxuICAgIHNpYmxpbmdzOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICByZXR1cm4gZmlsdGVyZWQodGhpcy5tYXAoZnVuY3Rpb24oaSwgZWwpe1xuICAgICAgICByZXR1cm4gZmlsdGVyLmNhbGwoY2hpbGRyZW4oZWwucGFyZW50Tm9kZSksIGZ1bmN0aW9uKGNoaWxkKXsgcmV0dXJuIGNoaWxkIT09ZWwgfSlcbiAgICAgIH0pLCBzZWxlY3RvcilcbiAgICB9LFxuICAgIGVtcHR5OiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpeyB0aGlzLmlubmVySFRNTCA9ICcnIH0pXG4gICAgfSxcbiAgICAvLyBgcGx1Y2tgIGlzIGJvcnJvd2VkIGZyb20gUHJvdG90eXBlLmpzXG4gICAgcGx1Y2s6IGZ1bmN0aW9uKHByb3BlcnR5KXtcbiAgICAgIHJldHVybiAkLm1hcCh0aGlzLCBmdW5jdGlvbihlbCl7IHJldHVybiBlbFtwcm9wZXJ0eV0gfSlcbiAgICB9LFxuICAgIHNob3c6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIiAmJiAodGhpcy5zdHlsZS5kaXNwbGF5ID0gJycpXG4gICAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKHRoaXMsICcnKS5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIilcbiAgICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBkZWZhdWx0RGlzcGxheSh0aGlzLm5vZGVOYW1lKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHJlcGxhY2VXaXRoOiBmdW5jdGlvbihuZXdDb250ZW50KXtcbiAgICAgIHJldHVybiB0aGlzLmJlZm9yZShuZXdDb250ZW50KS5yZW1vdmUoKVxuICAgIH0sXG4gICAgd3JhcDogZnVuY3Rpb24oc3RydWN0dXJlKXtcbiAgICAgIHZhciBmdW5jID0gaXNGdW5jdGlvbihzdHJ1Y3R1cmUpXG4gICAgICBpZiAodGhpc1swXSAmJiAhZnVuYylcbiAgICAgICAgdmFyIGRvbSAgID0gJChzdHJ1Y3R1cmUpLmdldCgwKSxcbiAgICAgICAgICAgIGNsb25lID0gZG9tLnBhcmVudE5vZGUgfHwgdGhpcy5sZW5ndGggPiAxXG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgICAkKHRoaXMpLndyYXBBbGwoXG4gICAgICAgICAgZnVuYyA/IHN0cnVjdHVyZS5jYWxsKHRoaXMsIGluZGV4KSA6XG4gICAgICAgICAgICBjbG9uZSA/IGRvbS5jbG9uZU5vZGUodHJ1ZSkgOiBkb21cbiAgICAgICAgKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHdyYXBBbGw6IGZ1bmN0aW9uKHN0cnVjdHVyZSl7XG4gICAgICBpZiAodGhpc1swXSkge1xuICAgICAgICAkKHRoaXNbMF0pLmJlZm9yZShzdHJ1Y3R1cmUgPSAkKHN0cnVjdHVyZSkpXG4gICAgICAgIHZhciBjaGlsZHJlblxuICAgICAgICAvLyBkcmlsbCBkb3duIHRvIHRoZSBpbm1vc3QgZWxlbWVudFxuICAgICAgICB3aGlsZSAoKGNoaWxkcmVuID0gc3RydWN0dXJlLmNoaWxkcmVuKCkpLmxlbmd0aCkgc3RydWN0dXJlID0gY2hpbGRyZW4uZmlyc3QoKVxuICAgICAgICAkKHN0cnVjdHVyZSkuYXBwZW5kKHRoaXMpXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG4gICAgd3JhcElubmVyOiBmdW5jdGlvbihzdHJ1Y3R1cmUpe1xuICAgICAgdmFyIGZ1bmMgPSBpc0Z1bmN0aW9uKHN0cnVjdHVyZSlcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgICB2YXIgc2VsZiA9ICQodGhpcyksIGNvbnRlbnRzID0gc2VsZi5jb250ZW50cygpLFxuICAgICAgICAgICAgZG9tICA9IGZ1bmMgPyBzdHJ1Y3R1cmUuY2FsbCh0aGlzLCBpbmRleCkgOiBzdHJ1Y3R1cmVcbiAgICAgICAgY29udGVudHMubGVuZ3RoID8gY29udGVudHMud3JhcEFsbChkb20pIDogc2VsZi5hcHBlbmQoZG9tKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHVud3JhcDogZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMucGFyZW50KCkuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnJlcGxhY2VXaXRoKCQodGhpcykuY2hpbGRyZW4oKSlcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG4gICAgY2xvbmU6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuY2xvbmVOb2RlKHRydWUpIH0pXG4gICAgfSxcbiAgICBoaWRlOiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIHRoaXMuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIilcbiAgICB9LFxuICAgIHRvZ2dsZTogZnVuY3Rpb24oc2V0dGluZyl7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcylcbiAgICAgICAgOyhzZXR0aW5nID09PSB1bmRlZmluZWQgPyBlbC5jc3MoXCJkaXNwbGF5XCIpID09IFwibm9uZVwiIDogc2V0dGluZykgPyBlbC5zaG93KCkgOiBlbC5oaWRlKClcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmV2OiBmdW5jdGlvbihzZWxlY3Rvcil7IHJldHVybiAkKHRoaXMucGx1Y2soJ3ByZXZpb3VzRWxlbWVudFNpYmxpbmcnKSkuZmlsdGVyKHNlbGVjdG9yIHx8ICcqJykgfSxcbiAgICBuZXh0OiBmdW5jdGlvbihzZWxlY3Rvcil7IHJldHVybiAkKHRoaXMucGx1Y2soJ25leHRFbGVtZW50U2libGluZycpKS5maWx0ZXIoc2VsZWN0b3IgfHwgJyonKSB9LFxuICAgIGh0bWw6IGZ1bmN0aW9uKGh0bWwpe1xuICAgICAgcmV0dXJuIDAgaW4gYXJndW1lbnRzID9cbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgdmFyIG9yaWdpbkh0bWwgPSB0aGlzLmlubmVySFRNTFxuICAgICAgICAgICQodGhpcykuZW1wdHkoKS5hcHBlbmQoIGZ1bmNBcmcodGhpcywgaHRtbCwgaWR4LCBvcmlnaW5IdG1sKSApXG4gICAgICAgIH0pIDpcbiAgICAgICAgKDAgaW4gdGhpcyA/IHRoaXNbMF0uaW5uZXJIVE1MIDogbnVsbClcbiAgICB9LFxuICAgIHRleHQ6IGZ1bmN0aW9uKHRleHQpe1xuICAgICAgcmV0dXJuIDAgaW4gYXJndW1lbnRzID9cbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgdmFyIG5ld1RleHQgPSBmdW5jQXJnKHRoaXMsIHRleHQsIGlkeCwgdGhpcy50ZXh0Q29udGVudClcbiAgICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gbmV3VGV4dCA9PSBudWxsID8gJycgOiAnJytuZXdUZXh0XG4gICAgICAgIH0pIDpcbiAgICAgICAgKDAgaW4gdGhpcyA/IHRoaXNbMF0udGV4dENvbnRlbnQgOiBudWxsKVxuICAgIH0sXG4gICAgYXR0cjogZnVuY3Rpb24obmFtZSwgdmFsdWUpe1xuICAgICAgdmFyIHJlc3VsdFxuICAgICAgcmV0dXJuICh0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyAmJiAhKDEgaW4gYXJndW1lbnRzKSkgP1xuICAgICAgICAoIXRoaXMubGVuZ3RoIHx8IHRoaXNbMF0ubm9kZVR5cGUgIT09IDEgPyB1bmRlZmluZWQgOlxuICAgICAgICAgICghKHJlc3VsdCA9IHRoaXNbMF0uZ2V0QXR0cmlidXRlKG5hbWUpKSAmJiBuYW1lIGluIHRoaXNbMF0pID8gdGhpc1swXVtuYW1lXSA6IHJlc3VsdFxuICAgICAgICApIDpcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgaWYgKHRoaXMubm9kZVR5cGUgIT09IDEpIHJldHVyblxuICAgICAgICAgIGlmIChpc09iamVjdChuYW1lKSkgZm9yIChrZXkgaW4gbmFtZSkgc2V0QXR0cmlidXRlKHRoaXMsIGtleSwgbmFtZVtrZXldKVxuICAgICAgICAgIGVsc2Ugc2V0QXR0cmlidXRlKHRoaXMsIG5hbWUsIGZ1bmNBcmcodGhpcywgdmFsdWUsIGlkeCwgdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSkpKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgcmVtb3ZlQXR0cjogZnVuY3Rpb24obmFtZSl7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7IHRoaXMubm9kZVR5cGUgPT09IDEgJiYgbmFtZS5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24oYXR0cmlidXRlKXtcbiAgICAgICAgc2V0QXR0cmlidXRlKHRoaXMsIGF0dHJpYnV0ZSlcbiAgICAgIH0sIHRoaXMpfSlcbiAgICB9LFxuICAgIHByb3A6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKXtcbiAgICAgIG5hbWUgPSBwcm9wTWFwW25hbWVdIHx8IG5hbWVcbiAgICAgIHJldHVybiAoMSBpbiBhcmd1bWVudHMpID9cbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgdGhpc1tuYW1lXSA9IGZ1bmNBcmcodGhpcywgdmFsdWUsIGlkeCwgdGhpc1tuYW1lXSlcbiAgICAgICAgfSkgOlxuICAgICAgICAodGhpc1swXSAmJiB0aGlzWzBdW25hbWVdKVxuICAgIH0sXG4gICAgZGF0YTogZnVuY3Rpb24obmFtZSwgdmFsdWUpe1xuICAgICAgdmFyIGF0dHJOYW1lID0gJ2RhdGEtJyArIG5hbWUucmVwbGFjZShjYXBpdGFsUkUsICctJDEnKS50b0xvd2VyQ2FzZSgpXG5cbiAgICAgIHZhciBkYXRhID0gKDEgaW4gYXJndW1lbnRzKSA/XG4gICAgICAgIHRoaXMuYXR0cihhdHRyTmFtZSwgdmFsdWUpIDpcbiAgICAgICAgdGhpcy5hdHRyKGF0dHJOYW1lKVxuXG4gICAgICByZXR1cm4gZGF0YSAhPT0gbnVsbCA/IGRlc2VyaWFsaXplVmFsdWUoZGF0YSkgOiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHZhbDogZnVuY3Rpb24odmFsdWUpe1xuICAgICAgcmV0dXJuIDAgaW4gYXJndW1lbnRzID9cbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IGZ1bmNBcmcodGhpcywgdmFsdWUsIGlkeCwgdGhpcy52YWx1ZSlcbiAgICAgICAgfSkgOlxuICAgICAgICAodGhpc1swXSAmJiAodGhpc1swXS5tdWx0aXBsZSA/XG4gICAgICAgICAgICQodGhpc1swXSkuZmluZCgnb3B0aW9uJykuZmlsdGVyKGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLnNlbGVjdGVkIH0pLnBsdWNrKCd2YWx1ZScpIDpcbiAgICAgICAgICAgdGhpc1swXS52YWx1ZSlcbiAgICAgICAgKVxuICAgIH0sXG4gICAgb2Zmc2V0OiBmdW5jdGlvbihjb29yZGluYXRlcyl7XG4gICAgICBpZiAoY29vcmRpbmF0ZXMpIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxuICAgICAgICAgICAgY29vcmRzID0gZnVuY0FyZyh0aGlzLCBjb29yZGluYXRlcywgaW5kZXgsICR0aGlzLm9mZnNldCgpKSxcbiAgICAgICAgICAgIHBhcmVudE9mZnNldCA9ICR0aGlzLm9mZnNldFBhcmVudCgpLm9mZnNldCgpLFxuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgIHRvcDogIGNvb3Jkcy50b3AgIC0gcGFyZW50T2Zmc2V0LnRvcCxcbiAgICAgICAgICAgICAgbGVmdDogY29vcmRzLmxlZnQgLSBwYXJlbnRPZmZzZXQubGVmdFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGlmICgkdGhpcy5jc3MoJ3Bvc2l0aW9uJykgPT0gJ3N0YXRpYycpIHByb3BzWydwb3NpdGlvbiddID0gJ3JlbGF0aXZlJ1xuICAgICAgICAkdGhpcy5jc3MocHJvcHMpXG4gICAgICB9KVxuICAgICAgaWYgKCF0aGlzLmxlbmd0aCkgcmV0dXJuIG51bGxcbiAgICAgIHZhciBvYmogPSB0aGlzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiBvYmoubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgICAgdG9wOiBvYmoudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0LFxuICAgICAgICB3aWR0aDogTWF0aC5yb3VuZChvYmoud2lkdGgpLFxuICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQob2JqLmhlaWdodClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNzczogZnVuY3Rpb24ocHJvcGVydHksIHZhbHVlKXtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZSwgZWxlbWVudCA9IHRoaXNbMF1cbiAgICAgICAgaWYoIWVsZW1lbnQpIHJldHVyblxuICAgICAgICBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCAnJylcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PSAnc3RyaW5nJylcbiAgICAgICAgICByZXR1cm4gZWxlbWVudC5zdHlsZVtjYW1lbGl6ZShwcm9wZXJ0eSldIHx8IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSlcbiAgICAgICAgZWxzZSBpZiAoaXNBcnJheShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICB2YXIgcHJvcHMgPSB7fVxuICAgICAgICAgICQuZWFjaChwcm9wZXJ0eSwgZnVuY3Rpb24oXywgcHJvcCl7XG4gICAgICAgICAgICBwcm9wc1twcm9wXSA9IChlbGVtZW50LnN0eWxlW2NhbWVsaXplKHByb3ApXSB8fCBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJvcCkpXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gcHJvcHNcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgY3NzID0gJydcbiAgICAgIGlmICh0eXBlKHByb3BlcnR5KSA9PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSAwKVxuICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpeyB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KGRhc2hlcml6ZShwcm9wZXJ0eSkpIH0pXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBjc3MgPSBkYXNoZXJpemUocHJvcGVydHkpICsgXCI6XCIgKyBtYXliZUFkZFB4KHByb3BlcnR5LCB2YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoa2V5IGluIHByb3BlcnR5KVxuICAgICAgICAgIGlmICghcHJvcGVydHlba2V5XSAmJiBwcm9wZXJ0eVtrZXldICE9PSAwKVxuICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7IHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkoZGFzaGVyaXplKGtleSkpIH0pXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgY3NzICs9IGRhc2hlcml6ZShrZXkpICsgJzonICsgbWF5YmVBZGRQeChrZXksIHByb3BlcnR5W2tleV0pICsgJzsnXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXsgdGhpcy5zdHlsZS5jc3NUZXh0ICs9ICc7JyArIGNzcyB9KVxuICAgIH0sXG4gICAgaW5kZXg6IGZ1bmN0aW9uKGVsZW1lbnQpe1xuICAgICAgcmV0dXJuIGVsZW1lbnQgPyB0aGlzLmluZGV4T2YoJChlbGVtZW50KVswXSkgOiB0aGlzLnBhcmVudCgpLmNoaWxkcmVuKCkuaW5kZXhPZih0aGlzWzBdKVxuICAgIH0sXG4gICAgaGFzQ2xhc3M6IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgaWYgKCFuYW1lKSByZXR1cm4gZmFsc2VcbiAgICAgIHJldHVybiBlbXB0eUFycmF5LnNvbWUuY2FsbCh0aGlzLCBmdW5jdGlvbihlbCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRlc3QoY2xhc3NOYW1lKGVsKSlcbiAgICAgIH0sIGNsYXNzUkUobmFtZSkpXG4gICAgfSxcbiAgICBhZGRDbGFzczogZnVuY3Rpb24obmFtZSl7XG4gICAgICBpZiAoIW5hbWUpIHJldHVybiB0aGlzXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgIGlmICghKCdjbGFzc05hbWUnIGluIHRoaXMpKSByZXR1cm5cbiAgICAgICAgY2xhc3NMaXN0ID0gW11cbiAgICAgICAgdmFyIGNscyA9IGNsYXNzTmFtZSh0aGlzKSwgbmV3TmFtZSA9IGZ1bmNBcmcodGhpcywgbmFtZSwgaWR4LCBjbHMpXG4gICAgICAgIG5ld05hbWUuc3BsaXQoL1xccysvZykuZm9yRWFjaChmdW5jdGlvbihrbGFzcyl7XG4gICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKGtsYXNzKSkgY2xhc3NMaXN0LnB1c2goa2xhc3MpXG4gICAgICAgIH0sIHRoaXMpXG4gICAgICAgIGNsYXNzTGlzdC5sZW5ndGggJiYgY2xhc3NOYW1lKHRoaXMsIGNscyArIChjbHMgPyBcIiBcIiA6IFwiXCIpICsgY2xhc3NMaXN0LmpvaW4oXCIgXCIpKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbihuYW1lKXtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaWR4KXtcbiAgICAgICAgaWYgKCEoJ2NsYXNzTmFtZScgaW4gdGhpcykpIHJldHVyblxuICAgICAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gY2xhc3NOYW1lKHRoaXMsICcnKVxuICAgICAgICBjbGFzc0xpc3QgPSBjbGFzc05hbWUodGhpcylcbiAgICAgICAgZnVuY0FyZyh0aGlzLCBuYW1lLCBpZHgsIGNsYXNzTGlzdCkuc3BsaXQoL1xccysvZykuZm9yRWFjaChmdW5jdGlvbihrbGFzcyl7XG4gICAgICAgICAgY2xhc3NMaXN0ID0gY2xhc3NMaXN0LnJlcGxhY2UoY2xhc3NSRShrbGFzcyksIFwiIFwiKVxuICAgICAgICB9KVxuICAgICAgICBjbGFzc05hbWUodGhpcywgY2xhc3NMaXN0LnRyaW0oKSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICB0b2dnbGVDbGFzczogZnVuY3Rpb24obmFtZSwgd2hlbil7XG4gICAgICBpZiAoIW5hbWUpIHJldHVybiB0aGlzXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksIG5hbWVzID0gZnVuY0FyZyh0aGlzLCBuYW1lLCBpZHgsIGNsYXNzTmFtZSh0aGlzKSlcbiAgICAgICAgbmFtZXMuc3BsaXQoL1xccysvZykuZm9yRWFjaChmdW5jdGlvbihrbGFzcyl7XG4gICAgICAgICAgKHdoZW4gPT09IHVuZGVmaW5lZCA/ICEkdGhpcy5oYXNDbGFzcyhrbGFzcykgOiB3aGVuKSA/XG4gICAgICAgICAgICAkdGhpcy5hZGRDbGFzcyhrbGFzcykgOiAkdGhpcy5yZW1vdmVDbGFzcyhrbGFzcylcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBzY3JvbGxUb3A6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmICghdGhpcy5sZW5ndGgpIHJldHVyblxuICAgICAgdmFyIGhhc1Njcm9sbFRvcCA9ICdzY3JvbGxUb3AnIGluIHRoaXNbMF1cbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaGFzU2Nyb2xsVG9wID8gdGhpc1swXS5zY3JvbGxUb3AgOiB0aGlzWzBdLnBhZ2VZT2Zmc2V0XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGhhc1Njcm9sbFRvcCA/XG4gICAgICAgIGZ1bmN0aW9uKCl7IHRoaXMuc2Nyb2xsVG9wID0gdmFsdWUgfSA6XG4gICAgICAgIGZ1bmN0aW9uKCl7IHRoaXMuc2Nyb2xsVG8odGhpcy5zY3JvbGxYLCB2YWx1ZSkgfSlcbiAgICB9LFxuICAgIHNjcm9sbExlZnQ6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmICghdGhpcy5sZW5ndGgpIHJldHVyblxuICAgICAgdmFyIGhhc1Njcm9sbExlZnQgPSAnc2Nyb2xsTGVmdCcgaW4gdGhpc1swXVxuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBoYXNTY3JvbGxMZWZ0ID8gdGhpc1swXS5zY3JvbGxMZWZ0IDogdGhpc1swXS5wYWdlWE9mZnNldFxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChoYXNTY3JvbGxMZWZ0ID9cbiAgICAgICAgZnVuY3Rpb24oKXsgdGhpcy5zY3JvbGxMZWZ0ID0gdmFsdWUgfSA6XG4gICAgICAgIGZ1bmN0aW9uKCl7IHRoaXMuc2Nyb2xsVG8odmFsdWUsIHRoaXMuc2Nyb2xsWSkgfSlcbiAgICB9LFxuICAgIHBvc2l0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5sZW5ndGgpIHJldHVyblxuXG4gICAgICB2YXIgZWxlbSA9IHRoaXNbMF0sXG4gICAgICAgIC8vIEdldCAqcmVhbCogb2Zmc2V0UGFyZW50XG4gICAgICAgIG9mZnNldFBhcmVudCA9IHRoaXMub2Zmc2V0UGFyZW50KCksXG4gICAgICAgIC8vIEdldCBjb3JyZWN0IG9mZnNldHNcbiAgICAgICAgb2Zmc2V0ICAgICAgID0gdGhpcy5vZmZzZXQoKSxcbiAgICAgICAgcGFyZW50T2Zmc2V0ID0gcm9vdE5vZGVSRS50ZXN0KG9mZnNldFBhcmVudFswXS5ub2RlTmFtZSkgPyB7IHRvcDogMCwgbGVmdDogMCB9IDogb2Zmc2V0UGFyZW50Lm9mZnNldCgpXG5cbiAgICAgIC8vIFN1YnRyYWN0IGVsZW1lbnQgbWFyZ2luc1xuICAgICAgLy8gbm90ZTogd2hlbiBhbiBlbGVtZW50IGhhcyBtYXJnaW46IGF1dG8gdGhlIG9mZnNldExlZnQgYW5kIG1hcmdpbkxlZnRcbiAgICAgIC8vIGFyZSB0aGUgc2FtZSBpbiBTYWZhcmkgY2F1c2luZyBvZmZzZXQubGVmdCB0byBpbmNvcnJlY3RseSBiZSAwXG4gICAgICBvZmZzZXQudG9wICAtPSBwYXJzZUZsb2F0KCAkKGVsZW0pLmNzcygnbWFyZ2luLXRvcCcpICkgfHwgMFxuICAgICAgb2Zmc2V0LmxlZnQgLT0gcGFyc2VGbG9hdCggJChlbGVtKS5jc3MoJ21hcmdpbi1sZWZ0JykgKSB8fCAwXG5cbiAgICAgIC8vIEFkZCBvZmZzZXRQYXJlbnQgYm9yZGVyc1xuICAgICAgcGFyZW50T2Zmc2V0LnRvcCAgKz0gcGFyc2VGbG9hdCggJChvZmZzZXRQYXJlbnRbMF0pLmNzcygnYm9yZGVyLXRvcC13aWR0aCcpICkgfHwgMFxuICAgICAgcGFyZW50T2Zmc2V0LmxlZnQgKz0gcGFyc2VGbG9hdCggJChvZmZzZXRQYXJlbnRbMF0pLmNzcygnYm9yZGVyLWxlZnQtd2lkdGgnKSApIHx8IDBcblxuICAgICAgLy8gU3VidHJhY3QgdGhlIHR3byBvZmZzZXRzXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3A6ICBvZmZzZXQudG9wICAtIHBhcmVudE9mZnNldC50b3AsXG4gICAgICAgIGxlZnQ6IG9mZnNldC5sZWZ0IC0gcGFyZW50T2Zmc2V0LmxlZnRcbiAgICAgIH1cbiAgICB9LFxuICAgIG9mZnNldFBhcmVudDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMub2Zmc2V0UGFyZW50IHx8IGRvY3VtZW50LmJvZHlcbiAgICAgICAgd2hpbGUgKHBhcmVudCAmJiAhcm9vdE5vZGVSRS50ZXN0KHBhcmVudC5ub2RlTmFtZSkgJiYgJChwYXJlbnQpLmNzcyhcInBvc2l0aW9uXCIpID09IFwic3RhdGljXCIpXG4gICAgICAgICAgcGFyZW50ID0gcGFyZW50Lm9mZnNldFBhcmVudFxuICAgICAgICByZXR1cm4gcGFyZW50XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIGZvciBub3dcbiAgJC5mbi5kZXRhY2ggPSAkLmZuLnJlbW92ZVxuXG4gIC8vIEdlbmVyYXRlIHRoZSBgd2lkdGhgIGFuZCBgaGVpZ2h0YCBmdW5jdGlvbnNcbiAgO1snd2lkdGgnLCAnaGVpZ2h0J10uZm9yRWFjaChmdW5jdGlvbihkaW1lbnNpb24pe1xuICAgIHZhciBkaW1lbnNpb25Qcm9wZXJ0eSA9XG4gICAgICBkaW1lbnNpb24ucmVwbGFjZSgvLi8sIGZ1bmN0aW9uKG0peyByZXR1cm4gbVswXS50b1VwcGVyQ2FzZSgpIH0pXG5cbiAgICAkLmZuW2RpbWVuc2lvbl0gPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICB2YXIgb2Zmc2V0LCBlbCA9IHRoaXNbMF1cbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaXNXaW5kb3coZWwpID8gZWxbJ2lubmVyJyArIGRpbWVuc2lvblByb3BlcnR5XSA6XG4gICAgICAgIGlzRG9jdW1lbnQoZWwpID8gZWwuZG9jdW1lbnRFbGVtZW50WydzY3JvbGwnICsgZGltZW5zaW9uUHJvcGVydHldIDpcbiAgICAgICAgKG9mZnNldCA9IHRoaXMub2Zmc2V0KCkpICYmIG9mZnNldFtkaW1lbnNpb25dXG4gICAgICBlbHNlIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaWR4KXtcbiAgICAgICAgZWwgPSAkKHRoaXMpXG4gICAgICAgIGVsLmNzcyhkaW1lbnNpb24sIGZ1bmNBcmcodGhpcywgdmFsdWUsIGlkeCwgZWxbZGltZW5zaW9uXSgpKSlcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIHRyYXZlcnNlTm9kZShub2RlLCBmdW4pIHtcbiAgICBmdW4obm9kZSlcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKVxuICAgICAgdHJhdmVyc2VOb2RlKG5vZGUuY2hpbGROb2Rlc1tpXSwgZnVuKVxuICB9XG5cbiAgLy8gR2VuZXJhdGUgdGhlIGBhZnRlcmAsIGBwcmVwZW5kYCwgYGJlZm9yZWAsIGBhcHBlbmRgLFxuICAvLyBgaW5zZXJ0QWZ0ZXJgLCBgaW5zZXJ0QmVmb3JlYCwgYGFwcGVuZFRvYCwgYW5kIGBwcmVwZW5kVG9gIG1ldGhvZHMuXG4gIGFkamFjZW5jeU9wZXJhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKG9wZXJhdG9yLCBvcGVyYXRvckluZGV4KSB7XG4gICAgdmFyIGluc2lkZSA9IG9wZXJhdG9ySW5kZXggJSAyIC8vPT4gcHJlcGVuZCwgYXBwZW5kXG5cbiAgICAkLmZuW29wZXJhdG9yXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBhcmd1bWVudHMgY2FuIGJlIG5vZGVzLCBhcnJheXMgb2Ygbm9kZXMsIFplcHRvIG9iamVjdHMgYW5kIEhUTUwgc3RyaW5nc1xuICAgICAgdmFyIGFyZ1R5cGUsIG5vZGVzID0gJC5tYXAoYXJndW1lbnRzLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgICAgIGFyZ1R5cGUgPSB0eXBlKGFyZylcbiAgICAgICAgICAgIHJldHVybiBhcmdUeXBlID09IFwib2JqZWN0XCIgfHwgYXJnVHlwZSA9PSBcImFycmF5XCIgfHwgYXJnID09IG51bGwgP1xuICAgICAgICAgICAgICBhcmcgOiB6ZXB0by5mcmFnbWVudChhcmcpXG4gICAgICAgICAgfSksXG4gICAgICAgICAgcGFyZW50LCBjb3B5QnlDbG9uZSA9IHRoaXMubGVuZ3RoID4gMVxuICAgICAgaWYgKG5vZGVzLmxlbmd0aCA8IDEpIHJldHVybiB0aGlzXG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oXywgdGFyZ2V0KXtcbiAgICAgICAgcGFyZW50ID0gaW5zaWRlID8gdGFyZ2V0IDogdGFyZ2V0LnBhcmVudE5vZGVcblxuICAgICAgICAvLyBjb252ZXJ0IGFsbCBtZXRob2RzIHRvIGEgXCJiZWZvcmVcIiBvcGVyYXRpb25cbiAgICAgICAgdGFyZ2V0ID0gb3BlcmF0b3JJbmRleCA9PSAwID8gdGFyZ2V0Lm5leHRTaWJsaW5nIDpcbiAgICAgICAgICAgICAgICAgb3BlcmF0b3JJbmRleCA9PSAxID8gdGFyZ2V0LmZpcnN0Q2hpbGQgOlxuICAgICAgICAgICAgICAgICBvcGVyYXRvckluZGV4ID09IDIgPyB0YXJnZXQgOlxuICAgICAgICAgICAgICAgICBudWxsXG5cbiAgICAgICAgdmFyIHBhcmVudEluRG9jdW1lbnQgPSAkLmNvbnRhaW5zKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgcGFyZW50KVxuXG4gICAgICAgIG5vZGVzLmZvckVhY2goZnVuY3Rpb24obm9kZSl7XG4gICAgICAgICAgaWYgKGNvcHlCeUNsb25lKSBub2RlID0gbm9kZS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICBlbHNlIGlmICghcGFyZW50KSByZXR1cm4gJChub2RlKS5yZW1vdmUoKVxuXG4gICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShub2RlLCB0YXJnZXQpXG4gICAgICAgICAgaWYgKHBhcmVudEluRG9jdW1lbnQpIHRyYXZlcnNlTm9kZShub2RlLCBmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBpZiAoZWwubm9kZU5hbWUgIT0gbnVsbCAmJiBlbC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJyAmJlxuICAgICAgICAgICAgICAgKCFlbC50eXBlIHx8IGVsLnR5cGUgPT09ICd0ZXh0L2phdmFzY3JpcHQnKSAmJiAhZWwuc3JjKVxuICAgICAgICAgICAgICB3aW5kb3dbJ2V2YWwnXS5jYWxsKHdpbmRvdywgZWwuaW5uZXJIVE1MKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIGFmdGVyICAgID0+IGluc2VydEFmdGVyXG4gICAgLy8gcHJlcGVuZCAgPT4gcHJlcGVuZFRvXG4gICAgLy8gYmVmb3JlICAgPT4gaW5zZXJ0QmVmb3JlXG4gICAgLy8gYXBwZW5kICAgPT4gYXBwZW5kVG9cbiAgICAkLmZuW2luc2lkZSA/IG9wZXJhdG9yKydUbycgOiAnaW5zZXJ0Jysob3BlcmF0b3JJbmRleCA/ICdCZWZvcmUnIDogJ0FmdGVyJyldID0gZnVuY3Rpb24oaHRtbCl7XG4gICAgICAkKGh0bWwpW29wZXJhdG9yXSh0aGlzKVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gIH0pXG5cbiAgemVwdG8uWi5wcm90b3R5cGUgPSAkLmZuXG5cbiAgLy8gRXhwb3J0IGludGVybmFsIEFQSSBmdW5jdGlvbnMgaW4gdGhlIGAkLnplcHRvYCBuYW1lc3BhY2VcbiAgemVwdG8udW5pcSA9IHVuaXFcbiAgemVwdG8uZGVzZXJpYWxpemVWYWx1ZSA9IGRlc2VyaWFsaXplVmFsdWVcbiAgJC56ZXB0byA9IHplcHRvXG5cbiAgcmV0dXJuICRcbn0pKClcblxuOyhmdW5jdGlvbigkKXtcbiAgdmFyIF96aWQgPSAxLCB1bmRlZmluZWQsXG4gICAgICBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZSxcbiAgICAgIGlzRnVuY3Rpb24gPSAkLmlzRnVuY3Rpb24sXG4gICAgICBpc1N0cmluZyA9IGZ1bmN0aW9uKG9iail7IHJldHVybiB0eXBlb2Ygb2JqID09ICdzdHJpbmcnIH0sXG4gICAgICBoYW5kbGVycyA9IHt9LFxuICAgICAgc3BlY2lhbEV2ZW50cz17fSxcbiAgICAgIGZvY3VzaW5TdXBwb3J0ZWQgPSAnb25mb2N1c2luJyBpbiB3aW5kb3csXG4gICAgICBmb2N1cyA9IHsgZm9jdXM6ICdmb2N1c2luJywgYmx1cjogJ2ZvY3Vzb3V0JyB9LFxuICAgICAgaG92ZXIgPSB7IG1vdXNlZW50ZXI6ICdtb3VzZW92ZXInLCBtb3VzZWxlYXZlOiAnbW91c2VvdXQnIH1cblxuICBzcGVjaWFsRXZlbnRzLmNsaWNrID0gc3BlY2lhbEV2ZW50cy5tb3VzZWRvd24gPSBzcGVjaWFsRXZlbnRzLm1vdXNldXAgPSBzcGVjaWFsRXZlbnRzLm1vdXNlbW92ZSA9ICdNb3VzZUV2ZW50cydcblxuICBmdW5jdGlvbiB6aWQoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50Ll96aWQgfHwgKGVsZW1lbnQuX3ppZCA9IF96aWQrKylcbiAgfVxuICBmdW5jdGlvbiBmaW5kSGFuZGxlcnMoZWxlbWVudCwgZXZlbnQsIGZuLCBzZWxlY3Rvcikge1xuICAgIGV2ZW50ID0gcGFyc2UoZXZlbnQpXG4gICAgaWYgKGV2ZW50Lm5zKSB2YXIgbWF0Y2hlciA9IG1hdGNoZXJGb3IoZXZlbnQubnMpXG4gICAgcmV0dXJuIChoYW5kbGVyc1t6aWQoZWxlbWVudCldIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgcmV0dXJuIGhhbmRsZXJcbiAgICAgICAgJiYgKCFldmVudC5lICB8fCBoYW5kbGVyLmUgPT0gZXZlbnQuZSlcbiAgICAgICAgJiYgKCFldmVudC5ucyB8fCBtYXRjaGVyLnRlc3QoaGFuZGxlci5ucykpXG4gICAgICAgICYmICghZm4gICAgICAgfHwgemlkKGhhbmRsZXIuZm4pID09PSB6aWQoZm4pKVxuICAgICAgICAmJiAoIXNlbGVjdG9yIHx8IGhhbmRsZXIuc2VsID09IHNlbGVjdG9yKVxuICAgIH0pXG4gIH1cbiAgZnVuY3Rpb24gcGFyc2UoZXZlbnQpIHtcbiAgICB2YXIgcGFydHMgPSAoJycgKyBldmVudCkuc3BsaXQoJy4nKVxuICAgIHJldHVybiB7ZTogcGFydHNbMF0sIG5zOiBwYXJ0cy5zbGljZSgxKS5zb3J0KCkuam9pbignICcpfVxuICB9XG4gIGZ1bmN0aW9uIG1hdGNoZXJGb3IobnMpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnKD86XnwgKScgKyBucy5yZXBsYWNlKCcgJywgJyAuKiA/JykgKyAnKD86IHwkKScpXG4gIH1cblxuICBmdW5jdGlvbiBldmVudENhcHR1cmUoaGFuZGxlciwgY2FwdHVyZVNldHRpbmcpIHtcbiAgICByZXR1cm4gaGFuZGxlci5kZWwgJiZcbiAgICAgICghZm9jdXNpblN1cHBvcnRlZCAmJiAoaGFuZGxlci5lIGluIGZvY3VzKSkgfHxcbiAgICAgICEhY2FwdHVyZVNldHRpbmdcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWxFdmVudCh0eXBlKSB7XG4gICAgcmV0dXJuIGhvdmVyW3R5cGVdIHx8IChmb2N1c2luU3VwcG9ydGVkICYmIGZvY3VzW3R5cGVdKSB8fCB0eXBlXG4gIH1cblxuICBmdW5jdGlvbiBhZGQoZWxlbWVudCwgZXZlbnRzLCBmbiwgZGF0YSwgc2VsZWN0b3IsIGRlbGVnYXRvciwgY2FwdHVyZSl7XG4gICAgdmFyIGlkID0gemlkKGVsZW1lbnQpLCBzZXQgPSAoaGFuZGxlcnNbaWRdIHx8IChoYW5kbGVyc1tpZF0gPSBbXSkpXG4gICAgZXZlbnRzLnNwbGl0KC9cXHMvKS5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGlmIChldmVudCA9PSAncmVhZHknKSByZXR1cm4gJChkb2N1bWVudCkucmVhZHkoZm4pXG4gICAgICB2YXIgaGFuZGxlciAgID0gcGFyc2UoZXZlbnQpXG4gICAgICBoYW5kbGVyLmZuICAgID0gZm5cbiAgICAgIGhhbmRsZXIuc2VsICAgPSBzZWxlY3RvclxuICAgICAgLy8gZW11bGF0ZSBtb3VzZWVudGVyLCBtb3VzZWxlYXZlXG4gICAgICBpZiAoaGFuZGxlci5lIGluIGhvdmVyKSBmbiA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICB2YXIgcmVsYXRlZCA9IGUucmVsYXRlZFRhcmdldFxuICAgICAgICBpZiAoIXJlbGF0ZWQgfHwgKHJlbGF0ZWQgIT09IHRoaXMgJiYgISQuY29udGFpbnModGhpcywgcmVsYXRlZCkpKVxuICAgICAgICAgIHJldHVybiBoYW5kbGVyLmZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgIH1cbiAgICAgIGhhbmRsZXIuZGVsICAgPSBkZWxlZ2F0b3JcbiAgICAgIHZhciBjYWxsYmFjayAgPSBkZWxlZ2F0b3IgfHwgZm5cbiAgICAgIGhhbmRsZXIucHJveHkgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgZSA9IGNvbXBhdGlibGUoZSlcbiAgICAgICAgaWYgKGUuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSkgcmV0dXJuXG4gICAgICAgIGUuZGF0YSA9IGRhdGFcbiAgICAgICAgdmFyIHJlc3VsdCA9IGNhbGxiYWNrLmFwcGx5KGVsZW1lbnQsIGUuX2FyZ3MgPT0gdW5kZWZpbmVkID8gW2VdIDogW2VdLmNvbmNhdChlLl9hcmdzKSlcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIGUucHJldmVudERlZmF1bHQoKSwgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgICBoYW5kbGVyLmkgPSBzZXQubGVuZ3RoXG4gICAgICBzZXQucHVzaChoYW5kbGVyKVxuICAgICAgaWYgKCdhZGRFdmVudExpc3RlbmVyJyBpbiBlbGVtZW50KVxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIocmVhbEV2ZW50KGhhbmRsZXIuZSksIGhhbmRsZXIucHJveHksIGV2ZW50Q2FwdHVyZShoYW5kbGVyLCBjYXB0dXJlKSlcbiAgICB9KVxuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZShlbGVtZW50LCBldmVudHMsIGZuLCBzZWxlY3RvciwgY2FwdHVyZSl7XG4gICAgdmFyIGlkID0gemlkKGVsZW1lbnQpXG4gICAgOyhldmVudHMgfHwgJycpLnNwbGl0KC9cXHMvKS5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGZpbmRIYW5kbGVycyhlbGVtZW50LCBldmVudCwgZm4sIHNlbGVjdG9yKS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpe1xuICAgICAgICBkZWxldGUgaGFuZGxlcnNbaWRdW2hhbmRsZXIuaV1cbiAgICAgIGlmICgncmVtb3ZlRXZlbnRMaXN0ZW5lcicgaW4gZWxlbWVudClcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHJlYWxFdmVudChoYW5kbGVyLmUpLCBoYW5kbGVyLnByb3h5LCBldmVudENhcHR1cmUoaGFuZGxlciwgY2FwdHVyZSkpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAkLmV2ZW50ID0geyBhZGQ6IGFkZCwgcmVtb3ZlOiByZW1vdmUgfVxuXG4gICQucHJveHkgPSBmdW5jdGlvbihmbiwgY29udGV4dCkge1xuICAgIHZhciBhcmdzID0gKDIgaW4gYXJndW1lbnRzKSAmJiBzbGljZS5jYWxsKGFyZ3VtZW50cywgMilcbiAgICBpZiAoaXNGdW5jdGlvbihmbikpIHtcbiAgICAgIHZhciBwcm94eUZuID0gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MgPyBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpIDogYXJndW1lbnRzKSB9XG4gICAgICBwcm94eUZuLl96aWQgPSB6aWQoZm4pXG4gICAgICByZXR1cm4gcHJveHlGblxuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcoY29udGV4dCkpIHtcbiAgICAgIGlmIChhcmdzKSB7XG4gICAgICAgIGFyZ3MudW5zaGlmdChmbltjb250ZXh0XSwgZm4pXG4gICAgICAgIHJldHVybiAkLnByb3h5LmFwcGx5KG51bGwsIGFyZ3MpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJC5wcm94eShmbltjb250ZXh0XSwgZm4pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJleHBlY3RlZCBmdW5jdGlvblwiKVxuICAgIH1cbiAgfVxuXG4gICQuZm4uYmluZCA9IGZ1bmN0aW9uKGV2ZW50LCBkYXRhLCBjYWxsYmFjayl7XG4gICAgcmV0dXJuIHRoaXMub24oZXZlbnQsIGRhdGEsIGNhbGxiYWNrKVxuICB9XG4gICQuZm4udW5iaW5kID0gZnVuY3Rpb24oZXZlbnQsIGNhbGxiYWNrKXtcbiAgICByZXR1cm4gdGhpcy5vZmYoZXZlbnQsIGNhbGxiYWNrKVxuICB9XG4gICQuZm4ub25lID0gZnVuY3Rpb24oZXZlbnQsIHNlbGVjdG9yLCBkYXRhLCBjYWxsYmFjayl7XG4gICAgcmV0dXJuIHRoaXMub24oZXZlbnQsIHNlbGVjdG9yLCBkYXRhLCBjYWxsYmFjaywgMSlcbiAgfVxuXG4gIHZhciByZXR1cm5UcnVlID0gZnVuY3Rpb24oKXtyZXR1cm4gdHJ1ZX0sXG4gICAgICByZXR1cm5GYWxzZSA9IGZ1bmN0aW9uKCl7cmV0dXJuIGZhbHNlfSxcbiAgICAgIGlnbm9yZVByb3BlcnRpZXMgPSAvXihbQS1aXXxyZXR1cm5WYWx1ZSR8bGF5ZXJbWFldJCkvLFxuICAgICAgZXZlbnRNZXRob2RzID0ge1xuICAgICAgICBwcmV2ZW50RGVmYXVsdDogJ2lzRGVmYXVsdFByZXZlbnRlZCcsXG4gICAgICAgIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjogJ2lzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkJyxcbiAgICAgICAgc3RvcFByb3BhZ2F0aW9uOiAnaXNQcm9wYWdhdGlvblN0b3BwZWQnXG4gICAgICB9XG5cbiAgZnVuY3Rpb24gY29tcGF0aWJsZShldmVudCwgc291cmNlKSB7XG4gICAgaWYgKHNvdXJjZSB8fCAhZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBzb3VyY2UgfHwgKHNvdXJjZSA9IGV2ZW50KVxuXG4gICAgICAkLmVhY2goZXZlbnRNZXRob2RzLCBmdW5jdGlvbihuYW1lLCBwcmVkaWNhdGUpIHtcbiAgICAgICAgdmFyIHNvdXJjZU1ldGhvZCA9IHNvdXJjZVtuYW1lXVxuICAgICAgICBldmVudFtuYW1lXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgdGhpc1twcmVkaWNhdGVdID0gcmV0dXJuVHJ1ZVxuICAgICAgICAgIHJldHVybiBzb3VyY2VNZXRob2QgJiYgc291cmNlTWV0aG9kLmFwcGx5KHNvdXJjZSwgYXJndW1lbnRzKVxuICAgICAgICB9XG4gICAgICAgIGV2ZW50W3ByZWRpY2F0ZV0gPSByZXR1cm5GYWxzZVxuICAgICAgfSlcblxuICAgICAgaWYgKHNvdXJjZS5kZWZhdWx0UHJldmVudGVkICE9PSB1bmRlZmluZWQgPyBzb3VyY2UuZGVmYXVsdFByZXZlbnRlZCA6XG4gICAgICAgICAgJ3JldHVyblZhbHVlJyBpbiBzb3VyY2UgPyBzb3VyY2UucmV0dXJuVmFsdWUgPT09IGZhbHNlIDpcbiAgICAgICAgICBzb3VyY2UuZ2V0UHJldmVudERlZmF1bHQgJiYgc291cmNlLmdldFByZXZlbnREZWZhdWx0KCkpXG4gICAgICAgIGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCA9IHJldHVyblRydWVcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcm94eShldmVudCkge1xuICAgIHZhciBrZXksIHByb3h5ID0geyBvcmlnaW5hbEV2ZW50OiBldmVudCB9XG4gICAgZm9yIChrZXkgaW4gZXZlbnQpXG4gICAgICBpZiAoIWlnbm9yZVByb3BlcnRpZXMudGVzdChrZXkpICYmIGV2ZW50W2tleV0gIT09IHVuZGVmaW5lZCkgcHJveHlba2V5XSA9IGV2ZW50W2tleV1cblxuICAgIHJldHVybiBjb21wYXRpYmxlKHByb3h5LCBldmVudClcbiAgfVxuXG4gICQuZm4uZGVsZWdhdGUgPSBmdW5jdGlvbihzZWxlY3RvciwgZXZlbnQsIGNhbGxiYWNrKXtcbiAgICByZXR1cm4gdGhpcy5vbihldmVudCwgc2VsZWN0b3IsIGNhbGxiYWNrKVxuICB9XG4gICQuZm4udW5kZWxlZ2F0ZSA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBldmVudCwgY2FsbGJhY2spe1xuICAgIHJldHVybiB0aGlzLm9mZihldmVudCwgc2VsZWN0b3IsIGNhbGxiYWNrKVxuICB9XG5cbiAgJC5mbi5saXZlID0gZnVuY3Rpb24oZXZlbnQsIGNhbGxiYWNrKXtcbiAgICAkKGRvY3VtZW50LmJvZHkpLmRlbGVnYXRlKHRoaXMuc2VsZWN0b3IsIGV2ZW50LCBjYWxsYmFjaylcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gICQuZm4uZGllID0gZnVuY3Rpb24oZXZlbnQsIGNhbGxiYWNrKXtcbiAgICAkKGRvY3VtZW50LmJvZHkpLnVuZGVsZWdhdGUodGhpcy5zZWxlY3RvciwgZXZlbnQsIGNhbGxiYWNrKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAkLmZuLm9uID0gZnVuY3Rpb24oZXZlbnQsIHNlbGVjdG9yLCBkYXRhLCBjYWxsYmFjaywgb25lKXtcbiAgICB2YXIgYXV0b1JlbW92ZSwgZGVsZWdhdG9yLCAkdGhpcyA9IHRoaXNcbiAgICBpZiAoZXZlbnQgJiYgIWlzU3RyaW5nKGV2ZW50KSkge1xuICAgICAgJC5lYWNoKGV2ZW50LCBmdW5jdGlvbih0eXBlLCBmbil7XG4gICAgICAgICR0aGlzLm9uKHR5cGUsIHNlbGVjdG9yLCBkYXRhLCBmbiwgb25lKVxuICAgICAgfSlcbiAgICAgIHJldHVybiAkdGhpc1xuICAgIH1cblxuICAgIGlmICghaXNTdHJpbmcoc2VsZWN0b3IpICYmICFpc0Z1bmN0aW9uKGNhbGxiYWNrKSAmJiBjYWxsYmFjayAhPT0gZmFsc2UpXG4gICAgICBjYWxsYmFjayA9IGRhdGEsIGRhdGEgPSBzZWxlY3Rvciwgc2VsZWN0b3IgPSB1bmRlZmluZWRcbiAgICBpZiAoaXNGdW5jdGlvbihkYXRhKSB8fCBkYXRhID09PSBmYWxzZSlcbiAgICAgIGNhbGxiYWNrID0gZGF0YSwgZGF0YSA9IHVuZGVmaW5lZFxuXG4gICAgaWYgKGNhbGxiYWNrID09PSBmYWxzZSkgY2FsbGJhY2sgPSByZXR1cm5GYWxzZVxuXG4gICAgcmV0dXJuICR0aGlzLmVhY2goZnVuY3Rpb24oXywgZWxlbWVudCl7XG4gICAgICBpZiAob25lKSBhdXRvUmVtb3ZlID0gZnVuY3Rpb24oZSl7XG4gICAgICAgIHJlbW92ZShlbGVtZW50LCBlLnR5cGUsIGNhbGxiYWNrKVxuICAgICAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZWN0b3IpIGRlbGVnYXRvciA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICB2YXIgZXZ0LCBtYXRjaCA9ICQoZS50YXJnZXQpLmNsb3Nlc3Qoc2VsZWN0b3IsIGVsZW1lbnQpLmdldCgwKVxuICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2ggIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICBldnQgPSAkLmV4dGVuZChjcmVhdGVQcm94eShlKSwge2N1cnJlbnRUYXJnZXQ6IG1hdGNoLCBsaXZlRmlyZWQ6IGVsZW1lbnR9KVxuICAgICAgICAgIHJldHVybiAoYXV0b1JlbW92ZSB8fCBjYWxsYmFjaykuYXBwbHkobWF0Y2gsIFtldnRdLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGFkZChlbGVtZW50LCBldmVudCwgY2FsbGJhY2ssIGRhdGEsIHNlbGVjdG9yLCBkZWxlZ2F0b3IgfHwgYXV0b1JlbW92ZSlcbiAgICB9KVxuICB9XG4gICQuZm4ub2ZmID0gZnVuY3Rpb24oZXZlbnQsIHNlbGVjdG9yLCBjYWxsYmFjayl7XG4gICAgdmFyICR0aGlzID0gdGhpc1xuICAgIGlmIChldmVudCAmJiAhaXNTdHJpbmcoZXZlbnQpKSB7XG4gICAgICAkLmVhY2goZXZlbnQsIGZ1bmN0aW9uKHR5cGUsIGZuKXtcbiAgICAgICAgJHRoaXMub2ZmKHR5cGUsIHNlbGVjdG9yLCBmbilcbiAgICAgIH0pXG4gICAgICByZXR1cm4gJHRoaXNcbiAgICB9XG5cbiAgICBpZiAoIWlzU3RyaW5nKHNlbGVjdG9yKSAmJiAhaXNGdW5jdGlvbihjYWxsYmFjaykgJiYgY2FsbGJhY2sgIT09IGZhbHNlKVxuICAgICAgY2FsbGJhY2sgPSBzZWxlY3Rvciwgc2VsZWN0b3IgPSB1bmRlZmluZWRcblxuICAgIGlmIChjYWxsYmFjayA9PT0gZmFsc2UpIGNhbGxiYWNrID0gcmV0dXJuRmFsc2VcblxuICAgIHJldHVybiAkdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICByZW1vdmUodGhpcywgZXZlbnQsIGNhbGxiYWNrLCBzZWxlY3RvcilcbiAgICB9KVxuICB9XG5cbiAgJC5mbi50cmlnZ2VyID0gZnVuY3Rpb24oZXZlbnQsIGFyZ3Mpe1xuICAgIGV2ZW50ID0gKGlzU3RyaW5nKGV2ZW50KSB8fCAkLmlzUGxhaW5PYmplY3QoZXZlbnQpKSA/ICQuRXZlbnQoZXZlbnQpIDogY29tcGF0aWJsZShldmVudClcbiAgICBldmVudC5fYXJncyA9IGFyZ3NcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAvLyBoYW5kbGUgZm9jdXMoKSwgYmx1cigpIGJ5IGNhbGxpbmcgdGhlbSBkaXJlY3RseVxuICAgICAgaWYgKGV2ZW50LnR5cGUgaW4gZm9jdXMgJiYgdHlwZW9mIHRoaXNbZXZlbnQudHlwZV0gPT0gXCJmdW5jdGlvblwiKSB0aGlzW2V2ZW50LnR5cGVdKClcbiAgICAgIC8vIGl0ZW1zIGluIHRoZSBjb2xsZWN0aW9uIG1pZ2h0IG5vdCBiZSBET00gZWxlbWVudHNcbiAgICAgIGVsc2UgaWYgKCdkaXNwYXRjaEV2ZW50JyBpbiB0aGlzKSB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICBlbHNlICQodGhpcykudHJpZ2dlckhhbmRsZXIoZXZlbnQsIGFyZ3MpXG4gICAgfSlcbiAgfVxuXG4gIC8vIHRyaWdnZXJzIGV2ZW50IGhhbmRsZXJzIG9uIGN1cnJlbnQgZWxlbWVudCBqdXN0IGFzIGlmIGFuIGV2ZW50IG9jY3VycmVkLFxuICAvLyBkb2Vzbid0IHRyaWdnZXIgYW4gYWN0dWFsIGV2ZW50LCBkb2Vzbid0IGJ1YmJsZVxuICAkLmZuLnRyaWdnZXJIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQsIGFyZ3Mpe1xuICAgIHZhciBlLCByZXN1bHRcbiAgICB0aGlzLmVhY2goZnVuY3Rpb24oaSwgZWxlbWVudCl7XG4gICAgICBlID0gY3JlYXRlUHJveHkoaXNTdHJpbmcoZXZlbnQpID8gJC5FdmVudChldmVudCkgOiBldmVudClcbiAgICAgIGUuX2FyZ3MgPSBhcmdzXG4gICAgICBlLnRhcmdldCA9IGVsZW1lbnRcbiAgICAgICQuZWFjaChmaW5kSGFuZGxlcnMoZWxlbWVudCwgZXZlbnQudHlwZSB8fCBldmVudCksIGZ1bmN0aW9uKGksIGhhbmRsZXIpe1xuICAgICAgICByZXN1bHQgPSBoYW5kbGVyLnByb3h5KGUpXG4gICAgICAgIGlmIChlLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpIHJldHVybiBmYWxzZVxuICAgICAgfSlcbiAgICB9KVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIC8vIHNob3J0Y3V0IG1ldGhvZHMgZm9yIGAuYmluZChldmVudCwgZm4pYCBmb3IgZWFjaCBldmVudCB0eXBlXG4gIDsoJ2ZvY3VzaW4gZm9jdXNvdXQgZm9jdXMgYmx1ciBsb2FkIHJlc2l6ZSBzY3JvbGwgdW5sb2FkIGNsaWNrIGRibGNsaWNrICcrXG4gICdtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSAnK1xuICAnY2hhbmdlIHNlbGVjdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGVycm9yJykuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgJC5mbltldmVudF0gPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgcmV0dXJuICgwIGluIGFyZ3VtZW50cykgP1xuICAgICAgICB0aGlzLmJpbmQoZXZlbnQsIGNhbGxiYWNrKSA6XG4gICAgICAgIHRoaXMudHJpZ2dlcihldmVudClcbiAgICB9XG4gIH0pXG5cbiAgJC5FdmVudCA9IGZ1bmN0aW9uKHR5cGUsIHByb3BzKSB7XG4gICAgaWYgKCFpc1N0cmluZyh0eXBlKSkgcHJvcHMgPSB0eXBlLCB0eXBlID0gcHJvcHMudHlwZVxuICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KHNwZWNpYWxFdmVudHNbdHlwZV0gfHwgJ0V2ZW50cycpLCBidWJibGVzID0gdHJ1ZVxuICAgIGlmIChwcm9wcykgZm9yICh2YXIgbmFtZSBpbiBwcm9wcykgKG5hbWUgPT0gJ2J1YmJsZXMnKSA/IChidWJibGVzID0gISFwcm9wc1tuYW1lXSkgOiAoZXZlbnRbbmFtZV0gPSBwcm9wc1tuYW1lXSlcbiAgICBldmVudC5pbml0RXZlbnQodHlwZSwgYnViYmxlcywgdHJ1ZSlcbiAgICByZXR1cm4gY29tcGF0aWJsZShldmVudClcbiAgfVxuXG59KShaZXB0bylcblxuOyhmdW5jdGlvbigkKXtcbiAgdmFyIGpzb25wSUQgPSAwLFxuICAgICAgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQsXG4gICAgICBrZXksXG4gICAgICBuYW1lLFxuICAgICAgcnNjcmlwdCA9IC88c2NyaXB0XFxiW148XSooPzooPyE8XFwvc2NyaXB0Pik8W148XSopKjxcXC9zY3JpcHQ+L2dpLFxuICAgICAgc2NyaXB0VHlwZVJFID0gL14oPzp0ZXh0fGFwcGxpY2F0aW9uKVxcL2phdmFzY3JpcHQvaSxcbiAgICAgIHhtbFR5cGVSRSA9IC9eKD86dGV4dHxhcHBsaWNhdGlvbilcXC94bWwvaSxcbiAgICAgIGpzb25UeXBlID0gJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgaHRtbFR5cGUgPSAndGV4dC9odG1sJyxcbiAgICAgIGJsYW5rUkUgPSAvXlxccyokLyxcbiAgICAgIG9yaWdpbkFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuXG4gIG9yaWdpbkFuY2hvci5ocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWZcblxuICAvLyB0cmlnZ2VyIGEgY3VzdG9tIGV2ZW50IGFuZCByZXR1cm4gZmFsc2UgaWYgaXQgd2FzIGNhbmNlbGxlZFxuICBmdW5jdGlvbiB0cmlnZ2VyQW5kUmV0dXJuKGNvbnRleHQsIGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIHZhciBldmVudCA9ICQuRXZlbnQoZXZlbnROYW1lKVxuICAgICQoY29udGV4dCkudHJpZ2dlcihldmVudCwgZGF0YSlcbiAgICByZXR1cm4gIWV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpXG4gIH1cblxuICAvLyB0cmlnZ2VyIGFuIEFqYXggXCJnbG9iYWxcIiBldmVudFxuICBmdW5jdGlvbiB0cmlnZ2VyR2xvYmFsKHNldHRpbmdzLCBjb250ZXh0LCBldmVudE5hbWUsIGRhdGEpIHtcbiAgICBpZiAoc2V0dGluZ3MuZ2xvYmFsKSByZXR1cm4gdHJpZ2dlckFuZFJldHVybihjb250ZXh0IHx8IGRvY3VtZW50LCBldmVudE5hbWUsIGRhdGEpXG4gIH1cblxuICAvLyBOdW1iZXIgb2YgYWN0aXZlIEFqYXggcmVxdWVzdHNcbiAgJC5hY3RpdmUgPSAwXG5cbiAgZnVuY3Rpb24gYWpheFN0YXJ0KHNldHRpbmdzKSB7XG4gICAgaWYgKHNldHRpbmdzLmdsb2JhbCAmJiAkLmFjdGl2ZSsrID09PSAwKSB0cmlnZ2VyR2xvYmFsKHNldHRpbmdzLCBudWxsLCAnYWpheFN0YXJ0JylcbiAgfVxuICBmdW5jdGlvbiBhamF4U3RvcChzZXR0aW5ncykge1xuICAgIGlmIChzZXR0aW5ncy5nbG9iYWwgJiYgISgtLSQuYWN0aXZlKSkgdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgbnVsbCwgJ2FqYXhTdG9wJylcbiAgfVxuXG4gIC8vIHRyaWdnZXJzIGFuIGV4dHJhIGdsb2JhbCBldmVudCBcImFqYXhCZWZvcmVTZW5kXCIgdGhhdCdzIGxpa2UgXCJhamF4U2VuZFwiIGJ1dCBjYW5jZWxhYmxlXG4gIGZ1bmN0aW9uIGFqYXhCZWZvcmVTZW5kKHhociwgc2V0dGluZ3MpIHtcbiAgICB2YXIgY29udGV4dCA9IHNldHRpbmdzLmNvbnRleHRcbiAgICBpZiAoc2V0dGluZ3MuYmVmb3JlU2VuZC5jYWxsKGNvbnRleHQsIHhociwgc2V0dGluZ3MpID09PSBmYWxzZSB8fFxuICAgICAgICB0cmlnZ2VyR2xvYmFsKHNldHRpbmdzLCBjb250ZXh0LCAnYWpheEJlZm9yZVNlbmQnLCBbeGhyLCBzZXR0aW5nc10pID09PSBmYWxzZSlcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgY29udGV4dCwgJ2FqYXhTZW5kJywgW3hociwgc2V0dGluZ3NdKVxuICB9XG4gIGZ1bmN0aW9uIGFqYXhTdWNjZXNzKGRhdGEsIHhociwgc2V0dGluZ3MsIGRlZmVycmVkKSB7XG4gICAgdmFyIGNvbnRleHQgPSBzZXR0aW5ncy5jb250ZXh0LCBzdGF0dXMgPSAnc3VjY2VzcydcbiAgICBzZXR0aW5ncy5zdWNjZXNzLmNhbGwoY29udGV4dCwgZGF0YSwgc3RhdHVzLCB4aHIpXG4gICAgaWYgKGRlZmVycmVkKSBkZWZlcnJlZC5yZXNvbHZlV2l0aChjb250ZXh0LCBbZGF0YSwgc3RhdHVzLCB4aHJdKVxuICAgIHRyaWdnZXJHbG9iYWwoc2V0dGluZ3MsIGNvbnRleHQsICdhamF4U3VjY2VzcycsIFt4aHIsIHNldHRpbmdzLCBkYXRhXSlcbiAgICBhamF4Q29tcGxldGUoc3RhdHVzLCB4aHIsIHNldHRpbmdzKVxuICB9XG4gIC8vIHR5cGU6IFwidGltZW91dFwiLCBcImVycm9yXCIsIFwiYWJvcnRcIiwgXCJwYXJzZXJlcnJvclwiXG4gIGZ1bmN0aW9uIGFqYXhFcnJvcihlcnJvciwgdHlwZSwgeGhyLCBzZXR0aW5ncywgZGVmZXJyZWQpIHtcbiAgICB2YXIgY29udGV4dCA9IHNldHRpbmdzLmNvbnRleHRcbiAgICBzZXR0aW5ncy5lcnJvci5jYWxsKGNvbnRleHQsIHhociwgdHlwZSwgZXJyb3IpXG4gICAgaWYgKGRlZmVycmVkKSBkZWZlcnJlZC5yZWplY3RXaXRoKGNvbnRleHQsIFt4aHIsIHR5cGUsIGVycm9yXSlcbiAgICB0cmlnZ2VyR2xvYmFsKHNldHRpbmdzLCBjb250ZXh0LCAnYWpheEVycm9yJywgW3hociwgc2V0dGluZ3MsIGVycm9yIHx8IHR5cGVdKVxuICAgIGFqYXhDb21wbGV0ZSh0eXBlLCB4aHIsIHNldHRpbmdzKVxuICB9XG4gIC8vIHN0YXR1czogXCJzdWNjZXNzXCIsIFwibm90bW9kaWZpZWRcIiwgXCJlcnJvclwiLCBcInRpbWVvdXRcIiwgXCJhYm9ydFwiLCBcInBhcnNlcmVycm9yXCJcbiAgZnVuY3Rpb24gYWpheENvbXBsZXRlKHN0YXR1cywgeGhyLCBzZXR0aW5ncykge1xuICAgIHZhciBjb250ZXh0ID0gc2V0dGluZ3MuY29udGV4dFxuICAgIHNldHRpbmdzLmNvbXBsZXRlLmNhbGwoY29udGV4dCwgeGhyLCBzdGF0dXMpXG4gICAgdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgY29udGV4dCwgJ2FqYXhDb21wbGV0ZScsIFt4aHIsIHNldHRpbmdzXSlcbiAgICBhamF4U3RvcChzZXR0aW5ncylcbiAgfVxuXG4gIC8vIEVtcHR5IGZ1bmN0aW9uLCB1c2VkIGFzIGRlZmF1bHQgY2FsbGJhY2tcbiAgZnVuY3Rpb24gZW1wdHkoKSB7fVxuXG4gICQuYWpheEpTT05QID0gZnVuY3Rpb24ob3B0aW9ucywgZGVmZXJyZWQpe1xuICAgIGlmICghKCd0eXBlJyBpbiBvcHRpb25zKSkgcmV0dXJuICQuYWpheChvcHRpb25zKVxuXG4gICAgdmFyIF9jYWxsYmFja05hbWUgPSBvcHRpb25zLmpzb25wQ2FsbGJhY2ssXG4gICAgICBjYWxsYmFja05hbWUgPSAoJC5pc0Z1bmN0aW9uKF9jYWxsYmFja05hbWUpID9cbiAgICAgICAgX2NhbGxiYWNrTmFtZSgpIDogX2NhbGxiYWNrTmFtZSkgfHwgKCdqc29ucCcgKyAoKytqc29ucElEKSksXG4gICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSxcbiAgICAgIG9yaWdpbmFsQ2FsbGJhY2sgPSB3aW5kb3dbY2FsbGJhY2tOYW1lXSxcbiAgICAgIHJlc3BvbnNlRGF0YSxcbiAgICAgIGFib3J0ID0gZnVuY3Rpb24oZXJyb3JUeXBlKSB7XG4gICAgICAgICQoc2NyaXB0KS50cmlnZ2VySGFuZGxlcignZXJyb3InLCBlcnJvclR5cGUgfHwgJ2Fib3J0JylcbiAgICAgIH0sXG4gICAgICB4aHIgPSB7IGFib3J0OiBhYm9ydCB9LCBhYm9ydFRpbWVvdXRcblxuICAgIGlmIChkZWZlcnJlZCkgZGVmZXJyZWQucHJvbWlzZSh4aHIpXG5cbiAgICAkKHNjcmlwdCkub24oJ2xvYWQgZXJyb3InLCBmdW5jdGlvbihlLCBlcnJvclR5cGUpe1xuICAgICAgY2xlYXJUaW1lb3V0KGFib3J0VGltZW91dClcbiAgICAgICQoc2NyaXB0KS5vZmYoKS5yZW1vdmUoKVxuXG4gICAgICBpZiAoZS50eXBlID09ICdlcnJvcicgfHwgIXJlc3BvbnNlRGF0YSkge1xuICAgICAgICBhamF4RXJyb3IobnVsbCwgZXJyb3JUeXBlIHx8ICdlcnJvcicsIHhociwgb3B0aW9ucywgZGVmZXJyZWQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhamF4U3VjY2VzcyhyZXNwb25zZURhdGFbMF0sIHhociwgb3B0aW9ucywgZGVmZXJyZWQpXG4gICAgICB9XG5cbiAgICAgIHdpbmRvd1tjYWxsYmFja05hbWVdID0gb3JpZ2luYWxDYWxsYmFja1xuICAgICAgaWYgKHJlc3BvbnNlRGF0YSAmJiAkLmlzRnVuY3Rpb24ob3JpZ2luYWxDYWxsYmFjaykpXG4gICAgICAgIG9yaWdpbmFsQ2FsbGJhY2socmVzcG9uc2VEYXRhWzBdKVxuXG4gICAgICBvcmlnaW5hbENhbGxiYWNrID0gcmVzcG9uc2VEYXRhID0gdW5kZWZpbmVkXG4gICAgfSlcblxuICAgIGlmIChhamF4QmVmb3JlU2VuZCh4aHIsIG9wdGlvbnMpID09PSBmYWxzZSkge1xuICAgICAgYWJvcnQoJ2Fib3J0JylcbiAgICAgIHJldHVybiB4aHJcbiAgICB9XG5cbiAgICB3aW5kb3dbY2FsbGJhY2tOYW1lXSA9IGZ1bmN0aW9uKCl7XG4gICAgICByZXNwb25zZURhdGEgPSBhcmd1bWVudHNcbiAgICB9XG5cbiAgICBzY3JpcHQuc3JjID0gb3B0aW9ucy51cmwucmVwbGFjZSgvXFw/KC4rKT1cXD8vLCAnPyQxPScgKyBjYWxsYmFja05hbWUpXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpXG5cbiAgICBpZiAob3B0aW9ucy50aW1lb3V0ID4gMCkgYWJvcnRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgYWJvcnQoJ3RpbWVvdXQnKVxuICAgIH0sIG9wdGlvbnMudGltZW91dClcblxuICAgIHJldHVybiB4aHJcbiAgfVxuXG4gICQuYWpheFNldHRpbmdzID0ge1xuICAgIC8vIERlZmF1bHQgdHlwZSBvZiByZXF1ZXN0XG4gICAgdHlwZTogJ0dFVCcsXG4gICAgLy8gQ2FsbGJhY2sgdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgcmVxdWVzdFxuICAgIGJlZm9yZVNlbmQ6IGVtcHR5LFxuICAgIC8vIENhbGxiYWNrIHRoYXQgaXMgZXhlY3V0ZWQgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZHNcbiAgICBzdWNjZXNzOiBlbXB0eSxcbiAgICAvLyBDYWxsYmFjayB0aGF0IGlzIGV4ZWN1dGVkIHRoZSB0aGUgc2VydmVyIGRyb3BzIGVycm9yXG4gICAgZXJyb3I6IGVtcHR5LFxuICAgIC8vIENhbGxiYWNrIHRoYXQgaXMgZXhlY3V0ZWQgb24gcmVxdWVzdCBjb21wbGV0ZSAoYm90aDogZXJyb3IgYW5kIHN1Y2Nlc3MpXG4gICAgY29tcGxldGU6IGVtcHR5LFxuICAgIC8vIFRoZSBjb250ZXh0IGZvciB0aGUgY2FsbGJhY2tzXG4gICAgY29udGV4dDogbnVsbCxcbiAgICAvLyBXaGV0aGVyIHRvIHRyaWdnZXIgXCJnbG9iYWxcIiBBamF4IGV2ZW50c1xuICAgIGdsb2JhbDogdHJ1ZSxcbiAgICAvLyBUcmFuc3BvcnRcbiAgICB4aHI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KClcbiAgICB9LFxuICAgIC8vIE1JTUUgdHlwZXMgbWFwcGluZ1xuICAgIC8vIElJUyByZXR1cm5zIEphdmFzY3JpcHQgYXMgXCJhcHBsaWNhdGlvbi94LWphdmFzY3JpcHRcIlxuICAgIGFjY2VwdHM6IHtcbiAgICAgIHNjcmlwdDogJ3RleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24veC1qYXZhc2NyaXB0JyxcbiAgICAgIGpzb246ICAganNvblR5cGUsXG4gICAgICB4bWw6ICAgICdhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sJyxcbiAgICAgIGh0bWw6ICAgaHRtbFR5cGUsXG4gICAgICB0ZXh0OiAgICd0ZXh0L3BsYWluJ1xuICAgIH0sXG4gICAgLy8gV2hldGhlciB0aGUgcmVxdWVzdCBpcyB0byBhbm90aGVyIGRvbWFpblxuICAgIGNyb3NzRG9tYWluOiBmYWxzZSxcbiAgICAvLyBEZWZhdWx0IHRpbWVvdXRcbiAgICB0aW1lb3V0OiAwLFxuICAgIC8vIFdoZXRoZXIgZGF0YSBzaG91bGQgYmUgc2VyaWFsaXplZCB0byBzdHJpbmdcbiAgICBwcm9jZXNzRGF0YTogdHJ1ZSxcbiAgICAvLyBXaGV0aGVyIHRoZSBicm93c2VyIHNob3VsZCBiZSBhbGxvd2VkIHRvIGNhY2hlIEdFVCByZXNwb25zZXNcbiAgICBjYWNoZTogdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gbWltZVRvRGF0YVR5cGUobWltZSkge1xuICAgIGlmIChtaW1lKSBtaW1lID0gbWltZS5zcGxpdCgnOycsIDIpWzBdXG4gICAgcmV0dXJuIG1pbWUgJiYgKCBtaW1lID09IGh0bWxUeXBlID8gJ2h0bWwnIDpcbiAgICAgIG1pbWUgPT0ganNvblR5cGUgPyAnanNvbicgOlxuICAgICAgc2NyaXB0VHlwZVJFLnRlc3QobWltZSkgPyAnc2NyaXB0JyA6XG4gICAgICB4bWxUeXBlUkUudGVzdChtaW1lKSAmJiAneG1sJyApIHx8ICd0ZXh0J1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwZW5kUXVlcnkodXJsLCBxdWVyeSkge1xuICAgIGlmIChxdWVyeSA9PSAnJykgcmV0dXJuIHVybFxuICAgIHJldHVybiAodXJsICsgJyYnICsgcXVlcnkpLnJlcGxhY2UoL1smP117MSwyfS8sICc/JylcbiAgfVxuXG4gIC8vIHNlcmlhbGl6ZSBwYXlsb2FkIGFuZCBhcHBlbmQgaXQgdG8gdGhlIFVSTCBmb3IgR0VUIHJlcXVlc3RzXG4gIGZ1bmN0aW9uIHNlcmlhbGl6ZURhdGEob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLnByb2Nlc3NEYXRhICYmIG9wdGlvbnMuZGF0YSAmJiAkLnR5cGUob3B0aW9ucy5kYXRhKSAhPSBcInN0cmluZ1wiKVxuICAgICAgb3B0aW9ucy5kYXRhID0gJC5wYXJhbShvcHRpb25zLmRhdGEsIG9wdGlvbnMudHJhZGl0aW9uYWwpXG4gICAgaWYgKG9wdGlvbnMuZGF0YSAmJiAoIW9wdGlvbnMudHlwZSB8fCBvcHRpb25zLnR5cGUudG9VcHBlckNhc2UoKSA9PSAnR0VUJykpXG4gICAgICBvcHRpb25zLnVybCA9IGFwcGVuZFF1ZXJ5KG9wdGlvbnMudXJsLCBvcHRpb25zLmRhdGEpLCBvcHRpb25zLmRhdGEgPSB1bmRlZmluZWRcbiAgfVxuXG4gICQuYWpheCA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICAgIHZhciBzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBvcHRpb25zIHx8IHt9KSxcbiAgICAgICAgZGVmZXJyZWQgPSAkLkRlZmVycmVkICYmICQuRGVmZXJyZWQoKSxcbiAgICAgICAgdXJsQW5jaG9yXG4gICAgZm9yIChrZXkgaW4gJC5hamF4U2V0dGluZ3MpIGlmIChzZXR0aW5nc1trZXldID09PSB1bmRlZmluZWQpIHNldHRpbmdzW2tleV0gPSAkLmFqYXhTZXR0aW5nc1trZXldXG5cbiAgICBhamF4U3RhcnQoc2V0dGluZ3MpXG5cbiAgICBpZiAoIXNldHRpbmdzLmNyb3NzRG9tYWluKSB7XG4gICAgICB1cmxBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgIHVybEFuY2hvci5ocmVmID0gc2V0dGluZ3MudXJsXG4gICAgICB1cmxBbmNob3IuaHJlZiA9IHVybEFuY2hvci5ocmVmXG4gICAgICBzZXR0aW5ncy5jcm9zc0RvbWFpbiA9IChvcmlnaW5BbmNob3IucHJvdG9jb2wgKyAnLy8nICsgb3JpZ2luQW5jaG9yLmhvc3QpICE9PSAodXJsQW5jaG9yLnByb3RvY29sICsgJy8vJyArIHVybEFuY2hvci5ob3N0KVxuICAgIH1cblxuICAgIGlmICghc2V0dGluZ3MudXJsKSBzZXR0aW5ncy51cmwgPSB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKVxuICAgIHNlcmlhbGl6ZURhdGEoc2V0dGluZ3MpXG5cbiAgICB2YXIgZGF0YVR5cGUgPSBzZXR0aW5ncy5kYXRhVHlwZSwgaGFzUGxhY2Vob2xkZXIgPSAvXFw/Lis9XFw/Ly50ZXN0KHNldHRpbmdzLnVybClcbiAgICBpZiAoaGFzUGxhY2Vob2xkZXIpIGRhdGFUeXBlID0gJ2pzb25wJ1xuXG4gICAgaWYgKHNldHRpbmdzLmNhY2hlID09PSBmYWxzZSB8fCAoXG4gICAgICAgICAoIW9wdGlvbnMgfHwgb3B0aW9ucy5jYWNoZSAhPT0gdHJ1ZSkgJiZcbiAgICAgICAgICgnc2NyaXB0JyA9PSBkYXRhVHlwZSB8fCAnanNvbnAnID09IGRhdGFUeXBlKVxuICAgICAgICApKVxuICAgICAgc2V0dGluZ3MudXJsID0gYXBwZW5kUXVlcnkoc2V0dGluZ3MudXJsLCAnXz0nICsgRGF0ZS5ub3coKSlcblxuICAgIGlmICgnanNvbnAnID09IGRhdGFUeXBlKSB7XG4gICAgICBpZiAoIWhhc1BsYWNlaG9sZGVyKVxuICAgICAgICBzZXR0aW5ncy51cmwgPSBhcHBlbmRRdWVyeShzZXR0aW5ncy51cmwsXG4gICAgICAgICAgc2V0dGluZ3MuanNvbnAgPyAoc2V0dGluZ3MuanNvbnAgKyAnPT8nKSA6IHNldHRpbmdzLmpzb25wID09PSBmYWxzZSA/ICcnIDogJ2NhbGxiYWNrPT8nKVxuICAgICAgcmV0dXJuICQuYWpheEpTT05QKHNldHRpbmdzLCBkZWZlcnJlZClcbiAgICB9XG5cbiAgICB2YXIgbWltZSA9IHNldHRpbmdzLmFjY2VwdHNbZGF0YVR5cGVdLFxuICAgICAgICBoZWFkZXJzID0geyB9LFxuICAgICAgICBzZXRIZWFkZXIgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkgeyBoZWFkZXJzW25hbWUudG9Mb3dlckNhc2UoKV0gPSBbbmFtZSwgdmFsdWVdIH0sXG4gICAgICAgIHByb3RvY29sID0gL14oW1xcdy1dKzopXFwvXFwvLy50ZXN0KHNldHRpbmdzLnVybCkgPyBSZWdFeHAuJDEgOiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wsXG4gICAgICAgIHhociA9IHNldHRpbmdzLnhocigpLFxuICAgICAgICBuYXRpdmVTZXRIZWFkZXIgPSB4aHIuc2V0UmVxdWVzdEhlYWRlcixcbiAgICAgICAgYWJvcnRUaW1lb3V0XG5cbiAgICBpZiAoZGVmZXJyZWQpIGRlZmVycmVkLnByb21pc2UoeGhyKVxuXG4gICAgaWYgKCFzZXR0aW5ncy5jcm9zc0RvbWFpbikgc2V0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0JylcbiAgICBzZXRIZWFkZXIoJ0FjY2VwdCcsIG1pbWUgfHwgJyovKicpXG4gICAgaWYgKG1pbWUgPSBzZXR0aW5ncy5taW1lVHlwZSB8fCBtaW1lKSB7XG4gICAgICBpZiAobWltZS5pbmRleE9mKCcsJykgPiAtMSkgbWltZSA9IG1pbWUuc3BsaXQoJywnLCAyKVswXVxuICAgICAgeGhyLm92ZXJyaWRlTWltZVR5cGUgJiYgeGhyLm92ZXJyaWRlTWltZVR5cGUobWltZSlcbiAgICB9XG4gICAgaWYgKHNldHRpbmdzLmNvbnRlbnRUeXBlIHx8IChzZXR0aW5ncy5jb250ZW50VHlwZSAhPT0gZmFsc2UgJiYgc2V0dGluZ3MuZGF0YSAmJiBzZXR0aW5ncy50eXBlLnRvVXBwZXJDYXNlKCkgIT0gJ0dFVCcpKVxuICAgICAgc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCBzZXR0aW5ncy5jb250ZW50VHlwZSB8fCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJylcblxuICAgIGlmIChzZXR0aW5ncy5oZWFkZXJzKSBmb3IgKG5hbWUgaW4gc2V0dGluZ3MuaGVhZGVycykgc2V0SGVhZGVyKG5hbWUsIHNldHRpbmdzLmhlYWRlcnNbbmFtZV0pXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIgPSBzZXRIZWFkZXJcblxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGVtcHR5XG4gICAgICAgIGNsZWFyVGltZW91dChhYm9ydFRpbWVvdXQpXG4gICAgICAgIHZhciByZXN1bHQsIGVycm9yID0gZmFsc2VcbiAgICAgICAgaWYgKCh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB8fCB4aHIuc3RhdHVzID09IDMwNCB8fCAoeGhyLnN0YXR1cyA9PSAwICYmIHByb3RvY29sID09ICdmaWxlOicpKSB7XG4gICAgICAgICAgZGF0YVR5cGUgPSBkYXRhVHlwZSB8fCBtaW1lVG9EYXRhVHlwZShzZXR0aW5ncy5taW1lVHlwZSB8fCB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ2NvbnRlbnQtdHlwZScpKVxuICAgICAgICAgIHJlc3VsdCA9IHhoci5yZXNwb25zZVRleHRcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBodHRwOi8vcGVyZmVjdGlvbmtpbGxzLmNvbS9nbG9iYWwtZXZhbC13aGF0LWFyZS10aGUtb3B0aW9ucy9cbiAgICAgICAgICAgIGlmIChkYXRhVHlwZSA9PSAnc2NyaXB0JykgICAgKDEsZXZhbCkocmVzdWx0KVxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YVR5cGUgPT0gJ3htbCcpICByZXN1bHQgPSB4aHIucmVzcG9uc2VYTUxcbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGFUeXBlID09ICdqc29uJykgcmVzdWx0ID0gYmxhbmtSRS50ZXN0KHJlc3VsdCkgPyBudWxsIDogJC5wYXJzZUpTT04ocmVzdWx0KVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgZXJyb3IgPSBlIH1cblxuICAgICAgICAgIGlmIChlcnJvcikgYWpheEVycm9yKGVycm9yLCAncGFyc2VyZXJyb3InLCB4aHIsIHNldHRpbmdzLCBkZWZlcnJlZClcbiAgICAgICAgICBlbHNlIGFqYXhTdWNjZXNzKHJlc3VsdCwgeGhyLCBzZXR0aW5ncywgZGVmZXJyZWQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWpheEVycm9yKHhoci5zdGF0dXNUZXh0IHx8IG51bGwsIHhoci5zdGF0dXMgPyAnZXJyb3InIDogJ2Fib3J0JywgeGhyLCBzZXR0aW5ncywgZGVmZXJyZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWpheEJlZm9yZVNlbmQoeGhyLCBzZXR0aW5ncykgPT09IGZhbHNlKSB7XG4gICAgICB4aHIuYWJvcnQoKVxuICAgICAgYWpheEVycm9yKG51bGwsICdhYm9ydCcsIHhociwgc2V0dGluZ3MsIGRlZmVycmVkKVxuICAgICAgcmV0dXJuIHhoclxuICAgIH1cblxuICAgIGlmIChzZXR0aW5ncy54aHJGaWVsZHMpIGZvciAobmFtZSBpbiBzZXR0aW5ncy54aHJGaWVsZHMpIHhocltuYW1lXSA9IHNldHRpbmdzLnhockZpZWxkc1tuYW1lXVxuXG4gICAgdmFyIGFzeW5jID0gJ2FzeW5jJyBpbiBzZXR0aW5ncyA/IHNldHRpbmdzLmFzeW5jIDogdHJ1ZVxuICAgIHhoci5vcGVuKHNldHRpbmdzLnR5cGUsIHNldHRpbmdzLnVybCwgYXN5bmMsIHNldHRpbmdzLnVzZXJuYW1lLCBzZXR0aW5ncy5wYXNzd29yZClcblxuICAgIGZvciAobmFtZSBpbiBoZWFkZXJzKSBuYXRpdmVTZXRIZWFkZXIuYXBwbHkoeGhyLCBoZWFkZXJzW25hbWVdKVxuXG4gICAgaWYgKHNldHRpbmdzLnRpbWVvdXQgPiAwKSBhYm9ydFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBlbXB0eVxuICAgICAgICB4aHIuYWJvcnQoKVxuICAgICAgICBhamF4RXJyb3IobnVsbCwgJ3RpbWVvdXQnLCB4aHIsIHNldHRpbmdzLCBkZWZlcnJlZClcbiAgICAgIH0sIHNldHRpbmdzLnRpbWVvdXQpXG5cbiAgICAvLyBhdm9pZCBzZW5kaW5nIGVtcHR5IHN0cmluZyAoIzMxOSlcbiAgICB4aHIuc2VuZChzZXR0aW5ncy5kYXRhID8gc2V0dGluZ3MuZGF0YSA6IG51bGwpXG4gICAgcmV0dXJuIHhoclxuICB9XG5cbiAgLy8gaGFuZGxlIG9wdGlvbmFsIGRhdGEvc3VjY2VzcyBhcmd1bWVudHNcbiAgZnVuY3Rpb24gcGFyc2VBcmd1bWVudHModXJsLCBkYXRhLCBzdWNjZXNzLCBkYXRhVHlwZSkge1xuICAgIGlmICgkLmlzRnVuY3Rpb24oZGF0YSkpIGRhdGFUeXBlID0gc3VjY2Vzcywgc3VjY2VzcyA9IGRhdGEsIGRhdGEgPSB1bmRlZmluZWRcbiAgICBpZiAoISQuaXNGdW5jdGlvbihzdWNjZXNzKSkgZGF0YVR5cGUgPSBzdWNjZXNzLCBzdWNjZXNzID0gdW5kZWZpbmVkXG4gICAgcmV0dXJuIHtcbiAgICAgIHVybDogdXJsXG4gICAgLCBkYXRhOiBkYXRhXG4gICAgLCBzdWNjZXNzOiBzdWNjZXNzXG4gICAgLCBkYXRhVHlwZTogZGF0YVR5cGVcbiAgICB9XG4gIH1cblxuICAkLmdldCA9IGZ1bmN0aW9uKC8qIHVybCwgZGF0YSwgc3VjY2VzcywgZGF0YVR5cGUgKi8pe1xuICAgIHJldHVybiAkLmFqYXgocGFyc2VBcmd1bWVudHMuYXBwbHkobnVsbCwgYXJndW1lbnRzKSlcbiAgfVxuXG4gICQucG9zdCA9IGZ1bmN0aW9uKC8qIHVybCwgZGF0YSwgc3VjY2VzcywgZGF0YVR5cGUgKi8pe1xuICAgIHZhciBvcHRpb25zID0gcGFyc2VBcmd1bWVudHMuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgIG9wdGlvbnMudHlwZSA9ICdQT1NUJ1xuICAgIHJldHVybiAkLmFqYXgob3B0aW9ucylcbiAgfVxuXG4gICQuZ2V0SlNPTiA9IGZ1bmN0aW9uKC8qIHVybCwgZGF0YSwgc3VjY2VzcyAqLyl7XG4gICAgdmFyIG9wdGlvbnMgPSBwYXJzZUFyZ3VtZW50cy5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgb3B0aW9ucy5kYXRhVHlwZSA9ICdqc29uJ1xuICAgIHJldHVybiAkLmFqYXgob3B0aW9ucylcbiAgfVxuXG4gICQuZm4ubG9hZCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgc3VjY2Vzcyl7XG4gICAgaWYgKCF0aGlzLmxlbmd0aCkgcmV0dXJuIHRoaXNcbiAgICB2YXIgc2VsZiA9IHRoaXMsIHBhcnRzID0gdXJsLnNwbGl0KC9cXHMvKSwgc2VsZWN0b3IsXG4gICAgICAgIG9wdGlvbnMgPSBwYXJzZUFyZ3VtZW50cyh1cmwsIGRhdGEsIHN1Y2Nlc3MpLFxuICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnMuc3VjY2Vzc1xuICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSBvcHRpb25zLnVybCA9IHBhcnRzWzBdLCBzZWxlY3RvciA9IHBhcnRzWzFdXG4gICAgb3B0aW9ucy5zdWNjZXNzID0gZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgc2VsZi5odG1sKHNlbGVjdG9yID9cbiAgICAgICAgJCgnPGRpdj4nKS5odG1sKHJlc3BvbnNlLnJlcGxhY2UocnNjcmlwdCwgXCJcIikpLmZpbmQoc2VsZWN0b3IpXG4gICAgICAgIDogcmVzcG9uc2UpXG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjay5hcHBseShzZWxmLCBhcmd1bWVudHMpXG4gICAgfVxuICAgICQuYWpheChvcHRpb25zKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB2YXIgZXNjYXBlID0gZW5jb2RlVVJJQ29tcG9uZW50XG5cbiAgZnVuY3Rpb24gc2VyaWFsaXplKHBhcmFtcywgb2JqLCB0cmFkaXRpb25hbCwgc2NvcGUpe1xuICAgIHZhciB0eXBlLCBhcnJheSA9ICQuaXNBcnJheShvYmopLCBoYXNoID0gJC5pc1BsYWluT2JqZWN0KG9iailcbiAgICAkLmVhY2gob2JqLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICB0eXBlID0gJC50eXBlKHZhbHVlKVxuICAgICAgaWYgKHNjb3BlKSBrZXkgPSB0cmFkaXRpb25hbCA/IHNjb3BlIDpcbiAgICAgICAgc2NvcGUgKyAnWycgKyAoaGFzaCB8fCB0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2FycmF5JyA/IGtleSA6ICcnKSArICddJ1xuICAgICAgLy8gaGFuZGxlIGRhdGEgaW4gc2VyaWFsaXplQXJyYXkoKSBmb3JtYXRcbiAgICAgIGlmICghc2NvcGUgJiYgYXJyYXkpIHBhcmFtcy5hZGQodmFsdWUubmFtZSwgdmFsdWUudmFsdWUpXG4gICAgICAvLyByZWN1cnNlIGludG8gbmVzdGVkIG9iamVjdHNcbiAgICAgIGVsc2UgaWYgKHR5cGUgPT0gXCJhcnJheVwiIHx8ICghdHJhZGl0aW9uYWwgJiYgdHlwZSA9PSBcIm9iamVjdFwiKSlcbiAgICAgICAgc2VyaWFsaXplKHBhcmFtcywgdmFsdWUsIHRyYWRpdGlvbmFsLCBrZXkpXG4gICAgICBlbHNlIHBhcmFtcy5hZGQoa2V5LCB2YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgJC5wYXJhbSA9IGZ1bmN0aW9uKG9iaiwgdHJhZGl0aW9uYWwpe1xuICAgIHZhciBwYXJhbXMgPSBbXVxuICAgIHBhcmFtcy5hZGQgPSBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICBpZiAoJC5pc0Z1bmN0aW9uKHZhbHVlKSkgdmFsdWUgPSB2YWx1ZSgpXG4gICAgICBpZiAodmFsdWUgPT0gbnVsbCkgdmFsdWUgPSBcIlwiXG4gICAgICB0aGlzLnB1c2goZXNjYXBlKGtleSkgKyAnPScgKyBlc2NhcGUodmFsdWUpKVxuICAgIH1cbiAgICBzZXJpYWxpemUocGFyYW1zLCBvYmosIHRyYWRpdGlvbmFsKVxuICAgIHJldHVybiBwYXJhbXMuam9pbignJicpLnJlcGxhY2UoLyUyMC9nLCAnKycpXG4gIH1cbn0pKFplcHRvKVxuXG47KGZ1bmN0aW9uKCQpe1xuICAkLmZuLnNlcmlhbGl6ZUFycmF5ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5hbWUsIHR5cGUsIHJlc3VsdCA9IFtdLFxuICAgICAgYWRkID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlLmZvckVhY2gpIHJldHVybiB2YWx1ZS5mb3JFYWNoKGFkZClcbiAgICAgICAgcmVzdWx0LnB1c2goeyBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUgfSlcbiAgICAgIH1cbiAgICBpZiAodGhpc1swXSkgJC5lYWNoKHRoaXNbMF0uZWxlbWVudHMsIGZ1bmN0aW9uKF8sIGZpZWxkKXtcbiAgICAgIHR5cGUgPSBmaWVsZC50eXBlLCBuYW1lID0gZmllbGQubmFtZVxuICAgICAgaWYgKG5hbWUgJiYgZmllbGQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPSAnZmllbGRzZXQnICYmXG4gICAgICAgICFmaWVsZC5kaXNhYmxlZCAmJiB0eXBlICE9ICdzdWJtaXQnICYmIHR5cGUgIT0gJ3Jlc2V0JyAmJiB0eXBlICE9ICdidXR0b24nICYmIHR5cGUgIT0gJ2ZpbGUnICYmXG4gICAgICAgICgodHlwZSAhPSAncmFkaW8nICYmIHR5cGUgIT0gJ2NoZWNrYm94JykgfHwgZmllbGQuY2hlY2tlZCkpXG4gICAgICAgICAgYWRkKCQoZmllbGQpLnZhbCgpKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgJC5mbi5zZXJpYWxpemUgPSBmdW5jdGlvbigpe1xuICAgIHZhciByZXN1bHQgPSBbXVxuICAgIHRoaXMuc2VyaWFsaXplQXJyYXkoKS5mb3JFYWNoKGZ1bmN0aW9uKGVsbSl7XG4gICAgICByZXN1bHQucHVzaChlbmNvZGVVUklDb21wb25lbnQoZWxtLm5hbWUpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGVsbS52YWx1ZSkpXG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0LmpvaW4oJyYnKVxuICB9XG5cbiAgJC5mbi5zdWJtaXQgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIGlmICgwIGluIGFyZ3VtZW50cykgdGhpcy5iaW5kKCdzdWJtaXQnLCBjYWxsYmFjaylcbiAgICBlbHNlIGlmICh0aGlzLmxlbmd0aCkge1xuICAgICAgdmFyIGV2ZW50ID0gJC5FdmVudCgnc3VibWl0JylcbiAgICAgIHRoaXMuZXEoMCkudHJpZ2dlcihldmVudClcbiAgICAgIGlmICghZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHRoaXMuZ2V0KDApLnN1Ym1pdCgpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxufSkoWmVwdG8pXG5cbjsoZnVuY3Rpb24oJCl7XG4gIC8vIF9fcHJvdG9fXyBkb2Vzbid0IGV4aXN0IG9uIElFPDExLCBzbyByZWRlZmluZVxuICAvLyB0aGUgWiBmdW5jdGlvbiB0byB1c2Ugb2JqZWN0IGV4dGVuc2lvbiBpbnN0ZWFkXG4gIGlmICghKCdfX3Byb3RvX18nIGluIHt9KSkge1xuICAgICQuZXh0ZW5kKCQuemVwdG8sIHtcbiAgICAgIFo6IGZ1bmN0aW9uKGRvbSwgc2VsZWN0b3Ipe1xuICAgICAgICBkb20gPSBkb20gfHwgW11cbiAgICAgICAgJC5leHRlbmQoZG9tLCAkLmZuKVxuICAgICAgICBkb20uc2VsZWN0b3IgPSBzZWxlY3RvciB8fCAnJ1xuICAgICAgICBkb20uX19aID0gdHJ1ZVxuICAgICAgICByZXR1cm4gZG9tXG4gICAgICB9LFxuICAgICAgLy8gdGhpcyBpcyBhIGtsdWRnZSBidXQgd29ya3NcbiAgICAgIGlzWjogZnVuY3Rpb24ob2JqZWN0KXtcbiAgICAgICAgcmV0dXJuICQudHlwZShvYmplY3QpID09PSAnYXJyYXknICYmICdfX1onIGluIG9iamVjdFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBnZXRDb21wdXRlZFN0eWxlIHNob3VsZG4ndCBmcmVhayBvdXQgd2hlbiBjYWxsZWRcbiAgLy8gd2l0aG91dCBhIHZhbGlkIGVsZW1lbnQgYXMgYXJndW1lbnRcbiAgdHJ5IHtcbiAgICBnZXRDb21wdXRlZFN0eWxlKHVuZGVmaW5lZClcbiAgfSBjYXRjaChlKSB7XG4gICAgdmFyIG5hdGl2ZUdldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlO1xuICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlID0gZnVuY3Rpb24oZWxlbWVudCl7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gbmF0aXZlR2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgfVxuICB9XG59KShaZXB0bylcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMC4xQHdlYnBhY2stemVwdG8vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy8uMi4wLjAtYmV0YS40QGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9sb2FkZXIuanM/e1xcXCJvbWl0XFxcIjoxLFxcXCJyZW1vdmVcXFwiOnRydWV9IXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNjRlNzcyNDcmc2NvcGVkPXRydWUhcHgycmVtP3JlbVVuaXQ9NjUmcmVtUHJlY2lzaW9uPTghc2Fzcy1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2hlYWRlci52dWVcIilcblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2hlYWRlci52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTY0ZTc3MjQ3IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2hlYWRlci52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiQzpcXFxcVXNlcnNcXFxccGFud2VuaHVhXFxcXERvY3VtZW50c1xcXFxIQnVpbGRlclByb2plY3RcXFxcdnVlLUNhbGVuZGFyTGlzdFZpZXdcXFxcc3JjXFxcXGNvbXBvbmVudHNcXFxcaGVhZGVyLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtNjRlNzcyNDdcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNjRlNzcyNDdcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNjRlNzcyNDdcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBoZWFkZXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9oZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gKF92bS5nZXRIZWFkZXIpID8gX2MoJ2hlYWRlcicsIHtcbiAgICBjbGFzczogX3ZtLm9wYSA9PSBmYWxzZSA/IHtcbiAgICAgIHdoaXRlOiB0cnVlXG4gICAgfSA6IHtcbiAgICAgIGJsYWNrOiB0cnVlXG4gICAgfVxuICB9LCBbKF92bS5iYWNrVHlwZSkgPyBfYygnYScsIHtcbiAgICBjbGFzczogX3ZtLmdldEJhY2tDbGFzcyxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmFCdG4oKVxuICAgICAgfVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidGV4dENvbnRlbnRcIjogX3ZtLl9zKF92bS5wYWdlTmFtZSlcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmNsaWNrQnRuKSA/IF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJpZ2h0QnV0dG9uXCIsXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwiaW5uZXJIVE1MXCI6IF92bS5fcyhfdm0uY2xpY2tCdG4pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uY2xpY2tBY3Rpb25cbiAgICB9XG4gIH0pIDogX3ZtLl9lKCldKSA6IF92bS5fZSgpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTY0ZTc3MjQ3XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4xMC4wLjJAdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTY0ZTc3MjQ3IS4vfi8uMTAuMC4yQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL2hlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjAuMC1iZXRhLjRAZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2xvYWRlci5qcz97XCJvbWl0XCI6MSxcInJlbW92ZVwiOnRydWV9IS4vfi8uMS4wLjBAdnVlLXN0eWxlLWxvYWRlciEuL34vLjAuMjYuMUBjc3MtbG9hZGVyIS4vfi8uMTAuMC4yQHZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NGU3NzI0NyZzY29wZWQ9dHJ1ZSEuL34vLjAuMS43QHB4MnJlbS1sb2FkZXI/cmVtVW5pdD02NSZyZW1QcmVjaXNpb249OCEuL34vLjQuMS4xQHNhc3MtbG9hZGVyIS4vfi8uMTAuMC4yQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9oZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvKlxuICogSmF2YVNjcmlwdCBNRDVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtTUQ1XG4gKlxuICogQ29weXJpZ2h0IDIwMTEsIFNlYmFzdGlhbiBUc2NoYW5cbiAqIGh0dHBzOi8vYmx1ZWltcC5uZXRcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICpcbiAqIEJhc2VkIG9uXG4gKiBBIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFJTQSBEYXRhIFNlY3VyaXR5LCBJbmMuIE1ENSBNZXNzYWdlXG4gKiBEaWdlc3QgQWxnb3JpdGhtLCBhcyBkZWZpbmVkIGluIFJGQyAxMzIxLlxuICogVmVyc2lvbiAyLjIgQ29weXJpZ2h0IChDKSBQYXVsIEpvaG5zdG9uIDE5OTkgLSAyMDA5XG4gKiBPdGhlciBjb250cmlidXRvcnM6IEdyZWcgSG9sdCwgQW5kcmV3IEtlcGVydCwgWWRuYXIsIExvc3RpbmV0XG4gKiBEaXN0cmlidXRlZCB1bmRlciB0aGUgQlNEIExpY2Vuc2VcbiAqIFNlZSBodHRwOi8vcGFqaG9tZS5vcmcudWsvY3J5cHQvbWQ1IGZvciBtb3JlIGluZm8uXG4gKi9cblxuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG47KGZ1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0J1xuXG4gIC8qXG4gICogQWRkIGludGVnZXJzLCB3cmFwcGluZyBhdCAyXjMyLiBUaGlzIHVzZXMgMTYtYml0IG9wZXJhdGlvbnMgaW50ZXJuYWxseVxuICAqIHRvIHdvcmsgYXJvdW5kIGJ1Z3MgaW4gc29tZSBKUyBpbnRlcnByZXRlcnMuXG4gICovXG4gIGZ1bmN0aW9uIHNhZmVBZGQgKHgsIHkpIHtcbiAgICB2YXIgbHN3ID0gKHggJiAweEZGRkYpICsgKHkgJiAweEZGRkYpXG4gICAgdmFyIG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpXG4gICAgcmV0dXJuIChtc3cgPDwgMTYpIHwgKGxzdyAmIDB4RkZGRilcbiAgfVxuXG4gIC8qXG4gICogQml0d2lzZSByb3RhdGUgYSAzMi1iaXQgbnVtYmVyIHRvIHRoZSBsZWZ0LlxuICAqL1xuICBmdW5jdGlvbiBiaXRSb3RhdGVMZWZ0IChudW0sIGNudCkge1xuICAgIHJldHVybiAobnVtIDw8IGNudCkgfCAobnVtID4+PiAoMzIgLSBjbnQpKVxuICB9XG5cbiAgLypcbiAgKiBUaGVzZSBmdW5jdGlvbnMgaW1wbGVtZW50IHRoZSBmb3VyIGJhc2ljIG9wZXJhdGlvbnMgdGhlIGFsZ29yaXRobSB1c2VzLlxuICAqL1xuICBmdW5jdGlvbiBtZDVjbW4gKHEsIGEsIGIsIHgsIHMsIHQpIHtcbiAgICByZXR1cm4gc2FmZUFkZChiaXRSb3RhdGVMZWZ0KHNhZmVBZGQoc2FmZUFkZChhLCBxKSwgc2FmZUFkZCh4LCB0KSksIHMpLCBiKVxuICB9XG4gIGZ1bmN0aW9uIG1kNWZmIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgcmV0dXJuIG1kNWNtbigoYiAmIGMpIHwgKCh+YikgJiBkKSwgYSwgYiwgeCwgcywgdClcbiAgfVxuICBmdW5jdGlvbiBtZDVnZyAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICAgIHJldHVybiBtZDVjbW4oKGIgJiBkKSB8IChjICYgKH5kKSksIGEsIGIsIHgsIHMsIHQpXG4gIH1cbiAgZnVuY3Rpb24gbWQ1aGggKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICByZXR1cm4gbWQ1Y21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdClcbiAgfVxuICBmdW5jdGlvbiBtZDVpaSAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICAgIHJldHVybiBtZDVjbW4oYyBeIChiIHwgKH5kKSksIGEsIGIsIHgsIHMsIHQpXG4gIH1cblxuICAvKlxuICAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGguXG4gICovXG4gIGZ1bmN0aW9uIGJpbmxNRDUgKHgsIGxlbikge1xuICAgIC8qIGFwcGVuZCBwYWRkaW5nICovXG4gICAgeFtsZW4gPj4gNV0gfD0gMHg4MCA8PCAobGVuICUgMzIpXG4gICAgeFsoKChsZW4gKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gbGVuXG5cbiAgICB2YXIgaVxuICAgIHZhciBvbGRhXG4gICAgdmFyIG9sZGJcbiAgICB2YXIgb2xkY1xuICAgIHZhciBvbGRkXG4gICAgdmFyIGEgPSAxNzMyNTg0MTkzXG4gICAgdmFyIGIgPSAtMjcxNzMzODc5XG4gICAgdmFyIGMgPSAtMTczMjU4NDE5NFxuICAgIHZhciBkID0gMjcxNzMzODc4XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkgKz0gMTYpIHtcbiAgICAgIG9sZGEgPSBhXG4gICAgICBvbGRiID0gYlxuICAgICAgb2xkYyA9IGNcbiAgICAgIG9sZGQgPSBkXG5cbiAgICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2ldLCA3LCAtNjgwODc2OTM2KVxuICAgICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDFdLCAxMiwgLTM4OTU2NDU4NilcbiAgICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTcsIDYwNjEwNTgxOSlcbiAgICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKVxuICAgICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA3LCAtMTc2NDE4ODk3KVxuICAgICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDVdLCAxMiwgMTIwMDA4MDQyNilcbiAgICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTcsIC0xNDczMjMxMzQxKVxuICAgICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDddLCAyMiwgLTQ1NzA1OTgzKVxuICAgICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA3LCAxNzcwMDM1NDE2KVxuICAgICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpXG4gICAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNywgLTQyMDYzKVxuICAgICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDExXSwgMjIsIC0xOTkwNDA0MTYyKVxuICAgICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNywgMTgwNDYwMzY4MilcbiAgICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxM10sIDEyLCAtNDAzNDExMDEpXG4gICAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNywgLTE1MDIwMDIyOTApXG4gICAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTVdLCAyMiwgMTIzNjUzNTMyOSlcblxuICAgICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA1LCAtMTY1Nzk2NTEwKVxuICAgICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDZdLCA5LCAtMTA2OTUwMTYzMilcbiAgICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE0LCA2NDM3MTc3MTMpXG4gICAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpXSwgMjAsIC0zNzM4OTczMDIpXG4gICAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgNV0sIDUsIC03MDE1NTg2OTEpXG4gICAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTBdLCA5LCAzODAxNjA4MylcbiAgICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KVxuICAgICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDRdLCAyMCwgLTQwNTUzNzg0OClcbiAgICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNSwgNTY4NDQ2NDM4KVxuICAgICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDE0XSwgOSwgLTEwMTk4MDM2OTApXG4gICAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgM10sIDE0LCAtMTg3MzYzOTYxKVxuICAgICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDhdLCAyMCwgMTE2MzUzMTUwMSlcbiAgICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KVxuICAgICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDJdLCA5LCAtNTE0MDM3ODQpXG4gICAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgN10sIDE0LCAxNzM1MzI4NDczKVxuICAgICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KVxuXG4gICAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgNV0sIDQsIC0zNzg1NTgpXG4gICAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgOF0sIDExLCAtMjAyMjU3NDQ2MylcbiAgICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE2LCAxODM5MDMwNTYyKVxuICAgICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDE0XSwgMjMsIC0zNTMwOTU1NilcbiAgICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNCwgLTE1MzA5OTIwNjApXG4gICAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgNF0sIDExLCAxMjcyODkzMzUzKVxuICAgICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNiwgLTE1NTQ5NzYzMilcbiAgICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxMF0sIDIzLCAtMTA5NDczMDY0MClcbiAgICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDQsIDY4MTI3OTE3NClcbiAgICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2ldLCAxMSwgLTM1ODUzNzIyMilcbiAgICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTYsIC03MjI1MjE5NzkpXG4gICAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgNl0sIDIzLCA3NjAyOTE4OSlcbiAgICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNCwgLTY0MDM2NDQ4NylcbiAgICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyAxMl0sIDExLCAtNDIxODE1ODM1KVxuICAgICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTYsIDUzMDc0MjUyMClcbiAgICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAyXSwgMjMsIC05OTUzMzg2NTEpXG5cbiAgICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2ldLCA2LCAtMTk4NjMwODQ0KVxuICAgICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDddLCAxMCwgMTEyNjg5MTQxNSlcbiAgICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE1LCAtMTQxNjM1NDkwNSlcbiAgICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA1XSwgMjEsIC01NzQzNDA1NSlcbiAgICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDYsIDE3MDA0ODU1NzEpXG4gICAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgM10sIDEwLCAtMTg5NDk4NjYwNilcbiAgICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE1LCAtMTA1MTUyMylcbiAgICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxXSwgMjEsIC0yMDU0OTIyNzk5KVxuICAgICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA2LCAxODczMzEzMzU5KVxuICAgICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDE1XSwgMTAsIC0zMDYxMTc0NClcbiAgICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTUsIC0xNTYwMTk4MzgwKVxuICAgICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDEzXSwgMjEsIDEzMDkxNTE2NDkpXG4gICAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgNF0sIDYsIC0xNDU1MjMwNzApXG4gICAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTFdLCAxMCwgLTExMjAyMTAzNzkpXG4gICAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE1LCA3MTg3ODcyNTkpXG4gICAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgOV0sIDIxLCAtMzQzNDg1NTUxKVxuXG4gICAgICBhID0gc2FmZUFkZChhLCBvbGRhKVxuICAgICAgYiA9IHNhZmVBZGQoYiwgb2xkYilcbiAgICAgIGMgPSBzYWZlQWRkKGMsIG9sZGMpXG4gICAgICBkID0gc2FmZUFkZChkLCBvbGRkKVxuICAgIH1cbiAgICByZXR1cm4gW2EsIGIsIGMsIGRdXG4gIH1cblxuICAvKlxuICAqIENvbnZlcnQgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcyB0byBhIHN0cmluZ1xuICAqL1xuICBmdW5jdGlvbiBiaW5sMnJzdHIgKGlucHV0KSB7XG4gICAgdmFyIGlcbiAgICB2YXIgb3V0cHV0ID0gJydcbiAgICB2YXIgbGVuZ3RoMzIgPSBpbnB1dC5sZW5ndGggKiAzMlxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGgzMjsgaSArPSA4KSB7XG4gICAgICBvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoaW5wdXRbaSA+PiA1XSA+Pj4gKGkgJSAzMikpICYgMHhGRilcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dFxuICB9XG5cbiAgLypcbiAgKiBDb252ZXJ0IGEgcmF3IHN0cmluZyB0byBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzXG4gICogQ2hhcmFjdGVycyA+MjU1IGhhdmUgdGhlaXIgaGlnaC1ieXRlIHNpbGVudGx5IGlnbm9yZWQuXG4gICovXG4gIGZ1bmN0aW9uIHJzdHIyYmlubCAoaW5wdXQpIHtcbiAgICB2YXIgaVxuICAgIHZhciBvdXRwdXQgPSBbXVxuICAgIG91dHB1dFsoaW5wdXQubGVuZ3RoID4+IDIpIC0gMV0gPSB1bmRlZmluZWRcbiAgICBmb3IgKGkgPSAwOyBpIDwgb3V0cHV0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBvdXRwdXRbaV0gPSAwXG4gICAgfVxuICAgIHZhciBsZW5ndGg4ID0gaW5wdXQubGVuZ3RoICogOFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg4OyBpICs9IDgpIHtcbiAgICAgIG91dHB1dFtpID4+IDVdIHw9IChpbnB1dC5jaGFyQ29kZUF0KGkgLyA4KSAmIDB4RkYpIDw8IChpICUgMzIpXG4gICAgfVxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxuXG4gIC8qXG4gICogQ2FsY3VsYXRlIHRoZSBNRDUgb2YgYSByYXcgc3RyaW5nXG4gICovXG4gIGZ1bmN0aW9uIHJzdHJNRDUgKHMpIHtcbiAgICByZXR1cm4gYmlubDJyc3RyKGJpbmxNRDUocnN0cjJiaW5sKHMpLCBzLmxlbmd0aCAqIDgpKVxuICB9XG5cbiAgLypcbiAgKiBDYWxjdWxhdGUgdGhlIEhNQUMtTUQ1LCBvZiBhIGtleSBhbmQgc29tZSBkYXRhIChyYXcgc3RyaW5ncylcbiAgKi9cbiAgZnVuY3Rpb24gcnN0ckhNQUNNRDUgKGtleSwgZGF0YSkge1xuICAgIHZhciBpXG4gICAgdmFyIGJrZXkgPSByc3RyMmJpbmwoa2V5KVxuICAgIHZhciBpcGFkID0gW11cbiAgICB2YXIgb3BhZCA9IFtdXG4gICAgdmFyIGhhc2hcbiAgICBpcGFkWzE1XSA9IG9wYWRbMTVdID0gdW5kZWZpbmVkXG4gICAgaWYgKGJrZXkubGVuZ3RoID4gMTYpIHtcbiAgICAgIGJrZXkgPSBiaW5sTUQ1KGJrZXksIGtleS5sZW5ndGggKiA4KVxuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgMTY7IGkgKz0gMSkge1xuICAgICAgaXBhZFtpXSA9IGJrZXlbaV0gXiAweDM2MzYzNjM2XG4gICAgICBvcGFkW2ldID0gYmtleVtpXSBeIDB4NUM1QzVDNUNcbiAgICB9XG4gICAgaGFzaCA9IGJpbmxNRDUoaXBhZC5jb25jYXQocnN0cjJiaW5sKGRhdGEpKSwgNTEyICsgZGF0YS5sZW5ndGggKiA4KVxuICAgIHJldHVybiBiaW5sMnJzdHIoYmlubE1ENShvcGFkLmNvbmNhdChoYXNoKSwgNTEyICsgMTI4KSlcbiAgfVxuXG4gIC8qXG4gICogQ29udmVydCBhIHJhdyBzdHJpbmcgdG8gYSBoZXggc3RyaW5nXG4gICovXG4gIGZ1bmN0aW9uIHJzdHIyaGV4IChpbnB1dCkge1xuICAgIHZhciBoZXhUYWIgPSAnMDEyMzQ1Njc4OWFiY2RlZidcbiAgICB2YXIgb3V0cHV0ID0gJydcbiAgICB2YXIgeFxuICAgIHZhciBpXG4gICAgZm9yIChpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB4ID0gaW5wdXQuY2hhckNvZGVBdChpKVxuICAgICAgb3V0cHV0ICs9IGhleFRhYi5jaGFyQXQoKHggPj4+IDQpICYgMHgwRikgK1xuICAgICAgaGV4VGFiLmNoYXJBdCh4ICYgMHgwRilcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dFxuICB9XG5cbiAgLypcbiAgKiBFbmNvZGUgYSBzdHJpbmcgYXMgdXRmLThcbiAgKi9cbiAgZnVuY3Rpb24gc3RyMnJzdHJVVEY4IChpbnB1dCkge1xuICAgIHJldHVybiB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoaW5wdXQpKVxuICB9XG5cbiAgLypcbiAgKiBUYWtlIHN0cmluZyBhcmd1bWVudHMgYW5kIHJldHVybiBlaXRoZXIgcmF3IG9yIGhleCBlbmNvZGVkIHN0cmluZ3NcbiAgKi9cbiAgZnVuY3Rpb24gcmF3TUQ1IChzKSB7XG4gICAgcmV0dXJuIHJzdHJNRDUoc3RyMnJzdHJVVEY4KHMpKVxuICB9XG4gIGZ1bmN0aW9uIGhleE1ENSAocykge1xuICAgIHJldHVybiByc3RyMmhleChyYXdNRDUocykpXG4gIH1cbiAgZnVuY3Rpb24gcmF3SE1BQ01ENSAoaywgZCkge1xuICAgIHJldHVybiByc3RySE1BQ01ENShzdHIycnN0clVURjgoayksIHN0cjJyc3RyVVRGOChkKSlcbiAgfVxuICBmdW5jdGlvbiBoZXhITUFDTUQ1IChrLCBkKSB7XG4gICAgcmV0dXJuIHJzdHIyaGV4KHJhd0hNQUNNRDUoaywgZCkpXG4gIH1cblxuICBmdW5jdGlvbiBtZDUgKHN0cmluZywga2V5LCByYXcpIHtcbiAgICBpZiAoIWtleSkge1xuICAgICAgaWYgKCFyYXcpIHtcbiAgICAgICAgcmV0dXJuIGhleE1ENShzdHJpbmcpXG4gICAgICB9XG4gICAgICByZXR1cm4gcmF3TUQ1KHN0cmluZylcbiAgICB9XG4gICAgaWYgKCFyYXcpIHtcbiAgICAgIHJldHVybiBoZXhITUFDTUQ1KGtleSwgc3RyaW5nKVxuICAgIH1cbiAgICByZXR1cm4gcmF3SE1BQ01ENShrZXksIHN0cmluZylcbiAgfVxuXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG1kNVxuICAgIH0pXG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IG1kNVxuICB9IGVsc2Uge1xuICAgICQubWQ1ID0gbWQ1XG4gIH1cbn0odGhpcykpXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNi4wQGJsdWVpbXAtbWQ1L2pzL21kNS5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiPHRlbXBsYXRlPlxuXHQ8aGVhZGVyIHYtaWY9XCJnZXRIZWFkZXJcIiA6Y2xhc3M9XCJvcGE9PWZhbHNlP3t3aGl0ZTogdHJ1ZX06e2JsYWNrOiB0cnVlfVwiPlxuXHRcdDxhIDpjbGFzcz1cImdldEJhY2tDbGFzc1wiIHYtaWY9XCJiYWNrVHlwZVwiIEBjbGljaz1cImFCdG4oKVwiPlxuXHRcdDwvYT5cblx0XHQ8c3BhbiB2LXRleHQ9XCJwYWdlTmFtZVwiPjwvc3Bhbj5cblx0XHQ8YSB2LWlmPVwiY2xpY2tCdG5cIiBAY2xpY2s9XCJjbGlja0FjdGlvblwiIHYtaHRtbD1cImNsaWNrQnRuXCIgY2xhc3M9XCJyaWdodEJ1dHRvblwiPlxuXHRcdDwvYT5cblx0PC9oZWFkZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgRW52IGZyb20gJy4uLy4uL2NvbmZpZy9lbnYuanMnO1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0cHJvcHM6IFsncGFnZU5hbWUnLCAnYmFja0FjdGlvbicsIFwiYmFja1R5cGVcIiwgXCJnb2JhY2tcIiwgXCJjbGlja0J0blwiLCBcImNsaWNrQWN0aW9uXCIsIFwib3BhXCJdLFxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRnZXRCYWNrQ2xhc3M6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgYmFjayA9IHtcblx0XHRcdFx0XHRiYWNrOiB0cnVlLFxuXHRcdFx0XHRcdGJhY2tXaGl0ZTogZmFsc2Vcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYodGhpcy5vcGEgPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRiYWNrWydiYWNrJ10gPSBmYWxzZTtcblx0XHRcdFx0XHRiYWNrWydiYWNrV2hpdGUnXSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGJhY2s7XG5cdFx0XHR9LFxuXHRcdFx0Z2V0SGVhZGVyOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYobG9jYWxTdG9yYWdlLmFuZHJvaWQgPT0gXCJ0cnVlXCIpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH0gZWxzZSBpZihsb2NhbFN0b3JhZ2UuaW9zID09IFwidHJ1ZVwiKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGFCdG46IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZih0aGlzLmJhY2tBY3Rpb24gIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0dGhpcy5iYWNrQWN0aW9uKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGV0IF9iYWNrID0gdGhpcy4kcm91dGUucXVlcnkuYmFja1VybFxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKF9iYWNrKVxuXHRcdFx0XHRcdGlmKF9iYWNrKSB7XG5cdFx0XHRcdFx0XHR0aGlzLiRyb3V0ZS5yb3V0ZXIuZ28oe1xuXHRcdFx0XHRcdFx0XHRwYXRoOiBfYmFjayxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRoaXN0b3J5LmdvKC0xKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdH1cbjwvc2NyaXB0PlxuPHN0eWxlIGxhbmc9XCJzYXNzXCIgc2NvcGVkPlxuXHQvKkBpbXBvcnQgdXJsKFwiLi4vYXNzZXRzL2ljb25mb250cy9pY29uZm9udC5jc3NcIik7Ki9cblx0LypoZWFkZXIqL1xuXHRcblx0LnJpZ2h0QnV0dG9uIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0cmlnaHQ6IDIwcHg7XG5cdFx0dG9wOiAwcHg7XG5cdFx0Zm9udC1zaXplOiAyNnB4O1xuXHRcdC8qcHgqL1xuXHRcdGNvbG9yOiAjNjY2NjY2O1xuXHRcdGxldHRlci1zcGFjaW5nOiAwcHg7XG5cdH1cblx0XG5cdC5ibGFjayB7XG5cdFx0YmFja2dyb3VuZDogI0Y5RjhGODtcblx0XHRib3gtc2hhZG93OiAwcHggMXB4IDBweCAwcHggIzk1OTU5NTtcblx0fVxuXHRcblx0LndoaXRlIHtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0fVxuXHRcblx0aGVhZGVyIHtcblx0XHRmb250LXNpemU6IDM2cHg7XG5cdFx0LypweCovXG5cdFx0aGVpZ2h0OiA4OHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiA4OHB4O1xuXHRcdGE6bnRoLW9mLXR5cGUoMSkge1xuXHRcdFx0d2lkdGg6IDIwcHg7XG5cdFx0XHRoZWlnaHQ6IDM0cHg7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRsZWZ0OiAyMHB4O1xuXHRcdFx0dG9wOiAyN3B4O1xuXHRcdFx0Ji5iYWNrIHtcblx0XHRcdFx0YmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvY29tcG9uZW50cy9ibGFja19iYWNrQDJ4LnBuZykgbm8tcmVwZWF0O1xuXHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcblx0XHRcdH1cblx0XHRcdCYuYmFja1doaXRlIHtcblx0XHRcdFx0YmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvY29tcG9uZW50cy9ibGFja193aGl0ZUAyeC5wbmcpIG5vLXJlcGVhdDtcblx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHNwYW4ge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR9XG5cdH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGhlYWRlci52dWU/ODEzYTQ1NzQiLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IEVudiBmcm9tICcuLi8uLi9jb25maWcvZW52LmpzJztcbnZhciBtZDUgPSByZXF1aXJlKFwiYmx1ZWltcC1tZDVcIik7XG5sZXQgZ2V0Q2hlY2sgPSB7XG5cdFx0Y2hlY2tFbWFpbDogZnVuY3Rpb24odmFsKSB7XG5cdFx0XHR2YXIgZmlsdGVyID0gL14oW2EtekEtWjAtOV9cXC5cXC1dKStcXEAoKFthLXpBLVowLTlcXC1dKStcXC4pKyhbYS16QS1aMC05XXsyLDR9KSskLztcblx0XHRcdGlmKGZpbHRlci50ZXN0KHZhbCkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjaGVja1Bob25lOiBmdW5jdGlvbih2YWwpIHtcblx0XHRcdHZhciBmaWx0ZXIgPSAvXlsxXVszNDU3OF1bMC05XXs5fSQvO1xuXG5cdFx0XHRpZihmaWx0ZXIudGVzdCh2YWwpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y2hlY2tQYXNzd29yZDogZnVuY3Rpb24odmFsKSB7XG5cdFx0XHR2YXIgZmlsdGVyID0gL15bMC05QS1aYS16XXs2LDIwfSQvO1xuXG5cdFx0XHRpZihmaWx0ZXIudGVzdCh2YWwpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y2hlY2tJT1M6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly/liKTmlq3mmK/lkKZJT1PmiJbogIXlronljZNcblx0XHRcdHZhciB1ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0XHRcdC8vdmFyIGlzQW5kcm9pZCA9IHUuaW5kZXhPZignQW5kcm9pZCcpID4gLTEgfHwgdS5pbmRleE9mKCdBZHInKSA+IC0xOyAvL2FuZHJvaWTnu4jnq68gXG5cdFx0XHR2YXIgaXNpT1MgPSAhIXUubWF0Y2goL1xcKGlbXjtdKzsoIFU7KT8gQ1BVLitNYWMgT1MgWC8pOyAvL2lvc+e7iOerryBcblx0XHRcdGlmKGlzaU9TKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y2hlY2tXZWNoYXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcblx0XHRcdHJldHVybiB1YS5tYXRjaCgvTWljcm9NZXNzZW5nZXIvaSkgPT0gJ21pY3JvbWVzc2VuZ2VyJztcblx0XHR9LFxuXHRcdGNoZWNrTG9naW46IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly/liKTmlq3mmK/lkKZsb2dpblxuXHRcdFx0dmFyIHN0clN0b3JlRGF0ZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1lbWJlcklkXCIpIDogQ29va2llLnJlYWQoXCJtZW1iZXJJZFwiKTtcblx0XHRcdGlmKHN0clN0b3JlRGF0ZSkge1xuXHRcdFx0XHRpZihzdHJTdG9yZURhdGUuc3BsaXQoXCIsXCIpLmxlbmd0aCAhPSAxKSB7XG5cdFx0XHRcdFx0dmFyIGxvY2FsX2lwID0gc3RyU3RvcmVEYXRlID8gc3RyU3RvcmVEYXRlLnNwbGl0KFwiLFwiKVswXSA6IFwiXCI7XG5cdFx0XHRcdFx0dmFyIGxvY2FsX21pID0gc3RyU3RvcmVEYXRlID8gc3RyU3RvcmVEYXRlLnNwbGl0KFwiLFwiKVsxXSA6IFwiXCI7XG5cdFx0XHRcdFx0cmV0dXJuIGxvY2FsX2lwID09IG15QWpheCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHRcdH1cblxuXHRcdH0sXG5cdH1cblx0LyoqXG5cdCAqICAg6I635Y+W5YWo55CD5ZSv5LiA5qCH6K+G56ymXG5cdCAqIDIwMTYtMTEtMDQgMTU6NTE6Mzlcblx0ICovXG5jb25zdCBnZXRSYW5kb20gPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgZ3VpZCA9IFwie1wiO1xuXHRcdGZvcih2YXIgaSA9IDE7IGkgPD0gMzI7IGkrKykge1xuXHRcdFx0dmFyIG4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNi4wKS50b1N0cmluZygxNik7XG5cdFx0XHRndWlkICs9IG47XG5cdFx0XHRpZigoaSA9PSA4KSB8fCAoaSA9PSAxMikgfHwgKGkgPT0gMTYpIHx8IChpID09IDIwKSlcblx0XHRcdFx0Z3VpZCArPSBcIi1cIjtcblx0XHR9XG5cdFx0Z3VpZCArPSBcIn1cIjtcblx0XHRyZXR1cm4gZ3VpZDtcblx0fVxuXHQvKipcblx0ICogICDlr7lEYXRl55qE5omp5bGV77yM5bCGIERhdGUg6L2s5YyW5Li65oyH5a6a5qC85byP55qEU3RyaW5nIFxuXHQgKiAgIOaciChNKeOAgeaXpShkKeOAgeWwj+aXtihoKeOAgeWIhihtKeOAgeenkihzKeOAgeWto+W6pihxKSDlj6/ku6XnlKggMS0yIOS4quWNoOS9jeespu+8jCBcblx0ICogICDlubQoeSnlj6/ku6XnlKggMS00IOS4quWNoOS9jeespu+8jOavq+enkihTKeWPquiDveeUqCAxIOS4quWNoOS9jeespijmmK8gMS0zIOS9jeeahOaVsOWtlylcblx0ICogICDkvovlrZDvvJpcblx0ICogICAobmV3IERhdGUoKSkuRm9ybWF0KFwieXl5eS1NTS1kZCBoaDptbTpzcy5TXCIpID09PiAyMDA2LTA3LTAyIDA4OjA5OjA0LjQyM1xuXHQgKiAgIChuZXcgRGF0ZSgpKS5Gb3JtYXQoXCJ5eXl5LU0tZCBoOm06cy5TXCIpICAgICAgPT0+IDIwMDYtNy0yIDg6OTo0LjE4IFxuXHQgKi9cbmNvbnN0IGZtdERhdGUgPSBmdW5jdGlvbihkYXRlLCBmbXQpIHsgLy9hdXRob3I6IG1laXp6IFxuXHR2YXIgbyA9IHtcblx0XHRcIk0rXCI6IGRhdGUuZ2V0TW9udGgoKSArIDEsIC8v5pyI5Lu9IFxuXHRcdFwiZCtcIjogZGF0ZS5nZXREYXRlKCksIC8v5pelIFxuXHRcdFwiaCtcIjogZGF0ZS5nZXRIb3VycygpLCAvL+Wwj+aXtiBcblx0XHRcIm0rXCI6IGRhdGUuZ2V0TWludXRlcygpLCAvL+WIhiBcblx0XHRcInMrXCI6IGRhdGUuZ2V0U2Vjb25kcygpLCAvL+enkiBcblx0XHRcInErXCI6IE1hdGguZmxvb3IoKGRhdGUuZ2V0TW9udGgoKSArIDMpIC8gMyksIC8v5a2j5bqmIFxuXHRcdFwiU1wiOiBkYXRlLmdldE1pbGxpc2Vjb25kcygpIC8v5q+r56eSIFxuXHR9O1xuXHRpZigvKHkrKS8udGVzdChmbXQpKVxuXHRcdGZtdCA9IGZtdC5yZXBsYWNlKFJlZ0V4cC4kMSwgKGRhdGUuZ2V0RnVsbFllYXIoKSArIFwiXCIpLnN1YnN0cig0IC0gUmVnRXhwLiQxLmxlbmd0aCkpO1xuXHRmb3IodmFyIGsgaW4gbylcblx0XHRpZihuZXcgUmVnRXhwKFwiKFwiICsgayArIFwiKVwiKS50ZXN0KGZtdCkpXG5cdFx0XHRmbXQgPSBmbXQucmVwbGFjZShSZWdFeHAuJDEsIChSZWdFeHAuJDEubGVuZ3RoID09IDEpID8gKG9ba10pIDogKChcIjAwXCIgKyBvW2tdKS5zdWJzdHIoKFwiXCIgKyBvW2tdKS5sZW5ndGgpKSk7XG5cdHJldHVybiBmbXQ7XG59XG5cbi8qKlxuICog55Sx5LqObW9tZW505bqT5Yqg6L+b5p2l5aSq5aSn5LqG77yM6Ieq5a6a5LmJ5LqGZm9ybW5vd+WHveaVsO+8jOW+heWujOWWhOmYtuautVxuICovXG5jb25zdCBNaWxsaXNlY29uZFRvRGF0ZSA9IGZ1bmN0aW9uKG1zZCkge1xuXHR2YXIgdGltZSA9IHBhcnNlRmxvYXQobXNkKSAvIDEwMDA7XG5cdHZhciBzdHIgPSBcIlwiO1xuXHRpZihudWxsICE9IHRpbWUgJiYgXCJcIiAhPSB0aW1lKSB7XG5cblx0XHRpZih0aW1lID4gNjAgJiYgdGltZSA8IDM2MDApIHtcblx0XHRcdHN0ciA9IHBhcnNlSW50KHRpbWUgLyA2MC4wKSArIFwiIOWIhumSn+WJjVwiO1xuXHRcdH0gZWxzZSBpZih0aW1lID49IDM2MDAgJiYgdGltZSA8IDg2NDAwKSB7XG5cdFx0XHRzdHIgPSBwYXJzZUludCh0aW1lIC8gMzYwMC4wKSArIFwiIOWwj+aXtuWJjVwiO1xuXHRcdH0gZWxzZSBpZih0aW1lID49IDg2NDAwICYmIHRpbWUgPCA4NjQwMCAqIDMwKSB7XG5cdFx0XHRzdHIgPSBwYXJzZUludCh0aW1lIC8gODY0MDAuMCkgKyBcIiDlpKnliY1cIjtcblx0XHR9IGVsc2UgaWYodGltZSA+PSA4NjQwMCAqIDMwICYmIHRpbWUgPCA4NjQwMCAqIDM2NSkge1xuXHRcdFx0c3RyID0gcGFyc2VJbnQodGltZSAvICg4NjQwMC4wICogMzApKSArIFwiIOS4quaciOWJjVwiO1xuXHRcdH0gZWxzZSBpZih0aW1lID49IDg2NDAwICogMzY1KSB7XG5cdFx0XHRzdHIgPSBwYXJzZUludCh0aW1lIC8gKDg2NDAwLjAgKiAzNjUpKSArIFwiIOW5tOWJjVwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHIgPSBwYXJzZUludCh0aW1lKSArIFwiIOenkuWJjVwiO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gc3RyO1xufVxuY29uc3Qgc2VuZENvZGUgPSBmdW5jdGlvbihvKSB7XG5cdHZhciBidG5jZmcgPSB7XG5cdFx0ZGZ3YWl0OiAyMCwgLy/lgJLorqHml7bml7bpl7QgICAy5Liq6YO96KaB5pS5XG5cdFx0d2FpdDogMjAgLy/lgJLorqHml7bml7bpl7Rcblx0fVxuXHR2YXIgX3RoaXMgPSB7XG5cdFx0YmVnaW46IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoYnRuY2ZnLndhaXQgPT0gLTEpIHtcblx0XHRcdFx0JChvKS5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XG5cdFx0XHRcdCQobykucmVtb3ZlQ2xhc3MoXCJidG4tZ3JheVwiKTtcblx0XHRcdFx0JChvKS50ZXh0KFwi6I635Y+W6aqM6K+B56CBXCIpO1xuXHRcdFx0XHRidG5jZmcud2FpdCA9IGJ0bmNmZy5kZndhaXQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKG8pLmFkZENsYXNzKFwiYnRuLWdyYXlcIik7XG5cdFx0XHRcdCQobykuYXR0cihcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG5cdFx0XHRcdCQobykudGV4dChcIumHjeWPkShcIiArIGJ0bmNmZy53YWl0ICsgXCIpXCIpO1xuXHRcdFx0XHRidG5jZmcud2FpdC0tO1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdF90aGlzLmJlZ2luKCk7XG5cdFx0XHRcdH0sIDEwMDApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gX3RoaXMuYmVnaW4oKVxufVxuXG4vKlxuICrkvZzogIU6cGFud2VuaHVhIFxuICrml7bpl7Q6MjAxNi0xMS0wMSAxNzoxMToyMFxuICogXG4gKiAqL1xuY29uc3QgbXlNb2RhbCA9IGZ1bmN0aW9uKCkge1xuXHRcdGxldCBkZWZhdWx0cyA9IHtcblx0XHRcdG1vZGFsX2lkOiBudWxsLFxuXHRcdFx0b3ZlcmxheTogMC41LFxuXHRcdFx0Y2xvc2VCdXR0b246IG51bGwsXG5cdFx0XHR0eXBlOiAxLCAvLzHkuLrkuK3pl7TlvLnlh7ogMuS4uuS4i+W+gOS4iuW8ueWHuiAz5LuO5Y+z5Yiw5bemXG5cdFx0XHRjbG9zZWZ1bnRpb246IGZ1bmN0aW9uKCkge31cblx0XHR9O1xuXHRcdGxldCB0aXBjb25maWcgPSB7IC8v55Sf5oiQ55qE5by556qXXG5cdFx0XHRtb2RhbF90aXA6ICfmuKnppqjmj5DnpLonLCAvL+a4qemmqOaPkOekulxuXHRcdFx0bW9kYWxfY250OiBudWxsLCAvL+aYteensOW3sue7j+WtmOWcqFxuXHRcdFx0dHJ1ZV9idXR0b246IG51bGwsIC8v56Gu5a6aXG5cdFx0XHRjYW5jZWxfYnV0dG9uOiBudWxsLCAvL+WPlua2iFxuXHRcdFx0dHJ1ZV9mdW5jdGlvbjogZnVuY3Rpb24oKSB7fSxcblx0XHRcdGNhbmNlbF9mdW5jdGlvbjogZnVuY3Rpb24oKSB7fVxuXHRcdH07XG5cdFx0bGV0IEYgPSB7XG5cdFx0XHRvdmVybGF5OiBmdW5jdGlvbigpIHsgLy/mt7vliqDljYrpgI/mmI5vdmVybGF5XG5cdFx0XHRcdGxldCBvdmVybGF5ID0gJChcIjxkaXYgaWQ9J292ZXJsYXlfcGFuJz48L2Rpdj5cIik7XG5cdFx0XHRcdGlmKCQoXCIjb3ZlcmxheV9wYW5cIikubGVuZ3RoID09IDApIHtcblx0XHRcdFx0XHQkKFwiYm9keVwiKS5hcHBlbmQob3ZlcmxheSk7XG5cdFx0XHRcdFx0JChcIiNvdmVybGF5X3BhblwiKS5jc3Moe1xuXHRcdFx0XHRcdFx0XCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG5cdFx0XHRcdFx0XHRcInRvcFwiOiBcIjBweFwiLFxuXHRcdFx0XHRcdFx0XCJsZWZ0XCI6IFwiMHB4XCIsXG5cdFx0XHRcdFx0XHRcImhlaWdodFwiOiBcIjEwMCVcIixcblx0XHRcdFx0XHRcdFwid2lkdGhcIjogXCIxMDAlXCIsXG5cdFx0XHRcdFx0XHRcImJhY2tncm91bmRcIjogXCIjMDAwXCIsXG5cdFx0XHRcdFx0XHRcInotaW5kZXhcIjogXCI5OTlcIixcblx0XHRcdFx0XHRcdFwiZGlzcGxheVwiOiBcIm5vbmVcIlxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRmbGFzaE1vZDogZnVuY3Rpb24oc3RyKSB7XG5cdFx0XHRcdHZhciBmc2htb2QgPSAkKFwiPGRpdiBzdHlsZT0nJyBjbGFzcz0nbm9fc2VhcmNoIHljIGZsYXNoJyBpZD0nZnNobW9kJz5cIiArIHN0ciArIFwiPC9kaXY+XCIpO1xuXHRcdFx0XHRpZigkKFwiI2ZzaG1vZFwiKS5sZW5ndGggPT0gMCkge1xuXHRcdFx0XHRcdCQoXCJib2R5XCIpLmFwcGVuZChmc2htb2QpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCQoXCIjZnNobW9kXCIpLnRleHQoc3RyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHRpcE1vZDogZnVuY3Rpb24oc3RyKSB7IC8v5qC55o2uc3Ry5Y+C5pWw5ou85o6l5by556qXIFxuXHRcdFx0XHRpZihzdHIuY2FuY2VsX2J1dHRvbiA9PSBudWxsKSB7IC8v5aaC5p6c5rKh5pyJIOWPlua2iOaMiemSriAgIOWwseS4jeaLvOaOpSDlj5bmtojmjInpkq7nmoRodG1sXG5cdFx0XHRcdFx0dmFyIHRpcG1vZCA9ICQoJzxkaXYgY2xhc3M9XCJ3ZC1tb2RhbFwiIGlkPVwidGlwX21vZFwiPjxkaXYgY2xhc3M9XCJ3ZC1tb2RhbC1oZWFkZXJcIj48ZGl2IGNsYXNzPVwid2QtbW9kYWwtdGlcIj4nICsgc3RyLm1vZGFsX3RpcCArICc8L2Rpdj48ZGl2IGNsYXNzPVwid2QtbW9kYWwtY29udGVudFwiPjxzcGFuIGlkPVwid2QtbW9kYWwtcmVzdWx0XCI+JyArIHN0ci5tb2RhbF9jbnQgKyAnPC9zcGFuPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJ3ZC1tb2RhbC1mb290ZXJcIj48YSBjbGFzcz1cIndkLW1vZGFsLWJ1dHRvbiBkb3ViaV9idG5cIiBpZD1cInRydWUtYnV0dG9uXCI+JyArIHN0ci50cnVlX2J1dHRvbiArICc8L2E+PC9kaXY+PC9kaXY+Jyk7XG5cdFx0XHRcdH0gZWxzZSB7IC8v5ZCm5YiZ5ou85o6l5Ye65p2lXG5cdFx0XHRcdFx0dmFyIHRpcG1vZCA9ICQoJzxkaXYgY2xhc3M9XCJ3ZC1tb2RhbFwiIGlkPVwidGlwX21vZFwiPjxkaXYgY2xhc3M9XCJ3ZC1tb2RhbC1oZWFkZXJcIj48ZGl2IGNsYXNzPVwid2QtbW9kYWwtdGlcIj4nICsgc3RyLm1vZGFsX3RpcCArICc8L2Rpdj48ZGl2IGNsYXNzPVwid2QtbW9kYWwtY29udGVudFwiPjxzcGFuIGlkPVwid2QtbW9kYWwtcmVzdWx0XCI+JyArIHN0ci5tb2RhbF9jbnQgKyAnPC9zcGFuPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJ3ZC1tb2RhbC1mb290ZXJcIj48YSBpZD1cImNhbmNlbC1idXR0b25cIiBjbGFzcz1cIndkLW1vZGFsLWJ1dHRvbiBtb2RhbF9jbG9zZVwiPicgKyBzdHIuY2FuY2VsX2J1dHRvbiArICc8L2E+PGEgY2xhc3M9XCJ3ZC1tb2RhbC1idXR0b25cIiBpZD1cInRydWUtYnV0dG9uXCI+JyArIHN0ci50cnVlX2J1dHRvbiArICc8L2E+PC9kaXY+PC9kaXY+Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoJChcIiN0aXBfbW9kXCIpLmxlbmd0aCA9PSAwKSB7IC8v5Lul5LiL5Luj56CB6Ziy5q2i5aSa5by556qX6YeN5Y+g44CCXG5cdFx0XHRcdFx0JChcImJvZHlcIikuYXBwZW5kKHRpcG1vZCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JChcIiN0aXBfbW9kXCIpLnJlbW92ZSgpO1xuXHRcdFx0XHRcdCQoXCJib2R5XCIpLmFwcGVuZCh0aXBtb2QpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH1cblx0XHRsZXQgTW9kYWwgPSB7XG5cdFx0XHRzaG93TW9kYWw6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0XHRcdFx0bGV0IF90aGlzID0gdGhpcztcblx0XHRcdFx0Ri5vdmVybGF5KCk7XG5cdFx0XHRcdG9wdGlvbnMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cdFx0XHRcdGxldCBvID0gb3B0aW9ucztcblx0XHRcdFx0JCh0aGlzKS5jbGljayhmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0bGV0IG1vZGFsX2lkID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKTtcblx0XHRcdFx0XHQkKFwiI292ZXJsYXlfcGFuXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0X3RoaXMuY2xvc2VNb2RhbChtb2RhbF9pZClcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkKG8uY2xvc2VCdXR0b24pLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0X3RoaXMuY2xvc2VNb2RhbChtb2RhbF9pZCk7XG5cdFx0XHRcdFx0XHRvLmNsb3NlZnVudGlvbigpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQoXCIjb3ZlcmxheV9wYW5cIikuY3NzKHtcblx0XHRcdFx0XHRcdFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG5cdFx0XHRcdFx0XHRcIm9wYWNpdHlcIjogby5vdmVybGF5XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JChtb2RhbF9pZCkuY3NzKHtcblx0XHRcdFx0XHRcdFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuXHRcdFx0XHRcdFx0XCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcblx0XHRcdFx0XHRcdFwiei1pbmRleFwiOiAxMTAwMCxcblx0XHRcdFx0XHRcdFwiYm90dG9tXCI6IG8uYm90dG9tICsgXCJweFwiLFxuXHRcdFx0XHRcdFx0XCJ0b3BcIjogby50b3AgKyBcInB4XCJcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkKG1vZGFsX2lkKS5hZGRDbGFzcyhcImFuaW1hdGVkIHpvb21JblwiKTtcblx0XHRcdFx0XHQvL+WPlua2iOm7mOiupOWKqOS9nFxuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdG9wZW5Nb2RhbDogZnVuY3Rpb24ob3B0aW9ucykge1xuXHRcdFx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdFx0XHRvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXHRcdFx0XHRsZXQgbyA9IG9wdGlvbnM7XG5cdFx0XHRcdGlmKG8udHlwZSA9PSAxKSB7XG5cdFx0XHRcdFx0Ri5vdmVybGF5KCk7XG5cdFx0XHRcdFx0bGV0IG1vZGFsX2lkID0gby5tb2RhbF9pZDtcblx0XHRcdFx0XHQkKFwiI292ZXJsYXlfcGFuXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0X3RoaXMuY2xvc2VNb2RhbChtb2RhbF9pZClcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkKG8uY2xvc2VCdXR0b24pLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0X3RoaXMuY2xvc2VNb2RhbChtb2RhbF9pZClcblx0XHRcdFx0XHRcdG8uY2xvc2VmdW50aW9uKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JChcIiNvdmVybGF5X3BhblwiKS5jc3Moe1xuXHRcdFx0XHRcdFx0XCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcblx0XHRcdFx0XHRcdFwib3BhY2l0eVwiOiBvLm92ZXJsYXlcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkKG1vZGFsX2lkKS5jc3Moe1xuXHRcdFx0XHRcdFx0XCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG5cdFx0XHRcdFx0XHRcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuXHRcdFx0XHRcdFx0XCJ6LWluZGV4XCI6IDExMDAwLFxuXHRcdFx0XHRcdFx0XCJib3R0b21cIjogby5ib3R0b20gKyBcInB4XCIsXG5cdFx0XHRcdFx0XHRcInRvcFwiOiBvLnRvcCArIFwicHhcIlxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQobW9kYWxfaWQpLmFkZENsYXNzKFwiYW5pbWF0ZWQgem9vbUluXCIpO1xuXHRcdFx0XHR9IGVsc2UgaWYoby50eXBlID09IDIpIHsgLy/nlLHkuIvlvoDkuIpcblx0XHRcdFx0XHRGLm92ZXJsYXkoKTtcblx0XHRcdFx0XHR2YXIgbW9kYWxfaWQgPSBvLm1vZGFsX2lkO1xuXHRcdFx0XHRcdCQoXCIjb3ZlcmxheV9wYW5cIikuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRfdGhpcy5jbG9zZU1vZGFsKG1vZGFsX2lkKTtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkKG8uY2xvc2VCdXR0b24pLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0X3RoaXMuY2xvc2VNb2RhbChtb2RhbF9pZCk7XG5cdFx0XHRcdFx0XHRvLmNsb3NlZnVudGlvbigpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0dmFyICRsaXN0ID0gJChtb2RhbF9pZCk7XG5cdFx0XHRcdFx0JGxpc3QuY3NzKFwiZGlzcGxheVwiLCAnJyk7XG5cdFx0XHRcdFx0JGxpc3QuY3NzKFwiYm90dG9tXCIsIC0kbGlzdC5oZWlnaHQoKSk7XG5cblx0XHRcdFx0XHQkKFwiI292ZXJsYXlfcGFuXCIpLmNzcyh7XG5cdFx0XHRcdFx0XHRcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuXHRcdFx0XHRcdFx0XCJvcGFjaXR5XCI6IG8ub3ZlcmxheVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQobW9kYWxfaWQpLmNzcyh7XG5cdFx0XHRcdFx0XHRcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcblx0XHRcdFx0XHRcdFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG5cdFx0XHRcdFx0XHRcInotaW5kZXhcIjogMTEwMDAsXG5cdFx0XHRcdFx0XHRcImJvdHRvbVwiOiBvLmJvdHRvbSArIFwicHhcIixcblx0XHRcdFx0XHRcdFwidG9wXCI6IG8udG9wICsgXCJweFwiXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JChtb2RhbF9pZCkuYWRkQ2xhc3MoXCJhbmltYXRlZCBmYWRlSW5VcFwiKTtcblxuXHRcdFx0XHR9IGVsc2UgaWYoby50eXBlID09IDMpIHtcblx0XHRcdFx0XHQvL+eUsXlvdeW+gHp1b1xuXHRcdFx0XHRcdHZhciBtb2RhbF9pZCA9IG8ubW9kYWxfaWQ7XG5cdFx0XHRcdFx0JChcIiNvdmVybGF5X3BhblwiKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdF90aGlzLmNsb3NlTW9kYWwobW9kYWxfaWQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQoby5jbG9zZUJ1dHRvbikuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRfdGhpcy5jbG9zZU1vZGFsKG1vZGFsX2lkKTtcblx0XHRcdFx0XHRcdG8uY2xvc2VmdW50aW9uKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHR2YXIgJGxpc3QgPSAkKG1vZGFsX2lkKTtcblx0XHRcdFx0XHQkbGlzdC5jc3MoXCJkaXNwbGF5XCIsICcnKTtcblx0XHRcdFx0XHQkbGlzdC5jc3MoXCJyaWdodFwiLCAkbGlzdC53aWR0aCgpKTtcblxuXHRcdFx0XHRcdCQoXCIjb3ZlcmxheV9wYW5cIikuY3NzKHtcblx0XHRcdFx0XHRcdFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG5cdFx0XHRcdFx0XHRcIm9wYWNpdHlcIjogby5vdmVybGF5XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JChtb2RhbF9pZCkuY3NzKHtcblx0XHRcdFx0XHRcdFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuXHRcdFx0XHRcdFx0XCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcblx0XHRcdFx0XHRcdFwiei1pbmRleFwiOiAxMTAwMCxcblx0XHRcdFx0XHRcdFwiYm90dG9tXCI6IG8uYm90dG9tICsgXCJweFwiLFxuXHRcdFx0XHRcdFx0XCJ0b3BcIjogby50b3AgKyBcInB4XCJcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkKG1vZGFsX2lkKS5hZGRDbGFzcyhcImFuaW1hdGVkIGZhZGVJblJpZ2h0QmlnXCIpO1xuXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR0aXBNb2RhbDogZnVuY3Rpb24ob3B0aW9ucykge1xuXHRcdFx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdFx0XHRGLm92ZXJsYXkoKTsgLy/mt7vliqDljYrpgI/mmI7okpnlsYJcblx0XHRcdFx0dmFyIG8gPSAkLmV4dGVuZCh0aXBjb25maWcsIG9wdGlvbnMpOyAvL+iOt+WPluaPkuS7tumFjee9rlxuXHRcdFx0XHRGLnRpcE1vZChvKTsgLy/moLnmja7phY3nva4g5riy5p+T5by556qXZG9tXG5cdFx0XHRcdHZhciBtb2RhbF9pZCA9ICcjdGlwX21vZCc7IC8v6I635Y+W5riy5p+T55qEZG9tIOeahCAgaWRcblx0XHRcdFx0JChcIiNvdmVybGF5X3BhblwiKS5jbGljayhmdW5jdGlvbigpIHsgLy/ngrnlh7vljYrpgI/mmI4gICAgIOinpuWPkeS6i+S7tlxuXHRcdFx0XHRcdF90aGlzLmNsb3NlTW9kYWwobW9kYWxfaWQpOyAvL+WFs+mXreW8ueeql1xuXHRcdFx0XHRcdG8uY2FuY2VsX2Z1bmN0aW9uKFwib3ZlcmxheVwiKTsgLy/lhbPpl63mjInpkq7nmoTkuovku7Zcblx0XHRcdFx0fSk7XG5cdFx0XHRcdCQoJyN0cnVlLWJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCkgeyAvLyDnu5Hlrprnoa7orqTmjInpkq5cblx0XHRcdFx0XHRfdGhpcy5jbG9zZU1vZGFsKG1vZGFsX2lkKTsgLy/lhbPpl63lvLnnqpdcblx0XHRcdFx0XHRvLnRydWVfZnVuY3Rpb24oKTsgLy/op6blj5Hnoa7orqTmjInpkq7nmoTkuovku7Zcblx0XHRcdFx0fSk7XG5cdFx0XHRcdCQoJyNjYW5jZWwtYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oKSB7IC8v57uR5a6a5Y+W5raI5oyJ6ZKuXG5cdFx0XHRcdFx0X3RoaXMuY2xvc2VNb2RhbChtb2RhbF9pZCk7IC8v5YWz6Zet5by556qXXG5cdFx0XHRcdFx0by5jYW5jZWxfZnVuY3Rpb24oXCJjYW5jZWxcIik7IC8v5YWz6Zet5oyJ6ZKu55qE5LqL5Lu2XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQkKFwiI292ZXJsYXlfcGFuXCIpLmNzcyh7IC8v6K6+572uIOWNiumAj+aYjiBvdmVybGF555qEICDpgI/mmI7luqYg5bm25LiU5pi+56S6XG5cdFx0XHRcdFx0XCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcblx0XHRcdFx0XHRcIm9wYWNpdHlcIjogMC41XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQkKG1vZGFsX2lkKS5jc3MoeyAvL+aYvuekuuW8ueeql1xuXHRcdFx0XHRcdFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuXHRcdFx0XHRcdFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG5cdFx0XHRcdFx0XCJ6LWluZGV4XCI6IDExMDAwLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0JChtb2RhbF9pZCkuYWRkQ2xhc3MoXCJhbmltYXRlZCB6b29tSW5cIik7IC8v5re75Yqg5Yqo55S7XG5cdFx0XHR9LFxuXHRcdFx0Y2xvc2VNb2RhbDogZnVuY3Rpb24obW9kYWxfaWQpIHtcblx0XHRcdFx0JChcIiNvdmVybGF5X3BhblwiKS5jc3MoeyAvL+makOiXj292ZXJsYXlcblx0XHRcdFx0XHRcImRpc3BsYXlcIjogXCJub25lXCJcblx0XHRcdFx0fSk7XG5cdFx0XHRcdCQobW9kYWxfaWQpLmNzcyh7IC8v6ZqQ6JeP5by556qXXG5cdFx0XHRcdFx0XCJkaXNwbGF5XCI6IFwibm9uZVwiXG5cdFx0XHRcdH0pXG5cblx0XHRcdH0sXG5cdFx0XHRmbGFzaEludG86IGZ1bmN0aW9uKHN0cikge1xuXHRcdFx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdFx0XHRGLmZsYXNoTW9kKHN0cik7XG5cdFx0XHRcdCQoXCIjZnNobW9kXCIpLmFkZENsYXNzKCd5YycpO1xuXHRcdFx0XHQkKFwiI2ZzaG1vZFwiKS5jc3Moe1xuXHRcdFx0XHRcdFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuXHRcdFx0XHRcdFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG5cdFx0XHRcdFx0XCJ6LWluZGV4XCI6IDExMDAwLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0JCgnI2ZzaG1vZCcpLmFkZENsYXNzKFwiYW5pbWF0ZWQgem9vbUluXCIpO1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdF90aGlzLmZsYXNoT3V0KClcblx0XHRcdFx0fSwgMzAwMCk7XG5cdFx0XHR9LFxuXHRcdFx0Zmxhc2hPdXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKFwiI2ZzaG1vZFwiKS5jc3Moe1xuXHRcdFx0XHRcdFwiZGlzcGxheVwiOiBcIm5vbmVcIlxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0fVxuXHRcdHJldHVybiBNb2RhbDtcblx0fVxuXHQvKipcblx0ICog6Ieq5a6a5LmJYWpheFxuXHQgKi9cblxuY29uc3QgbXlBamF4ID0gZnVuY3Rpb24ob3B0cykge1xuXHR2YXIgTyA9IHtcblx0XHRnZXR1cmxpcDogZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgdXJsX2lwO1xuXHRcdFx0aWYoRW52ID09ICdwcm9kdWN0aW9uJyB8fCBFbnYgPT0gJ3ByZScpIHtcblx0XHRcdFx0dXJsX2lwID0gXCJodHRwczovL2FwaS41ZG91LmNuL1wiO1xuXHRcdFx0fSBlbHNlIGlmKEVudiA9PSAndGVzdCcgfHwgRW52ID09ICdkZXZlbG9wbWVudCcpIHtcblx0XHRcdFx0dXJsX2lwID0gXCJodHRwczovL2FwaXRlc3QuNWRvdS5jbi9cIjtcblx0XHRcdH1cblx0XHRcdHJldHVybiB1cmxfaXA7XG5cdFx0fSxcblx0XHRnZXR2YWx1ZTogZnVuY3Rpb24obmF0aXZlRGF0YSwga2V5c3RyKSB7XG5cdFx0XHR2YXIgY2ZnID0ge307XG5cdFx0XHR2YXIgaW9zU3RyID0gbmF0aXZlRGF0YSAmJiBuYXRpdmVEYXRhLnNwbGl0KCcsJyk7XG5cdFx0XHRpZihpb3NTdHIpIHtcblx0XHRcdFx0Zm9yKHZhciB4IGluIGlvc1N0cikge1xuXHRcdFx0XHRcdGNmZ1tpb3NTdHJbeF0uc3BsaXQoJzonKVswXV0gPSBpb3NTdHJbeF0uc3BsaXQoJzonKVsxXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNmZ1trZXlzdHJdID8gY2ZnW2tleXN0cl0gOiBcIlwiO1xuXHRcdH0sXG5cdFx0Z2V0YWljYzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmF0aXZlX2RhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5hdGl2ZV9kYXRhXCIpO1xuXHRcdFx0dmFyIGxvY2FsX2FpY2MgPSB0aGlzLmdldHZhbHVlKG5hdGl2ZV9kYXRhLCBcImFpY2NcIik7XG5cdFx0XHRyZXR1cm4gbG9jYWxfYWljYyA/IGxvY2FsX2FpY2MgOiBcIldVRE9VX0g1XCI7XG5cdFx0fSxcblx0XHRnZXRhaWNwOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuYXRpdmVfZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmF0aXZlX2RhdGFcIik7XG5cdFx0XHR2YXIgbG9jYWxfYWljcCA9IHRoaXMuZ2V0dmFsdWUobmF0aXZlX2RhdGEsIFwiYWljcFwiKTtcblx0XHRcdHJldHVybiBsb2NhbF9haWNwID8gbG9jYWxfYWljcCA6IFwiRTJFNDg4MkQ5M0NBOTM0N0NEMDJBMEMwNjhCNzc2MzJcIjtcblx0XHR9LFxuXHRcdGdldGJpbWk6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5hdGl2ZV9kYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJuYXRpdmVfZGF0YVwiKTtcblx0XHRcdHZhciBsb2NhbF9iaW1pID0gdGhpcy5nZXR2YWx1ZShuYXRpdmVfZGF0YSwgXCJiaW1pXCIpO1xuXHRcdFx0aWYobG9jYWxfYmltaSkge1xuXHRcdFx0XHRyZXR1cm4gbG9jYWxfYmltaTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBzdHJTdG9yZURhdGUgPSB3aW5kb3cubG9jYWxTdG9yYWdlID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtZW1iZXJJZFwiKSA6IENvb2tpZS5yZWFkKFwibWVtYmVySWRcIik7XG5cdFx0XHRcdGlmKHN0clN0b3JlRGF0ZSkge1xuXHRcdFx0XHRcdGlmKHN0clN0b3JlRGF0ZSAmJiBzdHJTdG9yZURhdGUuc3BsaXQoXCIsXCIpLmxlbmd0aCAhPSAxKSB7XG5cdFx0XHRcdFx0XHR2YXIgbG9jYWxfaXAgPSBzdHJTdG9yZURhdGUgPyBzdHJTdG9yZURhdGUuc3BsaXQoXCIsXCIpWzBdIDogXCJcIjtcblx0XHRcdFx0XHRcdHZhciBsb2NhbF9taSA9IHN0clN0b3JlRGF0ZSA/IHN0clN0b3JlRGF0ZS5zcGxpdChcIixcIilbMV0gOiBcIlwiO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGxvY2FsX2lwID09IHRoaXMuZ2V0dXJsaXAoKSA/IGxvY2FsX21pIDogXCJcIjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHN0clN0b3JlRGF0ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIFwiXCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGdldGJpY3Q6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5hdGl2ZV9kYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJuYXRpdmVfZGF0YVwiKTtcblx0XHRcdHZhciBsb2NhbF9iaWN0ID0gdGhpcy5nZXR2YWx1ZShuYXRpdmVfZGF0YSwgXCJiaWN0XCIpO1xuXHRcdFx0cmV0dXJuIGxvY2FsX2JpY3QgPyBsb2NhbF9iaWN0IDogXCJINVwiO1xuXHRcdH0sXG5cdFx0Z2V0YmlkbjogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmF0aXZlX2RhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5hdGl2ZV9kYXRhXCIpO1xuXHRcdFx0dmFyIGxvY2FsX2JpZG4gPSB0aGlzLmdldHZhbHVlKG5hdGl2ZV9kYXRhLCBcImJpZG5cIik7XG5cdFx0XHRyZXR1cm4gbG9jYWxfYmlkbiA/IGxvY2FsX2JpZG4gOiBcIkg1XCI7XG5cdFx0fSxcblx0XHRnZXRiaWR2OiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBiaWR2ID0gXCJcIjtcblx0XHRcdHZhciB1ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0XHRcdHZhciBpc0FuZHJvaWQgPSB1LmluZGV4T2YoJ0FuZHJvaWQnKSA+IC0xIHx8IHUuaW5kZXhPZignQWRyJykgPiAtMTsgLy9hbmRyb2lk57uI56uvIFxuXHRcdFx0dmFyIGlzaU9TID0gISF1Lm1hdGNoKC9cXChpW147XSs7KCBVOyk/IENQVS4rTWFjIE9TIFgvKTsgLy9pb3Pnu4jnq68gXG5cdFx0XHRpZihpc0FuZHJvaWQpIHtcblx0XHRcdFx0YmlkdiA9ICdBbmRyb2lkJztcblx0XHRcdH0gZWxzZSBpZihpc2lPUykge1xuXHRcdFx0XHRiaWR2ID0gJ0lPUyc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRiaWR2ID0gJ1BDJztcblx0XHRcdH1cblx0XHRcdHJldHVybiBiaWR2O1xuXHRcdH0sXG5cdFx0Z2V0c2lkOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuYXRpdmVfZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmF0aXZlX2RhdGFcIik7XG5cdFx0XHR2YXIgbG9jYWxfc2lkID0gdGhpcy5nZXR2YWx1ZShuYXRpdmVfZGF0YSwgXCJzaWRcIik7XG5cdFx0XHRyZXR1cm4gbG9jYWxfc2lkID8gbG9jYWxfc2lkIDogXCJINVwiO1xuXHRcdH0sXG5cdFx0Z2V0dGltZXN0YW1wOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBEYXRlLnBhcnNlKG5ldyBEYXRlKCkpIC8gMTAwMDtcblx0XHR9LFxuXHRcdGdldGJpZG06IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5hdGl2ZV9kYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJuYXRpdmVfZGF0YVwiKTtcblx0XHRcdHZhciBsb2NhbF9iaWRtID0gdGhpcy5nZXR2YWx1ZShuYXRpdmVfZGF0YSwgXCJiaWRtXCIpO1xuXHRcdFx0cmV0dXJuIGxvY2FsX2JpZG07XG5cdFx0fSxcblx0XHRnZXRiaW92OiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuYXRpdmVfZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmF0aXZlX2RhdGFcIik7XG5cdFx0XHR2YXIgbG9jYWxfYmlvdiA9IHRoaXMuZ2V0dmFsdWUobmF0aXZlX2RhdGEsIFwiYmlvdlwiKTtcblx0XHRcdHJldHVybiBsb2NhbF9iaW92O1xuXHRcdH0sXG5cdFx0Z2V0YmlhdjogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmF0aXZlX2RhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5hdGl2ZV9kYXRhXCIpO1xuXHRcdFx0dmFyIGxvY2FsX2JpYXYgPSB0aGlzLmdldHZhbHVlKG5hdGl2ZV9kYXRhLCBcImJpYXZcIik7XG5cdFx0XHRyZXR1cm4gbG9jYWxfYmlhdjtcblx0XHR9LFxuXHRcdGdldGxvZ2luOiBmdW5jdGlvbigpIHtcblx0XHRcdC8v6L+Z6YeM5YaZ6I635Y+W55m75b2V54q25oCB55qEanNcblx0XHRcdHJldHVybiBcIjBcIjtcblx0XHR9LFxuXHRcdGdldHNpZ246IGZ1bmN0aW9uKGtleUFycnksIGRhdGFzdHIpIHtcblx0XHRcdGtleUFycnkuc29ydCgpO1xuXHRcdFx0dmFyIGtleVN0cjEgPSAnJztcblx0XHRcdHZhciBzaWduID0gJyc7XG5cdFx0XHRmb3IodmFyIGtleSBpbiBrZXlBcnJ5KSB7XG5cdFx0XHRcdGtleVN0cjEgKz0gZGF0YXN0clsoa2V5QXJyeVtrZXldKV07XG5cdFx0XHR9XG5cdFx0XHRzaWduID0gbWQ1KGtleVN0cjEpLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRpZihsb2NhbFN0b3JhZ2UuYW5kcm9pZCA9PSBcInRydWVcIiB8fCBsb2NhbFN0b3JhZ2UuaW9zID09IFwidHJ1ZVwiKSB7XG5cdFx0XHRcdHJldHVybiBtZDUodGhpcy5nZXRhaWNjKCkgKyBzaWduKS50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHNpZ247XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvL+iOt+WPluS7o+eggeS/oeaBr1xuXHRcdGdldGNvZGVtZTogZnVuY3Rpb24oanNvbm9iaikge1xuXHRcdFx0dmFyIGNvZGUgPSBqc29ub2JqLnJlc3VsdC5jb2RlO1xuXHRcdFx0dmFyIG1lYW4gPSAnJztcblx0XHRcdGlmKGpzb25vYmoucmVzdWx0Lm1zZykge1xuXHRcdFx0XHRtZWFuID0ganNvbm9iai5yZXN1bHQubXNnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWVhbiA9ICcnO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1lYW47XG5cdFx0fSxcblx0XHQvL+iOt+WPlmNvZGVcblx0XHRnZXRjb2RlOiBmdW5jdGlvbihqc29ub2JqKSB7XG5cdFx0XHR2YXIgY29kZSA9IGpzb25vYmoucmVzdWx0LmNvZGU7XG5cdFx0XHRyZXR1cm4gY29kZTtcblx0XHR9XG5cdH1cblx0dmFyIGRlZmF1bHRzID0ge1xuXHRcdG1vZGFsdHlwZTogMSwgLy8x5Li66Zeq546w5qGGLDLkuLroh6rlrprkuYnmoYZcblx0XHRhc3luYzogdHJ1ZSxcblx0XHRpcDogTy5nZXR1cmxpcCgpLFxuXHRcdHVybDogbnVsbCxcblx0XHRkYXRhOiBudWxsLFxuXHRcdHZhbGlkYXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0cnVlXG5cdFx0fSxcblx0XHRzdWNjZXNzOiBmdW5jdGlvbigpIHt9LFxuXHRcdGVycm9yOiBmdW5jdGlvbigpIHtcblx0XHRcdG15TW9kYWwoKS5mbGFzaEludG8oXCLor7fmo4Dmn6XnvZHnu5xcIilcblx0XHR9XG5cdH07XG5cdHZhciBvcHRpb24gPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0cyk7XG5cdHZhciBkYXRhc3RyO1xuXHR2YXIga2V5QXJyeTtcblx0aWYoTy5nZXRiaW1pKCkpIHtcblx0XHQvLzHkuLrnmbvlvZXvvIww5Li65pyq55m75b2VXG5cdFx0ZGF0YXN0ciA9IHtcblx0XHRcdFwiYWkuY2NcIjogTy5nZXRhaWNjKCksXG5cdFx0XHRcImJpLm1pXCI6IE8uZ2V0YmltaSgpLFxuXHRcdFx0XCJiaS5jdFwiOiBPLmdldGJpY3QoKSxcblx0XHRcdFwiYmkuZHZcIjogTy5nZXRiaWR2KCksXG5cdFx0XHRcImJpLmRtXCI6IE8uZ2V0YmlkbSgpLFxuXHRcdFx0XCJiaS5hdlwiOiBPLmdldGJpYXYoKSxcblx0XHRcdFwiYmkub3ZcIjogTy5nZXRiaW92KCksXG5cdFx0XHRcImJpLmRuXCI6IE8uZ2V0YmlkbigpLFxuXHRcdH1cblx0XHRrZXlBcnJ5ID0gW1wiYWkuY2NcIiwgXCJiaS5taVwiLCBcImJpLmN0XCIsIFwiYmkuZHZcIiwgXCJiaS5kbVwiLCBcImJpLmF2XCIsIFwiYmkub3ZcIiwgXCJiaS5kblwiXTtcblx0fSBlbHNlIHtcblx0XHRkYXRhc3RyID0ge1xuXHRcdFx0XCJhaS5jY1wiOiBPLmdldGFpY2MoKSxcblx0XHRcdFwiYmkuY3RcIjogTy5nZXRiaWN0KCksXG5cdFx0XHRcImJpLmR2XCI6IE8uZ2V0YmlkdigpLFxuXHRcdFx0XCJiaS5kbVwiOiBPLmdldGJpZG0oKSxcblx0XHRcdFwiYmkuYXZcIjogTy5nZXRiaWF2KCksXG5cdFx0XHRcImJpLm92XCI6IE8uZ2V0YmlvdigpLFxuXHRcdFx0XCJiaS5kblwiOiBPLmdldGJpZG4oKSxcblx0XHR9XG5cdFx0a2V5QXJyeSA9IFtcImFpLmNjXCIsIFwiYmkuY3RcIiwgXCJiaS5kdlwiLCBcImJpLmRtXCIsIFwiYmkuYXZcIiwgXCJiaS5vdlwiLCBcImJpLmRuXCJdO1xuXHR9XG5cdHZhciBiZWZvcmVDcmVhdGUgPSB7XG5cdFx0bG9hZGFqYXg6IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoIW9wdHMpIHtcblx0XHRcdFx0cmV0dXJuIG9wdGlvbi5pcDtcblx0XHRcdH1cblx0XHRcdGlmKCFvcHRpb24udmFsaWRhdGUoKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9O1xuXHRcdFx0Zm9yKHZhciB4IGluIG9wdGlvbi5kYXRhKSB7XG5cdFx0XHRcdGlmKG9wdGlvbi5kYXRhW3hdICYmIHR5cGVvZihvcHRpb24uZGF0YVt4XSkgPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRpZihvcHRpb24uZGF0YVt4XS5zdWJzdHJpbmcoMCwgMSkgPT0gJy4nIHx8IG9wdGlvbi5kYXRhW3hdLnN1YnN0cmluZygwLCAxKSA9PSAnIycpIHtcblx0XHRcdFx0XHRcdGRhdGFzdHJbeF0gPSAkKG9wdGlvbi5kYXRhW3hdKS52YWwoKTtcblx0XHRcdFx0XHRcdGtleUFycnkucHVzaCh4KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZGF0YXN0clt4XSA9IG9wdGlvbi5kYXRhW3hdO1xuXHRcdFx0XHRcdFx0a2V5QXJyeS5wdXNoKHgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmKHR5cGVvZihvcHRpb24uZGF0YVt4XSkgPT0gJ251bWJlcicpIHtcblx0XHRcdFx0XHRkYXRhc3RyW3hdID0gb3B0aW9uLmRhdGFbeF07XG5cdFx0XHRcdFx0a2V5QXJyeS5wdXNoKHgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHRcdCQuYWpheCh7XG5cdFx0XHRcdHR5cGU6ICdQT1NUJyxcblx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcblx0XHRcdFx0YXN5bmM6IG9wdGlvbi5hc3luYyxcblx0XHRcdFx0dXJsOiBvcHRpb24uaXAgKyBvcHRpb24udXJsLFxuXHRcdFx0XHRkYXRhOiBkYXRhc3RyLFxuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0J3NpZCc6IE8uZ2V0c2lkKCksXG5cdFx0XHRcdFx0J3RpbWVzdGFtcCc6IE8uZ2V0dGltZXN0YW1wKCksXG5cdFx0XHRcdFx0J2FpY3AnOiBPLmdldGFpY3AoKSxcblx0XHRcdFx0XHQnYWkuY3AnOiBPLmdldGFpY3AoKSxcblx0XHRcdFx0XHQnc2lnbic6IE8uZ2V0c2lnbihrZXlBcnJ5LCBkYXRhc3RyKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyc3ApIHtcblx0XHRcdFx0XHRpZihvcHRpb24ubW9kYWx0eXBlID09IDEpIHtcblx0XHRcdFx0XHRcdGlmKE8uZ2V0Y29kZShyc3ApID09IFwiNzAwMFwiKSB7XG5cdFx0XHRcdFx0XHRcdG15TW9kYWwoKS5mbGFzaEludG8oTy5nZXRjb2RlbWUocnNwKSlcblx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi8jIS9sb2dpblwiO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZihPLmdldGNvZGVtZShyc3ApICE9ICcnKSB7XG5cdFx0XHRcdFx0XHRcdG15TW9kYWwoKS5mbGFzaEludG8oTy5nZXRjb2RlbWUocnNwKSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LyogZWxzZSBpZihvcHRpb24ubW9kYWx0eXBlID09IDIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZihPLmdldGNvZGUocnNwKSA9PSBcIjcwMDBcIikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi8jIS9sb2dpblwiO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSovXG5cdFx0XHRcdFx0b3B0aW9uLnN1Y2Nlc3MocnNwKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKGVycmluZm8pIHtcblx0XHRcdFx0XHRvcHRpb24uZXJyb3IoZXJyaW5mbyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cdHJldHVybiBiZWZvcmVDcmVhdGUubG9hZGFqYXgoKTtcbn1cblxuLypcbiAq5L2c6ICFOnBhbndlbmh1YSBcbiAq5pe26Ze0OjIwMTYtMDctMDEgMTE6MTE6MjBcbiAqIFxuICogICDoo4Hliarlm77niYdcbiAqICQoaWQpLm15SW1hZ2Uoe1xuICogdGhhdDp0aGlzLCAvL+W9k+WJjeWbvueJh+WvueixoVxuICogY3V0V2lkOicnLCAvL+ijgeWJquWwuuWvuFxuICogcXVhbGl0eTowLjYsIC8v5Zu+54mH6LSo6YePMH4xXG4gKiBsaW1pdFdpZDo0MDAsIC8v5pyA5bCP5a695bqmXG4gKiBzdWNjZXNzOmZ1bmN0aW9uIChkYXRhKSB7XG4gKiBkbyBzb21ldGhpbmcuLi4gXG4gKiAqL1xuY29uc3QgbXlJbWFnZSA9IGZ1bmN0aW9uKG9iaikge1xuXHR2YXIgbXlJbWFnZSA9IHtcblx0XHR1cGxvYWRJbWFnZTogZnVuY3Rpb24ob2JqKSB7XG5cdFx0XHR2YXIgZmlsZSA9IG9iai50aGF0WzBdLmZpbGVzWzBdO1xuXHRcdFx0dmFyIFVSTCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcblx0XHRcdHZhciBibG9iID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcblx0XHRcdHZhciBiYXNlNjQ7XG5cdFx0XHR2YXIgT3JpZW50YXRpb24gPSBudWxsO1xuXHRcdFx0dmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0aW1nLnNyYyA9IGJsb2I7XG5cdFx0XHR2YXIgckZpbHRlciA9IC9eKGltYWdlXFwvanBlZ3xpbWFnZVxcL3BuZykkL2k7XG5cdFx0XHRpZighckZpbHRlci50ZXN0KGZpbGUudHlwZSkgJiYgZmlsZS50eXBlICE9ICcnKSB7XG5cdFx0XHRcdGFsZXJ0KFwi6Z2e5Zu+54mH5qC85byP77yBXCIsIDEwMDApO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKGltZy53aWR0aCA8IG9iai5saW1pdFdpZCkge1xuXHRcdFx0XHRcdGFsZXJ0KCflm77niYflrr3luqbkuI3lvpflsI/kuo4nICsgb2JqLmxpbWl0V2lkICsgJ3B4JywgMTAwMCk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcblxuXHRcdFx0XHQvL+eUn+aIkOavlOS+i1xuXHRcdFx0XHR2YXIgdywgc2NhbGUsIGggPSB0aGF0LmhlaWdodDtcblx0XHRcdFx0aWYob2JqLmN1dFdpZCA9PSAnJykge1xuXHRcdFx0XHRcdHcgPSB0aGF0LndpZHRoO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHcgPSBvYmouY3V0V2lkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNjYWxlID0gdyAvIGg7XG5cdFx0XHRcdGggPSB3IC8gc2NhbGU7XG5cblx0XHRcdFx0Ly/nlJ/miJBjYW52YXNcblx0XHRcdFx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHRcdFx0XHR2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cdFx0XHRcdCQoY2FudmFzKS5hdHRyKHtcblx0XHRcdFx0XHR3aWR0aDogdyxcblx0XHRcdFx0XHRoZWlnaHQ6IGhcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGN0eC5kcmF3SW1hZ2UodGhhdCwgMCwgMCwgdywgaCk7XG5cdFx0XHRcdGJhc2U2NCA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnLCBvYmoucXVhbGl0eSB8fCAwLjgpO1xuXG5cdFx0XHRcdHZhciByZXN1bHQgPSB7XG5cdFx0XHRcdFx0YmFzZTY0OiBiYXNlNjRcblx0XHRcdFx0fTtcblx0XHRcdFx0Ly/miJDlip/lkI7nmoTlm57osINcblx0XHRcdFx0b2JqLnN1Y2Nlc3MocmVzdWx0KTtcblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cdHJldHVybiBteUltYWdlO1xufVxuXG5leHBvcnRzLmdldENoZWNrID0gZ2V0Q2hlY2s7XG5leHBvcnRzLmZtdERhdGUgPSBmbXREYXRlO1xuZXhwb3J0cy5NaWxsaXNlY29uZFRvRGF0ZSA9IE1pbGxpc2Vjb25kVG9EYXRlO1xuZXhwb3J0cy5teUFqYXggPSBteUFqYXg7XG5leHBvcnRzLnNlbmRDb2RlID0gc2VuZENvZGU7XG5leHBvcnRzLm15TW9kYWwgPSBteU1vZGFsO1xuZXhwb3J0cy5teUltYWdlID0gbXlJbWFnZTtcbmV4cG9ydHMuZ2V0UmFuZG9tID0gZ2V0UmFuZG9tO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWJzL3V0aWxzLmpzIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzLy4yLjAuMC1iZXRhLjRAZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2xvYWRlci5qcz97XFxcIm9taXRcXFwiOjEsXFxcInJlbW92ZVxcXCI6dHJ1ZX0hdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi03YjM3NjlmOCZzY29wZWQ9dHJ1ZSFweDJyZW0/cmVtVW5pdD02NSZyZW1QcmVjaXNpb249OCFzYXNzLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2FsZW5kYXIudnVlXCIpXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9jYWxlbmRhci52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTdiMzc2OWY4IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NhbGVuZGFyLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxwYW53ZW5odWFcXFxcRG9jdW1lbnRzXFxcXEhCdWlsZGVyUHJvamVjdFxcXFx2dWUtQ2FsZW5kYXJMaXN0Vmlld1xcXFxzcmNcXFxcY29tcG9uZW50c1xcXFxjYWxlbmRhci52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTdiMzc2OWY4XCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdiMzc2OWY4XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdiMzc2OWY4XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY2FsZW5kYXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9jYWxlbmRhci52dWVcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYWxlbmRhci1saXN0XCJcbiAgfSwgW192bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYWxlbmRhclwiXG4gIH0sIF92bS5fbCgoX3ZtLmRhdGVBcnIpLCBmdW5jdGlvbihkYXRlKSB7XG4gICAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjYWxlbmRhci1pdGVtXCJcbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImNhbGVuZGFyLWhlYWRlclwiXG4gICAgfSwgW19jKCdzcGFuJywgW192bS5fdihfdm0uX3MoZGF0ZS55KSArIFwi5bm0XCIgKyBfdm0uX3MoZGF0ZS5tKSArIFwi5pyIXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImNhbGVuZGFyLWJvZHlcIlxuICAgIH0sIFtfYygndWwnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJkYXlzXCJcbiAgICB9LCBfdm0uX2woKGRhdGUuZGF5cyksIGZ1bmN0aW9uKGRheSkge1xuICAgICAgcmV0dXJuIF9jKCdsaScsIFsoZGF5LmdldE1vbnRoKCkgKyAxICE9IGRhdGUubSkgPyBfYygnZGl2JywgW19jKCdzcGFuJyldKSA6IChfdm0uaXNUb2RheShkYXkpKSA/IF9jKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgdG9kYXk6IF92bS5pc0N1cnJlbnREYXkoZGF5KVxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICBfdm0uY2xpY2tBY3Rpb24oZGF5KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgW19jKCdzcGFuJywgW192bS5fdihfdm0uX3MoJ+S7iuWkqScpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaScsIFtfdm0uX3YoX3ZtLl9zKF92bS5nZXROdW0oZGF5KSkpXSldKSA6IF9jKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgdG9kYXk6IF92bS5pc0N1cnJlbnREYXkoZGF5KVxuICAgICAgICB9XG4gICAgICB9LCBbKGRheSA8IG5ldyBEYXRlKCkpID8gW19jKCdzcGFuJywge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJkaXNhYmxlZFwiXG4gICAgICB9LCBbX3ZtLl92KF92bS5fcyhkYXkuZ2V0RGF0ZSgpKSldKV0gOiBbX2MoJ3NwYW4nLCB7XG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5jbGlja0FjdGlvbihkYXkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBbX3ZtLl92KF92bS5fcyhkYXkuZ2V0RGF0ZSgpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2knLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm51bXNcIlxuICAgICAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmdldE51bShkYXkpKSldKV1dLCAyKV0pXG4gICAgfSkpXSldKVxuICB9KSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3ZWVrXCJcbiAgfSwgW19jKCdsaScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJjb2xvclwiOiBcIiNDQ0NDQ0NcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIuaXpVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCBbX3ZtLl92KFwi5LiAXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdsaScsIFtfdm0uX3YoXCLkuoxcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xpJywgW192bS5fdihcIuS4iVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCBbX3ZtLl92KFwi5ZubXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdsaScsIFtfdm0uX3YoXCLkupRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xpJywgW192bS5fdihcIuWFrVwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03YjM3NjlmOFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMTAuMC4yQHZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi03YjM3NjlmOCEuL34vLjEwLjAuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9jYWxlbmRhci52dWVcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi4wLjAtYmV0YS40QGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9sb2FkZXIuanM/e1wib21pdFwiOjEsXCJyZW1vdmVcIjp0cnVlfSEuL34vLjEuMC4wQHZ1ZS1zdHlsZS1sb2FkZXIhLi9+Ly4wLjI2LjFAY3NzLWxvYWRlciEuL34vLjEwLjAuMkB2dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2IzNzY5Zjgmc2NvcGVkPXRydWUhLi9+Ly4wLjEuN0BweDJyZW0tbG9hZGVyP3JlbVVuaXQ9NjUmcmVtUHJlY2lzaW9uPTghLi9+Ly40LjEuMUBzYXNzLWxvYWRlciEuL34vLjEwLjAuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvY2FsZW5kYXIudnVlXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwiY2FsZW5kYXItbGlzdFwiPlxuXHRcdDx1bCBjbGFzcz1cIndlZWtcIj5cblx0XHRcdDxsaSBzdHlsZT1cImNvbG9yOiAjQ0NDQ0NDO1wiPuaXpTwvbGk+XG5cdFx0XHQ8bGk+5LiAPC9saT5cblx0XHRcdDxsaT7kuow8L2xpPlxuXHRcdFx0PGxpPuS4iTwvbGk+XG5cdFx0XHQ8bGk+5ZubPC9saT5cblx0XHRcdDxsaT7kupQ8L2xpPlxuXHRcdFx0PGxpPuWFrTwvbGk+XG5cdFx0PC91bD5cblx0XHQ8ZGl2IGNsYXNzPVwiY2FsZW5kYXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjYWxlbmRhci1pdGVtXCIgdi1mb3I9XCJkYXRlIGluIGRhdGVBcnJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNhbGVuZGFyLWhlYWRlclwiPjxzcGFuPnt7ZGF0ZS55fX3lubR7e2RhdGUubX195pyIPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FsZW5kYXItYm9keVwiPlxuXHRcdFx0XHRcdDx1bCBjbGFzcz1cImRheXNcIj5cblx0XHRcdFx0XHRcdDxsaSB2LWZvcj1cImRheSBpbiBkYXRlLmRheXNcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiB2LWlmPVwiZGF5LmdldE1vbnRoKCkrMSAhPSBkYXRlLm1cIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IHYtZWxzZS1pZj1cImlzVG9kYXkoZGF5KVwiIEBjbGljaz1cImNsaWNrQWN0aW9uKGRheSlcIiA6Y2xhc3M9XCJ7dG9kYXk6IGlzQ3VycmVudERheShkYXkpfVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPnt7ICfku4rlpKknIH19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxpPnt7Z2V0TnVtKGRheSl9fTwvaT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgdi1lbHNlIDpjbGFzcz1cInt0b2RheTogaXNDdXJyZW50RGF5KGRheSl9XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHRlbXBsYXRlIHYtaWY9XCJkYXk8bmV3IERhdGUoKVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJkaXNhYmxlZFwiPnt7IGRheS5nZXREYXRlKCkgfX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC90ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdFx0XHQ8dGVtcGxhdGUgdi1lbHNlPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gQGNsaWNrPVwiY2xpY2tBY3Rpb24oZGF5KVwiPnt7IGRheS5nZXREYXRlKCkgfX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cIm51bXNcIj57e2dldE51bShkYXkpfX08L2k+XG5cdFx0XHRcdFx0XHRcdFx0PC90ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGN1cnJlbnREYXRlOiB7XG5cdFx0XHRcdFx0XHRjdXJyZW50RGF5OiBudWxsLFxuXHRcdFx0XHRcdFx0Y3VycmVudE1vbnRoOiBudWxsLFxuXHRcdFx0XHRcdFx0Y3VycmVudFllYXI6IG51bGwsXG5cdFx0XHRcdFx0XHRjdXJyZW50V2VlazogbnVsbFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZGF0ZUFycjogW11cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHByb3BzOiBbJ2Fyb3VkJywgJ2NsaWNrQWN0aW9uJywgJ251bXMnLCAnc2VsZWN0RGF0ZSddLFxuXHRcdFx0Y29tcHV0ZWQ6IHtcblxuXHRcdFx0fSxcblx0XHRcdGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRmb3IodmFyIHggPSAwOyB4IDwgdGhpcy5hcm91ZDsgeCsrKSB7XG5cdFx0XHRcdFx0dmFyIGRheXMgPSB0aGlzLmNhbGVuZGFySW5pdCh0aGlzLmN1cnJlbnREYXRlLmN1cnJlbnRZZWFyLCB0aGlzLmN1cnJlbnREYXRlLmN1cnJlbnRNb250aCk7XG5cdFx0XHRcdFx0dmFyIHRpbWVPYmogPSB7XG5cdFx0XHRcdFx0XHR5OiB0aGlzLmN1cnJlbnREYXRlLmN1cnJlbnRZZWFyLFxuXHRcdFx0XHRcdFx0bTogdGhpcy5jdXJyZW50RGF0ZS5jdXJyZW50TW9udGgsXG5cdFx0XHRcdFx0XHRkYXlzOiBkYXlzXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR0aGlzLmRhdGVBcnIucHVzaCh0aW1lT2JqKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdG1ldGhvZHM6IHtcblx0XHRcdFx0aXNDdXJyZW50RGF5OiBmdW5jdGlvbihkYXkpIHtcblx0XHRcdFx0XHRsZXQgZCA9IHRoaXMuc2VsZWN0RGF0ZTtcblx0XHRcdFx0XHRpZihkICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdHJldHVybiBkYXkuZ2V0RnVsbFllYXIoKSA9PSBkLmdldEZ1bGxZZWFyKCkgJiYgZGF5LmdldE1vbnRoKCkgPT0gZC5nZXRNb250aCgpICYmIGRheS5nZXREYXRlKCkgPT0gZC5nZXREYXRlKCkgPyB0cnVlIDogZmFsc2U7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBkYXkuZ2V0RnVsbFllYXIoKSA9PSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgJiYgZGF5LmdldE1vbnRoKCkgPT0gbmV3IERhdGUoKS5nZXRNb250aCgpICYmIGRheS5nZXREYXRlKCkgPT0gbmV3IERhdGUoKS5nZXREYXRlKCkgPyB0cnVlIDogZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRnZXROdW06IGZ1bmN0aW9uKGRhdGUpIHtcblx0XHRcdFx0XHR2YXIgbGFzdERheSA9IHRoaXMubnVtcy5sZW5ndGggJiYgdGhpcy5udW1zW3RoaXMubnVtcy5sZW5ndGggLSAxXS5yZVRyYXZlbERhdGU7XG5cdFx0XHRcdFx0dmFyIGRheSA9IHRoaXMuZm9ybWF0RGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIGRhdGUuZ2V0RGF0ZSgpKTtcblx0XHRcdFx0XHRpZihkYXkgPiBsYXN0RGF5KSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygxKTtcblx0XHRcdFx0XHRcdHJldHVybiAnJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9yKHZhciB4IGluIHRoaXMubnVtcykge1xuXHRcdFx0XHRcdFx0aWYodGhpcy5udW1zW3hdLnJlVHJhdmVsRGF0ZSA9PSBkYXkpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuICfliaknICsgdGhpcy5udW1zW3hdLmF2YWlsYWJsZUFtb3VudCArICfkuronO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0aXNUb2RheTogZnVuY3Rpb24oZGF5KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGRheS5nZXRGdWxsWWVhcigpID09IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAmJiBkYXkuZ2V0TW9udGgoKSA9PSBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgJiYgZGF5LmdldERhdGUoKSA9PSBuZXcgRGF0ZSgpLmdldERhdGUoKSA/IHRydWUgOiBmYWxzZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0Z2V0RGF5OiBmdW5jdGlvbihkYXRlKSB7XG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50RGF0ZS5jdXJyZW50RGF5ID0gZGF0ZS5nZXREYXRlKCk7XG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50RGF0ZS5jdXJyZW50WWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnREYXRlLmN1cnJlbnRNb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50RGF0ZS5jdXJyZW50V2VlayA9IGRhdGUuZ2V0RGF5KCkgKyAxO1xuXHRcdFx0XHRcdGlmKHRoaXMuY3VycmVudERhdGUuY3VycmVudFdlZWsgPT0gMCkge1xuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50RGF0ZS5jdXJyZW50V2VlayA9IDc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRmb3JtYXREYXRlOiBmdW5jdGlvbih5ZWFyLCBtb250aCwgZGF5KSB7XG5cdFx0XHRcdFx0dmFyIHkgPSB5ZWFyO1xuXHRcdFx0XHRcdHZhciBtID0gbW9udGg7XG5cdFx0XHRcdFx0aWYobSA8IDEwKSBtID0gXCIwXCIgKyBtO1xuXHRcdFx0XHRcdHZhciBkID0gZGF5O1xuXHRcdFx0XHRcdGlmKGQgPCAxMCkgZCA9IFwiMFwiICsgZDtcblx0XHRcdFx0XHRyZXR1cm4geSArIFwiLVwiICsgbSArIFwiLVwiICsgZFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRjYWxlbmRhckluaXQ6IGZ1bmN0aW9uKHllYXIsIG1vbnRoKSB7XG5cdFx0XHRcdFx0dmFyIGRhdGUsIGQ7XG5cdFx0XHRcdFx0dmFyIGRheXMgPSBbXTtcblx0XHRcdFx0XHRpZih5ZWFyID09IG51bGwgfHwgbW9udGggPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0dmFyIF9kYXRlID0gbmV3IERhdGUoKTtcblx0XHRcdFx0XHRcdGQgPSBuZXcgRGF0ZShfZGF0ZS5nZXRGdWxsWWVhcigpLCBfZGF0ZS5nZXRNb250aCgpIC0gMSwgMSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGQgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkLnNldERhdGUoNDIpO1xuXHRcdFx0XHRcdGRhdGUgPSBuZXcgRGF0ZShkLmdldEZ1bGxZZWFyKCksIGQuZ2V0TW9udGgoKSwgMSk7XG5cdFx0XHRcdFx0dGhpcy5nZXREYXkoZGF0ZSk7XG5cdFx0XHRcdFx0Zm9yKHZhciBpID0gdGhpcy5jdXJyZW50RGF0ZS5jdXJyZW50V2VlayAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdFx0XHR2YXIgZCA9IG5ldyBEYXRlKHRoaXMuY3VycmVudERhdGUuY3VycmVudFllYXIsIHRoaXMuY3VycmVudERhdGUuY3VycmVudE1vbnRoIC0gMSwgdGhpcy5jdXJyZW50RGF0ZS5jdXJyZW50RGF5KTtcblx0XHRcdFx0XHRcdGQuc2V0RGF0ZShkLmdldERhdGUoKSAtIGkpO1xuXHRcdFx0XHRcdFx0ZGF5cy5wdXNoKGQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmb3IodmFyIGkgPSAxOyBpIDw9IDQyIC0gdGhpcy5jdXJyZW50RGF0ZS5jdXJyZW50V2VlazsgaSsrKSB7XG5cdFx0XHRcdFx0XHR2YXIgZCA9IG5ldyBEYXRlKHRoaXMuY3VycmVudERhdGUuY3VycmVudFllYXIsIHRoaXMuY3VycmVudERhdGUuY3VycmVudE1vbnRoIC0gMSwgdGhpcy5jdXJyZW50RGF0ZS5jdXJyZW50RGF5KTtcblx0XHRcdFx0XHRcdGQuc2V0RGF0ZShkLmdldERhdGUoKSArIGkpO1xuXHRcdFx0XHRcdFx0ZGF5cy5wdXNoKGQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gZGF5cztcblx0XHRcdFx0fSxcblx0XHRcdFx0LypzZWxlY3Q6IGZ1bmN0aW9uKGRhdGUpIHtcblx0XHRcdFx0XHRhbGVydCh0aGlzLmZvcm1hdERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCBkYXRlLmdldERhdGUoKSkpO1xuXHRcdFx0XHR9LCovXG5cdFx0XHR9LFxuXG5cdH1cbjwvc2NyaXB0PlxuPHN0eWxlIGxhbmc9XCJzYXNzXCIgc2NvcGVkPlxuXHQudG9kYXkge1xuXHRcdC8qcHgqL1xuXHRcdGhlaWdodDogODZweDtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0XHRiYWNrZ3JvdW5kOiAjMzdCN0ZBO1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNGRkZGRkY7XG5cdH1cblx0XG5cdC5jYWxlbmRhci1saXN0IHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHR9XG5cdFxuXHQuY2FsZW5kYXIge1xuXHRcdHBhZGRpbmctdG9wOiAwLjI3cmVtO1xuXHR9XG5cdFxuXHQud2VlayB7XG5cdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdHotaW5kZXg6IDUwO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGJhY2tncm91bmQ6ICNGOUY4Rjg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdFx0bGkge1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDQwcHg7XG5cdFx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRcdFx0Zm9udC1zaXplOiAyNS43cHg7XG5cdFx0XHQvKnB4Ki9cblx0XHRcdGZvbnQtd2VpZ2h0OiBtZWRpdW07XG5cdFx0fVxuXHR9XG5cdFxuXHQuY2FsZW5kYXItaXRlbSB7XG5cdFx0JjpudGgtb2YtdHlwZSgxKSB7XG5cdFx0XHRtYXJnaW4tdG9wOiA0MHB4O1xuXHRcdH1cblx0XHRwYWRkaW5nLWJvdHRvbTogMC4xcmVtO1xuXHRcdC5jYWxlbmRhci1oZWFkZXIge1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0Zm9udC1zaXplOiAyOHB4O1xuXHRcdFx0LypweCovXG5cdFx0XHRjb2xvcjogIzMzMzMzMztcblx0XHRcdGZvbnQtd2VpZ2h0OiBtZWRpdW07XG5cdFx0XHRwYWRkaW5nOiAyMHB4IDAgMTBweCAwO1xuXHRcdH1cblx0XHQuY2FsZW5kYXItYm9keSB7XG5cdFx0XHR1bCB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdFx0XHRcdGxpIHtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0aGVpZ2h0OiA4NnB4O1xuXHRcdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBtZWRpdW07XG5cdFx0XHRcdFx0Y29sb3I6ICM3OTc5Nzk7XG5cdFx0XHRcdFx0d2lkdGg6IDE0LjI4JTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRkaXYge1xuXHRcdFx0XHRcdFx0LypweCovXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDg2cHg7XG5cdFx0XHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyNS43cHg7XG5cdFx0XHRcdFx0XHRcdC8qcHgqL1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDQ2cHg7XG5cdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAzOS42M3B4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aSB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0XHRcdFx0LypweCovXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyNXB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lm51bXMge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzM3QjdGQTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0c3BhbltjbGFzcz1kaXNhYmxlZF0ge1xuXHRcdFx0XHRcdGNvbG9yOiAjQ0NDQ0NDO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjYWxlbmRhci52dWU/YjkzNGE3MjgiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvY29tcGxldGUucG5nP3Y9YTRhMmMzYTNcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvaW1hZ2VzL2NvbXBvbmVudHMvY29tcGxldGUucG5nXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnbnYtaGVhZCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwYWdlLW5hbWVcIjogX3ZtLmhlYWRUaXQudGFiMSxcbiAgICAgIFwiYmFjay10eXBlXCI6IF92bS5oZWFkVGl0LmJhY2tcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc2VjdGlvbicsIFtfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaGlzdG9yeW9yZGVyXCJcbiAgfSwgX3ZtLl9sKChfdm0uaXRlbXMpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIFtfYygnaDQnLCBbX3ZtLl92KF92bS5fcyhpdGVtLnRyYXZlbFByb2plY3ROYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ4aW54aVwiXG4gICAgfSwgW192bS5fdihcIuWHuuihjOaXpeacn++8mlwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KF92bS5fcyhpdGVtLnRyYXZlbERhdGUpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwieGlueGlcIlxuICAgIH0sIFtfdm0uX3YoXCLlh7rooYzkurrmlbDvvJpcIiksIF9jKCdzcGFuJywgW192bS5fdihfdm0uX3MoaXRlbS5wZXJzb25BbW91bnQpKV0pLCBfdm0uX3YoXCLkurpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgICBjbGFzczoge1xuICAgICAgICAnc2gtc3RhdHUnOiBpdGVtLnN0YXRlID09ICcxJywgJ3hpbnhpJzogaXRlbS5zdGF0ZSA9PSAnMCdcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwi54q25oCB77yaXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoX3ZtLl9zKF92bS5fZihcIm9yZGVyc3RhdGVcIikoaXRlbS5zdGF0ZSkpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1vcmVcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidG9cIjoge1xuICAgICAgICAgIHBhdGg6ICdjb21wbGV0ZWRJbmZvJyxcbiAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgdHJhdmVsQ29kZTogaXRlbS50cmF2ZWxDb2RlLFxuICAgICAgICAgICAgb3JkZXJOdW06IGl0ZW0ub3JkZXJOdW1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XCIgKyBfdm0uX3MoX3ZtLl9mKFwibGlua3RleHRcIikoaXRlbS5zdGF0ZSkpICsgXCI+PlxcblxcdFxcdFxcdFxcdFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgY2xhc3M6IFtpdGVtLnN0YXRlID09ICcwJyA/ICdhbGwtc3RhdHUnIDogJ2hpZGUnXVxuICAgIH0sIFtfYygnaW1nJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcmNcIjogcmVxdWlyZShcIi4uL2Fzc2V0cy9pbWFnZXMvY29tcG9uZW50cy9jb21wbGV0ZS5wbmdcIilcbiAgICAgIH1cbiAgICB9KV0pXSwgMSlcbiAgfSkpXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1jNjVjZjYzOFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMTAuMC4yQHZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1jNjVjZjYzOCEuL34vLjEwLjAuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvdmlld3MvaGlzdG9yeW9yZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuMC4wLWJldGEuNEBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vbG9hZGVyLmpzP3tcIm9taXRcIjoxLFwicmVtb3ZlXCI6dHJ1ZX0hLi9+Ly4xLjAuMEB2dWUtc3R5bGUtbG9hZGVyIS4vfi8uMC4yNi4xQGNzcy1sb2FkZXIhLi9+Ly4xMC4wLjJAdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWM2NWNmNjM4JnNjb3BlZD10cnVlIS4vfi8uMC4xLjdAcHgycmVtLWxvYWRlcj9yZW1Vbml0PTY1JnJlbVByZWNpc2lvbj04IS4vfi8uNC4xLjFAc2Fzcy1sb2FkZXIhLi9+Ly4xMC4wLjJAdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy92aWV3cy9oaXN0b3J5b3JkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PCEtLSDlhajlsYBoZWFkZXIgLS0+XG5cdFx0PG52LWhlYWQgOnBhZ2UtbmFtZT1cImhlYWRUaXQudGFiMVwiIDpiYWNrLXR5cGU9XCJoZWFkVGl0LmJhY2tcIj48L252LWhlYWQ+XG5cdFx0PHNlY3Rpb24+XG5cdFx0XHQ8dWwgY2xhc3M9XCJoaXN0b3J5b3JkZXJcIj5cblx0XHRcdFx0PGxpIHYtZm9yPVwiaXRlbSBpbiBpdGVtc1wiPlxuXHRcdFx0XHRcdDxoND57e2l0ZW0udHJhdmVsUHJvamVjdE5hbWV9fTwvaDQ+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJ4aW54aVwiPuWHuuihjOaXpeacn++8mjxzcGFuPnt7aXRlbS50cmF2ZWxEYXRlfX08L3NwYW4+PC9wPlxuXHRcdFx0XHRcdDxwIGNsYXNzPVwieGlueGlcIj7lh7rooYzkurrmlbDvvJo8c3Bhbj57e2l0ZW0ucGVyc29uQW1vdW50fX08L3NwYW4+5Lq6PC9wPlxuXHRcdFx0XHRcdDxwIDpjbGFzcz1cInsnc2gtc3RhdHUnOiBpdGVtLnN0YXRlPT0nMScsJ3hpbnhpJzogaXRlbS5zdGF0ZT09JzAnfVwiPueKtuaAge+8mjxzcGFuPnt7aXRlbS5zdGF0ZXxvcmRlcnN0YXRlfX08L3NwYW4+PC9wPlxuXHRcdFx0XHRcdDxyb3V0ZXItbGluayBjbGFzcz1cIm1vcmVcIiA6dG89XCJ7cGF0aDogJ2NvbXBsZXRlZEluZm8nLCBxdWVyeToge3RyYXZlbENvZGU6aXRlbS50cmF2ZWxDb2RlLG9yZGVyTnVtOml0ZW0ub3JkZXJOdW19fVwiPlxuXHRcdFx0XHRcdFx0e3tpdGVtLnN0YXRlfGxpbmt0ZXh0fX0+PlxuXHRcdFx0XHRcdDwvcm91dGVyLWxpbms+XG5cdFx0XHRcdFx0PCEtLTxhIGhyZWY9XCJcIiA+IDwvYT4tLT5cblx0XHRcdFx0XHQ8ZGl2IDpjbGFzcz1cIltpdGVtLnN0YXRlPT0nMCcgPyAnYWxsLXN0YXR1JzonaGlkZSddXCI+PGltZyBzcmM9XCIuLi9hc3NldHMvaW1hZ2VzL2NvbXBvbmVudHMvY29tcGxldGUucG5nXCIgLz48L2Rpdj5cblx0XHRcdFx0PC9saT5cblx0XHRcdDwvdWw+XG5cdFx0PC9zZWN0aW9uPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuXHR2YXIgXyQgPSByZXF1aXJlKCcuLi9saWJzL3V0aWxzJyk7XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGhlYWRUaXQ6IHtcblx0XHRcdFx0XHRcdHRhYjE6ICfljoblj7LorqLljZUnLFxuXHRcdFx0XHRcdFx0YmFjazogJ29rJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0aXRlbXM6e30sXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRjcmVhdGVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0IG1lID0gdGhpcztcblx0XHRcdFx0XyQubXlBamF4KHtcblx0XHRcdFx0XHRtb2RhbHR5cGU6IDIsIC8vMeS4uumXqueOsOahhiwy5Li66Ieq5a6a5LmJ5qGGXG5cdFx0XHRcdFx0dXJsOiAnYXBpL3RyYXZlbC90cmF2ZWxjYXJkL3RyYXZlbE9yZGVyTGlzdC5qc29uJyxcblx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHQndHJhdmVsQ29kZSc6IDg4ODg4OCxcblx0XHRcdFx0XHRcdCdwYWdlSW5mby50b1BhZ2UnOjBcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHN0cikge1xuXHRcdFx0XHRcdFx0aWYoc3RyLnJlc3VsdC5jb2RlID09IFwiMTAwMFwiKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKDEpO1xuXHRcdFx0XHRcdFx0XHRtZS5pdGVtcz1zdHIuZGF0YTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0bWV0aG9kczoge1xuXG5cdFx0XHR9LFxuXHRcdFx0Y29tcG9uZW50czoge1xuXHRcdFx0XHRcIm52SGVhZFwiOiByZXF1aXJlKCcuLi9jb21wb25lbnRzL2hlYWRlci52dWUnKSxcblx0XHRcdFx0XCJjYWxlbmRhckVsXCI6IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvY2FsZW5kYXIudnVlJyksXG5cdFx0XHR9LFxuXHR9XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic2Fzc1wiIHNjb3BlZD5cblx0Lmhpc3RvcnlvcmRlciBsaSB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHdpZHRoOiA2MDBweDtcblx0XHRoZWlnaHQ6IDI5MHB4O1xuXHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0XHRib3gtc2hhZG93OiAwcHggMnB4IDJweCAwcHggcmdiYSgxNDcsIDE0NywgMTQ3LCAwLjMzKTtcblx0XHRtYXJnaW46IDIwcHggYXV0byAwIGF1dG87XG5cdFx0cGFkZGluZzogMCAyMHB4O1xuXHRcdCY6OmJlZm9yZSB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRsZWZ0OiAtMTBweDtcblx0XHRcdHRvcDogNzBweDtcblx0XHRcdHdpZHRoOiAyNnB4O1xuXHRcdFx0aGVpZ2h0OiAyNnB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0YmFja2dyb3VuZDogI2Y0ZjRmNDtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0ei1pbmRleDogMjtcblx0XHRcdGNvbnRlbnQ6ICcnO1xuXHRcdH1cblx0XHQmOjphZnRlciB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRyaWdodDogLTEwcHg7XG5cdFx0XHR0b3A6IDcwcHg7XG5cdFx0XHR3aWR0aDogMjZweDtcblx0XHRcdGhlaWdodDogMjZweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdHotaW5kZXg6IDI7XG5cdFx0XHRjb250ZW50OiAnJztcblx0XHR9XG5cdFx0aDQge1xuXHRcdFx0aGVpZ2h0OiA4MHB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDgwcHg7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRib3JkZXItYm90dG9tOiBkYXNoZWQgMS40cHggIzhmOGY4Zjtcblx0XHRcdC8qbm8qL1xuXHRcdFx0Zm9udC1zaXplOiAyOHB4O1xuXHRcdFx0LypweCovXG5cdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdFx0XHRjbGVhcjogYm90aDtcblx0XHR9XG5cdFx0cCB7XG5cdFx0XHRwYWRkaW5nLXRvcDogMjBweDtcblx0XHRcdGNsZWFyOiBib3RoO1xuXHRcdH1cblx0XHQueGlueGkge1xuXHRcdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdFx0LypweCovXG5cdFx0XHRjb2xvcjogIzY2Njtcblx0XHR9XG5cdFx0LnNoLXN0YXR1IHtcblx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdC8qcHgqL1xuXHRcdFx0Y29sb3I6ICMzN0I3RkE7XG5cdFx0fVxuXHRcdC5tb3JlIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHJpZ2h0OiAyMHB4O1xuXHRcdFx0dG9wOiA1OCU7XG5cdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRjb2xvcjogIzk5OTtcblx0XHR9XG5cdFx0LmFsbC1zdGF0dSB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRyaWdodDogNTBweDtcblx0XHRcdHRvcDogMzBweDtcblx0XHRcdHdpZHRoOiAxMDBweDtcblx0XHRcdGhlaWdodDogMTAwcHg7XG5cdFx0XHRpbWcge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQuaGlkZXtcblx0XHRcdGRpc3BsYXk6bm9uZTtcblx0XHR9XG5cdH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGhpc3RvcnlvcmRlci52dWU/MmExY2E2YjEiXSwic291cmNlUm9vdCI6IiJ9