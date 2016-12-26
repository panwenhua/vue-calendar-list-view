webpackJsonp([4],{

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(88)

/* script */
__vue_exports__ = __webpack_require__(95)

/* template */
var __vue_template__ = __webpack_require__(81)
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
__vue_options__.__file = "C:\\Users\\panwenhua\\Documents\\HBuilderProject\\vue-CalendarListView\\src\\views\\completedInfo.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-288c51df"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-288c51df", __vue_options__)
  } else {
    hotAPI.reload("data-v-288c51df", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] completedInfo.vue: functional components are not supported and should be defined in plain js files using render functions.")}

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

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('nv-head', {
    attrs: {
      "page-name": _vm.headTit.tab1,
      "back-type": _vm.headTit.back
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "mb"
  }, [_c('div', {
    staticClass: "baseInfo"
  }, [_c('p', [_vm._v("接机日期："), _c('span', [_vm._v(_vm._s(_vm.dataArrDeta.travelDate))])]), _vm._v(" "), _c('p', [_vm._v("接机地点："), _c('span', [_vm._v(_vm._s(_vm.dataArrDeta.address))])]), _vm._v(" "), _c('p', [_vm._v("预订空位："), _c('span', [_vm._v(_vm._s(_vm.dataArrDeta.personAmount) + "人")])])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "flight"
  }, [_c('div', {
    staticClass: "inform"
  }, [_c('h4', [_vm._v("请填写旅行者信息")]), _vm._v(" "), _c('ul', _vm._l((_vm.dataArrTravel), function(item) {
    return _c('li', [_c('span', {}), _vm._v(_vm._s(item.firstName) + _vm._s(item.lastName) + "\n\t\t\t\t\t\t"), _c('span', [(item.state == 3) ? [_c('em'), _vm._v(_vm._s(_vm._f("inforTravsta")(item.state)) + "\n\t\t\t\t\t\t\t")] : [_c('router-link', {
      attrs: {
        "to": {
          path: 'travelInformation'
        }
      }
    }, [_c('em', {
      class: [item.state == 1 ? 'lastbtn' : '']
    }), _vm._v(_vm._s(_vm._f("inforTravsta")(item.state))), _c('i')])]], 2)])
  }))])]), _vm._v(" "), _c('p', {
    staticClass: "nowStu"
  }, [_vm._v("当前出行人数" + _vm._s(_vm.dataArr.size) + "人，有"), _c('span', {
    staticClass: "red"
  }, [_vm._v(_vm._s(_vm.dataArr.personCount) + "人")]), _vm._v("待完善信息")])]), _vm._v(" "), _c('button', {
    staticClass: "commitesq"
  }, [_vm._v("提交确认申请")])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "flight"
  }, [_c('h4', [_vm._v("航班预定照片")]), _vm._v(" "), _c('ul', {
    staticClass: "flightPhoto"
  }, [_c('li'), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "addPhoto"
  }, [_vm._v("+")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-288c51df", module.exports)
  }
}

/***/ },

/***/ 88:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 95:
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
				tab1: '订单信息详情',
				back: 'ok'
			},
			dataArr: {},
			dataArrDeta: {},
			dataArrTravel: {}
		};
	},

	created: function created() {
		var me = this;
		_$.myAjax({
			modaltype: 2, //1为闪现框,2为自定义框
			url: 'api/travel/travelcard/travelOrderDetailQuery.json',
			data: {
				'travelCode': me.$route.query.travelCode,
				'orderNum': me.$route.query.orderNum
			},
			success: function success(str) {
				if (str.result.code == "1000") {
					console.log(me.$route.query.travelCode);
					me.dataArrDeta = str.data.travelOrderDetail;
					me.dataArr = str.data;
					me.dataArrTravel = str.data.personOrderList;
				} else {}
			}
		});
	},
	components: {
		"nvHead": __webpack_require__(61),
		"calendarEl": __webpack_require__(67)
	}
};

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY29tcGxldGVkSW5mby52dWUiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4wLjFAd2VicGFjay16ZXB0by9pbmRleC5qcz80NmYwKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci52dWU/OTIxMyoqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIudnVlP2FkMGUqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci52dWU/YWJhMyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi42LjBAYmx1ZWltcC1tZDUvanMvbWQ1LmpzP2M3NGEqKioiLCJ3ZWJwYWNrOi8vL2hlYWRlci52dWU/YmQ5OSoqKiIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy91dGlscy5qcz9jMzE3KioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhbGVuZGFyLnZ1ZT84Y2RiKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhbGVuZGFyLnZ1ZT84NDc4KioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYWxlbmRhci52dWU/N2QzMCoqKioiLCJ3ZWJwYWNrOi8vL2NhbGVuZGFyLnZ1ZT9mZTg0KioqIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jb21wbGV0ZWRJbmZvLnZ1ZT9kNzIyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jb21wbGV0ZWRJbmZvLnZ1ZT9iMDcwIiwid2VicGFjazovLy9jb21wbGV0ZWRJbmZvLnZ1ZSJdLCJuYW1lcyI6WyJtZDUiLCJyZXF1aXJlIiwiZ2V0Q2hlY2siLCJjaGVja0VtYWlsIiwidmFsIiwiZmlsdGVyIiwidGVzdCIsImNoZWNrUGhvbmUiLCJjaGVja1Bhc3N3b3JkIiwiY2hlY2tJT1MiLCJ1IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaXNpT1MiLCJtYXRjaCIsImNoZWNrV2VjaGF0IiwidWEiLCJ3aW5kb3ciLCJ0b0xvd2VyQ2FzZSIsImNoZWNrTG9naW4iLCJzdHJTdG9yZURhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiQ29va2llIiwicmVhZCIsInNwbGl0IiwibGVuZ3RoIiwibG9jYWxfaXAiLCJsb2NhbF9taSIsIm15QWpheCIsImdldFJhbmRvbSIsImd1aWQiLCJpIiwibiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiZm10RGF0ZSIsImRhdGUiLCJmbXQiLCJvIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImdldE1pbGxpc2Vjb25kcyIsInJlcGxhY2UiLCJSZWdFeHAiLCIkMSIsImdldEZ1bGxZZWFyIiwic3Vic3RyIiwiayIsIk1pbGxpc2Vjb25kVG9EYXRlIiwibXNkIiwidGltZSIsInBhcnNlRmxvYXQiLCJzdHIiLCJwYXJzZUludCIsInNlbmRDb2RlIiwiYnRuY2ZnIiwiZGZ3YWl0Iiwid2FpdCIsIl90aGlzIiwiYmVnaW4iLCIkIiwicmVtb3ZlQXR0ciIsInJlbW92ZUNsYXNzIiwidGV4dCIsImFkZENsYXNzIiwiYXR0ciIsInNldFRpbWVvdXQiLCJteU1vZGFsIiwiZGVmYXVsdHMiLCJtb2RhbF9pZCIsIm92ZXJsYXkiLCJjbG9zZUJ1dHRvbiIsInR5cGUiLCJjbG9zZWZ1bnRpb24iLCJ0aXBjb25maWciLCJtb2RhbF90aXAiLCJtb2RhbF9jbnQiLCJ0cnVlX2J1dHRvbiIsImNhbmNlbF9idXR0b24iLCJ0cnVlX2Z1bmN0aW9uIiwiY2FuY2VsX2Z1bmN0aW9uIiwiRiIsImFwcGVuZCIsImNzcyIsImZsYXNoTW9kIiwiZnNobW9kIiwidGlwTW9kIiwidGlwbW9kIiwicmVtb3ZlIiwiTW9kYWwiLCJzaG93TW9kYWwiLCJvcHRpb25zIiwiZXh0ZW5kIiwiY2xpY2siLCJlIiwiY2xvc2VNb2RhbCIsImJvdHRvbSIsInRvcCIsInByZXZlbnREZWZhdWx0Iiwib3Blbk1vZGFsIiwiJGxpc3QiLCJoZWlnaHQiLCJ3aWR0aCIsInRpcE1vZGFsIiwiZmxhc2hJbnRvIiwiZmxhc2hPdXQiLCJvcHRzIiwiTyIsImdldHVybGlwIiwidXJsX2lwIiwiZ2V0dmFsdWUiLCJuYXRpdmVEYXRhIiwia2V5c3RyIiwiY2ZnIiwiaW9zU3RyIiwieCIsImdldGFpY2MiLCJuYXRpdmVfZGF0YSIsImxvY2FsX2FpY2MiLCJnZXRhaWNwIiwibG9jYWxfYWljcCIsImdldGJpbWkiLCJsb2NhbF9iaW1pIiwiZ2V0YmljdCIsImxvY2FsX2JpY3QiLCJnZXRiaWRuIiwibG9jYWxfYmlkbiIsImdldGJpZHYiLCJiaWR2IiwiaXNBbmRyb2lkIiwiaW5kZXhPZiIsImdldHNpZCIsImxvY2FsX3NpZCIsImdldHRpbWVzdGFtcCIsIkRhdGUiLCJwYXJzZSIsImdldGJpZG0iLCJsb2NhbF9iaWRtIiwiZ2V0YmlvdiIsImxvY2FsX2Jpb3YiLCJnZXRiaWF2IiwibG9jYWxfYmlhdiIsImdldGxvZ2luIiwiZ2V0c2lnbiIsImtleUFycnkiLCJkYXRhc3RyIiwic29ydCIsImtleVN0cjEiLCJzaWduIiwia2V5IiwidG9VcHBlckNhc2UiLCJhbmRyb2lkIiwiaW9zIiwiZ2V0Y29kZW1lIiwianNvbm9iaiIsImNvZGUiLCJyZXN1bHQiLCJtZWFuIiwibXNnIiwiZ2V0Y29kZSIsIm1vZGFsdHlwZSIsImFzeW5jIiwiaXAiLCJ1cmwiLCJkYXRhIiwidmFsaWRhdGUiLCJzdWNjZXNzIiwiZXJyb3IiLCJvcHRpb24iLCJiZWZvcmVDcmVhdGUiLCJsb2FkYWpheCIsInN1YnN0cmluZyIsInB1c2giLCJhamF4IiwiZGF0YVR5cGUiLCJoZWFkZXJzIiwicnNwIiwibG9jYXRpb24iLCJocmVmIiwiZXJyaW5mbyIsIm15SW1hZ2UiLCJvYmoiLCJ1cGxvYWRJbWFnZSIsImZpbGUiLCJ0aGF0IiwiZmlsZXMiLCJVUkwiLCJ3ZWJraXRVUkwiLCJibG9iIiwiY3JlYXRlT2JqZWN0VVJMIiwiYmFzZTY0IiwiT3JpZW50YXRpb24iLCJpbWciLCJJbWFnZSIsInNyYyIsInJGaWx0ZXIiLCJhbGVydCIsIm9ubG9hZCIsImxpbWl0V2lkIiwidyIsInNjYWxlIiwiaCIsImN1dFdpZCIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiLCJxdWFsaXR5IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0Esc0JBQWdIOztBQUVoSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELG1EQUFtRCxJQUFJO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQztBQUNELGlDQUFpQzs7QUFFakM7Ozs7Ozs7O0FDekNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEMsaUJBQWlCLDRHQUE0RztBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCLDJCQUEyQiwwQ0FBMEMsc0JB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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsYUFBYSxlQUFlOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLElBQUk7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsZUFBZTtBQUM3QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixFQUFFO0FBQ3JCLDJDQUEyQyw4Q0FBOEM7QUFDekY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWTs7QUFFdkI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsUTs7Ozs7OztBQy9pREQ7QUFDQTs7QUFFQTtBQUNBLHNCQUFnSDs7QUFFaEg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxtREFBbUQsSUFBSTtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7QUFDRCxpQ0FBaUM7O0FBRWpDOzs7Ozs7OztBQ3pDQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ2xDQSx5Qzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUM5Q0EseUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQytMQSw2QkFDQTs7dUJBRUE7OztVQUdBO1VBRUE7QUFIQTtZQUlBO2dCQUNBO2tCQUVBO0FBUkE7QUFTQTs7NkJBQ0E7V0FDQTs7aUJBRUE7UUFDQTs7a0NBRUE7Z0NBRUE7QUFIQTtrQ0FJQTttQ0FDQTtpQ0FDQTsrQkFDQTtzQkFDQTtpQ0FDQTtZQUNBO0FBRUE7QUFmQTtBQWdCQTs7Z0NBRUE7b0NBRUE7QUFIQTtBQS9CQSxFIiwiZmlsZSI6IjQuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvLjIuMC4wLWJldGEuNEBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vbG9hZGVyLmpzP3tcXFwib21pdFxcXCI6MSxcXFwicmVtb3ZlXFxcIjp0cnVlfSF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTI4OGM1MWRmJnNjb3BlZD10cnVlIXB4MnJlbT9yZW1Vbml0PTY1JnJlbVByZWNpc2lvbj04IXNhc3MtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9jb21wbGV0ZWRJbmZvLnZ1ZVwiKVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vY29tcGxldGVkSW5mby52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTI4OGM1MWRmIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NvbXBsZXRlZEluZm8udnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkM6XFxcXFVzZXJzXFxcXHBhbndlbmh1YVxcXFxEb2N1bWVudHNcXFxcSEJ1aWxkZXJQcm9qZWN0XFxcXHZ1ZS1DYWxlbmRhckxpc3RWaWV3XFxcXHNyY1xcXFx2aWV3c1xcXFxjb21wbGV0ZWRJbmZvLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtMjg4YzUxZGZcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjg4YzUxZGZcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjg4YzUxZGZcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjb21wbGV0ZWRJbmZvLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL2NvbXBsZXRlZEluZm8udnVlXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCIvKiBaZXB0byB2MS4xLjYgLSB6ZXB0byBldmVudCBhamF4IGZvcm0gaWUgLSB6ZXB0b2pzLmNvbS9saWNlbnNlICovXG5cbnZhciBaZXB0byA9IG1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdW5kZWZpbmVkLCBrZXksICQsIGNsYXNzTGlzdCwgZW1wdHlBcnJheSA9IFtdLCBzbGljZSA9IGVtcHR5QXJyYXkuc2xpY2UsIGZpbHRlciA9IGVtcHR5QXJyYXkuZmlsdGVyLFxuICAgIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50LFxuICAgIGVsZW1lbnREaXNwbGF5ID0ge30sIGNsYXNzQ2FjaGUgPSB7fSxcbiAgICBjc3NOdW1iZXIgPSB7ICdjb2x1bW4tY291bnQnOiAxLCAnY29sdW1ucyc6IDEsICdmb250LXdlaWdodCc6IDEsICdsaW5lLWhlaWdodCc6IDEsJ29wYWNpdHknOiAxLCAnei1pbmRleCc6IDEsICd6b29tJzogMSB9LFxuICAgIGZyYWdtZW50UkUgPSAvXlxccyo8KFxcdyt8ISlbXj5dKj4vLFxuICAgIHNpbmdsZVRhZ1JFID0gL148KFxcdyspXFxzKlxcLz8+KD86PFxcL1xcMT58KSQvLFxuICAgIHRhZ0V4cGFuZGVyUkUgPSAvPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbXFx3Ol0rKVtePl0qKVxcLz4vaWcsXG4gICAgcm9vdE5vZGVSRSA9IC9eKD86Ym9keXxodG1sKSQvaSxcbiAgICBjYXBpdGFsUkUgPSAvKFtBLVpdKS9nLFxuXG4gICAgLy8gc3BlY2lhbCBhdHRyaWJ1dGVzIHRoYXQgc2hvdWxkIGJlIGdldC9zZXQgdmlhIG1ldGhvZCBjYWxsc1xuICAgIG1ldGhvZEF0dHJpYnV0ZXMgPSBbJ3ZhbCcsICdjc3MnLCAnaHRtbCcsICd0ZXh0JywgJ2RhdGEnLCAnd2lkdGgnLCAnaGVpZ2h0JywgJ29mZnNldCddLFxuXG4gICAgYWRqYWNlbmN5T3BlcmF0b3JzID0gWyAnYWZ0ZXInLCAncHJlcGVuZCcsICdiZWZvcmUnLCAnYXBwZW5kJyBdLFxuICAgIHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKSxcbiAgICB0YWJsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyksXG4gICAgY29udGFpbmVycyA9IHtcbiAgICAgICd0cic6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5JyksXG4gICAgICAndGJvZHknOiB0YWJsZSwgJ3RoZWFkJzogdGFibGUsICd0Zm9vdCc6IHRhYmxlLFxuICAgICAgJ3RkJzogdGFibGVSb3csICd0aCc6IHRhYmxlUm93LFxuICAgICAgJyonOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIH0sXG4gICAgcmVhZHlSRSA9IC9jb21wbGV0ZXxsb2FkZWR8aW50ZXJhY3RpdmUvLFxuICAgIHNpbXBsZVNlbGVjdG9yUkUgPSAvXltcXHctXSokLyxcbiAgICBjbGFzczJ0eXBlID0ge30sXG4gICAgdG9TdHJpbmcgPSBjbGFzczJ0eXBlLnRvU3RyaW5nLFxuICAgIHplcHRvID0ge30sXG4gICAgY2FtZWxpemUsIHVuaXEsXG4gICAgdGVtcFBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgIHByb3BNYXAgPSB7XG4gICAgICAndGFiaW5kZXgnOiAndGFiSW5kZXgnLFxuICAgICAgJ3JlYWRvbmx5JzogJ3JlYWRPbmx5JyxcbiAgICAgICdmb3InOiAnaHRtbEZvcicsXG4gICAgICAnY2xhc3MnOiAnY2xhc3NOYW1lJyxcbiAgICAgICdtYXhsZW5ndGgnOiAnbWF4TGVuZ3RoJyxcbiAgICAgICdjZWxsc3BhY2luZyc6ICdjZWxsU3BhY2luZycsXG4gICAgICAnY2VsbHBhZGRpbmcnOiAnY2VsbFBhZGRpbmcnLFxuICAgICAgJ3Jvd3NwYW4nOiAncm93U3BhbicsXG4gICAgICAnY29sc3Bhbic6ICdjb2xTcGFuJyxcbiAgICAgICd1c2VtYXAnOiAndXNlTWFwJyxcbiAgICAgICdmcmFtZWJvcmRlcic6ICdmcmFtZUJvcmRlcicsXG4gICAgICAnY29udGVudGVkaXRhYmxlJzogJ2NvbnRlbnRFZGl0YWJsZSdcbiAgICB9LFxuICAgIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8XG4gICAgICBmdW5jdGlvbihvYmplY3QpeyByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgQXJyYXkgfVxuXG4gIHplcHRvLm1hdGNoZXMgPSBmdW5jdGlvbihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGlmICghc2VsZWN0b3IgfHwgIWVsZW1lbnQgfHwgZWxlbWVudC5ub2RlVHlwZSAhPT0gMSkgcmV0dXJuIGZhbHNlXG4gICAgdmFyIG1hdGNoZXNTZWxlY3RvciA9IGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGVsZW1lbnQubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub01hdGNoZXNTZWxlY3RvciB8fCBlbGVtZW50Lm1hdGNoZXNTZWxlY3RvclxuICAgIGlmIChtYXRjaGVzU2VsZWN0b3IpIHJldHVybiBtYXRjaGVzU2VsZWN0b3IuY2FsbChlbGVtZW50LCBzZWxlY3RvcilcbiAgICAvLyBmYWxsIGJhY2sgdG8gcGVyZm9ybWluZyBhIHNlbGVjdG9yOlxuICAgIHZhciBtYXRjaCwgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlLCB0ZW1wID0gIXBhcmVudFxuICAgIGlmICh0ZW1wKSAocGFyZW50ID0gdGVtcFBhcmVudCkuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgICBtYXRjaCA9IH56ZXB0by5xc2EocGFyZW50LCBzZWxlY3RvcikuaW5kZXhPZihlbGVtZW50KVxuICAgIHRlbXAgJiYgdGVtcFBhcmVudC5yZW1vdmVDaGlsZChlbGVtZW50KVxuICAgIHJldHVybiBtYXRjaFxuICB9XG5cbiAgZnVuY3Rpb24gdHlwZShvYmopIHtcbiAgICByZXR1cm4gb2JqID09IG51bGwgPyBTdHJpbmcob2JqKSA6XG4gICAgICBjbGFzczJ0eXBlW3RvU3RyaW5nLmNhbGwob2JqKV0gfHwgXCJvYmplY3RcIlxuICB9XG5cbiAgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdHlwZSh2YWx1ZSkgPT0gXCJmdW5jdGlvblwiIH1cbiAgZnVuY3Rpb24gaXNXaW5kb3cob2JqKSAgICAgeyByZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqID09IG9iai53aW5kb3cgfVxuICBmdW5jdGlvbiBpc0RvY3VtZW50KG9iaikgICB7IHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmoubm9kZVR5cGUgPT0gb2JqLkRPQ1VNRU5UX05PREUgfVxuICBmdW5jdGlvbiBpc09iamVjdChvYmopICAgICB7IHJldHVybiB0eXBlKG9iaikgPT0gXCJvYmplY3RcIiB9XG4gIGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KG9iaikgJiYgIWlzV2luZG93KG9iaikgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikgPT0gT2JqZWN0LnByb3RvdHlwZVxuICB9XG4gIGZ1bmN0aW9uIGxpa2VBcnJheShvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmoubGVuZ3RoID09ICdudW1iZXInIH1cblxuICBmdW5jdGlvbiBjb21wYWN0KGFycmF5KSB7IHJldHVybiBmaWx0ZXIuY2FsbChhcnJheSwgZnVuY3Rpb24oaXRlbSl7IHJldHVybiBpdGVtICE9IG51bGwgfSkgfVxuICBmdW5jdGlvbiBmbGF0dGVuKGFycmF5KSB7IHJldHVybiBhcnJheS5sZW5ndGggPiAwID8gJC5mbi5jb25jYXQuYXBwbHkoW10sIGFycmF5KSA6IGFycmF5IH1cbiAgY2FtZWxpemUgPSBmdW5jdGlvbihzdHIpeyByZXR1cm4gc3RyLnJlcGxhY2UoLy0rKC4pPy9nLCBmdW5jdGlvbihtYXRjaCwgY2hyKXsgcmV0dXJuIGNociA/IGNoci50b1VwcGVyQ2FzZSgpIDogJycgfSkgfVxuICBmdW5jdGlvbiBkYXNoZXJpemUoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC86Oi9nLCAnLycpXG4gICAgICAgICAgIC5yZXBsYWNlKC8oW0EtWl0rKShbQS1aXVthLXpdKS9nLCAnJDFfJDInKVxuICAgICAgICAgICAucmVwbGFjZSgvKFthLXpcXGRdKShbQS1aXSkvZywgJyQxXyQyJylcbiAgICAgICAgICAgLnJlcGxhY2UoL18vZywgJy0nKVxuICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICB9XG4gIHVuaXEgPSBmdW5jdGlvbihhcnJheSl7IHJldHVybiBmaWx0ZXIuY2FsbChhcnJheSwgZnVuY3Rpb24oaXRlbSwgaWR4KXsgcmV0dXJuIGFycmF5LmluZGV4T2YoaXRlbSkgPT0gaWR4IH0pIH1cblxuICBmdW5jdGlvbiBjbGFzc1JFKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZSBpbiBjbGFzc0NhY2hlID9cbiAgICAgIGNsYXNzQ2FjaGVbbmFtZV0gOiAoY2xhc3NDYWNoZVtuYW1lXSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBuYW1lICsgJyhcXFxcc3wkKScpKVxuICB9XG5cbiAgZnVuY3Rpb24gbWF5YmVBZGRQeChuYW1lLCB2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09IFwibnVtYmVyXCIgJiYgIWNzc051bWJlcltkYXNoZXJpemUobmFtZSldKSA/IHZhbHVlICsgXCJweFwiIDogdmFsdWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZmF1bHREaXNwbGF5KG5vZGVOYW1lKSB7XG4gICAgdmFyIGVsZW1lbnQsIGRpc3BsYXlcbiAgICBpZiAoIWVsZW1lbnREaXNwbGF5W25vZGVOYW1lXSkge1xuICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZU5hbWUpXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpXG4gICAgICBkaXNwbGF5ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCAnJykuZ2V0UHJvcGVydHlWYWx1ZShcImRpc3BsYXlcIilcbiAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KVxuICAgICAgZGlzcGxheSA9PSBcIm5vbmVcIiAmJiAoZGlzcGxheSA9IFwiYmxvY2tcIilcbiAgICAgIGVsZW1lbnREaXNwbGF5W25vZGVOYW1lXSA9IGRpc3BsYXlcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnREaXNwbGF5W25vZGVOYW1lXVxuICB9XG5cbiAgZnVuY3Rpb24gY2hpbGRyZW4oZWxlbWVudCkge1xuICAgIHJldHVybiAnY2hpbGRyZW4nIGluIGVsZW1lbnQgP1xuICAgICAgc2xpY2UuY2FsbChlbGVtZW50LmNoaWxkcmVuKSA6XG4gICAgICAkLm1hcChlbGVtZW50LmNoaWxkTm9kZXMsIGZ1bmN0aW9uKG5vZGUpeyBpZiAobm9kZS5ub2RlVHlwZSA9PSAxKSByZXR1cm4gbm9kZSB9KVxuICB9XG5cbiAgLy8gYCQuemVwdG8uZnJhZ21lbnRgIHRha2VzIGEgaHRtbCBzdHJpbmcgYW5kIGFuIG9wdGlvbmFsIHRhZyBuYW1lXG4gIC8vIHRvIGdlbmVyYXRlIERPTSBub2RlcyBub2RlcyBmcm9tIHRoZSBnaXZlbiBodG1sIHN0cmluZy5cbiAgLy8gVGhlIGdlbmVyYXRlZCBET00gbm9kZXMgYXJlIHJldHVybmVkIGFzIGFuIGFycmF5LlxuICAvLyBUaGlzIGZ1bmN0aW9uIGNhbiBiZSBvdmVycmlkZW4gaW4gcGx1Z2lucyBmb3IgZXhhbXBsZSB0byBtYWtlXG4gIC8vIGl0IGNvbXBhdGlibGUgd2l0aCBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgdGhlIERPTSBmdWxseS5cbiAgemVwdG8uZnJhZ21lbnQgPSBmdW5jdGlvbihodG1sLCBuYW1lLCBwcm9wZXJ0aWVzKSB7XG4gICAgdmFyIGRvbSwgbm9kZXMsIGNvbnRhaW5lclxuXG4gICAgLy8gQSBzcGVjaWFsIGNhc2Ugb3B0aW1pemF0aW9uIGZvciBhIHNpbmdsZSB0YWdcbiAgICBpZiAoc2luZ2xlVGFnUkUudGVzdChodG1sKSkgZG9tID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFJlZ0V4cC4kMSkpXG5cbiAgICBpZiAoIWRvbSkge1xuICAgICAgaWYgKGh0bWwucmVwbGFjZSkgaHRtbCA9IGh0bWwucmVwbGFjZSh0YWdFeHBhbmRlclJFLCBcIjwkMT48LyQyPlwiKVxuICAgICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCkgbmFtZSA9IGZyYWdtZW50UkUudGVzdChodG1sKSAmJiBSZWdFeHAuJDFcbiAgICAgIGlmICghKG5hbWUgaW4gY29udGFpbmVycykpIG5hbWUgPSAnKidcblxuICAgICAgY29udGFpbmVyID0gY29udGFpbmVyc1tuYW1lXVxuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnICsgaHRtbFxuICAgICAgZG9tID0gJC5lYWNoKHNsaWNlLmNhbGwoY29udGFpbmVyLmNoaWxkTm9kZXMpLCBmdW5jdGlvbigpe1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzUGxhaW5PYmplY3QocHJvcGVydGllcykpIHtcbiAgICAgIG5vZGVzID0gJChkb20pXG4gICAgICAkLmVhY2gocHJvcGVydGllcywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAobWV0aG9kQXR0cmlidXRlcy5pbmRleE9mKGtleSkgPiAtMSkgbm9kZXNba2V5XSh2YWx1ZSlcbiAgICAgICAgZWxzZSBub2Rlcy5hdHRyKGtleSwgdmFsdWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBkb21cbiAgfVxuXG4gIC8vIGAkLnplcHRvLlpgIHN3YXBzIG91dCB0aGUgcHJvdG90eXBlIG9mIHRoZSBnaXZlbiBgZG9tYCBhcnJheVxuICAvLyBvZiBub2RlcyB3aXRoIGAkLmZuYCBhbmQgdGh1cyBzdXBwbHlpbmcgYWxsIHRoZSBaZXB0byBmdW5jdGlvbnNcbiAgLy8gdG8gdGhlIGFycmF5LiBOb3RlIHRoYXQgYF9fcHJvdG9fX2AgaXMgbm90IHN1cHBvcnRlZCBvbiBJbnRlcm5ldFxuICAvLyBFeHBsb3Jlci4gVGhpcyBtZXRob2QgY2FuIGJlIG92ZXJyaWRlbiBpbiBwbHVnaW5zLlxuICB6ZXB0by5aID0gZnVuY3Rpb24oZG9tLCBzZWxlY3Rvcikge1xuICAgIGRvbSA9IGRvbSB8fCBbXVxuICAgIGRvbS5fX3Byb3RvX18gPSAkLmZuXG4gICAgZG9tLnNlbGVjdG9yID0gc2VsZWN0b3IgfHwgJydcbiAgICByZXR1cm4gZG9tXG4gIH1cblxuICAvLyBgJC56ZXB0by5pc1pgIHNob3VsZCByZXR1cm4gYHRydWVgIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYSBaZXB0b1xuICAvLyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBjYW4gYmUgb3ZlcnJpZGVuIGluIHBsdWdpbnMuXG4gIHplcHRvLmlzWiA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgaW5zdGFuY2VvZiB6ZXB0by5aXG4gIH1cblxuICAvLyBgJC56ZXB0by5pbml0YCBpcyBaZXB0bydzIGNvdW50ZXJwYXJ0IHRvIGpRdWVyeSdzIGAkLmZuLmluaXRgIGFuZFxuICAvLyB0YWtlcyBhIENTUyBzZWxlY3RvciBhbmQgYW4gb3B0aW9uYWwgY29udGV4dCAoYW5kIGhhbmRsZXMgdmFyaW91c1xuICAvLyBzcGVjaWFsIGNhc2VzKS5cbiAgLy8gVGhpcyBtZXRob2QgY2FuIGJlIG92ZXJyaWRlbiBpbiBwbHVnaW5zLlxuICB6ZXB0by5pbml0ID0gZnVuY3Rpb24oc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICB2YXIgZG9tXG4gICAgLy8gSWYgbm90aGluZyBnaXZlbiwgcmV0dXJuIGFuIGVtcHR5IFplcHRvIGNvbGxlY3Rpb25cbiAgICBpZiAoIXNlbGVjdG9yKSByZXR1cm4gemVwdG8uWigpXG4gICAgLy8gT3B0aW1pemUgZm9yIHN0cmluZyBzZWxlY3RvcnNcbiAgICBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT0gJ3N0cmluZycpIHtcbiAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3IudHJpbSgpXG4gICAgICAvLyBJZiBpdCdzIGEgaHRtbCBmcmFnbWVudCwgY3JlYXRlIG5vZGVzIGZyb20gaXRcbiAgICAgIC8vIE5vdGU6IEluIGJvdGggQ2hyb21lIDIxIGFuZCBGaXJlZm94IDE1LCBET00gZXJyb3IgMTJcbiAgICAgIC8vIGlzIHRocm93biBpZiB0aGUgZnJhZ21lbnQgZG9lc24ndCBiZWdpbiB3aXRoIDxcbiAgICAgIGlmIChzZWxlY3RvclswXSA9PSAnPCcgJiYgZnJhZ21lbnRSRS50ZXN0KHNlbGVjdG9yKSlcbiAgICAgICAgZG9tID0gemVwdG8uZnJhZ21lbnQoc2VsZWN0b3IsIFJlZ0V4cC4kMSwgY29udGV4dCksIHNlbGVjdG9yID0gbnVsbFxuICAgICAgLy8gSWYgdGhlcmUncyBhIGNvbnRleHQsIGNyZWF0ZSBhIGNvbGxlY3Rpb24gb24gdGhhdCBjb250ZXh0IGZpcnN0LCBhbmQgc2VsZWN0XG4gICAgICAvLyBub2RlcyBmcm9tIHRoZXJlXG4gICAgICBlbHNlIGlmIChjb250ZXh0ICE9PSB1bmRlZmluZWQpIHJldHVybiAkKGNvbnRleHQpLmZpbmQoc2VsZWN0b3IpXG4gICAgICAvLyBJZiBpdCdzIGEgQ1NTIHNlbGVjdG9yLCB1c2UgaXQgdG8gc2VsZWN0IG5vZGVzLlxuICAgICAgZWxzZSBkb20gPSB6ZXB0by5xc2EoZG9jdW1lbnQsIHNlbGVjdG9yKVxuICAgIH1cbiAgICAvLyBJZiBhIGZ1bmN0aW9uIGlzIGdpdmVuLCBjYWxsIGl0IHdoZW4gdGhlIERPTSBpcyByZWFkeVxuICAgIGVsc2UgaWYgKGlzRnVuY3Rpb24oc2VsZWN0b3IpKSByZXR1cm4gJChkb2N1bWVudCkucmVhZHkoc2VsZWN0b3IpXG4gICAgLy8gSWYgYSBaZXB0byBjb2xsZWN0aW9uIGlzIGdpdmVuLCBqdXN0IHJldHVybiBpdFxuICAgIGVsc2UgaWYgKHplcHRvLmlzWihzZWxlY3RvcikpIHJldHVybiBzZWxlY3RvclxuICAgIGVsc2Uge1xuICAgICAgLy8gbm9ybWFsaXplIGFycmF5IGlmIGFuIGFycmF5IG9mIG5vZGVzIGlzIGdpdmVuXG4gICAgICBpZiAoaXNBcnJheShzZWxlY3RvcikpIGRvbSA9IGNvbXBhY3Qoc2VsZWN0b3IpXG4gICAgICAvLyBXcmFwIERPTSBub2Rlcy5cbiAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KHNlbGVjdG9yKSlcbiAgICAgICAgZG9tID0gW3NlbGVjdG9yXSwgc2VsZWN0b3IgPSBudWxsXG4gICAgICAvLyBJZiBpdCdzIGEgaHRtbCBmcmFnbWVudCwgY3JlYXRlIG5vZGVzIGZyb20gaXRcbiAgICAgIGVsc2UgaWYgKGZyYWdtZW50UkUudGVzdChzZWxlY3RvcikpXG4gICAgICAgIGRvbSA9IHplcHRvLmZyYWdtZW50KHNlbGVjdG9yLnRyaW0oKSwgUmVnRXhwLiQxLCBjb250ZXh0KSwgc2VsZWN0b3IgPSBudWxsXG4gICAgICAvLyBJZiB0aGVyZSdzIGEgY29udGV4dCwgY3JlYXRlIGEgY29sbGVjdGlvbiBvbiB0aGF0IGNvbnRleHQgZmlyc3QsIGFuZCBzZWxlY3RcbiAgICAgIC8vIG5vZGVzIGZyb20gdGhlcmVcbiAgICAgIGVsc2UgaWYgKGNvbnRleHQgIT09IHVuZGVmaW5lZCkgcmV0dXJuICQoY29udGV4dCkuZmluZChzZWxlY3RvcilcbiAgICAgIC8vIEFuZCBsYXN0IGJ1dCBubyBsZWFzdCwgaWYgaXQncyBhIENTUyBzZWxlY3RvciwgdXNlIGl0IHRvIHNlbGVjdCBub2Rlcy5cbiAgICAgIGVsc2UgZG9tID0gemVwdG8ucXNhKGRvY3VtZW50LCBzZWxlY3RvcilcbiAgICB9XG4gICAgLy8gY3JlYXRlIGEgbmV3IFplcHRvIGNvbGxlY3Rpb24gZnJvbSB0aGUgbm9kZXMgZm91bmRcbiAgICByZXR1cm4gemVwdG8uWihkb20sIHNlbGVjdG9yKVxuICB9XG5cbiAgLy8gYCRgIHdpbGwgYmUgdGhlIGJhc2UgYFplcHRvYCBvYmplY3QuIFdoZW4gY2FsbGluZyB0aGlzXG4gIC8vIGZ1bmN0aW9uIGp1c3QgY2FsbCBgJC56ZXB0by5pbml0LCB3aGljaCBtYWtlcyB0aGUgaW1wbGVtZW50YXRpb25cbiAgLy8gZGV0YWlscyBvZiBzZWxlY3Rpbmcgbm9kZXMgYW5kIGNyZWF0aW5nIFplcHRvIGNvbGxlY3Rpb25zXG4gIC8vIHBhdGNoYWJsZSBpbiBwbHVnaW5zLlxuICAkID0gZnVuY3Rpb24oc2VsZWN0b3IsIGNvbnRleHQpe1xuICAgIHJldHVybiB6ZXB0by5pbml0KHNlbGVjdG9yLCBjb250ZXh0KVxuICB9XG5cbiAgZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCwgc291cmNlLCBkZWVwKSB7XG4gICAgZm9yIChrZXkgaW4gc291cmNlKVxuICAgICAgaWYgKGRlZXAgJiYgKGlzUGxhaW5PYmplY3Qoc291cmNlW2tleV0pIHx8IGlzQXJyYXkoc291cmNlW2tleV0pKSkge1xuICAgICAgICBpZiAoaXNQbGFpbk9iamVjdChzb3VyY2Vba2V5XSkgJiYgIWlzUGxhaW5PYmplY3QodGFyZ2V0W2tleV0pKVxuICAgICAgICAgIHRhcmdldFtrZXldID0ge31cbiAgICAgICAgaWYgKGlzQXJyYXkoc291cmNlW2tleV0pICYmICFpc0FycmF5KHRhcmdldFtrZXldKSlcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IFtdXG4gICAgICAgIGV4dGVuZCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIGRlZXApXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChzb3VyY2Vba2V5XSAhPT0gdW5kZWZpbmVkKSB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gIH1cblxuICAvLyBDb3B5IGFsbCBidXQgdW5kZWZpbmVkIHByb3BlcnRpZXMgZnJvbSBvbmUgb3IgbW9yZVxuICAvLyBvYmplY3RzIHRvIHRoZSBgdGFyZ2V0YCBvYmplY3QuXG4gICQuZXh0ZW5kID0gZnVuY3Rpb24odGFyZ2V0KXtcbiAgICB2YXIgZGVlcCwgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09ICdib29sZWFuJykge1xuICAgICAgZGVlcCA9IHRhcmdldFxuICAgICAgdGFyZ2V0ID0gYXJncy5zaGlmdCgpXG4gICAgfVxuICAgIGFyZ3MuZm9yRWFjaChmdW5jdGlvbihhcmcpeyBleHRlbmQodGFyZ2V0LCBhcmcsIGRlZXApIH0pXG4gICAgcmV0dXJuIHRhcmdldFxuICB9XG5cbiAgLy8gYCQuemVwdG8ucXNhYCBpcyBaZXB0bydzIENTUyBzZWxlY3RvciBpbXBsZW1lbnRhdGlvbiB3aGljaFxuICAvLyB1c2VzIGBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsYCBhbmQgb3B0aW1pemVzIGZvciBzb21lIHNwZWNpYWwgY2FzZXMsIGxpa2UgYCNpZGAuXG4gIC8vIFRoaXMgbWV0aG9kIGNhbiBiZSBvdmVycmlkZW4gaW4gcGx1Z2lucy5cbiAgemVwdG8ucXNhID0gZnVuY3Rpb24oZWxlbWVudCwgc2VsZWN0b3Ipe1xuICAgIHZhciBmb3VuZCxcbiAgICAgICAgbWF5YmVJRCA9IHNlbGVjdG9yWzBdID09ICcjJyxcbiAgICAgICAgbWF5YmVDbGFzcyA9ICFtYXliZUlEICYmIHNlbGVjdG9yWzBdID09ICcuJyxcbiAgICAgICAgbmFtZU9ubHkgPSBtYXliZUlEIHx8IG1heWJlQ2xhc3MgPyBzZWxlY3Rvci5zbGljZSgxKSA6IHNlbGVjdG9yLCAvLyBFbnN1cmUgdGhhdCBhIDEgY2hhciB0YWcgbmFtZSBzdGlsbCBnZXRzIGNoZWNrZWRcbiAgICAgICAgaXNTaW1wbGUgPSBzaW1wbGVTZWxlY3RvclJFLnRlc3QobmFtZU9ubHkpXG4gICAgcmV0dXJuIChpc0RvY3VtZW50KGVsZW1lbnQpICYmIGlzU2ltcGxlICYmIG1heWJlSUQpID9cbiAgICAgICggKGZvdW5kID0gZWxlbWVudC5nZXRFbGVtZW50QnlJZChuYW1lT25seSkpID8gW2ZvdW5kXSA6IFtdICkgOlxuICAgICAgKGVsZW1lbnQubm9kZVR5cGUgIT09IDEgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gOSkgPyBbXSA6XG4gICAgICBzbGljZS5jYWxsKFxuICAgICAgICBpc1NpbXBsZSAmJiAhbWF5YmVJRCA/XG4gICAgICAgICAgbWF5YmVDbGFzcyA/IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShuYW1lT25seSkgOiAvLyBJZiBpdCdzIHNpbXBsZSwgaXQgY291bGQgYmUgYSBjbGFzc1xuICAgICAgICAgIGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3IpIDogLy8gT3IgYSB0YWdcbiAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIC8vIE9yIGl0J3Mgbm90IHNpbXBsZSwgYW5kIHdlIG5lZWQgdG8gcXVlcnkgYWxsXG4gICAgICApXG4gIH1cblxuICBmdW5jdGlvbiBmaWx0ZXJlZChub2Rlcywgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gc2VsZWN0b3IgPT0gbnVsbCA/ICQobm9kZXMpIDogJChub2RlcykuZmlsdGVyKHNlbGVjdG9yKVxuICB9XG5cbiAgJC5jb250YWlucyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyA/XG4gICAgZnVuY3Rpb24ocGFyZW50LCBub2RlKSB7XG4gICAgICByZXR1cm4gcGFyZW50ICE9PSBub2RlICYmIHBhcmVudC5jb250YWlucyhub2RlKVxuICAgIH0gOlxuICAgIGZ1bmN0aW9uKHBhcmVudCwgbm9kZSkge1xuICAgICAgd2hpbGUgKG5vZGUgJiYgKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpKVxuICAgICAgICBpZiAobm9kZSA9PT0gcGFyZW50KSByZXR1cm4gdHJ1ZVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gIGZ1bmN0aW9uIGZ1bmNBcmcoY29udGV4dCwgYXJnLCBpZHgsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihhcmcpID8gYXJnLmNhbGwoY29udGV4dCwgaWR4LCBwYXlsb2FkKSA6IGFyZ1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0QXR0cmlidXRlKG5vZGUsIG5hbWUsIHZhbHVlKSB7XG4gICAgdmFsdWUgPT0gbnVsbCA/IG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpIDogbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpXG4gIH1cblxuICAvLyBhY2Nlc3MgY2xhc3NOYW1lIHByb3BlcnR5IHdoaWxlIHJlc3BlY3RpbmcgU1ZHQW5pbWF0ZWRTdHJpbmdcbiAgZnVuY3Rpb24gY2xhc3NOYW1lKG5vZGUsIHZhbHVlKXtcbiAgICB2YXIga2xhc3MgPSBub2RlLmNsYXNzTmFtZSB8fCAnJyxcbiAgICAgICAgc3ZnICAgPSBrbGFzcyAmJiBrbGFzcy5iYXNlVmFsICE9PSB1bmRlZmluZWRcblxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gc3ZnID8ga2xhc3MuYmFzZVZhbCA6IGtsYXNzXG4gICAgc3ZnID8gKGtsYXNzLmJhc2VWYWwgPSB2YWx1ZSkgOiAobm9kZS5jbGFzc05hbWUgPSB2YWx1ZSlcbiAgfVxuXG4gIC8vIFwidHJ1ZVwiICA9PiB0cnVlXG4gIC8vIFwiZmFsc2VcIiA9PiBmYWxzZVxuICAvLyBcIm51bGxcIiAgPT4gbnVsbFxuICAvLyBcIjQyXCIgICAgPT4gNDJcbiAgLy8gXCI0Mi41XCIgID0+IDQyLjVcbiAgLy8gXCIwOFwiICAgID0+IFwiMDhcIlxuICAvLyBKU09OICAgID0+IHBhcnNlIGlmIHZhbGlkXG4gIC8vIFN0cmluZyAgPT4gc2VsZlxuICBmdW5jdGlvbiBkZXNlcmlhbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB2YWx1ZSA/XG4gICAgICAgIHZhbHVlID09IFwidHJ1ZVwiIHx8XG4gICAgICAgICggdmFsdWUgPT0gXCJmYWxzZVwiID8gZmFsc2UgOlxuICAgICAgICAgIHZhbHVlID09IFwibnVsbFwiID8gbnVsbCA6XG4gICAgICAgICAgK3ZhbHVlICsgXCJcIiA9PSB2YWx1ZSA/ICt2YWx1ZSA6XG4gICAgICAgICAgL15bXFxbXFx7XS8udGVzdCh2YWx1ZSkgPyAkLnBhcnNlSlNPTih2YWx1ZSkgOlxuICAgICAgICAgIHZhbHVlIClcbiAgICAgICAgOiB2YWx1ZVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuICB9XG5cbiAgJC50eXBlID0gdHlwZVxuICAkLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uXG4gICQuaXNXaW5kb3cgPSBpc1dpbmRvd1xuICAkLmlzQXJyYXkgPSBpc0FycmF5XG4gICQuaXNQbGFpbk9iamVjdCA9IGlzUGxhaW5PYmplY3RcblxuICAkLmlzRW1wdHlPYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgbmFtZVxuICAgIGZvciAobmFtZSBpbiBvYmopIHJldHVybiBmYWxzZVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAkLmluQXJyYXkgPSBmdW5jdGlvbihlbGVtLCBhcnJheSwgaSl7XG4gICAgcmV0dXJuIGVtcHR5QXJyYXkuaW5kZXhPZi5jYWxsKGFycmF5LCBlbGVtLCBpKVxuICB9XG5cbiAgJC5jYW1lbENhc2UgPSBjYW1lbGl6ZVxuICAkLnRyaW0gPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyID09IG51bGwgPyBcIlwiIDogU3RyaW5nLnByb3RvdHlwZS50cmltLmNhbGwoc3RyKVxuICB9XG5cbiAgLy8gcGx1Z2luIGNvbXBhdGliaWxpdHlcbiAgJC51dWlkID0gMFxuICAkLnN1cHBvcnQgPSB7IH1cbiAgJC5leHByID0geyB9XG5cbiAgJC5tYXAgPSBmdW5jdGlvbihlbGVtZW50cywgY2FsbGJhY2spe1xuICAgIHZhciB2YWx1ZSwgdmFsdWVzID0gW10sIGksIGtleVxuICAgIGlmIChsaWtlQXJyYXkoZWxlbWVudHMpKVxuICAgICAgZm9yIChpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhbHVlID0gY2FsbGJhY2soZWxlbWVudHNbaV0sIGkpXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB2YWx1ZXMucHVzaCh2YWx1ZSlcbiAgICAgIH1cbiAgICBlbHNlXG4gICAgICBmb3IgKGtleSBpbiBlbGVtZW50cykge1xuICAgICAgICB2YWx1ZSA9IGNhbGxiYWNrKGVsZW1lbnRzW2tleV0sIGtleSlcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHZhbHVlcy5wdXNoKHZhbHVlKVxuICAgICAgfVxuICAgIHJldHVybiBmbGF0dGVuKHZhbHVlcylcbiAgfVxuXG4gICQuZWFjaCA9IGZ1bmN0aW9uKGVsZW1lbnRzLCBjYWxsYmFjayl7XG4gICAgdmFyIGksIGtleVxuICAgIGlmIChsaWtlQXJyYXkoZWxlbWVudHMpKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspXG4gICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGVsZW1lbnRzW2ldLCBpLCBlbGVtZW50c1tpXSkgPT09IGZhbHNlKSByZXR1cm4gZWxlbWVudHNcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChrZXkgaW4gZWxlbWVudHMpXG4gICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGVsZW1lbnRzW2tleV0sIGtleSwgZWxlbWVudHNba2V5XSkgPT09IGZhbHNlKSByZXR1cm4gZWxlbWVudHNcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHNcbiAgfVxuXG4gICQuZ3JlcCA9IGZ1bmN0aW9uKGVsZW1lbnRzLCBjYWxsYmFjayl7XG4gICAgcmV0dXJuIGZpbHRlci5jYWxsKGVsZW1lbnRzLCBjYWxsYmFjaylcbiAgfVxuXG4gIGlmICh3aW5kb3cuSlNPTikgJC5wYXJzZUpTT04gPSBKU09OLnBhcnNlXG5cbiAgLy8gUG9wdWxhdGUgdGhlIGNsYXNzMnR5cGUgbWFwXG4gICQuZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3JcIi5zcGxpdChcIiBcIiksIGZ1bmN0aW9uKGksIG5hbWUpIHtcbiAgICBjbGFzczJ0eXBlWyBcIltvYmplY3QgXCIgKyBuYW1lICsgXCJdXCIgXSA9IG5hbWUudG9Mb3dlckNhc2UoKVxuICB9KVxuXG4gIC8vIERlZmluZSBtZXRob2RzIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgb24gYWxsXG4gIC8vIFplcHRvIGNvbGxlY3Rpb25zXG4gICQuZm4gPSB7XG4gICAgLy8gQmVjYXVzZSBhIGNvbGxlY3Rpb24gYWN0cyBsaWtlIGFuIGFycmF5XG4gICAgLy8gY29weSBvdmVyIHRoZXNlIHVzZWZ1bCBhcnJheSBmdW5jdGlvbnMuXG4gICAgZm9yRWFjaDogZW1wdHlBcnJheS5mb3JFYWNoLFxuICAgIHJlZHVjZTogZW1wdHlBcnJheS5yZWR1Y2UsXG4gICAgcHVzaDogZW1wdHlBcnJheS5wdXNoLFxuICAgIHNvcnQ6IGVtcHR5QXJyYXkuc29ydCxcbiAgICBpbmRleE9mOiBlbXB0eUFycmF5LmluZGV4T2YsXG4gICAgY29uY2F0OiBlbXB0eUFycmF5LmNvbmNhdCxcblxuICAgIC8vIGBtYXBgIGFuZCBgc2xpY2VgIGluIHRoZSBqUXVlcnkgQVBJIHdvcmsgZGlmZmVyZW50bHlcbiAgICAvLyBmcm9tIHRoZWlyIGFycmF5IGNvdW50ZXJwYXJ0c1xuICAgIG1hcDogZnVuY3Rpb24oZm4pe1xuICAgICAgcmV0dXJuICQoJC5tYXAodGhpcywgZnVuY3Rpb24oZWwsIGkpeyByZXR1cm4gZm4uY2FsbChlbCwgaSwgZWwpIH0pKVxuICAgIH0sXG4gICAgc2xpY2U6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gJChzbGljZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKVxuICAgIH0sXG5cbiAgICByZWFkeTogZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgLy8gbmVlZCB0byBjaGVjayBpZiBkb2N1bWVudC5ib2R5IGV4aXN0cyBmb3IgSUUgYXMgdGhhdCBicm93c2VyIHJlcG9ydHNcbiAgICAgIC8vIGRvY3VtZW50IHJlYWR5IHdoZW4gaXQgaGFzbid0IHlldCBjcmVhdGVkIHRoZSBib2R5IGVsZW1lbnRcbiAgICAgIGlmIChyZWFkeVJFLnRlc3QoZG9jdW1lbnQucmVhZHlTdGF0ZSkgJiYgZG9jdW1lbnQuYm9keSkgY2FsbGJhY2soJClcbiAgICAgIGVsc2UgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7IGNhbGxiYWNrKCQpIH0sIGZhbHNlKVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24oaWR4KXtcbiAgICAgIHJldHVybiBpZHggPT09IHVuZGVmaW5lZCA/IHNsaWNlLmNhbGwodGhpcykgOiB0aGlzW2lkeCA+PSAwID8gaWR4IDogaWR4ICsgdGhpcy5sZW5ndGhdXG4gICAgfSxcbiAgICB0b0FycmF5OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5nZXQoKSB9LFxuICAgIHNpemU6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gdGhpcy5sZW5ndGhcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSAhPSBudWxsKVxuICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKVxuICAgICAgfSlcbiAgICB9LFxuICAgIGVhY2g6IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgIGVtcHR5QXJyYXkuZXZlcnkuY2FsbCh0aGlzLCBmdW5jdGlvbihlbCwgaWR4KXtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwoZWwsIGlkeCwgZWwpICE9PSBmYWxzZVxuICAgICAgfSlcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcbiAgICBmaWx0ZXI6IGZ1bmN0aW9uKHNlbGVjdG9yKXtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKHNlbGVjdG9yKSkgcmV0dXJuIHRoaXMubm90KHRoaXMubm90KHNlbGVjdG9yKSlcbiAgICAgIHJldHVybiAkKGZpbHRlci5jYWxsKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpe1xuICAgICAgICByZXR1cm4gemVwdG8ubWF0Y2hlcyhlbGVtZW50LCBzZWxlY3RvcilcbiAgICAgIH0pKVxuICAgIH0sXG4gICAgYWRkOiBmdW5jdGlvbihzZWxlY3Rvcixjb250ZXh0KXtcbiAgICAgIHJldHVybiAkKHVuaXEodGhpcy5jb25jYXQoJChzZWxlY3Rvcixjb250ZXh0KSkpKVxuICAgIH0sXG4gICAgaXM6IGZ1bmN0aW9uKHNlbGVjdG9yKXtcbiAgICAgIHJldHVybiB0aGlzLmxlbmd0aCA+IDAgJiYgemVwdG8ubWF0Y2hlcyh0aGlzWzBdLCBzZWxlY3RvcilcbiAgICB9LFxuICAgIG5vdDogZnVuY3Rpb24oc2VsZWN0b3Ipe1xuICAgICAgdmFyIG5vZGVzPVtdXG4gICAgICBpZiAoaXNGdW5jdGlvbihzZWxlY3RvcikgJiYgc2VsZWN0b3IuY2FsbCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oaWR4KXtcbiAgICAgICAgICBpZiAoIXNlbGVjdG9yLmNhbGwodGhpcyxpZHgpKSBub2Rlcy5wdXNoKHRoaXMpXG4gICAgICAgIH0pXG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGV4Y2x1ZGVzID0gdHlwZW9mIHNlbGVjdG9yID09ICdzdHJpbmcnID8gdGhpcy5maWx0ZXIoc2VsZWN0b3IpIDpcbiAgICAgICAgICAobGlrZUFycmF5KHNlbGVjdG9yKSAmJiBpc0Z1bmN0aW9uKHNlbGVjdG9yLml0ZW0pKSA/IHNsaWNlLmNhbGwoc2VsZWN0b3IpIDogJChzZWxlY3RvcilcbiAgICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgICBpZiAoZXhjbHVkZXMuaW5kZXhPZihlbCkgPCAwKSBub2Rlcy5wdXNoKGVsKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgcmV0dXJuICQobm9kZXMpXG4gICAgfSxcbiAgICBoYXM6IGZ1bmN0aW9uKHNlbGVjdG9yKXtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gaXNPYmplY3Qoc2VsZWN0b3IpID9cbiAgICAgICAgICAkLmNvbnRhaW5zKHRoaXMsIHNlbGVjdG9yKSA6XG4gICAgICAgICAgJCh0aGlzKS5maW5kKHNlbGVjdG9yKS5zaXplKClcbiAgICAgIH0pXG4gICAgfSxcbiAgICBlcTogZnVuY3Rpb24oaWR4KXtcbiAgICAgIHJldHVybiBpZHggPT09IC0xID8gdGhpcy5zbGljZShpZHgpIDogdGhpcy5zbGljZShpZHgsICsgaWR4ICsgMSlcbiAgICB9LFxuICAgIGZpcnN0OiBmdW5jdGlvbigpe1xuICAgICAgdmFyIGVsID0gdGhpc1swXVxuICAgICAgcmV0dXJuIGVsICYmICFpc09iamVjdChlbCkgPyBlbCA6ICQoZWwpXG4gICAgfSxcbiAgICBsYXN0OiBmdW5jdGlvbigpe1xuICAgICAgdmFyIGVsID0gdGhpc1t0aGlzLmxlbmd0aCAtIDFdXG4gICAgICByZXR1cm4gZWwgJiYgIWlzT2JqZWN0KGVsKSA/IGVsIDogJChlbClcbiAgICB9LFxuICAgIGZpbmQ6IGZ1bmN0aW9uKHNlbGVjdG9yKXtcbiAgICAgIHZhciByZXN1bHQsICR0aGlzID0gdGhpc1xuICAgICAgaWYgKCFzZWxlY3RvcikgcmVzdWx0ID0gJCgpXG4gICAgICBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT0gJ29iamVjdCcpXG4gICAgICAgIHJlc3VsdCA9ICQoc2VsZWN0b3IpLmZpbHRlcihmdW5jdGlvbigpe1xuICAgICAgICAgIHZhciBub2RlID0gdGhpc1xuICAgICAgICAgIHJldHVybiBlbXB0eUFycmF5LnNvbWUuY2FsbCgkdGhpcywgZnVuY3Rpb24ocGFyZW50KXtcbiAgICAgICAgICAgIHJldHVybiAkLmNvbnRhaW5zKHBhcmVudCwgbm9kZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgZWxzZSBpZiAodGhpcy5sZW5ndGggPT0gMSkgcmVzdWx0ID0gJCh6ZXB0by5xc2EodGhpc1swXSwgc2VsZWN0b3IpKVxuICAgICAgZWxzZSByZXN1bHQgPSB0aGlzLm1hcChmdW5jdGlvbigpeyByZXR1cm4gemVwdG8ucXNhKHRoaXMsIHNlbGVjdG9yKSB9KVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH0sXG4gICAgY2xvc2VzdDogZnVuY3Rpb24oc2VsZWN0b3IsIGNvbnRleHQpe1xuICAgICAgdmFyIG5vZGUgPSB0aGlzWzBdLCBjb2xsZWN0aW9uID0gZmFsc2VcbiAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT0gJ29iamVjdCcpIGNvbGxlY3Rpb24gPSAkKHNlbGVjdG9yKVxuICAgICAgd2hpbGUgKG5vZGUgJiYgIShjb2xsZWN0aW9uID8gY29sbGVjdGlvbi5pbmRleE9mKG5vZGUpID49IDAgOiB6ZXB0by5tYXRjaGVzKG5vZGUsIHNlbGVjdG9yKSkpXG4gICAgICAgIG5vZGUgPSBub2RlICE9PSBjb250ZXh0ICYmICFpc0RvY3VtZW50KG5vZGUpICYmIG5vZGUucGFyZW50Tm9kZVxuICAgICAgcmV0dXJuICQobm9kZSlcbiAgICB9LFxuICAgIHBhcmVudHM6IGZ1bmN0aW9uKHNlbGVjdG9yKXtcbiAgICAgIHZhciBhbmNlc3RvcnMgPSBbXSwgbm9kZXMgPSB0aGlzXG4gICAgICB3aGlsZSAobm9kZXMubGVuZ3RoID4gMClcbiAgICAgICAgbm9kZXMgPSAkLm1hcChub2RlcywgZnVuY3Rpb24obm9kZSl7XG4gICAgICAgICAgaWYgKChub2RlID0gbm9kZS5wYXJlbnROb2RlKSAmJiAhaXNEb2N1bWVudChub2RlKSAmJiBhbmNlc3RvcnMuaW5kZXhPZihub2RlKSA8IDApIHtcbiAgICAgICAgICAgIGFuY2VzdG9ycy5wdXNoKG5vZGUpXG4gICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIHJldHVybiBmaWx0ZXJlZChhbmNlc3RvcnMsIHNlbGVjdG9yKVxuICAgIH0sXG4gICAgcGFyZW50OiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICByZXR1cm4gZmlsdGVyZWQodW5pcSh0aGlzLnBsdWNrKCdwYXJlbnROb2RlJykpLCBzZWxlY3RvcilcbiAgICB9LFxuICAgIGNoaWxkcmVuOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICByZXR1cm4gZmlsdGVyZWQodGhpcy5tYXAoZnVuY3Rpb24oKXsgcmV0dXJuIGNoaWxkcmVuKHRoaXMpIH0pLCBzZWxlY3RvcilcbiAgICB9LFxuICAgIGNvbnRlbnRzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbigpIHsgcmV0dXJuIHNsaWNlLmNhbGwodGhpcy5jaGlsZE5vZGVzKSB9KVxuICAgIH0sXG4gICAgc2libGluZ3M6IGZ1bmN0aW9uKHNlbGVjdG9yKXtcbiAgICAgIHJldHVybiBmaWx0ZXJlZCh0aGlzLm1hcChmdW5jdGlvbihpLCBlbCl7XG4gICAgICAgIHJldHVybiBmaWx0ZXIuY2FsbChjaGlsZHJlbihlbC5wYXJlbnROb2RlKSwgZnVuY3Rpb24oY2hpbGQpeyByZXR1cm4gY2hpbGQhPT1lbCB9KVxuICAgICAgfSksIHNlbGVjdG9yKVxuICAgIH0sXG4gICAgZW1wdHk6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7IHRoaXMuaW5uZXJIVE1MID0gJycgfSlcbiAgICB9LFxuICAgIC8vIGBwbHVja2AgaXMgYm9ycm93ZWQgZnJvbSBQcm90b3R5cGUuanNcbiAgICBwbHVjazogZnVuY3Rpb24ocHJvcGVydHkpe1xuICAgICAgcmV0dXJuICQubWFwKHRoaXMsIGZ1bmN0aW9uKGVsKXsgcmV0dXJuIGVsW3Byb3BlcnR5XSB9KVxuICAgIH0sXG4gICAgc2hvdzogZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiICYmICh0aGlzLnN0eWxlLmRpc3BsYXkgPSAnJylcbiAgICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUodGhpcywgJycpLmdldFByb3BlcnR5VmFsdWUoXCJkaXNwbGF5XCIpID09IFwibm9uZVwiKVxuICAgICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9IGRlZmF1bHREaXNwbGF5KHRoaXMubm9kZU5hbWUpXG4gICAgICB9KVxuICAgIH0sXG4gICAgcmVwbGFjZVdpdGg6IGZ1bmN0aW9uKG5ld0NvbnRlbnQpe1xuICAgICAgcmV0dXJuIHRoaXMuYmVmb3JlKG5ld0NvbnRlbnQpLnJlbW92ZSgpXG4gICAgfSxcbiAgICB3cmFwOiBmdW5jdGlvbihzdHJ1Y3R1cmUpe1xuICAgICAgdmFyIGZ1bmMgPSBpc0Z1bmN0aW9uKHN0cnVjdHVyZSlcbiAgICAgIGlmICh0aGlzWzBdICYmICFmdW5jKVxuICAgICAgICB2YXIgZG9tICAgPSAkKHN0cnVjdHVyZSkuZ2V0KDApLFxuICAgICAgICAgICAgY2xvbmUgPSBkb20ucGFyZW50Tm9kZSB8fCB0aGlzLmxlbmd0aCA+IDFcblxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihpbmRleCl7XG4gICAgICAgICQodGhpcykud3JhcEFsbChcbiAgICAgICAgICBmdW5jID8gc3RydWN0dXJlLmNhbGwodGhpcywgaW5kZXgpIDpcbiAgICAgICAgICAgIGNsb25lID8gZG9tLmNsb25lTm9kZSh0cnVlKSA6IGRvbVxuICAgICAgICApXG4gICAgICB9KVxuICAgIH0sXG4gICAgd3JhcEFsbDogZnVuY3Rpb24oc3RydWN0dXJlKXtcbiAgICAgIGlmICh0aGlzWzBdKSB7XG4gICAgICAgICQodGhpc1swXSkuYmVmb3JlKHN0cnVjdHVyZSA9ICQoc3RydWN0dXJlKSlcbiAgICAgICAgdmFyIGNoaWxkcmVuXG4gICAgICAgIC8vIGRyaWxsIGRvd24gdG8gdGhlIGlubW9zdCBlbGVtZW50XG4gICAgICAgIHdoaWxlICgoY2hpbGRyZW4gPSBzdHJ1Y3R1cmUuY2hpbGRyZW4oKSkubGVuZ3RoKSBzdHJ1Y3R1cmUgPSBjaGlsZHJlbi5maXJzdCgpXG4gICAgICAgICQoc3RydWN0dXJlKS5hcHBlbmQodGhpcylcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcbiAgICB3cmFwSW5uZXI6IGZ1bmN0aW9uKHN0cnVjdHVyZSl7XG4gICAgICB2YXIgZnVuYyA9IGlzRnVuY3Rpb24oc3RydWN0dXJlKVxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihpbmRleCl7XG4gICAgICAgIHZhciBzZWxmID0gJCh0aGlzKSwgY29udGVudHMgPSBzZWxmLmNvbnRlbnRzKCksXG4gICAgICAgICAgICBkb20gID0gZnVuYyA/IHN0cnVjdHVyZS5jYWxsKHRoaXMsIGluZGV4KSA6IHN0cnVjdHVyZVxuICAgICAgICBjb250ZW50cy5sZW5ndGggPyBjb250ZW50cy53cmFwQWxsKGRvbSkgOiBzZWxmLmFwcGVuZChkb20pXG4gICAgICB9KVxuICAgIH0sXG4gICAgdW53cmFwOiBmdW5jdGlvbigpe1xuICAgICAgdGhpcy5wYXJlbnQoKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykucmVwbGFjZVdpdGgoJCh0aGlzKS5jaGlsZHJlbigpKVxuICAgICAgfSlcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcbiAgICBjbG9uZTogZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5jbG9uZU5vZGUodHJ1ZSkgfSlcbiAgICB9LFxuICAgIGhpZGU6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gdGhpcy5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKVxuICAgIH0sXG4gICAgdG9nZ2xlOiBmdW5jdGlvbihzZXR0aW5nKXtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKVxuICAgICAgICA7KHNldHRpbmcgPT09IHVuZGVmaW5lZCA/IGVsLmNzcyhcImRpc3BsYXlcIikgPT0gXCJub25lXCIgOiBzZXR0aW5nKSA/IGVsLnNob3coKSA6IGVsLmhpZGUoKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZXY6IGZ1bmN0aW9uKHNlbGVjdG9yKXsgcmV0dXJuICQodGhpcy5wbHVjaygncHJldmlvdXNFbGVtZW50U2libGluZycpKS5maWx0ZXIoc2VsZWN0b3IgfHwgJyonKSB9LFxuICAgIG5leHQ6IGZ1bmN0aW9uKHNlbGVjdG9yKXsgcmV0dXJuICQodGhpcy5wbHVjaygnbmV4dEVsZW1lbnRTaWJsaW5nJykpLmZpbHRlcihzZWxlY3RvciB8fCAnKicpIH0sXG4gICAgaHRtbDogZnVuY3Rpb24oaHRtbCl7XG4gICAgICByZXR1cm4gMCBpbiBhcmd1bWVudHMgP1xuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oaWR4KXtcbiAgICAgICAgICB2YXIgb3JpZ2luSHRtbCA9IHRoaXMuaW5uZXJIVE1MXG4gICAgICAgICAgJCh0aGlzKS5lbXB0eSgpLmFwcGVuZCggZnVuY0FyZyh0aGlzLCBodG1sLCBpZHgsIG9yaWdpbkh0bWwpIClcbiAgICAgICAgfSkgOlxuICAgICAgICAoMCBpbiB0aGlzID8gdGhpc1swXS5pbm5lckhUTUwgOiBudWxsKVxuICAgIH0sXG4gICAgdGV4dDogZnVuY3Rpb24odGV4dCl7XG4gICAgICByZXR1cm4gMCBpbiBhcmd1bWVudHMgP1xuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oaWR4KXtcbiAgICAgICAgICB2YXIgbmV3VGV4dCA9IGZ1bmNBcmcodGhpcywgdGV4dCwgaWR4LCB0aGlzLnRleHRDb250ZW50KVxuICAgICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBuZXdUZXh0ID09IG51bGwgPyAnJyA6ICcnK25ld1RleHRcbiAgICAgICAgfSkgOlxuICAgICAgICAoMCBpbiB0aGlzID8gdGhpc1swXS50ZXh0Q29udGVudCA6IG51bGwpXG4gICAgfSxcbiAgICBhdHRyOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSl7XG4gICAgICB2YXIgcmVzdWx0XG4gICAgICByZXR1cm4gKHR5cGVvZiBuYW1lID09ICdzdHJpbmcnICYmICEoMSBpbiBhcmd1bWVudHMpKSA/XG4gICAgICAgICghdGhpcy5sZW5ndGggfHwgdGhpc1swXS5ub2RlVHlwZSAhPT0gMSA/IHVuZGVmaW5lZCA6XG4gICAgICAgICAgKCEocmVzdWx0ID0gdGhpc1swXS5nZXRBdHRyaWJ1dGUobmFtZSkpICYmIG5hbWUgaW4gdGhpc1swXSkgPyB0aGlzWzBdW25hbWVdIDogcmVzdWx0XG4gICAgICAgICkgOlxuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oaWR4KXtcbiAgICAgICAgICBpZiAodGhpcy5ub2RlVHlwZSAhPT0gMSkgcmV0dXJuXG4gICAgICAgICAgaWYgKGlzT2JqZWN0KG5hbWUpKSBmb3IgKGtleSBpbiBuYW1lKSBzZXRBdHRyaWJ1dGUodGhpcywga2V5LCBuYW1lW2tleV0pXG4gICAgICAgICAgZWxzZSBzZXRBdHRyaWJ1dGUodGhpcywgbmFtZSwgZnVuY0FyZyh0aGlzLCB2YWx1ZSwgaWR4LCB0aGlzLmdldEF0dHJpYnV0ZShuYW1lKSkpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICByZW1vdmVBdHRyOiBmdW5jdGlvbihuYW1lKXtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXsgdGhpcy5ub2RlVHlwZSA9PT0gMSAmJiBuYW1lLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbihhdHRyaWJ1dGUpe1xuICAgICAgICBzZXRBdHRyaWJ1dGUodGhpcywgYXR0cmlidXRlKVxuICAgICAgfSwgdGhpcyl9KVxuICAgIH0sXG4gICAgcHJvcDogZnVuY3Rpb24obmFtZSwgdmFsdWUpe1xuICAgICAgbmFtZSA9IHByb3BNYXBbbmFtZV0gfHwgbmFtZVxuICAgICAgcmV0dXJuICgxIGluIGFyZ3VtZW50cykgP1xuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oaWR4KXtcbiAgICAgICAgICB0aGlzW25hbWVdID0gZnVuY0FyZyh0aGlzLCB2YWx1ZSwgaWR4LCB0aGlzW25hbWVdKVxuICAgICAgICB9KSA6XG4gICAgICAgICh0aGlzWzBdICYmIHRoaXNbMF1bbmFtZV0pXG4gICAgfSxcbiAgICBkYXRhOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSl7XG4gICAgICB2YXIgYXR0ck5hbWUgPSAnZGF0YS0nICsgbmFtZS5yZXBsYWNlKGNhcGl0YWxSRSwgJy0kMScpLnRvTG93ZXJDYXNlKClcblxuICAgICAgdmFyIGRhdGEgPSAoMSBpbiBhcmd1bWVudHMpID9cbiAgICAgICAgdGhpcy5hdHRyKGF0dHJOYW1lLCB2YWx1ZSkgOlxuICAgICAgICB0aGlzLmF0dHIoYXR0ck5hbWUpXG5cbiAgICAgIHJldHVybiBkYXRhICE9PSBudWxsID8gZGVzZXJpYWxpemVWYWx1ZShkYXRhKSA6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgdmFsOiBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICByZXR1cm4gMCBpbiBhcmd1bWVudHMgP1xuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oaWR4KXtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gZnVuY0FyZyh0aGlzLCB2YWx1ZSwgaWR4LCB0aGlzLnZhbHVlKVxuICAgICAgICB9KSA6XG4gICAgICAgICh0aGlzWzBdICYmICh0aGlzWzBdLm11bHRpcGxlID9cbiAgICAgICAgICAgJCh0aGlzWzBdKS5maW5kKCdvcHRpb24nKS5maWx0ZXIoZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuc2VsZWN0ZWQgfSkucGx1Y2soJ3ZhbHVlJykgOlxuICAgICAgICAgICB0aGlzWzBdLnZhbHVlKVxuICAgICAgICApXG4gICAgfSxcbiAgICBvZmZzZXQ6IGZ1bmN0aW9uKGNvb3JkaW5hdGVzKXtcbiAgICAgIGlmIChjb29yZGluYXRlcykgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihpbmRleCl7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICBjb29yZHMgPSBmdW5jQXJnKHRoaXMsIGNvb3JkaW5hdGVzLCBpbmRleCwgJHRoaXMub2Zmc2V0KCkpLFxuICAgICAgICAgICAgcGFyZW50T2Zmc2V0ID0gJHRoaXMub2Zmc2V0UGFyZW50KCkub2Zmc2V0KCksXG4gICAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgICAgdG9wOiAgY29vcmRzLnRvcCAgLSBwYXJlbnRPZmZzZXQudG9wLFxuICAgICAgICAgICAgICBsZWZ0OiBjb29yZHMubGVmdCAtIHBhcmVudE9mZnNldC5sZWZ0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgaWYgKCR0aGlzLmNzcygncG9zaXRpb24nKSA9PSAnc3RhdGljJykgcHJvcHNbJ3Bvc2l0aW9uJ10gPSAncmVsYXRpdmUnXG4gICAgICAgICR0aGlzLmNzcyhwcm9wcylcbiAgICAgIH0pXG4gICAgICBpZiAoIXRoaXMubGVuZ3RoKSByZXR1cm4gbnVsbFxuICAgICAgdmFyIG9iaiA9IHRoaXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IG9iai5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgICAgICB0b3A6IG9iai50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICAgIHdpZHRoOiBNYXRoLnJvdW5kKG9iai53aWR0aCksXG4gICAgICAgIGhlaWdodDogTWF0aC5yb3VuZChvYmouaGVpZ2h0KVxuICAgICAgfVxuICAgIH0sXG4gICAgY3NzOiBmdW5jdGlvbihwcm9wZXJ0eSwgdmFsdWUpe1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICAgIHZhciBjb21wdXRlZFN0eWxlLCBlbGVtZW50ID0gdGhpc1swXVxuICAgICAgICBpZighZWxlbWVudCkgcmV0dXJuXG4gICAgICAgIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsICcnKVxuICAgICAgICBpZiAodHlwZW9mIHByb3BlcnR5ID09ICdzdHJpbmcnKVxuICAgICAgICAgIHJldHVybiBlbGVtZW50LnN0eWxlW2NhbWVsaXplKHByb3BlcnR5KV0gfHwgY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KVxuICAgICAgICBlbHNlIGlmIChpc0FycmF5KHByb3BlcnR5KSkge1xuICAgICAgICAgIHZhciBwcm9wcyA9IHt9XG4gICAgICAgICAgJC5lYWNoKHByb3BlcnR5LCBmdW5jdGlvbihfLCBwcm9wKXtcbiAgICAgICAgICAgIHByb3BzW3Byb3BdID0gKGVsZW1lbnQuc3R5bGVbY2FtZWxpemUocHJvcCldIHx8IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wKSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiBwcm9wc1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBjc3MgPSAnJ1xuICAgICAgaWYgKHR5cGUocHJvcGVydHkpID09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApXG4gICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7IHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkoZGFzaGVyaXplKHByb3BlcnR5KSkgfSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGNzcyA9IGRhc2hlcml6ZShwcm9wZXJ0eSkgKyBcIjpcIiArIG1heWJlQWRkUHgocHJvcGVydHksIHZhbHVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChrZXkgaW4gcHJvcGVydHkpXG4gICAgICAgICAgaWYgKCFwcm9wZXJ0eVtrZXldICYmIHByb3BlcnR5W2tleV0gIT09IDApXG4gICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oKXsgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShkYXNoZXJpemUoa2V5KSkgfSlcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBjc3MgKz0gZGFzaGVyaXplKGtleSkgKyAnOicgKyBtYXliZUFkZFB4KGtleSwgcHJvcGVydHlba2V5XSkgKyAnOydcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpeyB0aGlzLnN0eWxlLmNzc1RleHQgKz0gJzsnICsgY3NzIH0pXG4gICAgfSxcbiAgICBpbmRleDogZnVuY3Rpb24oZWxlbWVudCl7XG4gICAgICByZXR1cm4gZWxlbWVudCA/IHRoaXMuaW5kZXhPZigkKGVsZW1lbnQpWzBdKSA6IHRoaXMucGFyZW50KCkuY2hpbGRyZW4oKS5pbmRleE9mKHRoaXNbMF0pXG4gICAgfSxcbiAgICBoYXNDbGFzczogZnVuY3Rpb24obmFtZSl7XG4gICAgICBpZiAoIW5hbWUpIHJldHVybiBmYWxzZVxuICAgICAgcmV0dXJuIGVtcHR5QXJyYXkuc29tZS5jYWxsKHRoaXMsIGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVzdChjbGFzc05hbWUoZWwpKVxuICAgICAgfSwgY2xhc3NSRShuYW1lKSlcbiAgICB9LFxuICAgIGFkZENsYXNzOiBmdW5jdGlvbihuYW1lKXtcbiAgICAgIGlmICghbmFtZSkgcmV0dXJuIHRoaXNcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaWR4KXtcbiAgICAgICAgaWYgKCEoJ2NsYXNzTmFtZScgaW4gdGhpcykpIHJldHVyblxuICAgICAgICBjbGFzc0xpc3QgPSBbXVxuICAgICAgICB2YXIgY2xzID0gY2xhc3NOYW1lKHRoaXMpLCBuZXdOYW1lID0gZnVuY0FyZyh0aGlzLCBuYW1lLCBpZHgsIGNscylcbiAgICAgICAgbmV3TmFtZS5zcGxpdCgvXFxzKy9nKS5mb3JFYWNoKGZ1bmN0aW9uKGtsYXNzKXtcbiAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3Moa2xhc3MpKSBjbGFzc0xpc3QucHVzaChrbGFzcylcbiAgICAgICAgfSwgdGhpcylcbiAgICAgICAgY2xhc3NMaXN0Lmxlbmd0aCAmJiBjbGFzc05hbWUodGhpcywgY2xzICsgKGNscyA/IFwiIFwiIDogXCJcIikgKyBjbGFzc0xpc3Quam9pbihcIiBcIikpXG4gICAgICB9KVxuICAgIH0sXG4gICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihpZHgpe1xuICAgICAgICBpZiAoISgnY2xhc3NOYW1lJyBpbiB0aGlzKSkgcmV0dXJuXG4gICAgICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpIHJldHVybiBjbGFzc05hbWUodGhpcywgJycpXG4gICAgICAgIGNsYXNzTGlzdCA9IGNsYXNzTmFtZSh0aGlzKVxuICAgICAgICBmdW5jQXJnKHRoaXMsIG5hbWUsIGlkeCwgY2xhc3NMaXN0KS5zcGxpdCgvXFxzKy9nKS5mb3JFYWNoKGZ1bmN0aW9uKGtsYXNzKXtcbiAgICAgICAgICBjbGFzc0xpc3QgPSBjbGFzc0xpc3QucmVwbGFjZShjbGFzc1JFKGtsYXNzKSwgXCIgXCIpXG4gICAgICAgIH0pXG4gICAgICAgIGNsYXNzTmFtZSh0aGlzLCBjbGFzc0xpc3QudHJpbSgpKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHRvZ2dsZUNsYXNzOiBmdW5jdGlvbihuYW1lLCB3aGVuKXtcbiAgICAgIGlmICghbmFtZSkgcmV0dXJuIHRoaXNcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaWR4KXtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSwgbmFtZXMgPSBmdW5jQXJnKHRoaXMsIG5hbWUsIGlkeCwgY2xhc3NOYW1lKHRoaXMpKVxuICAgICAgICBuYW1lcy5zcGxpdCgvXFxzKy9nKS5mb3JFYWNoKGZ1bmN0aW9uKGtsYXNzKXtcbiAgICAgICAgICAod2hlbiA9PT0gdW5kZWZpbmVkID8gISR0aGlzLmhhc0NsYXNzKGtsYXNzKSA6IHdoZW4pID9cbiAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKGtsYXNzKSA6ICR0aGlzLnJlbW92ZUNsYXNzKGtsYXNzKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIHNjcm9sbFRvcDogZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYgKCF0aGlzLmxlbmd0aCkgcmV0dXJuXG4gICAgICB2YXIgaGFzU2Nyb2xsVG9wID0gJ3Njcm9sbFRvcCcgaW4gdGhpc1swXVxuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBoYXNTY3JvbGxUb3AgPyB0aGlzWzBdLnNjcm9sbFRvcCA6IHRoaXNbMF0ucGFnZVlPZmZzZXRcbiAgICAgIHJldHVybiB0aGlzLmVhY2goaGFzU2Nyb2xsVG9wID9cbiAgICAgICAgZnVuY3Rpb24oKXsgdGhpcy5zY3JvbGxUb3AgPSB2YWx1ZSB9IDpcbiAgICAgICAgZnVuY3Rpb24oKXsgdGhpcy5zY3JvbGxUbyh0aGlzLnNjcm9sbFgsIHZhbHVlKSB9KVxuICAgIH0sXG4gICAgc2Nyb2xsTGVmdDogZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYgKCF0aGlzLmxlbmd0aCkgcmV0dXJuXG4gICAgICB2YXIgaGFzU2Nyb2xsTGVmdCA9ICdzY3JvbGxMZWZ0JyBpbiB0aGlzWzBdXG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGhhc1Njcm9sbExlZnQgPyB0aGlzWzBdLnNjcm9sbExlZnQgOiB0aGlzWzBdLnBhZ2VYT2Zmc2V0XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGhhc1Njcm9sbExlZnQgP1xuICAgICAgICBmdW5jdGlvbigpeyB0aGlzLnNjcm9sbExlZnQgPSB2YWx1ZSB9IDpcbiAgICAgICAgZnVuY3Rpb24oKXsgdGhpcy5zY3JvbGxUbyh2YWx1ZSwgdGhpcy5zY3JvbGxZKSB9KVxuICAgIH0sXG4gICAgcG9zaXRpb246IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCF0aGlzLmxlbmd0aCkgcmV0dXJuXG5cbiAgICAgIHZhciBlbGVtID0gdGhpc1swXSxcbiAgICAgICAgLy8gR2V0ICpyZWFsKiBvZmZzZXRQYXJlbnRcbiAgICAgICAgb2Zmc2V0UGFyZW50ID0gdGhpcy5vZmZzZXRQYXJlbnQoKSxcbiAgICAgICAgLy8gR2V0IGNvcnJlY3Qgb2Zmc2V0c1xuICAgICAgICBvZmZzZXQgICAgICAgPSB0aGlzLm9mZnNldCgpLFxuICAgICAgICBwYXJlbnRPZmZzZXQgPSByb290Tm9kZVJFLnRlc3Qob2Zmc2V0UGFyZW50WzBdLm5vZGVOYW1lKSA/IHsgdG9wOiAwLCBsZWZ0OiAwIH0gOiBvZmZzZXRQYXJlbnQub2Zmc2V0KClcblxuICAgICAgLy8gU3VidHJhY3QgZWxlbWVudCBtYXJnaW5zXG4gICAgICAvLyBub3RlOiB3aGVuIGFuIGVsZW1lbnQgaGFzIG1hcmdpbjogYXV0byB0aGUgb2Zmc2V0TGVmdCBhbmQgbWFyZ2luTGVmdFxuICAgICAgLy8gYXJlIHRoZSBzYW1lIGluIFNhZmFyaSBjYXVzaW5nIG9mZnNldC5sZWZ0IHRvIGluY29ycmVjdGx5IGJlIDBcbiAgICAgIG9mZnNldC50b3AgIC09IHBhcnNlRmxvYXQoICQoZWxlbSkuY3NzKCdtYXJnaW4tdG9wJykgKSB8fCAwXG4gICAgICBvZmZzZXQubGVmdCAtPSBwYXJzZUZsb2F0KCAkKGVsZW0pLmNzcygnbWFyZ2luLWxlZnQnKSApIHx8IDBcblxuICAgICAgLy8gQWRkIG9mZnNldFBhcmVudCBib3JkZXJzXG4gICAgICBwYXJlbnRPZmZzZXQudG9wICArPSBwYXJzZUZsb2F0KCAkKG9mZnNldFBhcmVudFswXSkuY3NzKCdib3JkZXItdG9wLXdpZHRoJykgKSB8fCAwXG4gICAgICBwYXJlbnRPZmZzZXQubGVmdCArPSBwYXJzZUZsb2F0KCAkKG9mZnNldFBhcmVudFswXSkuY3NzKCdib3JkZXItbGVmdC13aWR0aCcpICkgfHwgMFxuXG4gICAgICAvLyBTdWJ0cmFjdCB0aGUgdHdvIG9mZnNldHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogIG9mZnNldC50b3AgIC0gcGFyZW50T2Zmc2V0LnRvcCxcbiAgICAgICAgbGVmdDogb2Zmc2V0LmxlZnQgLSBwYXJlbnRPZmZzZXQubGVmdFxuICAgICAgfVxuICAgIH0sXG4gICAgb2Zmc2V0UGFyZW50OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5vZmZzZXRQYXJlbnQgfHwgZG9jdW1lbnQuYm9keVxuICAgICAgICB3aGlsZSAocGFyZW50ICYmICFyb290Tm9kZVJFLnRlc3QocGFyZW50Lm5vZGVOYW1lKSAmJiAkKHBhcmVudCkuY3NzKFwicG9zaXRpb25cIikgPT0gXCJzdGF0aWNcIilcbiAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQub2Zmc2V0UGFyZW50XG4gICAgICAgIHJldHVybiBwYXJlbnRcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gZm9yIG5vd1xuICAkLmZuLmRldGFjaCA9ICQuZm4ucmVtb3ZlXG5cbiAgLy8gR2VuZXJhdGUgdGhlIGB3aWR0aGAgYW5kIGBoZWlnaHRgIGZ1bmN0aW9uc1xuICA7Wyd3aWR0aCcsICdoZWlnaHQnXS5mb3JFYWNoKGZ1bmN0aW9uKGRpbWVuc2lvbil7XG4gICAgdmFyIGRpbWVuc2lvblByb3BlcnR5ID1cbiAgICAgIGRpbWVuc2lvbi5yZXBsYWNlKC8uLywgZnVuY3Rpb24obSl7IHJldHVybiBtWzBdLnRvVXBwZXJDYXNlKCkgfSlcblxuICAgICQuZm5bZGltZW5zaW9uXSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIHZhciBvZmZzZXQsIGVsID0gdGhpc1swXVxuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBpc1dpbmRvdyhlbCkgPyBlbFsnaW5uZXInICsgZGltZW5zaW9uUHJvcGVydHldIDpcbiAgICAgICAgaXNEb2N1bWVudChlbCkgPyBlbC5kb2N1bWVudEVsZW1lbnRbJ3Njcm9sbCcgKyBkaW1lbnNpb25Qcm9wZXJ0eV0gOlxuICAgICAgICAob2Zmc2V0ID0gdGhpcy5vZmZzZXQoKSkgJiYgb2Zmc2V0W2RpbWVuc2lvbl1cbiAgICAgIGVsc2UgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihpZHgpe1xuICAgICAgICBlbCA9ICQodGhpcylcbiAgICAgICAgZWwuY3NzKGRpbWVuc2lvbiwgZnVuY0FyZyh0aGlzLCB2YWx1ZSwgaWR4LCBlbFtkaW1lbnNpb25dKCkpKVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gdHJhdmVyc2VOb2RlKG5vZGUsIGZ1bikge1xuICAgIGZ1bihub2RlKVxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBub2RlLmNoaWxkTm9kZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspXG4gICAgICB0cmF2ZXJzZU5vZGUobm9kZS5jaGlsZE5vZGVzW2ldLCBmdW4pXG4gIH1cblxuICAvLyBHZW5lcmF0ZSB0aGUgYGFmdGVyYCwgYHByZXBlbmRgLCBgYmVmb3JlYCwgYGFwcGVuZGAsXG4gIC8vIGBpbnNlcnRBZnRlcmAsIGBpbnNlcnRCZWZvcmVgLCBgYXBwZW5kVG9gLCBhbmQgYHByZXBlbmRUb2AgbWV0aG9kcy5cbiAgYWRqYWNlbmN5T3BlcmF0b3JzLmZvckVhY2goZnVuY3Rpb24ob3BlcmF0b3IsIG9wZXJhdG9ySW5kZXgpIHtcbiAgICB2YXIgaW5zaWRlID0gb3BlcmF0b3JJbmRleCAlIDIgLy89PiBwcmVwZW5kLCBhcHBlbmRcblxuICAgICQuZm5bb3BlcmF0b3JdID0gZnVuY3Rpb24oKXtcbiAgICAgIC8vIGFyZ3VtZW50cyBjYW4gYmUgbm9kZXMsIGFycmF5cyBvZiBub2RlcywgWmVwdG8gb2JqZWN0cyBhbmQgSFRNTCBzdHJpbmdzXG4gICAgICB2YXIgYXJnVHlwZSwgbm9kZXMgPSAkLm1hcChhcmd1bWVudHMsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICAgICAgYXJnVHlwZSA9IHR5cGUoYXJnKVxuICAgICAgICAgICAgcmV0dXJuIGFyZ1R5cGUgPT0gXCJvYmplY3RcIiB8fCBhcmdUeXBlID09IFwiYXJyYXlcIiB8fCBhcmcgPT0gbnVsbCA/XG4gICAgICAgICAgICAgIGFyZyA6IHplcHRvLmZyYWdtZW50KGFyZylcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwYXJlbnQsIGNvcHlCeUNsb25lID0gdGhpcy5sZW5ndGggPiAxXG4gICAgICBpZiAobm9kZXMubGVuZ3RoIDwgMSkgcmV0dXJuIHRoaXNcblxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihfLCB0YXJnZXQpe1xuICAgICAgICBwYXJlbnQgPSBpbnNpZGUgPyB0YXJnZXQgOiB0YXJnZXQucGFyZW50Tm9kZVxuXG4gICAgICAgIC8vIGNvbnZlcnQgYWxsIG1ldGhvZHMgdG8gYSBcImJlZm9yZVwiIG9wZXJhdGlvblxuICAgICAgICB0YXJnZXQgPSBvcGVyYXRvckluZGV4ID09IDAgPyB0YXJnZXQubmV4dFNpYmxpbmcgOlxuICAgICAgICAgICAgICAgICBvcGVyYXRvckluZGV4ID09IDEgPyB0YXJnZXQuZmlyc3RDaGlsZCA6XG4gICAgICAgICAgICAgICAgIG9wZXJhdG9ySW5kZXggPT0gMiA/IHRhcmdldCA6XG4gICAgICAgICAgICAgICAgIG51bGxcblxuICAgICAgICB2YXIgcGFyZW50SW5Eb2N1bWVudCA9ICQuY29udGFpbnMoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBwYXJlbnQpXG5cbiAgICAgICAgbm9kZXMuZm9yRWFjaChmdW5jdGlvbihub2RlKXtcbiAgICAgICAgICBpZiAoY29weUJ5Q2xvbmUpIG5vZGUgPSBub2RlLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgIGVsc2UgaWYgKCFwYXJlbnQpIHJldHVybiAkKG5vZGUpLnJlbW92ZSgpXG5cbiAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIHRhcmdldClcbiAgICAgICAgICBpZiAocGFyZW50SW5Eb2N1bWVudCkgdHJhdmVyc2VOb2RlKG5vZGUsIGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgICAgIGlmIChlbC5ub2RlTmFtZSAhPSBudWxsICYmIGVsLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnICYmXG4gICAgICAgICAgICAgICAoIWVsLnR5cGUgfHwgZWwudHlwZSA9PT0gJ3RleHQvamF2YXNjcmlwdCcpICYmICFlbC5zcmMpXG4gICAgICAgICAgICAgIHdpbmRvd1snZXZhbCddLmNhbGwod2luZG93LCBlbC5pbm5lckhUTUwpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gYWZ0ZXIgICAgPT4gaW5zZXJ0QWZ0ZXJcbiAgICAvLyBwcmVwZW5kICA9PiBwcmVwZW5kVG9cbiAgICAvLyBiZWZvcmUgICA9PiBpbnNlcnRCZWZvcmVcbiAgICAvLyBhcHBlbmQgICA9PiBhcHBlbmRUb1xuICAgICQuZm5baW5zaWRlID8gb3BlcmF0b3IrJ1RvJyA6ICdpbnNlcnQnKyhvcGVyYXRvckluZGV4ID8gJ0JlZm9yZScgOiAnQWZ0ZXInKV0gPSBmdW5jdGlvbihodG1sKXtcbiAgICAgICQoaHRtbClbb3BlcmF0b3JdKHRoaXMpXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgfSlcblxuICB6ZXB0by5aLnByb3RvdHlwZSA9ICQuZm5cblxuICAvLyBFeHBvcnQgaW50ZXJuYWwgQVBJIGZ1bmN0aW9ucyBpbiB0aGUgYCQuemVwdG9gIG5hbWVzcGFjZVxuICB6ZXB0by51bmlxID0gdW5pcVxuICB6ZXB0by5kZXNlcmlhbGl6ZVZhbHVlID0gZGVzZXJpYWxpemVWYWx1ZVxuICAkLnplcHRvID0gemVwdG9cblxuICByZXR1cm4gJFxufSkoKVxuXG47KGZ1bmN0aW9uKCQpe1xuICB2YXIgX3ppZCA9IDEsIHVuZGVmaW5lZCxcbiAgICAgIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLFxuICAgICAgaXNGdW5jdGlvbiA9ICQuaXNGdW5jdGlvbixcbiAgICAgIGlzU3RyaW5nID0gZnVuY3Rpb24ob2JqKXsgcmV0dXJuIHR5cGVvZiBvYmogPT0gJ3N0cmluZycgfSxcbiAgICAgIGhhbmRsZXJzID0ge30sXG4gICAgICBzcGVjaWFsRXZlbnRzPXt9LFxuICAgICAgZm9jdXNpblN1cHBvcnRlZCA9ICdvbmZvY3VzaW4nIGluIHdpbmRvdyxcbiAgICAgIGZvY3VzID0geyBmb2N1czogJ2ZvY3VzaW4nLCBibHVyOiAnZm9jdXNvdXQnIH0sXG4gICAgICBob3ZlciA9IHsgbW91c2VlbnRlcjogJ21vdXNlb3ZlcicsIG1vdXNlbGVhdmU6ICdtb3VzZW91dCcgfVxuXG4gIHNwZWNpYWxFdmVudHMuY2xpY2sgPSBzcGVjaWFsRXZlbnRzLm1vdXNlZG93biA9IHNwZWNpYWxFdmVudHMubW91c2V1cCA9IHNwZWNpYWxFdmVudHMubW91c2Vtb3ZlID0gJ01vdXNlRXZlbnRzJ1xuXG4gIGZ1bmN0aW9uIHppZChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuX3ppZCB8fCAoZWxlbWVudC5femlkID0gX3ppZCsrKVxuICB9XG4gIGZ1bmN0aW9uIGZpbmRIYW5kbGVycyhlbGVtZW50LCBldmVudCwgZm4sIHNlbGVjdG9yKSB7XG4gICAgZXZlbnQgPSBwYXJzZShldmVudClcbiAgICBpZiAoZXZlbnQubnMpIHZhciBtYXRjaGVyID0gbWF0Y2hlckZvcihldmVudC5ucylcbiAgICByZXR1cm4gKGhhbmRsZXJzW3ppZChlbGVtZW50KV0gfHwgW10pLmZpbHRlcihmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gaGFuZGxlclxuICAgICAgICAmJiAoIWV2ZW50LmUgIHx8IGhhbmRsZXIuZSA9PSBldmVudC5lKVxuICAgICAgICAmJiAoIWV2ZW50Lm5zIHx8IG1hdGNoZXIudGVzdChoYW5kbGVyLm5zKSlcbiAgICAgICAgJiYgKCFmbiAgICAgICB8fCB6aWQoaGFuZGxlci5mbikgPT09IHppZChmbikpXG4gICAgICAgICYmICghc2VsZWN0b3IgfHwgaGFuZGxlci5zZWwgPT0gc2VsZWN0b3IpXG4gICAgfSlcbiAgfVxuICBmdW5jdGlvbiBwYXJzZShldmVudCkge1xuICAgIHZhciBwYXJ0cyA9ICgnJyArIGV2ZW50KS5zcGxpdCgnLicpXG4gICAgcmV0dXJuIHtlOiBwYXJ0c1swXSwgbnM6IHBhcnRzLnNsaWNlKDEpLnNvcnQoKS5qb2luKCcgJyl9XG4gIH1cbiAgZnVuY3Rpb24gbWF0Y2hlckZvcihucykge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKCcoPzpefCApJyArIG5zLnJlcGxhY2UoJyAnLCAnIC4qID8nKSArICcoPzogfCQpJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGV2ZW50Q2FwdHVyZShoYW5kbGVyLCBjYXB0dXJlU2V0dGluZykge1xuICAgIHJldHVybiBoYW5kbGVyLmRlbCAmJlxuICAgICAgKCFmb2N1c2luU3VwcG9ydGVkICYmIChoYW5kbGVyLmUgaW4gZm9jdXMpKSB8fFxuICAgICAgISFjYXB0dXJlU2V0dGluZ1xuICB9XG5cbiAgZnVuY3Rpb24gcmVhbEV2ZW50KHR5cGUpIHtcbiAgICByZXR1cm4gaG92ZXJbdHlwZV0gfHwgKGZvY3VzaW5TdXBwb3J0ZWQgJiYgZm9jdXNbdHlwZV0pIHx8IHR5cGVcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZChlbGVtZW50LCBldmVudHMsIGZuLCBkYXRhLCBzZWxlY3RvciwgZGVsZWdhdG9yLCBjYXB0dXJlKXtcbiAgICB2YXIgaWQgPSB6aWQoZWxlbWVudCksIHNldCA9IChoYW5kbGVyc1tpZF0gfHwgKGhhbmRsZXJzW2lkXSA9IFtdKSlcbiAgICBldmVudHMuc3BsaXQoL1xccy8pLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgaWYgKGV2ZW50ID09ICdyZWFkeScpIHJldHVybiAkKGRvY3VtZW50KS5yZWFkeShmbilcbiAgICAgIHZhciBoYW5kbGVyICAgPSBwYXJzZShldmVudClcbiAgICAgIGhhbmRsZXIuZm4gICAgPSBmblxuICAgICAgaGFuZGxlci5zZWwgICA9IHNlbGVjdG9yXG4gICAgICAvLyBlbXVsYXRlIG1vdXNlZW50ZXIsIG1vdXNlbGVhdmVcbiAgICAgIGlmIChoYW5kbGVyLmUgaW4gaG92ZXIpIGZuID0gZnVuY3Rpb24oZSl7XG4gICAgICAgIHZhciByZWxhdGVkID0gZS5yZWxhdGVkVGFyZ2V0XG4gICAgICAgIGlmICghcmVsYXRlZCB8fCAocmVsYXRlZCAhPT0gdGhpcyAmJiAhJC5jb250YWlucyh0aGlzLCByZWxhdGVkKSkpXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZXIuZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgfVxuICAgICAgaGFuZGxlci5kZWwgICA9IGRlbGVnYXRvclxuICAgICAgdmFyIGNhbGxiYWNrICA9IGRlbGVnYXRvciB8fCBmblxuICAgICAgaGFuZGxlci5wcm94eSA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICBlID0gY29tcGF0aWJsZShlKVxuICAgICAgICBpZiAoZS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKSByZXR1cm5cbiAgICAgICAgZS5kYXRhID0gZGF0YVxuICAgICAgICB2YXIgcmVzdWx0ID0gY2FsbGJhY2suYXBwbHkoZWxlbWVudCwgZS5fYXJncyA9PSB1bmRlZmluZWQgPyBbZV0gOiBbZV0uY29uY2F0KGUuX2FyZ3MpKVxuICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkgZS5wcmV2ZW50RGVmYXVsdCgpLCBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cbiAgICAgIGhhbmRsZXIuaSA9IHNldC5sZW5ndGhcbiAgICAgIHNldC5wdXNoKGhhbmRsZXIpXG4gICAgICBpZiAoJ2FkZEV2ZW50TGlzdGVuZXInIGluIGVsZW1lbnQpXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihyZWFsRXZlbnQoaGFuZGxlci5lKSwgaGFuZGxlci5wcm94eSwgZXZlbnRDYXB0dXJlKGhhbmRsZXIsIGNhcHR1cmUpKVxuICAgIH0pXG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlKGVsZW1lbnQsIGV2ZW50cywgZm4sIHNlbGVjdG9yLCBjYXB0dXJlKXtcbiAgICB2YXIgaWQgPSB6aWQoZWxlbWVudClcbiAgICA7KGV2ZW50cyB8fCAnJykuc3BsaXQoL1xccy8pLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgZmluZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50LCBmbiwgc2VsZWN0b3IpLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcil7XG4gICAgICAgIGRlbGV0ZSBoYW5kbGVyc1tpZF1baGFuZGxlci5pXVxuICAgICAgaWYgKCdyZW1vdmVFdmVudExpc3RlbmVyJyBpbiBlbGVtZW50KVxuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIocmVhbEV2ZW50KGhhbmRsZXIuZSksIGhhbmRsZXIucHJveHksIGV2ZW50Q2FwdHVyZShoYW5kbGVyLCBjYXB0dXJlKSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gICQuZXZlbnQgPSB7IGFkZDogYWRkLCByZW1vdmU6IHJlbW92ZSB9XG5cbiAgJC5wcm94eSA9IGZ1bmN0aW9uKGZuLCBjb250ZXh0KSB7XG4gICAgdmFyIGFyZ3MgPSAoMiBpbiBhcmd1bWVudHMpICYmIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKVxuICAgIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgdmFyIHByb3h5Rm4gPSBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkoY29udGV4dCwgYXJncyA/IGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSkgOiBhcmd1bWVudHMpIH1cbiAgICAgIHByb3h5Rm4uX3ppZCA9IHppZChmbilcbiAgICAgIHJldHVybiBwcm94eUZuXG4gICAgfSBlbHNlIGlmIChpc1N0cmluZyhjb250ZXh0KSkge1xuICAgICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgYXJncy51bnNoaWZ0KGZuW2NvbnRleHRdLCBmbilcbiAgICAgICAgcmV0dXJuICQucHJveHkuYXBwbHkobnVsbCwgYXJncylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAkLnByb3h5KGZuW2NvbnRleHRdLCBmbilcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImV4cGVjdGVkIGZ1bmN0aW9uXCIpXG4gICAgfVxuICB9XG5cbiAgJC5mbi5iaW5kID0gZnVuY3Rpb24oZXZlbnQsIGRhdGEsIGNhbGxiYWNrKXtcbiAgICByZXR1cm4gdGhpcy5vbihldmVudCwgZGF0YSwgY2FsbGJhY2spXG4gIH1cbiAgJC5mbi51bmJpbmQgPSBmdW5jdGlvbihldmVudCwgY2FsbGJhY2spe1xuICAgIHJldHVybiB0aGlzLm9mZihldmVudCwgY2FsbGJhY2spXG4gIH1cbiAgJC5mbi5vbmUgPSBmdW5jdGlvbihldmVudCwgc2VsZWN0b3IsIGRhdGEsIGNhbGxiYWNrKXtcbiAgICByZXR1cm4gdGhpcy5vbihldmVudCwgc2VsZWN0b3IsIGRhdGEsIGNhbGxiYWNrLCAxKVxuICB9XG5cbiAgdmFyIHJldHVyblRydWUgPSBmdW5jdGlvbigpe3JldHVybiB0cnVlfSxcbiAgICAgIHJldHVybkZhbHNlID0gZnVuY3Rpb24oKXtyZXR1cm4gZmFsc2V9LFxuICAgICAgaWdub3JlUHJvcGVydGllcyA9IC9eKFtBLVpdfHJldHVyblZhbHVlJHxsYXllcltYWV0kKS8sXG4gICAgICBldmVudE1ldGhvZHMgPSB7XG4gICAgICAgIHByZXZlbnREZWZhdWx0OiAnaXNEZWZhdWx0UHJldmVudGVkJyxcbiAgICAgICAgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOiAnaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQnLFxuICAgICAgICBzdG9wUHJvcGFnYXRpb246ICdpc1Byb3BhZ2F0aW9uU3RvcHBlZCdcbiAgICAgIH1cblxuICBmdW5jdGlvbiBjb21wYXRpYmxlKGV2ZW50LCBzb3VyY2UpIHtcbiAgICBpZiAoc291cmNlIHx8ICFldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHNvdXJjZSB8fCAoc291cmNlID0gZXZlbnQpXG5cbiAgICAgICQuZWFjaChldmVudE1ldGhvZHMsIGZ1bmN0aW9uKG5hbWUsIHByZWRpY2F0ZSkge1xuICAgICAgICB2YXIgc291cmNlTWV0aG9kID0gc291cmNlW25hbWVdXG4gICAgICAgIGV2ZW50W25hbWVdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICB0aGlzW3ByZWRpY2F0ZV0gPSByZXR1cm5UcnVlXG4gICAgICAgICAgcmV0dXJuIHNvdXJjZU1ldGhvZCAmJiBzb3VyY2VNZXRob2QuYXBwbHkoc291cmNlLCBhcmd1bWVudHMpXG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRbcHJlZGljYXRlXSA9IHJldHVybkZhbHNlXG4gICAgICB9KVxuXG4gICAgICBpZiAoc291cmNlLmRlZmF1bHRQcmV2ZW50ZWQgIT09IHVuZGVmaW5lZCA/IHNvdXJjZS5kZWZhdWx0UHJldmVudGVkIDpcbiAgICAgICAgICAncmV0dXJuVmFsdWUnIGluIHNvdXJjZSA/IHNvdXJjZS5yZXR1cm5WYWx1ZSA9PT0gZmFsc2UgOlxuICAgICAgICAgIHNvdXJjZS5nZXRQcmV2ZW50RGVmYXVsdCAmJiBzb3VyY2UuZ2V0UHJldmVudERlZmF1bHQoKSlcbiAgICAgICAgZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkID0gcmV0dXJuVHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZXZlbnRcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByb3h5KGV2ZW50KSB7XG4gICAgdmFyIGtleSwgcHJveHkgPSB7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50IH1cbiAgICBmb3IgKGtleSBpbiBldmVudClcbiAgICAgIGlmICghaWdub3JlUHJvcGVydGllcy50ZXN0KGtleSkgJiYgZXZlbnRba2V5XSAhPT0gdW5kZWZpbmVkKSBwcm94eVtrZXldID0gZXZlbnRba2V5XVxuXG4gICAgcmV0dXJuIGNvbXBhdGlibGUocHJveHksIGV2ZW50KVxuICB9XG5cbiAgJC5mbi5kZWxlZ2F0ZSA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBldmVudCwgY2FsbGJhY2spe1xuICAgIHJldHVybiB0aGlzLm9uKGV2ZW50LCBzZWxlY3RvciwgY2FsbGJhY2spXG4gIH1cbiAgJC5mbi51bmRlbGVnYXRlID0gZnVuY3Rpb24oc2VsZWN0b3IsIGV2ZW50LCBjYWxsYmFjayl7XG4gICAgcmV0dXJuIHRoaXMub2ZmKGV2ZW50LCBzZWxlY3RvciwgY2FsbGJhY2spXG4gIH1cblxuICAkLmZuLmxpdmUgPSBmdW5jdGlvbihldmVudCwgY2FsbGJhY2spe1xuICAgICQoZG9jdW1lbnQuYm9keSkuZGVsZWdhdGUodGhpcy5zZWxlY3RvciwgZXZlbnQsIGNhbGxiYWNrKVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgJC5mbi5kaWUgPSBmdW5jdGlvbihldmVudCwgY2FsbGJhY2spe1xuICAgICQoZG9jdW1lbnQuYm9keSkudW5kZWxlZ2F0ZSh0aGlzLnNlbGVjdG9yLCBldmVudCwgY2FsbGJhY2spXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gICQuZm4ub24gPSBmdW5jdGlvbihldmVudCwgc2VsZWN0b3IsIGRhdGEsIGNhbGxiYWNrLCBvbmUpe1xuICAgIHZhciBhdXRvUmVtb3ZlLCBkZWxlZ2F0b3IsICR0aGlzID0gdGhpc1xuICAgIGlmIChldmVudCAmJiAhaXNTdHJpbmcoZXZlbnQpKSB7XG4gICAgICAkLmVhY2goZXZlbnQsIGZ1bmN0aW9uKHR5cGUsIGZuKXtcbiAgICAgICAgJHRoaXMub24odHlwZSwgc2VsZWN0b3IsIGRhdGEsIGZuLCBvbmUpXG4gICAgICB9KVxuICAgICAgcmV0dXJuICR0aGlzXG4gICAgfVxuXG4gICAgaWYgKCFpc1N0cmluZyhzZWxlY3RvcikgJiYgIWlzRnVuY3Rpb24oY2FsbGJhY2spICYmIGNhbGxiYWNrICE9PSBmYWxzZSlcbiAgICAgIGNhbGxiYWNrID0gZGF0YSwgZGF0YSA9IHNlbGVjdG9yLCBzZWxlY3RvciA9IHVuZGVmaW5lZFxuICAgIGlmIChpc0Z1bmN0aW9uKGRhdGEpIHx8IGRhdGEgPT09IGZhbHNlKVxuICAgICAgY2FsbGJhY2sgPSBkYXRhLCBkYXRhID0gdW5kZWZpbmVkXG5cbiAgICBpZiAoY2FsbGJhY2sgPT09IGZhbHNlKSBjYWxsYmFjayA9IHJldHVybkZhbHNlXG5cbiAgICByZXR1cm4gJHRoaXMuZWFjaChmdW5jdGlvbihfLCBlbGVtZW50KXtcbiAgICAgIGlmIChvbmUpIGF1dG9SZW1vdmUgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgcmVtb3ZlKGVsZW1lbnQsIGUudHlwZSwgY2FsbGJhY2spXG4gICAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxlY3RvcikgZGVsZWdhdG9yID0gZnVuY3Rpb24oZSl7XG4gICAgICAgIHZhciBldnQsIG1hdGNoID0gJChlLnRhcmdldCkuY2xvc2VzdChzZWxlY3RvciwgZWxlbWVudCkuZ2V0KDApXG4gICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaCAhPT0gZWxlbWVudCkge1xuICAgICAgICAgIGV2dCA9ICQuZXh0ZW5kKGNyZWF0ZVByb3h5KGUpLCB7Y3VycmVudFRhcmdldDogbWF0Y2gsIGxpdmVGaXJlZDogZWxlbWVudH0pXG4gICAgICAgICAgcmV0dXJuIChhdXRvUmVtb3ZlIHx8IGNhbGxiYWNrKS5hcHBseShtYXRjaCwgW2V2dF0uY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYWRkKGVsZW1lbnQsIGV2ZW50LCBjYWxsYmFjaywgZGF0YSwgc2VsZWN0b3IsIGRlbGVnYXRvciB8fCBhdXRvUmVtb3ZlKVxuICAgIH0pXG4gIH1cbiAgJC5mbi5vZmYgPSBmdW5jdGlvbihldmVudCwgc2VsZWN0b3IsIGNhbGxiYWNrKXtcbiAgICB2YXIgJHRoaXMgPSB0aGlzXG4gICAgaWYgKGV2ZW50ICYmICFpc1N0cmluZyhldmVudCkpIHtcbiAgICAgICQuZWFjaChldmVudCwgZnVuY3Rpb24odHlwZSwgZm4pe1xuICAgICAgICAkdGhpcy5vZmYodHlwZSwgc2VsZWN0b3IsIGZuKVxuICAgICAgfSlcbiAgICAgIHJldHVybiAkdGhpc1xuICAgIH1cblxuICAgIGlmICghaXNTdHJpbmcoc2VsZWN0b3IpICYmICFpc0Z1bmN0aW9uKGNhbGxiYWNrKSAmJiBjYWxsYmFjayAhPT0gZmFsc2UpXG4gICAgICBjYWxsYmFjayA9IHNlbGVjdG9yLCBzZWxlY3RvciA9IHVuZGVmaW5lZFxuXG4gICAgaWYgKGNhbGxiYWNrID09PSBmYWxzZSkgY2FsbGJhY2sgPSByZXR1cm5GYWxzZVxuXG4gICAgcmV0dXJuICR0aGlzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHJlbW92ZSh0aGlzLCBldmVudCwgY2FsbGJhY2ssIHNlbGVjdG9yKVxuICAgIH0pXG4gIH1cblxuICAkLmZuLnRyaWdnZXIgPSBmdW5jdGlvbihldmVudCwgYXJncyl7XG4gICAgZXZlbnQgPSAoaXNTdHJpbmcoZXZlbnQpIHx8ICQuaXNQbGFpbk9iamVjdChldmVudCkpID8gJC5FdmVudChldmVudCkgOiBjb21wYXRpYmxlKGV2ZW50KVxuICAgIGV2ZW50Ll9hcmdzID0gYXJnc1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIC8vIGhhbmRsZSBmb2N1cygpLCBibHVyKCkgYnkgY2FsbGluZyB0aGVtIGRpcmVjdGx5XG4gICAgICBpZiAoZXZlbnQudHlwZSBpbiBmb2N1cyAmJiB0eXBlb2YgdGhpc1tldmVudC50eXBlXSA9PSBcImZ1bmN0aW9uXCIpIHRoaXNbZXZlbnQudHlwZV0oKVxuICAgICAgLy8gaXRlbXMgaW4gdGhlIGNvbGxlY3Rpb24gbWlnaHQgbm90IGJlIERPTSBlbGVtZW50c1xuICAgICAgZWxzZSBpZiAoJ2Rpc3BhdGNoRXZlbnQnIGluIHRoaXMpIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgIGVsc2UgJCh0aGlzKS50cmlnZ2VySGFuZGxlcihldmVudCwgYXJncylcbiAgICB9KVxuICB9XG5cbiAgLy8gdHJpZ2dlcnMgZXZlbnQgaGFuZGxlcnMgb24gY3VycmVudCBlbGVtZW50IGp1c3QgYXMgaWYgYW4gZXZlbnQgb2NjdXJyZWQsXG4gIC8vIGRvZXNuJ3QgdHJpZ2dlciBhbiBhY3R1YWwgZXZlbnQsIGRvZXNuJ3QgYnViYmxlXG4gICQuZm4udHJpZ2dlckhhbmRsZXIgPSBmdW5jdGlvbihldmVudCwgYXJncyl7XG4gICAgdmFyIGUsIHJlc3VsdFxuICAgIHRoaXMuZWFjaChmdW5jdGlvbihpLCBlbGVtZW50KXtcbiAgICAgIGUgPSBjcmVhdGVQcm94eShpc1N0cmluZyhldmVudCkgPyAkLkV2ZW50KGV2ZW50KSA6IGV2ZW50KVxuICAgICAgZS5fYXJncyA9IGFyZ3NcbiAgICAgIGUudGFyZ2V0ID0gZWxlbWVudFxuICAgICAgJC5lYWNoKGZpbmRIYW5kbGVycyhlbGVtZW50LCBldmVudC50eXBlIHx8IGV2ZW50KSwgZnVuY3Rpb24oaSwgaGFuZGxlcil7XG4gICAgICAgIHJlc3VsdCA9IGhhbmRsZXIucHJveHkoZSlcbiAgICAgICAgaWYgKGUuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSkgcmV0dXJuIGZhbHNlXG4gICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgLy8gc2hvcnRjdXQgbWV0aG9kcyBmb3IgYC5iaW5kKGV2ZW50LCBmbilgIGZvciBlYWNoIGV2ZW50IHR5cGVcbiAgOygnZm9jdXNpbiBmb2N1c291dCBmb2N1cyBibHVyIGxvYWQgcmVzaXplIHNjcm9sbCB1bmxvYWQgY2xpY2sgZGJsY2xpY2sgJytcbiAgJ21vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlICcrXG4gICdjaGFuZ2Ugc2VsZWN0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgZXJyb3InKS5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAkLmZuW2V2ZW50XSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gKDAgaW4gYXJndW1lbnRzKSA/XG4gICAgICAgIHRoaXMuYmluZChldmVudCwgY2FsbGJhY2spIDpcbiAgICAgICAgdGhpcy50cmlnZ2VyKGV2ZW50KVxuICAgIH1cbiAgfSlcblxuICAkLkV2ZW50ID0gZnVuY3Rpb24odHlwZSwgcHJvcHMpIHtcbiAgICBpZiAoIWlzU3RyaW5nKHR5cGUpKSBwcm9wcyA9IHR5cGUsIHR5cGUgPSBwcm9wcy50eXBlXG4gICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoc3BlY2lhbEV2ZW50c1t0eXBlXSB8fCAnRXZlbnRzJyksIGJ1YmJsZXMgPSB0cnVlXG4gICAgaWYgKHByb3BzKSBmb3IgKHZhciBuYW1lIGluIHByb3BzKSAobmFtZSA9PSAnYnViYmxlcycpID8gKGJ1YmJsZXMgPSAhIXByb3BzW25hbWVdKSA6IChldmVudFtuYW1lXSA9IHByb3BzW25hbWVdKVxuICAgIGV2ZW50LmluaXRFdmVudCh0eXBlLCBidWJibGVzLCB0cnVlKVxuICAgIHJldHVybiBjb21wYXRpYmxlKGV2ZW50KVxuICB9XG5cbn0pKFplcHRvKVxuXG47KGZ1bmN0aW9uKCQpe1xuICB2YXIganNvbnBJRCA9IDAsXG4gICAgICBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudCxcbiAgICAgIGtleSxcbiAgICAgIG5hbWUsXG4gICAgICByc2NyaXB0ID0gLzxzY3JpcHRcXGJbXjxdKig/Oig/ITxcXC9zY3JpcHQ+KTxbXjxdKikqPFxcL3NjcmlwdD4vZ2ksXG4gICAgICBzY3JpcHRUeXBlUkUgPSAvXig/OnRleHR8YXBwbGljYXRpb24pXFwvamF2YXNjcmlwdC9pLFxuICAgICAgeG1sVHlwZVJFID0gL14oPzp0ZXh0fGFwcGxpY2F0aW9uKVxcL3htbC9pLFxuICAgICAganNvblR5cGUgPSAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBodG1sVHlwZSA9ICd0ZXh0L2h0bWwnLFxuICAgICAgYmxhbmtSRSA9IC9eXFxzKiQvLFxuICAgICAgb3JpZ2luQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG5cbiAgb3JpZ2luQW5jaG9yLmhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuXG4gIC8vIHRyaWdnZXIgYSBjdXN0b20gZXZlbnQgYW5kIHJldHVybiBmYWxzZSBpZiBpdCB3YXMgY2FuY2VsbGVkXG4gIGZ1bmN0aW9uIHRyaWdnZXJBbmRSZXR1cm4oY29udGV4dCwgZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgdmFyIGV2ZW50ID0gJC5FdmVudChldmVudE5hbWUpXG4gICAgJChjb250ZXh0KS50cmlnZ2VyKGV2ZW50LCBkYXRhKVxuICAgIHJldHVybiAhZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKClcbiAgfVxuXG4gIC8vIHRyaWdnZXIgYW4gQWpheCBcImdsb2JhbFwiIGV2ZW50XG4gIGZ1bmN0aW9uIHRyaWdnZXJHbG9iYWwoc2V0dGluZ3MsIGNvbnRleHQsIGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmIChzZXR0aW5ncy5nbG9iYWwpIHJldHVybiB0cmlnZ2VyQW5kUmV0dXJuKGNvbnRleHQgfHwgZG9jdW1lbnQsIGV2ZW50TmFtZSwgZGF0YSlcbiAgfVxuXG4gIC8vIE51bWJlciBvZiBhY3RpdmUgQWpheCByZXF1ZXN0c1xuICAkLmFjdGl2ZSA9IDBcblxuICBmdW5jdGlvbiBhamF4U3RhcnQoc2V0dGluZ3MpIHtcbiAgICBpZiAoc2V0dGluZ3MuZ2xvYmFsICYmICQuYWN0aXZlKysgPT09IDApIHRyaWdnZXJHbG9iYWwoc2V0dGluZ3MsIG51bGwsICdhamF4U3RhcnQnKVxuICB9XG4gIGZ1bmN0aW9uIGFqYXhTdG9wKHNldHRpbmdzKSB7XG4gICAgaWYgKHNldHRpbmdzLmdsb2JhbCAmJiAhKC0tJC5hY3RpdmUpKSB0cmlnZ2VyR2xvYmFsKHNldHRpbmdzLCBudWxsLCAnYWpheFN0b3AnKVxuICB9XG5cbiAgLy8gdHJpZ2dlcnMgYW4gZXh0cmEgZ2xvYmFsIGV2ZW50IFwiYWpheEJlZm9yZVNlbmRcIiB0aGF0J3MgbGlrZSBcImFqYXhTZW5kXCIgYnV0IGNhbmNlbGFibGVcbiAgZnVuY3Rpb24gYWpheEJlZm9yZVNlbmQoeGhyLCBzZXR0aW5ncykge1xuICAgIHZhciBjb250ZXh0ID0gc2V0dGluZ3MuY29udGV4dFxuICAgIGlmIChzZXR0aW5ncy5iZWZvcmVTZW5kLmNhbGwoY29udGV4dCwgeGhyLCBzZXR0aW5ncykgPT09IGZhbHNlIHx8XG4gICAgICAgIHRyaWdnZXJHbG9iYWwoc2V0dGluZ3MsIGNvbnRleHQsICdhamF4QmVmb3JlU2VuZCcsIFt4aHIsIHNldHRpbmdzXSkgPT09IGZhbHNlKVxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICB0cmlnZ2VyR2xvYmFsKHNldHRpbmdzLCBjb250ZXh0LCAnYWpheFNlbmQnLCBbeGhyLCBzZXR0aW5nc10pXG4gIH1cbiAgZnVuY3Rpb24gYWpheFN1Y2Nlc3MoZGF0YSwgeGhyLCBzZXR0aW5ncywgZGVmZXJyZWQpIHtcbiAgICB2YXIgY29udGV4dCA9IHNldHRpbmdzLmNvbnRleHQsIHN0YXR1cyA9ICdzdWNjZXNzJ1xuICAgIHNldHRpbmdzLnN1Y2Nlc3MuY2FsbChjb250ZXh0LCBkYXRhLCBzdGF0dXMsIHhocilcbiAgICBpZiAoZGVmZXJyZWQpIGRlZmVycmVkLnJlc29sdmVXaXRoKGNvbnRleHQsIFtkYXRhLCBzdGF0dXMsIHhocl0pXG4gICAgdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgY29udGV4dCwgJ2FqYXhTdWNjZXNzJywgW3hociwgc2V0dGluZ3MsIGRhdGFdKVxuICAgIGFqYXhDb21wbGV0ZShzdGF0dXMsIHhociwgc2V0dGluZ3MpXG4gIH1cbiAgLy8gdHlwZTogXCJ0aW1lb3V0XCIsIFwiZXJyb3JcIiwgXCJhYm9ydFwiLCBcInBhcnNlcmVycm9yXCJcbiAgZnVuY3Rpb24gYWpheEVycm9yKGVycm9yLCB0eXBlLCB4aHIsIHNldHRpbmdzLCBkZWZlcnJlZCkge1xuICAgIHZhciBjb250ZXh0ID0gc2V0dGluZ3MuY29udGV4dFxuICAgIHNldHRpbmdzLmVycm9yLmNhbGwoY29udGV4dCwgeGhyLCB0eXBlLCBlcnJvcilcbiAgICBpZiAoZGVmZXJyZWQpIGRlZmVycmVkLnJlamVjdFdpdGgoY29udGV4dCwgW3hociwgdHlwZSwgZXJyb3JdKVxuICAgIHRyaWdnZXJHbG9iYWwoc2V0dGluZ3MsIGNvbnRleHQsICdhamF4RXJyb3InLCBbeGhyLCBzZXR0aW5ncywgZXJyb3IgfHwgdHlwZV0pXG4gICAgYWpheENvbXBsZXRlKHR5cGUsIHhociwgc2V0dGluZ3MpXG4gIH1cbiAgLy8gc3RhdHVzOiBcInN1Y2Nlc3NcIiwgXCJub3Rtb2RpZmllZFwiLCBcImVycm9yXCIsIFwidGltZW91dFwiLCBcImFib3J0XCIsIFwicGFyc2VyZXJyb3JcIlxuICBmdW5jdGlvbiBhamF4Q29tcGxldGUoc3RhdHVzLCB4aHIsIHNldHRpbmdzKSB7XG4gICAgdmFyIGNvbnRleHQgPSBzZXR0aW5ncy5jb250ZXh0XG4gICAgc2V0dGluZ3MuY29tcGxldGUuY2FsbChjb250ZXh0LCB4aHIsIHN0YXR1cylcbiAgICB0cmlnZ2VyR2xvYmFsKHNldHRpbmdzLCBjb250ZXh0LCAnYWpheENvbXBsZXRlJywgW3hociwgc2V0dGluZ3NdKVxuICAgIGFqYXhTdG9wKHNldHRpbmdzKVxuICB9XG5cbiAgLy8gRW1wdHkgZnVuY3Rpb24sIHVzZWQgYXMgZGVmYXVsdCBjYWxsYmFja1xuICBmdW5jdGlvbiBlbXB0eSgpIHt9XG5cbiAgJC5hamF4SlNPTlAgPSBmdW5jdGlvbihvcHRpb25zLCBkZWZlcnJlZCl7XG4gICAgaWYgKCEoJ3R5cGUnIGluIG9wdGlvbnMpKSByZXR1cm4gJC5hamF4KG9wdGlvbnMpXG5cbiAgICB2YXIgX2NhbGxiYWNrTmFtZSA9IG9wdGlvbnMuanNvbnBDYWxsYmFjayxcbiAgICAgIGNhbGxiYWNrTmFtZSA9ICgkLmlzRnVuY3Rpb24oX2NhbGxiYWNrTmFtZSkgP1xuICAgICAgICBfY2FsbGJhY2tOYW1lKCkgOiBfY2FsbGJhY2tOYW1lKSB8fCAoJ2pzb25wJyArICgrK2pzb25wSUQpKSxcbiAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpLFxuICAgICAgb3JpZ2luYWxDYWxsYmFjayA9IHdpbmRvd1tjYWxsYmFja05hbWVdLFxuICAgICAgcmVzcG9uc2VEYXRhLFxuICAgICAgYWJvcnQgPSBmdW5jdGlvbihlcnJvclR5cGUpIHtcbiAgICAgICAgJChzY3JpcHQpLnRyaWdnZXJIYW5kbGVyKCdlcnJvcicsIGVycm9yVHlwZSB8fCAnYWJvcnQnKVxuICAgICAgfSxcbiAgICAgIHhociA9IHsgYWJvcnQ6IGFib3J0IH0sIGFib3J0VGltZW91dFxuXG4gICAgaWYgKGRlZmVycmVkKSBkZWZlcnJlZC5wcm9taXNlKHhocilcblxuICAgICQoc2NyaXB0KS5vbignbG9hZCBlcnJvcicsIGZ1bmN0aW9uKGUsIGVycm9yVHlwZSl7XG4gICAgICBjbGVhclRpbWVvdXQoYWJvcnRUaW1lb3V0KVxuICAgICAgJChzY3JpcHQpLm9mZigpLnJlbW92ZSgpXG5cbiAgICAgIGlmIChlLnR5cGUgPT0gJ2Vycm9yJyB8fCAhcmVzcG9uc2VEYXRhKSB7XG4gICAgICAgIGFqYXhFcnJvcihudWxsLCBlcnJvclR5cGUgfHwgJ2Vycm9yJywgeGhyLCBvcHRpb25zLCBkZWZlcnJlZClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFqYXhTdWNjZXNzKHJlc3BvbnNlRGF0YVswXSwgeGhyLCBvcHRpb25zLCBkZWZlcnJlZClcbiAgICAgIH1cblxuICAgICAgd2luZG93W2NhbGxiYWNrTmFtZV0gPSBvcmlnaW5hbENhbGxiYWNrXG4gICAgICBpZiAocmVzcG9uc2VEYXRhICYmICQuaXNGdW5jdGlvbihvcmlnaW5hbENhbGxiYWNrKSlcbiAgICAgICAgb3JpZ2luYWxDYWxsYmFjayhyZXNwb25zZURhdGFbMF0pXG5cbiAgICAgIG9yaWdpbmFsQ2FsbGJhY2sgPSByZXNwb25zZURhdGEgPSB1bmRlZmluZWRcbiAgICB9KVxuXG4gICAgaWYgKGFqYXhCZWZvcmVTZW5kKHhociwgb3B0aW9ucykgPT09IGZhbHNlKSB7XG4gICAgICBhYm9ydCgnYWJvcnQnKVxuICAgICAgcmV0dXJuIHhoclxuICAgIH1cblxuICAgIHdpbmRvd1tjYWxsYmFja05hbWVdID0gZnVuY3Rpb24oKXtcbiAgICAgIHJlc3BvbnNlRGF0YSA9IGFyZ3VtZW50c1xuICAgIH1cblxuICAgIHNjcmlwdC5zcmMgPSBvcHRpb25zLnVybC5yZXBsYWNlKC9cXD8oLispPVxcPy8sICc/JDE9JyArIGNhbGxiYWNrTmFtZSlcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdClcblxuICAgIGlmIChvcHRpb25zLnRpbWVvdXQgPiAwKSBhYm9ydFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBhYm9ydCgndGltZW91dCcpXG4gICAgfSwgb3B0aW9ucy50aW1lb3V0KVxuXG4gICAgcmV0dXJuIHhoclxuICB9XG5cbiAgJC5hamF4U2V0dGluZ3MgPSB7XG4gICAgLy8gRGVmYXVsdCB0eXBlIG9mIHJlcXVlc3RcbiAgICB0eXBlOiAnR0VUJyxcbiAgICAvLyBDYWxsYmFjayB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSByZXF1ZXN0XG4gICAgYmVmb3JlU2VuZDogZW1wdHksXG4gICAgLy8gQ2FsbGJhY2sgdGhhdCBpcyBleGVjdXRlZCBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkc1xuICAgIHN1Y2Nlc3M6IGVtcHR5LFxuICAgIC8vIENhbGxiYWNrIHRoYXQgaXMgZXhlY3V0ZWQgdGhlIHRoZSBzZXJ2ZXIgZHJvcHMgZXJyb3JcbiAgICBlcnJvcjogZW1wdHksXG4gICAgLy8gQ2FsbGJhY2sgdGhhdCBpcyBleGVjdXRlZCBvbiByZXF1ZXN0IGNvbXBsZXRlIChib3RoOiBlcnJvciBhbmQgc3VjY2VzcylcbiAgICBjb21wbGV0ZTogZW1wdHksXG4gICAgLy8gVGhlIGNvbnRleHQgZm9yIHRoZSBjYWxsYmFja3NcbiAgICBjb250ZXh0OiBudWxsLFxuICAgIC8vIFdoZXRoZXIgdG8gdHJpZ2dlciBcImdsb2JhbFwiIEFqYXggZXZlbnRzXG4gICAgZ2xvYmFsOiB0cnVlLFxuICAgIC8vIFRyYW5zcG9ydFxuICAgIHhocjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKVxuICAgIH0sXG4gICAgLy8gTUlNRSB0eXBlcyBtYXBwaW5nXG4gICAgLy8gSUlTIHJldHVybnMgSmF2YXNjcmlwdCBhcyBcImFwcGxpY2F0aW9uL3gtamF2YXNjcmlwdFwiXG4gICAgYWNjZXB0czoge1xuICAgICAgc2NyaXB0OiAndGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi94LWphdmFzY3JpcHQnLFxuICAgICAganNvbjogICBqc29uVHlwZSxcbiAgICAgIHhtbDogICAgJ2FwcGxpY2F0aW9uL3htbCwgdGV4dC94bWwnLFxuICAgICAgaHRtbDogICBodG1sVHlwZSxcbiAgICAgIHRleHQ6ICAgJ3RleHQvcGxhaW4nXG4gICAgfSxcbiAgICAvLyBXaGV0aGVyIHRoZSByZXF1ZXN0IGlzIHRvIGFub3RoZXIgZG9tYWluXG4gICAgY3Jvc3NEb21haW46IGZhbHNlLFxuICAgIC8vIERlZmF1bHQgdGltZW91dFxuICAgIHRpbWVvdXQ6IDAsXG4gICAgLy8gV2hldGhlciBkYXRhIHNob3VsZCBiZSBzZXJpYWxpemVkIHRvIHN0cmluZ1xuICAgIHByb2Nlc3NEYXRhOiB0cnVlLFxuICAgIC8vIFdoZXRoZXIgdGhlIGJyb3dzZXIgc2hvdWxkIGJlIGFsbG93ZWQgdG8gY2FjaGUgR0VUIHJlc3BvbnNlc1xuICAgIGNhY2hlOiB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBtaW1lVG9EYXRhVHlwZShtaW1lKSB7XG4gICAgaWYgKG1pbWUpIG1pbWUgPSBtaW1lLnNwbGl0KCc7JywgMilbMF1cbiAgICByZXR1cm4gbWltZSAmJiAoIG1pbWUgPT0gaHRtbFR5cGUgPyAnaHRtbCcgOlxuICAgICAgbWltZSA9PSBqc29uVHlwZSA/ICdqc29uJyA6XG4gICAgICBzY3JpcHRUeXBlUkUudGVzdChtaW1lKSA/ICdzY3JpcHQnIDpcbiAgICAgIHhtbFR5cGVSRS50ZXN0KG1pbWUpICYmICd4bWwnICkgfHwgJ3RleHQnXG4gIH1cblxuICBmdW5jdGlvbiBhcHBlbmRRdWVyeSh1cmwsIHF1ZXJ5KSB7XG4gICAgaWYgKHF1ZXJ5ID09ICcnKSByZXR1cm4gdXJsXG4gICAgcmV0dXJuICh1cmwgKyAnJicgKyBxdWVyeSkucmVwbGFjZSgvWyY/XXsxLDJ9LywgJz8nKVxuICB9XG5cbiAgLy8gc2VyaWFsaXplIHBheWxvYWQgYW5kIGFwcGVuZCBpdCB0byB0aGUgVVJMIGZvciBHRVQgcmVxdWVzdHNcbiAgZnVuY3Rpb24gc2VyaWFsaXplRGF0YShvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMucHJvY2Vzc0RhdGEgJiYgb3B0aW9ucy5kYXRhICYmICQudHlwZShvcHRpb25zLmRhdGEpICE9IFwic3RyaW5nXCIpXG4gICAgICBvcHRpb25zLmRhdGEgPSAkLnBhcmFtKG9wdGlvbnMuZGF0YSwgb3B0aW9ucy50cmFkaXRpb25hbClcbiAgICBpZiAob3B0aW9ucy5kYXRhICYmICghb3B0aW9ucy50eXBlIHx8IG9wdGlvbnMudHlwZS50b1VwcGVyQ2FzZSgpID09ICdHRVQnKSlcbiAgICAgIG9wdGlvbnMudXJsID0gYXBwZW5kUXVlcnkob3B0aW9ucy51cmwsIG9wdGlvbnMuZGF0YSksIG9wdGlvbnMuZGF0YSA9IHVuZGVmaW5lZFxuICB9XG5cbiAgJC5hamF4ID0gZnVuY3Rpb24ob3B0aW9ucyl7XG4gICAgdmFyIHNldHRpbmdzID0gJC5leHRlbmQoe30sIG9wdGlvbnMgfHwge30pLFxuICAgICAgICBkZWZlcnJlZCA9ICQuRGVmZXJyZWQgJiYgJC5EZWZlcnJlZCgpLFxuICAgICAgICB1cmxBbmNob3JcbiAgICBmb3IgKGtleSBpbiAkLmFqYXhTZXR0aW5ncykgaWYgKHNldHRpbmdzW2tleV0gPT09IHVuZGVmaW5lZCkgc2V0dGluZ3Nba2V5XSA9ICQuYWpheFNldHRpbmdzW2tleV1cblxuICAgIGFqYXhTdGFydChzZXR0aW5ncylcblxuICAgIGlmICghc2V0dGluZ3MuY3Jvc3NEb21haW4pIHtcbiAgICAgIHVybEFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgICAgdXJsQW5jaG9yLmhyZWYgPSBzZXR0aW5ncy51cmxcbiAgICAgIHVybEFuY2hvci5ocmVmID0gdXJsQW5jaG9yLmhyZWZcbiAgICAgIHNldHRpbmdzLmNyb3NzRG9tYWluID0gKG9yaWdpbkFuY2hvci5wcm90b2NvbCArICcvLycgKyBvcmlnaW5BbmNob3IuaG9zdCkgIT09ICh1cmxBbmNob3IucHJvdG9jb2wgKyAnLy8nICsgdXJsQW5jaG9yLmhvc3QpXG4gICAgfVxuXG4gICAgaWYgKCFzZXR0aW5ncy51cmwpIHNldHRpbmdzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpXG4gICAgc2VyaWFsaXplRGF0YShzZXR0aW5ncylcblxuICAgIHZhciBkYXRhVHlwZSA9IHNldHRpbmdzLmRhdGFUeXBlLCBoYXNQbGFjZWhvbGRlciA9IC9cXD8uKz1cXD8vLnRlc3Qoc2V0dGluZ3MudXJsKVxuICAgIGlmIChoYXNQbGFjZWhvbGRlcikgZGF0YVR5cGUgPSAnanNvbnAnXG5cbiAgICBpZiAoc2V0dGluZ3MuY2FjaGUgPT09IGZhbHNlIHx8IChcbiAgICAgICAgICghb3B0aW9ucyB8fCBvcHRpb25zLmNhY2hlICE9PSB0cnVlKSAmJlxuICAgICAgICAgKCdzY3JpcHQnID09IGRhdGFUeXBlIHx8ICdqc29ucCcgPT0gZGF0YVR5cGUpXG4gICAgICAgICkpXG4gICAgICBzZXR0aW5ncy51cmwgPSBhcHBlbmRRdWVyeShzZXR0aW5ncy51cmwsICdfPScgKyBEYXRlLm5vdygpKVxuXG4gICAgaWYgKCdqc29ucCcgPT0gZGF0YVR5cGUpIHtcbiAgICAgIGlmICghaGFzUGxhY2Vob2xkZXIpXG4gICAgICAgIHNldHRpbmdzLnVybCA9IGFwcGVuZFF1ZXJ5KHNldHRpbmdzLnVybCxcbiAgICAgICAgICBzZXR0aW5ncy5qc29ucCA/IChzZXR0aW5ncy5qc29ucCArICc9PycpIDogc2V0dGluZ3MuanNvbnAgPT09IGZhbHNlID8gJycgOiAnY2FsbGJhY2s9PycpXG4gICAgICByZXR1cm4gJC5hamF4SlNPTlAoc2V0dGluZ3MsIGRlZmVycmVkKVxuICAgIH1cblxuICAgIHZhciBtaW1lID0gc2V0dGluZ3MuYWNjZXB0c1tkYXRhVHlwZV0sXG4gICAgICAgIGhlYWRlcnMgPSB7IH0sXG4gICAgICAgIHNldEhlYWRlciA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7IGhlYWRlcnNbbmFtZS50b0xvd2VyQ2FzZSgpXSA9IFtuYW1lLCB2YWx1ZV0gfSxcbiAgICAgICAgcHJvdG9jb2wgPSAvXihbXFx3LV0rOilcXC9cXC8vLnRlc3Qoc2V0dGluZ3MudXJsKSA/IFJlZ0V4cC4kMSA6IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCxcbiAgICAgICAgeGhyID0gc2V0dGluZ3MueGhyKCksXG4gICAgICAgIG5hdGl2ZVNldEhlYWRlciA9IHhoci5zZXRSZXF1ZXN0SGVhZGVyLFxuICAgICAgICBhYm9ydFRpbWVvdXRcblxuICAgIGlmIChkZWZlcnJlZCkgZGVmZXJyZWQucHJvbWlzZSh4aHIpXG5cbiAgICBpZiAoIXNldHRpbmdzLmNyb3NzRG9tYWluKSBzZXRIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKVxuICAgIHNldEhlYWRlcignQWNjZXB0JywgbWltZSB8fCAnKi8qJylcbiAgICBpZiAobWltZSA9IHNldHRpbmdzLm1pbWVUeXBlIHx8IG1pbWUpIHtcbiAgICAgIGlmIChtaW1lLmluZGV4T2YoJywnKSA+IC0xKSBtaW1lID0gbWltZS5zcGxpdCgnLCcsIDIpWzBdXG4gICAgICB4aHIub3ZlcnJpZGVNaW1lVHlwZSAmJiB4aHIub3ZlcnJpZGVNaW1lVHlwZShtaW1lKVxuICAgIH1cbiAgICBpZiAoc2V0dGluZ3MuY29udGVudFR5cGUgfHwgKHNldHRpbmdzLmNvbnRlbnRUeXBlICE9PSBmYWxzZSAmJiBzZXR0aW5ncy5kYXRhICYmIHNldHRpbmdzLnR5cGUudG9VcHBlckNhc2UoKSAhPSAnR0VUJykpXG4gICAgICBzZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsIHNldHRpbmdzLmNvbnRlbnRUeXBlIHx8ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKVxuXG4gICAgaWYgKHNldHRpbmdzLmhlYWRlcnMpIGZvciAobmFtZSBpbiBzZXR0aW5ncy5oZWFkZXJzKSBzZXRIZWFkZXIobmFtZSwgc2V0dGluZ3MuaGVhZGVyc1tuYW1lXSlcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlciA9IHNldEhlYWRlclxuXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZW1wdHlcbiAgICAgICAgY2xlYXJUaW1lb3V0KGFib3J0VGltZW91dClcbiAgICAgICAgdmFyIHJlc3VsdCwgZXJyb3IgPSBmYWxzZVxuICAgICAgICBpZiAoKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHx8IHhoci5zdGF0dXMgPT0gMzA0IHx8ICh4aHIuc3RhdHVzID09IDAgJiYgcHJvdG9jb2wgPT0gJ2ZpbGU6JykpIHtcbiAgICAgICAgICBkYXRhVHlwZSA9IGRhdGFUeXBlIHx8IG1pbWVUb0RhdGFUeXBlKHNldHRpbmdzLm1pbWVUeXBlIHx8IHhoci5nZXRSZXNwb25zZUhlYWRlcignY29udGVudC10eXBlJykpXG4gICAgICAgICAgcmVzdWx0ID0geGhyLnJlc3BvbnNlVGV4dFxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2dsb2JhbC1ldmFsLXdoYXQtYXJlLXRoZS1vcHRpb25zL1xuICAgICAgICAgICAgaWYgKGRhdGFUeXBlID09ICdzY3JpcHQnKSAgICAoMSxldmFsKShyZXN1bHQpXG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhVHlwZSA9PSAneG1sJykgIHJlc3VsdCA9IHhoci5yZXNwb25zZVhNTFxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YVR5cGUgPT0gJ2pzb24nKSByZXN1bHQgPSBibGFua1JFLnRlc3QocmVzdWx0KSA/IG51bGwgOiAkLnBhcnNlSlNPTihyZXN1bHQpXG4gICAgICAgICAgfSBjYXRjaCAoZSkgeyBlcnJvciA9IGUgfVxuXG4gICAgICAgICAgaWYgKGVycm9yKSBhamF4RXJyb3IoZXJyb3IsICdwYXJzZXJlcnJvcicsIHhociwgc2V0dGluZ3MsIGRlZmVycmVkKVxuICAgICAgICAgIGVsc2UgYWpheFN1Y2Nlc3MocmVzdWx0LCB4aHIsIHNldHRpbmdzLCBkZWZlcnJlZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhamF4RXJyb3IoeGhyLnN0YXR1c1RleHQgfHwgbnVsbCwgeGhyLnN0YXR1cyA/ICdlcnJvcicgOiAnYWJvcnQnLCB4aHIsIHNldHRpbmdzLCBkZWZlcnJlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhamF4QmVmb3JlU2VuZCh4aHIsIHNldHRpbmdzKSA9PT0gZmFsc2UpIHtcbiAgICAgIHhoci5hYm9ydCgpXG4gICAgICBhamF4RXJyb3IobnVsbCwgJ2Fib3J0JywgeGhyLCBzZXR0aW5ncywgZGVmZXJyZWQpXG4gICAgICByZXR1cm4geGhyXG4gICAgfVxuXG4gICAgaWYgKHNldHRpbmdzLnhockZpZWxkcykgZm9yIChuYW1lIGluIHNldHRpbmdzLnhockZpZWxkcykgeGhyW25hbWVdID0gc2V0dGluZ3MueGhyRmllbGRzW25hbWVdXG5cbiAgICB2YXIgYXN5bmMgPSAnYXN5bmMnIGluIHNldHRpbmdzID8gc2V0dGluZ3MuYXN5bmMgOiB0cnVlXG4gICAgeGhyLm9wZW4oc2V0dGluZ3MudHlwZSwgc2V0dGluZ3MudXJsLCBhc3luYywgc2V0dGluZ3MudXNlcm5hbWUsIHNldHRpbmdzLnBhc3N3b3JkKVxuXG4gICAgZm9yIChuYW1lIGluIGhlYWRlcnMpIG5hdGl2ZVNldEhlYWRlci5hcHBseSh4aHIsIGhlYWRlcnNbbmFtZV0pXG5cbiAgICBpZiAoc2V0dGluZ3MudGltZW91dCA+IDApIGFib3J0VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGVtcHR5XG4gICAgICAgIHhoci5hYm9ydCgpXG4gICAgICAgIGFqYXhFcnJvcihudWxsLCAndGltZW91dCcsIHhociwgc2V0dGluZ3MsIGRlZmVycmVkKVxuICAgICAgfSwgc2V0dGluZ3MudGltZW91dClcblxuICAgIC8vIGF2b2lkIHNlbmRpbmcgZW1wdHkgc3RyaW5nICgjMzE5KVxuICAgIHhoci5zZW5kKHNldHRpbmdzLmRhdGEgPyBzZXR0aW5ncy5kYXRhIDogbnVsbClcbiAgICByZXR1cm4geGhyXG4gIH1cblxuICAvLyBoYW5kbGUgb3B0aW9uYWwgZGF0YS9zdWNjZXNzIGFyZ3VtZW50c1xuICBmdW5jdGlvbiBwYXJzZUFyZ3VtZW50cyh1cmwsIGRhdGEsIHN1Y2Nlc3MsIGRhdGFUeXBlKSB7XG4gICAgaWYgKCQuaXNGdW5jdGlvbihkYXRhKSkgZGF0YVR5cGUgPSBzdWNjZXNzLCBzdWNjZXNzID0gZGF0YSwgZGF0YSA9IHVuZGVmaW5lZFxuICAgIGlmICghJC5pc0Z1bmN0aW9uKHN1Y2Nlc3MpKSBkYXRhVHlwZSA9IHN1Y2Nlc3MsIHN1Y2Nlc3MgPSB1bmRlZmluZWRcbiAgICByZXR1cm4ge1xuICAgICAgdXJsOiB1cmxcbiAgICAsIGRhdGE6IGRhdGFcbiAgICAsIHN1Y2Nlc3M6IHN1Y2Nlc3NcbiAgICAsIGRhdGFUeXBlOiBkYXRhVHlwZVxuICAgIH1cbiAgfVxuXG4gICQuZ2V0ID0gZnVuY3Rpb24oLyogdXJsLCBkYXRhLCBzdWNjZXNzLCBkYXRhVHlwZSAqLyl7XG4gICAgcmV0dXJuICQuYWpheChwYXJzZUFyZ3VtZW50cy5hcHBseShudWxsLCBhcmd1bWVudHMpKVxuICB9XG5cbiAgJC5wb3N0ID0gZnVuY3Rpb24oLyogdXJsLCBkYXRhLCBzdWNjZXNzLCBkYXRhVHlwZSAqLyl7XG4gICAgdmFyIG9wdGlvbnMgPSBwYXJzZUFyZ3VtZW50cy5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgb3B0aW9ucy50eXBlID0gJ1BPU1QnXG4gICAgcmV0dXJuICQuYWpheChvcHRpb25zKVxuICB9XG5cbiAgJC5nZXRKU09OID0gZnVuY3Rpb24oLyogdXJsLCBkYXRhLCBzdWNjZXNzICovKXtcbiAgICB2YXIgb3B0aW9ucyA9IHBhcnNlQXJndW1lbnRzLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICBvcHRpb25zLmRhdGFUeXBlID0gJ2pzb24nXG4gICAgcmV0dXJuICQuYWpheChvcHRpb25zKVxuICB9XG5cbiAgJC5mbi5sb2FkID0gZnVuY3Rpb24odXJsLCBkYXRhLCBzdWNjZXNzKXtcbiAgICBpZiAoIXRoaXMubGVuZ3RoKSByZXR1cm4gdGhpc1xuICAgIHZhciBzZWxmID0gdGhpcywgcGFydHMgPSB1cmwuc3BsaXQoL1xccy8pLCBzZWxlY3RvcixcbiAgICAgICAgb3B0aW9ucyA9IHBhcnNlQXJndW1lbnRzKHVybCwgZGF0YSwgc3VjY2VzcyksXG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucy5zdWNjZXNzXG4gICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIG9wdGlvbnMudXJsID0gcGFydHNbMF0sIHNlbGVjdG9yID0gcGFydHNbMV1cbiAgICBvcHRpb25zLnN1Y2Nlc3MgPSBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICBzZWxmLmh0bWwoc2VsZWN0b3IgP1xuICAgICAgICAkKCc8ZGl2PicpLmh0bWwocmVzcG9uc2UucmVwbGFjZShyc2NyaXB0LCBcIlwiKSkuZmluZChzZWxlY3RvcilcbiAgICAgICAgOiByZXNwb25zZSlcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrLmFwcGx5KHNlbGYsIGFyZ3VtZW50cylcbiAgICB9XG4gICAgJC5hamF4KG9wdGlvbnMpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHZhciBlc2NhcGUgPSBlbmNvZGVVUklDb21wb25lbnRcblxuICBmdW5jdGlvbiBzZXJpYWxpemUocGFyYW1zLCBvYmosIHRyYWRpdGlvbmFsLCBzY29wZSl7XG4gICAgdmFyIHR5cGUsIGFycmF5ID0gJC5pc0FycmF5KG9iaiksIGhhc2ggPSAkLmlzUGxhaW5PYmplY3Qob2JqKVxuICAgICQuZWFjaChvYmosIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgIHR5cGUgPSAkLnR5cGUodmFsdWUpXG4gICAgICBpZiAoc2NvcGUpIGtleSA9IHRyYWRpdGlvbmFsID8gc2NvcGUgOlxuICAgICAgICBzY29wZSArICdbJyArIChoYXNoIHx8IHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnYXJyYXknID8ga2V5IDogJycpICsgJ10nXG4gICAgICAvLyBoYW5kbGUgZGF0YSBpbiBzZXJpYWxpemVBcnJheSgpIGZvcm1hdFxuICAgICAgaWYgKCFzY29wZSAmJiBhcnJheSkgcGFyYW1zLmFkZCh2YWx1ZS5uYW1lLCB2YWx1ZS52YWx1ZSlcbiAgICAgIC8vIHJlY3Vyc2UgaW50byBuZXN0ZWQgb2JqZWN0c1xuICAgICAgZWxzZSBpZiAodHlwZSA9PSBcImFycmF5XCIgfHwgKCF0cmFkaXRpb25hbCAmJiB0eXBlID09IFwib2JqZWN0XCIpKVxuICAgICAgICBzZXJpYWxpemUocGFyYW1zLCB2YWx1ZSwgdHJhZGl0aW9uYWwsIGtleSlcbiAgICAgIGVsc2UgcGFyYW1zLmFkZChrZXksIHZhbHVlKVxuICAgIH0pXG4gIH1cblxuICAkLnBhcmFtID0gZnVuY3Rpb24ob2JqLCB0cmFkaXRpb25hbCl7XG4gICAgdmFyIHBhcmFtcyA9IFtdXG4gICAgcGFyYW1zLmFkZCA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICgkLmlzRnVuY3Rpb24odmFsdWUpKSB2YWx1ZSA9IHZhbHVlKClcbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB2YWx1ZSA9IFwiXCJcbiAgICAgIHRoaXMucHVzaChlc2NhcGUoa2V5KSArICc9JyArIGVzY2FwZSh2YWx1ZSkpXG4gICAgfVxuICAgIHNlcmlhbGl6ZShwYXJhbXMsIG9iaiwgdHJhZGl0aW9uYWwpXG4gICAgcmV0dXJuIHBhcmFtcy5qb2luKCcmJykucmVwbGFjZSgvJTIwL2csICcrJylcbiAgfVxufSkoWmVwdG8pXG5cbjsoZnVuY3Rpb24oJCl7XG4gICQuZm4uc2VyaWFsaXplQXJyYXkgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbmFtZSwgdHlwZSwgcmVzdWx0ID0gW10sXG4gICAgICBhZGQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUuZm9yRWFjaCkgcmV0dXJuIHZhbHVlLmZvckVhY2goYWRkKVxuICAgICAgICByZXN1bHQucHVzaCh7IG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZSB9KVxuICAgICAgfVxuICAgIGlmICh0aGlzWzBdKSAkLmVhY2godGhpc1swXS5lbGVtZW50cywgZnVuY3Rpb24oXywgZmllbGQpe1xuICAgICAgdHlwZSA9IGZpZWxkLnR5cGUsIG5hbWUgPSBmaWVsZC5uYW1lXG4gICAgICBpZiAobmFtZSAmJiBmaWVsZC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9ICdmaWVsZHNldCcgJiZcbiAgICAgICAgIWZpZWxkLmRpc2FibGVkICYmIHR5cGUgIT0gJ3N1Ym1pdCcgJiYgdHlwZSAhPSAncmVzZXQnICYmIHR5cGUgIT0gJ2J1dHRvbicgJiYgdHlwZSAhPSAnZmlsZScgJiZcbiAgICAgICAgKCh0eXBlICE9ICdyYWRpbycgJiYgdHlwZSAhPSAnY2hlY2tib3gnKSB8fCBmaWVsZC5jaGVja2VkKSlcbiAgICAgICAgICBhZGQoJChmaWVsZCkudmFsKCkpXG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAkLmZuLnNlcmlhbGl6ZSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHJlc3VsdCA9IFtdXG4gICAgdGhpcy5zZXJpYWxpemVBcnJheSgpLmZvckVhY2goZnVuY3Rpb24oZWxtKXtcbiAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChlbG0ubmFtZSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZWxtLnZhbHVlKSlcbiAgICB9KVxuICAgIHJldHVybiByZXN1bHQuam9pbignJicpXG4gIH1cblxuICAkLmZuLnN1Ym1pdCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYgKDAgaW4gYXJndW1lbnRzKSB0aGlzLmJpbmQoJ3N1Ym1pdCcsIGNhbGxiYWNrKVxuICAgIGVsc2UgaWYgKHRoaXMubGVuZ3RoKSB7XG4gICAgICB2YXIgZXZlbnQgPSAkLkV2ZW50KCdzdWJtaXQnKVxuICAgICAgdGhpcy5lcSgwKS50cmlnZ2VyKGV2ZW50KVxuICAgICAgaWYgKCFldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgdGhpcy5nZXQoMCkuc3VibWl0KClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG59KShaZXB0bylcblxuOyhmdW5jdGlvbigkKXtcbiAgLy8gX19wcm90b19fIGRvZXNuJ3QgZXhpc3Qgb24gSUU8MTEsIHNvIHJlZGVmaW5lXG4gIC8vIHRoZSBaIGZ1bmN0aW9uIHRvIHVzZSBvYmplY3QgZXh0ZW5zaW9uIGluc3RlYWRcbiAgaWYgKCEoJ19fcHJvdG9fXycgaW4ge30pKSB7XG4gICAgJC5leHRlbmQoJC56ZXB0bywge1xuICAgICAgWjogZnVuY3Rpb24oZG9tLCBzZWxlY3Rvcil7XG4gICAgICAgIGRvbSA9IGRvbSB8fCBbXVxuICAgICAgICAkLmV4dGVuZChkb20sICQuZm4pXG4gICAgICAgIGRvbS5zZWxlY3RvciA9IHNlbGVjdG9yIHx8ICcnXG4gICAgICAgIGRvbS5fX1ogPSB0cnVlXG4gICAgICAgIHJldHVybiBkb21cbiAgICAgIH0sXG4gICAgICAvLyB0aGlzIGlzIGEga2x1ZGdlIGJ1dCB3b3Jrc1xuICAgICAgaXNaOiBmdW5jdGlvbihvYmplY3Qpe1xuICAgICAgICByZXR1cm4gJC50eXBlKG9iamVjdCkgPT09ICdhcnJheScgJiYgJ19fWicgaW4gb2JqZWN0XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIGdldENvbXB1dGVkU3R5bGUgc2hvdWxkbid0IGZyZWFrIG91dCB3aGVuIGNhbGxlZFxuICAvLyB3aXRob3V0IGEgdmFsaWQgZWxlbWVudCBhcyBhcmd1bWVudFxuICB0cnkge1xuICAgIGdldENvbXB1dGVkU3R5bGUodW5kZWZpbmVkKVxuICB9IGNhdGNoKGUpIHtcbiAgICB2YXIgbmF0aXZlR2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGU7XG4gICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUgPSBmdW5jdGlvbihlbGVtZW50KXtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBuYXRpdmVHZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpXG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pKFplcHRvKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4wLjFAd2VicGFjay16ZXB0by9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzLy4yLjAuMC1iZXRhLjRAZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2xvYWRlci5qcz97XFxcIm9taXRcXFwiOjEsXFxcInJlbW92ZVxcXCI6dHJ1ZX0hdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi02NGU3NzI0NyZzY29wZWQ9dHJ1ZSFweDJyZW0/cmVtVW5pdD02NSZyZW1QcmVjaXNpb249OCFzYXNzLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vaGVhZGVyLnZ1ZVwiKVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaGVhZGVyLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNjRlNzcyNDchdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaGVhZGVyLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxwYW53ZW5odWFcXFxcRG9jdW1lbnRzXFxcXEhCdWlsZGVyUHJvamVjdFxcXFx2dWUtQ2FsZW5kYXJMaXN0Vmlld1xcXFxzcmNcXFxcY29tcG9uZW50c1xcXFxoZWFkZXIudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi02NGU3NzI0N1wiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02NGU3NzI0N1wiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02NGU3NzI0N1wiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGhlYWRlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2hlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiAoX3ZtLmdldEhlYWRlcikgPyBfYygnaGVhZGVyJywge1xuICAgIGNsYXNzOiBfdm0ub3BhID09IGZhbHNlID8ge1xuICAgICAgd2hpdGU6IHRydWVcbiAgICB9IDoge1xuICAgICAgYmxhY2s6IHRydWVcbiAgICB9XG4gIH0sIFsoX3ZtLmJhY2tUeXBlKSA/IF9jKCdhJywge1xuICAgIGNsYXNzOiBfdm0uZ2V0QmFja0NsYXNzLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uYUJ0bigpXG4gICAgICB9XG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ0ZXh0Q29udGVudFwiOiBfdm0uX3MoX3ZtLnBhZ2VOYW1lKVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIChfdm0uY2xpY2tCdG4pID8gX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicmlnaHRCdXR0b25cIixcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJpbm5lckhUTUxcIjogX3ZtLl9zKF92bS5jbGlja0J0bilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5jbGlja0FjdGlvblxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0pIDogX3ZtLl9lKClcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNjRlNzcyNDdcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjEwLjAuMkB2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNjRlNzcyNDchLi9+Ly4xMC4wLjJAdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuMC4wLWJldGEuNEBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vbG9hZGVyLmpzP3tcIm9taXRcIjoxLFwicmVtb3ZlXCI6dHJ1ZX0hLi9+Ly4xLjAuMEB2dWUtc3R5bGUtbG9hZGVyIS4vfi8uMC4yNi4xQGNzcy1sb2FkZXIhLi9+Ly4xMC4wLjJAdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY0ZTc3MjQ3JnNjb3BlZD10cnVlIS4vfi8uMC4xLjdAcHgycmVtLWxvYWRlcj9yZW1Vbml0PTY1JnJlbVByZWNpc2lvbj04IS4vfi8uNC4xLjFAc2Fzcy1sb2FkZXIhLi9+Ly4xMC4wLjJAdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL2hlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIi8qXG4gKiBKYXZhU2NyaXB0IE1ENVxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1NRDVcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSwgU2ViYXN0aWFuIFRzY2hhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKlxuICogQmFzZWQgb25cbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXG4gKiBWZXJzaW9uIDIuMiBDb3B5cmlnaHQgKEMpIFBhdWwgSm9obnN0b24gMTk5OSAtIDIwMDlcbiAqIE90aGVyIGNvbnRyaWJ1dG9yczogR3JlZyBIb2x0LCBBbmRyZXcgS2VwZXJ0LCBZZG5hciwgTG9zdGluZXRcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgTGljZW5zZVxuICogU2VlIGh0dHA6Ly9wYWpob21lLm9yZy51ay9jcnlwdC9tZDUgZm9yIG1vcmUgaW5mby5cbiAqL1xuXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbjsoZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnXG5cbiAgLypcbiAgKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XG4gICogdG8gd29yayBhcm91bmQgYnVncyBpbiBzb21lIEpTIGludGVycHJldGVycy5cbiAgKi9cbiAgZnVuY3Rpb24gc2FmZUFkZCAoeCwgeSkge1xuICAgIHZhciBsc3cgPSAoeCAmIDB4RkZGRikgKyAoeSAmIDB4RkZGRilcbiAgICB2YXIgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNilcbiAgICByZXR1cm4gKG1zdyA8PCAxNikgfCAobHN3ICYgMHhGRkZGKVxuICB9XG5cbiAgLypcbiAgKiBCaXR3aXNlIHJvdGF0ZSBhIDMyLWJpdCBudW1iZXIgdG8gdGhlIGxlZnQuXG4gICovXG4gIGZ1bmN0aW9uIGJpdFJvdGF0ZUxlZnQgKG51bSwgY250KSB7XG4gICAgcmV0dXJuIChudW0gPDwgY250KSB8IChudW0gPj4+ICgzMiAtIGNudCkpXG4gIH1cblxuICAvKlxuICAqIFRoZXNlIGZ1bmN0aW9ucyBpbXBsZW1lbnQgdGhlIGZvdXIgYmFzaWMgb3BlcmF0aW9ucyB0aGUgYWxnb3JpdGhtIHVzZXMuXG4gICovXG4gIGZ1bmN0aW9uIG1kNWNtbiAocSwgYSwgYiwgeCwgcywgdCkge1xuICAgIHJldHVybiBzYWZlQWRkKGJpdFJvdGF0ZUxlZnQoc2FmZUFkZChzYWZlQWRkKGEsIHEpLCBzYWZlQWRkKHgsIHQpKSwgcyksIGIpXG4gIH1cbiAgZnVuY3Rpb24gbWQ1ZmYgKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICByZXR1cm4gbWQ1Y21uKChiICYgYykgfCAoKH5iKSAmIGQpLCBhLCBiLCB4LCBzLCB0KVxuICB9XG4gIGZ1bmN0aW9uIG1kNWdnIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgcmV0dXJuIG1kNWNtbigoYiAmIGQpIHwgKGMgJiAofmQpKSwgYSwgYiwgeCwgcywgdClcbiAgfVxuICBmdW5jdGlvbiBtZDVoaCAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICAgIHJldHVybiBtZDVjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KVxuICB9XG4gIGZ1bmN0aW9uIG1kNWlpIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgcmV0dXJuIG1kNWNtbihjIF4gKGIgfCAofmQpKSwgYSwgYiwgeCwgcywgdClcbiAgfVxuXG4gIC8qXG4gICogQ2FsY3VsYXRlIHRoZSBNRDUgb2YgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcywgYW5kIGEgYml0IGxlbmd0aC5cbiAgKi9cbiAgZnVuY3Rpb24gYmlubE1ENSAoeCwgbGVuKSB7XG4gICAgLyogYXBwZW5kIHBhZGRpbmcgKi9cbiAgICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8IChsZW4gJSAzMilcbiAgICB4WygoKGxlbiArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNF0gPSBsZW5cblxuICAgIHZhciBpXG4gICAgdmFyIG9sZGFcbiAgICB2YXIgb2xkYlxuICAgIHZhciBvbGRjXG4gICAgdmFyIG9sZGRcbiAgICB2YXIgYSA9IDE3MzI1ODQxOTNcbiAgICB2YXIgYiA9IC0yNzE3MzM4NzlcbiAgICB2YXIgYyA9IC0xNzMyNTg0MTk0XG4gICAgdmFyIGQgPSAyNzE3MzM4NzhcblxuICAgIGZvciAoaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSArPSAxNikge1xuICAgICAgb2xkYSA9IGFcbiAgICAgIG9sZGIgPSBiXG4gICAgICBvbGRjID0gY1xuICAgICAgb2xkZCA9IGRcblxuICAgICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaV0sIDcsIC02ODA4NzY5MzYpXG4gICAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMV0sIDEyLCAtMzg5NTY0NTg2KVxuICAgICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNywgNjA2MTA1ODE5KVxuICAgICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDNdLCAyMiwgLTEwNDQ1MjUzMzApXG4gICAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgNF0sIDcsIC0xNzY0MTg4OTcpXG4gICAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgNV0sIDEyLCAxMjAwMDgwNDI2KVxuICAgICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNywgLTE0NzMyMzEzNDEpXG4gICAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgN10sIDIyLCAtNDU3MDU5ODMpXG4gICAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgOF0sIDcsIDE3NzAwMzU0MTYpXG4gICAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgOV0sIDEyLCAtMTk1ODQxNDQxNylcbiAgICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE3LCAtNDIwNjMpXG4gICAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTFdLCAyMiwgLTE5OTA0MDQxNjIpXG4gICAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA3LCAxODA0NjAzNjgyKVxuICAgICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDEzXSwgMTIsIC00MDM0MTEwMSlcbiAgICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE3LCAtMTUwMjAwMjI5MClcbiAgICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxNV0sIDIyLCAxMjM2NTM1MzI5KVxuXG4gICAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMV0sIDUsIC0xNjU3OTY1MTApXG4gICAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgNl0sIDksIC0xMDY5NTAxNjMyKVxuICAgICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTQsIDY0MzcxNzcxMylcbiAgICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2ldLCAyMCwgLTM3Mzg5NzMwMilcbiAgICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNSwgLTcwMTU1ODY5MSlcbiAgICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxMF0sIDksIDM4MDE2MDgzKVxuICAgICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTQsIC02NjA0NzgzMzUpXG4gICAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgNF0sIDIwLCAtNDA1NTM3ODQ4KVxuICAgICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDldLCA1LCA1Njg0NDY0MzgpXG4gICAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTRdLCA5LCAtMTAxOTgwMzY5MClcbiAgICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTQsIC0xODczNjM5NjEpXG4gICAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgOF0sIDIwLCAxMTYzNTMxNTAxKVxuICAgICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNSwgLTE0NDQ2ODE0NjcpXG4gICAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMl0sIDksIC01MTQwMzc4NClcbiAgICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTQsIDE3MzUzMjg0NzMpXG4gICAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgMTJdLCAyMCwgLTE5MjY2MDc3MzQpXG5cbiAgICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNCwgLTM3ODU1OClcbiAgICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKVxuICAgICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTYsIDE4MzkwMzA1NjIpXG4gICAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTRdLCAyMywgLTM1MzA5NTU2KVxuICAgICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA0LCAtMTUzMDk5MjA2MClcbiAgICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA0XSwgMTEsIDEyNzI4OTMzNTMpXG4gICAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgN10sIDE2LCAtMTU1NDk3NjMyKVxuICAgICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKVxuICAgICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNCwgNjgxMjc5MTc0KVxuICAgICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaV0sIDExLCAtMzU4NTM3MjIyKVxuICAgICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNiwgLTcyMjUyMTk3OSlcbiAgICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyA2XSwgMjMsIDc2MDI5MTg5KVxuICAgICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDldLCA0LCAtNjQwMzY0NDg3KVxuICAgICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDEyXSwgMTEsIC00MjE4MTU4MzUpXG4gICAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNiwgNTMwNzQyNTIwKVxuICAgICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDJdLCAyMywgLTk5NTMzODY1MSlcblxuICAgICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaV0sIDYsIC0xOTg2MzA4NDQpXG4gICAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgN10sIDEwLCAxMTI2ODkxNDE1KVxuICAgICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTUsIC0xNDE2MzU0OTA1KVxuICAgICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDVdLCAyMSwgLTU3NDM0MDU1KVxuICAgICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNiwgMTcwMDQ4NTU3MSlcbiAgICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAzXSwgMTAsIC0xODk0OTg2NjA2KVxuICAgICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTUsIC0xMDUxNTIzKVxuICAgICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpXG4gICAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgOF0sIDYsIDE4NzMzMTMzNTkpXG4gICAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTVdLCAxMCwgLTMwNjExNzQ0KVxuICAgICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNSwgLTE1NjAxOTgzODApXG4gICAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMTNdLCAyMSwgMTMwOTE1MTY0OSlcbiAgICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNiwgLTE0NTUyMzA3MClcbiAgICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSlcbiAgICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTUsIDcxODc4NzI1OSlcbiAgICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA5XSwgMjEsIC0zNDM0ODU1NTEpXG5cbiAgICAgIGEgPSBzYWZlQWRkKGEsIG9sZGEpXG4gICAgICBiID0gc2FmZUFkZChiLCBvbGRiKVxuICAgICAgYyA9IHNhZmVBZGQoYywgb2xkYylcbiAgICAgIGQgPSBzYWZlQWRkKGQsIG9sZGQpXG4gICAgfVxuICAgIHJldHVybiBbYSwgYiwgYywgZF1cbiAgfVxuXG4gIC8qXG4gICogQ29udmVydCBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzIHRvIGEgc3RyaW5nXG4gICovXG4gIGZ1bmN0aW9uIGJpbmwycnN0ciAoaW5wdXQpIHtcbiAgICB2YXIgaVxuICAgIHZhciBvdXRwdXQgPSAnJ1xuICAgIHZhciBsZW5ndGgzMiA9IGlucHV0Lmxlbmd0aCAqIDMyXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDMyOyBpICs9IDgpIHtcbiAgICAgIG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChpbnB1dFtpID4+IDVdID4+PiAoaSAlIDMyKSkgJiAweEZGKVxuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cblxuICAvKlxuICAqIENvbnZlcnQgYSByYXcgc3RyaW5nIHRvIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHNcbiAgKiBDaGFyYWN0ZXJzID4yNTUgaGF2ZSB0aGVpciBoaWdoLWJ5dGUgc2lsZW50bHkgaWdub3JlZC5cbiAgKi9cbiAgZnVuY3Rpb24gcnN0cjJiaW5sIChpbnB1dCkge1xuICAgIHZhciBpXG4gICAgdmFyIG91dHB1dCA9IFtdXG4gICAgb3V0cHV0WyhpbnB1dC5sZW5ndGggPj4gMikgLSAxXSA9IHVuZGVmaW5lZFxuICAgIGZvciAoaSA9IDA7IGkgPCBvdXRwdXQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIG91dHB1dFtpXSA9IDBcbiAgICB9XG4gICAgdmFyIGxlbmd0aDggPSBpbnB1dC5sZW5ndGggKiA4XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDg7IGkgKz0gOCkge1xuICAgICAgb3V0cHV0W2kgPj4gNV0gfD0gKGlucHV0LmNoYXJDb2RlQXQoaSAvIDgpICYgMHhGRikgPDwgKGkgJSAzMilcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dFxuICB9XG5cbiAgLypcbiAgKiBDYWxjdWxhdGUgdGhlIE1ENSBvZiBhIHJhdyBzdHJpbmdcbiAgKi9cbiAgZnVuY3Rpb24gcnN0ck1ENSAocykge1xuICAgIHJldHVybiBiaW5sMnJzdHIoYmlubE1ENShyc3RyMmJpbmwocyksIHMubGVuZ3RoICogOCkpXG4gIH1cblxuICAvKlxuICAqIENhbGN1bGF0ZSB0aGUgSE1BQy1NRDUsIG9mIGEga2V5IGFuZCBzb21lIGRhdGEgKHJhdyBzdHJpbmdzKVxuICAqL1xuICBmdW5jdGlvbiByc3RySE1BQ01ENSAoa2V5LCBkYXRhKSB7XG4gICAgdmFyIGlcbiAgICB2YXIgYmtleSA9IHJzdHIyYmlubChrZXkpXG4gICAgdmFyIGlwYWQgPSBbXVxuICAgIHZhciBvcGFkID0gW11cbiAgICB2YXIgaGFzaFxuICAgIGlwYWRbMTVdID0gb3BhZFsxNV0gPSB1bmRlZmluZWRcbiAgICBpZiAoYmtleS5sZW5ndGggPiAxNikge1xuICAgICAgYmtleSA9IGJpbmxNRDUoYmtleSwga2V5Lmxlbmd0aCAqIDgpXG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCAxNjsgaSArPSAxKSB7XG4gICAgICBpcGFkW2ldID0gYmtleVtpXSBeIDB4MzYzNjM2MzZcbiAgICAgIG9wYWRbaV0gPSBia2V5W2ldIF4gMHg1QzVDNUM1Q1xuICAgIH1cbiAgICBoYXNoID0gYmlubE1ENShpcGFkLmNvbmNhdChyc3RyMmJpbmwoZGF0YSkpLCA1MTIgKyBkYXRhLmxlbmd0aCAqIDgpXG4gICAgcmV0dXJuIGJpbmwycnN0cihiaW5sTUQ1KG9wYWQuY29uY2F0KGhhc2gpLCA1MTIgKyAxMjgpKVxuICB9XG5cbiAgLypcbiAgKiBDb252ZXJ0IGEgcmF3IHN0cmluZyB0byBhIGhleCBzdHJpbmdcbiAgKi9cbiAgZnVuY3Rpb24gcnN0cjJoZXggKGlucHV0KSB7XG4gICAgdmFyIGhleFRhYiA9ICcwMTIzNDU2Nzg5YWJjZGVmJ1xuICAgIHZhciBvdXRwdXQgPSAnJ1xuICAgIHZhciB4XG4gICAgdmFyIGlcbiAgICBmb3IgKGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHggPSBpbnB1dC5jaGFyQ29kZUF0KGkpXG4gICAgICBvdXRwdXQgKz0gaGV4VGFiLmNoYXJBdCgoeCA+Pj4gNCkgJiAweDBGKSArXG4gICAgICBoZXhUYWIuY2hhckF0KHggJiAweDBGKVxuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cblxuICAvKlxuICAqIEVuY29kZSBhIHN0cmluZyBhcyB1dGYtOFxuICAqL1xuICBmdW5jdGlvbiBzdHIycnN0clVURjggKGlucHV0KSB7XG4gICAgcmV0dXJuIHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChpbnB1dCkpXG4gIH1cblxuICAvKlxuICAqIFRha2Ugc3RyaW5nIGFyZ3VtZW50cyBhbmQgcmV0dXJuIGVpdGhlciByYXcgb3IgaGV4IGVuY29kZWQgc3RyaW5nc1xuICAqL1xuICBmdW5jdGlvbiByYXdNRDUgKHMpIHtcbiAgICByZXR1cm4gcnN0ck1ENShzdHIycnN0clVURjgocykpXG4gIH1cbiAgZnVuY3Rpb24gaGV4TUQ1IChzKSB7XG4gICAgcmV0dXJuIHJzdHIyaGV4KHJhd01ENShzKSlcbiAgfVxuICBmdW5jdGlvbiByYXdITUFDTUQ1IChrLCBkKSB7XG4gICAgcmV0dXJuIHJzdHJITUFDTUQ1KHN0cjJyc3RyVVRGOChrKSwgc3RyMnJzdHJVVEY4KGQpKVxuICB9XG4gIGZ1bmN0aW9uIGhleEhNQUNNRDUgKGssIGQpIHtcbiAgICByZXR1cm4gcnN0cjJoZXgocmF3SE1BQ01ENShrLCBkKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG1kNSAoc3RyaW5nLCBrZXksIHJhdykge1xuICAgIGlmICgha2V5KSB7XG4gICAgICBpZiAoIXJhdykge1xuICAgICAgICByZXR1cm4gaGV4TUQ1KHN0cmluZylcbiAgICAgIH1cbiAgICAgIHJldHVybiByYXdNRDUoc3RyaW5nKVxuICAgIH1cbiAgICBpZiAoIXJhdykge1xuICAgICAgcmV0dXJuIGhleEhNQUNNRDUoa2V5LCBzdHJpbmcpXG4gICAgfVxuICAgIHJldHVybiByYXdITUFDTUQ1KGtleSwgc3RyaW5nKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbWQ1XG4gICAgfSlcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gbWQ1XG4gIH0gZWxzZSB7XG4gICAgJC5tZDUgPSBtZDVcbiAgfVxufSh0aGlzKSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi42LjBAYmx1ZWltcC1tZDUvanMvbWQ1LmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCI8dGVtcGxhdGU+XG5cdDxoZWFkZXIgdi1pZj1cImdldEhlYWRlclwiIDpjbGFzcz1cIm9wYT09ZmFsc2U/e3doaXRlOiB0cnVlfTp7YmxhY2s6IHRydWV9XCI+XG5cdFx0PGEgOmNsYXNzPVwiZ2V0QmFja0NsYXNzXCIgdi1pZj1cImJhY2tUeXBlXCIgQGNsaWNrPVwiYUJ0bigpXCI+XG5cdFx0PC9hPlxuXHRcdDxzcGFuIHYtdGV4dD1cInBhZ2VOYW1lXCI+PC9zcGFuPlxuXHRcdDxhIHYtaWY9XCJjbGlja0J0blwiIEBjbGljaz1cImNsaWNrQWN0aW9uXCIgdi1odG1sPVwiY2xpY2tCdG5cIiBjbGFzcz1cInJpZ2h0QnV0dG9uXCI+XG5cdFx0PC9hPlxuXHQ8L2hlYWRlcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBFbnYgZnJvbSAnLi4vLi4vY29uZmlnL2Vudi5qcyc7XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRwcm9wczogWydwYWdlTmFtZScsICdiYWNrQWN0aW9uJywgXCJiYWNrVHlwZVwiLCBcImdvYmFja1wiLCBcImNsaWNrQnRuXCIsIFwiY2xpY2tBY3Rpb25cIiwgXCJvcGFcIl0sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdGdldEJhY2tDbGFzczogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCBiYWNrID0ge1xuXHRcdFx0XHRcdGJhY2s6IHRydWUsXG5cdFx0XHRcdFx0YmFja1doaXRlOiBmYWxzZVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZih0aGlzLm9wYSA9PSBmYWxzZSkge1xuXHRcdFx0XHRcdGJhY2tbJ2JhY2snXSA9IGZhbHNlO1xuXHRcdFx0XHRcdGJhY2tbJ2JhY2tXaGl0ZSddID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gYmFjaztcblx0XHRcdH0sXG5cdFx0XHRnZXRIZWFkZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihsb2NhbFN0b3JhZ2UuYW5kcm9pZCA9PSBcInRydWVcIikge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fSBlbHNlIGlmKGxvY2FsU3RvcmFnZS5pb3MgPT0gXCJ0cnVlXCIpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0YUJ0bjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKHRoaXMuYmFja0FjdGlvbiAhPSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHR0aGlzLmJhY2tBY3Rpb24oKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsZXQgX2JhY2sgPSB0aGlzLiRyb3V0ZS5xdWVyeS5iYWNrVXJsXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coX2JhY2spXG5cdFx0XHRcdFx0aWYoX2JhY2spIHtcblx0XHRcdFx0XHRcdHRoaXMuJHJvdXRlLnJvdXRlci5nbyh7XG5cdFx0XHRcdFx0XHRcdHBhdGg6IF9iYWNrLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGhpc3RvcnkuZ28oLTEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0fVxuPC9zY3JpcHQ+XG48c3R5bGUgbGFuZz1cInNhc3NcIiBzY29wZWQ+XG5cdC8qQGltcG9ydCB1cmwoXCIuLi9hc3NldHMvaWNvbmZvbnRzL2ljb25mb250LmNzc1wiKTsqL1xuXHQvKmhlYWRlciovXG5cdFxuXHQucmlnaHRCdXR0b24ge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRyaWdodDogMjBweDtcblx0XHR0b3A6IDBweDtcblx0XHRmb250LXNpemU6IDI2cHg7XG5cdFx0LypweCovXG5cdFx0Y29sb3I6ICM2NjY2NjY7XG5cdFx0bGV0dGVyLXNwYWNpbmc6IDBweDtcblx0fVxuXHRcblx0LmJsYWNrIHtcblx0XHRiYWNrZ3JvdW5kOiAjRjlGOEY4O1xuXHRcdGJveC1zaGFkb3c6IDBweCAxcHggMHB4IDBweCAjOTU5NTk1O1xuXHR9XG5cdFxuXHQud2hpdGUge1xuXHRcdGNvbG9yOiAjRkZGRkZGO1xuXHR9XG5cdFxuXHRoZWFkZXIge1xuXHRcdGZvbnQtc2l6ZTogMzZweDtcblx0XHQvKnB4Ki9cblx0XHRoZWlnaHQ6IDg4cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDg4cHg7XG5cdFx0YTpudGgtb2YtdHlwZSgxKSB7XG5cdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdGhlaWdodDogMzRweDtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGxlZnQ6IDIwcHg7XG5cdFx0XHR0b3A6IDI3cHg7XG5cdFx0XHQmLmJhY2sge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9jb21wb25lbnRzL2JsYWNrX2JhY2tAMngucG5nKSBuby1yZXBlYXQ7XG5cdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuXHRcdFx0fVxuXHRcdFx0Ji5iYWNrV2hpdGUge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9jb21wb25lbnRzL2JsYWNrX3doaXRlQDJ4LnBuZykgbm8tcmVwZWF0O1xuXHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcblx0XHRcdH1cblx0XHR9XG5cdFx0c3BhbiB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdH1cblx0fVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gaGVhZGVyLnZ1ZT84MTNhNDU3NCIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgRW52IGZyb20gJy4uLy4uL2NvbmZpZy9lbnYuanMnO1xudmFyIG1kNSA9IHJlcXVpcmUoXCJibHVlaW1wLW1kNVwiKTtcbmxldCBnZXRDaGVjayA9IHtcblx0XHRjaGVja0VtYWlsOiBmdW5jdGlvbih2YWwpIHtcblx0XHRcdHZhciBmaWx0ZXIgPSAvXihbYS16QS1aMC05X1xcLlxcLV0pK1xcQCgoW2EtekEtWjAtOVxcLV0pK1xcLikrKFthLXpBLVowLTldezIsNH0pKyQvO1xuXHRcdFx0aWYoZmlsdGVyLnRlc3QodmFsKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNoZWNrUGhvbmU6IGZ1bmN0aW9uKHZhbCkge1xuXHRcdFx0dmFyIGZpbHRlciA9IC9eWzFdWzM0NTc4XVswLTldezl9JC87XG5cblx0XHRcdGlmKGZpbHRlci50ZXN0KHZhbCkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjaGVja1Bhc3N3b3JkOiBmdW5jdGlvbih2YWwpIHtcblx0XHRcdHZhciBmaWx0ZXIgPSAvXlswLTlBLVphLXpdezYsMjB9JC87XG5cblx0XHRcdGlmKGZpbHRlci50ZXN0KHZhbCkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjaGVja0lPUzogZnVuY3Rpb24oKSB7XG5cdFx0XHQvL+WIpOaWreaYr+WQpklPU+aIluiAheWuieWNk1xuXHRcdFx0dmFyIHUgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXHRcdFx0Ly92YXIgaXNBbmRyb2lkID0gdS5pbmRleE9mKCdBbmRyb2lkJykgPiAtMSB8fCB1LmluZGV4T2YoJ0FkcicpID4gLTE7IC8vYW5kcm9pZOe7iOerryBcblx0XHRcdHZhciBpc2lPUyA9ICEhdS5tYXRjaCgvXFwoaVteO10rOyggVTspPyBDUFUuK01hYyBPUyBYLyk7IC8vaW9z57uI56uvIFxuXHRcdFx0aWYoaXNpT1MpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjaGVja1dlY2hhdDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0cmV0dXJuIHVhLm1hdGNoKC9NaWNyb01lc3Nlbmdlci9pKSA9PSAnbWljcm9tZXNzZW5nZXInO1xuXHRcdH0sXG5cdFx0Y2hlY2tMb2dpbjogZnVuY3Rpb24oKSB7XG5cdFx0XHQvL+WIpOaWreaYr+WQpmxvZ2luXG5cdFx0XHR2YXIgc3RyU3RvcmVEYXRlID0gd2luZG93LmxvY2FsU3RvcmFnZSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibWVtYmVySWRcIikgOiBDb29raWUucmVhZChcIm1lbWJlcklkXCIpO1xuXHRcdFx0aWYoc3RyU3RvcmVEYXRlKSB7XG5cdFx0XHRcdGlmKHN0clN0b3JlRGF0ZS5zcGxpdChcIixcIikubGVuZ3RoICE9IDEpIHtcblx0XHRcdFx0XHR2YXIgbG9jYWxfaXAgPSBzdHJTdG9yZURhdGUgPyBzdHJTdG9yZURhdGUuc3BsaXQoXCIsXCIpWzBdIDogXCJcIjtcblx0XHRcdFx0XHR2YXIgbG9jYWxfbWkgPSBzdHJTdG9yZURhdGUgPyBzdHJTdG9yZURhdGUuc3BsaXQoXCIsXCIpWzFdIDogXCJcIjtcblx0XHRcdFx0XHRyZXR1cm4gbG9jYWxfaXAgPT0gbXlBamF4KCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0fVxuXG5cdFx0fSxcblx0fVxuXHQvKipcblx0ICogICDojrflj5blhajnkIPllK/kuIDmoIfor4bnrKZcblx0ICogMjAxNi0xMS0wNCAxNTo1MTozOVxuXHQgKi9cbmNvbnN0IGdldFJhbmRvbSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBndWlkID0gXCJ7XCI7XG5cdFx0Zm9yKHZhciBpID0gMTsgaSA8PSAzMjsgaSsrKSB7XG5cdFx0XHR2YXIgbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2LjApLnRvU3RyaW5nKDE2KTtcblx0XHRcdGd1aWQgKz0gbjtcblx0XHRcdGlmKChpID09IDgpIHx8IChpID09IDEyKSB8fCAoaSA9PSAxNikgfHwgKGkgPT0gMjApKVxuXHRcdFx0XHRndWlkICs9IFwiLVwiO1xuXHRcdH1cblx0XHRndWlkICs9IFwifVwiO1xuXHRcdHJldHVybiBndWlkO1xuXHR9XG5cdC8qKlxuXHQgKiAgIOWvuURhdGXnmoTmianlsZXvvIzlsIYgRGF0ZSDovazljJbkuLrmjIflrprmoLzlvI/nmoRTdHJpbmcgXG5cdCAqICAg5pyIKE0p44CB5pelKGQp44CB5bCP5pe2KGgp44CB5YiGKG0p44CB56eSKHMp44CB5a2j5bqmKHEpIOWPr+S7peeUqCAxLTIg5Liq5Y2g5L2N56ym77yMIFxuXHQgKiAgIOW5tCh5KeWPr+S7peeUqCAxLTQg5Liq5Y2g5L2N56ym77yM5q+r56eSKFMp5Y+q6IO955SoIDEg5Liq5Y2g5L2N56ymKOaYryAxLTMg5L2N55qE5pWw5a2XKVxuXHQgKiAgIOS+i+WtkO+8mlxuXHQgKiAgIChuZXcgRGF0ZSgpKS5Gb3JtYXQoXCJ5eXl5LU1NLWRkIGhoOm1tOnNzLlNcIikgPT0+IDIwMDYtMDctMDIgMDg6MDk6MDQuNDIzXG5cdCAqICAgKG5ldyBEYXRlKCkpLkZvcm1hdChcInl5eXktTS1kIGg6bTpzLlNcIikgICAgICA9PT4gMjAwNi03LTIgODo5OjQuMTggXG5cdCAqL1xuY29uc3QgZm10RGF0ZSA9IGZ1bmN0aW9uKGRhdGUsIGZtdCkgeyAvL2F1dGhvcjogbWVpenogXG5cdHZhciBvID0ge1xuXHRcdFwiTStcIjogZGF0ZS5nZXRNb250aCgpICsgMSwgLy/mnIjku70gXG5cdFx0XCJkK1wiOiBkYXRlLmdldERhdGUoKSwgLy/ml6UgXG5cdFx0XCJoK1wiOiBkYXRlLmdldEhvdXJzKCksIC8v5bCP5pe2IFxuXHRcdFwibStcIjogZGF0ZS5nZXRNaW51dGVzKCksIC8v5YiGIFxuXHRcdFwicytcIjogZGF0ZS5nZXRTZWNvbmRzKCksIC8v56eSIFxuXHRcdFwicStcIjogTWF0aC5mbG9vcigoZGF0ZS5nZXRNb250aCgpICsgMykgLyAzKSwgLy/lraPluqYgXG5cdFx0XCJTXCI6IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLy/mr6vnp5IgXG5cdH07XG5cdGlmKC8oeSspLy50ZXN0KGZtdCkpXG5cdFx0Zm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAoZGF0ZS5nZXRGdWxsWWVhcigpICsgXCJcIikuc3Vic3RyKDQgLSBSZWdFeHAuJDEubGVuZ3RoKSk7XG5cdGZvcih2YXIgayBpbiBvKVxuXHRcdGlmKG5ldyBSZWdFeHAoXCIoXCIgKyBrICsgXCIpXCIpLnRlc3QoZm10KSlcblx0XHRcdGZtdCA9IGZtdC5yZXBsYWNlKFJlZ0V4cC4kMSwgKFJlZ0V4cC4kMS5sZW5ndGggPT0gMSkgPyAob1trXSkgOiAoKFwiMDBcIiArIG9ba10pLnN1YnN0cigoXCJcIiArIG9ba10pLmxlbmd0aCkpKTtcblx0cmV0dXJuIGZtdDtcbn1cblxuLyoqXG4gKiDnlLHkuo5tb21lbnTlupPliqDov5vmnaXlpKrlpKfkuobvvIzoh6rlrprkuYnkuoZmb3Jtbm935Ye95pWw77yM5b6F5a6M5ZaE6Zi25q61XG4gKi9cbmNvbnN0IE1pbGxpc2Vjb25kVG9EYXRlID0gZnVuY3Rpb24obXNkKSB7XG5cdHZhciB0aW1lID0gcGFyc2VGbG9hdChtc2QpIC8gMTAwMDtcblx0dmFyIHN0ciA9IFwiXCI7XG5cdGlmKG51bGwgIT0gdGltZSAmJiBcIlwiICE9IHRpbWUpIHtcblxuXHRcdGlmKHRpbWUgPiA2MCAmJiB0aW1lIDwgMzYwMCkge1xuXHRcdFx0c3RyID0gcGFyc2VJbnQodGltZSAvIDYwLjApICsgXCIg5YiG6ZKf5YmNXCI7XG5cdFx0fSBlbHNlIGlmKHRpbWUgPj0gMzYwMCAmJiB0aW1lIDwgODY0MDApIHtcblx0XHRcdHN0ciA9IHBhcnNlSW50KHRpbWUgLyAzNjAwLjApICsgXCIg5bCP5pe25YmNXCI7XG5cdFx0fSBlbHNlIGlmKHRpbWUgPj0gODY0MDAgJiYgdGltZSA8IDg2NDAwICogMzApIHtcblx0XHRcdHN0ciA9IHBhcnNlSW50KHRpbWUgLyA4NjQwMC4wKSArIFwiIOWkqeWJjVwiO1xuXHRcdH0gZWxzZSBpZih0aW1lID49IDg2NDAwICogMzAgJiYgdGltZSA8IDg2NDAwICogMzY1KSB7XG5cdFx0XHRzdHIgPSBwYXJzZUludCh0aW1lIC8gKDg2NDAwLjAgKiAzMCkpICsgXCIg5Liq5pyI5YmNXCI7XG5cdFx0fSBlbHNlIGlmKHRpbWUgPj0gODY0MDAgKiAzNjUpIHtcblx0XHRcdHN0ciA9IHBhcnNlSW50KHRpbWUgLyAoODY0MDAuMCAqIDM2NSkpICsgXCIg5bm05YmNXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0ciA9IHBhcnNlSW50KHRpbWUpICsgXCIg56eS5YmNXCI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBzdHI7XG59XG5jb25zdCBzZW5kQ29kZSA9IGZ1bmN0aW9uKG8pIHtcblx0dmFyIGJ0bmNmZyA9IHtcblx0XHRkZndhaXQ6IDIwLCAvL+WAkuiuoeaXtuaXtumXtCAgIDLkuKrpg73opoHmlLlcblx0XHR3YWl0OiAyMCAvL+WAkuiuoeaXtuaXtumXtFxuXHR9XG5cdHZhciBfdGhpcyA9IHtcblx0XHRiZWdpbjogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZihidG5jZmcud2FpdCA9PSAtMSkge1xuXHRcdFx0XHQkKG8pLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtcblx0XHRcdFx0JChvKS5yZW1vdmVDbGFzcyhcImJ0bi1ncmF5XCIpO1xuXHRcdFx0XHQkKG8pLnRleHQoXCLojrflj5bpqozor4HnoIFcIik7XG5cdFx0XHRcdGJ0bmNmZy53YWl0ID0gYnRuY2ZnLmRmd2FpdDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQobykuYWRkQ2xhc3MoXCJidG4tZ3JheVwiKTtcblx0XHRcdFx0JChvKS5hdHRyKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcblx0XHRcdFx0JChvKS50ZXh0KFwi6YeN5Y+RKFwiICsgYnRuY2ZnLndhaXQgKyBcIilcIik7XG5cdFx0XHRcdGJ0bmNmZy53YWl0LS07XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0X3RoaXMuYmVnaW4oKTtcblx0XHRcdFx0fSwgMTAwMCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBfdGhpcy5iZWdpbigpXG59XG5cbi8qXG4gKuS9nOiAhTpwYW53ZW5odWEgXG4gKuaXtumXtDoyMDE2LTExLTAxIDE3OjExOjIwXG4gKiBcbiAqICovXG5jb25zdCBteU1vZGFsID0gZnVuY3Rpb24oKSB7XG5cdFx0bGV0IGRlZmF1bHRzID0ge1xuXHRcdFx0bW9kYWxfaWQ6IG51bGwsXG5cdFx0XHRvdmVybGF5OiAwLjUsXG5cdFx0XHRjbG9zZUJ1dHRvbjogbnVsbCxcblx0XHRcdHR5cGU6IDEsIC8vMeS4uuS4remXtOW8ueWHuiAy5Li65LiL5b6A5LiK5by55Ye6IDPku47lj7PliLDlt6Zcblx0XHRcdGNsb3NlZnVudGlvbjogZnVuY3Rpb24oKSB7fVxuXHRcdH07XG5cdFx0bGV0IHRpcGNvbmZpZyA9IHsgLy/nlJ/miJDnmoTlvLnnqpdcblx0XHRcdG1vZGFsX3RpcDogJ+a4qemmqOaPkOekuicsIC8v5rip6aao5o+Q56S6XG5cdFx0XHRtb2RhbF9jbnQ6IG51bGwsIC8v5pi156ew5bey57uP5a2Y5ZyoXG5cdFx0XHR0cnVlX2J1dHRvbjogbnVsbCwgLy/noa7lrppcblx0XHRcdGNhbmNlbF9idXR0b246IG51bGwsIC8v5Y+W5raIXG5cdFx0XHR0cnVlX2Z1bmN0aW9uOiBmdW5jdGlvbigpIHt9LFxuXHRcdFx0Y2FuY2VsX2Z1bmN0aW9uOiBmdW5jdGlvbigpIHt9XG5cdFx0fTtcblx0XHRsZXQgRiA9IHtcblx0XHRcdG92ZXJsYXk6IGZ1bmN0aW9uKCkgeyAvL+a3u+WKoOWNiumAj+aYjm92ZXJsYXlcblx0XHRcdFx0bGV0IG92ZXJsYXkgPSAkKFwiPGRpdiBpZD0nb3ZlcmxheV9wYW4nPjwvZGl2PlwiKTtcblx0XHRcdFx0aWYoJChcIiNvdmVybGF5X3BhblwiKS5sZW5ndGggPT0gMCkge1xuXHRcdFx0XHRcdCQoXCJib2R5XCIpLmFwcGVuZChvdmVybGF5KTtcblx0XHRcdFx0XHQkKFwiI292ZXJsYXlfcGFuXCIpLmNzcyh7XG5cdFx0XHRcdFx0XHRcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcblx0XHRcdFx0XHRcdFwidG9wXCI6IFwiMHB4XCIsXG5cdFx0XHRcdFx0XHRcImxlZnRcIjogXCIwcHhcIixcblx0XHRcdFx0XHRcdFwiaGVpZ2h0XCI6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdFx0XCJ3aWR0aFwiOiBcIjEwMCVcIixcblx0XHRcdFx0XHRcdFwiYmFja2dyb3VuZFwiOiBcIiMwMDBcIixcblx0XHRcdFx0XHRcdFwiei1pbmRleFwiOiBcIjk5OVwiLFxuXHRcdFx0XHRcdFx0XCJkaXNwbGF5XCI6IFwibm9uZVwiXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGZsYXNoTW9kOiBmdW5jdGlvbihzdHIpIHtcblx0XHRcdFx0dmFyIGZzaG1vZCA9ICQoXCI8ZGl2IHN0eWxlPScnIGNsYXNzPSdub19zZWFyY2ggeWMgZmxhc2gnIGlkPSdmc2htb2QnPlwiICsgc3RyICsgXCI8L2Rpdj5cIik7XG5cdFx0XHRcdGlmKCQoXCIjZnNobW9kXCIpLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdFx0JChcImJvZHlcIikuYXBwZW5kKGZzaG1vZCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JChcIiNmc2htb2RcIikudGV4dChzdHIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0dGlwTW9kOiBmdW5jdGlvbihzdHIpIHsgLy/moLnmja5zdHLlj4LmlbDmi7zmjqXlvLnnqpcgXG5cdFx0XHRcdGlmKHN0ci5jYW5jZWxfYnV0dG9uID09IG51bGwpIHsgLy/lpoLmnpzmsqHmnIkg5Y+W5raI5oyJ6ZKuICAg5bCx5LiN5ou85o6lIOWPlua2iOaMiemSrueahGh0bWxcblx0XHRcdFx0XHR2YXIgdGlwbW9kID0gJCgnPGRpdiBjbGFzcz1cIndkLW1vZGFsXCIgaWQ9XCJ0aXBfbW9kXCI+PGRpdiBjbGFzcz1cIndkLW1vZGFsLWhlYWRlclwiPjxkaXYgY2xhc3M9XCJ3ZC1tb2RhbC10aVwiPicgKyBzdHIubW9kYWxfdGlwICsgJzwvZGl2PjxkaXYgY2xhc3M9XCJ3ZC1tb2RhbC1jb250ZW50XCI+PHNwYW4gaWQ9XCJ3ZC1tb2RhbC1yZXN1bHRcIj4nICsgc3RyLm1vZGFsX2NudCArICc8L3NwYW4+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cIndkLW1vZGFsLWZvb3RlclwiPjxhIGNsYXNzPVwid2QtbW9kYWwtYnV0dG9uIGRvdWJpX2J0blwiIGlkPVwidHJ1ZS1idXR0b25cIj4nICsgc3RyLnRydWVfYnV0dG9uICsgJzwvYT48L2Rpdj48L2Rpdj4nKTtcblx0XHRcdFx0fSBlbHNlIHsgLy/lkKbliJnmi7zmjqXlh7rmnaVcblx0XHRcdFx0XHR2YXIgdGlwbW9kID0gJCgnPGRpdiBjbGFzcz1cIndkLW1vZGFsXCIgaWQ9XCJ0aXBfbW9kXCI+PGRpdiBjbGFzcz1cIndkLW1vZGFsLWhlYWRlclwiPjxkaXYgY2xhc3M9XCJ3ZC1tb2RhbC10aVwiPicgKyBzdHIubW9kYWxfdGlwICsgJzwvZGl2PjxkaXYgY2xhc3M9XCJ3ZC1tb2RhbC1jb250ZW50XCI+PHNwYW4gaWQ9XCJ3ZC1tb2RhbC1yZXN1bHRcIj4nICsgc3RyLm1vZGFsX2NudCArICc8L3NwYW4+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cIndkLW1vZGFsLWZvb3RlclwiPjxhIGlkPVwiY2FuY2VsLWJ1dHRvblwiIGNsYXNzPVwid2QtbW9kYWwtYnV0dG9uIG1vZGFsX2Nsb3NlXCI+JyArIHN0ci5jYW5jZWxfYnV0dG9uICsgJzwvYT48YSBjbGFzcz1cIndkLW1vZGFsLWJ1dHRvblwiIGlkPVwidHJ1ZS1idXR0b25cIj4nICsgc3RyLnRydWVfYnV0dG9uICsgJzwvYT48L2Rpdj48L2Rpdj4nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZigkKFwiI3RpcF9tb2RcIikubGVuZ3RoID09IDApIHsgLy/ku6XkuIvku6PnoIHpmLLmraLlpJrlvLnnqpfph43lj6DjgIJcblx0XHRcdFx0XHQkKFwiYm9keVwiKS5hcHBlbmQodGlwbW9kKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkKFwiI3RpcF9tb2RcIikucmVtb3ZlKCk7XG5cdFx0XHRcdFx0JChcImJvZHlcIikuYXBwZW5kKHRpcG1vZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fVxuXHRcdGxldCBNb2RhbCA9IHtcblx0XHRcdHNob3dNb2RhbDogZnVuY3Rpb24ob3B0aW9ucykge1xuXHRcdFx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdFx0XHRGLm92ZXJsYXkoKTtcblx0XHRcdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblx0XHRcdFx0bGV0IG8gPSBvcHRpb25zO1xuXHRcdFx0XHQkKHRoaXMpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRsZXQgbW9kYWxfaWQgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpO1xuXHRcdFx0XHRcdCQoXCIjb3ZlcmxheV9wYW5cIikuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRfdGhpcy5jbG9zZU1vZGFsKG1vZGFsX2lkKVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQoby5jbG9zZUJ1dHRvbikuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRfdGhpcy5jbG9zZU1vZGFsKG1vZGFsX2lkKTtcblx0XHRcdFx0XHRcdG8uY2xvc2VmdW50aW9uKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JChcIiNvdmVybGF5X3BhblwiKS5jc3Moe1xuXHRcdFx0XHRcdFx0XCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcblx0XHRcdFx0XHRcdFwib3BhY2l0eVwiOiBvLm92ZXJsYXlcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkKG1vZGFsX2lkKS5jc3Moe1xuXHRcdFx0XHRcdFx0XCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG5cdFx0XHRcdFx0XHRcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuXHRcdFx0XHRcdFx0XCJ6LWluZGV4XCI6IDExMDAwLFxuXHRcdFx0XHRcdFx0XCJib3R0b21cIjogby5ib3R0b20gKyBcInB4XCIsXG5cdFx0XHRcdFx0XHRcInRvcFwiOiBvLnRvcCArIFwicHhcIlxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQobW9kYWxfaWQpLmFkZENsYXNzKFwiYW5pbWF0ZWQgem9vbUluXCIpO1xuXHRcdFx0XHRcdC8v5Y+W5raI6buY6K6k5Yqo5L2cXG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0b3Blbk1vZGFsOiBmdW5jdGlvbihvcHRpb25zKSB7XG5cdFx0XHRcdGxldCBfdGhpcyA9IHRoaXM7XG5cdFx0XHRcdG9wdGlvbnMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cdFx0XHRcdGxldCBvID0gb3B0aW9ucztcblx0XHRcdFx0aWYoby50eXBlID09IDEpIHtcblx0XHRcdFx0XHRGLm92ZXJsYXkoKTtcblx0XHRcdFx0XHRsZXQgbW9kYWxfaWQgPSBvLm1vZGFsX2lkO1xuXHRcdFx0XHRcdCQoXCIjb3ZlcmxheV9wYW5cIikuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRfdGhpcy5jbG9zZU1vZGFsKG1vZGFsX2lkKVxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQoby5jbG9zZUJ1dHRvbikuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRfdGhpcy5jbG9zZU1vZGFsKG1vZGFsX2lkKVxuXHRcdFx0XHRcdFx0by5jbG9zZWZ1bnRpb24oKTtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkKFwiI292ZXJsYXlfcGFuXCIpLmNzcyh7XG5cdFx0XHRcdFx0XHRcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuXHRcdFx0XHRcdFx0XCJvcGFjaXR5XCI6IG8ub3ZlcmxheVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQobW9kYWxfaWQpLmNzcyh7XG5cdFx0XHRcdFx0XHRcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcblx0XHRcdFx0XHRcdFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG5cdFx0XHRcdFx0XHRcInotaW5kZXhcIjogMTEwMDAsXG5cdFx0XHRcdFx0XHRcImJvdHRvbVwiOiBvLmJvdHRvbSArIFwicHhcIixcblx0XHRcdFx0XHRcdFwidG9wXCI6IG8udG9wICsgXCJweFwiXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JChtb2RhbF9pZCkuYWRkQ2xhc3MoXCJhbmltYXRlZCB6b29tSW5cIik7XG5cdFx0XHRcdH0gZWxzZSBpZihvLnR5cGUgPT0gMikgeyAvL+eUseS4i+W+gOS4ilxuXHRcdFx0XHRcdEYub3ZlcmxheSgpO1xuXHRcdFx0XHRcdHZhciBtb2RhbF9pZCA9IG8ubW9kYWxfaWQ7XG5cdFx0XHRcdFx0JChcIiNvdmVybGF5X3BhblwiKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdF90aGlzLmNsb3NlTW9kYWwobW9kYWxfaWQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQoby5jbG9zZUJ1dHRvbikuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRfdGhpcy5jbG9zZU1vZGFsKG1vZGFsX2lkKTtcblx0XHRcdFx0XHRcdG8uY2xvc2VmdW50aW9uKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHR2YXIgJGxpc3QgPSAkKG1vZGFsX2lkKTtcblx0XHRcdFx0XHQkbGlzdC5jc3MoXCJkaXNwbGF5XCIsICcnKTtcblx0XHRcdFx0XHQkbGlzdC5jc3MoXCJib3R0b21cIiwgLSRsaXN0LmhlaWdodCgpKTtcblxuXHRcdFx0XHRcdCQoXCIjb3ZlcmxheV9wYW5cIikuY3NzKHtcblx0XHRcdFx0XHRcdFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG5cdFx0XHRcdFx0XHRcIm9wYWNpdHlcIjogby5vdmVybGF5XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JChtb2RhbF9pZCkuY3NzKHtcblx0XHRcdFx0XHRcdFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuXHRcdFx0XHRcdFx0XCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcblx0XHRcdFx0XHRcdFwiei1pbmRleFwiOiAxMTAwMCxcblx0XHRcdFx0XHRcdFwiYm90dG9tXCI6IG8uYm90dG9tICsgXCJweFwiLFxuXHRcdFx0XHRcdFx0XCJ0b3BcIjogby50b3AgKyBcInB4XCJcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkKG1vZGFsX2lkKS5hZGRDbGFzcyhcImFuaW1hdGVkIGZhZGVJblVwXCIpO1xuXG5cdFx0XHRcdH0gZWxzZSBpZihvLnR5cGUgPT0gMykge1xuXHRcdFx0XHRcdC8v55SxeW915b6AenVvXG5cdFx0XHRcdFx0dmFyIG1vZGFsX2lkID0gby5tb2RhbF9pZDtcblx0XHRcdFx0XHQkKFwiI292ZXJsYXlfcGFuXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0X3RoaXMuY2xvc2VNb2RhbChtb2RhbF9pZCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JChvLmNsb3NlQnV0dG9uKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdF90aGlzLmNsb3NlTW9kYWwobW9kYWxfaWQpO1xuXHRcdFx0XHRcdFx0by5jbG9zZWZ1bnRpb24oKTtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHZhciAkbGlzdCA9ICQobW9kYWxfaWQpO1xuXHRcdFx0XHRcdCRsaXN0LmNzcyhcImRpc3BsYXlcIiwgJycpO1xuXHRcdFx0XHRcdCRsaXN0LmNzcyhcInJpZ2h0XCIsICRsaXN0LndpZHRoKCkpO1xuXG5cdFx0XHRcdFx0JChcIiNvdmVybGF5X3BhblwiKS5jc3Moe1xuXHRcdFx0XHRcdFx0XCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcblx0XHRcdFx0XHRcdFwib3BhY2l0eVwiOiBvLm92ZXJsYXlcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkKG1vZGFsX2lkKS5jc3Moe1xuXHRcdFx0XHRcdFx0XCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG5cdFx0XHRcdFx0XHRcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuXHRcdFx0XHRcdFx0XCJ6LWluZGV4XCI6IDExMDAwLFxuXHRcdFx0XHRcdFx0XCJib3R0b21cIjogby5ib3R0b20gKyBcInB4XCIsXG5cdFx0XHRcdFx0XHRcInRvcFwiOiBvLnRvcCArIFwicHhcIlxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQobW9kYWxfaWQpLmFkZENsYXNzKFwiYW5pbWF0ZWQgZmFkZUluUmlnaHRCaWdcIik7XG5cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHRpcE1vZGFsOiBmdW5jdGlvbihvcHRpb25zKSB7XG5cdFx0XHRcdGxldCBfdGhpcyA9IHRoaXM7XG5cdFx0XHRcdEYub3ZlcmxheSgpOyAvL+a3u+WKoOWNiumAj+aYjuiSmeWxglxuXHRcdFx0XHR2YXIgbyA9ICQuZXh0ZW5kKHRpcGNvbmZpZywgb3B0aW9ucyk7IC8v6I635Y+W5o+S5Lu26YWN572uXG5cdFx0XHRcdEYudGlwTW9kKG8pOyAvL+agueaNrumFjee9riDmuLLmn5PlvLnnqpdkb21cblx0XHRcdFx0dmFyIG1vZGFsX2lkID0gJyN0aXBfbW9kJzsgLy/ojrflj5bmuLLmn5PnmoRkb20g55qEICBpZFxuXHRcdFx0XHQkKFwiI292ZXJsYXlfcGFuXCIpLmNsaWNrKGZ1bmN0aW9uKCkgeyAvL+eCueWHu+WNiumAj+aYjiAgICAg6Kem5Y+R5LqL5Lu2XG5cdFx0XHRcdFx0X3RoaXMuY2xvc2VNb2RhbChtb2RhbF9pZCk7IC8v5YWz6Zet5by556qXXG5cdFx0XHRcdFx0by5jYW5jZWxfZnVuY3Rpb24oXCJvdmVybGF5XCIpOyAvL+WFs+mXreaMiemSrueahOS6i+S7tlxuXHRcdFx0XHR9KTtcblx0XHRcdFx0JCgnI3RydWUtYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oKSB7IC8vIOe7keWumuehruiupOaMiemSrlxuXHRcdFx0XHRcdF90aGlzLmNsb3NlTW9kYWwobW9kYWxfaWQpOyAvL+WFs+mXreW8ueeql1xuXHRcdFx0XHRcdG8udHJ1ZV9mdW5jdGlvbigpOyAvL+inpuWPkeehruiupOaMiemSrueahOS6i+S7tlxuXHRcdFx0XHR9KTtcblx0XHRcdFx0JCgnI2NhbmNlbC1idXR0b24nKS5jbGljayhmdW5jdGlvbigpIHsgLy/nu5Hlrprlj5bmtojmjInpkq5cblx0XHRcdFx0XHRfdGhpcy5jbG9zZU1vZGFsKG1vZGFsX2lkKTsgLy/lhbPpl63lvLnnqpdcblx0XHRcdFx0XHRvLmNhbmNlbF9mdW5jdGlvbihcImNhbmNlbFwiKTsgLy/lhbPpl63mjInpkq7nmoTkuovku7Zcblx0XHRcdFx0fSk7XG5cdFx0XHRcdCQoXCIjb3ZlcmxheV9wYW5cIikuY3NzKHsgLy/orr7nva4g5Y2K6YCP5piOIG92ZXJsYXnnmoQgIOmAj+aYjuW6piDlubbkuJTmmL7npLpcblx0XHRcdFx0XHRcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuXHRcdFx0XHRcdFwib3BhY2l0eVwiOiAwLjVcblx0XHRcdFx0fSk7XG5cdFx0XHRcdCQobW9kYWxfaWQpLmNzcyh7IC8v5pi+56S65by556qXXG5cdFx0XHRcdFx0XCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG5cdFx0XHRcdFx0XCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcblx0XHRcdFx0XHRcInotaW5kZXhcIjogMTEwMDAsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQkKG1vZGFsX2lkKS5hZGRDbGFzcyhcImFuaW1hdGVkIHpvb21JblwiKTsgLy/mt7vliqDliqjnlLtcblx0XHRcdH0sXG5cdFx0XHRjbG9zZU1vZGFsOiBmdW5jdGlvbihtb2RhbF9pZCkge1xuXHRcdFx0XHQkKFwiI292ZXJsYXlfcGFuXCIpLmNzcyh7IC8v6ZqQ6JePb3ZlcmxheVxuXHRcdFx0XHRcdFwiZGlzcGxheVwiOiBcIm5vbmVcIlxuXHRcdFx0XHR9KTtcblx0XHRcdFx0JChtb2RhbF9pZCkuY3NzKHsgLy/pmpDol4/lvLnnqpdcblx0XHRcdFx0XHRcImRpc3BsYXlcIjogXCJub25lXCJcblx0XHRcdFx0fSlcblxuXHRcdFx0fSxcblx0XHRcdGZsYXNoSW50bzogZnVuY3Rpb24oc3RyKSB7XG5cdFx0XHRcdGxldCBfdGhpcyA9IHRoaXM7XG5cdFx0XHRcdEYuZmxhc2hNb2Qoc3RyKTtcblx0XHRcdFx0JChcIiNmc2htb2RcIikuYWRkQ2xhc3MoJ3ljJyk7XG5cdFx0XHRcdCQoXCIjZnNobW9kXCIpLmNzcyh7XG5cdFx0XHRcdFx0XCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG5cdFx0XHRcdFx0XCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcblx0XHRcdFx0XHRcInotaW5kZXhcIjogMTEwMDAsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQkKCcjZnNobW9kJykuYWRkQ2xhc3MoXCJhbmltYXRlZCB6b29tSW5cIik7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0X3RoaXMuZmxhc2hPdXQoKVxuXHRcdFx0XHR9LCAzMDAwKTtcblx0XHRcdH0sXG5cdFx0XHRmbGFzaE91dDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoXCIjZnNobW9kXCIpLmNzcyh7XG5cdFx0XHRcdFx0XCJkaXNwbGF5XCI6IFwibm9uZVwiXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHR9XG5cdFx0cmV0dXJuIE1vZGFsO1xuXHR9XG5cdC8qKlxuXHQgKiDoh6rlrprkuYlhamF4XG5cdCAqL1xuXG5jb25zdCBteUFqYXggPSBmdW5jdGlvbihvcHRzKSB7XG5cdHZhciBPID0ge1xuXHRcdGdldHVybGlwOiBmdW5jdGlvbigpIHtcblx0XHRcdGxldCB1cmxfaXA7XG5cdFx0XHRpZihFbnYgPT0gJ3Byb2R1Y3Rpb24nIHx8IEVudiA9PSAncHJlJykge1xuXHRcdFx0XHR1cmxfaXAgPSBcImh0dHBzOi8vYXBpLjVkb3UuY24vXCI7XG5cdFx0XHR9IGVsc2UgaWYoRW52ID09ICd0ZXN0JyB8fCBFbnYgPT0gJ2RldmVsb3BtZW50Jykge1xuXHRcdFx0XHR1cmxfaXAgPSBcImh0dHBzOi8vYXBpdGVzdC41ZG91LmNuL1wiO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHVybF9pcDtcblx0XHR9LFxuXHRcdGdldHZhbHVlOiBmdW5jdGlvbihuYXRpdmVEYXRhLCBrZXlzdHIpIHtcblx0XHRcdHZhciBjZmcgPSB7fTtcblx0XHRcdHZhciBpb3NTdHIgPSBuYXRpdmVEYXRhICYmIG5hdGl2ZURhdGEuc3BsaXQoJywnKTtcblx0XHRcdGlmKGlvc1N0cikge1xuXHRcdFx0XHRmb3IodmFyIHggaW4gaW9zU3RyKSB7XG5cdFx0XHRcdFx0Y2ZnW2lvc1N0clt4XS5zcGxpdCgnOicpWzBdXSA9IGlvc1N0clt4XS5zcGxpdCgnOicpWzFdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY2ZnW2tleXN0cl0gPyBjZmdba2V5c3RyXSA6IFwiXCI7XG5cdFx0fSxcblx0XHRnZXRhaWNjOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuYXRpdmVfZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmF0aXZlX2RhdGFcIik7XG5cdFx0XHR2YXIgbG9jYWxfYWljYyA9IHRoaXMuZ2V0dmFsdWUobmF0aXZlX2RhdGEsIFwiYWljY1wiKTtcblx0XHRcdHJldHVybiBsb2NhbF9haWNjID8gbG9jYWxfYWljYyA6IFwiV1VET1VfSDVcIjtcblx0XHR9LFxuXHRcdGdldGFpY3A6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5hdGl2ZV9kYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJuYXRpdmVfZGF0YVwiKTtcblx0XHRcdHZhciBsb2NhbF9haWNwID0gdGhpcy5nZXR2YWx1ZShuYXRpdmVfZGF0YSwgXCJhaWNwXCIpO1xuXHRcdFx0cmV0dXJuIGxvY2FsX2FpY3AgPyBsb2NhbF9haWNwIDogXCJFMkU0ODgyRDkzQ0E5MzQ3Q0QwMkEwQzA2OEI3NzYzMlwiO1xuXHRcdH0sXG5cdFx0Z2V0YmltaTogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmF0aXZlX2RhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5hdGl2ZV9kYXRhXCIpO1xuXHRcdFx0dmFyIGxvY2FsX2JpbWkgPSB0aGlzLmdldHZhbHVlKG5hdGl2ZV9kYXRhLCBcImJpbWlcIik7XG5cdFx0XHRpZihsb2NhbF9iaW1pKSB7XG5cdFx0XHRcdHJldHVybiBsb2NhbF9iaW1pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIHN0clN0b3JlRGF0ZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1lbWJlcklkXCIpIDogQ29va2llLnJlYWQoXCJtZW1iZXJJZFwiKTtcblx0XHRcdFx0aWYoc3RyU3RvcmVEYXRlKSB7XG5cdFx0XHRcdFx0aWYoc3RyU3RvcmVEYXRlICYmIHN0clN0b3JlRGF0ZS5zcGxpdChcIixcIikubGVuZ3RoICE9IDEpIHtcblx0XHRcdFx0XHRcdHZhciBsb2NhbF9pcCA9IHN0clN0b3JlRGF0ZSA/IHN0clN0b3JlRGF0ZS5zcGxpdChcIixcIilbMF0gOiBcIlwiO1xuXHRcdFx0XHRcdFx0dmFyIGxvY2FsX21pID0gc3RyU3RvcmVEYXRlID8gc3RyU3RvcmVEYXRlLnNwbGl0KFwiLFwiKVsxXSA6IFwiXCI7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbG9jYWxfaXAgPT0gdGhpcy5nZXR1cmxpcCgpID8gbG9jYWxfbWkgOiBcIlwiO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc3RyU3RvcmVEYXRlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gXCJcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Z2V0YmljdDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmF0aXZlX2RhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5hdGl2ZV9kYXRhXCIpO1xuXHRcdFx0dmFyIGxvY2FsX2JpY3QgPSB0aGlzLmdldHZhbHVlKG5hdGl2ZV9kYXRhLCBcImJpY3RcIik7XG5cdFx0XHRyZXR1cm4gbG9jYWxfYmljdCA/IGxvY2FsX2JpY3QgOiBcIkg1XCI7XG5cdFx0fSxcblx0XHRnZXRiaWRuOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuYXRpdmVfZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmF0aXZlX2RhdGFcIik7XG5cdFx0XHR2YXIgbG9jYWxfYmlkbiA9IHRoaXMuZ2V0dmFsdWUobmF0aXZlX2RhdGEsIFwiYmlkblwiKTtcblx0XHRcdHJldHVybiBsb2NhbF9iaWRuID8gbG9jYWxfYmlkbiA6IFwiSDVcIjtcblx0XHR9LFxuXHRcdGdldGJpZHY6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGJpZHYgPSBcIlwiO1xuXHRcdFx0dmFyIHUgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXHRcdFx0dmFyIGlzQW5kcm9pZCA9IHUuaW5kZXhPZignQW5kcm9pZCcpID4gLTEgfHwgdS5pbmRleE9mKCdBZHInKSA+IC0xOyAvL2FuZHJvaWTnu4jnq68gXG5cdFx0XHR2YXIgaXNpT1MgPSAhIXUubWF0Y2goL1xcKGlbXjtdKzsoIFU7KT8gQ1BVLitNYWMgT1MgWC8pOyAvL2lvc+e7iOerryBcblx0XHRcdGlmKGlzQW5kcm9pZCkge1xuXHRcdFx0XHRiaWR2ID0gJ0FuZHJvaWQnO1xuXHRcdFx0fSBlbHNlIGlmKGlzaU9TKSB7XG5cdFx0XHRcdGJpZHYgPSAnSU9TJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGJpZHYgPSAnUEMnO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGJpZHY7XG5cdFx0fSxcblx0XHRnZXRzaWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5hdGl2ZV9kYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJuYXRpdmVfZGF0YVwiKTtcblx0XHRcdHZhciBsb2NhbF9zaWQgPSB0aGlzLmdldHZhbHVlKG5hdGl2ZV9kYXRhLCBcInNpZFwiKTtcblx0XHRcdHJldHVybiBsb2NhbF9zaWQgPyBsb2NhbF9zaWQgOiBcIkg1XCI7XG5cdFx0fSxcblx0XHRnZXR0aW1lc3RhbXA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIERhdGUucGFyc2UobmV3IERhdGUoKSkgLyAxMDAwO1xuXHRcdH0sXG5cdFx0Z2V0YmlkbTogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmF0aXZlX2RhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5hdGl2ZV9kYXRhXCIpO1xuXHRcdFx0dmFyIGxvY2FsX2JpZG0gPSB0aGlzLmdldHZhbHVlKG5hdGl2ZV9kYXRhLCBcImJpZG1cIik7XG5cdFx0XHRyZXR1cm4gbG9jYWxfYmlkbTtcblx0XHR9LFxuXHRcdGdldGJpb3Y6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5hdGl2ZV9kYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJuYXRpdmVfZGF0YVwiKTtcblx0XHRcdHZhciBsb2NhbF9iaW92ID0gdGhpcy5nZXR2YWx1ZShuYXRpdmVfZGF0YSwgXCJiaW92XCIpO1xuXHRcdFx0cmV0dXJuIGxvY2FsX2Jpb3Y7XG5cdFx0fSxcblx0XHRnZXRiaWF2OiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuYXRpdmVfZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmF0aXZlX2RhdGFcIik7XG5cdFx0XHR2YXIgbG9jYWxfYmlhdiA9IHRoaXMuZ2V0dmFsdWUobmF0aXZlX2RhdGEsIFwiYmlhdlwiKTtcblx0XHRcdHJldHVybiBsb2NhbF9iaWF2O1xuXHRcdH0sXG5cdFx0Z2V0bG9naW46IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly/ov5nph4zlhpnojrflj5bnmbvlvZXnirbmgIHnmoRqc1xuXHRcdFx0cmV0dXJuIFwiMFwiO1xuXHRcdH0sXG5cdFx0Z2V0c2lnbjogZnVuY3Rpb24oa2V5QXJyeSwgZGF0YXN0cikge1xuXHRcdFx0a2V5QXJyeS5zb3J0KCk7XG5cdFx0XHR2YXIga2V5U3RyMSA9ICcnO1xuXHRcdFx0dmFyIHNpZ24gPSAnJztcblx0XHRcdGZvcih2YXIga2V5IGluIGtleUFycnkpIHtcblx0XHRcdFx0a2V5U3RyMSArPSBkYXRhc3RyWyhrZXlBcnJ5W2tleV0pXTtcblx0XHRcdH1cblx0XHRcdHNpZ24gPSBtZDUoa2V5U3RyMSkudG9VcHBlckNhc2UoKTtcblx0XHRcdGlmKGxvY2FsU3RvcmFnZS5hbmRyb2lkID09IFwidHJ1ZVwiIHx8IGxvY2FsU3RvcmFnZS5pb3MgPT0gXCJ0cnVlXCIpIHtcblx0XHRcdFx0cmV0dXJuIG1kNSh0aGlzLmdldGFpY2MoKSArIHNpZ24pLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gc2lnbjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8v6I635Y+W5Luj56CB5L+h5oGvXG5cdFx0Z2V0Y29kZW1lOiBmdW5jdGlvbihqc29ub2JqKSB7XG5cdFx0XHR2YXIgY29kZSA9IGpzb25vYmoucmVzdWx0LmNvZGU7XG5cdFx0XHR2YXIgbWVhbiA9ICcnO1xuXHRcdFx0aWYoanNvbm9iai5yZXN1bHQubXNnKSB7XG5cdFx0XHRcdG1lYW4gPSBqc29ub2JqLnJlc3VsdC5tc2c7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtZWFuID0gJyc7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWVhbjtcblx0XHR9LFxuXHRcdC8v6I635Y+WY29kZVxuXHRcdGdldGNvZGU6IGZ1bmN0aW9uKGpzb25vYmopIHtcblx0XHRcdHZhciBjb2RlID0ganNvbm9iai5yZXN1bHQuY29kZTtcblx0XHRcdHJldHVybiBjb2RlO1xuXHRcdH1cblx0fVxuXHR2YXIgZGVmYXVsdHMgPSB7XG5cdFx0bW9kYWx0eXBlOiAxLCAvLzHkuLrpl6rnjrDmoYYsMuS4uuiHquWumuS5ieahhlxuXHRcdGFzeW5jOiB0cnVlLFxuXHRcdGlwOiBPLmdldHVybGlwKCksXG5cdFx0dXJsOiBudWxsLFxuXHRcdGRhdGE6IG51bGwsXG5cdFx0dmFsaWRhdGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRydWVcblx0XHR9LFxuXHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge30sXG5cdFx0ZXJyb3I6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bXlNb2RhbCgpLmZsYXNoSW50byhcIuivt+ajgOafpee9kee7nFwiKVxuXHRcdH1cblx0fTtcblx0dmFyIG9wdGlvbiA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRzKTtcblx0dmFyIGRhdGFzdHI7XG5cdHZhciBrZXlBcnJ5O1xuXHRpZihPLmdldGJpbWkoKSkge1xuXHRcdC8vMeS4uueZu+W9le+8jDDkuLrmnKrnmbvlvZVcblx0XHRkYXRhc3RyID0ge1xuXHRcdFx0XCJhaS5jY1wiOiBPLmdldGFpY2MoKSxcblx0XHRcdFwiYmkubWlcIjogTy5nZXRiaW1pKCksXG5cdFx0XHRcImJpLmN0XCI6IE8uZ2V0YmljdCgpLFxuXHRcdFx0XCJiaS5kdlwiOiBPLmdldGJpZHYoKSxcblx0XHRcdFwiYmkuZG1cIjogTy5nZXRiaWRtKCksXG5cdFx0XHRcImJpLmF2XCI6IE8uZ2V0YmlhdigpLFxuXHRcdFx0XCJiaS5vdlwiOiBPLmdldGJpb3YoKSxcblx0XHRcdFwiYmkuZG5cIjogTy5nZXRiaWRuKCksXG5cdFx0fVxuXHRcdGtleUFycnkgPSBbXCJhaS5jY1wiLCBcImJpLm1pXCIsIFwiYmkuY3RcIiwgXCJiaS5kdlwiLCBcImJpLmRtXCIsIFwiYmkuYXZcIiwgXCJiaS5vdlwiLCBcImJpLmRuXCJdO1xuXHR9IGVsc2Uge1xuXHRcdGRhdGFzdHIgPSB7XG5cdFx0XHRcImFpLmNjXCI6IE8uZ2V0YWljYygpLFxuXHRcdFx0XCJiaS5jdFwiOiBPLmdldGJpY3QoKSxcblx0XHRcdFwiYmkuZHZcIjogTy5nZXRiaWR2KCksXG5cdFx0XHRcImJpLmRtXCI6IE8uZ2V0YmlkbSgpLFxuXHRcdFx0XCJiaS5hdlwiOiBPLmdldGJpYXYoKSxcblx0XHRcdFwiYmkub3ZcIjogTy5nZXRiaW92KCksXG5cdFx0XHRcImJpLmRuXCI6IE8uZ2V0YmlkbigpLFxuXHRcdH1cblx0XHRrZXlBcnJ5ID0gW1wiYWkuY2NcIiwgXCJiaS5jdFwiLCBcImJpLmR2XCIsIFwiYmkuZG1cIiwgXCJiaS5hdlwiLCBcImJpLm92XCIsIFwiYmkuZG5cIl07XG5cdH1cblx0dmFyIGJlZm9yZUNyZWF0ZSA9IHtcblx0XHRsb2FkYWpheDogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZighb3B0cykge1xuXHRcdFx0XHRyZXR1cm4gb3B0aW9uLmlwO1xuXHRcdFx0fVxuXHRcdFx0aWYoIW9wdGlvbi52YWxpZGF0ZSgpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH07XG5cdFx0XHRmb3IodmFyIHggaW4gb3B0aW9uLmRhdGEpIHtcblx0XHRcdFx0aWYob3B0aW9uLmRhdGFbeF0gJiYgdHlwZW9mKG9wdGlvbi5kYXRhW3hdKSA9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdGlmKG9wdGlvbi5kYXRhW3hdLnN1YnN0cmluZygwLCAxKSA9PSAnLicgfHwgb3B0aW9uLmRhdGFbeF0uc3Vic3RyaW5nKDAsIDEpID09ICcjJykge1xuXHRcdFx0XHRcdFx0ZGF0YXN0clt4XSA9ICQob3B0aW9uLmRhdGFbeF0pLnZhbCgpO1xuXHRcdFx0XHRcdFx0a2V5QXJyeS5wdXNoKHgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRkYXRhc3RyW3hdID0gb3B0aW9uLmRhdGFbeF07XG5cdFx0XHRcdFx0XHRrZXlBcnJ5LnB1c2goeCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYodHlwZW9mKG9wdGlvbi5kYXRhW3hdKSA9PSAnbnVtYmVyJykge1xuXHRcdFx0XHRcdGRhdGFzdHJbeF0gPSBvcHRpb24uZGF0YVt4XTtcblx0XHRcdFx0XHRrZXlBcnJ5LnB1c2goeCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdFx0JC5hamF4KHtcblx0XHRcdFx0dHlwZTogJ1BPU1QnLFxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxuXHRcdFx0XHRhc3luYzogb3B0aW9uLmFzeW5jLFxuXHRcdFx0XHR1cmw6IG9wdGlvbi5pcCArIG9wdGlvbi51cmwsXG5cdFx0XHRcdGRhdGE6IGRhdGFzdHIsXG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHQnc2lkJzogTy5nZXRzaWQoKSxcblx0XHRcdFx0XHQndGltZXN0YW1wJzogTy5nZXR0aW1lc3RhbXAoKSxcblx0XHRcdFx0XHQnYWljcCc6IE8uZ2V0YWljcCgpLFxuXHRcdFx0XHRcdCdhaS5jcCc6IE8uZ2V0YWljcCgpLFxuXHRcdFx0XHRcdCdzaWduJzogTy5nZXRzaWduKGtleUFycnksIGRhdGFzdHIpXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJzcCkge1xuXHRcdFx0XHRcdGlmKG9wdGlvbi5tb2RhbHR5cGUgPT0gMSkge1xuXHRcdFx0XHRcdFx0aWYoTy5nZXRjb2RlKHJzcCkgPT0gXCI3MDAwXCIpIHtcblx0XHRcdFx0XHRcdFx0bXlNb2RhbCgpLmZsYXNoSW50byhPLmdldGNvZGVtZShyc3ApKVxuXHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiLyMhL2xvZ2luXCI7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmKE8uZ2V0Y29kZW1lKHJzcCkgIT0gJycpIHtcblx0XHRcdFx0XHRcdFx0bXlNb2RhbCgpLmZsYXNoSW50byhPLmdldGNvZGVtZShyc3ApKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvKiBlbHNlIGlmKG9wdGlvbi5tb2RhbHR5cGUgPT0gMikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmKE8uZ2V0Y29kZShyc3ApID09IFwiNzAwMFwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiLyMhL2xvZ2luXCI7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9Ki9cblx0XHRcdFx0XHRvcHRpb24uc3VjY2Vzcyhyc3ApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnJvcjogZnVuY3Rpb24oZXJyaW5mbykge1xuXHRcdFx0XHRcdG9wdGlvbi5lcnJvcihlcnJpbmZvKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblx0cmV0dXJuIGJlZm9yZUNyZWF0ZS5sb2FkYWpheCgpO1xufVxuXG4vKlxuICrkvZzogIU6cGFud2VuaHVhIFxuICrml7bpl7Q6MjAxNi0wNy0wMSAxMToxMToyMFxuICogXG4gKiAgIOijgeWJquWbvueJh1xuICogJChpZCkubXlJbWFnZSh7XG4gKiB0aGF0OnRoaXMsIC8v5b2T5YmN5Zu+54mH5a+56LGhXG4gKiBjdXRXaWQ6JycsIC8v6KOB5Ymq5bC65a+4XG4gKiBxdWFsaXR5OjAuNiwgLy/lm77niYfotKjph48wfjFcbiAqIGxpbWl0V2lkOjQwMCwgLy/mnIDlsI/lrr3luqZcbiAqIHN1Y2Nlc3M6ZnVuY3Rpb24gKGRhdGEpIHtcbiAqIGRvIHNvbWV0aGluZy4uLiBcbiAqICovXG5jb25zdCBteUltYWdlID0gZnVuY3Rpb24ob2JqKSB7XG5cdHZhciBteUltYWdlID0ge1xuXHRcdHVwbG9hZEltYWdlOiBmdW5jdGlvbihvYmopIHtcblx0XHRcdHZhciBmaWxlID0gb2JqLnRoYXRbMF0uZmlsZXNbMF07XG5cdFx0XHR2YXIgVVJMID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xuXHRcdFx0dmFyIGJsb2IgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuXHRcdFx0dmFyIGJhc2U2NDtcblx0XHRcdHZhciBPcmllbnRhdGlvbiA9IG51bGw7XG5cdFx0XHR2YXIgaW1nID0gbmV3IEltYWdlKCk7XG5cdFx0XHRpbWcuc3JjID0gYmxvYjtcblx0XHRcdHZhciByRmlsdGVyID0gL14oaW1hZ2VcXC9qcGVnfGltYWdlXFwvcG5nKSQvaTtcblx0XHRcdGlmKCFyRmlsdGVyLnRlc3QoZmlsZS50eXBlKSAmJiBmaWxlLnR5cGUgIT0gJycpIHtcblx0XHRcdFx0YWxlcnQoXCLpnZ7lm77niYfmoLzlvI/vvIFcIiwgMTAwMCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoaW1nLndpZHRoIDwgb2JqLmxpbWl0V2lkKSB7XG5cdFx0XHRcdFx0YWxlcnQoJ+WbvueJh+WuveW6puS4jeW+l+Wwj+S6jicgKyBvYmoubGltaXRXaWQgKyAncHgnLCAxMDAwKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xuXG5cdFx0XHRcdC8v55Sf5oiQ5q+U5L6LXG5cdFx0XHRcdHZhciB3LCBzY2FsZSwgaCA9IHRoYXQuaGVpZ2h0O1xuXHRcdFx0XHRpZihvYmouY3V0V2lkID09ICcnKSB7XG5cdFx0XHRcdFx0dyA9IHRoYXQud2lkdGg7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dyA9IG9iai5jdXRXaWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2NhbGUgPSB3IC8gaDtcblx0XHRcdFx0aCA9IHcgLyBzY2FsZTtcblxuXHRcdFx0XHQvL+eUn+aIkGNhbnZhc1xuXHRcdFx0XHR2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdFx0XHRcdHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblx0XHRcdFx0JChjYW52YXMpLmF0dHIoe1xuXHRcdFx0XHRcdHdpZHRoOiB3LFxuXHRcdFx0XHRcdGhlaWdodDogaFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y3R4LmRyYXdJbWFnZSh0aGF0LCAwLCAwLCB3LCBoKTtcblx0XHRcdFx0YmFzZTY0ID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycsIG9iai5xdWFsaXR5IHx8IDAuOCk7XG5cblx0XHRcdFx0dmFyIHJlc3VsdCA9IHtcblx0XHRcdFx0XHRiYXNlNjQ6IGJhc2U2NFxuXHRcdFx0XHR9O1xuXHRcdFx0XHQvL+aIkOWKn+WQjueahOWbnuiwg1xuXHRcdFx0XHRvYmouc3VjY2VzcyhyZXN1bHQpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG15SW1hZ2U7XG59XG5cbmV4cG9ydHMuZ2V0Q2hlY2sgPSBnZXRDaGVjaztcbmV4cG9ydHMuZm10RGF0ZSA9IGZtdERhdGU7XG5leHBvcnRzLk1pbGxpc2Vjb25kVG9EYXRlID0gTWlsbGlzZWNvbmRUb0RhdGU7XG5leHBvcnRzLm15QWpheCA9IG15QWpheDtcbmV4cG9ydHMuc2VuZENvZGUgPSBzZW5kQ29kZTtcbmV4cG9ydHMubXlNb2RhbCA9IG15TW9kYWw7XG5leHBvcnRzLm15SW1hZ2UgPSBteUltYWdlO1xuZXhwb3J0cy5nZXRSYW5kb20gPSBnZXRSYW5kb207XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYnMvdXRpbHMuanMiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvLjIuMC4wLWJldGEuNEBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vbG9hZGVyLmpzP3tcXFwib21pdFxcXCI6MSxcXFwicmVtb3ZlXFxcIjp0cnVlfSF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTdiMzc2OWY4JnNjb3BlZD10cnVlIXB4MnJlbT9yZW1Vbml0PTY1JnJlbVByZWNpc2lvbj04IXNhc3MtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9jYWxlbmRhci52dWVcIilcblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NhbGVuZGFyLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtN2IzNzY5ZjghdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY2FsZW5kYXIudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkM6XFxcXFVzZXJzXFxcXHBhbndlbmh1YVxcXFxEb2N1bWVudHNcXFxcSEJ1aWxkZXJQcm9qZWN0XFxcXHZ1ZS1DYWxlbmRhckxpc3RWaWV3XFxcXHNyY1xcXFxjb21wb25lbnRzXFxcXGNhbGVuZGFyLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtN2IzNzY5ZjhcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2IzNzY5ZjhcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2IzNzY5ZjhcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjYWxlbmRhci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2NhbGVuZGFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhbGVuZGFyLWxpc3RcIlxuICB9LCBbX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhbGVuZGFyXCJcbiAgfSwgX3ZtLl9sKChfdm0uZGF0ZUFyciksIGZ1bmN0aW9uKGRhdGUpIHtcbiAgICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImNhbGVuZGFyLWl0ZW1cIlxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiY2FsZW5kYXItaGVhZGVyXCJcbiAgICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KF92bS5fcyhkYXRlLnkpICsgXCLlubRcIiArIF92bS5fcyhkYXRlLm0pICsgXCLmnIhcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiY2FsZW5kYXItYm9keVwiXG4gICAgfSwgW19jKCd1bCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImRheXNcIlxuICAgIH0sIF92bS5fbCgoZGF0ZS5kYXlzKSwgZnVuY3Rpb24oZGF5KSB7XG4gICAgICByZXR1cm4gX2MoJ2xpJywgWyhkYXkuZ2V0TW9udGgoKSArIDEgIT0gZGF0ZS5tKSA/IF9jKCdkaXYnLCBbX2MoJ3NwYW4nKV0pIDogKF92bS5pc1RvZGF5KGRheSkpID8gX2MoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICB0b2RheTogX3ZtLmlzQ3VycmVudERheShkYXkpXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5jbGlja0FjdGlvbihkYXkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KF92bS5fcygn5LuK5aSpJykpXSksIF92bS5fdihcIiBcIiksIF9jKCdpJywgW192bS5fdihfdm0uX3MoX3ZtLmdldE51bShkYXkpKSldKV0pIDogX2MoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICB0b2RheTogX3ZtLmlzQ3VycmVudERheShkYXkpXG4gICAgICAgIH1cbiAgICAgIH0sIFsoZGF5IDwgbmV3IERhdGUoKSkgPyBbX2MoJ3NwYW4nLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImRpc2FibGVkXCJcbiAgICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGRheS5nZXREYXRlKCkpKV0pXSA6IFtfYygnc3BhbicsIHtcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgX3ZtLmNsaWNrQWN0aW9uKGRheSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGRheS5nZXREYXRlKCkpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaScsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibnVtc1wiXG4gICAgICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZ2V0TnVtKGRheSkpKV0pXV0sIDIpXSlcbiAgICB9KSldKV0pXG4gIH0pKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIndlZWtcIlxuICB9LCBbX2MoJ2xpJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImNvbG9yXCI6IFwiI0NDQ0NDQ1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwi5pelXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdsaScsIFtfdm0uX3YoXCLkuIBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xpJywgW192bS5fdihcIuS6jFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCBbX3ZtLl92KFwi5LiJXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdsaScsIFtfdm0uX3YoXCLlm5tcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xpJywgW192bS5fdihcIuS6lFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCBbX3ZtLl92KFwi5YWtXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTdiMzc2OWY4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4xMC4wLjJAdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTdiMzc2OWY4IS4vfi8uMTAuMC4yQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL2NhbGVuZGFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjAuMC1iZXRhLjRAZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2xvYWRlci5qcz97XCJvbWl0XCI6MSxcInJlbW92ZVwiOnRydWV9IS4vfi8uMS4wLjBAdnVlLXN0eWxlLWxvYWRlciEuL34vLjAuMjYuMUBjc3MtbG9hZGVyIS4vfi8uMTAuMC4yQHZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03YjM3NjlmOCZzY29wZWQ9dHJ1ZSEuL34vLjAuMS43QHB4MnJlbS1sb2FkZXI/cmVtVW5pdD02NSZyZW1QcmVjaXNpb249OCEuL34vLjQuMS4xQHNhc3MtbG9hZGVyIS4vfi8uMTAuMC4yQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9jYWxlbmRhci52dWVcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJjYWxlbmRhci1saXN0XCI+XG5cdFx0PHVsIGNsYXNzPVwid2Vla1wiPlxuXHRcdFx0PGxpIHN0eWxlPVwiY29sb3I6ICNDQ0NDQ0M7XCI+5pelPC9saT5cblx0XHRcdDxsaT7kuIA8L2xpPlxuXHRcdFx0PGxpPuS6jDwvbGk+XG5cdFx0XHQ8bGk+5LiJPC9saT5cblx0XHRcdDxsaT7lm5s8L2xpPlxuXHRcdFx0PGxpPuS6lDwvbGk+XG5cdFx0XHQ8bGk+5YWtPC9saT5cblx0XHQ8L3VsPlxuXHRcdDxkaXYgY2xhc3M9XCJjYWxlbmRhclwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNhbGVuZGFyLWl0ZW1cIiB2LWZvcj1cImRhdGUgaW4gZGF0ZUFyclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FsZW5kYXItaGVhZGVyXCI+PHNwYW4+e3tkYXRlLnl9feW5tHt7ZGF0ZS5tfX3mnIg8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYWxlbmRhci1ib2R5XCI+XG5cdFx0XHRcdFx0PHVsIGNsYXNzPVwiZGF5c1wiPlxuXHRcdFx0XHRcdFx0PGxpIHYtZm9yPVwiZGF5IGluIGRhdGUuZGF5c1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IHYtaWY9XCJkYXkuZ2V0TW9udGgoKSsxICE9IGRhdGUubVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgdi1lbHNlLWlmPVwiaXNUb2RheShkYXkpXCIgQGNsaWNrPVwiY2xpY2tBY3Rpb24oZGF5KVwiIDpjbGFzcz1cInt0b2RheTogaXNDdXJyZW50RGF5KGRheSl9XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+e3sgJ+S7iuWkqScgfX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PGk+e3tnZXROdW0oZGF5KX19PC9pPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiB2LWVsc2UgOmNsYXNzPVwie3RvZGF5OiBpc0N1cnJlbnREYXkoZGF5KX1cIj5cblx0XHRcdFx0XHRcdFx0XHQ8dGVtcGxhdGUgdi1pZj1cImRheTxuZXcgRGF0ZSgpXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImRpc2FibGVkXCI+e3sgZGF5LmdldERhdGUoKSB9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxuXHRcdFx0XHRcdFx0XHRcdDx0ZW1wbGF0ZSB2LWVsc2U+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBAY2xpY2s9XCJjbGlja0FjdGlvbihkYXkpXCI+e3sgZGF5LmdldERhdGUoKSB9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwibnVtc1wiPnt7Z2V0TnVtKGRheSl9fTwvaT5cblx0XHRcdFx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0Y3VycmVudERhdGU6IHtcblx0XHRcdFx0XHRcdGN1cnJlbnREYXk6IG51bGwsXG5cdFx0XHRcdFx0XHRjdXJyZW50TW9udGg6IG51bGwsXG5cdFx0XHRcdFx0XHRjdXJyZW50WWVhcjogbnVsbCxcblx0XHRcdFx0XHRcdGN1cnJlbnRXZWVrOiBudWxsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRkYXRlQXJyOiBbXVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0cHJvcHM6IFsnYXJvdWQnLCAnY2xpY2tBY3Rpb24nLCAnbnVtcycsICdzZWxlY3REYXRlJ10sXG5cdFx0XHRjb21wdXRlZDoge1xuXG5cdFx0XHR9LFxuXHRcdFx0Y3JlYXRlZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGZvcih2YXIgeCA9IDA7IHggPCB0aGlzLmFyb3VkOyB4KyspIHtcblx0XHRcdFx0XHR2YXIgZGF5cyA9IHRoaXMuY2FsZW5kYXJJbml0KHRoaXMuY3VycmVudERhdGUuY3VycmVudFllYXIsIHRoaXMuY3VycmVudERhdGUuY3VycmVudE1vbnRoKTtcblx0XHRcdFx0XHR2YXIgdGltZU9iaiA9IHtcblx0XHRcdFx0XHRcdHk6IHRoaXMuY3VycmVudERhdGUuY3VycmVudFllYXIsXG5cdFx0XHRcdFx0XHRtOiB0aGlzLmN1cnJlbnREYXRlLmN1cnJlbnRNb250aCxcblx0XHRcdFx0XHRcdGRheXM6IGRheXNcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHRoaXMuZGF0ZUFyci5wdXNoKHRpbWVPYmopO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0bWV0aG9kczoge1xuXHRcdFx0XHRpc0N1cnJlbnREYXk6IGZ1bmN0aW9uKGRheSkge1xuXHRcdFx0XHRcdGxldCBkID0gdGhpcy5zZWxlY3REYXRlO1xuXHRcdFx0XHRcdGlmKGQgIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGRheS5nZXRGdWxsWWVhcigpID09IGQuZ2V0RnVsbFllYXIoKSAmJiBkYXkuZ2V0TW9udGgoKSA9PSBkLmdldE1vbnRoKCkgJiYgZGF5LmdldERhdGUoKSA9PSBkLmdldERhdGUoKSA/IHRydWUgOiBmYWxzZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGRheS5nZXRGdWxsWWVhcigpID09IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAmJiBkYXkuZ2V0TW9udGgoKSA9PSBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgJiYgZGF5LmdldERhdGUoKSA9PSBuZXcgRGF0ZSgpLmdldERhdGUoKSA/IHRydWUgOiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGdldE51bTogZnVuY3Rpb24oZGF0ZSkge1xuXHRcdFx0XHRcdHZhciBsYXN0RGF5ID0gdGhpcy5udW1zLmxlbmd0aCAmJiB0aGlzLm51bXNbdGhpcy5udW1zLmxlbmd0aCAtIDFdLnJlVHJhdmVsRGF0ZTtcblx0XHRcdFx0XHR2YXIgZGF5ID0gdGhpcy5mb3JtYXREYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgZGF0ZS5nZXREYXRlKCkpO1xuXHRcdFx0XHRcdGlmKGRheSA+IGxhc3REYXkpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKDEpO1xuXHRcdFx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmb3IodmFyIHggaW4gdGhpcy5udW1zKSB7XG5cdFx0XHRcdFx0XHRpZih0aGlzLm51bXNbeF0ucmVUcmF2ZWxEYXRlID09IGRheSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gJ+WJqScgKyB0aGlzLm51bXNbeF0uYXZhaWxhYmxlQW1vdW50ICsgJ+S6uic7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRpc1RvZGF5OiBmdW5jdGlvbihkYXkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZGF5LmdldEZ1bGxZZWFyKCkgPT0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpICYmIGRheS5nZXRNb250aCgpID09IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSAmJiBkYXkuZ2V0RGF0ZSgpID09IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRnZXREYXk6IGZ1bmN0aW9uKGRhdGUpIHtcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnREYXRlLmN1cnJlbnREYXkgPSBkYXRlLmdldERhdGUoKTtcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnREYXRlLmN1cnJlbnRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdFx0XHRcdHRoaXMuY3VycmVudERhdGUuY3VycmVudE1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnREYXRlLmN1cnJlbnRXZWVrID0gZGF0ZS5nZXREYXkoKSArIDE7XG5cdFx0XHRcdFx0aWYodGhpcy5jdXJyZW50RGF0ZS5jdXJyZW50V2VlayA9PSAwKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnREYXRlLmN1cnJlbnRXZWVrID0gNztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZvcm1hdERhdGU6IGZ1bmN0aW9uKHllYXIsIG1vbnRoLCBkYXkpIHtcblx0XHRcdFx0XHR2YXIgeSA9IHllYXI7XG5cdFx0XHRcdFx0dmFyIG0gPSBtb250aDtcblx0XHRcdFx0XHRpZihtIDwgMTApIG0gPSBcIjBcIiArIG07XG5cdFx0XHRcdFx0dmFyIGQgPSBkYXk7XG5cdFx0XHRcdFx0aWYoZCA8IDEwKSBkID0gXCIwXCIgKyBkO1xuXHRcdFx0XHRcdHJldHVybiB5ICsgXCItXCIgKyBtICsgXCItXCIgKyBkXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGNhbGVuZGFySW5pdDogZnVuY3Rpb24oeWVhciwgbW9udGgpIHtcblx0XHRcdFx0XHR2YXIgZGF0ZSwgZDtcblx0XHRcdFx0XHR2YXIgZGF5cyA9IFtdO1xuXHRcdFx0XHRcdGlmKHllYXIgPT0gbnVsbCB8fCBtb250aCA9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHR2YXIgX2RhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0XHRcdFx0ZCA9IG5ldyBEYXRlKF9kYXRlLmdldEZ1bGxZZWFyKCksIF9kYXRlLmdldE1vbnRoKCkgLSAxLCAxKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGQuc2V0RGF0ZSg0Mik7XG5cdFx0XHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKGQuZ2V0RnVsbFllYXIoKSwgZC5nZXRNb250aCgpLCAxKTtcblx0XHRcdFx0XHR0aGlzLmdldERheShkYXRlKTtcblx0XHRcdFx0XHRmb3IodmFyIGkgPSB0aGlzLmN1cnJlbnREYXRlLmN1cnJlbnRXZWVrIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0XHRcdHZhciBkID0gbmV3IERhdGUodGhpcy5jdXJyZW50RGF0ZS5jdXJyZW50WWVhciwgdGhpcy5jdXJyZW50RGF0ZS5jdXJyZW50TW9udGggLSAxLCB0aGlzLmN1cnJlbnREYXRlLmN1cnJlbnREYXkpO1xuXHRcdFx0XHRcdFx0ZC5zZXREYXRlKGQuZ2V0RGF0ZSgpIC0gaSk7XG5cdFx0XHRcdFx0XHRkYXlzLnB1c2goZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvcih2YXIgaSA9IDE7IGkgPD0gNDIgLSB0aGlzLmN1cnJlbnREYXRlLmN1cnJlbnRXZWVrOyBpKyspIHtcblx0XHRcdFx0XHRcdHZhciBkID0gbmV3IERhdGUodGhpcy5jdXJyZW50RGF0ZS5jdXJyZW50WWVhciwgdGhpcy5jdXJyZW50RGF0ZS5jdXJyZW50TW9udGggLSAxLCB0aGlzLmN1cnJlbnREYXRlLmN1cnJlbnREYXkpO1xuXHRcdFx0XHRcdFx0ZC5zZXREYXRlKGQuZ2V0RGF0ZSgpICsgaSk7XG5cdFx0XHRcdFx0XHRkYXlzLnB1c2goZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBkYXlzO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQvKnNlbGVjdDogZnVuY3Rpb24oZGF0ZSkge1xuXHRcdFx0XHRcdGFsZXJ0KHRoaXMuZm9ybWF0RGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIGRhdGUuZ2V0RGF0ZSgpKSk7XG5cdFx0XHRcdH0sKi9cblx0XHRcdH0sXG5cblx0fVxuPC9zY3JpcHQ+XG48c3R5bGUgbGFuZz1cInNhc3NcIiBzY29wZWQ+XG5cdC50b2RheSB7XG5cdFx0LypweCovXG5cdFx0aGVpZ2h0OiA4NnB4O1xuXHRcdGNvbG9yOiAjRkZGRkZGO1xuXHRcdGJhY2tncm91bmQ6ICMzN0I3RkE7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcblx0fVxuXHRcblx0LmNhbGVuZGFyLWxpc3Qge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdH1cblx0XG5cdC5jYWxlbmRhciB7XG5cdFx0cGFkZGluZy10b3A6IDAuMjdyZW07XG5cdH1cblx0XG5cdC53ZWVrIHtcblx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0ei1pbmRleDogNTA7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0YmFja2dyb3VuZDogI0Y5RjhGODtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblx0XHRsaSB7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRsaW5lLWhlaWdodDogNDBweDtcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0XHRmb250LXNpemU6IDI1LjdweDtcblx0XHRcdC8qcHgqL1xuXHRcdFx0Zm9udC13ZWlnaHQ6IG1lZGl1bTtcblx0XHR9XG5cdH1cblx0XG5cdC5jYWxlbmRhci1pdGVtIHtcblx0XHQmOm50aC1vZi10eXBlKDEpIHtcblx0XHRcdG1hcmdpbi10b3A6IDQwcHg7XG5cdFx0fVxuXHRcdHBhZGRpbmctYm90dG9tOiAwLjFyZW07XG5cdFx0LmNhbGVuZGFyLWhlYWRlciB7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRmb250LXNpemU6IDI4cHg7XG5cdFx0XHQvKnB4Ki9cblx0XHRcdGNvbG9yOiAjMzMzMzMzO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IG1lZGl1bTtcblx0XHRcdHBhZGRpbmc6IDIwcHggMCAxMHB4IDA7XG5cdFx0fVxuXHRcdC5jYWxlbmRhci1ib2R5IHtcblx0XHRcdHVsIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblx0XHRcdFx0bGkge1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRoZWlnaHQ6IDg2cHg7XG5cdFx0XHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IG1lZGl1bTtcblx0XHRcdFx0XHRjb2xvcjogIzc5Nzk3OTtcblx0XHRcdFx0XHR3aWR0aDogMTQuMjglO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdGRpdiB7XG5cdFx0XHRcdFx0XHQvKnB4Ki9cblx0XHRcdFx0XHRcdGhlaWdodDogODZweDtcblx0XHRcdFx0XHRcdHNwYW4ge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDI1LjdweDtcblx0XHRcdFx0XHRcdFx0LypweCovXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogNDZweDtcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDM5LjYzcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRcdFx0XHQvKnB4Ki9cblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogNDBweDtcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDI1cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQubnVtcyB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjMzdCN0ZBO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRzcGFuW2NsYXNzPWRpc2FibGVkXSB7XG5cdFx0XHRcdFx0Y29sb3I6ICNDQ0NDQ0M7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNhbGVuZGFyLnZ1ZT9iOTM0YTcyOCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdudi1oZWFkJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBhZ2UtbmFtZVwiOiBfdm0uaGVhZFRpdC50YWIxLFxuICAgICAgXCJiYWNrLXR5cGVcIjogX3ZtLmhlYWRUaXQuYmFja1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1iXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmFzZUluZm9cIlxuICB9LCBbX2MoJ3AnLCBbX3ZtLl92KFwi5o6l5py65pel5pyf77yaXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoX3ZtLl9zKF92bS5kYXRhQXJyRGV0YS50cmF2ZWxEYXRlKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfdm0uX3YoXCLmjqXmnLrlnLDngrnvvJpcIiksIF9jKCdzcGFuJywgW192bS5fdihfdm0uX3MoX3ZtLmRhdGFBcnJEZXRhLmFkZHJlc3MpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW192bS5fdihcIumihOiuouepuuS9je+8mlwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KF92bS5fcyhfdm0uZGF0YUFyckRldGEucGVyc29uQW1vdW50KSArIFwi5Lq6XCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmxpZ2h0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5mb3JtXCJcbiAgfSwgW19jKCdoNCcsIFtfdm0uX3YoXCLor7floavlhpnml4XooYzogIXkv6Hmga9cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3VsJywgX3ZtLl9sKChfdm0uZGF0YUFyclRyYXZlbCksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ2xpJywgW19jKCdzcGFuJywge30pLCBfdm0uX3YoX3ZtLl9zKGl0ZW0uZmlyc3ROYW1lKSArIF92bS5fcyhpdGVtLmxhc3ROYW1lKSArIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XCIpLCBfYygnc3BhbicsIFsoaXRlbS5zdGF0ZSA9PSAzKSA/IFtfYygnZW0nKSwgX3ZtLl92KF92bS5fcyhfdm0uX2YoXCJpbmZvclRyYXZzdGFcIikoaXRlbS5zdGF0ZSkpICsgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcIildIDogW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidG9cIjoge1xuICAgICAgICAgIHBhdGg6ICd0cmF2ZWxJbmZvcm1hdGlvbidcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnZW0nLCB7XG4gICAgICBjbGFzczogW2l0ZW0uc3RhdGUgPT0gMSA/ICdsYXN0YnRuJyA6ICcnXVxuICAgIH0pLCBfdm0uX3YoX3ZtLl9zKF92bS5fZihcImluZm9yVHJhdnN0YVwiKShpdGVtLnN0YXRlKSkpLCBfYygnaScpXSldXSwgMildKVxuICB9KSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJub3dTdHVcIlxuICB9LCBbX3ZtLl92KFwi5b2T5YmN5Ye66KGM5Lq65pWwXCIgKyBfdm0uX3MoX3ZtLmRhdGFBcnIuc2l6ZSkgKyBcIuS6uu+8jOaciVwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicmVkXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmRhdGFBcnIucGVyc29uQ291bnQpICsgXCLkurpcIildKSwgX3ZtLl92KFwi5b6F5a6M5ZaE5L+h5oGvXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb21taXRlc3FcIlxuICB9LCBbX3ZtLl92KFwi5o+Q5Lqk56Gu6K6k55Sz6K+3XCIpXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmxpZ2h0XCJcbiAgfSwgW19jKCdoNCcsIFtfdm0uX3YoXCLoiKrnj63pooTlrprnhafniYdcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZsaWdodFBob3RvXCJcbiAgfSwgW19jKCdsaScpLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWRkUGhvdG9cIlxuICB9LCBbX3ZtLl92KFwiK1wiKV0pXSldKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMjg4YzUxZGZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjEwLjAuMkB2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMjg4YzUxZGYhLi9+Ly4xMC4wLjJAdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3ZpZXdzL2NvbXBsZXRlZEluZm8udnVlXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi4wLjAtYmV0YS40QGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9sb2FkZXIuanM/e1wib21pdFwiOjEsXCJyZW1vdmVcIjp0cnVlfSEuL34vLjEuMC4wQHZ1ZS1zdHlsZS1sb2FkZXIhLi9+Ly4wLjI2LjFAY3NzLWxvYWRlciEuL34vLjEwLjAuMkB2dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMjg4YzUxZGYmc2NvcGVkPXRydWUhLi9+Ly4wLjEuN0BweDJyZW0tbG9hZGVyP3JlbVVuaXQ9NjUmcmVtUHJlY2lzaW9uPTghLi9+Ly40LjEuMUBzYXNzLWxvYWRlciEuL34vLjEwLjAuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3ZpZXdzL2NvbXBsZXRlZEluZm8udnVlXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCI8c3R5bGUgbGFuZz1cInNhc3NcIiBzY29wZWQ+XG5cdEBtaXhpbiBteXBhZGRpbmcge1xuXHRcdHBhZGRpbmc6IDIwcHg7XG5cdH1cblx0XG5cdC5iYXNlSW5mbyB7XG5cdFx0QGluY2x1ZGUgbXlwYWRkaW5nO1xuXHRcdHAge1xuXHRcdFx0Zm9udC1zaXplOiAyNnB4O1xuXHRcdFx0LypweCovXG5cdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdHBhZGRpbmctdG9wOiAxMHB4O1xuXHRcdH1cblx0fVxuXHRcblx0LmZsaWdodCB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0QGluY2x1ZGUgbXlwYWRkaW5nO1xuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdFx0Jjo6YWZ0ZXIge1xuXHRcdFx0Y29udGVudDogJyc7XG5cdFx0XHRoZWlnaHQ6IDA7XG5cdFx0XHRjbGVhcjogYm90aDtcblx0XHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdH1cblx0XHRoNCB7XG5cdFx0XHRmb250LXNpemU6IDI2cHg7XG5cdFx0XHQvKnB4Ki9cblx0XHRcdGNvbG9yOiAjMzMzO1xuXHRcdFx0cGFkZGluZy1ib3R0b206IDMwcHg7XG5cdFx0fVxuXHRcdC5mbGlnaHRQaG90byB7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRtYXJnaW4tbGVmdDogLTIwcHg7XG5cdFx0XHRsaSB7XG5cdFx0XHRcdHdpZHRoOiAxMzRweDtcblx0XHRcdFx0aGVpZ2h0OiAxMzRweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRib3JkZXI6IHNvbGlkIDFweCAjOTc5Nzk3O1xuXHRcdFx0XHQvKm5vKi9cblx0XHRcdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAyMHB4O1xuXHRcdFx0XHQuYWRkUGhvdG8ge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMTRweDtcblx0XHRcdFx0XHRmb250LXNpemU6IDcwcHg7XG5cdFx0XHRcdFx0Y29sb3I6ICNkOGQ4ZDg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdC5ub3dTdHUge1xuXHRcdEBpbmNsdWRlIG15cGFkZGluZztcblx0XHRmb250LXNpemU6IDI2cHg7XG5cdFx0LypweCovXG5cdFx0Y29sb3I6ICM2NjY7XG5cdH1cblx0XG5cdC5jb21taXRlc3Ege1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiA1MCU7XG5cdFx0Ym90dG9tOiA0MHB4O1xuXHRcdHdpZHRoOiA1MjBweDtcblx0XHRoZWlnaHQ6IDg4cHg7XG5cdFx0bWFyZ2luLWxlZnQ6IC0yNjBweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bGluZS1oZWlnaHQ6IDg4cHg7XG5cdFx0YmFja2dyb3VuZDogIzM3QjdGQTtcblx0XHRib3JkZXItcmFkaXVzOiAxMDBweDtcblx0XHRmb250LXNpemU6IDMycHg7XG5cdFx0LypweCovXG5cdFx0Y29sb3I6ICNmZmY7XG5cdH1cblx0LmluZm9ybSB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRwYWRkaW5nOiAwIDIwcHg7XG5cdFx0bWFyZ2luOiAyMHB4IDA7XG5cdFx0bGkge1xuXHRcdFx0aGVpZ2h0OiAxMThweDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAxMThweDtcblx0XHRcdGZvbnQtc2l6ZTogMzBweDtcblx0XHRcdC8qcHgqL1xuXHRcdFx0Y29sb3I6ICMzMzM7XG5cdFx0XHRib3JkZXItdG9wOiAxcHggc29saWQgI2YyZjJmMjsvKm5vKi9cblx0XHRcdGkge1xuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdHdpZHRoOiAxNnB4O1xuXHRcdFx0XHRoZWlnaHQ6IDI3cHg7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2NvbXBvbmVudHMvQmFjay5wbmcpIG5vLXJlcGVhdDtcblx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE0cHg7XG5cdFx0XHR9XG5cdFx0XHRzcGFuIHtcblx0XHRcdFx0ZW0ubGFzdGJ0bntcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMTBweDtcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogOHB4O1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTRweDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmMDRiMjg7XG5cdFx0XHRcdH1cblx0XHRcdFx0JjpudGgtb2YtdHlwZSgxKSB7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRcdGhlaWdodDogMzZweDtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDE4cHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0JjpudGgtb2YtdHlwZSgyKSB7XG5cdFx0XHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdFx0XHRcdGNvbG9yOiM4ODg4ODg7XG5cdFx0XHRcdFx0YXtcblx0XHRcdFx0XHRcdGNvbG9yOiM4ODg4ODg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvKiYuY2lyY2xlQmcgeyovXG5cdFx0XHRcdC5jaXJjbGVCZyB7XG5cdFx0XHRcdFx0JjpudGgtb2YtdHlwZSgxKSB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9jb21wb25lbnRzL3llc19wcmVAMngucG5nKSBuby1yZXBlYXQ7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcblx0XHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdC8qfSovXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC5yZWR7XG5cdFx0Y29sb3I6I2VjNTM0Zjtcblx0fVxuXHQubWJ7bWFyZ2luLWJvdHRvbToxNTBweDt9XG48L3N0eWxlPlxuPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDwhLS0g5YWo5bGAaGVhZGVyIC0tPlxuXHRcdDxudi1oZWFkIDpwYWdlLW5hbWU9XCJoZWFkVGl0LnRhYjFcIiA6YmFjay10eXBlPVwiaGVhZFRpdC5iYWNrXCI+PC9udi1oZWFkPlxuXHRcdDxzZWN0aW9uIGNsYXNzPVwibWJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJiYXNlSW5mb1wiPlxuXHRcdFx0XHQ8cD7mjqXmnLrml6XmnJ/vvJo8c3Bhbj57e2RhdGFBcnJEZXRhLnRyYXZlbERhdGV9fTwvc3Bhbj48L3A+XG5cdFx0XHRcdDxwPuaOpeacuuWcsOeCue+8mjxzcGFuPnt7ZGF0YUFyckRldGEuYWRkcmVzc319PC9zcGFuPjwvcD5cblx0XHRcdFx0PHA+6aKE6K6i56m65L2N77yaPHNwYW4+e3tkYXRhQXJyRGV0YS5wZXJzb25BbW91bnR9feS6ujwvc3Bhbj48L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJmbGlnaHRcIj5cblx0XHRcdFx0PGg0PuiIquePremihOWumueFp+eJhzwvaDQ+XG5cdFx0XHRcdDx1bCBjbGFzcz1cImZsaWdodFBob3RvXCI+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJhZGRQaG90b1wiPis8L3NwYW4+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImZsaWdodFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5mb3JtXCI+XG5cdFx0XHRcdFx0PGg0Puivt+Whq+WGmeaXheihjOiAheS/oeaBrzwvaDQ+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0PGxpIHYtZm9yPVwiaXRlbSBpbiBkYXRhQXJyVHJhdmVsXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiXCI+PC9zcGFuPnt7aXRlbS5maXJzdE5hbWV9fXt7aXRlbS5sYXN0TmFtZX19XG5cdFx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDx0ZW1wbGF0ZSB2LWlmPVwiaXRlbS5zdGF0ZT09M1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGVtPjwvZW0+e3tpdGVtLnN0YXRlIHwgaW5mb3JUcmF2c3RhfX1cblx0XHRcdFx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxuXHRcdFx0XHRcdFx0XHRcdDx0ZW1wbGF0ZSB2LWVsc2U+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cm91dGVyLWxpbmsgOnRvPVwieyBwYXRoIDogJ3RyYXZlbEluZm9ybWF0aW9uJyB9XCIgPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGVtIDpjbGFzcz1cIltpdGVtLnN0YXRlPT0xPydsYXN0YnRuJzonJ11cIj48L2VtPnt7aXRlbS5zdGF0ZSB8IGluZm9yVHJhdnN0YX19PGk+PC9pPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9yb3V0ZXItbGluaz5cblx0XHRcdFx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8cCBjbGFzcz1cIm5vd1N0dVwiPuW9k+WJjeWHuuihjOS6uuaVsHt7ZGF0YUFyci5zaXplfX3kurrvvIzmnIk8c3BhbiBjbGFzcz1cInJlZFwiPnt7ZGF0YUFyci5wZXJzb25Db3VudH195Lq6PC9zcGFuPuW+heWujOWWhOS/oeaBrzwvcD5cblx0XHQ8L3NlY3Rpb24+XG5cdFx0PGJ1dHRvbiBjbGFzcz1cImNvbW1pdGVzcVwiPuaPkOS6pOehruiupOeUs+ivtzwvYnV0dG9uPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuXHR2YXIgXyQgPSByZXF1aXJlKCcuLi9saWJzL3V0aWxzJyk7XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGhlYWRUaXQ6IHtcblx0XHRcdFx0XHRcdHRhYjE6ICforqLljZXkv6Hmga/or6bmg4UnLFxuXHRcdFx0XHRcdFx0YmFjazogJ29rJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZGF0YUFycjoge30sXG5cdFx0XHRcdFx0ZGF0YUFyckRldGE6IHt9LFxuXHRcdFx0XHRcdGRhdGFBcnJUcmF2ZWw6e30sXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRjcmVhdGVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0IG1lID0gdGhpcztcblx0XHRcdFx0XyQubXlBamF4KHtcblx0XHRcdFx0XHRtb2RhbHR5cGU6IDIsIC8vMeS4uumXqueOsOahhiwy5Li66Ieq5a6a5LmJ5qGGXG5cdFx0XHRcdFx0dXJsOiAnYXBpL3RyYXZlbC90cmF2ZWxjYXJkL3RyYXZlbE9yZGVyRGV0YWlsUXVlcnkuanNvbicsXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0J3RyYXZlbENvZGUnOiBtZS4kcm91dGUucXVlcnkudHJhdmVsQ29kZSxcblx0XHRcdFx0XHRcdCdvcmRlck51bSc6IG1lLiRyb3V0ZS5xdWVyeS5vcmRlck51bVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oc3RyKSB7XG5cdFx0XHRcdFx0XHRpZihzdHIucmVzdWx0LmNvZGUgPT0gXCIxMDAwXCIpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cobWUuJHJvdXRlLnF1ZXJ5LnRyYXZlbENvZGUpO1xuXHRcdFx0XHRcdFx0XHRtZS5kYXRhQXJyRGV0YSA9IHN0ci5kYXRhLnRyYXZlbE9yZGVyRGV0YWlsO1xuXHRcdFx0XHRcdFx0XHRtZS5kYXRhQXJyID1zdHIuZGF0YTtcblx0XHRcdFx0XHRcdFx0bWUuZGF0YUFyclRyYXZlbCA9IHN0ci5kYXRhLnBlcnNvbk9yZGVyTGlzdDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0Y29tcG9uZW50czoge1xuXHRcdFx0XHRcIm52SGVhZFwiOiByZXF1aXJlKCcuLi9jb21wb25lbnRzL2hlYWRlci52dWUnKSxcblx0XHRcdFx0XCJjYWxlbmRhckVsXCI6IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvY2FsZW5kYXIudnVlJyksXG5cdFx0XHR9LFxuXHR9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcGxldGVkSW5mby52dWU/OTZjZWQ5NWEiXSwic291cmNlUm9vdCI6IiJ9