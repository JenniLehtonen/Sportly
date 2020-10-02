class CalculateBMI extends React.Component {

	constructor(props) {
	    super(props);
	    this.showBMI = this.showBMI.bind(this);
	  }

	  showBMI() {
			this.refs.bmiResult.value = parseInt(this.refs.n2.value)/(parseInt(this.refs.n1.value)/100*parseInt(this.refs.n1.value)/100);  //lasketaan BMI
			if(this.refs.bmiResult.value < 18.5){  //määritetään tulosalueen ulkonäkö BMI:n perusteella
				this.refs.bmiResult.value= "Underweight";
				this.refs.bmiResult.style.backgroundColor = "rgba(143, 223, 255, 0.4)";
				this.refs.bmiResult.style.border = "1px solid #8fdfff";
				this.refs.bmiResult.style.display = "inline";
			} else if (this.refs.bmiResult.value >= 18.5 && this.refs.bmiResult.value < 24.9){
				this.refs.bmiResult.value= "Normal weight";
				this.refs.bmiResult.style.backgroundColor = "rgba(109, 237, 118, 0.4)";
				this.refs.bmiResult.style.border = "1px solid #6ded76";
				this.refs.bmiResult.style.display = "inline";
			} else if (this.refs.bmiResult.value >= 24.9 && this.refs.bmiResult.value< 29.9){
				this.refs.bmiResult.value= "Overweight";
				this.refs.bmiResult.style.backgroundColor = "rgba(255, 251, 38, 0.4)";
				this.refs.bmiResult.style.border = "1px solid #fffb26";
				this.refs.bmiResult.style.display = "inline";
			} else if (this.refs.bmiResult.value >= 29.9){
				this.refs.bmiResult.value= "Obesity";
				this.refs.bmiResult.style.backgroundColor = "rgba(255, 103, 61, 0.4)";
				this.refs.bmiResult.style.border = "1px solid #ff673d";
				this.refs.bmiResult.style.display = "inline";
			}
	  }
	  showExercise() { //Annetaan käyttäjälle palautetta riippuen syötetystä liikuntamäärästä
			if (this.refs.muscle.value < 2 && this.refs.vigorous.value < 1.15){
				this.refs.exerciseResult.value = "You should do more vigorous exercise (at least 2 times a week) and muscle workout (at least 1.15 hours a week)."; 
				this.refs.exerciseResult.style.display = "inline";
				this.refs.exerciseResult.style.backgroundColor = "rgba(255, 103, 61, 0.4)";
				this.refs.exerciseResult.style.border = "1px solid #ff673d";
			} else if (this.refs.vigorous.value < 1.15){ 
				this.refs.exerciseResult.value = "You should do more vigorous exercise such as cycling, basketball or heavy gardening with digging.";
				this.refs.exerciseResult.style.display = "inline";
				this.refs.exerciseResult.style.backgroundColor = "rgba(255, 251, 38, 0.4)";
				this.refs.exerciseResult.style.border = "1px solid #fffb26";
			} else if (this.refs.muscle.value < 2){
				this.refs.exerciseResult.value = "You should do more muscle workout. The recommended amount of muscle workout during a week is at least two times.";
				this.refs.exerciseResult.style.display = "inline";
				this.refs.exerciseResult.style.backgroundColor = "rgba(255, 251, 38, 0.4)";
				this.refs.exerciseResult.style.border = "1px solid #fffb26";
			} else {
				this.refs.exerciseResult.value = "Good job, you're doing enough exercise during a week. Keep up good work!";
				this.refs.exerciseResult.style.display = "inline";
				this.refs.exerciseResult.style.backgroundColor = "rgba(109, 237, 118, 0.4)";
				this.refs.exerciseResult.style.border = "1px solid #6ded76";
			}
	  }

	render() {
		const defaultStyle = {  //tulosaluetta ei näytetä ennen kuin tulos on laskettu.
			display:"none"
		};
	    return (
	      <div>
			<h3>Calculate your BMI</h3>
			<label htmlFor="height">Height (cm)</label><br />
			<input type="number" id="height" placeholder="Height..." ref="n1" /><br />
			<label htmlFor="weight">Weight (kg)</label><br />
			<input type="number" id="weight" placeholder="Weight..." ref="n2" /><br />
			<button onClick={this.showBMI.bind(this)}>Calculate</button> <br />
			<textarea ref="bmiResult" id="bmiResult" style={defaultStyle} rows="1" ></textarea>  

			<h3>Do you exercise enough during a week?</h3>
			<label htmlFor="vigorousExercise">Vigorous exercise (h/week)</label><br />
			<input type="number" id="vigorousExercise" placeholder="Vigorous exercise..." ref="vigorous" /><br />
			<label htmlFor="muscleWorkout">Muscle workout (times/week)</label><br />
			<input type="number" id="muscleWorkout" placeholder="Muscle workout..." ref="muscle" /><br />
			<button onClick={this.showExercise.bind(this)}>Calculate</button> <br />
			<textarea ref="exerciseResult" id="sportResult" style={defaultStyle} ></textarea>
	      </div>
	    );
	  }
	}

	ReactDOM.render(
	  <CalculateBMI />,
	  document.getElementById('bmiResults')
	);