var Kylin = {}
Kylin.dom = {
	query:function(el){
		if(typeof el === 'string'){
			el = document.querySelector(el)
		}
		return el
	},
	getAttr:function(node,_attr){
		return node.getAttribute(_attr)
	},
	before:function(el,target){
		target.parentNode.insertBefore(el,target)
	},
	after:function(el,target){
		target.nextSibling ? this.before(el,target) : target.parentNode.appendChild(el)
	},
	remove:function(el){
		el.parentNode.removeChild(el)
	},
	prepend:function(el,target){
		target.firstChild ? this.before(el, target.firstChild) : target.appendChild(el)  
	},
	replace:function(target,el){
		var parent = target.parentNode
		if (parent) {
			parent.replaceChild(el, target)
		}
	},
	on:function(el, event, cb, useCapture){
		el.addEventListener(event,cb,useCapture)
	},
	off:function(el,event,cb){
		el.removeEventListener(event, cb)
	},
	setClass:function(el,cls){
		el.setAttribute('class',cls)
	},
	addClass:function(el,cls){
		if (el.classList) {
			el.classList.add(cls)
		} else {
			var cur = ' ' + (el.getAttribute('class') || '') + ' '
			if (cur.indexOf(' ' + cls + ' ') < 0) {
				this.setClass(el, (cur + cls).trim())
			}
		}
	},
	removeClass:function(el,cls){
		if (el.classList) {
			el.classList.remove(cls)
		} else {
			var cur = ' ' + (el.getAttribute('class') || '') + ' '
			var tar = ' ' + cls + ' '
			while (cur.indexOf(tar) >= 0) {
				cur = cur.replace(tar, ' ')
			}
			this.setClass(el, cur.trim())
		}
		if (!el.className) {
			el.removeAttribute('class')
		}
	}
}
