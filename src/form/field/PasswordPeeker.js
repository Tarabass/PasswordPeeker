Ext.define('PasswordPeeker.form.field.PasswordPeeker', {
	extend: 'Ext.form.field.Trigger',
	alias: 'widget.passwordpeeker',
	
	ui: 'passwordpeeker', // NEW
	baseCls: Ext.baseCSSPrefix + 'passwordpeeker',
	triggerBaseCls: Ext.baseCSSPrefix + 'form-passwordpeekertrigger',
	
	inputType: 'password',

	initComponent: function() {
		var me = this;
		
		me.listeners = {
			triggerEl: {
				mousedown: function(ev, cb) {
					me.inputEl.el.dom.type = 'text';
				},
				mouseup: function(ev, cb) {
					me.inputEl.el.dom.type = 'password';
				}
			}
		};
		
		me.callParent();
	},
	
	// override onTriggerClick
    onTriggerClick: function() {
        
    }
});