//библиотека это набор готовых функций(чтобы упростить скорость работы), для того чтобы не писать самостоятельно
function $(selector) {
    let element;
    if (typeof selector == "string") {
        element = document.querySelectorAll(selector);
    } else if (selector instanceof HTMLElement) {
        element = [selector];
    } else {
        element = null;
    }
    return new jQ(element)
}

// функция конструктор

function jQ(params) {
    this.element = params;
    this.on = function (event, callBackFun) {
        for (let i = 0; i < this.element.length; i++) {
            this.element[i].addEventListener(event, callBackFun);
        }
        return this;
    }
    this.html = function (html) {
        if (typeof html == "string" || typeof html == "number") {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].innerHTML = html;

            }
        }
        return this;
    }
    this.css = function (styleName, value) {
        if (typeof styleName == "string" && (typeof value == "string" || typeof value == "number")) {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style = `${styleName}: ${value};`;
            }
        } else if (typeof styleName == "object" && styleName != null && !Array.isArray(styleName)) {
            for (let i = 0; i < this.element.length; i++) {
                for (const key in styleName) {
                    this.element[i].style[key] = styleName[key];
                }
            }
        }
        return this
    }
    this.toggleClass = function (className) {
        if (typeof className == "string") {
            for (let i = 0; i < this.element.length; i++) {
                if (this.element[i].classList.contains(className)) {
                    this.element[i].classList.remove(className)
                } else {
                    this.element[i].classList.add(className)
                }
            }
        }
        return this
    }
    this.addClass = function (addClassName) {
        if (typeof addClassName == "string") {
            for (let i = 0; i < this.element.length; i++) {
                if (!this.element[i].classList.contains(addClassName)) {
                    this.element[i].classList.add(addClassName)
                }
            }
        }
        return this
    }
    this.removeClass = function (removeClassName) {
        if (typeof removeClassName == "string") {
            for (let i = 0; i < this.element.length; i++) {
                if (this.element[i].classList.contains(removeClassName)) {
                    this.element[i].classList.remove(removeClassName)
                }
            }

        }
        return this
    }
    this.width = function (newWidth) {
        for (let i = 0; i < this.element.length; i++) {
            if (typeof newWidth == "number") {
                this.element[i].style.width = newWidth + "px"
            } else if (typeof newWidth === "string") {
                this.element[i].style.width = newWidth
            } else  {
                return this.element[0].clientWidth
            }
        }
        return this
    }
    this.height = function (newHeight) {
        for (let i = 0; i < this.element.length; i++) {
            if (typeof newHeight == "number") {
                this.element[i].style.height = newHeight + "px"
            } else if (typeof newHeight === "string") {
                this.element[i].style.height = newHeight
            } else {
               return this.element[0].clientHeight
            }
        }
        return this
    }
}



