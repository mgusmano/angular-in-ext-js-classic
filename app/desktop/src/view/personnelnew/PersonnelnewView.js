Ext.define('AngularInExtJsClassic.Angular',{
  extend: 'Ext.Widget',
  xtype: 'angular',

  constructor: function(config) {
    var me = this;
    me.callParent([config]);
    me.el.dom.appendChild(document.createElement(me.name + '-root'))
    Ext.angular.platformBrowserDynamic().bootstrapModule(Ext.angular[me.name])
    me.el.on('resize', 'onElementResize', me);
  },

  onElementResize: function(element, size) {
    el = this.element;
    var sz = el.getSize()
    var e = document.getElementsByTagName(this.name + '-root')[0]
    var root = Ext.getCmp(e.lastChild.id)
    if (root != undefined) {
      root.setWidth(sz.width)
      root.setHeight(sz.height)
    }
    else {
      e.lastChild.width = sz.width
      e.lastChild.height = sz.height
    }
  }

})

Ext.define('AngularInExtJsClassic.view.personnel.PersonnelnewView',{
  extend: 'Ext.container.Container',
  xtype: 'personnelnewview',
  layout: 'fit',
  items: [
    {xtype: 'angular',name: 'personnelnew'}
  ]
})