import React, { useState, useEffect } from 'react';

const Service = (props) => {
        let publicUrl = process.env.PUBLIC_URL+'/';

		const initialStateValues = {
			genero: 0,
			niveldeActividad: 0,
			alimento:"",
			pesoAlimento:0,
			kcal: 0,
			edad:0,
			estatura: 0,
			pesoPersona: 0
		};

		const [values, setValues] = useState(initialStateValues);

		useEffect(()=>{
			setValues(props.padreAHijo);
		},[props.padreAHijo]);

		const macroNutrientes = (propsZ) =>{
			if(propsZ.pesoAlimento === undefined || propsZ.pesoAlimento === 0 ||propsZ.alimento === undefined || propsZ.alimento === ''){
				return 'Calorias por alimento a consumir.';
			} else{
				const kal = (propsZ.pesoAlimento * propsZ.kcal);
				return `Para ${propsZ.pesoAlimento}gr de ${propsZ.alimento} hay ${kal.toFixed(2)}[kcal] Calorias a consumir.`
			}
			
		}

		const tuTMB = (propsZ) =>{
			let tmb = 0;
			if(propsZ.genero === 2){
				tmb = ((10 * propsZ.pesoPersona) + (6.25 * propsZ.estatura) - (5 * propsZ.edad) + 5);
			}else{
				tmb = ((10 * propsZ.pesoPersona) + (6.25 * propsZ.estatura) - (5 * propsZ.edad) - 161);
			}
			return tmb;
		}

		const nivelAct = (ky, tmb) =>{
			switch (ky) {
				case 1:
					return tmb * 1.2; 
				case 2:
					return tmb * 1.375;
				case 3:
					return tmb * 1.55;
				case 4:
					return tmb * 1.725;
				case 5:
					return tmb * 1.9;
				default:
					return 0;
			}
		}

		const calAbajo = (ky, cal) =>{
			switch (ky) {
				case 1:
					return cal - 300; 
				case 2:
					return cal  - 350;
				case 3:
					return cal - 400;
				case 4:
					return cal - 450;
				case 5:
					return cal - 500;
				default:
					return 0;
			}
		}

		const calArriba = (ky, cal) =>{
			switch (ky) {
				case 1:
					return cal + 300; 
				case 2:
					return cal  + 350;
				case 3:
					return cal + 400;
				case 4:
					return cal + 450;
				case 5:
					return cal + 500;
				default:
					return 0;
			}
		}

		const msgTmb = (propsZ) =>{
			if(todaLaData(propsZ)){
				let tmb = tuTMB(propsZ);
				let ky = propsZ.niveldeActividad;
				let kcal = nivelAct(ky, tmb);
				return `Tu metabolismo basal es de ${tmb.toFixed(2)} por consiguiente la cantidad diria de calorias que necesitas para mantener tu peso es de ${kcal.toFixed(0)}[kcal] para bajar deberias consumir maximo ${calAbajo(ky,kcal).toFixed(0)}[kcal] y para subir bajo control deberias consumir almenos ${calArriba(ky,kcal).toFixed(0)}[kcal]`;
			}else{
				return `Tu Metabolismo basal (TMB) nos indica la cantidad de calorias diarias que necesita tu cuerpo para mantener el peso en el que te encuentras, asi mismo se puede inferir la cantidad minima y maxima de calorias para subir o bajar de peso respectivamente y tenerlo bajo control`;
			}
		}


		const todaLaData = (propsZ) =>{
			return (
				propsZ.pesoPersona === undefined || propsZ.pesoPersona === 0 ||
				propsZ.estatura === undefined || propsZ.estatura === '' ||
				propsZ.genero === undefined || propsZ.genero === 0 ||
				propsZ.niveldeActividad === undefined || propsZ.niveldeActividad === 0 ||
				propsZ.edad === undefined || propsZ.edad === 0
			) ? false : true;
		}

		const tuIMC = (propsZ) =>{
			if(propsZ.pesoPersona === undefined || propsZ.pesoPersona === 0 ||propsZ.estatura === undefined || propsZ.estatura === ''|| propsZ.genero === undefined || propsZ.genero === 0){
				return 'Tu IMC (Indice de Masa Corporal) te indica si el peso que tienes segun tu altura se encuntra dentro de un rango normal o esta desfasado.';
			} else{
				const alturaEnCm = (propsZ.estatura / 100)
				const imc = (propsZ.pesoPersona / (alturaEnCm * alturaEnCm));
				return `Tines un IMC de ${imc.toFixed(1)} lo que indica dentro del rango de IMC te encunetras en estado de ${rangoIMC(imc.toFixed(1), propsZ.genero)}, puesto que tu peso actual es de ${propsZ.pesoPersona}kg y tu peso ideal deveria estar entre ${rangoIMCideal(alturaEnCm)}`
			}
			
		}

		const rangoIMC = (imc, genero) =>{
			if(genero === 2){
				if(imc <= 19.0){
					return 'bajo peso';
				}else if(imc >= 19.1 && imc <= 24.0){
					return 'Peso normal';
				}else if(imc >= 24.1 && imc <= 29.0){
					return 'Sobre peso';
				}else if(imc >= 29.1 && imc <= 38.9){
					return 'Obesidad';
				}else{
					return 'Obesidad mórbida';
				}
			}else{
				if(imc <= 18.0){
					return 'bajo peso';
				}else if(imc >= 18.1 && imc <= 23.0){
					return 'Peso normal';
				}else if(imc >= 23.1 && imc <= 28.0){
					return 'Sobre peso';
				}else if(imc >= 28.1 && imc <= 37.9){
					return 'Obesidad';
				}else{
					return 'Obesidad mórbida';
				}
			}
			
		}

		const rangoIMCideal = (altura, genero) =>{
			let r1 = 24.0;
			let r2 = 19.1;
			if(genero === 1){
				r1 = 23.0;
				r2 = 18.1;
			}
			const pesoMxIdeal = (r1 * altura * altura);
			const pesoMmIdeal = ((r2 * altura * altura));
			return `(${pesoMmIdeal.toFixed(1)}kg - [Min] / ${pesoMxIdeal.toFixed(1)}kg - [Max])`;
		}

    return  (<div className="service-area">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-10">
			        <div className="single-service-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/service/1.png"} alt="icon" />
			          </div>
			          <div className="single-service-details">
			            <h4><a href="property-details.html">Metabolismo basal</a></h4>
			            <p>{msgTmb(values)}</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-10">
			        <div className="single-service-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/service/cuerpo.png"} alt="icon" className="tato"/>
			          </div>
			          <div className="single-service-details">
			            <h4><a href="property-details.html">Tu IMC</a></h4>
			            <p>{tuIMC(values)}</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-10">
			        <div className="single-service-wrap mb-0">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/service/tenedor.png"} alt="icon" className="tato"/>
			          </div>
			          <div className="single-service-details">
			            <h4><a href="property-details.html">Macro nutrientes</a></h4>
			            <p>{macroNutrientes(values)}</p>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>)
}

export default Service