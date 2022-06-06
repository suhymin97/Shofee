
function Validator(options) {
    
    var selectorRules = {};
    
    function validate(inputElement, rule) {
        var errorMessage;     
        var errorElement = inputElement.parentElement.querySelector(options.errorMessage);
        
        var rules = selectorRules[rule.selector];
        //xử lý những function cùng selector
        for(var i = 0; i < rules.length; ++i) {
            errorMessage = rules[i](inputElement.value);
            if(errorMessage) break;
        }

        //hiển thị lỗi khi có lỗi
        if(errorMessage) { 
            errorElement.innerText = errorMessage; 
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
        return !errorMessage; //biến nó thành boolean
    }
    
    

    var formElement = document.querySelector(options.form);
    
    if(formElement) {
        
        //khi nhấn nút submit
        formElement.onsubmit = function(e) {
            e.preventDefault();
            
            var isFormValid = true;

            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement,rule);
              
                if(!isValid) {
                    isFormValid = false;
                } 
                
            });


                if(isFormValid) {
                    // console.log('Không có lỗi');
                    if(typeof options.onSubmit === 'function') {
                        var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                        var formValues = Array.from(enableInputs).reduce(function(values, input) {
                            values[input.name] = input.value;
                            return values;
                        }, {});
                        var fullname = formValues.fullname;
                
                        options.onSubmit(formValues);
                        localStorage.setItem('myvalue',formValues.fullname);
                        location.href = './index.html'
                    }
                } else {
                    // formElement.submit();
                }
        }


        //xử lý những function cùng selector
        options.rules.forEach(function(rule) {
            
            if(Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElement = formElement.querySelector(rule.selector);
           
            //khi blur ra ngoài, thực thi hàm validate
            if(inputElement) {
                inputElement.onblur = function() {
                   validate(inputElement,rule);
                    
                }
            }
        })
        
    }
    
}

//xử lý khi input rỗng
Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này';
        }
    }
}

//xử lý khi input của email không đúng quy tắc
Validator.isEmail = function(selector, message) {
    return {
        selector: selector,
        test: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Vui lòng nhập đúng email';
        }
    }
}

//xử lý khi input password khi không đủ ký tự
Validator.minLength = function(selector, min, message) {
    return {
        selector: selector,
        test: function(value){
            return value.length >= min ? undefined : message || 'Vui lòng nhập tối thiểu 6 ký tự';
        }
    }
}

//xử lý password confirm
Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function(value){
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập không chính xác';
        }
    }
}

