
class Form {
  constructor(formContainer){
    this.formContainer = formContainer;
  }

  inputEleObj = [];

  submit(e){
    e.preventDefault();
    this._getAllInput();
    this._parsleyRequired();
  }

  _getAllInput(){

  }
  _parsleyRequired(){

  }

}
