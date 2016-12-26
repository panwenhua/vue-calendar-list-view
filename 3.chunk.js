webpackJsonp([3],{

/***/ 57:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(92)

/* script */
__vue_exports__ = __webpack_require__(98)

/* template */
var __vue_template__ = __webpack_require__(85)
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
__vue_options__.__file = "C:\\Users\\panwenhua\\Documents\\HBuilderProject\\vue-CalendarListView\\src\\views\\plan.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7455595a"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7455595a", __vue_options__)
  } else {
    hotAPI.reload("data-v-7455595a", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] plan.vue: functional components are not supported and should be defined in plain js files using render functions.")}

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

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('nv-head', {
    attrs: {
      "page-name": _vm.headTit.tab1,
      "back-type": _vm.headTit.back,
      "click-btn": _vm.headTit.right,
      "click-action": _vm.clickRight
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "sy_main",
    attrs: {
      "id": "wrapper"
    }
  }, [_c('ul', [_c('li', {
    on: {
      "click": _vm.openCalendar
    }
  }, [_c('span', {
    staticClass: "item"
  }, [_vm._v("出发日期")]), _vm._v(" "), _c('span', {
    staticClass: "result"
  }, [_vm._v(_vm._s(_vm.getCurrentDate))]), _vm._v(" "), _c('span', {
    staticClass: "select"
  }, [_vm._v("请选择>")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "tag": "li",
      "to": "/travelInformation"
    }
  }, [_c('span', {
    staticClass: "item"
  }, [_vm._v("出行人数")]), _vm._v(" "), _c('span', {
    staticClass: "result",
    domProps: {
      "textContent": _vm._s(_vm.getPepoleNum)
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "select"
  }, [_vm._v("请选择>")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "tag": "li",
      "to": "/travelCard"
    }
  }, [_c('span', {
    staticClass: "item"
  }, [_vm._v("旅游卡券")]), _vm._v(" "), _c('span', {
    staticClass: "result",
    domProps: {
      "textContent": _vm._s(_vm.getCardNum)
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "select"
  }, [_vm._v("请选择>")])])], 1), _vm._v(" "), _c('p', {
    staticClass: "tips"
  }, [_vm._v("旅行卡不足，请绑定更多旅行卡")]), _vm._v(" "), _c('button', {
    staticClass: "submitPlan"
  }, [_vm._v("提交旅行计划")]), _vm._v(" "), _c('p', {
    staticClass: "tips2"
  }, [_vm._v("说明：最多可绑定10张巴厘岛vip权益卡，超过10张请联系客服4000-360-665，每次出行将消耗所绑定的全部vip权益卡。出行旅客信息提交后，蛋壳旅行会与您电话联系确认出行人次与时间。提交完善护照、机票信息后，即可按计划出行。")])]), _vm._v(" "), _c('div', {
    staticClass: "calendar",
    staticStyle: {
      "position": "fixed",
      "z-index": "999",
      "bottom": "0px"
    },
    style: ({
      display: _vm.calendar.open ? 'block' : 'none'
    })
  }, [_c('nv-head', {
    attrs: {
      "page-name": '选择出行日期',
      "back-type": 'ok',
      "back-action": _vm.closeCalendar
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "calendaWrap"
  }, [_c('calendar-el', {
    attrs: {
      "aroud": _vm.calendar.aroud,
      "click-action": _vm.setCurrentDate,
      "nums": _vm.calendar.nums,
      "select-date": _vm.currentDate
    }
  })], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7455595a", module.exports)
  }
}

/***/ },

/***/ 92:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 98:
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

var _$ = __webpack_require__(66);
exports.default = {
	data: function data() {
		return {
			headTit: {
				tab1: '选择出行日期',
				back: 'ok',
				right: '历史订单'
			},
			calendar: {
				open: false,
				aroud: 12,
				nums: []
			},
			currentDate: null,
			pepoleNum: 0,
			cardNum: 1
		};
	},

	computed: {
		getCardNum: function getCardNum() {
			return this.cardNum != null && this.cardNum + '张';
		},
		getPepoleNum: function getPepoleNum() {
			return this.pepoleNum != null && this.pepoleNum + '人';
		},
		getCurrentDate: function getCurrentDate() {
			var d = this.currentDate;
			if (d) {
				return this.formatDate(d.getFullYear(), d.getMonth() + 1, d.getDate());
			} else {
				var _d = new Date();
				return this.formatDate(_d.getFullYear(), _d.getMonth() + 1, _d.getDate());
			}
		}
	},
	created: function created() {},
	methods: {
		clickRight: function clickRight() {
			this.$router.push({
				path: 'historyorder'
			});
		},
		openCalendar: function openCalendar() {
			this.getCalendarAndMum();
			this.calendar.open = true;
		},
		closeCalendar: function closeCalendar() {
			this.calendar.open = false;
		},
		formatDate: function formatDate(year, month, day) {
			var y = year;
			var m = month;
			if (m < 10) m = "0" + m;
			var d = day;
			if (d < 10) d = "0" + d;
			return y + "-" + m + "-" + d;
		},
		setCurrentDate: function setCurrentDate(d) {
			this.currentDate = d;
			this.closeCalendar();
		},
		getCalendarAndMum: function getCalendarAndMum() {
			var me = this;
			_$.myAjax({
				modaltype: 2, //1为闪现框,2为自定义框
				url: 'api/travel/travelcard/stockCardQuery.json',
				data: {
					travelCode: 222,
					month: me.aroud },
				success: function success(str) {
					if (str.result.code == "1000") {
						me.nums = str.data;
					} else {}
				}
			});
		}
	},
	components: {
		"nvHead": __webpack_require__(61),
		"calendarEl": __webpack_require__(67)
	}
};

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGxhbi52dWUiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4wLjFAd2VicGFjay16ZXB0by9pbmRleC5qcz80NmYwKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnZ1ZT85MjEzKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnZ1ZT9hZDBlKioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci52dWU/YWJhMyoqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjYuMEBibHVlaW1wLW1kNS9qcy9tZDUuanM/Yzc0YSoqIiwid2VicGFjazovLy9oZWFkZXIudnVlP2JkOTkqKiIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy91dGlscy5qcz9jMzE3KioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FsZW5kYXIudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhbGVuZGFyLnZ1ZT84NDc4KioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhbGVuZGFyLnZ1ZT83ZDMwKioqIiwid2VicGFjazovLy9jYWxlbmRhci52dWU/ZmU4NCoqIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wbGFuLnZ1ZT81ODc0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wbGFuLnZ1ZT82YzU1Iiwid2VicGFjazovLy9wbGFuLnZ1ZSJdLCJuYW1lcyI6WyJtZDUiLCJyZXF1aXJlIiwiZ2V0Q2hlY2siLCJjaGVja0VtYWlsIiwidmFsIiwiZmlsdGVyIiwidGVzdCIsImNoZWNrUGhvbmUiLCJjaGVja1Bhc3N3b3JkIiwiY2hlY2tJT1MiLCJ1IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaXNpT1MiLCJtYXRjaCIsImNoZWNrV2VjaGF0IiwidWEiLCJ3aW5kb3ciLCJ0b0xvd2VyQ2FzZSIsImNoZWNrTG9naW4iLCJzdHJTdG9yZURhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiQ29va2llIiwicmVhZCIsInNwbGl0IiwibGVuZ3RoIiwibG9jYWxfaXAiLCJsb2NhbF9taSIsIm15QWpheCIsImdldFJhbmRvbSIsImd1aWQiLCJpIiwibiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiZm10RGF0ZSIsImRhdGUiLCJmbXQiLCJvIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImdldE1pbGxpc2Vjb25kcyIsInJlcGxhY2UiLCJSZWdFeHAiLCIkMSIsImdldEZ1bGxZZWFyIiwic3Vic3RyIiwiayIsIk1pbGxpc2Vjb25kVG9EYXRlIiwibXNkIiwidGltZSIsInBhcnNlRmxvYXQiLCJzdHIiLCJwYXJzZUludCIsInNlbmRDb2RlIiwiYnRuY2ZnIiwiZGZ3YWl0Iiwid2FpdCIsIl90aGlzIiwiYmVnaW4iLCIkIiwicmVtb3ZlQXR0ciIsInJlbW92ZUNsYXNzIiwidGV4dCIsImFkZENsYXNzIiwiYXR0ciIsInNldFRpbWVvdXQiLCJteU1vZGFsIiwiZGVmYXVsdHMiLCJtb2RhbF9pZCIsIm92ZXJsYXkiLCJjbG9zZUJ1dHRvbiIsInR5cGUiLCJjbG9zZWZ1bnRpb24iLCJ0aXBjb25maWciLCJtb2RhbF90aXAiLCJtb2RhbF9jbnQiLCJ0cnVlX2J1dHRvbiIsImNhbmNlbF9idXR0b24iLCJ0cnVlX2Z1bmN0aW9uIiwiY2FuY2VsX2Z1bmN0aW9uIiwiRiIsImFwcGVuZCIsImNzcyIsImZsYXNoTW9kIiwiZnNobW9kIiwidGlwTW9kIiwidGlwbW9kIiwicmVtb3ZlIiwiTW9kYWwiLCJzaG93TW9kYWwiLCJvcHRpb25zIiwiZXh0ZW5kIiwiY2xpY2siLCJlIiwiY2xvc2VNb2RhbCIsImJvdHRvbSIsInRvcCIsInByZXZlbnREZWZhdWx0Iiwib3Blbk1vZGFsIiwiJGxpc3QiLCJoZWlnaHQiLCJ3aWR0aCIsInRpcE1vZGFsIiwiZmxhc2hJbnRvIiwiZmxhc2hPdXQiLCJvcHRzIiwiTyIsImdldHVybGlwIiwidXJsX2lwIiwiZ2V0dmFsdWUiLCJuYXRpdmVEYXRhIiwia2V5c3RyIiwiY2ZnIiwiaW9zU3RyIiwieCIsImdldGFpY2MiLCJuYXRpdmVfZGF0YSIsImxvY2FsX2FpY2MiLCJnZXRhaWNwIiwibG9jYWxfYWljcCIsImdldGJpbWkiLCJsb2NhbF9iaW1pIiwiZ2V0YmljdCIsImxvY2FsX2JpY3QiLCJnZXRiaWRuIiwibG9jYWxfYmlkbiIsImdldGJpZHYiLCJiaWR2IiwiaXNBbmRyb2lkIiwiaW5kZXhPZiIsImdldHNpZCIsImxvY2FsX3NpZCIsImdldHRpbWVzdGFtcCIsIkRhdGUiLCJwYXJzZSIsImdldGJpZG0iLCJsb2NhbF9iaWRtIiwiZ2V0YmlvdiIsImxvY2FsX2Jpb3YiLCJnZXRiaWF2IiwibG9jYWxfYmlhdiIsImdldGxvZ2luIiwiZ2V0c2lnbiIsImtleUFycnkiLCJkYXRhc3RyIiwic29ydCIsImtleVN0cjEiLCJzaWduIiwia2V5IiwidG9VcHBlckNhc2UiLCJhbmRyb2lkIiwiaW9zIiwiZ2V0Y29kZW1lIiwianNvbm9iaiIsImNvZGUiLCJyZXN1bHQiLCJtZWFuIiwibXNnIiwiZ2V0Y29kZSIsIm1vZGFsdHlwZSIsImFzeW5jIiwiaXAiLCJ1cmwiLCJkYXRhIiwidmFsaWRhdGUiLCJzdWNjZXNzIiwiZXJyb3IiLCJvcHRpb24iLCJiZWZvcmVDcmVhdGUiLCJsb2FkYWpheCIsInN1YnN0cmluZyIsInB1c2giLCJhamF4IiwiZGF0YVR5cGUiLCJoZWFkZXJzIiwicnNwIiwibG9jYXRpb24iLCJocmVmIiwiZXJyaW5mbyIsIm15SW1hZ2UiLCJvYmoiLCJ1cGxvYWRJbWFnZSIsImZpbGUiLCJ0aGF0IiwiZmlsZXMiLCJVUkwiLCJ3ZWJraXRVUkwiLCJibG9iIiwiY3JlYXRlT2JqZWN0VVJMIiwiYmFzZTY0IiwiT3JpZW50YXRpb24iLCJpbWciLCJJbWFnZSIsInNyYyIsInJGaWx0ZXIiLCJhbGVydCIsIm9ubG9hZCIsImxpbWl0V2lkIiwidyIsInNjYWxlIiwiaCIsImN1dFdpZCIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiLCJxdWFsaXR5IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0Esc0JBQWdIOztBQUVoSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELG1EQUFtRCxJQUFJO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQztBQUNELGlDQUFpQzs7QUFFakM7Ozs7Ozs7O0FDekNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEMsaUJBQWlCLDRHQUE0RztBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCLDJCQUEyQiwwQ0FBMEMsc0JBQXNCO0FBQzNGLDJCQUEyQjtBQUMzQiwyQkFBMkIsb0RBQW9ELHNDQUFzQztBQUNySDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwrQ0FBK0Msb0NBQW9DOztBQUU1RztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxzQ0FBc0M7QUFDckY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw0QkFBNEI7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMseUNBQXlDO0FBQ25GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsYUFBYSxlQUFlOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLElBQUk7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsZUFBZTtBQUM3QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixFQUFFO0FBQ3JCLDJDQUEyQyw4Q0FBOEM7QUFDekY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWTs7QUFFdkI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsUTs7Ozs7OztBQy9pREQ7QUFDQTs7QUFFQTtBQUNBLHNCQUFnSDs7QUFFaEg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxtREFBbUQsSUFBSTtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7QUFDRCxpQ0FBaUM7O0FBRWpDOzs7Ozs7OztBQ3pDQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ2xDQSx5Qzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0JBQWtCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM1UUQ7Ozs7Ozs7b0ZBRUE7O3dDQUVBOztVQUVBO2VBRUE7QUFIQTswQkFJQTttQkFDQTt3QkFDQTtBQUNBO1VBQ0E7QUFDQTtrQ0FDQTt1Q0FDQTtXQUNBOzBDQUNBO1dBQ0E7VUFDQTtXQUNBO0FBQ0E7QUFHQTs7QUF0QkE7O3dCQXdCQTtxQ0FDQTtTQUNBO1VBQ0E7a0NBQ0E7Z0JBQ0E7ZUFDQTs7WUFHQTtBQUZBO1dBR0E7aUJBQ0E7QUFDQTtBQUNBO0FBR0E7QUFqQkE7O0FBekJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBOztBQUVBOzs7Ozs7QUFDQSxJQUFJQSxNQUFNLG1CQUFBQyxDQUFRLEVBQVIsQ0FBVjtBQUNBLElBQUlDLFdBQVc7QUFDYkMsYUFBWSxvQkFBU0MsR0FBVCxFQUFjO0FBQ3pCLE1BQUlDLFNBQVMsaUVBQWI7QUFDQSxNQUFHQSxPQUFPQyxJQUFQLENBQVlGLEdBQVosQ0FBSCxFQUFxQjtBQUNwQixVQUFPLElBQVA7QUFDQSxHQUZELE1BRU87QUFDTixVQUFPLEtBQVA7QUFDQTtBQUNELEVBUlk7QUFTYkcsYUFBWSxvQkFBU0gsR0FBVCxFQUFjO0FBQ3pCLE1BQUlDLFNBQVMsc0JBQWI7O0FBRUEsTUFBR0EsT0FBT0MsSUFBUCxDQUFZRixHQUFaLENBQUgsRUFBcUI7QUFDcEIsVUFBTyxJQUFQO0FBQ0EsR0FGRCxNQUVPO0FBQ04sVUFBTyxLQUFQO0FBQ0E7QUFDRCxFQWpCWTtBQWtCYkksZ0JBQWUsdUJBQVNKLEdBQVQsRUFBYztBQUM1QixNQUFJQyxTQUFTLHFCQUFiOztBQUVBLE1BQUdBLE9BQU9DLElBQVAsQ0FBWUYsR0FBWixDQUFILEVBQXFCO0FBQ3BCLFVBQU8sSUFBUDtBQUNBLEdBRkQsTUFFTztBQUNOLFVBQU8sS0FBUDtBQUNBO0FBQ0QsRUExQlk7QUEyQmJLLFdBQVUsb0JBQVc7QUFDcEI7QUFDQSxNQUFJQyxJQUFJQyxVQUFVQyxTQUFsQjtBQUNBO0FBQ0EsTUFBSUMsUUFBUSxDQUFDLENBQUNILEVBQUVJLEtBQUYsQ0FBUSwrQkFBUixDQUFkLENBSm9CLENBSW9DO0FBQ3hELE1BQUdELEtBQUgsRUFBVTtBQUNULFVBQU8sSUFBUDtBQUNBLEdBRkQsTUFFTztBQUNOLFVBQU8sS0FBUDtBQUNBO0FBQ0QsRUFyQ1k7QUFzQ2JFLGNBQWEsdUJBQVc7QUFDdkIsTUFBSUMsS0FBS0MsT0FBT04sU0FBUCxDQUFpQkMsU0FBakIsQ0FBMkJNLFdBQTNCLEVBQVQ7QUFDQSxTQUFPRixHQUFHRixLQUFILENBQVMsaUJBQVQsS0FBK0IsZ0JBQXRDO0FBQ0EsRUF6Q1k7QUEwQ2JLLGFBQVksc0JBQVc7QUFDdEI7QUFDQSxNQUFJQyxlQUFlSCxPQUFPSSxZQUFQLEdBQXNCQSxhQUFhQyxPQUFiLENBQXFCLFVBQXJCLENBQXRCLEdBQXlEQyxPQUFPQyxJQUFQLENBQVksVUFBWixDQUE1RTtBQUNBLE1BQUdKLFlBQUgsRUFBaUI7QUFDaEIsT0FBR0EsYUFBYUssS0FBYixDQUFtQixHQUFuQixFQUF3QkMsTUFBeEIsSUFBa0MsQ0FBckMsRUFBd0M7QUFDdkMsUUFBSUMsV0FBV1AsZUFBZUEsYUFBYUssS0FBYixDQUFtQixHQUFuQixFQUF3QixDQUF4QixDQUFmLEdBQTRDLEVBQTNEO0FBQ0EsUUFBSUcsV0FBV1IsZUFBZUEsYUFBYUssS0FBYixDQUFtQixHQUFuQixFQUF3QixDQUF4QixDQUFmLEdBQTRDLEVBQTNEO0FBQ0EsV0FBT0UsWUFBWUUsUUFBbkI7QUFDQSxJQUpELE1BSU87QUFDTixXQUFPLElBQVA7QUFDQTtBQUNELEdBUkQsTUFRTztBQUNOLFVBQU8sS0FBUDtBQUNBO0FBRUQ7QUF6RFksQ0FBZjtBQTJEQzs7OztBQUlELElBQU1DLFlBQVksU0FBWkEsU0FBWSxHQUFXO0FBQzNCLEtBQUlDLE9BQU8sR0FBWDtBQUNBLE1BQUksSUFBSUMsSUFBSSxDQUFaLEVBQWVBLEtBQUssRUFBcEIsRUFBd0JBLEdBQXhCLEVBQTZCO0FBQzVCLE1BQUlDLElBQUlDLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQixJQUEzQixFQUFpQ0MsUUFBakMsQ0FBMEMsRUFBMUMsQ0FBUjtBQUNBTixVQUFRRSxDQUFSO0FBQ0EsTUFBSUQsS0FBSyxDQUFOLElBQWFBLEtBQUssRUFBbEIsSUFBMEJBLEtBQUssRUFBL0IsSUFBdUNBLEtBQUssRUFBL0MsRUFDQ0QsUUFBUSxHQUFSO0FBQ0Q7QUFDREEsU0FBUSxHQUFSO0FBQ0EsUUFBT0EsSUFBUDtBQUNBLENBVkY7QUFXQzs7Ozs7Ozs7QUFRRCxJQUFNTyxVQUFVLFNBQVZBLE9BQVUsQ0FBU0MsSUFBVCxFQUFlQyxHQUFmLEVBQW9CO0FBQUU7QUFDckMsS0FBSUMsSUFBSTtBQUNQLFFBQU1GLEtBQUtHLFFBQUwsS0FBa0IsQ0FEakIsRUFDb0I7QUFDM0IsUUFBTUgsS0FBS0ksT0FBTCxFQUZDLEVBRWU7QUFDdEIsUUFBTUosS0FBS0ssUUFBTCxFQUhDLEVBR2dCO0FBQ3ZCLFFBQU1MLEtBQUtNLFVBQUwsRUFKQyxFQUlrQjtBQUN6QixRQUFNTixLQUFLTyxVQUFMLEVBTEMsRUFLa0I7QUFDekIsUUFBTVosS0FBS0MsS0FBTCxDQUFXLENBQUNJLEtBQUtHLFFBQUwsS0FBa0IsQ0FBbkIsSUFBd0IsQ0FBbkMsQ0FOQyxFQU1zQztBQUM3QyxPQUFLSCxLQUFLUSxlQUFMLEVBUEUsQ0FPcUI7QUFQckIsRUFBUjtBQVNBLEtBQUcsT0FBT3pDLElBQVAsQ0FBWWtDLEdBQVosQ0FBSCxFQUNDQSxNQUFNQSxJQUFJUSxPQUFKLENBQVlDLE9BQU9DLEVBQW5CLEVBQXVCLENBQUNYLEtBQUtZLFdBQUwsS0FBcUIsRUFBdEIsRUFBMEJDLE1BQTFCLENBQWlDLElBQUlILE9BQU9DLEVBQVAsQ0FBVXhCLE1BQS9DLENBQXZCLENBQU47QUFDRCxNQUFJLElBQUkyQixDQUFSLElBQWFaLENBQWI7QUFDQyxNQUFHLElBQUlRLE1BQUosQ0FBVyxNQUFNSSxDQUFOLEdBQVUsR0FBckIsRUFBMEIvQyxJQUExQixDQUErQmtDLEdBQS9CLENBQUgsRUFDQ0EsTUFBTUEsSUFBSVEsT0FBSixDQUFZQyxPQUFPQyxFQUFuQixFQUF3QkQsT0FBT0MsRUFBUCxDQUFVeEIsTUFBVixJQUFvQixDQUFyQixHQUEyQmUsRUFBRVksQ0FBRixDQUEzQixHQUFvQyxDQUFDLE9BQU9aLEVBQUVZLENBQUYsQ0FBUixFQUFjRCxNQUFkLENBQXFCLENBQUMsS0FBS1gsRUFBRVksQ0FBRixDQUFOLEVBQVkzQixNQUFqQyxDQUEzRCxDQUFOO0FBRkYsRUFHQSxPQUFPYyxHQUFQO0FBQ0EsQ0FoQkQ7O0FBa0JBOzs7QUFHQSxJQUFNYyxvQkFBb0IsU0FBcEJBLGlCQUFvQixDQUFTQyxHQUFULEVBQWM7QUFDdkMsS0FBSUMsT0FBT0MsV0FBV0YsR0FBWCxJQUFrQixJQUE3QjtBQUNBLEtBQUlHLE1BQU0sRUFBVjtBQUNBLEtBQUcsUUFBUUYsSUFBUixJQUFnQixNQUFNQSxJQUF6QixFQUErQjs7QUFFOUIsTUFBR0EsT0FBTyxFQUFQLElBQWFBLE9BQU8sSUFBdkIsRUFBNkI7QUFDNUJFLFNBQU1DLFNBQVNILE9BQU8sSUFBaEIsSUFBd0IsTUFBOUI7QUFDQSxHQUZELE1BRU8sSUFBR0EsUUFBUSxJQUFSLElBQWdCQSxPQUFPLEtBQTFCLEVBQWlDO0FBQ3ZDRSxTQUFNQyxTQUFTSCxPQUFPLE1BQWhCLElBQTBCLE1BQWhDO0FBQ0EsR0FGTSxNQUVBLElBQUdBLFFBQVEsS0FBUixJQUFpQkEsT0FBTyxRQUFRLEVBQW5DLEVBQXVDO0FBQzdDRSxTQUFNQyxTQUFTSCxPQUFPLE9BQWhCLElBQTJCLEtBQWpDO0FBQ0EsR0FGTSxNQUVBLElBQUdBLFFBQVEsUUFBUSxFQUFoQixJQUFzQkEsT0FBTyxRQUFRLEdBQXhDLEVBQTZDO0FBQ25ERSxTQUFNQyxTQUFTSCxRQUFRLFVBQVUsRUFBbEIsQ0FBVCxJQUFrQyxNQUF4QztBQUNBLEdBRk0sTUFFQSxJQUFHQSxRQUFRLFFBQVEsR0FBbkIsRUFBd0I7QUFDOUJFLFNBQU1DLFNBQVNILFFBQVEsVUFBVSxHQUFsQixDQUFULElBQW1DLEtBQXpDO0FBQ0EsR0FGTSxNQUVBO0FBQ05FLFNBQU1DLFNBQVNILElBQVQsSUFBaUIsS0FBdkI7QUFDQTtBQUNEO0FBQ0QsUUFBT0UsR0FBUDtBQUNBLENBcEJEO0FBcUJBLElBQU1FLFdBQVcsU0FBWEEsUUFBVyxDQUFTbkIsQ0FBVCxFQUFZO0FBQzVCLEtBQUlvQixTQUFTO0FBQ1pDLFVBQVEsRUFESSxFQUNBO0FBQ1pDLFFBQU0sRUFGTSxDQUVIO0FBRkcsRUFBYjtBQUlBLEtBQUlDLFFBQVE7QUFDWEMsU0FBTyxpQkFBVztBQUNqQixPQUFHSixPQUFPRSxJQUFQLElBQWUsQ0FBQyxDQUFuQixFQUFzQjtBQUNyQkcsTUFBRXpCLENBQUYsRUFBSzBCLFVBQUwsQ0FBZ0IsVUFBaEI7QUFDQUQsTUFBRXpCLENBQUYsRUFBSzJCLFdBQUwsQ0FBaUIsVUFBakI7QUFDQUYsTUFBRXpCLENBQUYsRUFBSzRCLElBQUwsQ0FBVSxPQUFWO0FBQ0FSLFdBQU9FLElBQVAsR0FBY0YsT0FBT0MsTUFBckI7QUFDQSxJQUxELE1BS087QUFDTkksTUFBRXpCLENBQUYsRUFBSzZCLFFBQUwsQ0FBYyxVQUFkO0FBQ0FKLE1BQUV6QixDQUFGLEVBQUs4QixJQUFMLENBQVUsVUFBVixFQUFzQixVQUF0QjtBQUNBTCxNQUFFekIsQ0FBRixFQUFLNEIsSUFBTCxDQUFVLFFBQVFSLE9BQU9FLElBQWYsR0FBc0IsR0FBaEM7QUFDQUYsV0FBT0UsSUFBUDtBQUNBUyxlQUFXLFlBQVc7QUFDckJSLFdBQU1DLEtBQU47QUFDQSxLQUZELEVBRUcsSUFGSDtBQUdBO0FBQ0Q7QUFoQlUsRUFBWjtBQWtCQSxRQUFPRCxNQUFNQyxLQUFOLEVBQVA7QUFDQSxDQXhCRDs7QUEwQkE7Ozs7O0FBS0EsSUFBTVEsVUFBVSxTQUFWQSxPQUFVLEdBQVc7QUFDekIsS0FBSUMsV0FBVztBQUNkQyxZQUFVLElBREk7QUFFZEMsV0FBUyxHQUZLO0FBR2RDLGVBQWEsSUFIQztBQUlkQyxRQUFNLENBSlEsRUFJTDtBQUNUQyxnQkFBYyx3QkFBVyxDQUFFO0FBTGIsRUFBZjtBQU9BLEtBQUlDLFlBQVksRUFBRTtBQUNqQkMsYUFBVyxNQURJLEVBQ0k7QUFDbkJDLGFBQVcsSUFGSSxFQUVFO0FBQ2pCQyxlQUFhLElBSEUsRUFHSTtBQUNuQkMsaUJBQWUsSUFKQSxFQUlNO0FBQ3JCQyxpQkFBZSx5QkFBVyxDQUFFLENBTGI7QUFNZkMsbUJBQWlCLDJCQUFXLENBQUU7QUFOZixFQUFoQjtBQVFBLEtBQUlDLElBQUk7QUFDUFgsV0FBUyxtQkFBVztBQUFFO0FBQ3JCLE9BQUlBLFVBQVVWLEVBQUUsOEJBQUYsQ0FBZDtBQUNBLE9BQUdBLEVBQUUsY0FBRixFQUFrQnhDLE1BQWxCLElBQTRCLENBQS9CLEVBQWtDO0FBQ2pDd0MsTUFBRSxNQUFGLEVBQVVzQixNQUFWLENBQWlCWixPQUFqQjtBQUNBVixNQUFFLGNBQUYsRUFBa0J1QixHQUFsQixDQUFzQjtBQUNyQixpQkFBWSxPQURTO0FBRXJCLFlBQU8sS0FGYztBQUdyQixhQUFRLEtBSGE7QUFJckIsZUFBVSxNQUpXO0FBS3JCLGNBQVMsTUFMWTtBQU1yQixtQkFBYyxNQU5PO0FBT3JCLGdCQUFXLEtBUFU7QUFRckIsZ0JBQVc7QUFSVSxLQUF0QjtBQVVBO0FBQ0QsR0FoQk07QUFpQlBDLFlBQVUsa0JBQVNoQyxHQUFULEVBQWM7QUFDdkIsT0FBSWlDLFNBQVN6QixFQUFFLDBEQUEwRFIsR0FBMUQsR0FBZ0UsUUFBbEUsQ0FBYjtBQUNBLE9BQUdRLEVBQUUsU0FBRixFQUFheEMsTUFBYixJQUF1QixDQUExQixFQUE2QjtBQUM1QndDLE1BQUUsTUFBRixFQUFVc0IsTUFBVixDQUFpQkcsTUFBakI7QUFDQSxJQUZELE1BRU87QUFDTnpCLE1BQUUsU0FBRixFQUFhRyxJQUFiLENBQWtCWCxHQUFsQjtBQUNBO0FBQ0QsR0F4Qk07QUF5QlBrQyxVQUFRLGdCQUFTbEMsR0FBVCxFQUFjO0FBQUU7QUFDdkIsT0FBR0EsSUFBSTBCLGFBQUosSUFBcUIsSUFBeEIsRUFBOEI7QUFBRTtBQUMvQixRQUFJUyxTQUFTM0IsRUFBRSw4RkFBOEZSLElBQUl1QixTQUFsRyxHQUE4RyxpRUFBOUcsR0FBa0x2QixJQUFJd0IsU0FBdEwsR0FBa00sd0dBQWxNLEdBQTZTeEIsSUFBSXlCLFdBQWpULEdBQStULGtCQUFqVSxDQUFiO0FBQ0EsSUFGRCxNQUVPO0FBQUU7QUFDUixRQUFJVSxTQUFTM0IsRUFBRSw4RkFBOEZSLElBQUl1QixTQUFsRyxHQUE4RyxpRUFBOUcsR0FBa0x2QixJQUFJd0IsU0FBdEwsR0FBa00sNEdBQWxNLEdBQWlUeEIsSUFBSTBCLGFBQXJULEdBQXFVLGtEQUFyVSxHQUEwWDFCLElBQUl5QixXQUE5WCxHQUE0WSxrQkFBOVksQ0FBYjtBQUNBO0FBQ0QsT0FBR2pCLEVBQUUsVUFBRixFQUFjeEMsTUFBZCxJQUF3QixDQUEzQixFQUE4QjtBQUFFO0FBQy9Cd0MsTUFBRSxNQUFGLEVBQVVzQixNQUFWLENBQWlCSyxNQUFqQjtBQUNBLElBRkQsTUFFTztBQUNOM0IsTUFBRSxVQUFGLEVBQWM0QixNQUFkO0FBQ0E1QixNQUFFLE1BQUYsRUFBVXNCLE1BQVYsQ0FBaUJLLE1BQWpCO0FBQ0E7QUFDRDtBQXJDTSxFQUFSO0FBdUNBLEtBQUlFLFFBQVE7QUFDWEMsYUFBVyxtQkFBU0MsT0FBVCxFQUFrQjtBQUM1QixPQUFJakMsUUFBUSxJQUFaO0FBQ0F1QixLQUFFWCxPQUFGO0FBQ0FxQixhQUFVL0IsRUFBRWdDLE1BQUYsQ0FBU3hCLFFBQVQsRUFBbUJ1QixPQUFuQixDQUFWO0FBQ0EsT0FBSXhELElBQUl3RCxPQUFSO0FBQ0EvQixLQUFFLElBQUYsRUFBUWlDLEtBQVIsQ0FBYyxVQUFTQyxDQUFULEVBQVk7QUFDekIsUUFBSXpCLFdBQVdULEVBQUUsSUFBRixFQUFRSyxJQUFSLENBQWEsTUFBYixDQUFmO0FBQ0FMLE1BQUUsY0FBRixFQUFrQmlDLEtBQWxCLENBQXdCLFlBQVc7QUFDbENuQyxXQUFNcUMsVUFBTixDQUFpQjFCLFFBQWpCO0FBQ0EsS0FGRDtBQUdBVCxNQUFFekIsRUFBRW9DLFdBQUosRUFBaUJzQixLQUFqQixDQUF1QixZQUFXO0FBQ2pDbkMsV0FBTXFDLFVBQU4sQ0FBaUIxQixRQUFqQjtBQUNBbEMsT0FBRXNDLFlBQUY7QUFDQSxLQUhEO0FBSUFiLE1BQUUsY0FBRixFQUFrQnVCLEdBQWxCLENBQXNCO0FBQ3JCLGdCQUFXLE9BRFU7QUFFckIsZ0JBQVdoRCxFQUFFbUM7QUFGUSxLQUF0QjtBQUlBVixNQUFFUyxRQUFGLEVBQVljLEdBQVosQ0FBZ0I7QUFDZixpQkFBWSxPQURHO0FBRWYsZ0JBQVcsT0FGSTtBQUdmLGdCQUFXLEtBSEk7QUFJZixlQUFVaEQsRUFBRTZELE1BQUYsR0FBVyxJQUpOO0FBS2YsWUFBTzdELEVBQUU4RCxHQUFGLEdBQVE7QUFMQSxLQUFoQjtBQU9BckMsTUFBRVMsUUFBRixFQUFZTCxRQUFaLENBQXFCLGlCQUFyQjtBQUNBO0FBQ0E4QixNQUFFSSxjQUFGO0FBQ0EsSUF2QkQ7QUF3QkEsR0E5QlU7QUErQlhDLGFBQVcsbUJBQVNSLE9BQVQsRUFBa0I7QUFDNUIsT0FBSWpDLFFBQVEsSUFBWjtBQUNBaUMsYUFBVS9CLEVBQUVnQyxNQUFGLENBQVN4QixRQUFULEVBQW1CdUIsT0FBbkIsQ0FBVjtBQUNBLE9BQUl4RCxJQUFJd0QsT0FBUjtBQUNBLE9BQUd4RCxFQUFFcUMsSUFBRixJQUFVLENBQWIsRUFBZ0I7QUFBQTtBQUNmUyxPQUFFWCxPQUFGO0FBQ0EsU0FBSUQsV0FBV2xDLEVBQUVrQyxRQUFqQjtBQUNBVCxPQUFFLGNBQUYsRUFBa0JpQyxLQUFsQixDQUF3QixZQUFXO0FBQ2xDbkMsWUFBTXFDLFVBQU4sQ0FBaUIxQixRQUFqQjtBQUNBLGFBQU8sS0FBUDtBQUNBLE1BSEQ7QUFJQVQsT0FBRXpCLEVBQUVvQyxXQUFKLEVBQWlCc0IsS0FBakIsQ0FBdUIsWUFBVztBQUNqQ25DLFlBQU1xQyxVQUFOLENBQWlCMUIsUUFBakI7QUFDQWxDLFFBQUVzQyxZQUFGO0FBQ0EsYUFBTyxLQUFQO0FBQ0EsTUFKRDtBQUtBYixPQUFFLGNBQUYsRUFBa0J1QixHQUFsQixDQUFzQjtBQUNyQixpQkFBVyxPQURVO0FBRXJCLGlCQUFXaEQsRUFBRW1DO0FBRlEsTUFBdEI7QUFJQVYsT0FBRVMsUUFBRixFQUFZYyxHQUFaLENBQWdCO0FBQ2Ysa0JBQVksT0FERztBQUVmLGlCQUFXLE9BRkk7QUFHZixpQkFBVyxLQUhJO0FBSWYsZ0JBQVVoRCxFQUFFNkQsTUFBRixHQUFXLElBSk47QUFLZixhQUFPN0QsRUFBRThELEdBQUYsR0FBUTtBQUxBLE1BQWhCO0FBT0FyQyxPQUFFUyxRQUFGLEVBQVlMLFFBQVosQ0FBcUIsaUJBQXJCO0FBdkJlO0FBd0JmLElBeEJELE1Bd0JPLElBQUc3QixFQUFFcUMsSUFBRixJQUFVLENBQWIsRUFBZ0I7QUFBRTtBQUN4QlMsTUFBRVgsT0FBRjtBQUNBLFFBQUlELFdBQVdsQyxFQUFFa0MsUUFBakI7QUFDQVQsTUFBRSxjQUFGLEVBQWtCaUMsS0FBbEIsQ0FBd0IsWUFBVztBQUNsQ25DLFdBQU1xQyxVQUFOLENBQWlCMUIsUUFBakI7QUFDQSxZQUFPLEtBQVA7QUFDQSxLQUhEO0FBSUFULE1BQUV6QixFQUFFb0MsV0FBSixFQUFpQnNCLEtBQWpCLENBQXVCLFlBQVc7QUFDakNuQyxXQUFNcUMsVUFBTixDQUFpQjFCLFFBQWpCO0FBQ0FsQyxPQUFFc0MsWUFBRjtBQUNBLFlBQU8sS0FBUDtBQUNBLEtBSkQ7O0FBTUEsUUFBSTJCLFFBQVF4QyxFQUFFUyxRQUFGLENBQVo7QUFDQStCLFVBQU1qQixHQUFOLENBQVUsU0FBVixFQUFxQixFQUFyQjtBQUNBaUIsVUFBTWpCLEdBQU4sQ0FBVSxRQUFWLEVBQW9CLENBQUNpQixNQUFNQyxNQUFOLEVBQXJCOztBQUVBekMsTUFBRSxjQUFGLEVBQWtCdUIsR0FBbEIsQ0FBc0I7QUFDckIsZ0JBQVcsT0FEVTtBQUVyQixnQkFBV2hELEVBQUVtQztBQUZRLEtBQXRCO0FBSUFWLE1BQUVTLFFBQUYsRUFBWWMsR0FBWixDQUFnQjtBQUNmLGlCQUFZLE9BREc7QUFFZixnQkFBVyxPQUZJO0FBR2YsZ0JBQVcsS0FISTtBQUlmLGVBQVVoRCxFQUFFNkQsTUFBRixHQUFXLElBSk47QUFLZixZQUFPN0QsRUFBRThELEdBQUYsR0FBUTtBQUxBLEtBQWhCO0FBT0FyQyxNQUFFUyxRQUFGLEVBQVlMLFFBQVosQ0FBcUIsbUJBQXJCO0FBRUEsSUE5Qk0sTUE4QkEsSUFBRzdCLEVBQUVxQyxJQUFGLElBQVUsQ0FBYixFQUFnQjtBQUN0QjtBQUNBLFFBQUlILFdBQVdsQyxFQUFFa0MsUUFBakI7QUFDQVQsTUFBRSxjQUFGLEVBQWtCaUMsS0FBbEIsQ0FBd0IsWUFBVztBQUNsQ25DLFdBQU1xQyxVQUFOLENBQWlCMUIsUUFBakI7QUFDQSxZQUFPLEtBQVA7QUFDQSxLQUhEO0FBSUFULE1BQUV6QixFQUFFb0MsV0FBSixFQUFpQnNCLEtBQWpCLENBQXVCLFlBQVc7QUFDakNuQyxXQUFNcUMsVUFBTixDQUFpQjFCLFFBQWpCO0FBQ0FsQyxPQUFFc0MsWUFBRjtBQUNBLFlBQU8sS0FBUDtBQUNBLEtBSkQ7O0FBTUEsUUFBSTJCLFFBQVF4QyxFQUFFUyxRQUFGLENBQVo7QUFDQStCLFVBQU1qQixHQUFOLENBQVUsU0FBVixFQUFxQixFQUFyQjtBQUNBaUIsVUFBTWpCLEdBQU4sQ0FBVSxPQUFWLEVBQW1CaUIsTUFBTUUsS0FBTixFQUFuQjs7QUFFQTFDLE1BQUUsY0FBRixFQUFrQnVCLEdBQWxCLENBQXNCO0FBQ3JCLGdCQUFXLE9BRFU7QUFFckIsZ0JBQVdoRCxFQUFFbUM7QUFGUSxLQUF0QjtBQUlBVixNQUFFUyxRQUFGLEVBQVljLEdBQVosQ0FBZ0I7QUFDZixpQkFBWSxPQURHO0FBRWYsZ0JBQVcsT0FGSTtBQUdmLGdCQUFXLEtBSEk7QUFJZixlQUFVaEQsRUFBRTZELE1BQUYsR0FBVyxJQUpOO0FBS2YsWUFBTzdELEVBQUU4RCxHQUFGLEdBQVE7QUFMQSxLQUFoQjtBQU9BckMsTUFBRVMsUUFBRixFQUFZTCxRQUFaLENBQXFCLHlCQUFyQjtBQUVBO0FBQ0QsR0F4SFU7QUF5SFh1QyxZQUFVLGtCQUFTWixPQUFULEVBQWtCO0FBQzNCLE9BQUlqQyxRQUFRLElBQVo7QUFDQXVCLEtBQUVYLE9BQUYsR0FGMkIsQ0FFZDtBQUNiLE9BQUluQyxJQUFJeUIsRUFBRWdDLE1BQUYsQ0FBU2xCLFNBQVQsRUFBb0JpQixPQUFwQixDQUFSLENBSDJCLENBR1c7QUFDdENWLEtBQUVLLE1BQUYsQ0FBU25ELENBQVQsRUFKMkIsQ0FJZDtBQUNiLE9BQUlrQyxXQUFXLFVBQWYsQ0FMMkIsQ0FLQTtBQUMzQlQsS0FBRSxjQUFGLEVBQWtCaUMsS0FBbEIsQ0FBd0IsWUFBVztBQUFFO0FBQ3BDbkMsVUFBTXFDLFVBQU4sQ0FBaUIxQixRQUFqQixFQURrQyxDQUNOO0FBQzVCbEMsTUFBRTZDLGVBQUYsQ0FBa0IsU0FBbEIsRUFGa0MsQ0FFSjtBQUM5QixJQUhEO0FBSUFwQixLQUFFLGNBQUYsRUFBa0JpQyxLQUFsQixDQUF3QixZQUFXO0FBQUU7QUFDcENuQyxVQUFNcUMsVUFBTixDQUFpQjFCLFFBQWpCLEVBRGtDLENBQ047QUFDNUJsQyxNQUFFNEMsYUFBRixHQUZrQyxDQUVmO0FBQ25CLElBSEQ7QUFJQW5CLEtBQUUsZ0JBQUYsRUFBb0JpQyxLQUFwQixDQUEwQixZQUFXO0FBQUU7QUFDdENuQyxVQUFNcUMsVUFBTixDQUFpQjFCLFFBQWpCLEVBRG9DLENBQ1I7QUFDNUJsQyxNQUFFNkMsZUFBRixDQUFrQixRQUFsQixFQUZvQyxDQUVQO0FBQzdCLElBSEQ7QUFJQXBCLEtBQUUsY0FBRixFQUFrQnVCLEdBQWxCLENBQXNCLEVBQUU7QUFDdkIsZUFBVyxPQURVO0FBRXJCLGVBQVc7QUFGVSxJQUF0QjtBQUlBdkIsS0FBRVMsUUFBRixFQUFZYyxHQUFaLENBQWdCLEVBQUU7QUFDakIsZ0JBQVksT0FERztBQUVmLGVBQVcsT0FGSTtBQUdmLGVBQVc7QUFISSxJQUFoQjtBQUtBdkIsS0FBRVMsUUFBRixFQUFZTCxRQUFaLENBQXFCLGlCQUFyQixFQTNCMkIsQ0EyQmM7QUFDekMsR0FySlU7QUFzSlgrQixjQUFZLG9CQUFTMUIsUUFBVCxFQUFtQjtBQUM5QlQsS0FBRSxjQUFGLEVBQWtCdUIsR0FBbEIsQ0FBc0IsRUFBRTtBQUN2QixlQUFXO0FBRFUsSUFBdEI7QUFHQXZCLEtBQUVTLFFBQUYsRUFBWWMsR0FBWixDQUFnQixFQUFFO0FBQ2pCLGVBQVc7QUFESSxJQUFoQjtBQUlBLEdBOUpVO0FBK0pYcUIsYUFBVyxtQkFBU3BELEdBQVQsRUFBYztBQUN4QixPQUFJTSxRQUFRLElBQVo7QUFDQXVCLEtBQUVHLFFBQUYsQ0FBV2hDLEdBQVg7QUFDQVEsS0FBRSxTQUFGLEVBQWFJLFFBQWIsQ0FBc0IsSUFBdEI7QUFDQUosS0FBRSxTQUFGLEVBQWF1QixHQUFiLENBQWlCO0FBQ2hCLGdCQUFZLE9BREk7QUFFaEIsZUFBVyxPQUZLO0FBR2hCLGVBQVc7QUFISyxJQUFqQjtBQUtBdkIsS0FBRSxTQUFGLEVBQWFJLFFBQWIsQ0FBc0IsaUJBQXRCO0FBQ0FFLGNBQVcsWUFBVztBQUNyQlIsVUFBTStDLFFBQU47QUFDQSxJQUZELEVBRUcsSUFGSDtBQUdBLEdBNUtVO0FBNktYQSxZQUFVLG9CQUFXO0FBQ3BCN0MsS0FBRSxTQUFGLEVBQWF1QixHQUFiLENBQWlCO0FBQ2hCLGVBQVc7QUFESyxJQUFqQjtBQUdBO0FBakxVLEVBQVo7QUFtTEEsUUFBT00sS0FBUDtBQUNBLENBM09GO0FBNE9DOzs7O0FBSUQsSUFBTWxFLFNBQVMsU0FBVEEsTUFBUyxDQUFTbUYsSUFBVCxFQUFlO0FBQzdCLEtBQUlDLElBQUk7QUFDUEMsWUFBVSxvQkFBVztBQUNwQixPQUFJQyxlQUFKO0FBQ0EsT0FBRyxpQkFBTyxZQUFQLElBQXVCLGlCQUFPLEtBQWpDLEVBQXdDO0FBQ3ZDQSxhQUFTLHNCQUFUO0FBQ0EsSUFGRCxNQUVPLElBQUcsaUJBQU8sTUFBUCxJQUFpQixpQkFBTyxhQUEzQixFQUEwQztBQUNoREEsYUFBUywwQkFBVDtBQUNBO0FBQ0QsVUFBT0EsTUFBUDtBQUNBLEdBVE07QUFVUEMsWUFBVSxrQkFBU0MsVUFBVCxFQUFxQkMsTUFBckIsRUFBNkI7QUFDdEMsT0FBSUMsTUFBTSxFQUFWO0FBQ0EsT0FBSUMsU0FBU0gsY0FBY0EsV0FBVzVGLEtBQVgsQ0FBaUIsR0FBakIsQ0FBM0I7QUFDQSxPQUFHK0YsTUFBSCxFQUFXO0FBQ1YsU0FBSSxJQUFJQyxDQUFSLElBQWFELE1BQWIsRUFBcUI7QUFDcEJELFNBQUlDLE9BQU9DLENBQVAsRUFBVWhHLEtBQVYsQ0FBZ0IsR0FBaEIsRUFBcUIsQ0FBckIsQ0FBSixJQUErQitGLE9BQU9DLENBQVAsRUFBVWhHLEtBQVYsQ0FBZ0IsR0FBaEIsRUFBcUIsQ0FBckIsQ0FBL0I7QUFDQTtBQUNEO0FBQ0QsVUFBTzhGLElBQUlELE1BQUosSUFBY0MsSUFBSUQsTUFBSixDQUFkLEdBQTRCLEVBQW5DO0FBQ0EsR0FuQk07QUFvQlBJLFdBQVMsbUJBQVc7QUFDbkIsT0FBSUMsY0FBY3RHLGFBQWFDLE9BQWIsQ0FBcUIsYUFBckIsQ0FBbEI7QUFDQSxPQUFJc0csYUFBYSxLQUFLUixRQUFMLENBQWNPLFdBQWQsRUFBMkIsTUFBM0IsQ0FBakI7QUFDQSxVQUFPQyxhQUFhQSxVQUFiLEdBQTBCLFVBQWpDO0FBQ0EsR0F4Qk07QUF5QlBDLFdBQVMsbUJBQVc7QUFDbkIsT0FBSUYsY0FBY3RHLGFBQWFDLE9BQWIsQ0FBcUIsYUFBckIsQ0FBbEI7QUFDQSxPQUFJd0csYUFBYSxLQUFLVixRQUFMLENBQWNPLFdBQWQsRUFBMkIsTUFBM0IsQ0FBakI7QUFDQSxVQUFPRyxhQUFhQSxVQUFiLEdBQTBCLGtDQUFqQztBQUNBLEdBN0JNO0FBOEJQQyxXQUFTLG1CQUFXO0FBQ25CLE9BQUlKLGNBQWN0RyxhQUFhQyxPQUFiLENBQXFCLGFBQXJCLENBQWxCO0FBQ0EsT0FBSTBHLGFBQWEsS0FBS1osUUFBTCxDQUFjTyxXQUFkLEVBQTJCLE1BQTNCLENBQWpCO0FBQ0EsT0FBR0ssVUFBSCxFQUFlO0FBQ2QsV0FBT0EsVUFBUDtBQUNBLElBRkQsTUFFTztBQUNOLFFBQUk1RyxlQUFlSCxPQUFPSSxZQUFQLEdBQXNCQSxhQUFhQyxPQUFiLENBQXFCLFVBQXJCLENBQXRCLEdBQXlEQyxPQUFPQyxJQUFQLENBQVksVUFBWixDQUE1RTtBQUNBLFFBQUdKLFlBQUgsRUFBaUI7QUFDaEIsU0FBR0EsZ0JBQWdCQSxhQUFhSyxLQUFiLENBQW1CLEdBQW5CLEVBQXdCQyxNQUF4QixJQUFrQyxDQUFyRCxFQUF3RDtBQUN2RCxVQUFJQyxXQUFXUCxlQUFlQSxhQUFhSyxLQUFiLENBQW1CLEdBQW5CLEVBQXdCLENBQXhCLENBQWYsR0FBNEMsRUFBM0Q7QUFDQSxVQUFJRyxXQUFXUixlQUFlQSxhQUFhSyxLQUFiLENBQW1CLEdBQW5CLEVBQXdCLENBQXhCLENBQWYsR0FBNEMsRUFBM0Q7QUFDQSxhQUFPRSxZQUFZLEtBQUt1RixRQUFMLEVBQVosR0FBOEJ0RixRQUE5QixHQUF5QyxFQUFoRDtBQUNBLE1BSkQsTUFJTztBQUNOLGFBQU9SLFlBQVA7QUFDQTtBQUNELEtBUkQsTUFRTztBQUNOLFlBQU8sRUFBUDtBQUNBO0FBQ0Q7QUFDRCxHQWpETTtBQWtEUDZHLFdBQVMsbUJBQVc7QUFDbkIsT0FBSU4sY0FBY3RHLGFBQWFDLE9BQWIsQ0FBcUIsYUFBckIsQ0FBbEI7QUFDQSxPQUFJNEcsYUFBYSxLQUFLZCxRQUFMLENBQWNPLFdBQWQsRUFBMkIsTUFBM0IsQ0FBakI7QUFDQSxVQUFPTyxhQUFhQSxVQUFiLEdBQTBCLElBQWpDO0FBQ0EsR0F0RE07QUF1RFBDLFdBQVMsbUJBQVc7QUFDbkIsT0FBSVIsY0FBY3RHLGFBQWFDLE9BQWIsQ0FBcUIsYUFBckIsQ0FBbEI7QUFDQSxPQUFJOEcsYUFBYSxLQUFLaEIsUUFBTCxDQUFjTyxXQUFkLEVBQTJCLE1BQTNCLENBQWpCO0FBQ0EsVUFBT1MsYUFBYUEsVUFBYixHQUEwQixJQUFqQztBQUNBLEdBM0RNO0FBNERQQyxXQUFTLG1CQUFXO0FBQ25CLE9BQUlDLE9BQU8sRUFBWDtBQUNBLE9BQUk1SCxJQUFJQyxVQUFVQyxTQUFsQjtBQUNBLE9BQUkySCxZQUFZN0gsRUFBRThILE9BQUYsQ0FBVSxTQUFWLElBQXVCLENBQUMsQ0FBeEIsSUFBNkI5SCxFQUFFOEgsT0FBRixDQUFVLEtBQVYsSUFBbUIsQ0FBQyxDQUFqRSxDQUhtQixDQUdpRDtBQUNwRSxPQUFJM0gsUUFBUSxDQUFDLENBQUNILEVBQUVJLEtBQUYsQ0FBUSwrQkFBUixDQUFkLENBSm1CLENBSXFDO0FBQ3hELE9BQUd5SCxTQUFILEVBQWM7QUFDYkQsV0FBTyxTQUFQO0FBQ0EsSUFGRCxNQUVPLElBQUd6SCxLQUFILEVBQVU7QUFDaEJ5SCxXQUFPLEtBQVA7QUFDQSxJQUZNLE1BRUE7QUFDTkEsV0FBTyxJQUFQO0FBQ0E7QUFDRCxVQUFPQSxJQUFQO0FBQ0EsR0F6RU07QUEwRVBHLFVBQVEsa0JBQVc7QUFDbEIsT0FBSWQsY0FBY3RHLGFBQWFDLE9BQWIsQ0FBcUIsYUFBckIsQ0FBbEI7QUFDQSxPQUFJb0gsWUFBWSxLQUFLdEIsUUFBTCxDQUFjTyxXQUFkLEVBQTJCLEtBQTNCLENBQWhCO0FBQ0EsVUFBT2UsWUFBWUEsU0FBWixHQUF3QixJQUEvQjtBQUNBLEdBOUVNO0FBK0VQQyxnQkFBYyx3QkFBVztBQUN4QixVQUFPQyxLQUFLQyxLQUFMLENBQVcsSUFBSUQsSUFBSixFQUFYLElBQXlCLElBQWhDO0FBQ0EsR0FqRk07QUFrRlBFLFdBQVMsbUJBQVc7QUFDbkIsT0FBSW5CLGNBQWN0RyxhQUFhQyxPQUFiLENBQXFCLGFBQXJCLENBQWxCO0FBQ0EsT0FBSXlILGFBQWEsS0FBSzNCLFFBQUwsQ0FBY08sV0FBZCxFQUEyQixNQUEzQixDQUFqQjtBQUNBLFVBQU9vQixVQUFQO0FBQ0EsR0F0Rk07QUF1RlBDLFdBQVMsbUJBQVc7QUFDbkIsT0FBSXJCLGNBQWN0RyxhQUFhQyxPQUFiLENBQXFCLGFBQXJCLENBQWxCO0FBQ0EsT0FBSTJILGFBQWEsS0FBSzdCLFFBQUwsQ0FBY08sV0FBZCxFQUEyQixNQUEzQixDQUFqQjtBQUNBLFVBQU9zQixVQUFQO0FBQ0EsR0EzRk07QUE0RlBDLFdBQVMsbUJBQVc7QUFDbkIsT0FBSXZCLGNBQWN0RyxhQUFhQyxPQUFiLENBQXFCLGFBQXJCLENBQWxCO0FBQ0EsT0FBSTZILGFBQWEsS0FBSy9CLFFBQUwsQ0FBY08sV0FBZCxFQUEyQixNQUEzQixDQUFqQjtBQUNBLFVBQU93QixVQUFQO0FBQ0EsR0FoR007QUFpR1BDLFlBQVUsb0JBQVc7QUFDcEI7QUFDQSxVQUFPLEdBQVA7QUFDQSxHQXBHTTtBQXFHUEMsV0FBUyxpQkFBU0MsT0FBVCxFQUFrQkMsT0FBbEIsRUFBMkI7QUFDbkNELFdBQVFFLElBQVI7QUFDQSxPQUFJQyxVQUFVLEVBQWQ7QUFDQSxPQUFJQyxPQUFPLEVBQVg7QUFDQSxRQUFJLElBQUlDLEdBQVIsSUFBZUwsT0FBZixFQUF3QjtBQUN2QkcsZUFBV0YsUUFBU0QsUUFBUUssR0FBUixDQUFULENBQVg7QUFDQTtBQUNERCxVQUFPMUosSUFBSXlKLE9BQUosRUFBYUcsV0FBYixFQUFQO0FBQ0EsT0FBR3ZJLGFBQWF3SSxPQUFiLElBQXdCLE1BQXhCLElBQWtDeEksYUFBYXlJLEdBQWIsSUFBb0IsTUFBekQsRUFBaUU7QUFDaEUsV0FBTzlKLElBQUksS0FBSzBILE9BQUwsS0FBaUJnQyxJQUFyQixFQUEyQkUsV0FBM0IsRUFBUDtBQUNBLElBRkQsTUFFTztBQUNOLFdBQU9GLElBQVA7QUFDQTtBQUNELEdBbEhNO0FBbUhQO0FBQ0FLLGFBQVcsbUJBQVNDLE9BQVQsRUFBa0I7QUFDNUIsT0FBSUMsT0FBT0QsUUFBUUUsTUFBUixDQUFlRCxJQUExQjtBQUNBLE9BQUlFLE9BQU8sRUFBWDtBQUNBLE9BQUdILFFBQVFFLE1BQVIsQ0FBZUUsR0FBbEIsRUFBdUI7QUFDdEJELFdBQU9ILFFBQVFFLE1BQVIsQ0FBZUUsR0FBdEI7QUFDQSxJQUZELE1BRU87QUFDTkQsV0FBTyxFQUFQO0FBQ0E7QUFDRCxVQUFPQSxJQUFQO0FBQ0EsR0E3SE07QUE4SFA7QUFDQUUsV0FBUyxpQkFBU0wsT0FBVCxFQUFrQjtBQUMxQixPQUFJQyxPQUFPRCxRQUFRRSxNQUFSLENBQWVELElBQTFCO0FBQ0EsVUFBT0EsSUFBUDtBQUNBO0FBbElNLEVBQVI7QUFvSUEsS0FBSXZGLFdBQVc7QUFDZDRGLGFBQVcsQ0FERyxFQUNBO0FBQ2RDLFNBQU8sSUFGTztBQUdkQyxNQUFJdkQsRUFBRUMsUUFBRixFQUhVO0FBSWR1RCxPQUFLLElBSlM7QUFLZEMsUUFBTSxJQUxRO0FBTWRDLFlBQVUsb0JBQVc7QUFDcEIsVUFBTyxJQUFQO0FBQ0EsR0FSYTtBQVNkQyxXQUFTLG1CQUFXLENBQUUsQ0FUUjtBQVVkQyxTQUFPLGlCQUFXO0FBQ2pCcEcsYUFBVXFDLFNBQVYsQ0FBb0IsT0FBcEI7QUFDQTtBQVphLEVBQWY7QUFjQSxLQUFJZ0UsU0FBUzVHLEVBQUVnQyxNQUFGLENBQVN4QixRQUFULEVBQW1Cc0MsSUFBbkIsQ0FBYjtBQUNBLEtBQUl1QyxPQUFKO0FBQ0EsS0FBSUQsT0FBSjtBQUNBLEtBQUdyQyxFQUFFYyxPQUFGLEVBQUgsRUFBZ0I7QUFDZjtBQUNBd0IsWUFBVTtBQUNULFlBQVN0QyxFQUFFUyxPQUFGLEVBREE7QUFFVCxZQUFTVCxFQUFFYyxPQUFGLEVBRkE7QUFHVCxZQUFTZCxFQUFFZ0IsT0FBRixFQUhBO0FBSVQsWUFBU2hCLEVBQUVvQixPQUFGLEVBSkE7QUFLVCxZQUFTcEIsRUFBRTZCLE9BQUYsRUFMQTtBQU1ULFlBQVM3QixFQUFFaUMsT0FBRixFQU5BO0FBT1QsWUFBU2pDLEVBQUUrQixPQUFGLEVBUEE7QUFRVCxZQUFTL0IsRUFBRWtCLE9BQUY7QUFSQSxHQUFWO0FBVUFtQixZQUFVLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkIsRUFBNEIsT0FBNUIsRUFBcUMsT0FBckMsRUFBOEMsT0FBOUMsRUFBdUQsT0FBdkQsRUFBZ0UsT0FBaEUsQ0FBVjtBQUNBLEVBYkQsTUFhTztBQUNOQyxZQUFVO0FBQ1QsWUFBU3RDLEVBQUVTLE9BQUYsRUFEQTtBQUVULFlBQVNULEVBQUVnQixPQUFGLEVBRkE7QUFHVCxZQUFTaEIsRUFBRW9CLE9BQUYsRUFIQTtBQUlULFlBQVNwQixFQUFFNkIsT0FBRixFQUpBO0FBS1QsWUFBUzdCLEVBQUVpQyxPQUFGLEVBTEE7QUFNVCxZQUFTakMsRUFBRStCLE9BQUYsRUFOQTtBQU9ULFlBQVMvQixFQUFFa0IsT0FBRjtBQVBBLEdBQVY7QUFTQW1CLFlBQVUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixPQUE1QixFQUFxQyxPQUFyQyxFQUE4QyxPQUE5QyxFQUF1RCxPQUF2RCxDQUFWO0FBQ0E7QUFDRCxLQUFJeUIsZUFBZTtBQUNsQkMsWUFBVSxvQkFBVztBQUNwQixPQUFHLENBQUNoRSxJQUFKLEVBQVU7QUFDVCxXQUFPOEQsT0FBT04sRUFBZDtBQUNBO0FBQ0QsT0FBRyxDQUFDTSxPQUFPSCxRQUFQLEVBQUosRUFBdUI7QUFDdEIsV0FBTyxLQUFQO0FBQ0E7QUFDRCxRQUFJLElBQUlsRCxDQUFSLElBQWFxRCxPQUFPSixJQUFwQixFQUEwQjtBQUN6QixRQUFHSSxPQUFPSixJQUFQLENBQVlqRCxDQUFaLEtBQWtCLE9BQU9xRCxPQUFPSixJQUFQLENBQVlqRCxDQUFaLENBQVAsSUFBMEIsUUFBL0MsRUFBeUQ7QUFDeEQsU0FBR3FELE9BQU9KLElBQVAsQ0FBWWpELENBQVosRUFBZXdELFNBQWYsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsS0FBa0MsR0FBbEMsSUFBeUNILE9BQU9KLElBQVAsQ0FBWWpELENBQVosRUFBZXdELFNBQWYsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsS0FBa0MsR0FBOUUsRUFBbUY7QUFDbEYxQixjQUFROUIsQ0FBUixJQUFhdkQsRUFBRTRHLE9BQU9KLElBQVAsQ0FBWWpELENBQVosQ0FBRixFQUFrQnJILEdBQWxCLEVBQWI7QUFDQWtKLGNBQVE0QixJQUFSLENBQWF6RCxDQUFiO0FBQ0EsTUFIRCxNQUdPO0FBQ044QixjQUFROUIsQ0FBUixJQUFhcUQsT0FBT0osSUFBUCxDQUFZakQsQ0FBWixDQUFiO0FBQ0E2QixjQUFRNEIsSUFBUixDQUFhekQsQ0FBYjtBQUNBO0FBQ0QsS0FSRCxNQVFPLElBQUcsT0FBT3FELE9BQU9KLElBQVAsQ0FBWWpELENBQVosQ0FBUCxJQUEwQixRQUE3QixFQUF1QztBQUM3QzhCLGFBQVE5QixDQUFSLElBQWFxRCxPQUFPSixJQUFQLENBQVlqRCxDQUFaLENBQWI7QUFDQTZCLGFBQVE0QixJQUFSLENBQWF6RCxDQUFiO0FBQ0E7QUFFRDtBQUNEdkQsS0FBRWlILElBQUYsQ0FBTztBQUNOckcsVUFBTSxNQURBO0FBRU5zRyxjQUFVLE1BRko7QUFHTmIsV0FBT08sT0FBT1AsS0FIUjtBQUlORSxTQUFLSyxPQUFPTixFQUFQLEdBQVlNLE9BQU9MLEdBSmxCO0FBS05DLFVBQU1uQixPQUxBO0FBTU44QixhQUFTO0FBQ1IsWUFBT3BFLEVBQUV3QixNQUFGLEVBREM7QUFFUixrQkFBYXhCLEVBQUUwQixZQUFGLEVBRkw7QUFHUixhQUFRMUIsRUFBRVksT0FBRixFQUhBO0FBSVIsY0FBU1osRUFBRVksT0FBRixFQUpEO0FBS1IsYUFBUVosRUFBRW9DLE9BQUYsQ0FBVUMsT0FBVixFQUFtQkMsT0FBbkI7QUFMQSxLQU5IO0FBYU5xQixhQUFTLGlCQUFTVSxHQUFULEVBQWM7QUFDdEIsU0FBR1IsT0FBT1IsU0FBUCxJQUFvQixDQUF2QixFQUEwQjtBQUN6QixVQUFHckQsRUFBRW9ELE9BQUYsQ0FBVWlCLEdBQVYsS0FBa0IsTUFBckIsRUFBNkI7QUFDNUI3RyxpQkFBVXFDLFNBQVYsQ0FBb0JHLEVBQUU4QyxTQUFGLENBQVl1QixHQUFaLENBQXBCO0FBQ0FySyxjQUFPc0ssUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsV0FBdkI7QUFDQSxjQUFPLEtBQVA7QUFDQTtBQUNELFVBQUd2RSxFQUFFOEMsU0FBRixDQUFZdUIsR0FBWixLQUFvQixFQUF2QixFQUEyQjtBQUMxQjdHLGlCQUFVcUMsU0FBVixDQUFvQkcsRUFBRThDLFNBQUYsQ0FBWXVCLEdBQVosQ0FBcEI7QUFDQTtBQUNEO0FBQ0Q7Ozs7OztBQU1BUixZQUFPRixPQUFQLENBQWVVLEdBQWY7QUFDQSxLQS9CSztBQWdDTlQsV0FBTyxlQUFTWSxPQUFULEVBQWtCO0FBQ3hCWCxZQUFPRCxLQUFQLENBQWFZLE9BQWI7QUFDQTtBQWxDSyxJQUFQO0FBb0NBO0FBM0RpQixFQUFuQjtBQTZEQSxRQUFPVixhQUFhQyxRQUFiLEVBQVA7QUFDQSxDQTdPRDs7QUErT0E7Ozs7Ozs7Ozs7Ozs7QUFhQSxJQUFNVSxVQUFVLGlCQUFTQyxHQUFULEVBQWM7QUFDN0IsS0FBSUQsVUFBVTtBQUNiRSxlQUFhLHFCQUFTRCxHQUFULEVBQWM7QUFDMUIsT0FBSUUsT0FBT0YsSUFBSUcsSUFBSixDQUFTLENBQVQsRUFBWUMsS0FBWixDQUFrQixDQUFsQixDQUFYO0FBQ0EsT0FBSUMsTUFBTS9LLE9BQU8rSyxHQUFQLElBQWMvSyxPQUFPZ0wsU0FBL0I7QUFDQSxPQUFJQyxPQUFPRixJQUFJRyxlQUFKLENBQW9CTixJQUFwQixDQUFYO0FBQ0EsT0FBSU8sTUFBSjtBQUNBLE9BQUlDLGNBQWMsSUFBbEI7QUFDQSxPQUFJQyxNQUFNLElBQUlDLEtBQUosRUFBVjtBQUNBRCxPQUFJRSxHQUFKLEdBQVVOLElBQVY7QUFDQSxPQUFJTyxVQUFVLDZCQUFkO0FBQ0EsT0FBRyxDQUFDQSxRQUFRbk0sSUFBUixDQUFhdUwsS0FBSy9HLElBQWxCLENBQUQsSUFBNEIrRyxLQUFLL0csSUFBTCxJQUFhLEVBQTVDLEVBQWdEO0FBQy9DNEgsVUFBTSxRQUFOLEVBQWdCLElBQWhCO0FBQ0E7QUFDQTtBQUNESixPQUFJSyxNQUFKLEdBQWEsWUFBVztBQUN2QixRQUFHTCxJQUFJMUYsS0FBSixHQUFZK0UsSUFBSWlCLFFBQW5CLEVBQTZCO0FBQzVCRixXQUFNLGFBQWFmLElBQUlpQixRQUFqQixHQUE0QixJQUFsQyxFQUF3QyxJQUF4QztBQUNBLFlBQU8sS0FBUDtBQUNBO0FBQ0QsUUFBSWQsT0FBTyxJQUFYOztBQUVBO0FBQ0EsUUFBSWUsQ0FBSjtBQUFBLFFBQU9DLEtBQVA7QUFBQSxRQUFjQyxJQUFJakIsS0FBS25GLE1BQXZCO0FBQ0EsUUFBR2dGLElBQUlxQixNQUFKLElBQWMsRUFBakIsRUFBcUI7QUFDcEJILFNBQUlmLEtBQUtsRixLQUFUO0FBQ0EsS0FGRCxNQUVPO0FBQ05pRyxTQUFJbEIsSUFBSXFCLE1BQVI7QUFDQTtBQUNERixZQUFRRCxJQUFJRSxDQUFaO0FBQ0FBLFFBQUlGLElBQUlDLEtBQVI7O0FBRUE7QUFDQSxRQUFJRyxTQUFTQyxTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDQSxRQUFJQyxNQUFNSCxPQUFPSSxVQUFQLENBQWtCLElBQWxCLENBQVY7QUFDQW5KLE1BQUUrSSxNQUFGLEVBQVUxSSxJQUFWLENBQWU7QUFDZHFDLFlBQU9pRyxDQURPO0FBRWRsRyxhQUFRb0c7QUFGTSxLQUFmO0FBSUFLLFFBQUlFLFNBQUosQ0FBY3hCLElBQWQsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFBMEJlLENBQTFCLEVBQTZCRSxDQUE3QjtBQUNBWCxhQUFTYSxPQUFPTSxTQUFQLENBQWlCLFlBQWpCLEVBQStCNUIsSUFBSTZCLE9BQUosSUFBZSxHQUE5QyxDQUFUOztBQUVBLFFBQUl0RCxTQUFTO0FBQ1prQyxhQUFRQTtBQURJLEtBQWI7QUFHQTtBQUNBVCxRQUFJZixPQUFKLENBQVlWLE1BQVo7QUFDQSxJQWhDRDtBQWlDQTtBQS9DWSxFQUFkO0FBaURBLFFBQU93QixPQUFQO0FBQ0EsQ0FuREQ7O0FBcURBK0IsUUFBUXZOLFFBQVIsR0FBbUJBLFFBQW5CO0FBQ0F1TixRQUFRbkwsT0FBUixHQUFrQkEsT0FBbEI7QUFDQW1MLFFBQVFuSyxpQkFBUixHQUE0QkEsaUJBQTVCO0FBQ0FtSyxRQUFRNUwsTUFBUixHQUFpQkEsTUFBakI7QUFDQTRMLFFBQVE3SixRQUFSLEdBQW1CQSxRQUFuQjtBQUNBNkosUUFBUWhKLE9BQVIsR0FBa0JBLE9BQWxCO0FBQ0FnSixRQUFRL0IsT0FBUixHQUFrQkEsT0FBbEI7QUFDQStCLFFBQVEzTCxTQUFSLEdBQW9CQSxTQUFwQixDOzs7Ozs7OztBQ3ZzQkE7QUFDQTs7QUFFQTtBQUNBLHNCQUFnSDs7QUFFaEg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxtREFBbUQsSUFBSTtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7QUFDRCxpQ0FBaUM7O0FBRWpDOzs7Ozs7OztBQ3pDQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDeERBLHlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeUNBOzs7dUJBRUE7OztnQkFHQTtrQkFDQTtpQkFDQTtpQkFFQTtBQUxBO1lBT0E7QUFSQTtBQVNBOzt5Q0FDQTtXQUdBOzZCQUNBO3VDQUNBOytFQUNBOzt3QkFFQTt3QkFDQTtVQUVBO0FBSkE7cUJBS0E7QUFDQTtBQUNBOzsyQ0FFQTtnQkFDQTtrQkFDQTsySEFDQTtVQUNBO3NKQUNBO0FBQ0E7QUFDQTtnQ0FDQTtxRUFDQTsyRUFDQTtzQkFDQTtnQkFDQTtXQUNBO0FBQ0E7NEJBQ0E7MENBQ0E7aURBQ0E7QUFDQTtBQUNBO0FBQ0E7aUNBQ0E7cUpBQ0E7QUFDQTtnQ0FDQTtzQ0FDQTt1Q0FDQTtxREFDQTtrREFDQTswQ0FDQTttQ0FDQTtBQUNBO0FBQ0E7b0RBQ0E7V0FDQTtXQUNBO3lCQUNBO1dBQ0E7eUJBQ0E7OEJBQ0E7QUFDQTttREFDQTthQUNBO2NBQ0E7c0NBQ0E7b0JBQ0E7NERBQ0E7VUFDQTtrQ0FDQTtBQUNBO2FBQ0E7a0RBQ0E7ZUFDQTsrREFDQTt1R0FDQTs0QkFDQTtjQUNBO0FBQ0E7Z0VBQ0E7dUdBQ0E7NEJBQ0E7Y0FDQTtBQUNBO1VBQ0E7QUFNQTtBQXRFQTs7QUEzQkEsRTs7Ozs7OztBQzFDQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDMUZBLHlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDb0NBLDZCQUNBOzt1QkFFQTs7O1VBR0E7VUFDQTtXQUVBO0FBSkE7O1VBTUE7V0FDQTtVQUVBO0FBSkE7Z0JBS0E7Y0FDQTtZQUVBO0FBZEE7QUFlQTs7O29DQUVBO2lEQUNBO0FBQ0E7d0NBQ0E7cURBQ0E7QUFDQTs0Q0FDQTtnQkFDQTtVQUNBO2dFQUNBO1VBQ0E7aUJBQ0E7bUVBQ0E7QUFDQTtBQUVBO0FBaEJBOzhCQWlCQTs7b0NBRUE7O1VBR0E7QUFGQTtBQUdBO3dDQUNBO1FBQ0E7d0JBQ0E7QUFDQTswQ0FDQTt3QkFDQTtBQUNBO29EQUNBO1dBQ0E7V0FDQTt5QkFDQTtXQUNBO3lCQUNBOzhCQUNBO0FBQ0E7NkNBQ0E7c0JBQ0E7UUFDQTtBQUNBO2tEQUNBO1lBQ0E7O2tCQUVBO1NBQ0E7VUFDQTtpQkFDQTtlQUVBO21DQUNBO29DQUNBO29CQUNBO2FBQ0E7QUFFQTtBQVpBO0FBY0E7QUF6Q0E7O2dDQTJDQTtvQ0FFQTtBQUhBO0FBOUVBLEUiLCJmaWxlIjoiMy5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy8uMi4wLjAtYmV0YS40QGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9sb2FkZXIuanM/e1xcXCJvbWl0XFxcIjoxLFxcXCJyZW1vdmVcXFwiOnRydWV9IXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNzQ1NTU5NWEmc2NvcGVkPXRydWUhcHgycmVtP3JlbVVuaXQ9NjUmcmVtUHJlY2lzaW9uPTghc2Fzcy1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BsYW4udnVlXCIpXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wbGFuLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNzQ1NTU5NWEhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGxhbi52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiQzpcXFxcVXNlcnNcXFxccGFud2VuaHVhXFxcXERvY3VtZW50c1xcXFxIQnVpbGRlclByb2plY3RcXFxcdnVlLUNhbGVuZGFyTGlzdFZpZXdcXFxcc3JjXFxcXHZpZXdzXFxcXHBsYW4udnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi03NDU1NTk1YVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03NDU1NTk1YVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03NDU1NTk1YVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHBsYW4udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvcGxhbi52dWVcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8qIFplcHRvIHYxLjEuNiAtIHplcHRvIGV2ZW50IGFqYXggZm9ybSBpZSAtIHplcHRvanMuY29tL2xpY2Vuc2UgKi9cblxudmFyIFplcHRvID0gbW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1bmRlZmluZWQsIGtleSwgJCwgY2xhc3NMaXN0LCBlbXB0eUFycmF5ID0gW10sIHNsaWNlID0gZW1wdHlBcnJheS5zbGljZSwgZmlsdGVyID0gZW1wdHlBcnJheS5maWx0ZXIsXG4gICAgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQsXG4gICAgZWxlbWVudERpc3BsYXkgPSB7fSwgY2xhc3NDYWNoZSA9IHt9LFxuICAgIGNzc051bWJlciA9IHsgJ2NvbHVtbi1jb3VudCc6IDEsICdjb2x1bW5zJzogMSwgJ2ZvbnQtd2VpZ2h0JzogMSwgJ2xpbmUtaGVpZ2h0JzogMSwnb3BhY2l0eSc6IDEsICd6LWluZGV4JzogMSwgJ3pvb20nOiAxIH0sXG4gICAgZnJhZ21lbnRSRSA9IC9eXFxzKjwoXFx3K3whKVtePl0qPi8sXG4gICAgc2luZ2xlVGFnUkUgPSAvXjwoXFx3KylcXHMqXFwvPz4oPzo8XFwvXFwxPnwpJC8sXG4gICAgdGFnRXhwYW5kZXJSRSA9IC88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFtcXHc6XSspW14+XSopXFwvPi9pZyxcbiAgICByb290Tm9kZVJFID0gL14oPzpib2R5fGh0bWwpJC9pLFxuICAgIGNhcGl0YWxSRSA9IC8oW0EtWl0pL2csXG5cbiAgICAvLyBzcGVjaWFsIGF0dHJpYnV0ZXMgdGhhdCBzaG91bGQgYmUgZ2V0L3NldCB2aWEgbWV0aG9kIGNhbGxzXG4gICAgbWV0aG9kQXR0cmlidXRlcyA9IFsndmFsJywgJ2NzcycsICdodG1sJywgJ3RleHQnLCAnZGF0YScsICd3aWR0aCcsICdoZWlnaHQnLCAnb2Zmc2V0J10sXG5cbiAgICBhZGphY2VuY3lPcGVyYXRvcnMgPSBbICdhZnRlcicsICdwcmVwZW5kJywgJ2JlZm9yZScsICdhcHBlbmQnIF0sXG4gICAgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpLFxuICAgIHRhYmxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKSxcbiAgICBjb250YWluZXJzID0ge1xuICAgICAgJ3RyJzogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKSxcbiAgICAgICd0Ym9keSc6IHRhYmxlLCAndGhlYWQnOiB0YWJsZSwgJ3Rmb290JzogdGFibGUsXG4gICAgICAndGQnOiB0YWJsZVJvdywgJ3RoJzogdGFibGVSb3csXG4gICAgICAnKic6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgfSxcbiAgICByZWFkeVJFID0gL2NvbXBsZXRlfGxvYWRlZHxpbnRlcmFjdGl2ZS8sXG4gICAgc2ltcGxlU2VsZWN0b3JSRSA9IC9eW1xcdy1dKiQvLFxuICAgIGNsYXNzMnR5cGUgPSB7fSxcbiAgICB0b1N0cmluZyA9IGNsYXNzMnR5cGUudG9TdHJpbmcsXG4gICAgemVwdG8gPSB7fSxcbiAgICBjYW1lbGl6ZSwgdW5pcSxcbiAgICB0ZW1wUGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgcHJvcE1hcCA9IHtcbiAgICAgICd0YWJpbmRleCc6ICd0YWJJbmRleCcsXG4gICAgICAncmVhZG9ubHknOiAncmVhZE9ubHknLFxuICAgICAgJ2Zvcic6ICdodG1sRm9yJyxcbiAgICAgICdjbGFzcyc6ICdjbGFzc05hbWUnLFxuICAgICAgJ21heGxlbmd0aCc6ICdtYXhMZW5ndGgnLFxuICAgICAgJ2NlbGxzcGFjaW5nJzogJ2NlbGxTcGFjaW5nJyxcbiAgICAgICdjZWxscGFkZGluZyc6ICdjZWxsUGFkZGluZycsXG4gICAgICAncm93c3Bhbic6ICdyb3dTcGFuJyxcbiAgICAgICdjb2xzcGFuJzogJ2NvbFNwYW4nLFxuICAgICAgJ3VzZW1hcCc6ICd1c2VNYXAnLFxuICAgICAgJ2ZyYW1lYm9yZGVyJzogJ2ZyYW1lQm9yZGVyJyxcbiAgICAgICdjb250ZW50ZWRpdGFibGUnOiAnY29udGVudEVkaXRhYmxlJ1xuICAgIH0sXG4gICAgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHxcbiAgICAgIGZ1bmN0aW9uKG9iamVjdCl7IHJldHVybiBvYmplY3QgaW5zdGFuY2VvZiBBcnJheSB9XG5cbiAgemVwdG8ubWF0Y2hlcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgaWYgKCFzZWxlY3RvciB8fCAhZWxlbWVudCB8fCBlbGVtZW50Lm5vZGVUeXBlICE9PSAxKSByZXR1cm4gZmFsc2VcbiAgICB2YXIgbWF0Y2hlc1NlbGVjdG9yID0gZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgZWxlbWVudC5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5vTWF0Y2hlc1NlbGVjdG9yIHx8IGVsZW1lbnQubWF0Y2hlc1NlbGVjdG9yXG4gICAgaWYgKG1hdGNoZXNTZWxlY3RvcikgcmV0dXJuIG1hdGNoZXNTZWxlY3Rvci5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKVxuICAgIC8vIGZhbGwgYmFjayB0byBwZXJmb3JtaW5nIGEgc2VsZWN0b3I6XG4gICAgdmFyIG1hdGNoLCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGUsIHRlbXAgPSAhcGFyZW50XG4gICAgaWYgKHRlbXApIChwYXJlbnQgPSB0ZW1wUGFyZW50KS5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgIG1hdGNoID0gfnplcHRvLnFzYShwYXJlbnQsIHNlbGVjdG9yKS5pbmRleE9mKGVsZW1lbnQpXG4gICAgdGVtcCAmJiB0ZW1wUGFyZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpXG4gICAgcmV0dXJuIG1hdGNoXG4gIH1cblxuICBmdW5jdGlvbiB0eXBlKG9iaikge1xuICAgIHJldHVybiBvYmogPT0gbnVsbCA/IFN0cmluZyhvYmopIDpcbiAgICAgIGNsYXNzMnR5cGVbdG9TdHJpbmcuY2FsbChvYmopXSB8fCBcIm9iamVjdFwiXG4gIH1cblxuICBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB0eXBlKHZhbHVlKSA9PSBcImZ1bmN0aW9uXCIgfVxuICBmdW5jdGlvbiBpc1dpbmRvdyhvYmopICAgICB7IHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmogPT0gb2JqLndpbmRvdyB9XG4gIGZ1bmN0aW9uIGlzRG9jdW1lbnQob2JqKSAgIHsgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iai5ub2RlVHlwZSA9PSBvYmouRE9DVU1FTlRfTk9ERSB9XG4gIGZ1bmN0aW9uIGlzT2JqZWN0KG9iaikgICAgIHsgcmV0dXJuIHR5cGUob2JqKSA9PSBcIm9iamVjdFwiIH1cbiAgZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgICByZXR1cm4gaXNPYmplY3Qob2JqKSAmJiAhaXNXaW5kb3cob2JqKSAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PSBPYmplY3QucHJvdG90eXBlXG4gIH1cbiAgZnVuY3Rpb24gbGlrZUFycmF5KG9iaikgeyByZXR1cm4gdHlwZW9mIG9iai5sZW5ndGggPT0gJ251bWJlcicgfVxuXG4gIGZ1bmN0aW9uIGNvbXBhY3QoYXJyYXkpIHsgcmV0dXJuIGZpbHRlci5jYWxsKGFycmF5LCBmdW5jdGlvbihpdGVtKXsgcmV0dXJuIGl0ZW0gIT0gbnVsbCB9KSB9XG4gIGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXkpIHsgcmV0dXJuIGFycmF5Lmxlbmd0aCA+IDAgPyAkLmZuLmNvbmNhdC5hcHBseShbXSwgYXJyYXkpIDogYXJyYXkgfVxuICBjYW1lbGl6ZSA9IGZ1bmN0aW9uKHN0cil7IHJldHVybiBzdHIucmVwbGFjZSgvLSsoLik/L2csIGZ1bmN0aW9uKG1hdGNoLCBjaHIpeyByZXR1cm4gY2hyID8gY2hyLnRvVXBwZXJDYXNlKCkgOiAnJyB9KSB9XG4gIGZ1bmN0aW9uIGRhc2hlcml6ZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLzo6L2csICcvJylcbiAgICAgICAgICAgLnJlcGxhY2UoLyhbQS1aXSspKFtBLVpdW2Etel0pL2csICckMV8kMicpXG4gICAgICAgICAgIC5yZXBsYWNlKC8oW2EtelxcZF0pKFtBLVpdKS9nLCAnJDFfJDInKVxuICAgICAgICAgICAucmVwbGFjZSgvXy9nLCAnLScpXG4gICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gIH1cbiAgdW5pcSA9IGZ1bmN0aW9uKGFycmF5KXsgcmV0dXJuIGZpbHRlci5jYWxsKGFycmF5LCBmdW5jdGlvbihpdGVtLCBpZHgpeyByZXR1cm4gYXJyYXkuaW5kZXhPZihpdGVtKSA9PSBpZHggfSkgfVxuXG4gIGZ1bmN0aW9uIGNsYXNzUkUobmFtZSkge1xuICAgIHJldHVybiBuYW1lIGluIGNsYXNzQ2FjaGUgP1xuICAgICAgY2xhc3NDYWNoZVtuYW1lXSA6IChjbGFzc0NhY2hlW25hbWVdID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIG5hbWUgKyAnKFxcXFxzfCQpJykpXG4gIH1cblxuICBmdW5jdGlvbiBtYXliZUFkZFB4KG5hbWUsIHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT0gXCJudW1iZXJcIiAmJiAhY3NzTnVtYmVyW2Rhc2hlcml6ZShuYW1lKV0pID8gdmFsdWUgKyBcInB4XCIgOiB2YWx1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZGVmYXVsdERpc3BsYXkobm9kZU5hbWUpIHtcbiAgICB2YXIgZWxlbWVudCwgZGlzcGxheVxuICAgIGlmICghZWxlbWVudERpc3BsYXlbbm9kZU5hbWVdKSB7XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlTmFtZSlcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgICAgIGRpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsICcnKS5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlzcGxheVwiKVxuICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpXG4gICAgICBkaXNwbGF5ID09IFwibm9uZVwiICYmIChkaXNwbGF5ID0gXCJibG9ja1wiKVxuICAgICAgZWxlbWVudERpc3BsYXlbbm9kZU5hbWVdID0gZGlzcGxheVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudERpc3BsYXlbbm9kZU5hbWVdXG4gIH1cblxuICBmdW5jdGlvbiBjaGlsZHJlbihlbGVtZW50KSB7XG4gICAgcmV0dXJuICdjaGlsZHJlbicgaW4gZWxlbWVudCA/XG4gICAgICBzbGljZS5jYWxsKGVsZW1lbnQuY2hpbGRyZW4pIDpcbiAgICAgICQubWFwKGVsZW1lbnQuY2hpbGROb2RlcywgZnVuY3Rpb24obm9kZSl7IGlmIChub2RlLm5vZGVUeXBlID09IDEpIHJldHVybiBub2RlIH0pXG4gIH1cblxuICAvLyBgJC56ZXB0by5mcmFnbWVudGAgdGFrZXMgYSBodG1sIHN0cmluZyBhbmQgYW4gb3B0aW9uYWwgdGFnIG5hbWVcbiAgLy8gdG8gZ2VuZXJhdGUgRE9NIG5vZGVzIG5vZGVzIGZyb20gdGhlIGdpdmVuIGh0bWwgc3RyaW5nLlxuICAvLyBUaGUgZ2VuZXJhdGVkIERPTSBub2RlcyBhcmUgcmV0dXJuZWQgYXMgYW4gYXJyYXkuXG4gIC8vIFRoaXMgZnVuY3Rpb24gY2FuIGJlIG92ZXJyaWRlbiBpbiBwbHVnaW5zIGZvciBleGFtcGxlIHRvIG1ha2VcbiAgLy8gaXQgY29tcGF0aWJsZSB3aXRoIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0aGUgRE9NIGZ1bGx5LlxuICB6ZXB0by5mcmFnbWVudCA9IGZ1bmN0aW9uKGh0bWwsIG5hbWUsIHByb3BlcnRpZXMpIHtcbiAgICB2YXIgZG9tLCBub2RlcywgY29udGFpbmVyXG5cbiAgICAvLyBBIHNwZWNpYWwgY2FzZSBvcHRpbWl6YXRpb24gZm9yIGEgc2luZ2xlIHRhZ1xuICAgIGlmIChzaW5nbGVUYWdSRS50ZXN0KGh0bWwpKSBkb20gPSAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoUmVnRXhwLiQxKSlcblxuICAgIGlmICghZG9tKSB7XG4gICAgICBpZiAoaHRtbC5yZXBsYWNlKSBodG1sID0gaHRtbC5yZXBsYWNlKHRhZ0V4cGFuZGVyUkUsIFwiPCQxPjwvJDI+XCIpXG4gICAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKSBuYW1lID0gZnJhZ21lbnRSRS50ZXN0KGh0bWwpICYmIFJlZ0V4cC4kMVxuICAgICAgaWYgKCEobmFtZSBpbiBjb250YWluZXJzKSkgbmFtZSA9ICcqJ1xuXG4gICAgICBjb250YWluZXIgPSBjb250YWluZXJzW25hbWVdXG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJycgKyBodG1sXG4gICAgICBkb20gPSAkLmVhY2goc2xpY2UuY2FsbChjb250YWluZXIuY2hpbGROb2RlcyksIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoaXNQbGFpbk9iamVjdChwcm9wZXJ0aWVzKSkge1xuICAgICAgbm9kZXMgPSAkKGRvbSlcbiAgICAgICQuZWFjaChwcm9wZXJ0aWVzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmIChtZXRob2RBdHRyaWJ1dGVzLmluZGV4T2Yoa2V5KSA+IC0xKSBub2Rlc1trZXldKHZhbHVlKVxuICAgICAgICBlbHNlIG5vZGVzLmF0dHIoa2V5LCB2YWx1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGRvbVxuICB9XG5cbiAgLy8gYCQuemVwdG8uWmAgc3dhcHMgb3V0IHRoZSBwcm90b3R5cGUgb2YgdGhlIGdpdmVuIGBkb21gIGFycmF5XG4gIC8vIG9mIG5vZGVzIHdpdGggYCQuZm5gIGFuZCB0aHVzIHN1cHBseWluZyBhbGwgdGhlIFplcHRvIGZ1bmN0aW9uc1xuICAvLyB0byB0aGUgYXJyYXkuIE5vdGUgdGhhdCBgX19wcm90b19fYCBpcyBub3Qgc3VwcG9ydGVkIG9uIEludGVybmV0XG4gIC8vIEV4cGxvcmVyLiBUaGlzIG1ldGhvZCBjYW4gYmUgb3ZlcnJpZGVuIGluIHBsdWdpbnMuXG4gIHplcHRvLlogPSBmdW5jdGlvbihkb20sIHNlbGVjdG9yKSB7XG4gICAgZG9tID0gZG9tIHx8IFtdXG4gICAgZG9tLl9fcHJvdG9fXyA9ICQuZm5cbiAgICBkb20uc2VsZWN0b3IgPSBzZWxlY3RvciB8fCAnJ1xuICAgIHJldHVybiBkb21cbiAgfVxuXG4gIC8vIGAkLnplcHRvLmlzWmAgc2hvdWxkIHJldHVybiBgdHJ1ZWAgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBhIFplcHRvXG4gIC8vIGNvbGxlY3Rpb24uIFRoaXMgbWV0aG9kIGNhbiBiZSBvdmVycmlkZW4gaW4gcGx1Z2lucy5cbiAgemVwdG8uaXNaID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCBpbnN0YW5jZW9mIHplcHRvLlpcbiAgfVxuXG4gIC8vIGAkLnplcHRvLmluaXRgIGlzIFplcHRvJ3MgY291bnRlcnBhcnQgdG8galF1ZXJ5J3MgYCQuZm4uaW5pdGAgYW5kXG4gIC8vIHRha2VzIGEgQ1NTIHNlbGVjdG9yIGFuZCBhbiBvcHRpb25hbCBjb250ZXh0IChhbmQgaGFuZGxlcyB2YXJpb3VzXG4gIC8vIHNwZWNpYWwgY2FzZXMpLlxuICAvLyBUaGlzIG1ldGhvZCBjYW4gYmUgb3ZlcnJpZGVuIGluIHBsdWdpbnMuXG4gIHplcHRvLmluaXQgPSBmdW5jdGlvbihzZWxlY3RvciwgY29udGV4dCkge1xuICAgIHZhciBkb21cbiAgICAvLyBJZiBub3RoaW5nIGdpdmVuLCByZXR1cm4gYW4gZW1wdHkgWmVwdG8gY29sbGVjdGlvblxuICAgIGlmICghc2VsZWN0b3IpIHJldHVybiB6ZXB0by5aKClcbiAgICAvLyBPcHRpbWl6ZSBmb3Igc3RyaW5nIHNlbGVjdG9yc1xuICAgIGVsc2UgaWYgKHR5cGVvZiBzZWxlY3RvciA9PSAnc3RyaW5nJykge1xuICAgICAgc2VsZWN0b3IgPSBzZWxlY3Rvci50cmltKClcbiAgICAgIC8vIElmIGl0J3MgYSBodG1sIGZyYWdtZW50LCBjcmVhdGUgbm9kZXMgZnJvbSBpdFxuICAgICAgLy8gTm90ZTogSW4gYm90aCBDaHJvbWUgMjEgYW5kIEZpcmVmb3ggMTUsIERPTSBlcnJvciAxMlxuICAgICAgLy8gaXMgdGhyb3duIGlmIHRoZSBmcmFnbWVudCBkb2Vzbid0IGJlZ2luIHdpdGggPFxuICAgICAgaWYgKHNlbGVjdG9yWzBdID09ICc8JyAmJiBmcmFnbWVudFJFLnRlc3Qoc2VsZWN0b3IpKVxuICAgICAgICBkb20gPSB6ZXB0by5mcmFnbWVudChzZWxlY3RvciwgUmVnRXhwLiQxLCBjb250ZXh0KSwgc2VsZWN0b3IgPSBudWxsXG4gICAgICAvLyBJZiB0aGVyZSdzIGEgY29udGV4dCwgY3JlYXRlIGEgY29sbGVjdGlvbiBvbiB0aGF0IGNvbnRleHQgZmlyc3QsIGFuZCBzZWxlY3RcbiAgICAgIC8vIG5vZGVzIGZyb20gdGhlcmVcbiAgICAgIGVsc2UgaWYgKGNvbnRleHQgIT09IHVuZGVmaW5lZCkgcmV0dXJuICQoY29udGV4dCkuZmluZChzZWxlY3RvcilcbiAgICAgIC8vIElmIGl0J3MgYSBDU1Mgc2VsZWN0b3IsIHVzZSBpdCB0byBzZWxlY3Qgbm9kZXMuXG4gICAgICBlbHNlIGRvbSA9IHplcHRvLnFzYShkb2N1bWVudCwgc2VsZWN0b3IpXG4gICAgfVxuICAgIC8vIElmIGEgZnVuY3Rpb24gaXMgZ2l2ZW4sIGNhbGwgaXQgd2hlbiB0aGUgRE9NIGlzIHJlYWR5XG4gICAgZWxzZSBpZiAoaXNGdW5jdGlvbihzZWxlY3RvcikpIHJldHVybiAkKGRvY3VtZW50KS5yZWFkeShzZWxlY3RvcilcbiAgICAvLyBJZiBhIFplcHRvIGNvbGxlY3Rpb24gaXMgZ2l2ZW4sIGp1c3QgcmV0dXJuIGl0XG4gICAgZWxzZSBpZiAoemVwdG8uaXNaKHNlbGVjdG9yKSkgcmV0dXJuIHNlbGVjdG9yXG4gICAgZWxzZSB7XG4gICAgICAvLyBub3JtYWxpemUgYXJyYXkgaWYgYW4gYXJyYXkgb2Ygbm9kZXMgaXMgZ2l2ZW5cbiAgICAgIGlmIChpc0FycmF5KHNlbGVjdG9yKSkgZG9tID0gY29tcGFjdChzZWxlY3RvcilcbiAgICAgIC8vIFdyYXAgRE9NIG5vZGVzLlxuICAgICAgZWxzZSBpZiAoaXNPYmplY3Qoc2VsZWN0b3IpKVxuICAgICAgICBkb20gPSBbc2VsZWN0b3JdLCBzZWxlY3RvciA9IG51bGxcbiAgICAgIC8vIElmIGl0J3MgYSBodG1sIGZyYWdtZW50LCBjcmVhdGUgbm9kZXMgZnJvbSBpdFxuICAgICAgZWxzZSBpZiAoZnJhZ21lbnRSRS50ZXN0KHNlbGVjdG9yKSlcbiAgICAgICAgZG9tID0gemVwdG8uZnJhZ21lbnQoc2VsZWN0b3IudHJpbSgpLCBSZWdFeHAuJDEsIGNvbnRleHQpLCBzZWxlY3RvciA9IG51bGxcbiAgICAgIC8vIElmIHRoZXJlJ3MgYSBjb250ZXh0LCBjcmVhdGUgYSBjb2xsZWN0aW9uIG9uIHRoYXQgY29udGV4dCBmaXJzdCwgYW5kIHNlbGVjdFxuICAgICAgLy8gbm9kZXMgZnJvbSB0aGVyZVxuICAgICAgZWxzZSBpZiAoY29udGV4dCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gJChjb250ZXh0KS5maW5kKHNlbGVjdG9yKVxuICAgICAgLy8gQW5kIGxhc3QgYnV0IG5vIGxlYXN0LCBpZiBpdCdzIGEgQ1NTIHNlbGVjdG9yLCB1c2UgaXQgdG8gc2VsZWN0IG5vZGVzLlxuICAgICAgZWxzZSBkb20gPSB6ZXB0by5xc2EoZG9jdW1lbnQsIHNlbGVjdG9yKVxuICAgIH1cbiAgICAvLyBjcmVhdGUgYSBuZXcgWmVwdG8gY29sbGVjdGlvbiBmcm9tIHRoZSBub2RlcyBmb3VuZFxuICAgIHJldHVybiB6ZXB0by5aKGRvbSwgc2VsZWN0b3IpXG4gIH1cblxuICAvLyBgJGAgd2lsbCBiZSB0aGUgYmFzZSBgWmVwdG9gIG9iamVjdC4gV2hlbiBjYWxsaW5nIHRoaXNcbiAgLy8gZnVuY3Rpb24ganVzdCBjYWxsIGAkLnplcHRvLmluaXQsIHdoaWNoIG1ha2VzIHRoZSBpbXBsZW1lbnRhdGlvblxuICAvLyBkZXRhaWxzIG9mIHNlbGVjdGluZyBub2RlcyBhbmQgY3JlYXRpbmcgWmVwdG8gY29sbGVjdGlvbnNcbiAgLy8gcGF0Y2hhYmxlIGluIHBsdWdpbnMuXG4gICQgPSBmdW5jdGlvbihzZWxlY3RvciwgY29udGV4dCl7XG4gICAgcmV0dXJuIHplcHRvLmluaXQoc2VsZWN0b3IsIGNvbnRleHQpXG4gIH1cblxuICBmdW5jdGlvbiBleHRlbmQodGFyZ2V0LCBzb3VyY2UsIGRlZXApIHtcbiAgICBmb3IgKGtleSBpbiBzb3VyY2UpXG4gICAgICBpZiAoZGVlcCAmJiAoaXNQbGFpbk9iamVjdChzb3VyY2Vba2V5XSkgfHwgaXNBcnJheShzb3VyY2Vba2V5XSkpKSB7XG4gICAgICAgIGlmIChpc1BsYWluT2JqZWN0KHNvdXJjZVtrZXldKSAmJiAhaXNQbGFpbk9iamVjdCh0YXJnZXRba2V5XSkpXG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB7fVxuICAgICAgICBpZiAoaXNBcnJheShzb3VyY2Vba2V5XSkgJiYgIWlzQXJyYXkodGFyZ2V0W2tleV0pKVxuICAgICAgICAgIHRhcmdldFtrZXldID0gW11cbiAgICAgICAgZXh0ZW5kKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgZGVlcClcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHNvdXJjZVtrZXldICE9PSB1bmRlZmluZWQpIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgfVxuXG4gIC8vIENvcHkgYWxsIGJ1dCB1bmRlZmluZWQgcHJvcGVydGllcyBmcm9tIG9uZSBvciBtb3JlXG4gIC8vIG9iamVjdHMgdG8gdGhlIGB0YXJnZXRgIG9iamVjdC5cbiAgJC5leHRlbmQgPSBmdW5jdGlvbih0YXJnZXQpe1xuICAgIHZhciBkZWVwLCBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBkZWVwID0gdGFyZ2V0XG4gICAgICB0YXJnZXQgPSBhcmdzLnNoaWZ0KClcbiAgICB9XG4gICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uKGFyZyl7IGV4dGVuZCh0YXJnZXQsIGFyZywgZGVlcCkgfSlcbiAgICByZXR1cm4gdGFyZ2V0XG4gIH1cblxuICAvLyBgJC56ZXB0by5xc2FgIGlzIFplcHRvJ3MgQ1NTIHNlbGVjdG9yIGltcGxlbWVudGF0aW9uIHdoaWNoXG4gIC8vIHVzZXMgYGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGxgIGFuZCBvcHRpbWl6ZXMgZm9yIHNvbWUgc3BlY2lhbCBjYXNlcywgbGlrZSBgI2lkYC5cbiAgLy8gVGhpcyBtZXRob2QgY2FuIGJlIG92ZXJyaWRlbiBpbiBwbHVnaW5zLlxuICB6ZXB0by5xc2EgPSBmdW5jdGlvbihlbGVtZW50LCBzZWxlY3Rvcil7XG4gICAgdmFyIGZvdW5kLFxuICAgICAgICBtYXliZUlEID0gc2VsZWN0b3JbMF0gPT0gJyMnLFxuICAgICAgICBtYXliZUNsYXNzID0gIW1heWJlSUQgJiYgc2VsZWN0b3JbMF0gPT0gJy4nLFxuICAgICAgICBuYW1lT25seSA9IG1heWJlSUQgfHwgbWF5YmVDbGFzcyA/IHNlbGVjdG9yLnNsaWNlKDEpIDogc2VsZWN0b3IsIC8vIEVuc3VyZSB0aGF0IGEgMSBjaGFyIHRhZyBuYW1lIHN0aWxsIGdldHMgY2hlY2tlZFxuICAgICAgICBpc1NpbXBsZSA9IHNpbXBsZVNlbGVjdG9yUkUudGVzdChuYW1lT25seSlcbiAgICByZXR1cm4gKGlzRG9jdW1lbnQoZWxlbWVudCkgJiYgaXNTaW1wbGUgJiYgbWF5YmVJRCkgP1xuICAgICAgKCAoZm91bmQgPSBlbGVtZW50LmdldEVsZW1lbnRCeUlkKG5hbWVPbmx5KSkgPyBbZm91bmRdIDogW10gKSA6XG4gICAgICAoZWxlbWVudC5ub2RlVHlwZSAhPT0gMSAmJiBlbGVtZW50Lm5vZGVUeXBlICE9PSA5KSA/IFtdIDpcbiAgICAgIHNsaWNlLmNhbGwoXG4gICAgICAgIGlzU2ltcGxlICYmICFtYXliZUlEID9cbiAgICAgICAgICBtYXliZUNsYXNzID8gZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKG5hbWVPbmx5KSA6IC8vIElmIGl0J3Mgc2ltcGxlLCBpdCBjb3VsZCBiZSBhIGNsYXNzXG4gICAgICAgICAgZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShzZWxlY3RvcikgOiAvLyBPciBhIHRhZ1xuICAgICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgLy8gT3IgaXQncyBub3Qgc2ltcGxlLCBhbmQgd2UgbmVlZCB0byBxdWVyeSBhbGxcbiAgICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbHRlcmVkKG5vZGVzLCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBzZWxlY3RvciA9PSBudWxsID8gJChub2RlcykgOiAkKG5vZGVzKS5maWx0ZXIoc2VsZWN0b3IpXG4gIH1cblxuICAkLmNvbnRhaW5zID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zID9cbiAgICBmdW5jdGlvbihwYXJlbnQsIG5vZGUpIHtcbiAgICAgIHJldHVybiBwYXJlbnQgIT09IG5vZGUgJiYgcGFyZW50LmNvbnRhaW5zKG5vZGUpXG4gICAgfSA6XG4gICAgZnVuY3Rpb24ocGFyZW50LCBub2RlKSB7XG4gICAgICB3aGlsZSAobm9kZSAmJiAobm9kZSA9IG5vZGUucGFyZW50Tm9kZSkpXG4gICAgICAgIGlmIChub2RlID09PSBwYXJlbnQpIHJldHVybiB0cnVlXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgZnVuY3Rpb24gZnVuY0FyZyhjb250ZXh0LCBhcmcsIGlkeCwgcGF5bG9hZCkge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKGFyZykgPyBhcmcuY2FsbChjb250ZXh0LCBpZHgsIHBheWxvYWQpIDogYXJnXG4gIH1cblxuICBmdW5jdGlvbiBzZXRBdHRyaWJ1dGUobm9kZSwgbmFtZSwgdmFsdWUpIHtcbiAgICB2YWx1ZSA9PSBudWxsID8gbm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZSkgOiBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSlcbiAgfVxuXG4gIC8vIGFjY2VzcyBjbGFzc05hbWUgcHJvcGVydHkgd2hpbGUgcmVzcGVjdGluZyBTVkdBbmltYXRlZFN0cmluZ1xuICBmdW5jdGlvbiBjbGFzc05hbWUobm9kZSwgdmFsdWUpe1xuICAgIHZhciBrbGFzcyA9IG5vZGUuY2xhc3NOYW1lIHx8ICcnLFxuICAgICAgICBzdmcgICA9IGtsYXNzICYmIGtsYXNzLmJhc2VWYWwgIT09IHVuZGVmaW5lZFxuXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBzdmcgPyBrbGFzcy5iYXNlVmFsIDoga2xhc3NcbiAgICBzdmcgPyAoa2xhc3MuYmFzZVZhbCA9IHZhbHVlKSA6IChub2RlLmNsYXNzTmFtZSA9IHZhbHVlKVxuICB9XG5cbiAgLy8gXCJ0cnVlXCIgID0+IHRydWVcbiAgLy8gXCJmYWxzZVwiID0+IGZhbHNlXG4gIC8vIFwibnVsbFwiICA9PiBudWxsXG4gIC8vIFwiNDJcIiAgICA9PiA0MlxuICAvLyBcIjQyLjVcIiAgPT4gNDIuNVxuICAvLyBcIjA4XCIgICAgPT4gXCIwOFwiXG4gIC8vIEpTT04gICAgPT4gcGFyc2UgaWYgdmFsaWRcbiAgLy8gU3RyaW5nICA9PiBzZWxmXG4gIGZ1bmN0aW9uIGRlc2VyaWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHZhbHVlID9cbiAgICAgICAgdmFsdWUgPT0gXCJ0cnVlXCIgfHxcbiAgICAgICAgKCB2YWx1ZSA9PSBcImZhbHNlXCIgPyBmYWxzZSA6XG4gICAgICAgICAgdmFsdWUgPT0gXCJudWxsXCIgPyBudWxsIDpcbiAgICAgICAgICArdmFsdWUgKyBcIlwiID09IHZhbHVlID8gK3ZhbHVlIDpcbiAgICAgICAgICAvXltcXFtcXHtdLy50ZXN0KHZhbHVlKSA/ICQucGFyc2VKU09OKHZhbHVlKSA6XG4gICAgICAgICAgdmFsdWUgKVxuICAgICAgICA6IHZhbHVlXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG4gIH1cblxuICAkLnR5cGUgPSB0eXBlXG4gICQuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb25cbiAgJC5pc1dpbmRvdyA9IGlzV2luZG93XG4gICQuaXNBcnJheSA9IGlzQXJyYXlcbiAgJC5pc1BsYWluT2JqZWN0ID0gaXNQbGFpbk9iamVjdFxuXG4gICQuaXNFbXB0eU9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBuYW1lXG4gICAgZm9yIChuYW1lIGluIG9iaikgcmV0dXJuIGZhbHNlXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gICQuaW5BcnJheSA9IGZ1bmN0aW9uKGVsZW0sIGFycmF5LCBpKXtcbiAgICByZXR1cm4gZW1wdHlBcnJheS5pbmRleE9mLmNhbGwoYXJyYXksIGVsZW0sIGkpXG4gIH1cblxuICAkLmNhbWVsQ2FzZSA9IGNhbWVsaXplXG4gICQudHJpbSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBzdHIgPT0gbnVsbCA/IFwiXCIgOiBTdHJpbmcucHJvdG90eXBlLnRyaW0uY2FsbChzdHIpXG4gIH1cblxuICAvLyBwbHVnaW4gY29tcGF0aWJpbGl0eVxuICAkLnV1aWQgPSAwXG4gICQuc3VwcG9ydCA9IHsgfVxuICAkLmV4cHIgPSB7IH1cblxuICAkLm1hcCA9IGZ1bmN0aW9uKGVsZW1lbnRzLCBjYWxsYmFjayl7XG4gICAgdmFyIHZhbHVlLCB2YWx1ZXMgPSBbXSwgaSwga2V5XG4gICAgaWYgKGxpa2VBcnJheShlbGVtZW50cykpXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsdWUgPSBjYWxsYmFjayhlbGVtZW50c1tpXSwgaSlcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHZhbHVlcy5wdXNoKHZhbHVlKVxuICAgICAgfVxuICAgIGVsc2VcbiAgICAgIGZvciAoa2V5IGluIGVsZW1lbnRzKSB7XG4gICAgICAgIHZhbHVlID0gY2FsbGJhY2soZWxlbWVudHNba2V5XSwga2V5KVxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkgdmFsdWVzLnB1c2godmFsdWUpXG4gICAgICB9XG4gICAgcmV0dXJuIGZsYXR0ZW4odmFsdWVzKVxuICB9XG5cbiAgJC5lYWNoID0gZnVuY3Rpb24oZWxlbWVudHMsIGNhbGxiYWNrKXtcbiAgICB2YXIgaSwga2V5XG4gICAgaWYgKGxpa2VBcnJheShlbGVtZW50cykpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKylcbiAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoZWxlbWVudHNbaV0sIGksIGVsZW1lbnRzW2ldKSA9PT0gZmFsc2UpIHJldHVybiBlbGVtZW50c1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGtleSBpbiBlbGVtZW50cylcbiAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoZWxlbWVudHNba2V5XSwga2V5LCBlbGVtZW50c1trZXldKSA9PT0gZmFsc2UpIHJldHVybiBlbGVtZW50c1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50c1xuICB9XG5cbiAgJC5ncmVwID0gZnVuY3Rpb24oZWxlbWVudHMsIGNhbGxiYWNrKXtcbiAgICByZXR1cm4gZmlsdGVyLmNhbGwoZWxlbWVudHMsIGNhbGxiYWNrKVxuICB9XG5cbiAgaWYgKHdpbmRvdy5KU09OKSAkLnBhcnNlSlNPTiA9IEpTT04ucGFyc2VcblxuICAvLyBQb3B1bGF0ZSB0aGUgY2xhc3MydHlwZSBtYXBcbiAgJC5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvclwiLnNwbGl0KFwiIFwiKSwgZnVuY3Rpb24oaSwgbmFtZSkge1xuICAgIGNsYXNzMnR5cGVbIFwiW29iamVjdCBcIiArIG5hbWUgKyBcIl1cIiBdID0gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIH0pXG5cbiAgLy8gRGVmaW5lIG1ldGhvZHMgdGhhdCB3aWxsIGJlIGF2YWlsYWJsZSBvbiBhbGxcbiAgLy8gWmVwdG8gY29sbGVjdGlvbnNcbiAgJC5mbiA9IHtcbiAgICAvLyBCZWNhdXNlIGEgY29sbGVjdGlvbiBhY3RzIGxpa2UgYW4gYXJyYXlcbiAgICAvLyBjb3B5IG92ZXIgdGhlc2UgdXNlZnVsIGFycmF5IGZ1bmN0aW9ucy5cbiAgICBmb3JFYWNoOiBlbXB0eUFycmF5LmZvckVhY2gsXG4gICAgcmVkdWNlOiBlbXB0eUFycmF5LnJlZHVjZSxcbiAgICBwdXNoOiBlbXB0eUFycmF5LnB1c2gsXG4gICAgc29ydDogZW1wdHlBcnJheS5zb3J0LFxuICAgIGluZGV4T2Y6IGVtcHR5QXJyYXkuaW5kZXhPZixcbiAgICBjb25jYXQ6IGVtcHR5QXJyYXkuY29uY2F0LFxuXG4gICAgLy8gYG1hcGAgYW5kIGBzbGljZWAgaW4gdGhlIGpRdWVyeSBBUEkgd29yayBkaWZmZXJlbnRseVxuICAgIC8vIGZyb20gdGhlaXIgYXJyYXkgY291bnRlcnBhcnRzXG4gICAgbWFwOiBmdW5jdGlvbihmbil7XG4gICAgICByZXR1cm4gJCgkLm1hcCh0aGlzLCBmdW5jdGlvbihlbCwgaSl7IHJldHVybiBmbi5jYWxsKGVsLCBpLCBlbCkgfSkpXG4gICAgfSxcbiAgICBzbGljZTogZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiAkKHNsaWNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpXG4gICAgfSxcblxuICAgIHJlYWR5OiBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAvLyBuZWVkIHRvIGNoZWNrIGlmIGRvY3VtZW50LmJvZHkgZXhpc3RzIGZvciBJRSBhcyB0aGF0IGJyb3dzZXIgcmVwb3J0c1xuICAgICAgLy8gZG9jdW1lbnQgcmVhZHkgd2hlbiBpdCBoYXNuJ3QgeWV0IGNyZWF0ZWQgdGhlIGJvZHkgZWxlbWVudFxuICAgICAgaWYgKHJlYWR5UkUudGVzdChkb2N1bWVudC5yZWFkeVN0YXRlKSAmJiBkb2N1bWVudC5ib2R5KSBjYWxsYmFjaygkKVxuICAgICAgZWxzZSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXsgY2FsbGJhY2soJCkgfSwgZmFsc2UpXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbihpZHgpe1xuICAgICAgcmV0dXJuIGlkeCA9PT0gdW5kZWZpbmVkID8gc2xpY2UuY2FsbCh0aGlzKSA6IHRoaXNbaWR4ID49IDAgPyBpZHggOiBpZHggKyB0aGlzLmxlbmd0aF1cbiAgICB9LFxuICAgIHRvQXJyYXk6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLmdldCgpIH0sXG4gICAgc2l6ZTogZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiB0aGlzLmxlbmd0aFxuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICBpZiAodGhpcy5wYXJlbnROb2RlICE9IG51bGwpXG4gICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpXG4gICAgICB9KVxuICAgIH0sXG4gICAgZWFjaDogZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgZW1wdHlBcnJheS5ldmVyeS5jYWxsKHRoaXMsIGZ1bmN0aW9uKGVsLCBpZHgpe1xuICAgICAgICByZXR1cm4gY2FsbGJhY2suY2FsbChlbCwgaWR4LCBlbCkgIT09IGZhbHNlXG4gICAgICB9KVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuICAgIGZpbHRlcjogZnVuY3Rpb24oc2VsZWN0b3Ipe1xuICAgICAgaWYgKGlzRnVuY3Rpb24oc2VsZWN0b3IpKSByZXR1cm4gdGhpcy5ub3QodGhpcy5ub3Qoc2VsZWN0b3IpKVxuICAgICAgcmV0dXJuICQoZmlsdGVyLmNhbGwodGhpcywgZnVuY3Rpb24oZWxlbWVudCl7XG4gICAgICAgIHJldHVybiB6ZXB0by5tYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKVxuICAgICAgfSkpXG4gICAgfSxcbiAgICBhZGQ6IGZ1bmN0aW9uKHNlbGVjdG9yLGNvbnRleHQpe1xuICAgICAgcmV0dXJuICQodW5pcSh0aGlzLmNvbmNhdCgkKHNlbGVjdG9yLGNvbnRleHQpKSkpXG4gICAgfSxcbiAgICBpczogZnVuY3Rpb24oc2VsZWN0b3Ipe1xuICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoID4gMCAmJiB6ZXB0by5tYXRjaGVzKHRoaXNbMF0sIHNlbGVjdG9yKVxuICAgIH0sXG4gICAgbm90OiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICB2YXIgbm9kZXM9W11cbiAgICAgIGlmIChpc0Z1bmN0aW9uKHNlbGVjdG9yKSAmJiBzZWxlY3Rvci5jYWxsICE9PSB1bmRlZmluZWQpXG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbihpZHgpe1xuICAgICAgICAgIGlmICghc2VsZWN0b3IuY2FsbCh0aGlzLGlkeCkpIG5vZGVzLnB1c2godGhpcylcbiAgICAgICAgfSlcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgZXhjbHVkZXMgPSB0eXBlb2Ygc2VsZWN0b3IgPT0gJ3N0cmluZycgPyB0aGlzLmZpbHRlcihzZWxlY3RvcikgOlxuICAgICAgICAgIChsaWtlQXJyYXkoc2VsZWN0b3IpICYmIGlzRnVuY3Rpb24oc2VsZWN0b3IuaXRlbSkpID8gc2xpY2UuY2FsbChzZWxlY3RvcikgOiAkKHNlbGVjdG9yKVxuICAgICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24oZWwpe1xuICAgICAgICAgIGlmIChleGNsdWRlcy5pbmRleE9mKGVsKSA8IDApIG5vZGVzLnB1c2goZWwpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICByZXR1cm4gJChub2RlcylcbiAgICB9LFxuICAgIGhhczogZnVuY3Rpb24oc2VsZWN0b3Ipe1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBpc09iamVjdChzZWxlY3RvcikgP1xuICAgICAgICAgICQuY29udGFpbnModGhpcywgc2VsZWN0b3IpIDpcbiAgICAgICAgICAkKHRoaXMpLmZpbmQoc2VsZWN0b3IpLnNpemUoKVxuICAgICAgfSlcbiAgICB9LFxuICAgIGVxOiBmdW5jdGlvbihpZHgpe1xuICAgICAgcmV0dXJuIGlkeCA9PT0gLTEgPyB0aGlzLnNsaWNlKGlkeCkgOiB0aGlzLnNsaWNlKGlkeCwgKyBpZHggKyAxKVxuICAgIH0sXG4gICAgZmlyc3Q6IGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgZWwgPSB0aGlzWzBdXG4gICAgICByZXR1cm4gZWwgJiYgIWlzT2JqZWN0KGVsKSA/IGVsIDogJChlbClcbiAgICB9LFxuICAgIGxhc3Q6IGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgZWwgPSB0aGlzW3RoaXMubGVuZ3RoIC0gMV1cbiAgICAgIHJldHVybiBlbCAmJiAhaXNPYmplY3QoZWwpID8gZWwgOiAkKGVsKVxuICAgIH0sXG4gICAgZmluZDogZnVuY3Rpb24oc2VsZWN0b3Ipe1xuICAgICAgdmFyIHJlc3VsdCwgJHRoaXMgPSB0aGlzXG4gICAgICBpZiAoIXNlbGVjdG9yKSByZXN1bHQgPSAkKClcbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBzZWxlY3RvciA9PSAnb2JqZWN0JylcbiAgICAgICAgcmVzdWx0ID0gJChzZWxlY3RvcikuZmlsdGVyKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgdmFyIG5vZGUgPSB0aGlzXG4gICAgICAgICAgcmV0dXJuIGVtcHR5QXJyYXkuc29tZS5jYWxsKCR0aGlzLCBmdW5jdGlvbihwYXJlbnQpe1xuICAgICAgICAgICAgcmV0dXJuICQuY29udGFpbnMocGFyZW50LCBub2RlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICBlbHNlIGlmICh0aGlzLmxlbmd0aCA9PSAxKSByZXN1bHQgPSAkKHplcHRvLnFzYSh0aGlzWzBdLCBzZWxlY3RvcikpXG4gICAgICBlbHNlIHJlc3VsdCA9IHRoaXMubWFwKGZ1bmN0aW9uKCl7IHJldHVybiB6ZXB0by5xc2EodGhpcywgc2VsZWN0b3IpIH0pXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSxcbiAgICBjbG9zZXN0OiBmdW5jdGlvbihzZWxlY3RvciwgY29udGV4dCl7XG4gICAgICB2YXIgbm9kZSA9IHRoaXNbMF0sIGNvbGxlY3Rpb24gPSBmYWxzZVxuICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PSAnb2JqZWN0JykgY29sbGVjdGlvbiA9ICQoc2VsZWN0b3IpXG4gICAgICB3aGlsZSAobm9kZSAmJiAhKGNvbGxlY3Rpb24gPyBjb2xsZWN0aW9uLmluZGV4T2Yobm9kZSkgPj0gMCA6IHplcHRvLm1hdGNoZXMobm9kZSwgc2VsZWN0b3IpKSlcbiAgICAgICAgbm9kZSA9IG5vZGUgIT09IGNvbnRleHQgJiYgIWlzRG9jdW1lbnQobm9kZSkgJiYgbm9kZS5wYXJlbnROb2RlXG4gICAgICByZXR1cm4gJChub2RlKVxuICAgIH0sXG4gICAgcGFyZW50czogZnVuY3Rpb24oc2VsZWN0b3Ipe1xuICAgICAgdmFyIGFuY2VzdG9ycyA9IFtdLCBub2RlcyA9IHRoaXNcbiAgICAgIHdoaWxlIChub2Rlcy5sZW5ndGggPiAwKVxuICAgICAgICBub2RlcyA9ICQubWFwKG5vZGVzLCBmdW5jdGlvbihub2RlKXtcbiAgICAgICAgICBpZiAoKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpICYmICFpc0RvY3VtZW50KG5vZGUpICYmIGFuY2VzdG9ycy5pbmRleE9mKG5vZGUpIDwgMCkge1xuICAgICAgICAgICAgYW5jZXN0b3JzLnB1c2gobm9kZSlcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgcmV0dXJuIGZpbHRlcmVkKGFuY2VzdG9ycywgc2VsZWN0b3IpXG4gICAgfSxcbiAgICBwYXJlbnQ6IGZ1bmN0aW9uKHNlbGVjdG9yKXtcbiAgICAgIHJldHVybiBmaWx0ZXJlZCh1bmlxKHRoaXMucGx1Y2soJ3BhcmVudE5vZGUnKSksIHNlbGVjdG9yKVxuICAgIH0sXG4gICAgY2hpbGRyZW46IGZ1bmN0aW9uKHNlbGVjdG9yKXtcbiAgICAgIHJldHVybiBmaWx0ZXJlZCh0aGlzLm1hcChmdW5jdGlvbigpeyByZXR1cm4gY2hpbGRyZW4odGhpcykgfSksIHNlbGVjdG9yKVxuICAgIH0sXG4gICAgY29udGVudHM6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCkgeyByZXR1cm4gc2xpY2UuY2FsbCh0aGlzLmNoaWxkTm9kZXMpIH0pXG4gICAgfSxcbiAgICBzaWJsaW5nczogZnVuY3Rpb24oc2VsZWN0b3Ipe1xuICAgICAgcmV0dXJuIGZpbHRlcmVkKHRoaXMubWFwKGZ1bmN0aW9uKGksIGVsKXtcbiAgICAgICAgcmV0dXJuIGZpbHRlci5jYWxsKGNoaWxkcmVuKGVsLnBhcmVudE5vZGUpLCBmdW5jdGlvbihjaGlsZCl7IHJldHVybiBjaGlsZCE9PWVsIH0pXG4gICAgICB9KSwgc2VsZWN0b3IpXG4gICAgfSxcbiAgICBlbXB0eTogZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXsgdGhpcy5pbm5lckhUTUwgPSAnJyB9KVxuICAgIH0sXG4gICAgLy8gYHBsdWNrYCBpcyBib3Jyb3dlZCBmcm9tIFByb3RvdHlwZS5qc1xuICAgIHBsdWNrOiBmdW5jdGlvbihwcm9wZXJ0eSl7XG4gICAgICByZXR1cm4gJC5tYXAodGhpcywgZnVuY3Rpb24oZWwpeyByZXR1cm4gZWxbcHJvcGVydHldIH0pXG4gICAgfSxcbiAgICBzaG93OiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIgJiYgKHRoaXMuc3R5bGUuZGlzcGxheSA9ICcnKVxuICAgICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLCAnJykuZ2V0UHJvcGVydHlWYWx1ZShcImRpc3BsYXlcIikgPT0gXCJub25lXCIpXG4gICAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gZGVmYXVsdERpc3BsYXkodGhpcy5ub2RlTmFtZSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICByZXBsYWNlV2l0aDogZnVuY3Rpb24obmV3Q29udGVudCl7XG4gICAgICByZXR1cm4gdGhpcy5iZWZvcmUobmV3Q29udGVudCkucmVtb3ZlKClcbiAgICB9LFxuICAgIHdyYXA6IGZ1bmN0aW9uKHN0cnVjdHVyZSl7XG4gICAgICB2YXIgZnVuYyA9IGlzRnVuY3Rpb24oc3RydWN0dXJlKVxuICAgICAgaWYgKHRoaXNbMF0gJiYgIWZ1bmMpXG4gICAgICAgIHZhciBkb20gICA9ICQoc3RydWN0dXJlKS5nZXQoMCksXG4gICAgICAgICAgICBjbG9uZSA9IGRvbS5wYXJlbnROb2RlIHx8IHRoaXMubGVuZ3RoID4gMVxuXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgICAgJCh0aGlzKS53cmFwQWxsKFxuICAgICAgICAgIGZ1bmMgPyBzdHJ1Y3R1cmUuY2FsbCh0aGlzLCBpbmRleCkgOlxuICAgICAgICAgICAgY2xvbmUgPyBkb20uY2xvbmVOb2RlKHRydWUpIDogZG9tXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgfSxcbiAgICB3cmFwQWxsOiBmdW5jdGlvbihzdHJ1Y3R1cmUpe1xuICAgICAgaWYgKHRoaXNbMF0pIHtcbiAgICAgICAgJCh0aGlzWzBdKS5iZWZvcmUoc3RydWN0dXJlID0gJChzdHJ1Y3R1cmUpKVxuICAgICAgICB2YXIgY2hpbGRyZW5cbiAgICAgICAgLy8gZHJpbGwgZG93biB0byB0aGUgaW5tb3N0IGVsZW1lbnRcbiAgICAgICAgd2hpbGUgKChjaGlsZHJlbiA9IHN0cnVjdHVyZS5jaGlsZHJlbigpKS5sZW5ndGgpIHN0cnVjdHVyZSA9IGNoaWxkcmVuLmZpcnN0KClcbiAgICAgICAgJChzdHJ1Y3R1cmUpLmFwcGVuZCh0aGlzKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuICAgIHdyYXBJbm5lcjogZnVuY3Rpb24oc3RydWN0dXJlKXtcbiAgICAgIHZhciBmdW5jID0gaXNGdW5jdGlvbihzdHJ1Y3R1cmUpXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgICAgdmFyIHNlbGYgPSAkKHRoaXMpLCBjb250ZW50cyA9IHNlbGYuY29udGVudHMoKSxcbiAgICAgICAgICAgIGRvbSAgPSBmdW5jID8gc3RydWN0dXJlLmNhbGwodGhpcywgaW5kZXgpIDogc3RydWN0dXJlXG4gICAgICAgIGNvbnRlbnRzLmxlbmd0aCA/IGNvbnRlbnRzLndyYXBBbGwoZG9tKSA6IHNlbGYuYXBwZW5kKGRvbSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICB1bndyYXA6IGZ1bmN0aW9uKCl7XG4gICAgICB0aGlzLnBhcmVudCgpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS5yZXBsYWNlV2l0aCgkKHRoaXMpLmNoaWxkcmVuKCkpXG4gICAgICB9KVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuICAgIGNsb25lOiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLmNsb25lTm9kZSh0cnVlKSB9KVxuICAgIH0sXG4gICAgaGlkZTogZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiB0aGlzLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpXG4gICAgfSxcbiAgICB0b2dnbGU6IGZ1bmN0aW9uKHNldHRpbmcpe1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpXG4gICAgICAgIDsoc2V0dGluZyA9PT0gdW5kZWZpbmVkID8gZWwuY3NzKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIiA6IHNldHRpbmcpID8gZWwuc2hvdygpIDogZWwuaGlkZSgpXG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJldjogZnVuY3Rpb24oc2VsZWN0b3IpeyByZXR1cm4gJCh0aGlzLnBsdWNrKCdwcmV2aW91c0VsZW1lbnRTaWJsaW5nJykpLmZpbHRlcihzZWxlY3RvciB8fCAnKicpIH0sXG4gICAgbmV4dDogZnVuY3Rpb24oc2VsZWN0b3IpeyByZXR1cm4gJCh0aGlzLnBsdWNrKCduZXh0RWxlbWVudFNpYmxpbmcnKSkuZmlsdGVyKHNlbGVjdG9yIHx8ICcqJykgfSxcbiAgICBodG1sOiBmdW5jdGlvbihodG1sKXtcbiAgICAgIHJldHVybiAwIGluIGFyZ3VtZW50cyA/XG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbihpZHgpe1xuICAgICAgICAgIHZhciBvcmlnaW5IdG1sID0gdGhpcy5pbm5lckhUTUxcbiAgICAgICAgICAkKHRoaXMpLmVtcHR5KCkuYXBwZW5kKCBmdW5jQXJnKHRoaXMsIGh0bWwsIGlkeCwgb3JpZ2luSHRtbCkgKVxuICAgICAgICB9KSA6XG4gICAgICAgICgwIGluIHRoaXMgPyB0aGlzWzBdLmlubmVySFRNTCA6IG51bGwpXG4gICAgfSxcbiAgICB0ZXh0OiBmdW5jdGlvbih0ZXh0KXtcbiAgICAgIHJldHVybiAwIGluIGFyZ3VtZW50cyA/XG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbihpZHgpe1xuICAgICAgICAgIHZhciBuZXdUZXh0ID0gZnVuY0FyZyh0aGlzLCB0ZXh0LCBpZHgsIHRoaXMudGV4dENvbnRlbnQpXG4gICAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IG5ld1RleHQgPT0gbnVsbCA/ICcnIDogJycrbmV3VGV4dFxuICAgICAgICB9KSA6XG4gICAgICAgICgwIGluIHRoaXMgPyB0aGlzWzBdLnRleHRDb250ZW50IDogbnVsbClcbiAgICB9LFxuICAgIGF0dHI6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKXtcbiAgICAgIHZhciByZXN1bHRcbiAgICAgIHJldHVybiAodHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgJiYgISgxIGluIGFyZ3VtZW50cykpID9cbiAgICAgICAgKCF0aGlzLmxlbmd0aCB8fCB0aGlzWzBdLm5vZGVUeXBlICE9PSAxID8gdW5kZWZpbmVkIDpcbiAgICAgICAgICAoIShyZXN1bHQgPSB0aGlzWzBdLmdldEF0dHJpYnV0ZShuYW1lKSkgJiYgbmFtZSBpbiB0aGlzWzBdKSA/IHRoaXNbMF1bbmFtZV0gOiByZXN1bHRcbiAgICAgICAgKSA6XG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbihpZHgpe1xuICAgICAgICAgIGlmICh0aGlzLm5vZGVUeXBlICE9PSAxKSByZXR1cm5cbiAgICAgICAgICBpZiAoaXNPYmplY3QobmFtZSkpIGZvciAoa2V5IGluIG5hbWUpIHNldEF0dHJpYnV0ZSh0aGlzLCBrZXksIG5hbWVba2V5XSlcbiAgICAgICAgICBlbHNlIHNldEF0dHJpYnV0ZSh0aGlzLCBuYW1lLCBmdW5jQXJnKHRoaXMsIHZhbHVlLCBpZHgsIHRoaXMuZ2V0QXR0cmlidXRlKG5hbWUpKSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIHJlbW92ZUF0dHI6IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpeyB0aGlzLm5vZGVUeXBlID09PSAxICYmIG5hbWUuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uKGF0dHJpYnV0ZSl7XG4gICAgICAgIHNldEF0dHJpYnV0ZSh0aGlzLCBhdHRyaWJ1dGUpXG4gICAgICB9LCB0aGlzKX0pXG4gICAgfSxcbiAgICBwcm9wOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSl7XG4gICAgICBuYW1lID0gcHJvcE1hcFtuYW1lXSB8fCBuYW1lXG4gICAgICByZXR1cm4gKDEgaW4gYXJndW1lbnRzKSA/XG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbihpZHgpe1xuICAgICAgICAgIHRoaXNbbmFtZV0gPSBmdW5jQXJnKHRoaXMsIHZhbHVlLCBpZHgsIHRoaXNbbmFtZV0pXG4gICAgICAgIH0pIDpcbiAgICAgICAgKHRoaXNbMF0gJiYgdGhpc1swXVtuYW1lXSlcbiAgICB9LFxuICAgIGRhdGE6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKXtcbiAgICAgIHZhciBhdHRyTmFtZSA9ICdkYXRhLScgKyBuYW1lLnJlcGxhY2UoY2FwaXRhbFJFLCAnLSQxJykudG9Mb3dlckNhc2UoKVxuXG4gICAgICB2YXIgZGF0YSA9ICgxIGluIGFyZ3VtZW50cykgP1xuICAgICAgICB0aGlzLmF0dHIoYXR0ck5hbWUsIHZhbHVlKSA6XG4gICAgICAgIHRoaXMuYXR0cihhdHRyTmFtZSlcblxuICAgICAgcmV0dXJuIGRhdGEgIT09IG51bGwgPyBkZXNlcmlhbGl6ZVZhbHVlKGRhdGEpIDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICB2YWw6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIHJldHVybiAwIGluIGFyZ3VtZW50cyA/XG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbihpZHgpe1xuICAgICAgICAgIHRoaXMudmFsdWUgPSBmdW5jQXJnKHRoaXMsIHZhbHVlLCBpZHgsIHRoaXMudmFsdWUpXG4gICAgICAgIH0pIDpcbiAgICAgICAgKHRoaXNbMF0gJiYgKHRoaXNbMF0ubXVsdGlwbGUgP1xuICAgICAgICAgICAkKHRoaXNbMF0pLmZpbmQoJ29wdGlvbicpLmZpbHRlcihmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5zZWxlY3RlZCB9KS5wbHVjaygndmFsdWUnKSA6XG4gICAgICAgICAgIHRoaXNbMF0udmFsdWUpXG4gICAgICAgIClcbiAgICB9LFxuICAgIG9mZnNldDogZnVuY3Rpb24oY29vcmRpbmF0ZXMpe1xuICAgICAgaWYgKGNvb3JkaW5hdGVzKSByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgICAgIGNvb3JkcyA9IGZ1bmNBcmcodGhpcywgY29vcmRpbmF0ZXMsIGluZGV4LCAkdGhpcy5vZmZzZXQoKSksXG4gICAgICAgICAgICBwYXJlbnRPZmZzZXQgPSAkdGhpcy5vZmZzZXRQYXJlbnQoKS5vZmZzZXQoKSxcbiAgICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgICB0b3A6ICBjb29yZHMudG9wICAtIHBhcmVudE9mZnNldC50b3AsXG4gICAgICAgICAgICAgIGxlZnQ6IGNvb3Jkcy5sZWZ0IC0gcGFyZW50T2Zmc2V0LmxlZnRcbiAgICAgICAgICAgIH1cblxuICAgICAgICBpZiAoJHRoaXMuY3NzKCdwb3NpdGlvbicpID09ICdzdGF0aWMnKSBwcm9wc1sncG9zaXRpb24nXSA9ICdyZWxhdGl2ZSdcbiAgICAgICAgJHRoaXMuY3NzKHByb3BzKVxuICAgICAgfSlcbiAgICAgIGlmICghdGhpcy5sZW5ndGgpIHJldHVybiBudWxsXG4gICAgICB2YXIgb2JqID0gdGhpc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogb2JqLmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgICAgIHRvcDogb2JqLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgICAgd2lkdGg6IE1hdGgucm91bmQob2JqLndpZHRoKSxcbiAgICAgICAgaGVpZ2h0OiBNYXRoLnJvdW5kKG9iai5oZWlnaHQpXG4gICAgICB9XG4gICAgfSxcbiAgICBjc3M6IGZ1bmN0aW9uKHByb3BlcnR5LCB2YWx1ZSl7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGUsIGVsZW1lbnQgPSB0aGlzWzBdXG4gICAgICAgIGlmKCFlbGVtZW50KSByZXR1cm5cbiAgICAgICAgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgJycpXG4gICAgICAgIGlmICh0eXBlb2YgcHJvcGVydHkgPT0gJ3N0cmluZycpXG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQuc3R5bGVbY2FtZWxpemUocHJvcGVydHkpXSB8fCBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpXG4gICAgICAgIGVsc2UgaWYgKGlzQXJyYXkocHJvcGVydHkpKSB7XG4gICAgICAgICAgdmFyIHByb3BzID0ge31cbiAgICAgICAgICAkLmVhY2gocHJvcGVydHksIGZ1bmN0aW9uKF8sIHByb3Ape1xuICAgICAgICAgICAgcHJvcHNbcHJvcF0gPSAoZWxlbWVudC5zdHlsZVtjYW1lbGl6ZShwcm9wKV0gfHwgY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByb3ApKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIHByb3BzXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGNzcyA9ICcnXG4gICAgICBpZiAodHlwZShwcm9wZXJ0eSkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMClcbiAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oKXsgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShkYXNoZXJpemUocHJvcGVydHkpKSB9KVxuICAgICAgICBlbHNlXG4gICAgICAgICAgY3NzID0gZGFzaGVyaXplKHByb3BlcnR5KSArIFwiOlwiICsgbWF5YmVBZGRQeChwcm9wZXJ0eSwgdmFsdWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGtleSBpbiBwcm9wZXJ0eSlcbiAgICAgICAgICBpZiAoIXByb3BlcnR5W2tleV0gJiYgcHJvcGVydHlba2V5XSAhPT0gMClcbiAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpeyB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KGRhc2hlcml6ZShrZXkpKSB9KVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGNzcyArPSBkYXNoZXJpemUoa2V5KSArICc6JyArIG1heWJlQWRkUHgoa2V5LCBwcm9wZXJ0eVtrZXldKSArICc7J1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7IHRoaXMuc3R5bGUuY3NzVGV4dCArPSAnOycgKyBjc3MgfSlcbiAgICB9LFxuICAgIGluZGV4OiBmdW5jdGlvbihlbGVtZW50KXtcbiAgICAgIHJldHVybiBlbGVtZW50ID8gdGhpcy5pbmRleE9mKCQoZWxlbWVudClbMF0pIDogdGhpcy5wYXJlbnQoKS5jaGlsZHJlbigpLmluZGV4T2YodGhpc1swXSlcbiAgICB9LFxuICAgIGhhc0NsYXNzOiBmdW5jdGlvbihuYW1lKXtcbiAgICAgIGlmICghbmFtZSkgcmV0dXJuIGZhbHNlXG4gICAgICByZXR1cm4gZW1wdHlBcnJheS5zb21lLmNhbGwodGhpcywgZnVuY3Rpb24oZWwpe1xuICAgICAgICByZXR1cm4gdGhpcy50ZXN0KGNsYXNzTmFtZShlbCkpXG4gICAgICB9LCBjbGFzc1JFKG5hbWUpKVxuICAgIH0sXG4gICAgYWRkQ2xhc3M6IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgaWYgKCFuYW1lKSByZXR1cm4gdGhpc1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihpZHgpe1xuICAgICAgICBpZiAoISgnY2xhc3NOYW1lJyBpbiB0aGlzKSkgcmV0dXJuXG4gICAgICAgIGNsYXNzTGlzdCA9IFtdXG4gICAgICAgIHZhciBjbHMgPSBjbGFzc05hbWUodGhpcyksIG5ld05hbWUgPSBmdW5jQXJnKHRoaXMsIG5hbWUsIGlkeCwgY2xzKVxuICAgICAgICBuZXdOYW1lLnNwbGl0KC9cXHMrL2cpLmZvckVhY2goZnVuY3Rpb24oa2xhc3Mpe1xuICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcyhrbGFzcykpIGNsYXNzTGlzdC5wdXNoKGtsYXNzKVxuICAgICAgICB9LCB0aGlzKVxuICAgICAgICBjbGFzc0xpc3QubGVuZ3RoICYmIGNsYXNzTmFtZSh0aGlzLCBjbHMgKyAoY2xzID8gXCIgXCIgOiBcIlwiKSArIGNsYXNzTGlzdC5qb2luKFwiIFwiKSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICByZW1vdmVDbGFzczogZnVuY3Rpb24obmFtZSl7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgIGlmICghKCdjbGFzc05hbWUnIGluIHRoaXMpKSByZXR1cm5cbiAgICAgICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGNsYXNzTmFtZSh0aGlzLCAnJylcbiAgICAgICAgY2xhc3NMaXN0ID0gY2xhc3NOYW1lKHRoaXMpXG4gICAgICAgIGZ1bmNBcmcodGhpcywgbmFtZSwgaWR4LCBjbGFzc0xpc3QpLnNwbGl0KC9cXHMrL2cpLmZvckVhY2goZnVuY3Rpb24oa2xhc3Mpe1xuICAgICAgICAgIGNsYXNzTGlzdCA9IGNsYXNzTGlzdC5yZXBsYWNlKGNsYXNzUkUoa2xhc3MpLCBcIiBcIilcbiAgICAgICAgfSlcbiAgICAgICAgY2xhc3NOYW1lKHRoaXMsIGNsYXNzTGlzdC50cmltKCkpXG4gICAgICB9KVxuICAgIH0sXG4gICAgdG9nZ2xlQ2xhc3M6IGZ1bmN0aW9uKG5hbWUsIHdoZW4pe1xuICAgICAgaWYgKCFuYW1lKSByZXR1cm4gdGhpc1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihpZHgpe1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLCBuYW1lcyA9IGZ1bmNBcmcodGhpcywgbmFtZSwgaWR4LCBjbGFzc05hbWUodGhpcykpXG4gICAgICAgIG5hbWVzLnNwbGl0KC9cXHMrL2cpLmZvckVhY2goZnVuY3Rpb24oa2xhc3Mpe1xuICAgICAgICAgICh3aGVuID09PSB1bmRlZmluZWQgPyAhJHRoaXMuaGFzQ2xhc3Moa2xhc3MpIDogd2hlbikgP1xuICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3Moa2xhc3MpIDogJHRoaXMucmVtb3ZlQ2xhc3Moa2xhc3MpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0sXG4gICAgc2Nyb2xsVG9wOiBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZiAoIXRoaXMubGVuZ3RoKSByZXR1cm5cbiAgICAgIHZhciBoYXNTY3JvbGxUb3AgPSAnc2Nyb2xsVG9wJyBpbiB0aGlzWzBdXG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGhhc1Njcm9sbFRvcCA/IHRoaXNbMF0uc2Nyb2xsVG9wIDogdGhpc1swXS5wYWdlWU9mZnNldFxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChoYXNTY3JvbGxUb3AgP1xuICAgICAgICBmdW5jdGlvbigpeyB0aGlzLnNjcm9sbFRvcCA9IHZhbHVlIH0gOlxuICAgICAgICBmdW5jdGlvbigpeyB0aGlzLnNjcm9sbFRvKHRoaXMuc2Nyb2xsWCwgdmFsdWUpIH0pXG4gICAgfSxcbiAgICBzY3JvbGxMZWZ0OiBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZiAoIXRoaXMubGVuZ3RoKSByZXR1cm5cbiAgICAgIHZhciBoYXNTY3JvbGxMZWZ0ID0gJ3Njcm9sbExlZnQnIGluIHRoaXNbMF1cbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaGFzU2Nyb2xsTGVmdCA/IHRoaXNbMF0uc2Nyb2xsTGVmdCA6IHRoaXNbMF0ucGFnZVhPZmZzZXRcbiAgICAgIHJldHVybiB0aGlzLmVhY2goaGFzU2Nyb2xsTGVmdCA/XG4gICAgICAgIGZ1bmN0aW9uKCl7IHRoaXMuc2Nyb2xsTGVmdCA9IHZhbHVlIH0gOlxuICAgICAgICBmdW5jdGlvbigpeyB0aGlzLnNjcm9sbFRvKHZhbHVlLCB0aGlzLnNjcm9sbFkpIH0pXG4gICAgfSxcbiAgICBwb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXRoaXMubGVuZ3RoKSByZXR1cm5cblxuICAgICAgdmFyIGVsZW0gPSB0aGlzWzBdLFxuICAgICAgICAvLyBHZXQgKnJlYWwqIG9mZnNldFBhcmVudFxuICAgICAgICBvZmZzZXRQYXJlbnQgPSB0aGlzLm9mZnNldFBhcmVudCgpLFxuICAgICAgICAvLyBHZXQgY29ycmVjdCBvZmZzZXRzXG4gICAgICAgIG9mZnNldCAgICAgICA9IHRoaXMub2Zmc2V0KCksXG4gICAgICAgIHBhcmVudE9mZnNldCA9IHJvb3ROb2RlUkUudGVzdChvZmZzZXRQYXJlbnRbMF0ubm9kZU5hbWUpID8geyB0b3A6IDAsIGxlZnQ6IDAgfSA6IG9mZnNldFBhcmVudC5vZmZzZXQoKVxuXG4gICAgICAvLyBTdWJ0cmFjdCBlbGVtZW50IG1hcmdpbnNcbiAgICAgIC8vIG5vdGU6IHdoZW4gYW4gZWxlbWVudCBoYXMgbWFyZ2luOiBhdXRvIHRoZSBvZmZzZXRMZWZ0IGFuZCBtYXJnaW5MZWZ0XG4gICAgICAvLyBhcmUgdGhlIHNhbWUgaW4gU2FmYXJpIGNhdXNpbmcgb2Zmc2V0LmxlZnQgdG8gaW5jb3JyZWN0bHkgYmUgMFxuICAgICAgb2Zmc2V0LnRvcCAgLT0gcGFyc2VGbG9hdCggJChlbGVtKS5jc3MoJ21hcmdpbi10b3AnKSApIHx8IDBcbiAgICAgIG9mZnNldC5sZWZ0IC09IHBhcnNlRmxvYXQoICQoZWxlbSkuY3NzKCdtYXJnaW4tbGVmdCcpICkgfHwgMFxuXG4gICAgICAvLyBBZGQgb2Zmc2V0UGFyZW50IGJvcmRlcnNcbiAgICAgIHBhcmVudE9mZnNldC50b3AgICs9IHBhcnNlRmxvYXQoICQob2Zmc2V0UGFyZW50WzBdKS5jc3MoJ2JvcmRlci10b3Atd2lkdGgnKSApIHx8IDBcbiAgICAgIHBhcmVudE9mZnNldC5sZWZ0ICs9IHBhcnNlRmxvYXQoICQob2Zmc2V0UGFyZW50WzBdKS5jc3MoJ2JvcmRlci1sZWZ0LXdpZHRoJykgKSB8fCAwXG5cbiAgICAgIC8vIFN1YnRyYWN0IHRoZSB0d28gb2Zmc2V0c1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiAgb2Zmc2V0LnRvcCAgLSBwYXJlbnRPZmZzZXQudG9wLFxuICAgICAgICBsZWZ0OiBvZmZzZXQubGVmdCAtIHBhcmVudE9mZnNldC5sZWZ0XG4gICAgICB9XG4gICAgfSxcbiAgICBvZmZzZXRQYXJlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLm9mZnNldFBhcmVudCB8fCBkb2N1bWVudC5ib2R5XG4gICAgICAgIHdoaWxlIChwYXJlbnQgJiYgIXJvb3ROb2RlUkUudGVzdChwYXJlbnQubm9kZU5hbWUpICYmICQocGFyZW50KS5jc3MoXCJwb3NpdGlvblwiKSA9PSBcInN0YXRpY1wiKVxuICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5vZmZzZXRQYXJlbnRcbiAgICAgICAgcmV0dXJuIHBhcmVudFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBmb3Igbm93XG4gICQuZm4uZGV0YWNoID0gJC5mbi5yZW1vdmVcblxuICAvLyBHZW5lcmF0ZSB0aGUgYHdpZHRoYCBhbmQgYGhlaWdodGAgZnVuY3Rpb25zXG4gIDtbJ3dpZHRoJywgJ2hlaWdodCddLmZvckVhY2goZnVuY3Rpb24oZGltZW5zaW9uKXtcbiAgICB2YXIgZGltZW5zaW9uUHJvcGVydHkgPVxuICAgICAgZGltZW5zaW9uLnJlcGxhY2UoLy4vLCBmdW5jdGlvbihtKXsgcmV0dXJuIG1bMF0udG9VcHBlckNhc2UoKSB9KVxuXG4gICAgJC5mbltkaW1lbnNpb25dID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgdmFyIG9mZnNldCwgZWwgPSB0aGlzWzBdXG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGlzV2luZG93KGVsKSA/IGVsWydpbm5lcicgKyBkaW1lbnNpb25Qcm9wZXJ0eV0gOlxuICAgICAgICBpc0RvY3VtZW50KGVsKSA/IGVsLmRvY3VtZW50RWxlbWVudFsnc2Nyb2xsJyArIGRpbWVuc2lvblByb3BlcnR5XSA6XG4gICAgICAgIChvZmZzZXQgPSB0aGlzLm9mZnNldCgpKSAmJiBvZmZzZXRbZGltZW5zaW9uXVxuICAgICAgZWxzZSByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgIGVsID0gJCh0aGlzKVxuICAgICAgICBlbC5jc3MoZGltZW5zaW9uLCBmdW5jQXJnKHRoaXMsIHZhbHVlLCBpZHgsIGVsW2RpbWVuc2lvbl0oKSkpXG4gICAgICB9KVxuICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiB0cmF2ZXJzZU5vZGUobm9kZSwgZnVuKSB7XG4gICAgZnVuKG5vZGUpXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBsZW47IGkrKylcbiAgICAgIHRyYXZlcnNlTm9kZShub2RlLmNoaWxkTm9kZXNbaV0sIGZ1bilcbiAgfVxuXG4gIC8vIEdlbmVyYXRlIHRoZSBgYWZ0ZXJgLCBgcHJlcGVuZGAsIGBiZWZvcmVgLCBgYXBwZW5kYCxcbiAgLy8gYGluc2VydEFmdGVyYCwgYGluc2VydEJlZm9yZWAsIGBhcHBlbmRUb2AsIGFuZCBgcHJlcGVuZFRvYCBtZXRob2RzLlxuICBhZGphY2VuY3lPcGVyYXRvcnMuZm9yRWFjaChmdW5jdGlvbihvcGVyYXRvciwgb3BlcmF0b3JJbmRleCkge1xuICAgIHZhciBpbnNpZGUgPSBvcGVyYXRvckluZGV4ICUgMiAvLz0+IHByZXBlbmQsIGFwcGVuZFxuXG4gICAgJC5mbltvcGVyYXRvcl0gPSBmdW5jdGlvbigpe1xuICAgICAgLy8gYXJndW1lbnRzIGNhbiBiZSBub2RlcywgYXJyYXlzIG9mIG5vZGVzLCBaZXB0byBvYmplY3RzIGFuZCBIVE1MIHN0cmluZ3NcbiAgICAgIHZhciBhcmdUeXBlLCBub2RlcyA9ICQubWFwKGFyZ3VtZW50cywgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgICAgICBhcmdUeXBlID0gdHlwZShhcmcpXG4gICAgICAgICAgICByZXR1cm4gYXJnVHlwZSA9PSBcIm9iamVjdFwiIHx8IGFyZ1R5cGUgPT0gXCJhcnJheVwiIHx8IGFyZyA9PSBudWxsID9cbiAgICAgICAgICAgICAgYXJnIDogemVwdG8uZnJhZ21lbnQoYXJnKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHBhcmVudCwgY29weUJ5Q2xvbmUgPSB0aGlzLmxlbmd0aCA+IDFcbiAgICAgIGlmIChub2Rlcy5sZW5ndGggPCAxKSByZXR1cm4gdGhpc1xuXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKF8sIHRhcmdldCl7XG4gICAgICAgIHBhcmVudCA9IGluc2lkZSA/IHRhcmdldCA6IHRhcmdldC5wYXJlbnROb2RlXG5cbiAgICAgICAgLy8gY29udmVydCBhbGwgbWV0aG9kcyB0byBhIFwiYmVmb3JlXCIgb3BlcmF0aW9uXG4gICAgICAgIHRhcmdldCA9IG9wZXJhdG9ySW5kZXggPT0gMCA/IHRhcmdldC5uZXh0U2libGluZyA6XG4gICAgICAgICAgICAgICAgIG9wZXJhdG9ySW5kZXggPT0gMSA/IHRhcmdldC5maXJzdENoaWxkIDpcbiAgICAgICAgICAgICAgICAgb3BlcmF0b3JJbmRleCA9PSAyID8gdGFyZ2V0IDpcbiAgICAgICAgICAgICAgICAgbnVsbFxuXG4gICAgICAgIHZhciBwYXJlbnRJbkRvY3VtZW50ID0gJC5jb250YWlucyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHBhcmVudClcblxuICAgICAgICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICAgIGlmIChjb3B5QnlDbG9uZSkgbm9kZSA9IG5vZGUuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgZWxzZSBpZiAoIXBhcmVudCkgcmV0dXJuICQobm9kZSkucmVtb3ZlKClcblxuICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUobm9kZSwgdGFyZ2V0KVxuICAgICAgICAgIGlmIChwYXJlbnRJbkRvY3VtZW50KSB0cmF2ZXJzZU5vZGUobm9kZSwgZnVuY3Rpb24oZWwpe1xuICAgICAgICAgICAgaWYgKGVsLm5vZGVOYW1lICE9IG51bGwgJiYgZWwubm9kZU5hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcgJiZcbiAgICAgICAgICAgICAgICghZWwudHlwZSB8fCBlbC50eXBlID09PSAndGV4dC9qYXZhc2NyaXB0JykgJiYgIWVsLnNyYylcbiAgICAgICAgICAgICAgd2luZG93WydldmFsJ10uY2FsbCh3aW5kb3csIGVsLmlubmVySFRNTClcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBhZnRlciAgICA9PiBpbnNlcnRBZnRlclxuICAgIC8vIHByZXBlbmQgID0+IHByZXBlbmRUb1xuICAgIC8vIGJlZm9yZSAgID0+IGluc2VydEJlZm9yZVxuICAgIC8vIGFwcGVuZCAgID0+IGFwcGVuZFRvXG4gICAgJC5mbltpbnNpZGUgPyBvcGVyYXRvcisnVG8nIDogJ2luc2VydCcrKG9wZXJhdG9ySW5kZXggPyAnQmVmb3JlJyA6ICdBZnRlcicpXSA9IGZ1bmN0aW9uKGh0bWwpe1xuICAgICAgJChodG1sKVtvcGVyYXRvcl0odGhpcylcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICB9KVxuXG4gIHplcHRvLloucHJvdG90eXBlID0gJC5mblxuXG4gIC8vIEV4cG9ydCBpbnRlcm5hbCBBUEkgZnVuY3Rpb25zIGluIHRoZSBgJC56ZXB0b2AgbmFtZXNwYWNlXG4gIHplcHRvLnVuaXEgPSB1bmlxXG4gIHplcHRvLmRlc2VyaWFsaXplVmFsdWUgPSBkZXNlcmlhbGl6ZVZhbHVlXG4gICQuemVwdG8gPSB6ZXB0b1xuXG4gIHJldHVybiAkXG59KSgpXG5cbjsoZnVuY3Rpb24oJCl7XG4gIHZhciBfemlkID0gMSwgdW5kZWZpbmVkLFxuICAgICAgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UsXG4gICAgICBpc0Z1bmN0aW9uID0gJC5pc0Z1bmN0aW9uLFxuICAgICAgaXNTdHJpbmcgPSBmdW5jdGlvbihvYmopeyByZXR1cm4gdHlwZW9mIG9iaiA9PSAnc3RyaW5nJyB9LFxuICAgICAgaGFuZGxlcnMgPSB7fSxcbiAgICAgIHNwZWNpYWxFdmVudHM9e30sXG4gICAgICBmb2N1c2luU3VwcG9ydGVkID0gJ29uZm9jdXNpbicgaW4gd2luZG93LFxuICAgICAgZm9jdXMgPSB7IGZvY3VzOiAnZm9jdXNpbicsIGJsdXI6ICdmb2N1c291dCcgfSxcbiAgICAgIGhvdmVyID0geyBtb3VzZWVudGVyOiAnbW91c2VvdmVyJywgbW91c2VsZWF2ZTogJ21vdXNlb3V0JyB9XG5cbiAgc3BlY2lhbEV2ZW50cy5jbGljayA9IHNwZWNpYWxFdmVudHMubW91c2Vkb3duID0gc3BlY2lhbEV2ZW50cy5tb3VzZXVwID0gc3BlY2lhbEV2ZW50cy5tb3VzZW1vdmUgPSAnTW91c2VFdmVudHMnXG5cbiAgZnVuY3Rpb24gemlkKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5femlkIHx8IChlbGVtZW50Ll96aWQgPSBfemlkKyspXG4gIH1cbiAgZnVuY3Rpb24gZmluZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50LCBmbiwgc2VsZWN0b3IpIHtcbiAgICBldmVudCA9IHBhcnNlKGV2ZW50KVxuICAgIGlmIChldmVudC5ucykgdmFyIG1hdGNoZXIgPSBtYXRjaGVyRm9yKGV2ZW50Lm5zKVxuICAgIHJldHVybiAoaGFuZGxlcnNbemlkKGVsZW1lbnQpXSB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgIHJldHVybiBoYW5kbGVyXG4gICAgICAgICYmICghZXZlbnQuZSAgfHwgaGFuZGxlci5lID09IGV2ZW50LmUpXG4gICAgICAgICYmICghZXZlbnQubnMgfHwgbWF0Y2hlci50ZXN0KGhhbmRsZXIubnMpKVxuICAgICAgICAmJiAoIWZuICAgICAgIHx8IHppZChoYW5kbGVyLmZuKSA9PT0gemlkKGZuKSlcbiAgICAgICAgJiYgKCFzZWxlY3RvciB8fCBoYW5kbGVyLnNlbCA9PSBzZWxlY3RvcilcbiAgICB9KVxuICB9XG4gIGZ1bmN0aW9uIHBhcnNlKGV2ZW50KSB7XG4gICAgdmFyIHBhcnRzID0gKCcnICsgZXZlbnQpLnNwbGl0KCcuJylcbiAgICByZXR1cm4ge2U6IHBhcnRzWzBdLCBuczogcGFydHMuc2xpY2UoMSkuc29ydCgpLmpvaW4oJyAnKX1cbiAgfVxuICBmdW5jdGlvbiBtYXRjaGVyRm9yKG5zKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJyg/Ol58ICknICsgbnMucmVwbGFjZSgnICcsICcgLiogPycpICsgJyg/OiB8JCknKVxuICB9XG5cbiAgZnVuY3Rpb24gZXZlbnRDYXB0dXJlKGhhbmRsZXIsIGNhcHR1cmVTZXR0aW5nKSB7XG4gICAgcmV0dXJuIGhhbmRsZXIuZGVsICYmXG4gICAgICAoIWZvY3VzaW5TdXBwb3J0ZWQgJiYgKGhhbmRsZXIuZSBpbiBmb2N1cykpIHx8XG4gICAgICAhIWNhcHR1cmVTZXR0aW5nXG4gIH1cblxuICBmdW5jdGlvbiByZWFsRXZlbnQodHlwZSkge1xuICAgIHJldHVybiBob3Zlclt0eXBlXSB8fCAoZm9jdXNpblN1cHBvcnRlZCAmJiBmb2N1c1t0eXBlXSkgfHwgdHlwZVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkKGVsZW1lbnQsIGV2ZW50cywgZm4sIGRhdGEsIHNlbGVjdG9yLCBkZWxlZ2F0b3IsIGNhcHR1cmUpe1xuICAgIHZhciBpZCA9IHppZChlbGVtZW50KSwgc2V0ID0gKGhhbmRsZXJzW2lkXSB8fCAoaGFuZGxlcnNbaWRdID0gW10pKVxuICAgIGV2ZW50cy5zcGxpdCgvXFxzLykuZm9yRWFjaChmdW5jdGlvbihldmVudCl7XG4gICAgICBpZiAoZXZlbnQgPT0gJ3JlYWR5JykgcmV0dXJuICQoZG9jdW1lbnQpLnJlYWR5KGZuKVxuICAgICAgdmFyIGhhbmRsZXIgICA9IHBhcnNlKGV2ZW50KVxuICAgICAgaGFuZGxlci5mbiAgICA9IGZuXG4gICAgICBoYW5kbGVyLnNlbCAgID0gc2VsZWN0b3JcbiAgICAgIC8vIGVtdWxhdGUgbW91c2VlbnRlciwgbW91c2VsZWF2ZVxuICAgICAgaWYgKGhhbmRsZXIuZSBpbiBob3ZlcikgZm4gPSBmdW5jdGlvbihlKXtcbiAgICAgICAgdmFyIHJlbGF0ZWQgPSBlLnJlbGF0ZWRUYXJnZXRcbiAgICAgICAgaWYgKCFyZWxhdGVkIHx8IChyZWxhdGVkICE9PSB0aGlzICYmICEkLmNvbnRhaW5zKHRoaXMsIHJlbGF0ZWQpKSlcbiAgICAgICAgICByZXR1cm4gaGFuZGxlci5mbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICB9XG4gICAgICBoYW5kbGVyLmRlbCAgID0gZGVsZWdhdG9yXG4gICAgICB2YXIgY2FsbGJhY2sgID0gZGVsZWdhdG9yIHx8IGZuXG4gICAgICBoYW5kbGVyLnByb3h5ID0gZnVuY3Rpb24oZSl7XG4gICAgICAgIGUgPSBjb21wYXRpYmxlKGUpXG4gICAgICAgIGlmIChlLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpIHJldHVyblxuICAgICAgICBlLmRhdGEgPSBkYXRhXG4gICAgICAgIHZhciByZXN1bHQgPSBjYWxsYmFjay5hcHBseShlbGVtZW50LCBlLl9hcmdzID09IHVuZGVmaW5lZCA/IFtlXSA6IFtlXS5jb25jYXQoZS5fYXJncykpXG4gICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSBlLnByZXZlbnREZWZhdWx0KCksIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgICAgaGFuZGxlci5pID0gc2V0Lmxlbmd0aFxuICAgICAgc2V0LnB1c2goaGFuZGxlcilcbiAgICAgIGlmICgnYWRkRXZlbnRMaXN0ZW5lcicgaW4gZWxlbWVudClcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHJlYWxFdmVudChoYW5kbGVyLmUpLCBoYW5kbGVyLnByb3h5LCBldmVudENhcHR1cmUoaGFuZGxlciwgY2FwdHVyZSkpXG4gICAgfSlcbiAgfVxuICBmdW5jdGlvbiByZW1vdmUoZWxlbWVudCwgZXZlbnRzLCBmbiwgc2VsZWN0b3IsIGNhcHR1cmUpe1xuICAgIHZhciBpZCA9IHppZChlbGVtZW50KVxuICAgIDsoZXZlbnRzIHx8ICcnKS5zcGxpdCgvXFxzLykuZm9yRWFjaChmdW5jdGlvbihldmVudCl7XG4gICAgICBmaW5kSGFuZGxlcnMoZWxlbWVudCwgZXZlbnQsIGZuLCBzZWxlY3RvcikuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKXtcbiAgICAgICAgZGVsZXRlIGhhbmRsZXJzW2lkXVtoYW5kbGVyLmldXG4gICAgICBpZiAoJ3JlbW92ZUV2ZW50TGlzdGVuZXInIGluIGVsZW1lbnQpXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihyZWFsRXZlbnQoaGFuZGxlci5lKSwgaGFuZGxlci5wcm94eSwgZXZlbnRDYXB0dXJlKGhhbmRsZXIsIGNhcHR1cmUpKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgJC5ldmVudCA9IHsgYWRkOiBhZGQsIHJlbW92ZTogcmVtb3ZlIH1cblxuICAkLnByb3h5ID0gZnVuY3Rpb24oZm4sIGNvbnRleHQpIHtcbiAgICB2YXIgYXJncyA9ICgyIGluIGFyZ3VtZW50cykgJiYgc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpXG4gICAgaWYgKGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICB2YXIgcHJveHlGbiA9IGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShjb250ZXh0LCBhcmdzID8gYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSA6IGFyZ3VtZW50cykgfVxuICAgICAgcHJveHlGbi5femlkID0gemlkKGZuKVxuICAgICAgcmV0dXJuIHByb3h5Rm5cbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKGNvbnRleHQpKSB7XG4gICAgICBpZiAoYXJncykge1xuICAgICAgICBhcmdzLnVuc2hpZnQoZm5bY29udGV4dF0sIGZuKVxuICAgICAgICByZXR1cm4gJC5wcm94eS5hcHBseShudWxsLCBhcmdzKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICQucHJveHkoZm5bY29udGV4dF0sIGZuKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZXhwZWN0ZWQgZnVuY3Rpb25cIilcbiAgICB9XG4gIH1cblxuICAkLmZuLmJpbmQgPSBmdW5jdGlvbihldmVudCwgZGF0YSwgY2FsbGJhY2spe1xuICAgIHJldHVybiB0aGlzLm9uKGV2ZW50LCBkYXRhLCBjYWxsYmFjaylcbiAgfVxuICAkLmZuLnVuYmluZCA9IGZ1bmN0aW9uKGV2ZW50LCBjYWxsYmFjayl7XG4gICAgcmV0dXJuIHRoaXMub2ZmKGV2ZW50LCBjYWxsYmFjaylcbiAgfVxuICAkLmZuLm9uZSA9IGZ1bmN0aW9uKGV2ZW50LCBzZWxlY3RvciwgZGF0YSwgY2FsbGJhY2spe1xuICAgIHJldHVybiB0aGlzLm9uKGV2ZW50LCBzZWxlY3RvciwgZGF0YSwgY2FsbGJhY2ssIDEpXG4gIH1cblxuICB2YXIgcmV0dXJuVHJ1ZSA9IGZ1bmN0aW9uKCl7cmV0dXJuIHRydWV9LFxuICAgICAgcmV0dXJuRmFsc2UgPSBmdW5jdGlvbigpe3JldHVybiBmYWxzZX0sXG4gICAgICBpZ25vcmVQcm9wZXJ0aWVzID0gL14oW0EtWl18cmV0dXJuVmFsdWUkfGxheWVyW1hZXSQpLyxcbiAgICAgIGV2ZW50TWV0aG9kcyA9IHtcbiAgICAgICAgcHJldmVudERlZmF1bHQ6ICdpc0RlZmF1bHRQcmV2ZW50ZWQnLFxuICAgICAgICBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ICdpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCcsXG4gICAgICAgIHN0b3BQcm9wYWdhdGlvbjogJ2lzUHJvcGFnYXRpb25TdG9wcGVkJ1xuICAgICAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBhdGlibGUoZXZlbnQsIHNvdXJjZSkge1xuICAgIGlmIChzb3VyY2UgfHwgIWV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgc291cmNlIHx8IChzb3VyY2UgPSBldmVudClcblxuICAgICAgJC5lYWNoKGV2ZW50TWV0aG9kcywgZnVuY3Rpb24obmFtZSwgcHJlZGljYXRlKSB7XG4gICAgICAgIHZhciBzb3VyY2VNZXRob2QgPSBzb3VyY2VbbmFtZV1cbiAgICAgICAgZXZlbnRbbmFtZV0gPSBmdW5jdGlvbigpe1xuICAgICAgICAgIHRoaXNbcHJlZGljYXRlXSA9IHJldHVyblRydWVcbiAgICAgICAgICByZXR1cm4gc291cmNlTWV0aG9kICYmIHNvdXJjZU1ldGhvZC5hcHBseShzb3VyY2UsIGFyZ3VtZW50cylcbiAgICAgICAgfVxuICAgICAgICBldmVudFtwcmVkaWNhdGVdID0gcmV0dXJuRmFsc2VcbiAgICAgIH0pXG5cbiAgICAgIGlmIChzb3VyY2UuZGVmYXVsdFByZXZlbnRlZCAhPT0gdW5kZWZpbmVkID8gc291cmNlLmRlZmF1bHRQcmV2ZW50ZWQgOlxuICAgICAgICAgICdyZXR1cm5WYWx1ZScgaW4gc291cmNlID8gc291cmNlLnJldHVyblZhbHVlID09PSBmYWxzZSA6XG4gICAgICAgICAgc291cmNlLmdldFByZXZlbnREZWZhdWx0ICYmIHNvdXJjZS5nZXRQcmV2ZW50RGVmYXVsdCgpKVxuICAgICAgICBldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQgPSByZXR1cm5UcnVlXG4gICAgfVxuICAgIHJldHVybiBldmVudFxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJveHkoZXZlbnQpIHtcbiAgICB2YXIga2V5LCBwcm94eSA9IHsgb3JpZ2luYWxFdmVudDogZXZlbnQgfVxuICAgIGZvciAoa2V5IGluIGV2ZW50KVxuICAgICAgaWYgKCFpZ25vcmVQcm9wZXJ0aWVzLnRlc3Qoa2V5KSAmJiBldmVudFtrZXldICE9PSB1bmRlZmluZWQpIHByb3h5W2tleV0gPSBldmVudFtrZXldXG5cbiAgICByZXR1cm4gY29tcGF0aWJsZShwcm94eSwgZXZlbnQpXG4gIH1cblxuICAkLmZuLmRlbGVnYXRlID0gZnVuY3Rpb24oc2VsZWN0b3IsIGV2ZW50LCBjYWxsYmFjayl7XG4gICAgcmV0dXJuIHRoaXMub24oZXZlbnQsIHNlbGVjdG9yLCBjYWxsYmFjaylcbiAgfVxuICAkLmZuLnVuZGVsZWdhdGUgPSBmdW5jdGlvbihzZWxlY3RvciwgZXZlbnQsIGNhbGxiYWNrKXtcbiAgICByZXR1cm4gdGhpcy5vZmYoZXZlbnQsIHNlbGVjdG9yLCBjYWxsYmFjaylcbiAgfVxuXG4gICQuZm4ubGl2ZSA9IGZ1bmN0aW9uKGV2ZW50LCBjYWxsYmFjayl7XG4gICAgJChkb2N1bWVudC5ib2R5KS5kZWxlZ2F0ZSh0aGlzLnNlbGVjdG9yLCBldmVudCwgY2FsbGJhY2spXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICAkLmZuLmRpZSA9IGZ1bmN0aW9uKGV2ZW50LCBjYWxsYmFjayl7XG4gICAgJChkb2N1bWVudC5ib2R5KS51bmRlbGVnYXRlKHRoaXMuc2VsZWN0b3IsIGV2ZW50LCBjYWxsYmFjaylcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgJC5mbi5vbiA9IGZ1bmN0aW9uKGV2ZW50LCBzZWxlY3RvciwgZGF0YSwgY2FsbGJhY2ssIG9uZSl7XG4gICAgdmFyIGF1dG9SZW1vdmUsIGRlbGVnYXRvciwgJHRoaXMgPSB0aGlzXG4gICAgaWYgKGV2ZW50ICYmICFpc1N0cmluZyhldmVudCkpIHtcbiAgICAgICQuZWFjaChldmVudCwgZnVuY3Rpb24odHlwZSwgZm4pe1xuICAgICAgICAkdGhpcy5vbih0eXBlLCBzZWxlY3RvciwgZGF0YSwgZm4sIG9uZSlcbiAgICAgIH0pXG4gICAgICByZXR1cm4gJHRoaXNcbiAgICB9XG5cbiAgICBpZiAoIWlzU3RyaW5nKHNlbGVjdG9yKSAmJiAhaXNGdW5jdGlvbihjYWxsYmFjaykgJiYgY2FsbGJhY2sgIT09IGZhbHNlKVxuICAgICAgY2FsbGJhY2sgPSBkYXRhLCBkYXRhID0gc2VsZWN0b3IsIHNlbGVjdG9yID0gdW5kZWZpbmVkXG4gICAgaWYgKGlzRnVuY3Rpb24oZGF0YSkgfHwgZGF0YSA9PT0gZmFsc2UpXG4gICAgICBjYWxsYmFjayA9IGRhdGEsIGRhdGEgPSB1bmRlZmluZWRcblxuICAgIGlmIChjYWxsYmFjayA9PT0gZmFsc2UpIGNhbGxiYWNrID0gcmV0dXJuRmFsc2VcblxuICAgIHJldHVybiAkdGhpcy5lYWNoKGZ1bmN0aW9uKF8sIGVsZW1lbnQpe1xuICAgICAgaWYgKG9uZSkgYXV0b1JlbW92ZSA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICByZW1vdmUoZWxlbWVudCwgZS50eXBlLCBjYWxsYmFjaylcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGVjdG9yKSBkZWxlZ2F0b3IgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgdmFyIGV2dCwgbWF0Y2ggPSAkKGUudGFyZ2V0KS5jbG9zZXN0KHNlbGVjdG9yLCBlbGVtZW50KS5nZXQoMClcbiAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoICE9PSBlbGVtZW50KSB7XG4gICAgICAgICAgZXZ0ID0gJC5leHRlbmQoY3JlYXRlUHJveHkoZSksIHtjdXJyZW50VGFyZ2V0OiBtYXRjaCwgbGl2ZUZpcmVkOiBlbGVtZW50fSlcbiAgICAgICAgICByZXR1cm4gKGF1dG9SZW1vdmUgfHwgY2FsbGJhY2spLmFwcGx5KG1hdGNoLCBbZXZ0XS5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhZGQoZWxlbWVudCwgZXZlbnQsIGNhbGxiYWNrLCBkYXRhLCBzZWxlY3RvciwgZGVsZWdhdG9yIHx8IGF1dG9SZW1vdmUpXG4gICAgfSlcbiAgfVxuICAkLmZuLm9mZiA9IGZ1bmN0aW9uKGV2ZW50LCBzZWxlY3RvciwgY2FsbGJhY2spe1xuICAgIHZhciAkdGhpcyA9IHRoaXNcbiAgICBpZiAoZXZlbnQgJiYgIWlzU3RyaW5nKGV2ZW50KSkge1xuICAgICAgJC5lYWNoKGV2ZW50LCBmdW5jdGlvbih0eXBlLCBmbil7XG4gICAgICAgICR0aGlzLm9mZih0eXBlLCBzZWxlY3RvciwgZm4pXG4gICAgICB9KVxuICAgICAgcmV0dXJuICR0aGlzXG4gICAgfVxuXG4gICAgaWYgKCFpc1N0cmluZyhzZWxlY3RvcikgJiYgIWlzRnVuY3Rpb24oY2FsbGJhY2spICYmIGNhbGxiYWNrICE9PSBmYWxzZSlcbiAgICAgIGNhbGxiYWNrID0gc2VsZWN0b3IsIHNlbGVjdG9yID0gdW5kZWZpbmVkXG5cbiAgICBpZiAoY2FsbGJhY2sgPT09IGZhbHNlKSBjYWxsYmFjayA9IHJldHVybkZhbHNlXG5cbiAgICByZXR1cm4gJHRoaXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgcmVtb3ZlKHRoaXMsIGV2ZW50LCBjYWxsYmFjaywgc2VsZWN0b3IpXG4gICAgfSlcbiAgfVxuXG4gICQuZm4udHJpZ2dlciA9IGZ1bmN0aW9uKGV2ZW50LCBhcmdzKXtcbiAgICBldmVudCA9IChpc1N0cmluZyhldmVudCkgfHwgJC5pc1BsYWluT2JqZWN0KGV2ZW50KSkgPyAkLkV2ZW50KGV2ZW50KSA6IGNvbXBhdGlibGUoZXZlbnQpXG4gICAgZXZlbnQuX2FyZ3MgPSBhcmdzXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgLy8gaGFuZGxlIGZvY3VzKCksIGJsdXIoKSBieSBjYWxsaW5nIHRoZW0gZGlyZWN0bHlcbiAgICAgIGlmIChldmVudC50eXBlIGluIGZvY3VzICYmIHR5cGVvZiB0aGlzW2V2ZW50LnR5cGVdID09IFwiZnVuY3Rpb25cIikgdGhpc1tldmVudC50eXBlXSgpXG4gICAgICAvLyBpdGVtcyBpbiB0aGUgY29sbGVjdGlvbiBtaWdodCBub3QgYmUgRE9NIGVsZW1lbnRzXG4gICAgICBlbHNlIGlmICgnZGlzcGF0Y2hFdmVudCcgaW4gdGhpcykgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgZWxzZSAkKHRoaXMpLnRyaWdnZXJIYW5kbGVyKGV2ZW50LCBhcmdzKVxuICAgIH0pXG4gIH1cblxuICAvLyB0cmlnZ2VycyBldmVudCBoYW5kbGVycyBvbiBjdXJyZW50IGVsZW1lbnQganVzdCBhcyBpZiBhbiBldmVudCBvY2N1cnJlZCxcbiAgLy8gZG9lc24ndCB0cmlnZ2VyIGFuIGFjdHVhbCBldmVudCwgZG9lc24ndCBidWJibGVcbiAgJC5mbi50cmlnZ2VySGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50LCBhcmdzKXtcbiAgICB2YXIgZSwgcmVzdWx0XG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGksIGVsZW1lbnQpe1xuICAgICAgZSA9IGNyZWF0ZVByb3h5KGlzU3RyaW5nKGV2ZW50KSA/ICQuRXZlbnQoZXZlbnQpIDogZXZlbnQpXG4gICAgICBlLl9hcmdzID0gYXJnc1xuICAgICAgZS50YXJnZXQgPSBlbGVtZW50XG4gICAgICAkLmVhY2goZmluZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50LnR5cGUgfHwgZXZlbnQpLCBmdW5jdGlvbihpLCBoYW5kbGVyKXtcbiAgICAgICAgcmVzdWx0ID0gaGFuZGxlci5wcm94eShlKVxuICAgICAgICBpZiAoZS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKSByZXR1cm4gZmFsc2VcbiAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvLyBzaG9ydGN1dCBtZXRob2RzIGZvciBgLmJpbmQoZXZlbnQsIGZuKWAgZm9yIGVhY2ggZXZlbnQgdHlwZVxuICA7KCdmb2N1c2luIGZvY3Vzb3V0IGZvY3VzIGJsdXIgbG9hZCByZXNpemUgc2Nyb2xsIHVubG9hZCBjbGljayBkYmxjbGljayAnK1xuICAnbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgJytcbiAgJ2NoYW5nZSBzZWxlY3Qga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBlcnJvcicpLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbihldmVudCkge1xuICAgICQuZm5bZXZlbnRdID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiAoMCBpbiBhcmd1bWVudHMpID9cbiAgICAgICAgdGhpcy5iaW5kKGV2ZW50LCBjYWxsYmFjaykgOlxuICAgICAgICB0aGlzLnRyaWdnZXIoZXZlbnQpXG4gICAgfVxuICB9KVxuXG4gICQuRXZlbnQgPSBmdW5jdGlvbih0eXBlLCBwcm9wcykge1xuICAgIGlmICghaXNTdHJpbmcodHlwZSkpIHByb3BzID0gdHlwZSwgdHlwZSA9IHByb3BzLnR5cGVcbiAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChzcGVjaWFsRXZlbnRzW3R5cGVdIHx8ICdFdmVudHMnKSwgYnViYmxlcyA9IHRydWVcbiAgICBpZiAocHJvcHMpIGZvciAodmFyIG5hbWUgaW4gcHJvcHMpIChuYW1lID09ICdidWJibGVzJykgPyAoYnViYmxlcyA9ICEhcHJvcHNbbmFtZV0pIDogKGV2ZW50W25hbWVdID0gcHJvcHNbbmFtZV0pXG4gICAgZXZlbnQuaW5pdEV2ZW50KHR5cGUsIGJ1YmJsZXMsIHRydWUpXG4gICAgcmV0dXJuIGNvbXBhdGlibGUoZXZlbnQpXG4gIH1cblxufSkoWmVwdG8pXG5cbjsoZnVuY3Rpb24oJCl7XG4gIHZhciBqc29ucElEID0gMCxcbiAgICAgIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50LFxuICAgICAga2V5LFxuICAgICAgbmFtZSxcbiAgICAgIHJzY3JpcHQgPSAvPHNjcmlwdFxcYltePF0qKD86KD8hPFxcL3NjcmlwdD4pPFtePF0qKSo8XFwvc2NyaXB0Pi9naSxcbiAgICAgIHNjcmlwdFR5cGVSRSA9IC9eKD86dGV4dHxhcHBsaWNhdGlvbilcXC9qYXZhc2NyaXB0L2ksXG4gICAgICB4bWxUeXBlUkUgPSAvXig/OnRleHR8YXBwbGljYXRpb24pXFwveG1sL2ksXG4gICAgICBqc29uVHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIGh0bWxUeXBlID0gJ3RleHQvaHRtbCcsXG4gICAgICBibGFua1JFID0gL15cXHMqJC8sXG4gICAgICBvcmlnaW5BbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcblxuICBvcmlnaW5BbmNob3IuaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG5cbiAgLy8gdHJpZ2dlciBhIGN1c3RvbSBldmVudCBhbmQgcmV0dXJuIGZhbHNlIGlmIGl0IHdhcyBjYW5jZWxsZWRcbiAgZnVuY3Rpb24gdHJpZ2dlckFuZFJldHVybihjb250ZXh0LCBldmVudE5hbWUsIGRhdGEpIHtcbiAgICB2YXIgZXZlbnQgPSAkLkV2ZW50KGV2ZW50TmFtZSlcbiAgICAkKGNvbnRleHQpLnRyaWdnZXIoZXZlbnQsIGRhdGEpXG4gICAgcmV0dXJuICFldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKVxuICB9XG5cbiAgLy8gdHJpZ2dlciBhbiBBamF4IFwiZ2xvYmFsXCIgZXZlbnRcbiAgZnVuY3Rpb24gdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgY29udGV4dCwgZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKHNldHRpbmdzLmdsb2JhbCkgcmV0dXJuIHRyaWdnZXJBbmRSZXR1cm4oY29udGV4dCB8fCBkb2N1bWVudCwgZXZlbnROYW1lLCBkYXRhKVxuICB9XG5cbiAgLy8gTnVtYmVyIG9mIGFjdGl2ZSBBamF4IHJlcXVlc3RzXG4gICQuYWN0aXZlID0gMFxuXG4gIGZ1bmN0aW9uIGFqYXhTdGFydChzZXR0aW5ncykge1xuICAgIGlmIChzZXR0aW5ncy5nbG9iYWwgJiYgJC5hY3RpdmUrKyA9PT0gMCkgdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgbnVsbCwgJ2FqYXhTdGFydCcpXG4gIH1cbiAgZnVuY3Rpb24gYWpheFN0b3Aoc2V0dGluZ3MpIHtcbiAgICBpZiAoc2V0dGluZ3MuZ2xvYmFsICYmICEoLS0kLmFjdGl2ZSkpIHRyaWdnZXJHbG9iYWwoc2V0dGluZ3MsIG51bGwsICdhamF4U3RvcCcpXG4gIH1cblxuICAvLyB0cmlnZ2VycyBhbiBleHRyYSBnbG9iYWwgZXZlbnQgXCJhamF4QmVmb3JlU2VuZFwiIHRoYXQncyBsaWtlIFwiYWpheFNlbmRcIiBidXQgY2FuY2VsYWJsZVxuICBmdW5jdGlvbiBhamF4QmVmb3JlU2VuZCh4aHIsIHNldHRpbmdzKSB7XG4gICAgdmFyIGNvbnRleHQgPSBzZXR0aW5ncy5jb250ZXh0XG4gICAgaWYgKHNldHRpbmdzLmJlZm9yZVNlbmQuY2FsbChjb250ZXh0LCB4aHIsIHNldHRpbmdzKSA9PT0gZmFsc2UgfHxcbiAgICAgICAgdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgY29udGV4dCwgJ2FqYXhCZWZvcmVTZW5kJywgW3hociwgc2V0dGluZ3NdKSA9PT0gZmFsc2UpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIHRyaWdnZXJHbG9iYWwoc2V0dGluZ3MsIGNvbnRleHQsICdhamF4U2VuZCcsIFt4aHIsIHNldHRpbmdzXSlcbiAgfVxuICBmdW5jdGlvbiBhamF4U3VjY2VzcyhkYXRhLCB4aHIsIHNldHRpbmdzLCBkZWZlcnJlZCkge1xuICAgIHZhciBjb250ZXh0ID0gc2V0dGluZ3MuY29udGV4dCwgc3RhdHVzID0gJ3N1Y2Nlc3MnXG4gICAgc2V0dGluZ3Muc3VjY2Vzcy5jYWxsKGNvbnRleHQsIGRhdGEsIHN0YXR1cywgeGhyKVxuICAgIGlmIChkZWZlcnJlZCkgZGVmZXJyZWQucmVzb2x2ZVdpdGgoY29udGV4dCwgW2RhdGEsIHN0YXR1cywgeGhyXSlcbiAgICB0cmlnZ2VyR2xvYmFsKHNldHRpbmdzLCBjb250ZXh0LCAnYWpheFN1Y2Nlc3MnLCBbeGhyLCBzZXR0aW5ncywgZGF0YV0pXG4gICAgYWpheENvbXBsZXRlKHN0YXR1cywgeGhyLCBzZXR0aW5ncylcbiAgfVxuICAvLyB0eXBlOiBcInRpbWVvdXRcIiwgXCJlcnJvclwiLCBcImFib3J0XCIsIFwicGFyc2VyZXJyb3JcIlxuICBmdW5jdGlvbiBhamF4RXJyb3IoZXJyb3IsIHR5cGUsIHhociwgc2V0dGluZ3MsIGRlZmVycmVkKSB7XG4gICAgdmFyIGNvbnRleHQgPSBzZXR0aW5ncy5jb250ZXh0XG4gICAgc2V0dGluZ3MuZXJyb3IuY2FsbChjb250ZXh0LCB4aHIsIHR5cGUsIGVycm9yKVxuICAgIGlmIChkZWZlcnJlZCkgZGVmZXJyZWQucmVqZWN0V2l0aChjb250ZXh0LCBbeGhyLCB0eXBlLCBlcnJvcl0pXG4gICAgdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgY29udGV4dCwgJ2FqYXhFcnJvcicsIFt4aHIsIHNldHRpbmdzLCBlcnJvciB8fCB0eXBlXSlcbiAgICBhamF4Q29tcGxldGUodHlwZSwgeGhyLCBzZXR0aW5ncylcbiAgfVxuICAvLyBzdGF0dXM6IFwic3VjY2Vzc1wiLCBcIm5vdG1vZGlmaWVkXCIsIFwiZXJyb3JcIiwgXCJ0aW1lb3V0XCIsIFwiYWJvcnRcIiwgXCJwYXJzZXJlcnJvclwiXG4gIGZ1bmN0aW9uIGFqYXhDb21wbGV0ZShzdGF0dXMsIHhociwgc2V0dGluZ3MpIHtcbiAgICB2YXIgY29udGV4dCA9IHNldHRpbmdzLmNvbnRleHRcbiAgICBzZXR0aW5ncy5jb21wbGV0ZS5jYWxsKGNvbnRleHQsIHhociwgc3RhdHVzKVxuICAgIHRyaWdnZXJHbG9iYWwoc2V0dGluZ3MsIGNvbnRleHQsICdhamF4Q29tcGxldGUnLCBbeGhyLCBzZXR0aW5nc10pXG4gICAgYWpheFN0b3Aoc2V0dGluZ3MpXG4gIH1cblxuICAvLyBFbXB0eSBmdW5jdGlvbiwgdXNlZCBhcyBkZWZhdWx0IGNhbGxiYWNrXG4gIGZ1bmN0aW9uIGVtcHR5KCkge31cblxuICAkLmFqYXhKU09OUCA9IGZ1bmN0aW9uKG9wdGlvbnMsIGRlZmVycmVkKXtcbiAgICBpZiAoISgndHlwZScgaW4gb3B0aW9ucykpIHJldHVybiAkLmFqYXgob3B0aW9ucylcblxuICAgIHZhciBfY2FsbGJhY2tOYW1lID0gb3B0aW9ucy5qc29ucENhbGxiYWNrLFxuICAgICAgY2FsbGJhY2tOYW1lID0gKCQuaXNGdW5jdGlvbihfY2FsbGJhY2tOYW1lKSA/XG4gICAgICAgIF9jYWxsYmFja05hbWUoKSA6IF9jYWxsYmFja05hbWUpIHx8ICgnanNvbnAnICsgKCsranNvbnBJRCkpLFxuICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JyksXG4gICAgICBvcmlnaW5hbENhbGxiYWNrID0gd2luZG93W2NhbGxiYWNrTmFtZV0sXG4gICAgICByZXNwb25zZURhdGEsXG4gICAgICBhYm9ydCA9IGZ1bmN0aW9uKGVycm9yVHlwZSkge1xuICAgICAgICAkKHNjcmlwdCkudHJpZ2dlckhhbmRsZXIoJ2Vycm9yJywgZXJyb3JUeXBlIHx8ICdhYm9ydCcpXG4gICAgICB9LFxuICAgICAgeGhyID0geyBhYm9ydDogYWJvcnQgfSwgYWJvcnRUaW1lb3V0XG5cbiAgICBpZiAoZGVmZXJyZWQpIGRlZmVycmVkLnByb21pc2UoeGhyKVxuXG4gICAgJChzY3JpcHQpLm9uKCdsb2FkIGVycm9yJywgZnVuY3Rpb24oZSwgZXJyb3JUeXBlKXtcbiAgICAgIGNsZWFyVGltZW91dChhYm9ydFRpbWVvdXQpXG4gICAgICAkKHNjcmlwdCkub2ZmKCkucmVtb3ZlKClcblxuICAgICAgaWYgKGUudHlwZSA9PSAnZXJyb3InIHx8ICFyZXNwb25zZURhdGEpIHtcbiAgICAgICAgYWpheEVycm9yKG51bGwsIGVycm9yVHlwZSB8fCAnZXJyb3InLCB4aHIsIG9wdGlvbnMsIGRlZmVycmVkKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWpheFN1Y2Nlc3MocmVzcG9uc2VEYXRhWzBdLCB4aHIsIG9wdGlvbnMsIGRlZmVycmVkKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3dbY2FsbGJhY2tOYW1lXSA9IG9yaWdpbmFsQ2FsbGJhY2tcbiAgICAgIGlmIChyZXNwb25zZURhdGEgJiYgJC5pc0Z1bmN0aW9uKG9yaWdpbmFsQ2FsbGJhY2spKVxuICAgICAgICBvcmlnaW5hbENhbGxiYWNrKHJlc3BvbnNlRGF0YVswXSlcblxuICAgICAgb3JpZ2luYWxDYWxsYmFjayA9IHJlc3BvbnNlRGF0YSA9IHVuZGVmaW5lZFxuICAgIH0pXG5cbiAgICBpZiAoYWpheEJlZm9yZVNlbmQoeGhyLCBvcHRpb25zKSA9PT0gZmFsc2UpIHtcbiAgICAgIGFib3J0KCdhYm9ydCcpXG4gICAgICByZXR1cm4geGhyXG4gICAgfVxuXG4gICAgd2luZG93W2NhbGxiYWNrTmFtZV0gPSBmdW5jdGlvbigpe1xuICAgICAgcmVzcG9uc2VEYXRhID0gYXJndW1lbnRzXG4gICAgfVxuXG4gICAgc2NyaXB0LnNyYyA9IG9wdGlvbnMudXJsLnJlcGxhY2UoL1xcPyguKyk9XFw/LywgJz8kMT0nICsgY2FsbGJhY2tOYW1lKVxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuXG4gICAgaWYgKG9wdGlvbnMudGltZW91dCA+IDApIGFib3J0VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGFib3J0KCd0aW1lb3V0JylcbiAgICB9LCBvcHRpb25zLnRpbWVvdXQpXG5cbiAgICByZXR1cm4geGhyXG4gIH1cblxuICAkLmFqYXhTZXR0aW5ncyA9IHtcbiAgICAvLyBEZWZhdWx0IHR5cGUgb2YgcmVxdWVzdFxuICAgIHR5cGU6ICdHRVQnLFxuICAgIC8vIENhbGxiYWNrIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHJlcXVlc3RcbiAgICBiZWZvcmVTZW5kOiBlbXB0eSxcbiAgICAvLyBDYWxsYmFjayB0aGF0IGlzIGV4ZWN1dGVkIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRzXG4gICAgc3VjY2VzczogZW1wdHksXG4gICAgLy8gQ2FsbGJhY2sgdGhhdCBpcyBleGVjdXRlZCB0aGUgdGhlIHNlcnZlciBkcm9wcyBlcnJvclxuICAgIGVycm9yOiBlbXB0eSxcbiAgICAvLyBDYWxsYmFjayB0aGF0IGlzIGV4ZWN1dGVkIG9uIHJlcXVlc3QgY29tcGxldGUgKGJvdGg6IGVycm9yIGFuZCBzdWNjZXNzKVxuICAgIGNvbXBsZXRlOiBlbXB0eSxcbiAgICAvLyBUaGUgY29udGV4dCBmb3IgdGhlIGNhbGxiYWNrc1xuICAgIGNvbnRleHQ6IG51bGwsXG4gICAgLy8gV2hldGhlciB0byB0cmlnZ2VyIFwiZ2xvYmFsXCIgQWpheCBldmVudHNcbiAgICBnbG9iYWw6IHRydWUsXG4gICAgLy8gVHJhbnNwb3J0XG4gICAgeGhyOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpXG4gICAgfSxcbiAgICAvLyBNSU1FIHR5cGVzIG1hcHBpbmdcbiAgICAvLyBJSVMgcmV0dXJucyBKYXZhc2NyaXB0IGFzIFwiYXBwbGljYXRpb24veC1qYXZhc2NyaXB0XCJcbiAgICBhY2NlcHRzOiB7XG4gICAgICBzY3JpcHQ6ICd0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtamF2YXNjcmlwdCcsXG4gICAgICBqc29uOiAgIGpzb25UeXBlLFxuICAgICAgeG1sOiAgICAnYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbCcsXG4gICAgICBodG1sOiAgIGh0bWxUeXBlLFxuICAgICAgdGV4dDogICAndGV4dC9wbGFpbidcbiAgICB9LFxuICAgIC8vIFdoZXRoZXIgdGhlIHJlcXVlc3QgaXMgdG8gYW5vdGhlciBkb21haW5cbiAgICBjcm9zc0RvbWFpbjogZmFsc2UsXG4gICAgLy8gRGVmYXVsdCB0aW1lb3V0XG4gICAgdGltZW91dDogMCxcbiAgICAvLyBXaGV0aGVyIGRhdGEgc2hvdWxkIGJlIHNlcmlhbGl6ZWQgdG8gc3RyaW5nXG4gICAgcHJvY2Vzc0RhdGE6IHRydWUsXG4gICAgLy8gV2hldGhlciB0aGUgYnJvd3NlciBzaG91bGQgYmUgYWxsb3dlZCB0byBjYWNoZSBHRVQgcmVzcG9uc2VzXG4gICAgY2FjaGU6IHRydWVcbiAgfVxuXG4gIGZ1bmN0aW9uIG1pbWVUb0RhdGFUeXBlKG1pbWUpIHtcbiAgICBpZiAobWltZSkgbWltZSA9IG1pbWUuc3BsaXQoJzsnLCAyKVswXVxuICAgIHJldHVybiBtaW1lICYmICggbWltZSA9PSBodG1sVHlwZSA/ICdodG1sJyA6XG4gICAgICBtaW1lID09IGpzb25UeXBlID8gJ2pzb24nIDpcbiAgICAgIHNjcmlwdFR5cGVSRS50ZXN0KG1pbWUpID8gJ3NjcmlwdCcgOlxuICAgICAgeG1sVHlwZVJFLnRlc3QobWltZSkgJiYgJ3htbCcgKSB8fCAndGV4dCdcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGVuZFF1ZXJ5KHVybCwgcXVlcnkpIHtcbiAgICBpZiAocXVlcnkgPT0gJycpIHJldHVybiB1cmxcbiAgICByZXR1cm4gKHVybCArICcmJyArIHF1ZXJ5KS5yZXBsYWNlKC9bJj9dezEsMn0vLCAnPycpXG4gIH1cblxuICAvLyBzZXJpYWxpemUgcGF5bG9hZCBhbmQgYXBwZW5kIGl0IHRvIHRoZSBVUkwgZm9yIEdFVCByZXF1ZXN0c1xuICBmdW5jdGlvbiBzZXJpYWxpemVEYXRhKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5wcm9jZXNzRGF0YSAmJiBvcHRpb25zLmRhdGEgJiYgJC50eXBlKG9wdGlvbnMuZGF0YSkgIT0gXCJzdHJpbmdcIilcbiAgICAgIG9wdGlvbnMuZGF0YSA9ICQucGFyYW0ob3B0aW9ucy5kYXRhLCBvcHRpb25zLnRyYWRpdGlvbmFsKVxuICAgIGlmIChvcHRpb25zLmRhdGEgJiYgKCFvcHRpb25zLnR5cGUgfHwgb3B0aW9ucy50eXBlLnRvVXBwZXJDYXNlKCkgPT0gJ0dFVCcpKVxuICAgICAgb3B0aW9ucy51cmwgPSBhcHBlbmRRdWVyeShvcHRpb25zLnVybCwgb3B0aW9ucy5kYXRhKSwgb3B0aW9ucy5kYXRhID0gdW5kZWZpbmVkXG4gIH1cblxuICAkLmFqYXggPSBmdW5jdGlvbihvcHRpb25zKXtcbiAgICB2YXIgc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgb3B0aW9ucyB8fCB7fSksXG4gICAgICAgIGRlZmVycmVkID0gJC5EZWZlcnJlZCAmJiAkLkRlZmVycmVkKCksXG4gICAgICAgIHVybEFuY2hvclxuICAgIGZvciAoa2V5IGluICQuYWpheFNldHRpbmdzKSBpZiAoc2V0dGluZ3Nba2V5XSA9PT0gdW5kZWZpbmVkKSBzZXR0aW5nc1trZXldID0gJC5hamF4U2V0dGluZ3Nba2V5XVxuXG4gICAgYWpheFN0YXJ0KHNldHRpbmdzKVxuXG4gICAgaWYgKCFzZXR0aW5ncy5jcm9zc0RvbWFpbikge1xuICAgICAgdXJsQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICB1cmxBbmNob3IuaHJlZiA9IHNldHRpbmdzLnVybFxuICAgICAgdXJsQW5jaG9yLmhyZWYgPSB1cmxBbmNob3IuaHJlZlxuICAgICAgc2V0dGluZ3MuY3Jvc3NEb21haW4gPSAob3JpZ2luQW5jaG9yLnByb3RvY29sICsgJy8vJyArIG9yaWdpbkFuY2hvci5ob3N0KSAhPT0gKHVybEFuY2hvci5wcm90b2NvbCArICcvLycgKyB1cmxBbmNob3IuaG9zdClcbiAgICB9XG5cbiAgICBpZiAoIXNldHRpbmdzLnVybCkgc2V0dGluZ3MudXJsID0gd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKClcbiAgICBzZXJpYWxpemVEYXRhKHNldHRpbmdzKVxuXG4gICAgdmFyIGRhdGFUeXBlID0gc2V0dGluZ3MuZGF0YVR5cGUsIGhhc1BsYWNlaG9sZGVyID0gL1xcPy4rPVxcPy8udGVzdChzZXR0aW5ncy51cmwpXG4gICAgaWYgKGhhc1BsYWNlaG9sZGVyKSBkYXRhVHlwZSA9ICdqc29ucCdcblxuICAgIGlmIChzZXR0aW5ncy5jYWNoZSA9PT0gZmFsc2UgfHwgKFxuICAgICAgICAgKCFvcHRpb25zIHx8IG9wdGlvbnMuY2FjaGUgIT09IHRydWUpICYmXG4gICAgICAgICAoJ3NjcmlwdCcgPT0gZGF0YVR5cGUgfHwgJ2pzb25wJyA9PSBkYXRhVHlwZSlcbiAgICAgICAgKSlcbiAgICAgIHNldHRpbmdzLnVybCA9IGFwcGVuZFF1ZXJ5KHNldHRpbmdzLnVybCwgJ189JyArIERhdGUubm93KCkpXG5cbiAgICBpZiAoJ2pzb25wJyA9PSBkYXRhVHlwZSkge1xuICAgICAgaWYgKCFoYXNQbGFjZWhvbGRlcilcbiAgICAgICAgc2V0dGluZ3MudXJsID0gYXBwZW5kUXVlcnkoc2V0dGluZ3MudXJsLFxuICAgICAgICAgIHNldHRpbmdzLmpzb25wID8gKHNldHRpbmdzLmpzb25wICsgJz0/JykgOiBzZXR0aW5ncy5qc29ucCA9PT0gZmFsc2UgPyAnJyA6ICdjYWxsYmFjaz0/JylcbiAgICAgIHJldHVybiAkLmFqYXhKU09OUChzZXR0aW5ncywgZGVmZXJyZWQpXG4gICAgfVxuXG4gICAgdmFyIG1pbWUgPSBzZXR0aW5ncy5hY2NlcHRzW2RhdGFUeXBlXSxcbiAgICAgICAgaGVhZGVycyA9IHsgfSxcbiAgICAgICAgc2V0SGVhZGVyID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHsgaGVhZGVyc1tuYW1lLnRvTG93ZXJDYXNlKCldID0gW25hbWUsIHZhbHVlXSB9LFxuICAgICAgICBwcm90b2NvbCA9IC9eKFtcXHctXSs6KVxcL1xcLy8udGVzdChzZXR0aW5ncy51cmwpID8gUmVnRXhwLiQxIDogd2luZG93LmxvY2F0aW9uLnByb3RvY29sLFxuICAgICAgICB4aHIgPSBzZXR0aW5ncy54aHIoKSxcbiAgICAgICAgbmF0aXZlU2V0SGVhZGVyID0geGhyLnNldFJlcXVlc3RIZWFkZXIsXG4gICAgICAgIGFib3J0VGltZW91dFxuXG4gICAgaWYgKGRlZmVycmVkKSBkZWZlcnJlZC5wcm9taXNlKHhocilcblxuICAgIGlmICghc2V0dGluZ3MuY3Jvc3NEb21haW4pIHNldEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpXG4gICAgc2V0SGVhZGVyKCdBY2NlcHQnLCBtaW1lIHx8ICcqLyonKVxuICAgIGlmIChtaW1lID0gc2V0dGluZ3MubWltZVR5cGUgfHwgbWltZSkge1xuICAgICAgaWYgKG1pbWUuaW5kZXhPZignLCcpID4gLTEpIG1pbWUgPSBtaW1lLnNwbGl0KCcsJywgMilbMF1cbiAgICAgIHhoci5vdmVycmlkZU1pbWVUeXBlICYmIHhoci5vdmVycmlkZU1pbWVUeXBlKG1pbWUpXG4gICAgfVxuICAgIGlmIChzZXR0aW5ncy5jb250ZW50VHlwZSB8fCAoc2V0dGluZ3MuY29udGVudFR5cGUgIT09IGZhbHNlICYmIHNldHRpbmdzLmRhdGEgJiYgc2V0dGluZ3MudHlwZS50b1VwcGVyQ2FzZSgpICE9ICdHRVQnKSlcbiAgICAgIHNldEhlYWRlcignQ29udGVudC1UeXBlJywgc2V0dGluZ3MuY29udGVudFR5cGUgfHwgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpXG5cbiAgICBpZiAoc2V0dGluZ3MuaGVhZGVycykgZm9yIChuYW1lIGluIHNldHRpbmdzLmhlYWRlcnMpIHNldEhlYWRlcihuYW1lLCBzZXR0aW5ncy5oZWFkZXJzW25hbWVdKVxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyID0gc2V0SGVhZGVyXG5cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBlbXB0eVxuICAgICAgICBjbGVhclRpbWVvdXQoYWJvcnRUaW1lb3V0KVxuICAgICAgICB2YXIgcmVzdWx0LCBlcnJvciA9IGZhbHNlXG4gICAgICAgIGlmICgoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkgfHwgeGhyLnN0YXR1cyA9PSAzMDQgfHwgKHhoci5zdGF0dXMgPT0gMCAmJiBwcm90b2NvbCA9PSAnZmlsZTonKSkge1xuICAgICAgICAgIGRhdGFUeXBlID0gZGF0YVR5cGUgfHwgbWltZVRvRGF0YVR5cGUoc2V0dGluZ3MubWltZVR5cGUgfHwgeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdjb250ZW50LXR5cGUnKSlcbiAgICAgICAgICByZXN1bHQgPSB4aHIucmVzcG9uc2VUZXh0XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gaHR0cDovL3BlcmZlY3Rpb25raWxscy5jb20vZ2xvYmFsLWV2YWwtd2hhdC1hcmUtdGhlLW9wdGlvbnMvXG4gICAgICAgICAgICBpZiAoZGF0YVR5cGUgPT0gJ3NjcmlwdCcpICAgICgxLGV2YWwpKHJlc3VsdClcbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGFUeXBlID09ICd4bWwnKSAgcmVzdWx0ID0geGhyLnJlc3BvbnNlWE1MXG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhVHlwZSA9PSAnanNvbicpIHJlc3VsdCA9IGJsYW5rUkUudGVzdChyZXN1bHQpID8gbnVsbCA6ICQucGFyc2VKU09OKHJlc3VsdClcbiAgICAgICAgICB9IGNhdGNoIChlKSB7IGVycm9yID0gZSB9XG5cbiAgICAgICAgICBpZiAoZXJyb3IpIGFqYXhFcnJvcihlcnJvciwgJ3BhcnNlcmVycm9yJywgeGhyLCBzZXR0aW5ncywgZGVmZXJyZWQpXG4gICAgICAgICAgZWxzZSBhamF4U3VjY2VzcyhyZXN1bHQsIHhociwgc2V0dGluZ3MsIGRlZmVycmVkKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFqYXhFcnJvcih4aHIuc3RhdHVzVGV4dCB8fCBudWxsLCB4aHIuc3RhdHVzID8gJ2Vycm9yJyA6ICdhYm9ydCcsIHhociwgc2V0dGluZ3MsIGRlZmVycmVkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFqYXhCZWZvcmVTZW5kKHhociwgc2V0dGluZ3MpID09PSBmYWxzZSkge1xuICAgICAgeGhyLmFib3J0KClcbiAgICAgIGFqYXhFcnJvcihudWxsLCAnYWJvcnQnLCB4aHIsIHNldHRpbmdzLCBkZWZlcnJlZClcbiAgICAgIHJldHVybiB4aHJcbiAgICB9XG5cbiAgICBpZiAoc2V0dGluZ3MueGhyRmllbGRzKSBmb3IgKG5hbWUgaW4gc2V0dGluZ3MueGhyRmllbGRzKSB4aHJbbmFtZV0gPSBzZXR0aW5ncy54aHJGaWVsZHNbbmFtZV1cblxuICAgIHZhciBhc3luYyA9ICdhc3luYycgaW4gc2V0dGluZ3MgPyBzZXR0aW5ncy5hc3luYyA6IHRydWVcbiAgICB4aHIub3BlbihzZXR0aW5ncy50eXBlLCBzZXR0aW5ncy51cmwsIGFzeW5jLCBzZXR0aW5ncy51c2VybmFtZSwgc2V0dGluZ3MucGFzc3dvcmQpXG5cbiAgICBmb3IgKG5hbWUgaW4gaGVhZGVycykgbmF0aXZlU2V0SGVhZGVyLmFwcGx5KHhociwgaGVhZGVyc1tuYW1lXSlcblxuICAgIGlmIChzZXR0aW5ncy50aW1lb3V0ID4gMCkgYWJvcnRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZW1wdHlcbiAgICAgICAgeGhyLmFib3J0KClcbiAgICAgICAgYWpheEVycm9yKG51bGwsICd0aW1lb3V0JywgeGhyLCBzZXR0aW5ncywgZGVmZXJyZWQpXG4gICAgICB9LCBzZXR0aW5ncy50aW1lb3V0KVxuXG4gICAgLy8gYXZvaWQgc2VuZGluZyBlbXB0eSBzdHJpbmcgKCMzMTkpXG4gICAgeGhyLnNlbmQoc2V0dGluZ3MuZGF0YSA/IHNldHRpbmdzLmRhdGEgOiBudWxsKVxuICAgIHJldHVybiB4aHJcbiAgfVxuXG4gIC8vIGhhbmRsZSBvcHRpb25hbCBkYXRhL3N1Y2Nlc3MgYXJndW1lbnRzXG4gIGZ1bmN0aW9uIHBhcnNlQXJndW1lbnRzKHVybCwgZGF0YSwgc3VjY2VzcywgZGF0YVR5cGUpIHtcbiAgICBpZiAoJC5pc0Z1bmN0aW9uKGRhdGEpKSBkYXRhVHlwZSA9IHN1Y2Nlc3MsIHN1Y2Nlc3MgPSBkYXRhLCBkYXRhID0gdW5kZWZpbmVkXG4gICAgaWYgKCEkLmlzRnVuY3Rpb24oc3VjY2VzcykpIGRhdGFUeXBlID0gc3VjY2Vzcywgc3VjY2VzcyA9IHVuZGVmaW5lZFxuICAgIHJldHVybiB7XG4gICAgICB1cmw6IHVybFxuICAgICwgZGF0YTogZGF0YVxuICAgICwgc3VjY2Vzczogc3VjY2Vzc1xuICAgICwgZGF0YVR5cGU6IGRhdGFUeXBlXG4gICAgfVxuICB9XG5cbiAgJC5nZXQgPSBmdW5jdGlvbigvKiB1cmwsIGRhdGEsIHN1Y2Nlc3MsIGRhdGFUeXBlICovKXtcbiAgICByZXR1cm4gJC5hamF4KHBhcnNlQXJndW1lbnRzLmFwcGx5KG51bGwsIGFyZ3VtZW50cykpXG4gIH1cblxuICAkLnBvc3QgPSBmdW5jdGlvbigvKiB1cmwsIGRhdGEsIHN1Y2Nlc3MsIGRhdGFUeXBlICovKXtcbiAgICB2YXIgb3B0aW9ucyA9IHBhcnNlQXJndW1lbnRzLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICBvcHRpb25zLnR5cGUgPSAnUE9TVCdcbiAgICByZXR1cm4gJC5hamF4KG9wdGlvbnMpXG4gIH1cblxuICAkLmdldEpTT04gPSBmdW5jdGlvbigvKiB1cmwsIGRhdGEsIHN1Y2Nlc3MgKi8pe1xuICAgIHZhciBvcHRpb25zID0gcGFyc2VBcmd1bWVudHMuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgIG9wdGlvbnMuZGF0YVR5cGUgPSAnanNvbidcbiAgICByZXR1cm4gJC5hamF4KG9wdGlvbnMpXG4gIH1cblxuICAkLmZuLmxvYWQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIHN1Y2Nlc3Mpe1xuICAgIGlmICghdGhpcy5sZW5ndGgpIHJldHVybiB0aGlzXG4gICAgdmFyIHNlbGYgPSB0aGlzLCBwYXJ0cyA9IHVybC5zcGxpdCgvXFxzLyksIHNlbGVjdG9yLFxuICAgICAgICBvcHRpb25zID0gcGFyc2VBcmd1bWVudHModXJsLCBkYXRhLCBzdWNjZXNzKSxcbiAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zLnN1Y2Nlc3NcbiAgICBpZiAocGFydHMubGVuZ3RoID4gMSkgb3B0aW9ucy51cmwgPSBwYXJ0c1swXSwgc2VsZWN0b3IgPSBwYXJ0c1sxXVxuICAgIG9wdGlvbnMuc3VjY2VzcyA9IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgIHNlbGYuaHRtbChzZWxlY3RvciA/XG4gICAgICAgICQoJzxkaXY+JykuaHRtbChyZXNwb25zZS5yZXBsYWNlKHJzY3JpcHQsIFwiXCIpKS5maW5kKHNlbGVjdG9yKVxuICAgICAgICA6IHJlc3BvbnNlKVxuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2suYXBwbHkoc2VsZiwgYXJndW1lbnRzKVxuICAgIH1cbiAgICAkLmFqYXgob3B0aW9ucylcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgdmFyIGVzY2FwZSA9IGVuY29kZVVSSUNvbXBvbmVudFxuXG4gIGZ1bmN0aW9uIHNlcmlhbGl6ZShwYXJhbXMsIG9iaiwgdHJhZGl0aW9uYWwsIHNjb3BlKXtcbiAgICB2YXIgdHlwZSwgYXJyYXkgPSAkLmlzQXJyYXkob2JqKSwgaGFzaCA9ICQuaXNQbGFpbk9iamVjdChvYmopXG4gICAgJC5lYWNoKG9iaiwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgdHlwZSA9ICQudHlwZSh2YWx1ZSlcbiAgICAgIGlmIChzY29wZSkga2V5ID0gdHJhZGl0aW9uYWwgPyBzY29wZSA6XG4gICAgICAgIHNjb3BlICsgJ1snICsgKGhhc2ggfHwgdHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdhcnJheScgPyBrZXkgOiAnJykgKyAnXSdcbiAgICAgIC8vIGhhbmRsZSBkYXRhIGluIHNlcmlhbGl6ZUFycmF5KCkgZm9ybWF0XG4gICAgICBpZiAoIXNjb3BlICYmIGFycmF5KSBwYXJhbXMuYWRkKHZhbHVlLm5hbWUsIHZhbHVlLnZhbHVlKVxuICAgICAgLy8gcmVjdXJzZSBpbnRvIG5lc3RlZCBvYmplY3RzXG4gICAgICBlbHNlIGlmICh0eXBlID09IFwiYXJyYXlcIiB8fCAoIXRyYWRpdGlvbmFsICYmIHR5cGUgPT0gXCJvYmplY3RcIikpXG4gICAgICAgIHNlcmlhbGl6ZShwYXJhbXMsIHZhbHVlLCB0cmFkaXRpb25hbCwga2V5KVxuICAgICAgZWxzZSBwYXJhbXMuYWRkKGtleSwgdmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gICQucGFyYW0gPSBmdW5jdGlvbihvYmosIHRyYWRpdGlvbmFsKXtcbiAgICB2YXIgcGFyYW1zID0gW11cbiAgICBwYXJhbXMuYWRkID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKCQuaXNGdW5jdGlvbih2YWx1ZSkpIHZhbHVlID0gdmFsdWUoKVxuICAgICAgaWYgKHZhbHVlID09IG51bGwpIHZhbHVlID0gXCJcIlxuICAgICAgdGhpcy5wdXNoKGVzY2FwZShrZXkpICsgJz0nICsgZXNjYXBlKHZhbHVlKSlcbiAgICB9XG4gICAgc2VyaWFsaXplKHBhcmFtcywgb2JqLCB0cmFkaXRpb25hbClcbiAgICByZXR1cm4gcGFyYW1zLmpvaW4oJyYnKS5yZXBsYWNlKC8lMjAvZywgJysnKVxuICB9XG59KShaZXB0bylcblxuOyhmdW5jdGlvbigkKXtcbiAgJC5mbi5zZXJpYWxpemVBcnJheSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBuYW1lLCB0eXBlLCByZXN1bHQgPSBbXSxcbiAgICAgIGFkZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZS5mb3JFYWNoKSByZXR1cm4gdmFsdWUuZm9yRWFjaChhZGQpXG4gICAgICAgIHJlc3VsdC5wdXNoKHsgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlIH0pXG4gICAgICB9XG4gICAgaWYgKHRoaXNbMF0pICQuZWFjaCh0aGlzWzBdLmVsZW1lbnRzLCBmdW5jdGlvbihfLCBmaWVsZCl7XG4gICAgICB0eXBlID0gZmllbGQudHlwZSwgbmFtZSA9IGZpZWxkLm5hbWVcbiAgICAgIGlmIChuYW1lICYmIGZpZWxkLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT0gJ2ZpZWxkc2V0JyAmJlxuICAgICAgICAhZmllbGQuZGlzYWJsZWQgJiYgdHlwZSAhPSAnc3VibWl0JyAmJiB0eXBlICE9ICdyZXNldCcgJiYgdHlwZSAhPSAnYnV0dG9uJyAmJiB0eXBlICE9ICdmaWxlJyAmJlxuICAgICAgICAoKHR5cGUgIT0gJ3JhZGlvJyAmJiB0eXBlICE9ICdjaGVja2JveCcpIHx8IGZpZWxkLmNoZWNrZWQpKVxuICAgICAgICAgIGFkZCgkKGZpZWxkKS52YWwoKSlcbiAgICB9KVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gICQuZm4uc2VyaWFsaXplID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcmVzdWx0ID0gW11cbiAgICB0aGlzLnNlcmlhbGl6ZUFycmF5KCkuZm9yRWFjaChmdW5jdGlvbihlbG0pe1xuICAgICAgcmVzdWx0LnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGVsbS5uYW1lKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChlbG0udmFsdWUpKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKCcmJylcbiAgfVxuXG4gICQuZm4uc3VibWl0ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZiAoMCBpbiBhcmd1bWVudHMpIHRoaXMuYmluZCgnc3VibWl0JywgY2FsbGJhY2spXG4gICAgZWxzZSBpZiAodGhpcy5sZW5ndGgpIHtcbiAgICAgIHZhciBldmVudCA9ICQuRXZlbnQoJ3N1Ym1pdCcpXG4gICAgICB0aGlzLmVxKDApLnRyaWdnZXIoZXZlbnQpXG4gICAgICBpZiAoIWV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB0aGlzLmdldCgwKS5zdWJtaXQoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbn0pKFplcHRvKVxuXG47KGZ1bmN0aW9uKCQpe1xuICAvLyBfX3Byb3RvX18gZG9lc24ndCBleGlzdCBvbiBJRTwxMSwgc28gcmVkZWZpbmVcbiAgLy8gdGhlIFogZnVuY3Rpb24gdG8gdXNlIG9iamVjdCBleHRlbnNpb24gaW5zdGVhZFxuICBpZiAoISgnX19wcm90b19fJyBpbiB7fSkpIHtcbiAgICAkLmV4dGVuZCgkLnplcHRvLCB7XG4gICAgICBaOiBmdW5jdGlvbihkb20sIHNlbGVjdG9yKXtcbiAgICAgICAgZG9tID0gZG9tIHx8IFtdXG4gICAgICAgICQuZXh0ZW5kKGRvbSwgJC5mbilcbiAgICAgICAgZG9tLnNlbGVjdG9yID0gc2VsZWN0b3IgfHwgJydcbiAgICAgICAgZG9tLl9fWiA9IHRydWVcbiAgICAgICAgcmV0dXJuIGRvbVxuICAgICAgfSxcbiAgICAgIC8vIHRoaXMgaXMgYSBrbHVkZ2UgYnV0IHdvcmtzXG4gICAgICBpc1o6IGZ1bmN0aW9uKG9iamVjdCl7XG4gICAgICAgIHJldHVybiAkLnR5cGUob2JqZWN0KSA9PT0gJ2FycmF5JyAmJiAnX19aJyBpbiBvYmplY3RcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gZ2V0Q29tcHV0ZWRTdHlsZSBzaG91bGRuJ3QgZnJlYWsgb3V0IHdoZW4gY2FsbGVkXG4gIC8vIHdpdGhvdXQgYSB2YWxpZCBlbGVtZW50IGFzIGFyZ3VtZW50XG4gIHRyeSB7XG4gICAgZ2V0Q29tcHV0ZWRTdHlsZSh1bmRlZmluZWQpXG4gIH0gY2F0Y2goZSkge1xuICAgIHZhciBuYXRpdmVHZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZTtcbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSA9IGZ1bmN0aW9uKGVsZW1lbnQpe1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZUdldENvbXB1dGVkU3R5bGUoZWxlbWVudClcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgIH1cbiAgfVxufSkoWmVwdG8pXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjAuMUB3ZWJwYWNrLXplcHRvL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvLjIuMC4wLWJldGEuNEBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vbG9hZGVyLmpzP3tcXFwib21pdFxcXCI6MSxcXFwicmVtb3ZlXFxcIjp0cnVlfSF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTY0ZTc3MjQ3JnNjb3BlZD10cnVlIXB4MnJlbT9yZW1Vbml0PTY1JnJlbVByZWNpc2lvbj04IXNhc3MtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9oZWFkZXIudnVlXCIpXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9oZWFkZXIudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi02NGU3NzI0NyF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9oZWFkZXIudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkM6XFxcXFVzZXJzXFxcXHBhbndlbmh1YVxcXFxEb2N1bWVudHNcXFxcSEJ1aWxkZXJQcm9qZWN0XFxcXHZ1ZS1DYWxlbmRhckxpc3RWaWV3XFxcXHNyY1xcXFxjb21wb25lbnRzXFxcXGhlYWRlci52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTY0ZTc3MjQ3XCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTY0ZTc3MjQ3XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTY0ZTc3MjQ3XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gaGVhZGVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIChfdm0uZ2V0SGVhZGVyKSA/IF9jKCdoZWFkZXInLCB7XG4gICAgY2xhc3M6IF92bS5vcGEgPT0gZmFsc2UgPyB7XG4gICAgICB3aGl0ZTogdHJ1ZVxuICAgIH0gOiB7XG4gICAgICBibGFjazogdHJ1ZVxuICAgIH1cbiAgfSwgWyhfdm0uYmFja1R5cGUpID8gX2MoJ2EnLCB7XG4gICAgY2xhc3M6IF92bS5nZXRCYWNrQ2xhc3MsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5hQnRuKClcbiAgICAgIH1cbiAgICB9XG4gIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInRleHRDb250ZW50XCI6IF92bS5fcyhfdm0ucGFnZU5hbWUpXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgKF92bS5jbGlja0J0bikgPyBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyaWdodEJ1dHRvblwiLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcImlubmVySFRNTFwiOiBfdm0uX3MoX3ZtLmNsaWNrQnRuKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmNsaWNrQWN0aW9uXG4gICAgfVxuICB9KSA6IF92bS5fZSgpXSkgOiBfdm0uX2UoKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi02NGU3NzI0N1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMTAuMC4yQHZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02NGU3NzI0NyEuL34vLjEwLjAuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9oZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi4wLjAtYmV0YS40QGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9sb2FkZXIuanM/e1wib21pdFwiOjEsXCJyZW1vdmVcIjp0cnVlfSEuL34vLjEuMC4wQHZ1ZS1zdHlsZS1sb2FkZXIhLi9+Ly4wLjI2LjFAY3NzLWxvYWRlciEuL34vLjEwLjAuMkB2dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjRlNzcyNDcmc2NvcGVkPXRydWUhLi9+Ly4wLjEuN0BweDJyZW0tbG9hZGVyP3JlbVVuaXQ9NjUmcmVtUHJlY2lzaW9uPTghLi9+Ly40LjEuMUBzYXNzLWxvYWRlciEuL34vLjEwLjAuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwiLypcbiAqIEphdmFTY3JpcHQgTUQ1XG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9KYXZhU2NyaXB0LU1ENVxuICpcbiAqIENvcHlyaWdodCAyMDExLCBTZWJhc3RpYW4gVHNjaGFuXG4gKiBodHRwczovL2JsdWVpbXAubmV0XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuICogaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqXG4gKiBCYXNlZCBvblxuICogQSBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBSU0EgRGF0YSBTZWN1cml0eSwgSW5jLiBNRDUgTWVzc2FnZVxuICogRGlnZXN0IEFsZ29yaXRobSwgYXMgZGVmaW5lZCBpbiBSRkMgMTMyMS5cbiAqIFZlcnNpb24gMi4yIENvcHlyaWdodCAoQykgUGF1bCBKb2huc3RvbiAxOTk5IC0gMjAwOVxuICogT3RoZXIgY29udHJpYnV0b3JzOiBHcmVnIEhvbHQsIEFuZHJldyBLZXBlcnQsIFlkbmFyLCBMb3N0aW5ldFxuICogRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIEJTRCBMaWNlbnNlXG4gKiBTZWUgaHR0cDovL3BhamhvbWUub3JnLnVrL2NyeXB0L21kNSBmb3IgbW9yZSBpbmZvLlxuICovXG5cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuOyhmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCdcblxuICAvKlxuICAqIEFkZCBpbnRlZ2Vycywgd3JhcHBpbmcgYXQgMl4zMi4gVGhpcyB1c2VzIDE2LWJpdCBvcGVyYXRpb25zIGludGVybmFsbHlcbiAgKiB0byB3b3JrIGFyb3VuZCBidWdzIGluIHNvbWUgSlMgaW50ZXJwcmV0ZXJzLlxuICAqL1xuICBmdW5jdGlvbiBzYWZlQWRkICh4LCB5KSB7XG4gICAgdmFyIGxzdyA9ICh4ICYgMHhGRkZGKSArICh5ICYgMHhGRkZGKVxuICAgIHZhciBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KVxuICAgIHJldHVybiAobXN3IDw8IDE2KSB8IChsc3cgJiAweEZGRkYpXG4gIH1cblxuICAvKlxuICAqIEJpdHdpc2Ugcm90YXRlIGEgMzItYml0IG51bWJlciB0byB0aGUgbGVmdC5cbiAgKi9cbiAgZnVuY3Rpb24gYml0Um90YXRlTGVmdCAobnVtLCBjbnQpIHtcbiAgICByZXR1cm4gKG51bSA8PCBjbnQpIHwgKG51bSA+Pj4gKDMyIC0gY250KSlcbiAgfVxuXG4gIC8qXG4gICogVGhlc2UgZnVuY3Rpb25zIGltcGxlbWVudCB0aGUgZm91ciBiYXNpYyBvcGVyYXRpb25zIHRoZSBhbGdvcml0aG0gdXNlcy5cbiAgKi9cbiAgZnVuY3Rpb24gbWQ1Y21uIChxLCBhLCBiLCB4LCBzLCB0KSB7XG4gICAgcmV0dXJuIHNhZmVBZGQoYml0Um90YXRlTGVmdChzYWZlQWRkKHNhZmVBZGQoYSwgcSksIHNhZmVBZGQoeCwgdCkpLCBzKSwgYilcbiAgfVxuICBmdW5jdGlvbiBtZDVmZiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICAgIHJldHVybiBtZDVjbW4oKGIgJiBjKSB8ICgofmIpICYgZCksIGEsIGIsIHgsIHMsIHQpXG4gIH1cbiAgZnVuY3Rpb24gbWQ1Z2cgKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICByZXR1cm4gbWQ1Y21uKChiICYgZCkgfCAoYyAmICh+ZCkpLCBhLCBiLCB4LCBzLCB0KVxuICB9XG4gIGZ1bmN0aW9uIG1kNWhoIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgcmV0dXJuIG1kNWNtbihiIF4gYyBeIGQsIGEsIGIsIHgsIHMsIHQpXG4gIH1cbiAgZnVuY3Rpb24gbWQ1aWkgKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICByZXR1cm4gbWQ1Y21uKGMgXiAoYiB8ICh+ZCkpLCBhLCBiLCB4LCBzLCB0KVxuICB9XG5cbiAgLypcbiAgKiBDYWxjdWxhdGUgdGhlIE1ENSBvZiBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzLCBhbmQgYSBiaXQgbGVuZ3RoLlxuICAqL1xuICBmdW5jdGlvbiBiaW5sTUQ1ICh4LCBsZW4pIHtcbiAgICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICAgIHhbbGVuID4+IDVdIHw9IDB4ODAgPDwgKGxlbiAlIDMyKVxuICAgIHhbKCgobGVuICsgNjQpID4+PiA5KSA8PCA0KSArIDE0XSA9IGxlblxuXG4gICAgdmFyIGlcbiAgICB2YXIgb2xkYVxuICAgIHZhciBvbGRiXG4gICAgdmFyIG9sZGNcbiAgICB2YXIgb2xkZFxuICAgIHZhciBhID0gMTczMjU4NDE5M1xuICAgIHZhciBiID0gLTI3MTczMzg3OVxuICAgIHZhciBjID0gLTE3MzI1ODQxOTRcbiAgICB2YXIgZCA9IDI3MTczMzg3OFxuXG4gICAgZm9yIChpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgICBvbGRhID0gYVxuICAgICAgb2xkYiA9IGJcbiAgICAgIG9sZGMgPSBjXG4gICAgICBvbGRkID0gZFxuXG4gICAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpXSwgNywgLTY4MDg3NjkzNilcbiAgICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxXSwgMTIsIC0zODk1NjQ1ODYpXG4gICAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE3LCA2MDYxMDU4MTkpXG4gICAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgM10sIDIyLCAtMTA0NDUyNTMzMClcbiAgICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNywgLTE3NjQxODg5NylcbiAgICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA1XSwgMTIsIDEyMDAwODA0MjYpXG4gICAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE3LCAtMTQ3MzIzMTM0MSlcbiAgICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyA3XSwgMjIsIC00NTcwNTk4MylcbiAgICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNywgMTc3MDAzNTQxNilcbiAgICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA5XSwgMTIsIC0xOTU4NDE0NDE3KVxuICAgICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTcsIC00MjA2MylcbiAgICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxMV0sIDIyLCAtMTk5MDQwNDE2MilcbiAgICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDcsIDE4MDQ2MDM2ODIpXG4gICAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMTNdLCAxMiwgLTQwMzQxMTAxKVxuICAgICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKVxuICAgICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDE1XSwgMjIsIDEyMzY1MzUzMjkpXG5cbiAgICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNSwgLTE2NTc5NjUxMClcbiAgICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyA2XSwgOSwgLTEwNjk1MDE2MzIpXG4gICAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNCwgNjQzNzE3NzEzKVxuICAgICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaV0sIDIwLCAtMzczODk3MzAyKVxuICAgICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA1LCAtNzAxNTU4NjkxKVxuICAgICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDEwXSwgOSwgMzgwMTYwODMpXG4gICAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNCwgLTY2MDQ3ODMzNSlcbiAgICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA0XSwgMjAsIC00MDU1Mzc4NDgpXG4gICAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgOV0sIDUsIDU2ODQ0NjQzOClcbiAgICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxNF0sIDksIC0xMDE5ODAzNjkwKVxuICAgICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNCwgLTE4NzM2Mzk2MSlcbiAgICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA4XSwgMjAsIDExNjM1MzE1MDEpXG4gICAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMTNdLCA1LCAtMTQ0NDY4MTQ2NylcbiAgICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAyXSwgOSwgLTUxNDAzNzg0KVxuICAgICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNCwgMTczNTMyODQ3MylcbiAgICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyAxMl0sIDIwLCAtMTkyNjYwNzczNClcblxuICAgICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA0LCAtMzc4NTU4KVxuICAgICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDhdLCAxMSwgLTIwMjI1NzQ0NjMpXG4gICAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNiwgMTgzOTAzMDU2MilcbiAgICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxNF0sIDIzLCAtMzUzMDk1NTYpXG4gICAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMV0sIDQsIC0xNTMwOTkyMDYwKVxuICAgICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDRdLCAxMSwgMTI3Mjg5MzM1MylcbiAgICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTYsIC0xNTU0OTc2MzIpXG4gICAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTBdLCAyMywgLTEwOTQ3MzA2NDApXG4gICAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMTNdLCA0LCA2ODEyNzkxNzQpXG4gICAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpXSwgMTEsIC0zNTg1MzcyMjIpXG4gICAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgM10sIDE2LCAtNzIyNTIxOTc5KVxuICAgICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDZdLCAyMywgNzYwMjkxODkpXG4gICAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgOV0sIDQsIC02NDAzNjQ0ODcpXG4gICAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgMTJdLCAxMSwgLTQyMTgxNTgzNSlcbiAgICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE2LCA1MzA3NDI1MjApXG4gICAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMl0sIDIzLCAtOTk1MzM4NjUxKVxuXG4gICAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpXSwgNiwgLTE5ODYzMDg0NClcbiAgICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyA3XSwgMTAsIDExMjY4OTE0MTUpXG4gICAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpXG4gICAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgNV0sIDIxLCAtNTc0MzQwNTUpXG4gICAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA2LCAxNzAwNDg1NTcxKVxuICAgICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpXG4gICAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNSwgLTEwNTE1MjMpXG4gICAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMV0sIDIxLCAtMjA1NDkyMjc5OSlcbiAgICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNiwgMTg3MzMxMzM1OSlcbiAgICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxNV0sIDEwLCAtMzA2MTE3NDQpXG4gICAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE1LCAtMTU2MDE5ODM4MClcbiAgICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KVxuICAgICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA2LCAtMTQ1NTIzMDcwKVxuICAgICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDExXSwgMTAsIC0xMTIwMjEwMzc5KVxuICAgICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNSwgNzE4Nzg3MjU5KVxuICAgICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDldLCAyMSwgLTM0MzQ4NTU1MSlcblxuICAgICAgYSA9IHNhZmVBZGQoYSwgb2xkYSlcbiAgICAgIGIgPSBzYWZlQWRkKGIsIG9sZGIpXG4gICAgICBjID0gc2FmZUFkZChjLCBvbGRjKVxuICAgICAgZCA9IHNhZmVBZGQoZCwgb2xkZClcbiAgICB9XG4gICAgcmV0dXJuIFthLCBiLCBjLCBkXVxuICB9XG5cbiAgLypcbiAgKiBDb252ZXJ0IGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMgdG8gYSBzdHJpbmdcbiAgKi9cbiAgZnVuY3Rpb24gYmlubDJyc3RyIChpbnB1dCkge1xuICAgIHZhciBpXG4gICAgdmFyIG91dHB1dCA9ICcnXG4gICAgdmFyIGxlbmd0aDMyID0gaW5wdXQubGVuZ3RoICogMzJcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoMzI7IGkgKz0gOCkge1xuICAgICAgb3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGlucHV0W2kgPj4gNV0gPj4+IChpICUgMzIpKSAmIDB4RkYpXG4gICAgfVxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxuXG4gIC8qXG4gICogQ29udmVydCBhIHJhdyBzdHJpbmcgdG8gYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3Jkc1xuICAqIENoYXJhY3RlcnMgPjI1NSBoYXZlIHRoZWlyIGhpZ2gtYnl0ZSBzaWxlbnRseSBpZ25vcmVkLlxuICAqL1xuICBmdW5jdGlvbiByc3RyMmJpbmwgKGlucHV0KSB7XG4gICAgdmFyIGlcbiAgICB2YXIgb3V0cHV0ID0gW11cbiAgICBvdXRwdXRbKGlucHV0Lmxlbmd0aCA+PiAyKSAtIDFdID0gdW5kZWZpbmVkXG4gICAgZm9yIChpID0gMDsgaSA8IG91dHB1dC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgb3V0cHV0W2ldID0gMFxuICAgIH1cbiAgICB2YXIgbGVuZ3RoOCA9IGlucHV0Lmxlbmd0aCAqIDhcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoODsgaSArPSA4KSB7XG4gICAgICBvdXRwdXRbaSA+PiA1XSB8PSAoaW5wdXQuY2hhckNvZGVBdChpIC8gOCkgJiAweEZGKSA8PCAoaSAlIDMyKVxuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cblxuICAvKlxuICAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGEgcmF3IHN0cmluZ1xuICAqL1xuICBmdW5jdGlvbiByc3RyTUQ1IChzKSB7XG4gICAgcmV0dXJuIGJpbmwycnN0cihiaW5sTUQ1KHJzdHIyYmlubChzKSwgcy5sZW5ndGggKiA4KSlcbiAgfVxuXG4gIC8qXG4gICogQ2FsY3VsYXRlIHRoZSBITUFDLU1ENSwgb2YgYSBrZXkgYW5kIHNvbWUgZGF0YSAocmF3IHN0cmluZ3MpXG4gICovXG4gIGZ1bmN0aW9uIHJzdHJITUFDTUQ1IChrZXksIGRhdGEpIHtcbiAgICB2YXIgaVxuICAgIHZhciBia2V5ID0gcnN0cjJiaW5sKGtleSlcbiAgICB2YXIgaXBhZCA9IFtdXG4gICAgdmFyIG9wYWQgPSBbXVxuICAgIHZhciBoYXNoXG4gICAgaXBhZFsxNV0gPSBvcGFkWzE1XSA9IHVuZGVmaW5lZFxuICAgIGlmIChia2V5Lmxlbmd0aCA+IDE2KSB7XG4gICAgICBia2V5ID0gYmlubE1ENShia2V5LCBrZXkubGVuZ3RoICogOClcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IDE2OyBpICs9IDEpIHtcbiAgICAgIGlwYWRbaV0gPSBia2V5W2ldIF4gMHgzNjM2MzYzNlxuICAgICAgb3BhZFtpXSA9IGJrZXlbaV0gXiAweDVDNUM1QzVDXG4gICAgfVxuICAgIGhhc2ggPSBiaW5sTUQ1KGlwYWQuY29uY2F0KHJzdHIyYmlubChkYXRhKSksIDUxMiArIGRhdGEubGVuZ3RoICogOClcbiAgICByZXR1cm4gYmlubDJyc3RyKGJpbmxNRDUob3BhZC5jb25jYXQoaGFzaCksIDUxMiArIDEyOCkpXG4gIH1cblxuICAvKlxuICAqIENvbnZlcnQgYSByYXcgc3RyaW5nIHRvIGEgaGV4IHN0cmluZ1xuICAqL1xuICBmdW5jdGlvbiByc3RyMmhleCAoaW5wdXQpIHtcbiAgICB2YXIgaGV4VGFiID0gJzAxMjM0NTY3ODlhYmNkZWYnXG4gICAgdmFyIG91dHB1dCA9ICcnXG4gICAgdmFyIHhcbiAgICB2YXIgaVxuICAgIGZvciAoaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgeCA9IGlucHV0LmNoYXJDb2RlQXQoaSlcbiAgICAgIG91dHB1dCArPSBoZXhUYWIuY2hhckF0KCh4ID4+PiA0KSAmIDB4MEYpICtcbiAgICAgIGhleFRhYi5jaGFyQXQoeCAmIDB4MEYpXG4gICAgfVxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxuXG4gIC8qXG4gICogRW5jb2RlIGEgc3RyaW5nIGFzIHV0Zi04XG4gICovXG4gIGZ1bmN0aW9uIHN0cjJyc3RyVVRGOCAoaW5wdXQpIHtcbiAgICByZXR1cm4gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGlucHV0KSlcbiAgfVxuXG4gIC8qXG4gICogVGFrZSBzdHJpbmcgYXJndW1lbnRzIGFuZCByZXR1cm4gZWl0aGVyIHJhdyBvciBoZXggZW5jb2RlZCBzdHJpbmdzXG4gICovXG4gIGZ1bmN0aW9uIHJhd01ENSAocykge1xuICAgIHJldHVybiByc3RyTUQ1KHN0cjJyc3RyVVRGOChzKSlcbiAgfVxuICBmdW5jdGlvbiBoZXhNRDUgKHMpIHtcbiAgICByZXR1cm4gcnN0cjJoZXgocmF3TUQ1KHMpKVxuICB9XG4gIGZ1bmN0aW9uIHJhd0hNQUNNRDUgKGssIGQpIHtcbiAgICByZXR1cm4gcnN0ckhNQUNNRDUoc3RyMnJzdHJVVEY4KGspLCBzdHIycnN0clVURjgoZCkpXG4gIH1cbiAgZnVuY3Rpb24gaGV4SE1BQ01ENSAoaywgZCkge1xuICAgIHJldHVybiByc3RyMmhleChyYXdITUFDTUQ1KGssIGQpKVxuICB9XG5cbiAgZnVuY3Rpb24gbWQ1IChzdHJpbmcsIGtleSwgcmF3KSB7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIGlmICghcmF3KSB7XG4gICAgICAgIHJldHVybiBoZXhNRDUoc3RyaW5nKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJhd01ENShzdHJpbmcpXG4gICAgfVxuICAgIGlmICghcmF3KSB7XG4gICAgICByZXR1cm4gaGV4SE1BQ01ENShrZXksIHN0cmluZylcbiAgICB9XG4gICAgcmV0dXJuIHJhd0hNQUNNRDUoa2V5LCBzdHJpbmcpXG4gIH1cblxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBtZDVcbiAgICB9KVxuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBtZDVcbiAgfSBlbHNlIHtcbiAgICAkLm1kNSA9IG1kNVxuICB9XG59KHRoaXMpKVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjYuMEBibHVlaW1wLW1kNS9qcy9tZDUuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIjx0ZW1wbGF0ZT5cblx0PGhlYWRlciB2LWlmPVwiZ2V0SGVhZGVyXCIgOmNsYXNzPVwib3BhPT1mYWxzZT97d2hpdGU6IHRydWV9OntibGFjazogdHJ1ZX1cIj5cblx0XHQ8YSA6Y2xhc3M9XCJnZXRCYWNrQ2xhc3NcIiB2LWlmPVwiYmFja1R5cGVcIiBAY2xpY2s9XCJhQnRuKClcIj5cblx0XHQ8L2E+XG5cdFx0PHNwYW4gdi10ZXh0PVwicGFnZU5hbWVcIj48L3NwYW4+XG5cdFx0PGEgdi1pZj1cImNsaWNrQnRuXCIgQGNsaWNrPVwiY2xpY2tBY3Rpb25cIiB2LWh0bWw9XCJjbGlja0J0blwiIGNsYXNzPVwicmlnaHRCdXR0b25cIj5cblx0XHQ8L2E+XG5cdDwvaGVhZGVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IEVudiBmcm9tICcuLi8uLi9jb25maWcvZW52LmpzJztcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdHByb3BzOiBbJ3BhZ2VOYW1lJywgJ2JhY2tBY3Rpb24nLCBcImJhY2tUeXBlXCIsIFwiZ29iYWNrXCIsIFwiY2xpY2tCdG5cIiwgXCJjbGlja0FjdGlvblwiLCBcIm9wYVwiXSxcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0Z2V0QmFja0NsYXNzOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0IGJhY2sgPSB7XG5cdFx0XHRcdFx0YmFjazogdHJ1ZSxcblx0XHRcdFx0XHRiYWNrV2hpdGU6IGZhbHNlXG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmKHRoaXMub3BhID09IGZhbHNlKSB7XG5cdFx0XHRcdFx0YmFja1snYmFjayddID0gZmFsc2U7XG5cdFx0XHRcdFx0YmFja1snYmFja1doaXRlJ10gPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBiYWNrO1xuXHRcdFx0fSxcblx0XHRcdGdldEhlYWRlcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKGxvY2FsU3RvcmFnZS5hbmRyb2lkID09IFwidHJ1ZVwiKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9IGVsc2UgaWYobG9jYWxTdG9yYWdlLmlvcyA9PSBcInRydWVcIikge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRhQnRuOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYodGhpcy5iYWNrQWN0aW9uICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHRoaXMuYmFja0FjdGlvbigpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldCBfYmFjayA9IHRoaXMuJHJvdXRlLnF1ZXJ5LmJhY2tVcmxcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhfYmFjaylcblx0XHRcdFx0XHRpZihfYmFjaykge1xuXHRcdFx0XHRcdFx0dGhpcy4kcm91dGUucm91dGVyLmdvKHtcblx0XHRcdFx0XHRcdFx0cGF0aDogX2JhY2ssXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aGlzdG9yeS5nbygtMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHR9XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic2Fzc1wiIHNjb3BlZD5cblx0LypAaW1wb3J0IHVybChcIi4uL2Fzc2V0cy9pY29uZm9udHMvaWNvbmZvbnQuY3NzXCIpOyovXG5cdC8qaGVhZGVyKi9cblx0XG5cdC5yaWdodEJ1dHRvbiB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHJpZ2h0OiAyMHB4O1xuXHRcdHRvcDogMHB4O1xuXHRcdGZvbnQtc2l6ZTogMjZweDtcblx0XHQvKnB4Ki9cblx0XHRjb2xvcjogIzY2NjY2Njtcblx0XHRsZXR0ZXItc3BhY2luZzogMHB4O1xuXHR9XG5cdFxuXHQuYmxhY2sge1xuXHRcdGJhY2tncm91bmQ6ICNGOUY4Rjg7XG5cdFx0Ym94LXNoYWRvdzogMHB4IDFweCAwcHggMHB4ICM5NTk1OTU7XG5cdH1cblx0XG5cdC53aGl0ZSB7XG5cdFx0Y29sb3I6ICNGRkZGRkY7XG5cdH1cblx0XG5cdGhlYWRlciB7XG5cdFx0Zm9udC1zaXplOiAzNnB4O1xuXHRcdC8qcHgqL1xuXHRcdGhlaWdodDogODhweDtcblx0XHRsaW5lLWhlaWdodDogODhweDtcblx0XHRhOm50aC1vZi10eXBlKDEpIHtcblx0XHRcdHdpZHRoOiAyMHB4O1xuXHRcdFx0aGVpZ2h0OiAzNHB4O1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0bGVmdDogMjBweDtcblx0XHRcdHRvcDogMjdweDtcblx0XHRcdCYuYmFjayB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2NvbXBvbmVudHMvYmxhY2tfYmFja0AyeC5wbmcpIG5vLXJlcGVhdDtcblx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG5cdFx0XHR9XG5cdFx0XHQmLmJhY2tXaGl0ZSB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2NvbXBvbmVudHMvYmxhY2tfd2hpdGVAMngucG5nKSBuby1yZXBlYXQ7XG5cdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRzcGFuIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0fVxuXHR9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBoZWFkZXIudnVlPzgxM2E0NTc0IiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBFbnYgZnJvbSAnLi4vLi4vY29uZmlnL2Vudi5qcyc7XG52YXIgbWQ1ID0gcmVxdWlyZShcImJsdWVpbXAtbWQ1XCIpO1xubGV0IGdldENoZWNrID0ge1xuXHRcdGNoZWNrRW1haWw6IGZ1bmN0aW9uKHZhbCkge1xuXHRcdFx0dmFyIGZpbHRlciA9IC9eKFthLXpBLVowLTlfXFwuXFwtXSkrXFxAKChbYS16QS1aMC05XFwtXSkrXFwuKSsoW2EtekEtWjAtOV17Miw0fSkrJC87XG5cdFx0XHRpZihmaWx0ZXIudGVzdCh2YWwpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y2hlY2tQaG9uZTogZnVuY3Rpb24odmFsKSB7XG5cdFx0XHR2YXIgZmlsdGVyID0gL15bMV1bMzQ1NzhdWzAtOV17OX0kLztcblxuXHRcdFx0aWYoZmlsdGVyLnRlc3QodmFsKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNoZWNrUGFzc3dvcmQ6IGZ1bmN0aW9uKHZhbCkge1xuXHRcdFx0dmFyIGZpbHRlciA9IC9eWzAtOUEtWmEtel17NiwyMH0kLztcblxuXHRcdFx0aWYoZmlsdGVyLnRlc3QodmFsKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNoZWNrSU9TOiBmdW5jdGlvbigpIHtcblx0XHRcdC8v5Yik5pat5piv5ZCmSU9T5oiW6ICF5a6J5Y2TXG5cdFx0XHR2YXIgdSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cdFx0XHQvL3ZhciBpc0FuZHJvaWQgPSB1LmluZGV4T2YoJ0FuZHJvaWQnKSA+IC0xIHx8IHUuaW5kZXhPZignQWRyJykgPiAtMTsgLy9hbmRyb2lk57uI56uvIFxuXHRcdFx0dmFyIGlzaU9TID0gISF1Lm1hdGNoKC9cXChpW147XSs7KCBVOyk/IENQVS4rTWFjIE9TIFgvKTsgLy9pb3Pnu4jnq68gXG5cdFx0XHRpZihpc2lPUykge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNoZWNrV2VjaGF0OiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRyZXR1cm4gdWEubWF0Y2goL01pY3JvTWVzc2VuZ2VyL2kpID09ICdtaWNyb21lc3Nlbmdlcic7XG5cdFx0fSxcblx0XHRjaGVja0xvZ2luOiBmdW5jdGlvbigpIHtcblx0XHRcdC8v5Yik5pat5piv5ZCmbG9naW5cblx0XHRcdHZhciBzdHJTdG9yZURhdGUgPSB3aW5kb3cubG9jYWxTdG9yYWdlID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtZW1iZXJJZFwiKSA6IENvb2tpZS5yZWFkKFwibWVtYmVySWRcIik7XG5cdFx0XHRpZihzdHJTdG9yZURhdGUpIHtcblx0XHRcdFx0aWYoc3RyU3RvcmVEYXRlLnNwbGl0KFwiLFwiKS5sZW5ndGggIT0gMSkge1xuXHRcdFx0XHRcdHZhciBsb2NhbF9pcCA9IHN0clN0b3JlRGF0ZSA/IHN0clN0b3JlRGF0ZS5zcGxpdChcIixcIilbMF0gOiBcIlwiO1xuXHRcdFx0XHRcdHZhciBsb2NhbF9taSA9IHN0clN0b3JlRGF0ZSA/IHN0clN0b3JlRGF0ZS5zcGxpdChcIixcIilbMV0gOiBcIlwiO1xuXHRcdFx0XHRcdHJldHVybiBsb2NhbF9pcCA9PSBteUFqYXgoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0XHR9XG5cblx0XHR9LFxuXHR9XG5cdC8qKlxuXHQgKiAgIOiOt+WPluWFqOeQg+WUr+S4gOagh+ivhuesplxuXHQgKiAyMDE2LTExLTA0IDE1OjUxOjM5XG5cdCAqL1xuY29uc3QgZ2V0UmFuZG9tID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGd1aWQgPSBcIntcIjtcblx0XHRmb3IodmFyIGkgPSAxOyBpIDw9IDMyOyBpKyspIHtcblx0XHRcdHZhciBuID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYuMCkudG9TdHJpbmcoMTYpO1xuXHRcdFx0Z3VpZCArPSBuO1xuXHRcdFx0aWYoKGkgPT0gOCkgfHwgKGkgPT0gMTIpIHx8IChpID09IDE2KSB8fCAoaSA9PSAyMCkpXG5cdFx0XHRcdGd1aWQgKz0gXCItXCI7XG5cdFx0fVxuXHRcdGd1aWQgKz0gXCJ9XCI7XG5cdFx0cmV0dXJuIGd1aWQ7XG5cdH1cblx0LyoqXG5cdCAqICAg5a+5RGF0ZeeahOaJqeWxle+8jOWwhiBEYXRlIOi9rOWMluS4uuaMh+WumuagvOW8j+eahFN0cmluZyBcblx0ICogICDmnIgoTSnjgIHml6UoZCnjgIHlsI/ml7YoaCnjgIHliIYobSnjgIHnp5IocynjgIHlraPluqYocSkg5Y+v5Lul55SoIDEtMiDkuKrljaDkvY3nrKbvvIwgXG5cdCAqICAg5bm0KHkp5Y+v5Lul55SoIDEtNCDkuKrljaDkvY3nrKbvvIzmr6vnp5IoUynlj6rog73nlKggMSDkuKrljaDkvY3nrKYo5pivIDEtMyDkvY3nmoTmlbDlrZcpXG5cdCAqICAg5L6L5a2Q77yaXG5cdCAqICAgKG5ldyBEYXRlKCkpLkZvcm1hdChcInl5eXktTU0tZGQgaGg6bW06c3MuU1wiKSA9PT4gMjAwNi0wNy0wMiAwODowOTowNC40MjNcblx0ICogICAobmV3IERhdGUoKSkuRm9ybWF0KFwieXl5eS1NLWQgaDptOnMuU1wiKSAgICAgID09PiAyMDA2LTctMiA4Ojk6NC4xOCBcblx0ICovXG5jb25zdCBmbXREYXRlID0gZnVuY3Rpb24oZGF0ZSwgZm10KSB7IC8vYXV0aG9yOiBtZWl6eiBcblx0dmFyIG8gPSB7XG5cdFx0XCJNK1wiOiBkYXRlLmdldE1vbnRoKCkgKyAxLCAvL+aciOS7vSBcblx0XHRcImQrXCI6IGRhdGUuZ2V0RGF0ZSgpLCAvL+aXpSBcblx0XHRcImgrXCI6IGRhdGUuZ2V0SG91cnMoKSwgLy/lsI/ml7YgXG5cdFx0XCJtK1wiOiBkYXRlLmdldE1pbnV0ZXMoKSwgLy/liIYgXG5cdFx0XCJzK1wiOiBkYXRlLmdldFNlY29uZHMoKSwgLy/np5IgXG5cdFx0XCJxK1wiOiBNYXRoLmZsb29yKChkYXRlLmdldE1vbnRoKCkgKyAzKSAvIDMpLCAvL+Wto+W6piBcblx0XHRcIlNcIjogZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAvL+avq+enkiBcblx0fTtcblx0aWYoLyh5KykvLnRlc3QoZm10KSlcblx0XHRmbXQgPSBmbXQucmVwbGFjZShSZWdFeHAuJDEsIChkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIlwiKS5zdWJzdHIoNCAtIFJlZ0V4cC4kMS5sZW5ndGgpKTtcblx0Zm9yKHZhciBrIGluIG8pXG5cdFx0aWYobmV3IFJlZ0V4cChcIihcIiArIGsgKyBcIilcIikudGVzdChmbXQpKVxuXHRcdFx0Zm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAoUmVnRXhwLiQxLmxlbmd0aCA9PSAxKSA/IChvW2tdKSA6ICgoXCIwMFwiICsgb1trXSkuc3Vic3RyKChcIlwiICsgb1trXSkubGVuZ3RoKSkpO1xuXHRyZXR1cm4gZm10O1xufVxuXG4vKipcbiAqIOeUseS6jm1vbWVudOW6k+WKoOi/m+adpeWkquWkp+S6hu+8jOiHquWumuS5ieS6hmZvcm1ub3flh73mlbDvvIzlvoXlrozlloTpmLbmrrVcbiAqL1xuY29uc3QgTWlsbGlzZWNvbmRUb0RhdGUgPSBmdW5jdGlvbihtc2QpIHtcblx0dmFyIHRpbWUgPSBwYXJzZUZsb2F0KG1zZCkgLyAxMDAwO1xuXHR2YXIgc3RyID0gXCJcIjtcblx0aWYobnVsbCAhPSB0aW1lICYmIFwiXCIgIT0gdGltZSkge1xuXG5cdFx0aWYodGltZSA+IDYwICYmIHRpbWUgPCAzNjAwKSB7XG5cdFx0XHRzdHIgPSBwYXJzZUludCh0aW1lIC8gNjAuMCkgKyBcIiDliIbpkp/liY1cIjtcblx0XHR9IGVsc2UgaWYodGltZSA+PSAzNjAwICYmIHRpbWUgPCA4NjQwMCkge1xuXHRcdFx0c3RyID0gcGFyc2VJbnQodGltZSAvIDM2MDAuMCkgKyBcIiDlsI/ml7bliY1cIjtcblx0XHR9IGVsc2UgaWYodGltZSA+PSA4NjQwMCAmJiB0aW1lIDwgODY0MDAgKiAzMCkge1xuXHRcdFx0c3RyID0gcGFyc2VJbnQodGltZSAvIDg2NDAwLjApICsgXCIg5aSp5YmNXCI7XG5cdFx0fSBlbHNlIGlmKHRpbWUgPj0gODY0MDAgKiAzMCAmJiB0aW1lIDwgODY0MDAgKiAzNjUpIHtcblx0XHRcdHN0ciA9IHBhcnNlSW50KHRpbWUgLyAoODY0MDAuMCAqIDMwKSkgKyBcIiDkuKrmnIjliY1cIjtcblx0XHR9IGVsc2UgaWYodGltZSA+PSA4NjQwMCAqIDM2NSkge1xuXHRcdFx0c3RyID0gcGFyc2VJbnQodGltZSAvICg4NjQwMC4wICogMzY1KSkgKyBcIiDlubTliY1cIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RyID0gcGFyc2VJbnQodGltZSkgKyBcIiDnp5LliY1cIjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHN0cjtcbn1cbmNvbnN0IHNlbmRDb2RlID0gZnVuY3Rpb24obykge1xuXHR2YXIgYnRuY2ZnID0ge1xuXHRcdGRmd2FpdDogMjAsIC8v5YCS6K6h5pe25pe26Ze0ICAgMuS4qumDveimgeaUuVxuXHRcdHdhaXQ6IDIwIC8v5YCS6K6h5pe25pe26Ze0XG5cdH1cblx0dmFyIF90aGlzID0ge1xuXHRcdGJlZ2luOiBmdW5jdGlvbigpIHtcblx0XHRcdGlmKGJ0bmNmZy53YWl0ID09IC0xKSB7XG5cdFx0XHRcdCQobykucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xuXHRcdFx0XHQkKG8pLnJlbW92ZUNsYXNzKFwiYnRuLWdyYXlcIik7XG5cdFx0XHRcdCQobykudGV4dChcIuiOt+WPlumqjOivgeeggVwiKTtcblx0XHRcdFx0YnRuY2ZnLndhaXQgPSBidG5jZmcuZGZ3YWl0O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JChvKS5hZGRDbGFzcyhcImJ0bi1ncmF5XCIpO1xuXHRcdFx0XHQkKG8pLmF0dHIoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuXHRcdFx0XHQkKG8pLnRleHQoXCLph43lj5EoXCIgKyBidG5jZmcud2FpdCArIFwiKVwiKTtcblx0XHRcdFx0YnRuY2ZnLndhaXQtLTtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRfdGhpcy5iZWdpbigpO1xuXHRcdFx0XHR9LCAxMDAwKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIF90aGlzLmJlZ2luKClcbn1cblxuLypcbiAq5L2c6ICFOnBhbndlbmh1YSBcbiAq5pe26Ze0OjIwMTYtMTEtMDEgMTc6MTE6MjBcbiAqIFxuICogKi9cbmNvbnN0IG15TW9kYWwgPSBmdW5jdGlvbigpIHtcblx0XHRsZXQgZGVmYXVsdHMgPSB7XG5cdFx0XHRtb2RhbF9pZDogbnVsbCxcblx0XHRcdG92ZXJsYXk6IDAuNSxcblx0XHRcdGNsb3NlQnV0dG9uOiBudWxsLFxuXHRcdFx0dHlwZTogMSwgLy8x5Li65Lit6Ze05by55Ye6IDLkuLrkuIvlvoDkuIrlvLnlh7ogM+S7juWPs+WIsOW3plxuXHRcdFx0Y2xvc2VmdW50aW9uOiBmdW5jdGlvbigpIHt9XG5cdFx0fTtcblx0XHRsZXQgdGlwY29uZmlnID0geyAvL+eUn+aIkOeahOW8ueeql1xuXHRcdFx0bW9kYWxfdGlwOiAn5rip6aao5o+Q56S6JywgLy/muKnppqjmj5DnpLpcblx0XHRcdG1vZGFsX2NudDogbnVsbCwgLy/mmLXnp7Dlt7Lnu4/lrZjlnKhcblx0XHRcdHRydWVfYnV0dG9uOiBudWxsLCAvL+ehruWumlxuXHRcdFx0Y2FuY2VsX2J1dHRvbjogbnVsbCwgLy/lj5bmtohcblx0XHRcdHRydWVfZnVuY3Rpb246IGZ1bmN0aW9uKCkge30sXG5cdFx0XHRjYW5jZWxfZnVuY3Rpb246IGZ1bmN0aW9uKCkge31cblx0XHR9O1xuXHRcdGxldCBGID0ge1xuXHRcdFx0b3ZlcmxheTogZnVuY3Rpb24oKSB7IC8v5re75Yqg5Y2K6YCP5piOb3ZlcmxheVxuXHRcdFx0XHRsZXQgb3ZlcmxheSA9ICQoXCI8ZGl2IGlkPSdvdmVybGF5X3Bhbic+PC9kaXY+XCIpO1xuXHRcdFx0XHRpZigkKFwiI292ZXJsYXlfcGFuXCIpLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdFx0JChcImJvZHlcIikuYXBwZW5kKG92ZXJsYXkpO1xuXHRcdFx0XHRcdCQoXCIjb3ZlcmxheV9wYW5cIikuY3NzKHtcblx0XHRcdFx0XHRcdFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuXHRcdFx0XHRcdFx0XCJ0b3BcIjogXCIwcHhcIixcblx0XHRcdFx0XHRcdFwibGVmdFwiOiBcIjBweFwiLFxuXHRcdFx0XHRcdFx0XCJoZWlnaHRcIjogXCIxMDAlXCIsXG5cdFx0XHRcdFx0XHRcIndpZHRoXCI6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdFx0XCJiYWNrZ3JvdW5kXCI6IFwiIzAwMFwiLFxuXHRcdFx0XHRcdFx0XCJ6LWluZGV4XCI6IFwiOTk5XCIsXG5cdFx0XHRcdFx0XHRcImRpc3BsYXlcIjogXCJub25lXCJcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Zmxhc2hNb2Q6IGZ1bmN0aW9uKHN0cikge1xuXHRcdFx0XHR2YXIgZnNobW9kID0gJChcIjxkaXYgc3R5bGU9JycgY2xhc3M9J25vX3NlYXJjaCB5YyBmbGFzaCcgaWQ9J2ZzaG1vZCc+XCIgKyBzdHIgKyBcIjwvZGl2PlwiKTtcblx0XHRcdFx0aWYoJChcIiNmc2htb2RcIikubGVuZ3RoID09IDApIHtcblx0XHRcdFx0XHQkKFwiYm9keVwiKS5hcHBlbmQoZnNobW9kKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkKFwiI2ZzaG1vZFwiKS50ZXh0KHN0cik7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR0aXBNb2Q6IGZ1bmN0aW9uKHN0cikgeyAvL+agueaNrnN0cuWPguaVsOaLvOaOpeW8ueeqlyBcblx0XHRcdFx0aWYoc3RyLmNhbmNlbF9idXR0b24gPT0gbnVsbCkgeyAvL+WmguaenOayoeaciSDlj5bmtojmjInpkq4gICDlsLHkuI3mi7zmjqUg5Y+W5raI5oyJ6ZKu55qEaHRtbFxuXHRcdFx0XHRcdHZhciB0aXBtb2QgPSAkKCc8ZGl2IGNsYXNzPVwid2QtbW9kYWxcIiBpZD1cInRpcF9tb2RcIj48ZGl2IGNsYXNzPVwid2QtbW9kYWwtaGVhZGVyXCI+PGRpdiBjbGFzcz1cIndkLW1vZGFsLXRpXCI+JyArIHN0ci5tb2RhbF90aXAgKyAnPC9kaXY+PGRpdiBjbGFzcz1cIndkLW1vZGFsLWNvbnRlbnRcIj48c3BhbiBpZD1cIndkLW1vZGFsLXJlc3VsdFwiPicgKyBzdHIubW9kYWxfY250ICsgJzwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwid2QtbW9kYWwtZm9vdGVyXCI+PGEgY2xhc3M9XCJ3ZC1tb2RhbC1idXR0b24gZG91YmlfYnRuXCIgaWQ9XCJ0cnVlLWJ1dHRvblwiPicgKyBzdHIudHJ1ZV9idXR0b24gKyAnPC9hPjwvZGl2PjwvZGl2PicpO1xuXHRcdFx0XHR9IGVsc2UgeyAvL+WQpuWImeaLvOaOpeWHuuadpVxuXHRcdFx0XHRcdHZhciB0aXBtb2QgPSAkKCc8ZGl2IGNsYXNzPVwid2QtbW9kYWxcIiBpZD1cInRpcF9tb2RcIj48ZGl2IGNsYXNzPVwid2QtbW9kYWwtaGVhZGVyXCI+PGRpdiBjbGFzcz1cIndkLW1vZGFsLXRpXCI+JyArIHN0ci5tb2RhbF90aXAgKyAnPC9kaXY+PGRpdiBjbGFzcz1cIndkLW1vZGFsLWNvbnRlbnRcIj48c3BhbiBpZD1cIndkLW1vZGFsLXJlc3VsdFwiPicgKyBzdHIubW9kYWxfY250ICsgJzwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwid2QtbW9kYWwtZm9vdGVyXCI+PGEgaWQ9XCJjYW5jZWwtYnV0dG9uXCIgY2xhc3M9XCJ3ZC1tb2RhbC1idXR0b24gbW9kYWxfY2xvc2VcIj4nICsgc3RyLmNhbmNlbF9idXR0b24gKyAnPC9hPjxhIGNsYXNzPVwid2QtbW9kYWwtYnV0dG9uXCIgaWQ9XCJ0cnVlLWJ1dHRvblwiPicgKyBzdHIudHJ1ZV9idXR0b24gKyAnPC9hPjwvZGl2PjwvZGl2PicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKCQoXCIjdGlwX21vZFwiKS5sZW5ndGggPT0gMCkgeyAvL+S7peS4i+S7o+eggemYsuatouWkmuW8ueeql+mHjeWPoOOAglxuXHRcdFx0XHRcdCQoXCJib2R5XCIpLmFwcGVuZCh0aXBtb2QpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCQoXCIjdGlwX21vZFwiKS5yZW1vdmUoKTtcblx0XHRcdFx0XHQkKFwiYm9keVwiKS5hcHBlbmQodGlwbW9kKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9XG5cdFx0bGV0IE1vZGFsID0ge1xuXHRcdFx0c2hvd01vZGFsOiBmdW5jdGlvbihvcHRpb25zKSB7XG5cdFx0XHRcdGxldCBfdGhpcyA9IHRoaXM7XG5cdFx0XHRcdEYub3ZlcmxheSgpO1xuXHRcdFx0XHRvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXHRcdFx0XHRsZXQgbyA9IG9wdGlvbnM7XG5cdFx0XHRcdCQodGhpcykuY2xpY2soZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdGxldCBtb2RhbF9pZCA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XG5cdFx0XHRcdFx0JChcIiNvdmVybGF5X3BhblwiKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdF90aGlzLmNsb3NlTW9kYWwobW9kYWxfaWQpXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JChvLmNsb3NlQnV0dG9uKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdF90aGlzLmNsb3NlTW9kYWwobW9kYWxfaWQpO1xuXHRcdFx0XHRcdFx0by5jbG9zZWZ1bnRpb24oKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkKFwiI292ZXJsYXlfcGFuXCIpLmNzcyh7XG5cdFx0XHRcdFx0XHRcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuXHRcdFx0XHRcdFx0XCJvcGFjaXR5XCI6IG8ub3ZlcmxheVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQobW9kYWxfaWQpLmNzcyh7XG5cdFx0XHRcdFx0XHRcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcblx0XHRcdFx0XHRcdFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG5cdFx0XHRcdFx0XHRcInotaW5kZXhcIjogMTEwMDAsXG5cdFx0XHRcdFx0XHRcImJvdHRvbVwiOiBvLmJvdHRvbSArIFwicHhcIixcblx0XHRcdFx0XHRcdFwidG9wXCI6IG8udG9wICsgXCJweFwiXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JChtb2RhbF9pZCkuYWRkQ2xhc3MoXCJhbmltYXRlZCB6b29tSW5cIik7XG5cdFx0XHRcdFx0Ly/lj5bmtojpu5jorqTliqjkvZxcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRvcGVuTW9kYWw6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0XHRcdFx0bGV0IF90aGlzID0gdGhpcztcblx0XHRcdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblx0XHRcdFx0bGV0IG8gPSBvcHRpb25zO1xuXHRcdFx0XHRpZihvLnR5cGUgPT0gMSkge1xuXHRcdFx0XHRcdEYub3ZlcmxheSgpO1xuXHRcdFx0XHRcdGxldCBtb2RhbF9pZCA9IG8ubW9kYWxfaWQ7XG5cdFx0XHRcdFx0JChcIiNvdmVybGF5X3BhblwiKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdF90aGlzLmNsb3NlTW9kYWwobW9kYWxfaWQpXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JChvLmNsb3NlQnV0dG9uKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdF90aGlzLmNsb3NlTW9kYWwobW9kYWxfaWQpXG5cdFx0XHRcdFx0XHRvLmNsb3NlZnVudGlvbigpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQoXCIjb3ZlcmxheV9wYW5cIikuY3NzKHtcblx0XHRcdFx0XHRcdFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG5cdFx0XHRcdFx0XHRcIm9wYWNpdHlcIjogby5vdmVybGF5XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JChtb2RhbF9pZCkuY3NzKHtcblx0XHRcdFx0XHRcdFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuXHRcdFx0XHRcdFx0XCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcblx0XHRcdFx0XHRcdFwiei1pbmRleFwiOiAxMTAwMCxcblx0XHRcdFx0XHRcdFwiYm90dG9tXCI6IG8uYm90dG9tICsgXCJweFwiLFxuXHRcdFx0XHRcdFx0XCJ0b3BcIjogby50b3AgKyBcInB4XCJcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkKG1vZGFsX2lkKS5hZGRDbGFzcyhcImFuaW1hdGVkIHpvb21JblwiKTtcblx0XHRcdFx0fSBlbHNlIGlmKG8udHlwZSA9PSAyKSB7IC8v55Sx5LiL5b6A5LiKXG5cdFx0XHRcdFx0Ri5vdmVybGF5KCk7XG5cdFx0XHRcdFx0dmFyIG1vZGFsX2lkID0gby5tb2RhbF9pZDtcblx0XHRcdFx0XHQkKFwiI292ZXJsYXlfcGFuXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0X3RoaXMuY2xvc2VNb2RhbChtb2RhbF9pZCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JChvLmNsb3NlQnV0dG9uKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdF90aGlzLmNsb3NlTW9kYWwobW9kYWxfaWQpO1xuXHRcdFx0XHRcdFx0by5jbG9zZWZ1bnRpb24oKTtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHZhciAkbGlzdCA9ICQobW9kYWxfaWQpO1xuXHRcdFx0XHRcdCRsaXN0LmNzcyhcImRpc3BsYXlcIiwgJycpO1xuXHRcdFx0XHRcdCRsaXN0LmNzcyhcImJvdHRvbVwiLCAtJGxpc3QuaGVpZ2h0KCkpO1xuXG5cdFx0XHRcdFx0JChcIiNvdmVybGF5X3BhblwiKS5jc3Moe1xuXHRcdFx0XHRcdFx0XCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcblx0XHRcdFx0XHRcdFwib3BhY2l0eVwiOiBvLm92ZXJsYXlcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkKG1vZGFsX2lkKS5jc3Moe1xuXHRcdFx0XHRcdFx0XCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG5cdFx0XHRcdFx0XHRcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuXHRcdFx0XHRcdFx0XCJ6LWluZGV4XCI6IDExMDAwLFxuXHRcdFx0XHRcdFx0XCJib3R0b21cIjogby5ib3R0b20gKyBcInB4XCIsXG5cdFx0XHRcdFx0XHRcInRvcFwiOiBvLnRvcCArIFwicHhcIlxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQobW9kYWxfaWQpLmFkZENsYXNzKFwiYW5pbWF0ZWQgZmFkZUluVXBcIik7XG5cblx0XHRcdFx0fSBlbHNlIGlmKG8udHlwZSA9PSAzKSB7XG5cdFx0XHRcdFx0Ly/nlLF5b3XlvoB6dW9cblx0XHRcdFx0XHR2YXIgbW9kYWxfaWQgPSBvLm1vZGFsX2lkO1xuXHRcdFx0XHRcdCQoXCIjb3ZlcmxheV9wYW5cIikuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRfdGhpcy5jbG9zZU1vZGFsKG1vZGFsX2lkKTtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkKG8uY2xvc2VCdXR0b24pLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0X3RoaXMuY2xvc2VNb2RhbChtb2RhbF9pZCk7XG5cdFx0XHRcdFx0XHRvLmNsb3NlZnVudGlvbigpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0dmFyICRsaXN0ID0gJChtb2RhbF9pZCk7XG5cdFx0XHRcdFx0JGxpc3QuY3NzKFwiZGlzcGxheVwiLCAnJyk7XG5cdFx0XHRcdFx0JGxpc3QuY3NzKFwicmlnaHRcIiwgJGxpc3Qud2lkdGgoKSk7XG5cblx0XHRcdFx0XHQkKFwiI292ZXJsYXlfcGFuXCIpLmNzcyh7XG5cdFx0XHRcdFx0XHRcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuXHRcdFx0XHRcdFx0XCJvcGFjaXR5XCI6IG8ub3ZlcmxheVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQobW9kYWxfaWQpLmNzcyh7XG5cdFx0XHRcdFx0XHRcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcblx0XHRcdFx0XHRcdFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG5cdFx0XHRcdFx0XHRcInotaW5kZXhcIjogMTEwMDAsXG5cdFx0XHRcdFx0XHRcImJvdHRvbVwiOiBvLmJvdHRvbSArIFwicHhcIixcblx0XHRcdFx0XHRcdFwidG9wXCI6IG8udG9wICsgXCJweFwiXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JChtb2RhbF9pZCkuYWRkQ2xhc3MoXCJhbmltYXRlZCBmYWRlSW5SaWdodEJpZ1wiKTtcblxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0dGlwTW9kYWw6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0XHRcdFx0bGV0IF90aGlzID0gdGhpcztcblx0XHRcdFx0Ri5vdmVybGF5KCk7IC8v5re75Yqg5Y2K6YCP5piO6JKZ5bGCXG5cdFx0XHRcdHZhciBvID0gJC5leHRlbmQodGlwY29uZmlnLCBvcHRpb25zKTsgLy/ojrflj5bmj5Lku7bphY3nva5cblx0XHRcdFx0Ri50aXBNb2Qobyk7IC8v5qC55o2u6YWN572uIOa4suafk+W8ueeql2RvbVxuXHRcdFx0XHR2YXIgbW9kYWxfaWQgPSAnI3RpcF9tb2QnOyAvL+iOt+WPlua4suafk+eahGRvbSDnmoQgIGlkXG5cdFx0XHRcdCQoXCIjb3ZlcmxheV9wYW5cIikuY2xpY2soZnVuY3Rpb24oKSB7IC8v54K55Ye75Y2K6YCP5piOICAgICDop6blj5Hkuovku7Zcblx0XHRcdFx0XHRfdGhpcy5jbG9zZU1vZGFsKG1vZGFsX2lkKTsgLy/lhbPpl63lvLnnqpdcblx0XHRcdFx0XHRvLmNhbmNlbF9mdW5jdGlvbihcIm92ZXJsYXlcIik7IC8v5YWz6Zet5oyJ6ZKu55qE5LqL5Lu2XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQkKCcjdHJ1ZS1idXR0b24nKS5jbGljayhmdW5jdGlvbigpIHsgLy8g57uR5a6a56Gu6K6k5oyJ6ZKuXG5cdFx0XHRcdFx0X3RoaXMuY2xvc2VNb2RhbChtb2RhbF9pZCk7IC8v5YWz6Zet5by556qXXG5cdFx0XHRcdFx0by50cnVlX2Z1bmN0aW9uKCk7IC8v6Kem5Y+R56Gu6K6k5oyJ6ZKu55qE5LqL5Lu2XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQkKCcjY2FuY2VsLWJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCkgeyAvL+e7keWumuWPlua2iOaMiemSrlxuXHRcdFx0XHRcdF90aGlzLmNsb3NlTW9kYWwobW9kYWxfaWQpOyAvL+WFs+mXreW8ueeql1xuXHRcdFx0XHRcdG8uY2FuY2VsX2Z1bmN0aW9uKFwiY2FuY2VsXCIpOyAvL+WFs+mXreaMiemSrueahOS6i+S7tlxuXHRcdFx0XHR9KTtcblx0XHRcdFx0JChcIiNvdmVybGF5X3BhblwiKS5jc3MoeyAvL+iuvue9riDljYrpgI/mmI4gb3ZlcmxheeeahCAg6YCP5piO5bqmIOW5tuS4lOaYvuekulxuXHRcdFx0XHRcdFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG5cdFx0XHRcdFx0XCJvcGFjaXR5XCI6IDAuNVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0JChtb2RhbF9pZCkuY3NzKHsgLy/mmL7npLrlvLnnqpdcblx0XHRcdFx0XHRcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcblx0XHRcdFx0XHRcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuXHRcdFx0XHRcdFwiei1pbmRleFwiOiAxMTAwMCxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdCQobW9kYWxfaWQpLmFkZENsYXNzKFwiYW5pbWF0ZWQgem9vbUluXCIpOyAvL+a3u+WKoOWKqOeUu1xuXHRcdFx0fSxcblx0XHRcdGNsb3NlTW9kYWw6IGZ1bmN0aW9uKG1vZGFsX2lkKSB7XG5cdFx0XHRcdCQoXCIjb3ZlcmxheV9wYW5cIikuY3NzKHsgLy/pmpDol49vdmVybGF5XG5cdFx0XHRcdFx0XCJkaXNwbGF5XCI6IFwibm9uZVwiXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQkKG1vZGFsX2lkKS5jc3MoeyAvL+makOiXj+W8ueeql1xuXHRcdFx0XHRcdFwiZGlzcGxheVwiOiBcIm5vbmVcIlxuXHRcdFx0XHR9KVxuXG5cdFx0XHR9LFxuXHRcdFx0Zmxhc2hJbnRvOiBmdW5jdGlvbihzdHIpIHtcblx0XHRcdFx0bGV0IF90aGlzID0gdGhpcztcblx0XHRcdFx0Ri5mbGFzaE1vZChzdHIpO1xuXHRcdFx0XHQkKFwiI2ZzaG1vZFwiKS5hZGRDbGFzcygneWMnKTtcblx0XHRcdFx0JChcIiNmc2htb2RcIikuY3NzKHtcblx0XHRcdFx0XHRcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcblx0XHRcdFx0XHRcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuXHRcdFx0XHRcdFwiei1pbmRleFwiOiAxMTAwMCxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdCQoJyNmc2htb2QnKS5hZGRDbGFzcyhcImFuaW1hdGVkIHpvb21JblwiKTtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRfdGhpcy5mbGFzaE91dCgpXG5cdFx0XHRcdH0sIDMwMDApO1xuXHRcdFx0fSxcblx0XHRcdGZsYXNoT3V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0JChcIiNmc2htb2RcIikuY3NzKHtcblx0XHRcdFx0XHRcImRpc3BsYXlcIjogXCJub25lXCJcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdH1cblx0XHRyZXR1cm4gTW9kYWw7XG5cdH1cblx0LyoqXG5cdCAqIOiHquWumuS5iWFqYXhcblx0ICovXG5cbmNvbnN0IG15QWpheCA9IGZ1bmN0aW9uKG9wdHMpIHtcblx0dmFyIE8gPSB7XG5cdFx0Z2V0dXJsaXA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0IHVybF9pcDtcblx0XHRcdGlmKEVudiA9PSAncHJvZHVjdGlvbicgfHwgRW52ID09ICdwcmUnKSB7XG5cdFx0XHRcdHVybF9pcCA9IFwiaHR0cHM6Ly9hcGkuNWRvdS5jbi9cIjtcblx0XHRcdH0gZWxzZSBpZihFbnYgPT0gJ3Rlc3QnIHx8IEVudiA9PSAnZGV2ZWxvcG1lbnQnKSB7XG5cdFx0XHRcdHVybF9pcCA9IFwiaHR0cHM6Ly9hcGl0ZXN0LjVkb3UuY24vXCI7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdXJsX2lwO1xuXHRcdH0sXG5cdFx0Z2V0dmFsdWU6IGZ1bmN0aW9uKG5hdGl2ZURhdGEsIGtleXN0cikge1xuXHRcdFx0dmFyIGNmZyA9IHt9O1xuXHRcdFx0dmFyIGlvc1N0ciA9IG5hdGl2ZURhdGEgJiYgbmF0aXZlRGF0YS5zcGxpdCgnLCcpO1xuXHRcdFx0aWYoaW9zU3RyKSB7XG5cdFx0XHRcdGZvcih2YXIgeCBpbiBpb3NTdHIpIHtcblx0XHRcdFx0XHRjZmdbaW9zU3RyW3hdLnNwbGl0KCc6JylbMF1dID0gaW9zU3RyW3hdLnNwbGl0KCc6JylbMV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBjZmdba2V5c3RyXSA/IGNmZ1trZXlzdHJdIDogXCJcIjtcblx0XHR9LFxuXHRcdGdldGFpY2M6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5hdGl2ZV9kYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJuYXRpdmVfZGF0YVwiKTtcblx0XHRcdHZhciBsb2NhbF9haWNjID0gdGhpcy5nZXR2YWx1ZShuYXRpdmVfZGF0YSwgXCJhaWNjXCIpO1xuXHRcdFx0cmV0dXJuIGxvY2FsX2FpY2MgPyBsb2NhbF9haWNjIDogXCJXVURPVV9INVwiO1xuXHRcdH0sXG5cdFx0Z2V0YWljcDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmF0aXZlX2RhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5hdGl2ZV9kYXRhXCIpO1xuXHRcdFx0dmFyIGxvY2FsX2FpY3AgPSB0aGlzLmdldHZhbHVlKG5hdGl2ZV9kYXRhLCBcImFpY3BcIik7XG5cdFx0XHRyZXR1cm4gbG9jYWxfYWljcCA/IGxvY2FsX2FpY3AgOiBcIkUyRTQ4ODJEOTNDQTkzNDdDRDAyQTBDMDY4Qjc3NjMyXCI7XG5cdFx0fSxcblx0XHRnZXRiaW1pOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuYXRpdmVfZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmF0aXZlX2RhdGFcIik7XG5cdFx0XHR2YXIgbG9jYWxfYmltaSA9IHRoaXMuZ2V0dmFsdWUobmF0aXZlX2RhdGEsIFwiYmltaVwiKTtcblx0XHRcdGlmKGxvY2FsX2JpbWkpIHtcblx0XHRcdFx0cmV0dXJuIGxvY2FsX2JpbWk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgc3RyU3RvcmVEYXRlID0gd2luZG93LmxvY2FsU3RvcmFnZSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibWVtYmVySWRcIikgOiBDb29raWUucmVhZChcIm1lbWJlcklkXCIpO1xuXHRcdFx0XHRpZihzdHJTdG9yZURhdGUpIHtcblx0XHRcdFx0XHRpZihzdHJTdG9yZURhdGUgJiYgc3RyU3RvcmVEYXRlLnNwbGl0KFwiLFwiKS5sZW5ndGggIT0gMSkge1xuXHRcdFx0XHRcdFx0dmFyIGxvY2FsX2lwID0gc3RyU3RvcmVEYXRlID8gc3RyU3RvcmVEYXRlLnNwbGl0KFwiLFwiKVswXSA6IFwiXCI7XG5cdFx0XHRcdFx0XHR2YXIgbG9jYWxfbWkgPSBzdHJTdG9yZURhdGUgPyBzdHJTdG9yZURhdGUuc3BsaXQoXCIsXCIpWzFdIDogXCJcIjtcblx0XHRcdFx0XHRcdHJldHVybiBsb2NhbF9pcCA9PSB0aGlzLmdldHVybGlwKCkgPyBsb2NhbF9taSA6IFwiXCI7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBzdHJTdG9yZURhdGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBcIlwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRnZXRiaWN0OiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuYXRpdmVfZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmF0aXZlX2RhdGFcIik7XG5cdFx0XHR2YXIgbG9jYWxfYmljdCA9IHRoaXMuZ2V0dmFsdWUobmF0aXZlX2RhdGEsIFwiYmljdFwiKTtcblx0XHRcdHJldHVybiBsb2NhbF9iaWN0ID8gbG9jYWxfYmljdCA6IFwiSDVcIjtcblx0XHR9LFxuXHRcdGdldGJpZG46IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5hdGl2ZV9kYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJuYXRpdmVfZGF0YVwiKTtcblx0XHRcdHZhciBsb2NhbF9iaWRuID0gdGhpcy5nZXR2YWx1ZShuYXRpdmVfZGF0YSwgXCJiaWRuXCIpO1xuXHRcdFx0cmV0dXJuIGxvY2FsX2JpZG4gPyBsb2NhbF9iaWRuIDogXCJINVwiO1xuXHRcdH0sXG5cdFx0Z2V0YmlkdjogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgYmlkdiA9IFwiXCI7XG5cdFx0XHR2YXIgdSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cdFx0XHR2YXIgaXNBbmRyb2lkID0gdS5pbmRleE9mKCdBbmRyb2lkJykgPiAtMSB8fCB1LmluZGV4T2YoJ0FkcicpID4gLTE7IC8vYW5kcm9pZOe7iOerryBcblx0XHRcdHZhciBpc2lPUyA9ICEhdS5tYXRjaCgvXFwoaVteO10rOyggVTspPyBDUFUuK01hYyBPUyBYLyk7IC8vaW9z57uI56uvIFxuXHRcdFx0aWYoaXNBbmRyb2lkKSB7XG5cdFx0XHRcdGJpZHYgPSAnQW5kcm9pZCc7XG5cdFx0XHR9IGVsc2UgaWYoaXNpT1MpIHtcblx0XHRcdFx0YmlkdiA9ICdJT1MnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YmlkdiA9ICdQQyc7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYmlkdjtcblx0XHR9LFxuXHRcdGdldHNpZDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmF0aXZlX2RhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5hdGl2ZV9kYXRhXCIpO1xuXHRcdFx0dmFyIGxvY2FsX3NpZCA9IHRoaXMuZ2V0dmFsdWUobmF0aXZlX2RhdGEsIFwic2lkXCIpO1xuXHRcdFx0cmV0dXJuIGxvY2FsX3NpZCA/IGxvY2FsX3NpZCA6IFwiSDVcIjtcblx0XHR9LFxuXHRcdGdldHRpbWVzdGFtcDogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKSAvIDEwMDA7XG5cdFx0fSxcblx0XHRnZXRiaWRtOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuYXRpdmVfZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmF0aXZlX2RhdGFcIik7XG5cdFx0XHR2YXIgbG9jYWxfYmlkbSA9IHRoaXMuZ2V0dmFsdWUobmF0aXZlX2RhdGEsIFwiYmlkbVwiKTtcblx0XHRcdHJldHVybiBsb2NhbF9iaWRtO1xuXHRcdH0sXG5cdFx0Z2V0YmlvdjogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmF0aXZlX2RhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5hdGl2ZV9kYXRhXCIpO1xuXHRcdFx0dmFyIGxvY2FsX2Jpb3YgPSB0aGlzLmdldHZhbHVlKG5hdGl2ZV9kYXRhLCBcImJpb3ZcIik7XG5cdFx0XHRyZXR1cm4gbG9jYWxfYmlvdjtcblx0XHR9LFxuXHRcdGdldGJpYXY6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5hdGl2ZV9kYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJuYXRpdmVfZGF0YVwiKTtcblx0XHRcdHZhciBsb2NhbF9iaWF2ID0gdGhpcy5nZXR2YWx1ZShuYXRpdmVfZGF0YSwgXCJiaWF2XCIpO1xuXHRcdFx0cmV0dXJuIGxvY2FsX2JpYXY7XG5cdFx0fSxcblx0XHRnZXRsb2dpbjogZnVuY3Rpb24oKSB7XG5cdFx0XHQvL+i/memHjOWGmeiOt+WPlueZu+W9leeKtuaAgeeahGpzXG5cdFx0XHRyZXR1cm4gXCIwXCI7XG5cdFx0fSxcblx0XHRnZXRzaWduOiBmdW5jdGlvbihrZXlBcnJ5LCBkYXRhc3RyKSB7XG5cdFx0XHRrZXlBcnJ5LnNvcnQoKTtcblx0XHRcdHZhciBrZXlTdHIxID0gJyc7XG5cdFx0XHR2YXIgc2lnbiA9ICcnO1xuXHRcdFx0Zm9yKHZhciBrZXkgaW4ga2V5QXJyeSkge1xuXHRcdFx0XHRrZXlTdHIxICs9IGRhdGFzdHJbKGtleUFycnlba2V5XSldO1xuXHRcdFx0fVxuXHRcdFx0c2lnbiA9IG1kNShrZXlTdHIxKS50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0aWYobG9jYWxTdG9yYWdlLmFuZHJvaWQgPT0gXCJ0cnVlXCIgfHwgbG9jYWxTdG9yYWdlLmlvcyA9PSBcInRydWVcIikge1xuXHRcdFx0XHRyZXR1cm4gbWQ1KHRoaXMuZ2V0YWljYygpICsgc2lnbikudG9VcHBlckNhc2UoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBzaWduO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly/ojrflj5bku6PnoIHkv6Hmga9cblx0XHRnZXRjb2RlbWU6IGZ1bmN0aW9uKGpzb25vYmopIHtcblx0XHRcdHZhciBjb2RlID0ganNvbm9iai5yZXN1bHQuY29kZTtcblx0XHRcdHZhciBtZWFuID0gJyc7XG5cdFx0XHRpZihqc29ub2JqLnJlc3VsdC5tc2cpIHtcblx0XHRcdFx0bWVhbiA9IGpzb25vYmoucmVzdWx0Lm1zZztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1lYW4gPSAnJztcblx0XHRcdH1cblx0XHRcdHJldHVybiBtZWFuO1xuXHRcdH0sXG5cdFx0Ly/ojrflj5Zjb2RlXG5cdFx0Z2V0Y29kZTogZnVuY3Rpb24oanNvbm9iaikge1xuXHRcdFx0dmFyIGNvZGUgPSBqc29ub2JqLnJlc3VsdC5jb2RlO1xuXHRcdFx0cmV0dXJuIGNvZGU7XG5cdFx0fVxuXHR9XG5cdHZhciBkZWZhdWx0cyA9IHtcblx0XHRtb2RhbHR5cGU6IDEsIC8vMeS4uumXqueOsOahhiwy5Li66Ieq5a6a5LmJ5qGGXG5cdFx0YXN5bmM6IHRydWUsXG5cdFx0aXA6IE8uZ2V0dXJsaXAoKSxcblx0XHR1cmw6IG51bGwsXG5cdFx0ZGF0YTogbnVsbCxcblx0XHR2YWxpZGF0ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH0sXG5cdFx0c3VjY2VzczogZnVuY3Rpb24oKSB7fSxcblx0XHRlcnJvcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRteU1vZGFsKCkuZmxhc2hJbnRvKFwi6K+35qOA5p+l572R57ucXCIpXG5cdFx0fVxuXHR9O1xuXHR2YXIgb3B0aW9uID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdHMpO1xuXHR2YXIgZGF0YXN0cjtcblx0dmFyIGtleUFycnk7XG5cdGlmKE8uZ2V0YmltaSgpKSB7XG5cdFx0Ly8x5Li655m75b2V77yMMOS4uuacqueZu+W9lVxuXHRcdGRhdGFzdHIgPSB7XG5cdFx0XHRcImFpLmNjXCI6IE8uZ2V0YWljYygpLFxuXHRcdFx0XCJiaS5taVwiOiBPLmdldGJpbWkoKSxcblx0XHRcdFwiYmkuY3RcIjogTy5nZXRiaWN0KCksXG5cdFx0XHRcImJpLmR2XCI6IE8uZ2V0YmlkdigpLFxuXHRcdFx0XCJiaS5kbVwiOiBPLmdldGJpZG0oKSxcblx0XHRcdFwiYmkuYXZcIjogTy5nZXRiaWF2KCksXG5cdFx0XHRcImJpLm92XCI6IE8uZ2V0YmlvdigpLFxuXHRcdFx0XCJiaS5kblwiOiBPLmdldGJpZG4oKSxcblx0XHR9XG5cdFx0a2V5QXJyeSA9IFtcImFpLmNjXCIsIFwiYmkubWlcIiwgXCJiaS5jdFwiLCBcImJpLmR2XCIsIFwiYmkuZG1cIiwgXCJiaS5hdlwiLCBcImJpLm92XCIsIFwiYmkuZG5cIl07XG5cdH0gZWxzZSB7XG5cdFx0ZGF0YXN0ciA9IHtcblx0XHRcdFwiYWkuY2NcIjogTy5nZXRhaWNjKCksXG5cdFx0XHRcImJpLmN0XCI6IE8uZ2V0YmljdCgpLFxuXHRcdFx0XCJiaS5kdlwiOiBPLmdldGJpZHYoKSxcblx0XHRcdFwiYmkuZG1cIjogTy5nZXRiaWRtKCksXG5cdFx0XHRcImJpLmF2XCI6IE8uZ2V0YmlhdigpLFxuXHRcdFx0XCJiaS5vdlwiOiBPLmdldGJpb3YoKSxcblx0XHRcdFwiYmkuZG5cIjogTy5nZXRiaWRuKCksXG5cdFx0fVxuXHRcdGtleUFycnkgPSBbXCJhaS5jY1wiLCBcImJpLmN0XCIsIFwiYmkuZHZcIiwgXCJiaS5kbVwiLCBcImJpLmF2XCIsIFwiYmkub3ZcIiwgXCJiaS5kblwiXTtcblx0fVxuXHR2YXIgYmVmb3JlQ3JlYXRlID0ge1xuXHRcdGxvYWRhamF4OiBmdW5jdGlvbigpIHtcblx0XHRcdGlmKCFvcHRzKSB7XG5cdFx0XHRcdHJldHVybiBvcHRpb24uaXA7XG5cdFx0XHR9XG5cdFx0XHRpZighb3B0aW9uLnZhbGlkYXRlKCkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fTtcblx0XHRcdGZvcih2YXIgeCBpbiBvcHRpb24uZGF0YSkge1xuXHRcdFx0XHRpZihvcHRpb24uZGF0YVt4XSAmJiB0eXBlb2Yob3B0aW9uLmRhdGFbeF0pID09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0aWYob3B0aW9uLmRhdGFbeF0uc3Vic3RyaW5nKDAsIDEpID09ICcuJyB8fCBvcHRpb24uZGF0YVt4XS5zdWJzdHJpbmcoMCwgMSkgPT0gJyMnKSB7XG5cdFx0XHRcdFx0XHRkYXRhc3RyW3hdID0gJChvcHRpb24uZGF0YVt4XSkudmFsKCk7XG5cdFx0XHRcdFx0XHRrZXlBcnJ5LnB1c2goeCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGRhdGFzdHJbeF0gPSBvcHRpb24uZGF0YVt4XTtcblx0XHRcdFx0XHRcdGtleUFycnkucHVzaCh4KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZih0eXBlb2Yob3B0aW9uLmRhdGFbeF0pID09ICdudW1iZXInKSB7XG5cdFx0XHRcdFx0ZGF0YXN0clt4XSA9IG9wdGlvbi5kYXRhW3hdO1xuXHRcdFx0XHRcdGtleUFycnkucHVzaCh4KTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0XHQkLmFqYXgoe1xuXHRcdFx0XHR0eXBlOiAnUE9TVCcsXG5cdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXG5cdFx0XHRcdGFzeW5jOiBvcHRpb24uYXN5bmMsXG5cdFx0XHRcdHVybDogb3B0aW9uLmlwICsgb3B0aW9uLnVybCxcblx0XHRcdFx0ZGF0YTogZGF0YXN0cixcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdCdzaWQnOiBPLmdldHNpZCgpLFxuXHRcdFx0XHRcdCd0aW1lc3RhbXAnOiBPLmdldHRpbWVzdGFtcCgpLFxuXHRcdFx0XHRcdCdhaWNwJzogTy5nZXRhaWNwKCksXG5cdFx0XHRcdFx0J2FpLmNwJzogTy5nZXRhaWNwKCksXG5cdFx0XHRcdFx0J3NpZ24nOiBPLmdldHNpZ24oa2V5QXJyeSwgZGF0YXN0cilcblx0XHRcdFx0fSxcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocnNwKSB7XG5cdFx0XHRcdFx0aWYob3B0aW9uLm1vZGFsdHlwZSA9PSAxKSB7XG5cdFx0XHRcdFx0XHRpZihPLmdldGNvZGUocnNwKSA9PSBcIjcwMDBcIikge1xuXHRcdFx0XHRcdFx0XHRteU1vZGFsKCkuZmxhc2hJbnRvKE8uZ2V0Y29kZW1lKHJzcCkpXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvIyEvbG9naW5cIjtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYoTy5nZXRjb2RlbWUocnNwKSAhPSAnJykge1xuXHRcdFx0XHRcdFx0XHRteU1vZGFsKCkuZmxhc2hJbnRvKE8uZ2V0Y29kZW1lKHJzcCkpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8qIGVsc2UgaWYob3B0aW9uLm1vZGFsdHlwZSA9PSAyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYoTy5nZXRjb2RlKHJzcCkgPT0gXCI3MDAwXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvIyEvbG9naW5cIjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0qL1xuXHRcdFx0XHRcdG9wdGlvbi5zdWNjZXNzKHJzcCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbihlcnJpbmZvKSB7XG5cdFx0XHRcdFx0b3B0aW9uLmVycm9yKGVycmluZm8pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gYmVmb3JlQ3JlYXRlLmxvYWRhamF4KCk7XG59XG5cbi8qXG4gKuS9nOiAhTpwYW53ZW5odWEgXG4gKuaXtumXtDoyMDE2LTA3LTAxIDExOjExOjIwXG4gKiBcbiAqICAg6KOB5Ymq5Zu+54mHXG4gKiAkKGlkKS5teUltYWdlKHtcbiAqIHRoYXQ6dGhpcywgLy/lvZPliY3lm77niYflr7nosaFcbiAqIGN1dFdpZDonJywgLy/oo4HliarlsLrlr7hcbiAqIHF1YWxpdHk6MC42LCAvL+WbvueJh+i0qOmHjzB+MVxuICogbGltaXRXaWQ6NDAwLCAvL+acgOWwj+WuveW6plxuICogc3VjY2VzczpmdW5jdGlvbiAoZGF0YSkge1xuICogZG8gc29tZXRoaW5nLi4uIFxuICogKi9cbmNvbnN0IG15SW1hZ2UgPSBmdW5jdGlvbihvYmopIHtcblx0dmFyIG15SW1hZ2UgPSB7XG5cdFx0dXBsb2FkSW1hZ2U6IGZ1bmN0aW9uKG9iaikge1xuXHRcdFx0dmFyIGZpbGUgPSBvYmoudGhhdFswXS5maWxlc1swXTtcblx0XHRcdHZhciBVUkwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkw7XG5cdFx0XHR2YXIgYmxvYiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG5cdFx0XHR2YXIgYmFzZTY0O1xuXHRcdFx0dmFyIE9yaWVudGF0aW9uID0gbnVsbDtcblx0XHRcdHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdGltZy5zcmMgPSBibG9iO1xuXHRcdFx0dmFyIHJGaWx0ZXIgPSAvXihpbWFnZVxcL2pwZWd8aW1hZ2VcXC9wbmcpJC9pO1xuXHRcdFx0aWYoIXJGaWx0ZXIudGVzdChmaWxlLnR5cGUpICYmIGZpbGUudHlwZSAhPSAnJykge1xuXHRcdFx0XHRhbGVydChcIumdnuWbvueJh+agvOW8j++8gVwiLCAxMDAwKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihpbWcud2lkdGggPCBvYmoubGltaXRXaWQpIHtcblx0XHRcdFx0XHRhbGVydCgn5Zu+54mH5a695bqm5LiN5b6X5bCP5LqOJyArIG9iai5saW1pdFdpZCArICdweCcsIDEwMDApO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cblx0XHRcdFx0Ly/nlJ/miJDmr5Tkvotcblx0XHRcdFx0dmFyIHcsIHNjYWxlLCBoID0gdGhhdC5oZWlnaHQ7XG5cdFx0XHRcdGlmKG9iai5jdXRXaWQgPT0gJycpIHtcblx0XHRcdFx0XHR3ID0gdGhhdC53aWR0aDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR3ID0gb2JqLmN1dFdpZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRzY2FsZSA9IHcgLyBoO1xuXHRcdFx0XHRoID0gdyAvIHNjYWxlO1xuXG5cdFx0XHRcdC8v55Sf5oiQY2FudmFzXG5cdFx0XHRcdHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0XHRcdFx0dmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXHRcdFx0XHQkKGNhbnZhcykuYXR0cih7XG5cdFx0XHRcdFx0d2lkdGg6IHcsXG5cdFx0XHRcdFx0aGVpZ2h0OiBoXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjdHguZHJhd0ltYWdlKHRoYXQsIDAsIDAsIHcsIGgpO1xuXHRcdFx0XHRiYXNlNjQgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJywgb2JqLnF1YWxpdHkgfHwgMC44KTtcblxuXHRcdFx0XHR2YXIgcmVzdWx0ID0ge1xuXHRcdFx0XHRcdGJhc2U2NDogYmFzZTY0XG5cdFx0XHRcdH07XG5cdFx0XHRcdC8v5oiQ5Yqf5ZCO55qE5Zue6LCDXG5cdFx0XHRcdG9iai5zdWNjZXNzKHJlc3VsdCk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbXlJbWFnZTtcbn1cblxuZXhwb3J0cy5nZXRDaGVjayA9IGdldENoZWNrO1xuZXhwb3J0cy5mbXREYXRlID0gZm10RGF0ZTtcbmV4cG9ydHMuTWlsbGlzZWNvbmRUb0RhdGUgPSBNaWxsaXNlY29uZFRvRGF0ZTtcbmV4cG9ydHMubXlBamF4ID0gbXlBamF4O1xuZXhwb3J0cy5zZW5kQ29kZSA9IHNlbmRDb2RlO1xuZXhwb3J0cy5teU1vZGFsID0gbXlNb2RhbDtcbmV4cG9ydHMubXlJbWFnZSA9IG15SW1hZ2U7XG5leHBvcnRzLmdldFJhbmRvbSA9IGdldFJhbmRvbTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGlicy91dGlscy5qcyIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy8uMi4wLjAtYmV0YS40QGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9sb2FkZXIuanM/e1xcXCJvbWl0XFxcIjoxLFxcXCJyZW1vdmVcXFwiOnRydWV9IXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtN2IzNzY5Zjgmc2NvcGVkPXRydWUhcHgycmVtP3JlbVVuaXQ9NjUmcmVtUHJlY2lzaW9uPTghc2Fzcy1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NhbGVuZGFyLnZ1ZVwiKVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vY2FsZW5kYXIudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi03YjM3NjlmOCF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9jYWxlbmRhci52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiQzpcXFxcVXNlcnNcXFxccGFud2VuaHVhXFxcXERvY3VtZW50c1xcXFxIQnVpbGRlclByb2plY3RcXFxcdnVlLUNhbGVuZGFyTGlzdFZpZXdcXFxcc3JjXFxcXGNvbXBvbmVudHNcXFxcY2FsZW5kYXIudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi03YjM3NjlmOFwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03YjM3NjlmOFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03YjM3NjlmOFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGNhbGVuZGFyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvY2FsZW5kYXIudnVlXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FsZW5kYXItbGlzdFwiXG4gIH0sIFtfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FsZW5kYXJcIlxuICB9LCBfdm0uX2woKF92bS5kYXRlQXJyKSwgZnVuY3Rpb24oZGF0ZSkge1xuICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiY2FsZW5kYXItaXRlbVwiXG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjYWxlbmRhci1oZWFkZXJcIlxuICAgIH0sIFtfYygnc3BhbicsIFtfdm0uX3YoX3ZtLl9zKGRhdGUueSkgKyBcIuW5tFwiICsgX3ZtLl9zKGRhdGUubSkgKyBcIuaciFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjYWxlbmRhci1ib2R5XCJcbiAgICB9LCBbX2MoJ3VsJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZGF5c1wiXG4gICAgfSwgX3ZtLl9sKChkYXRlLmRheXMpLCBmdW5jdGlvbihkYXkpIHtcbiAgICAgIHJldHVybiBfYygnbGknLCBbKGRheS5nZXRNb250aCgpICsgMSAhPSBkYXRlLm0pID8gX2MoJ2RpdicsIFtfYygnc3BhbicpXSkgOiAoX3ZtLmlzVG9kYXkoZGF5KSkgPyBfYygnZGl2Jywge1xuICAgICAgICBjbGFzczoge1xuICAgICAgICAgIHRvZGF5OiBfdm0uaXNDdXJyZW50RGF5KGRheSlcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgX3ZtLmNsaWNrQWN0aW9uKGRheSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIFtfYygnc3BhbicsIFtfdm0uX3YoX3ZtLl9zKCfku4rlpKknKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2knLCBbX3ZtLl92KF92bS5fcyhfdm0uZ2V0TnVtKGRheSkpKV0pXSkgOiBfYygnZGl2Jywge1xuICAgICAgICBjbGFzczoge1xuICAgICAgICAgIHRvZGF5OiBfdm0uaXNDdXJyZW50RGF5KGRheSlcbiAgICAgICAgfVxuICAgICAgfSwgWyhkYXkgPCBuZXcgRGF0ZSgpKSA/IFtfYygnc3BhbicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGlzYWJsZWRcIlxuICAgICAgfSwgW192bS5fdihfdm0uX3MoZGF5LmdldERhdGUoKSkpXSldIDogW19jKCdzcGFuJywge1xuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICBfdm0uY2xpY2tBY3Rpb24oZGF5KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgW192bS5fdihfdm0uX3MoZGF5LmdldERhdGUoKSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdpJywge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJudW1zXCJcbiAgICAgIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5nZXROdW0oZGF5KSkpXSldXSwgMildKVxuICAgIH0pKV0pXSlcbiAgfSkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwid2Vla1wiXG4gIH0sIFtfYygnbGknLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiY29sb3JcIjogXCIjQ0NDQ0NDXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCLml6VcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xpJywgW192bS5fdihcIuS4gFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCBbX3ZtLl92KFwi5LqMXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdsaScsIFtfdm0uX3YoXCLkuIlcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xpJywgW192bS5fdihcIuWbm1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCBbX3ZtLl92KFwi5LqUXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdsaScsIFtfdm0uX3YoXCLlha1cIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtN2IzNzY5ZjhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjEwLjAuMkB2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtN2IzNzY5ZjghLi9+Ly4xMC4wLjJAdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvY2FsZW5kYXIudnVlXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuMC4wLWJldGEuNEBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vbG9hZGVyLmpzP3tcIm9taXRcIjoxLFwicmVtb3ZlXCI6dHJ1ZX0hLi9+Ly4xLjAuMEB2dWUtc3R5bGUtbG9hZGVyIS4vfi8uMC4yNi4xQGNzcy1sb2FkZXIhLi9+Ly4xMC4wLjJAdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdiMzc2OWY4JnNjb3BlZD10cnVlIS4vfi8uMC4xLjdAcHgycmVtLWxvYWRlcj9yZW1Vbml0PTY1JnJlbVByZWNpc2lvbj04IS4vfi8uNC4xLjFAc2Fzcy1sb2FkZXIhLi9+Ly4xMC4wLjJAdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL2NhbGVuZGFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImNhbGVuZGFyLWxpc3RcIj5cblx0XHQ8dWwgY2xhc3M9XCJ3ZWVrXCI+XG5cdFx0XHQ8bGkgc3R5bGU9XCJjb2xvcjogI0NDQ0NDQztcIj7ml6U8L2xpPlxuXHRcdFx0PGxpPuS4gDwvbGk+XG5cdFx0XHQ8bGk+5LqMPC9saT5cblx0XHRcdDxsaT7kuIk8L2xpPlxuXHRcdFx0PGxpPuWbmzwvbGk+XG5cdFx0XHQ8bGk+5LqUPC9saT5cblx0XHRcdDxsaT7lha08L2xpPlxuXHRcdDwvdWw+XG5cdFx0PGRpdiBjbGFzcz1cImNhbGVuZGFyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FsZW5kYXItaXRlbVwiIHYtZm9yPVwiZGF0ZSBpbiBkYXRlQXJyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYWxlbmRhci1oZWFkZXJcIj48c3Bhbj57e2RhdGUueX195bm0e3tkYXRlLm19feaciDwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNhbGVuZGFyLWJvZHlcIj5cblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJkYXlzXCI+XG5cdFx0XHRcdFx0XHQ8bGkgdi1mb3I9XCJkYXkgaW4gZGF0ZS5kYXlzXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgdi1pZj1cImRheS5nZXRNb250aCgpKzEgIT0gZGF0ZS5tXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiB2LWVsc2UtaWY9XCJpc1RvZGF5KGRheSlcIiBAY2xpY2s9XCJjbGlja0FjdGlvbihkYXkpXCIgOmNsYXNzPVwie3RvZGF5OiBpc0N1cnJlbnREYXkoZGF5KX1cIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57eyAn5LuK5aSpJyB9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8aT57e2dldE51bShkYXkpfX08L2k+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IHYtZWxzZSA6Y2xhc3M9XCJ7dG9kYXk6IGlzQ3VycmVudERheShkYXkpfVwiPlxuXHRcdFx0XHRcdFx0XHRcdDx0ZW1wbGF0ZSB2LWlmPVwiZGF5PG5ldyBEYXRlKClcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZGlzYWJsZWRcIj57eyBkYXkuZ2V0RGF0ZSgpIH19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHRcdFx0PHRlbXBsYXRlIHYtZWxzZT5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIEBjbGljaz1cImNsaWNrQWN0aW9uKGRheSlcIj57eyBkYXkuZ2V0RGF0ZSgpIH19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJudW1zXCI+e3tnZXROdW0oZGF5KX19PC9pPlxuXHRcdFx0XHRcdFx0XHRcdDwvdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRjdXJyZW50RGF0ZToge1xuXHRcdFx0XHRcdFx0Y3VycmVudERheTogbnVsbCxcblx0XHRcdFx0XHRcdGN1cnJlbnRNb250aDogbnVsbCxcblx0XHRcdFx0XHRcdGN1cnJlbnRZZWFyOiBudWxsLFxuXHRcdFx0XHRcdFx0Y3VycmVudFdlZWs6IG51bGxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGRhdGVBcnI6IFtdXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRwcm9wczogWydhcm91ZCcsICdjbGlja0FjdGlvbicsICdudW1zJywgJ3NlbGVjdERhdGUnXSxcblx0XHRcdGNvbXB1dGVkOiB7XG5cblx0XHRcdH0sXG5cdFx0XHRjcmVhdGVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0Zm9yKHZhciB4ID0gMDsgeCA8IHRoaXMuYXJvdWQ7IHgrKykge1xuXHRcdFx0XHRcdHZhciBkYXlzID0gdGhpcy5jYWxlbmRhckluaXQodGhpcy5jdXJyZW50RGF0ZS5jdXJyZW50WWVhciwgdGhpcy5jdXJyZW50RGF0ZS5jdXJyZW50TW9udGgpO1xuXHRcdFx0XHRcdHZhciB0aW1lT2JqID0ge1xuXHRcdFx0XHRcdFx0eTogdGhpcy5jdXJyZW50RGF0ZS5jdXJyZW50WWVhcixcblx0XHRcdFx0XHRcdG06IHRoaXMuY3VycmVudERhdGUuY3VycmVudE1vbnRoLFxuXHRcdFx0XHRcdFx0ZGF5czogZGF5c1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0dGhpcy5kYXRlQXJyLnB1c2godGltZU9iaik7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRtZXRob2RzOiB7XG5cdFx0XHRcdGlzQ3VycmVudERheTogZnVuY3Rpb24oZGF5KSB7XG5cdFx0XHRcdFx0bGV0IGQgPSB0aGlzLnNlbGVjdERhdGU7XG5cdFx0XHRcdFx0aWYoZCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZGF5LmdldEZ1bGxZZWFyKCkgPT0gZC5nZXRGdWxsWWVhcigpICYmIGRheS5nZXRNb250aCgpID09IGQuZ2V0TW9udGgoKSAmJiBkYXkuZ2V0RGF0ZSgpID09IGQuZ2V0RGF0ZSgpID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZGF5LmdldEZ1bGxZZWFyKCkgPT0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpICYmIGRheS5nZXRNb250aCgpID09IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSAmJiBkYXkuZ2V0RGF0ZSgpID09IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0Z2V0TnVtOiBmdW5jdGlvbihkYXRlKSB7XG5cdFx0XHRcdFx0dmFyIGxhc3REYXkgPSB0aGlzLm51bXMubGVuZ3RoICYmIHRoaXMubnVtc1t0aGlzLm51bXMubGVuZ3RoIC0gMV0ucmVUcmF2ZWxEYXRlO1xuXHRcdFx0XHRcdHZhciBkYXkgPSB0aGlzLmZvcm1hdERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCBkYXRlLmdldERhdGUoKSk7XG5cdFx0XHRcdFx0aWYoZGF5ID4gbGFzdERheSkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coMSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvcih2YXIgeCBpbiB0aGlzLm51bXMpIHtcblx0XHRcdFx0XHRcdGlmKHRoaXMubnVtc1t4XS5yZVRyYXZlbERhdGUgPT0gZGF5KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAn5YmpJyArIHRoaXMubnVtc1t4XS5hdmFpbGFibGVBbW91bnQgKyAn5Lq6Jztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGlzVG9kYXk6IGZ1bmN0aW9uKGRheSkge1xuXHRcdFx0XHRcdHJldHVybiBkYXkuZ2V0RnVsbFllYXIoKSA9PSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgJiYgZGF5LmdldE1vbnRoKCkgPT0gbmV3IERhdGUoKS5nZXRNb250aCgpICYmIGRheS5nZXREYXRlKCkgPT0gbmV3IERhdGUoKS5nZXREYXRlKCkgPyB0cnVlIDogZmFsc2U7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGdldERheTogZnVuY3Rpb24oZGF0ZSkge1xuXHRcdFx0XHRcdHRoaXMuY3VycmVudERhdGUuY3VycmVudERheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuXHRcdFx0XHRcdHRoaXMuY3VycmVudERhdGUuY3VycmVudFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50RGF0ZS5jdXJyZW50TW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuXHRcdFx0XHRcdHRoaXMuY3VycmVudERhdGUuY3VycmVudFdlZWsgPSBkYXRlLmdldERheSgpICsgMTtcblx0XHRcdFx0XHRpZih0aGlzLmN1cnJlbnREYXRlLmN1cnJlbnRXZWVrID09IDApIHtcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudERhdGUuY3VycmVudFdlZWsgPSA3O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0Zm9ybWF0RGF0ZTogZnVuY3Rpb24oeWVhciwgbW9udGgsIGRheSkge1xuXHRcdFx0XHRcdHZhciB5ID0geWVhcjtcblx0XHRcdFx0XHR2YXIgbSA9IG1vbnRoO1xuXHRcdFx0XHRcdGlmKG0gPCAxMCkgbSA9IFwiMFwiICsgbTtcblx0XHRcdFx0XHR2YXIgZCA9IGRheTtcblx0XHRcdFx0XHRpZihkIDwgMTApIGQgPSBcIjBcIiArIGQ7XG5cdFx0XHRcdFx0cmV0dXJuIHkgKyBcIi1cIiArIG0gKyBcIi1cIiArIGRcblx0XHRcdFx0fSxcblx0XHRcdFx0Y2FsZW5kYXJJbml0OiBmdW5jdGlvbih5ZWFyLCBtb250aCkge1xuXHRcdFx0XHRcdHZhciBkYXRlLCBkO1xuXHRcdFx0XHRcdHZhciBkYXlzID0gW107XG5cdFx0XHRcdFx0aWYoeWVhciA9PSBudWxsIHx8IG1vbnRoID09IG51bGwpIHtcblx0XHRcdFx0XHRcdHZhciBfZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcdFx0XHRkID0gbmV3IERhdGUoX2RhdGUuZ2V0RnVsbFllYXIoKSwgX2RhdGUuZ2V0TW9udGgoKSAtIDEsIDEpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRkID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZC5zZXREYXRlKDQyKTtcblx0XHRcdFx0XHRkYXRlID0gbmV3IERhdGUoZC5nZXRGdWxsWWVhcigpLCBkLmdldE1vbnRoKCksIDEpO1xuXHRcdFx0XHRcdHRoaXMuZ2V0RGF5KGRhdGUpO1xuXHRcdFx0XHRcdGZvcih2YXIgaSA9IHRoaXMuY3VycmVudERhdGUuY3VycmVudFdlZWsgLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0XHRcdFx0dmFyIGQgPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnREYXRlLmN1cnJlbnRZZWFyLCB0aGlzLmN1cnJlbnREYXRlLmN1cnJlbnRNb250aCAtIDEsIHRoaXMuY3VycmVudERhdGUuY3VycmVudERheSk7XG5cdFx0XHRcdFx0XHRkLnNldERhdGUoZC5nZXREYXRlKCkgLSBpKTtcblx0XHRcdFx0XHRcdGRheXMucHVzaChkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9yKHZhciBpID0gMTsgaSA8PSA0MiAtIHRoaXMuY3VycmVudERhdGUuY3VycmVudFdlZWs7IGkrKykge1xuXHRcdFx0XHRcdFx0dmFyIGQgPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnREYXRlLmN1cnJlbnRZZWFyLCB0aGlzLmN1cnJlbnREYXRlLmN1cnJlbnRNb250aCAtIDEsIHRoaXMuY3VycmVudERhdGUuY3VycmVudERheSk7XG5cdFx0XHRcdFx0XHRkLnNldERhdGUoZC5nZXREYXRlKCkgKyBpKTtcblx0XHRcdFx0XHRcdGRheXMucHVzaChkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGRheXM7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdC8qc2VsZWN0OiBmdW5jdGlvbihkYXRlKSB7XG5cdFx0XHRcdFx0YWxlcnQodGhpcy5mb3JtYXREYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgZGF0ZS5nZXREYXRlKCkpKTtcblx0XHRcdFx0fSwqL1xuXHRcdFx0fSxcblxuXHR9XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic2Fzc1wiIHNjb3BlZD5cblx0LnRvZGF5IHtcblx0XHQvKnB4Ki9cblx0XHRoZWlnaHQ6IDg2cHg7XG5cdFx0Y29sb3I6ICNGRkZGRkY7XG5cdFx0YmFja2dyb3VuZDogIzM3QjdGQTtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1xuXHR9XG5cdFxuXHQuY2FsZW5kYXItbGlzdCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0fVxuXHRcblx0LmNhbGVuZGFyIHtcblx0XHRwYWRkaW5nLXRvcDogMC4yN3JlbTtcblx0fVxuXHRcblx0LndlZWsge1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHR6LWluZGV4OiA1MDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRiYWNrZ3JvdW5kOiAjRjlGOEY4O1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXHRcdGxpIHtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdGhlaWdodDogNDBweDtcblx0XHRcdGxpbmUtaGVpZ2h0OiA0MHB4O1xuXHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0XHRcdGZvbnQtc2l6ZTogMjUuN3B4O1xuXHRcdFx0LypweCovXG5cdFx0XHRmb250LXdlaWdodDogbWVkaXVtO1xuXHRcdH1cblx0fVxuXHRcblx0LmNhbGVuZGFyLWl0ZW0ge1xuXHRcdCY6bnRoLW9mLXR5cGUoMSkge1xuXHRcdFx0bWFyZ2luLXRvcDogNDBweDtcblx0XHR9XG5cdFx0cGFkZGluZy1ib3R0b206IDAuMXJlbTtcblx0XHQuY2FsZW5kYXItaGVhZGVyIHtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdGZvbnQtc2l6ZTogMjhweDtcblx0XHRcdC8qcHgqL1xuXHRcdFx0Y29sb3I6ICMzMzMzMzM7XG5cdFx0XHRmb250LXdlaWdodDogbWVkaXVtO1xuXHRcdFx0cGFkZGluZzogMjBweCAwIDEwcHggMDtcblx0XHR9XG5cdFx0LmNhbGVuZGFyLWJvZHkge1xuXHRcdFx0dWwge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXHRcdFx0XHRsaSB7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdGhlaWdodDogODZweDtcblx0XHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogbWVkaXVtO1xuXHRcdFx0XHRcdGNvbG9yOiAjNzk3OTc5O1xuXHRcdFx0XHRcdHdpZHRoOiAxNC4yOCU7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0ZGl2IHtcblx0XHRcdFx0XHRcdC8qcHgqL1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA4NnB4O1xuXHRcdFx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjUuN3B4O1xuXHRcdFx0XHRcdFx0XHQvKnB4Ki9cblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0NnB4O1xuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMzkuNjNweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGkge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0XHRcdC8qcHgqL1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjVweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5udW1zIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICMzN0I3RkE7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHNwYW5bY2xhc3M9ZGlzYWJsZWRdIHtcblx0XHRcdFx0XHRjb2xvcjogI0NDQ0NDQztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2FsZW5kYXIudnVlP2I5MzRhNzI4IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ252LWhlYWQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGFnZS1uYW1lXCI6IF92bS5oZWFkVGl0LnRhYjEsXG4gICAgICBcImJhY2stdHlwZVwiOiBfdm0uaGVhZFRpdC5iYWNrLFxuICAgICAgXCJjbGljay1idG5cIjogX3ZtLmhlYWRUaXQucmlnaHQsXG4gICAgICBcImNsaWNrLWFjdGlvblwiOiBfdm0uY2xpY2tSaWdodFxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN5X21haW5cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcIndyYXBwZXJcIlxuICAgIH1cbiAgfSwgW19jKCd1bCcsIFtfYygnbGknLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLm9wZW5DYWxlbmRhclxuICAgIH1cbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIml0ZW1cIlxuICB9LCBbX3ZtLl92KFwi5Ye65Y+R5pel5pyfXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJlc3VsdFwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5nZXRDdXJyZW50RGF0ZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNlbGVjdFwiXG4gIH0sIFtfdm0uX3YoXCLor7fpgInmi6k+XCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhZ1wiOiBcImxpXCIsXG4gICAgICBcInRvXCI6IFwiL3RyYXZlbEluZm9ybWF0aW9uXCJcbiAgICB9XG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpdGVtXCJcbiAgfSwgW192bS5fdihcIuWHuuihjOS6uuaVsFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyZXN1bHRcIixcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ0ZXh0Q29udGVudFwiOiBfdm0uX3MoX3ZtLmdldFBlcG9sZU51bSlcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzZWxlY3RcIlxuICB9LCBbX3ZtLl92KFwi6K+36YCJ5oupPlwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YWdcIjogXCJsaVwiLFxuICAgICAgXCJ0b1wiOiBcIi90cmF2ZWxDYXJkXCJcbiAgICB9XG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpdGVtXCJcbiAgfSwgW192bS5fdihcIuaXhea4uOWNoeWIuFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyZXN1bHRcIixcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ0ZXh0Q29udGVudFwiOiBfdm0uX3MoX3ZtLmdldENhcmROdW0pXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2VsZWN0XCJcbiAgfSwgW192bS5fdihcIuivt+mAieaLqT5cIildKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpcHNcIlxuICB9LCBbX3ZtLl92KFwi5peF6KGM5Y2h5LiN6Laz77yM6K+357uR5a6a5pu05aSa5peF6KGM5Y2hXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic3VibWl0UGxhblwiXG4gIH0sIFtfdm0uX3YoXCLmj5DkuqTml4XooYzorqHliJJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlwczJcIlxuICB9LCBbX3ZtLl92KFwi6K+05piO77ya5pyA5aSa5Y+v57uR5a6aMTDlvKDlt7Tljpjlspt2aXDmnYPnm4rljaHvvIzotoXov4cxMOW8oOivt+iBlOezu+WuouacjTQwMDAtMzYwLTY2Ne+8jOavj+asoeWHuuihjOWwhua2iOiAl+aJgOe7keWumueahOWFqOmDqHZpcOadg+ebiuWNoeOAguWHuuihjOaXheWuouS/oeaBr+aPkOS6pOWQju+8jOibi+Wjs+aXheihjOS8muS4juaCqOeUteivneiBlOezu+ehruiupOWHuuihjOS6uuasoeS4juaXtumXtOOAguaPkOS6pOWujOWWhOaKpOeFp+OAgeacuuelqOS/oeaBr+WQju+8jOWNs+WPr+aMieiuoeWIkuWHuuihjOOAglwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FsZW5kYXJcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgICBcInotaW5kZXhcIjogXCI5OTlcIixcbiAgICAgIFwiYm90dG9tXCI6IFwiMHB4XCJcbiAgICB9LFxuICAgIHN0eWxlOiAoe1xuICAgICAgZGlzcGxheTogX3ZtLmNhbGVuZGFyLm9wZW4gPyAnYmxvY2snIDogJ25vbmUnXG4gICAgfSlcbiAgfSwgW19jKCdudi1oZWFkJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBhZ2UtbmFtZVwiOiAn6YCJ5oup5Ye66KGM5pel5pyfJyxcbiAgICAgIFwiYmFjay10eXBlXCI6ICdvaycsXG4gICAgICBcImJhY2stYWN0aW9uXCI6IF92bS5jbG9zZUNhbGVuZGFyXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYWxlbmRhV3JhcFwiXG4gIH0sIFtfYygnY2FsZW5kYXItZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYXJvdWRcIjogX3ZtLmNhbGVuZGFyLmFyb3VkLFxuICAgICAgXCJjbGljay1hY3Rpb25cIjogX3ZtLnNldEN1cnJlbnREYXRlLFxuICAgICAgXCJudW1zXCI6IF92bS5jYWxlbmRhci5udW1zLFxuICAgICAgXCJzZWxlY3QtZGF0ZVwiOiBfdm0uY3VycmVudERhdGVcbiAgICB9XG4gIH0pXSwgMSldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTc0NTU1OTVhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4xMC4wLjJAdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTc0NTU1OTVhIS4vfi8uMTAuMC4yQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy92aWV3cy9wbGFuLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuMC4wLWJldGEuNEBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vbG9hZGVyLmpzP3tcIm9taXRcIjoxLFwicmVtb3ZlXCI6dHJ1ZX0hLi9+Ly4xLjAuMEB2dWUtc3R5bGUtbG9hZGVyIS4vfi8uMC4yNi4xQGNzcy1sb2FkZXIhLi9+Ly4xMC4wLjJAdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTc0NTU1OTVhJnNjb3BlZD10cnVlIS4vfi8uMC4xLjdAcHgycmVtLWxvYWRlcj9yZW1Vbml0PTY1JnJlbVByZWNpc2lvbj04IS4vfi8uNC4xLjFAc2Fzcy1sb2FkZXIhLi9+Ly4xMC4wLjJAdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy92aWV3cy9wbGFuLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDwhLS0g5YWo5bGAaGVhZGVyIC0tPlxuXHRcdDxudi1oZWFkIDpwYWdlLW5hbWU9XCJoZWFkVGl0LnRhYjFcIiA6YmFjay10eXBlPVwiaGVhZFRpdC5iYWNrXCIgOmNsaWNrLWJ0bj1cImhlYWRUaXQucmlnaHRcIiA6Y2xpY2stYWN0aW9uPVwiY2xpY2tSaWdodFwiPjwvbnYtaGVhZD5cblx0XHQ8c2VjdGlvbiBpZD1cIndyYXBwZXJcIiBjbGFzcz1cInN5X21haW5cIj5cblx0XHRcdDx1bD5cblx0XHRcdFx0PGxpIEBjbGljaz1cIm9wZW5DYWxlbmRhclwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiaXRlbVwiPuWHuuWPkeaXpeacnzwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInJlc3VsdFwiPnt7Z2V0Q3VycmVudERhdGV9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInNlbGVjdFwiPuivt+mAieaLqT48L3NwYW4+XG5cblx0XHRcdFx0PC9saT5cblx0XHRcdFx0PHJvdXRlci1saW5rIHRhZz1cImxpXCIgdG89XCIvdHJhdmVsSW5mb3JtYXRpb25cIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIml0ZW1cIj7lh7rooYzkurrmlbA8L3NwYW4+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJyZXN1bHRcIiB2LXRleHQ9XCJnZXRQZXBvbGVOdW1cIj48L3NwYW4+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJzZWxlY3RcIj7or7fpgInmi6k+PC9zcGFuPlxuXHRcdFx0XHQ8L3JvdXRlci1saW5rPlxuXHRcdFx0XHQ8cm91dGVyLWxpbmsgdGFnPVwibGlcIiB0bz1cIi90cmF2ZWxDYXJkXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJpdGVtXCI+5peF5ri45Y2h5Yi4PC9zcGFuPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwicmVzdWx0XCIgdi10ZXh0PVwiZ2V0Q2FyZE51bVwiPjwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInNlbGVjdFwiPuivt+mAieaLqT48L3NwYW4+XG5cdFx0XHRcdDwvcm91dGVyLWxpbms+XG5cdFx0XHQ8L3VsPlxuXHRcdFx0PHAgY2xhc3M9XCJ0aXBzXCI+5peF6KGM5Y2h5LiN6Laz77yM6K+357uR5a6a5pu05aSa5peF6KGM5Y2hPC9wPlxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cInN1Ym1pdFBsYW5cIj7mj5DkuqTml4XooYzorqHliJI8L2J1dHRvbj5cblx0XHRcdDxwIGNsYXNzPVwidGlwczJcIj7or7TmmI7vvJrmnIDlpJrlj6/nu5HlrpoxMOW8oOW3tOWOmOWym3ZpcOadg+ebiuWNoe+8jOi2hei/hzEw5byg6K+36IGU57O75a6i5pyNNDAwMC0zNjAtNjY177yM5q+P5qyh5Ye66KGM5bCG5raI6ICX5omA57uR5a6a55qE5YWo6YOodmlw5p2D55uK5Y2h44CC5Ye66KGM5peF5a6i5L+h5oGv5o+Q5Lqk5ZCO77yM6JuL5aOz5peF6KGM5Lya5LiO5oKo55S16K+d6IGU57O756Gu6K6k5Ye66KGM5Lq65qyh5LiO5pe26Ze044CC5o+Q5Lqk5a6M5ZaE5oqk54Wn44CB5py656Wo5L+h5oGv5ZCO77yM5Y2z5Y+v5oyJ6K6h5YiS5Ye66KGM44CCPC9wPlxuXHRcdDwvc2VjdGlvbj5cblx0XHQ8ZGl2IGNsYXNzPVwiY2FsZW5kYXJcIiA6c3R5bGU9XCJ7ZGlzcGxheTogY2FsZW5kYXIub3Blbj8nYmxvY2snOidub25lJ31cIiBzdHlsZT1cInBvc2l0aW9uOiBmaXhlZDsgei1pbmRleDogOTk5OyBib3R0b206IDBweDtcIj5cblx0XHRcdDxudi1oZWFkIDpwYWdlLW5hbWU9XCIn6YCJ5oup5Ye66KGM5pel5pyfJ1wiIDpiYWNrLXR5cGU9XCInb2snXCIgOmJhY2stYWN0aW9uPVwiY2xvc2VDYWxlbmRhclwiPjwvbnYtaGVhZD5cblx0XHRcdDxkaXYgY2xhc3M9XCJjYWxlbmRhV3JhcFwiPlxuXHRcdFx0XHQ8Y2FsZW5kYXItZWwgOmFyb3VkPVwiY2FsZW5kYXIuYXJvdWRcIiA6Y2xpY2stYWN0aW9uPVwic2V0Q3VycmVudERhdGVcIiA6bnVtcz1cImNhbGVuZGFyLm51bXNcIiA6c2VsZWN0LWRhdGU9XCJjdXJyZW50RGF0ZVwiPjwvY2FsZW5kYXItZWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblx0dmFyIF8kID0gcmVxdWlyZSgnLi4vbGlicy91dGlscycpO1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRoZWFkVGl0OiB7XG5cdFx0XHRcdFx0XHR0YWIxOiAn6YCJ5oup5Ye66KGM5pel5pyfJyxcblx0XHRcdFx0XHRcdGJhY2s6ICdvaycsXG5cdFx0XHRcdFx0XHRyaWdodDogJ+WOhuWPsuiuouWNlSdcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNhbGVuZGFyOiB7XG5cdFx0XHRcdFx0XHRvcGVuOiBmYWxzZSxcblx0XHRcdFx0XHRcdGFyb3VkOiAxMixcblx0XHRcdFx0XHRcdG51bXM6IFtdXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjdXJyZW50RGF0ZTogbnVsbCxcblx0XHRcdFx0XHRwZXBvbGVOdW06MCxcblx0XHRcdFx0XHRjYXJkTnVtOjFcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRcdGdldENhcmROdW06IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNhcmROdW0hPW51bGwmJnRoaXMuY2FyZE51bSsn5bygJztcblx0XHRcdFx0fSxcblx0XHRcdFx0Z2V0UGVwb2xlTnVtOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wZXBvbGVOdW0hPW51bGwmJnRoaXMucGVwb2xlTnVtKyfkuronO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRnZXRDdXJyZW50RGF0ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bGV0IGQgPSB0aGlzLmN1cnJlbnREYXRlO1xuXHRcdFx0XHRcdGlmKGQpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdERhdGUoZC5nZXRGdWxsWWVhcigpLCBkLmdldE1vbnRoKCkgKyAxLCBkLmdldERhdGUoKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGxldCBkID0gbmV3IERhdGUoKTtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdERhdGUoZC5nZXRGdWxsWWVhcigpLCBkLmdldE1vbnRoKCkgKyAxLCBkLmdldERhdGUoKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y3JlYXRlZDogZnVuY3Rpb24oKSB7fSxcblx0XHRcdG1ldGhvZHM6IHtcblx0XHRcdFx0Y2xpY2tSaWdodDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dGhpcy4kcm91dGVyLnB1c2goe1xuXHRcdFx0XHRcdFx0cGF0aDogJ2hpc3RvcnlvcmRlcidcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvcGVuQ2FsZW5kYXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHRoaXMuZ2V0Q2FsZW5kYXJBbmRNdW0oKTtcblx0XHRcdFx0XHR0aGlzLmNhbGVuZGFyLm9wZW4gPSB0cnVlO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRjbG9zZUNhbGVuZGFyOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0aGlzLmNhbGVuZGFyLm9wZW4gPSBmYWxzZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0Zm9ybWF0RGF0ZTogZnVuY3Rpb24oeWVhciwgbW9udGgsIGRheSkge1xuXHRcdFx0XHRcdHZhciB5ID0geWVhcjtcblx0XHRcdFx0XHR2YXIgbSA9IG1vbnRoO1xuXHRcdFx0XHRcdGlmKG0gPCAxMCkgbSA9IFwiMFwiICsgbTtcblx0XHRcdFx0XHR2YXIgZCA9IGRheTtcblx0XHRcdFx0XHRpZihkIDwgMTApIGQgPSBcIjBcIiArIGQ7XG5cdFx0XHRcdFx0cmV0dXJuIHkgKyBcIi1cIiArIG0gKyBcIi1cIiArIGRcblx0XHRcdFx0fSxcblx0XHRcdFx0c2V0Q3VycmVudERhdGU6IGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnREYXRlID0gZDtcblx0XHRcdFx0XHR0aGlzLmNsb3NlQ2FsZW5kYXIoKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0Z2V0Q2FsZW5kYXJBbmRNdW06IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGxldCBtZSA9IHRoaXM7XG5cdFx0XHRcdFx0XyQubXlBamF4KHtcblx0XHRcdFx0XHRcdG1vZGFsdHlwZTogMiwgLy8x5Li66Zeq546w5qGGLDLkuLroh6rlrprkuYnmoYZcblx0XHRcdFx0XHRcdHVybDogJ2FwaS90cmF2ZWwvdHJhdmVsY2FyZC9zdG9ja0NhcmRRdWVyeS5qc29uJyxcblx0XHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdFx0dHJhdmVsQ29kZTogMjIyLFxuXHRcdFx0XHRcdFx0XHRtb250aDogbWUuYXJvdWQsIC8v5pyI5Lu9KOW9k+WJjeaciOS7vee0r+WKoO+8jOWmguaenOW9k+WJjeaciDIwMTYuMTIsbW9udGjkuLoxLOafpeivouWHujIwMTYuMTLlkowyMDE3LjEpXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oc3RyKSB7XG5cdFx0XHRcdFx0XHRcdGlmKHN0ci5yZXN1bHQuY29kZSA9PSBcIjEwMDBcIikge1xuXHRcdFx0XHRcdFx0XHRcdG1lLm51bXMgPSBzdHIuZGF0YTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHt9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHRcdFwibnZIZWFkXCI6IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvaGVhZGVyLnZ1ZScpLFxuXHRcdFx0XHRcImNhbGVuZGFyRWxcIjogcmVxdWlyZSgnLi4vY29tcG9uZW50cy9jYWxlbmRhci52dWUnKSxcblx0XHRcdH0sXG5cdH1cbjwvc2NyaXB0PlxuPHN0eWxlIGxhbmc9XCJzYXNzXCIgc2NvcGVkPlxuXHQuY2FsZW5kYXIge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcblx0XHRkaXNwbGF5OiBib3g7XG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdFx0ZGlzcGxheTogLW1vei1ib3g7XG5cdFx0Ym94LW9yaWVudDogdmVydGljYWw7XG5cdFx0LW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuXHRcdC5jYWxlbmRhV3JhcCB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdG92ZXJmbG93LXg6IGhpZGRlbjtcblx0XHRcdG92ZXJmbG93LXk6IHNjcm9sbDtcblx0XHRcdGJveC1mbGV4OiAxO1xuXHRcdFx0LXdlYmtpdC1ib3gtZmxleDogMTtcblx0XHRcdC1tb3otYm94LWZsZXg6IDE7XG5cdFx0fVxuXHR9XG5cdFxuXHRzZWN0aW9uIHtcblx0XHRiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cdFx0dWwge1xuXHRcdFx0cGFkZGluZzogMCAyMHB4O1xuXHRcdFx0bGkge1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdGhlaWdodDogOTBweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDkwcHg7XG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREREREREO1xuXHRcdFx0XHQvKm5vKi9cblx0XHRcdFx0Lml0ZW0ge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjhweDtcblx0XHRcdFx0XHQvKnB4Ki9cblx0XHRcdFx0XHRjb2xvcjogIzk5OTk5OTtcblx0XHRcdFx0fVxuXHRcdFx0XHQucmVzdWx0IHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNTdweDtcblx0XHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdFx0LypweCovXG5cdFx0XHRcdFx0Y29sb3I6ICMzMzMzMzM7XG5cdFx0XHRcdH1cblx0XHRcdFx0LnNlbGVjdCB7XG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdHJpZ2h0OiAwcHg7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdFx0XHRcdC8qcHgqL1xuXHRcdFx0XHRcdGNvbG9yOiAjQzRDNEM0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC50aXBzIHtcblx0XHRcdHBhZGRpbmc6IDIwcHg7XG5cdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHQvKnB4Ki9cblx0XHRcdGNvbG9yOiAjOTk5OTk5O1xuXHRcdH1cblx0XHQuc3VibWl0UGxhbiB7XG5cdFx0XHRtYXJnaW46IDc1cHggNjBweCAyMHB4IDYwcHg7XG5cdFx0XHR3aWR0aDogNTIwcHg7XG5cdFx0XHRoZWlnaHQ6IDg4cHg7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjMzdCN0ZBO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTAwcHg7XG5cdFx0XHRmb250LXNpemU6IDMycHg7XG5cdFx0XHQvKnB4Ki9cblx0XHRcdGNvbG9yOiAjRkZGRkZGO1xuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDBweDtcblx0XHR9XG5cdFx0LnRpcHMyIHtcblx0XHRcdHBhZGRpbmc6IDAgNjBweDtcblx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdC8qcHgqL1xuXHRcdFx0Y29sb3I6ICM5OTk5OTk7XG5cdFx0XHRsZXR0ZXItc3BhY2luZzogMHB4O1xuXHRcdH1cblx0fVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcGxhbi52dWU/N2M5ZjRkNzAiXSwic291cmNlUm9vdCI6IiJ9