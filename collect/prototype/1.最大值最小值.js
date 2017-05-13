// 原型增加方法max
if (typeof Array.prototype['max'] == 'undefined') {
	Array.prototype.max = function() {
		var tmp = this[0],
			length = this.length,
			i=0;

		for (; i < length; i++) {
			if (this[i] > tmp) {
				tmp = this[i];
			};
		};

		return tmp;
	};
};

//实例方法max
Array.max = function(array) {
	return Math.max.apply(Math,array);
}

// 精简
Array.prototype.max = function() {
	return Math.max.apply({},this);
}

//临时使用
Math.max.apply(null,arr);