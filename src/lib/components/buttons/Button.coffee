goog.provide 'spark.components.Button'

goog.require 'spark.core.View'


###*
  Button component of Spark Framework.
###
class spark.components.Button extends spark.core.View

  ###*
    @constructor
    @param   {Object=} options Class options.
    @param   {*=} data Class data
    @extends {spark.core.View}
  ###
  constructor: (options = {}, data) ->

    options.tagName          = 'button'
    options.cssClass         = "#{spark.utils.concatString 'button', options.cssClass}"
    options.title          or= null
    options.callback       or= null
    options.iconClass      or= null
    options.eventHandlers  or= {}

    {callback} = options
    if typeof callback is 'function'
      options.eventHandlers.click = callback

    icon  = ''
    title = ''

    if options.iconClass
      icon  = "<span class='icon #{options.iconClass}'></span>"

    if options.title
      title = "<span>#{options.title}</span>"

    options.template = "#{icon}#{title}"

    super options, data