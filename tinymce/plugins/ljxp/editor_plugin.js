var close_tag;
(function() {
	tinymce.create('tinymce.plugins.ljxp', {
		init : function(ed, url) {
		
			ed.addCommand('mceNocrossInsert', function() {
				
				
				ed.execCommand("mceBeginUndoLevel");
				
				var content = tinyMCE.activeEditor.selection.getContent({format : 'raw'});
				var newcontent = '[nocrosspost]' + content + '[/nocrosspost]';

				tinyMCE.activeEditor.selection.setContent(newcontent);
				
				ed.execCommand("mceEndUndoLevel");
				
				return false;
			});
			
			ed.addButton('nocross', {
				title : 'NO CROSSPOST and NO RSS',
				cmd : 'mceNocrossInsert',
				image : url + '/img/nocross.gif'
			});
			ed.onNodeChange.add(function(ed, cm, n) {
				cm.setActive('nocross', n.nodeName == 'IMG');
			});
		},

		createControl : function(n, cm) {
			return null;
		},
		getInfo : function() {
			return {
				longname : 'LJ Crossposter Shortcode',
				author : 'Sergey M.',
				authorurl : 'http://iskariot.ru',
				infourl : 'http://iskariot.ru/wordpress/remix/#lj-crosspost',
				version : '0.1'
			};
		}
	});
	tinymce.PluginManager.add('nocross', tinymce.plugins.ljxp);
})();