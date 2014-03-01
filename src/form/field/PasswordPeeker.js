Ext.define('PasswordPeeker.form.field.PasswordPeeker', {
	extend: 'Ext.form.field.Trigger',
	alias: 'widget.passwordpeeker',
	
	ui: 'passwordpeeker',
	baseCls: Ext.baseCSSPrefix + 'passwordpeeker',
	triggerBaseCls: Ext.baseCSSPrefix + 'form-passwordpeekertrigger',
	
	inputType: 'password',

	initComponent: function() {
		var me = this;
		
		me.listeners = {
			triggerEl: {
				mousedown: function(ev, c) {
					me.setType('text');
				},
				mouseup: function(ev, c) {
					if(me.inputEl.el.dom.type === 'text') {
						me.setType('password');
					}
				},
				mouseleave: function(ev, c) {
					if(me.inputEl.el.dom.type === 'text') {
						me.setType('password');
					}
				}
			}
		};
		
		me.callParent();
	},
	
	setType: function(type) {
		var me = this;
		
		me.inputEl.el.dom.type = type;
		
		if(type === 'password') {
			// Cross browser solution to set focus and
			// keep cursor at the end of the text
			var tmpStr = me.getValue();
			
			me.inputEl.el.dom.focus();
			me.setValue('');
			me.setValue(tmpStr);
		}
	},
	
	// override onTriggerClick
    onTriggerClick: function() {
        
    }
});