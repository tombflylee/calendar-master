 
class Calendar {

	constructor(x,y){

	}

	_date_array = [];
	current_day = new Date();
	current_year = current_day.getFullYear();
	current_month = current_day.getMonth()+1;

	MONTH_NUMBER = 12;
	ROW_NUMBER = 6;
	COL_NUMBER = 7;

	/**
	 * 算出每月天数
	 * @param  {[type]}
	 * @return {[type]}
	 */
	_initMonthDayNumber (year){
		let _data_array = [];
		for (let i =0; i < MONTH_NUMBER; i++){
			switch(i+1){
				case 1:
				case 3:
				case 5:
				case 7:
				case 8:
				case 10:
				case 12:
					_data_array.push(31);
					break;
				case 4:
				case 6:
				case 9:
				case 11:
					_data_array.push(30);
					break;
				case 2:
					this._isLeapYear(year) ?  
					_data_array.push(29) :
					_data_array.push(28)
					break;
				default:
					break;
			}
		}
	}
	/**
	 * 判断是否为闰年
	 * 能被4整除而不能被100整除/能被400整除
	 * @param  {year}
	 * @return {Boolean}
	 */
	_isLeapYear(year){
		return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) 
	}
	/**
	 * 渲染外层容器
	 * @return {[type]}
	 */
	_renderContainer(outerElement){
		let calendarContainer = document.createElement('div');
		calendarContainer.setAttribute('calendar');
		outerElement.appendChild(calendarContainer);
	}
	/**
	 * 渲染头部
	 */
	_renderHeader(){
		let calendarHead = document.createElement('div');
		calendarHead.className = 'calendar-body';
		let bodyHead = document.createElement('ul');
		bodyHead.className = 'calendar-body-head';
		for(let i = 0;i < COL_NUMBER; i ++){
			let bodyContent = document.createElement('li');
			bodyContent.textContent = 
		}
	}

}

const helper = () =>{

}

