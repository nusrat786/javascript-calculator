var input = document.getElementById('input');


function pushBtn(obj)
{
	var pushed = obj.innerHTML;
		if(pushed == '='){
					input.innerHTML = eval(input.innerHTML);
			} else if(pushed == 'C'){

				input.innerHTML= '0';
			} else {

				if(input.innerHTML== '0'){

					input.innerHTML = pushed;
				} else {

					input.innerHTML +=pushed;
				}
			}
};