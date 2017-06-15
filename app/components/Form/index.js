
class Form {
  constructor(formContainer){
    this.formContainer = formContainer;
    this.allInputGroup = formContainer.querySelectorAll('.input-group');
  }

  inputObj = [];//所有input元素
  requiredInputObj = [];// 所有必填的input元素

  init(){
    this._getAllInput();
    this._getRequireddInput();

  }

  submit(e){
    e.preventDefault();
    this._parsleyRequired();
  }

  _getAllInput(){
    for(let ele of _inputGroup) inputObj.push(ele.querySelector('input'));
  }
  _getRequireddInput(){


  }

  /**
  / * @param {ele:current required input element }
   */
  _parsleyRequired(ele){
    var _value = ele.value.trim();//会取到空格
    _value ?
      this._toggleClass(ele.classname,'input-success','input-error') :
      this._toggleClass(ele.classname,'input-error','input-success');
  }

  /**
   * 删除或添加classname
   *第二个参数是添加的，第三个是删除的
   */
  _toggleClass(classNames, ...rest){
    if(rest[1]) {
      let reg = new RegExp(rest[1],'ig');
      classNames.replace(reg,'');
    }
    if(rest[0]) classNames = `${classNames} ${rest[0]}`;
    return classNames
  }
}
