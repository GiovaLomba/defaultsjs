/*
 * Copyright 2018-2019 Giovanni Lombardo
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the 
 * "Software"), to deal in the Software without restriction, including 
 * without limitation the rights to use, copy, modify, merge, publish, 
 * distribute, sublicense, and/or sell copies of the Software, and to 
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be 
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
 * MERCHANTABILITY FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY 
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const BLACK = "#000";
const GREY  = "#BBB";

function InputHints(target, obj){
	for(var key in obj) {
		if(target.value == obj[key]){
			target.value = '';
			target.style.color = BLACK;
			return true;
		}
	}
	
	if(target.value == ''){
		target.value = obj[target.id];
		target.style.color = GREY;
		return true;
	}
	
	target.style.color = BLACK;
	return true;
}

function SetDefaults(obj){
	for(var key in obj){
		var element = document.getElementById(key);
		if(element){
			element.value = obj[key];
			element.style.color = GREY;
		}
	}
}
