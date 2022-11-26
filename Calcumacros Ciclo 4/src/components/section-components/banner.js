import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import {getAlimentos} from '../../firebase/api'

const Banner = (props) => {
		let optionsAlimix = [
			{ value: 0, label: "Alimento", isDisabled: true}
		];
		let opt = 0;
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

		const getData = async ()  => {
			const doc = await getAlimentos();
			const alimentos = doc.data();
			const ali = alimentos['alimentos'];
			console.log(ali);
			opt++;
			if(opt === 1){
				for(let i = 0; i < ali.length; i++){
					optionsAlimix.push({
						value: ali[i].caloriasXgr,
						label: ali[i].nombreAlimento,
						name:"alimento",
						name2:"kcal",
						isDisabled: false
					})
				}
			}
			

			return optionsAlimix;

		};

		useEffect(()=>{
			getData();
		},);

		const img = "https://portal.andina.pe/EDPfotografia3/Thumbnail/2019/10/08/000624725W.jpg";
		const optionsG = [
			{ value: 0, label: "Genero", isDisabled: true},
			{ value: 1, label: "Mujer", name:"genero"}, 
			{ value: 2, label: "Hombre", name:"genero"}
		];
		
		const optionsAc = [
			{ value: 0, label: "Nivel de actividad", isDisabled: true},
			{ value: 1, label: "Sedentario", name:"niveldeActividad"},
			{ value: 2, label: "Ligera", name:"niveldeActividad"},
			{ value: 3, label: "Moderada", name:"niveldeActividad"},
			{ value: 4, label: "Intensa", name:"niveldeActividad"},
			{ value: 5, label: "Muy Intensa", name:"niveldeActividad"}
		];
		
		let optionsT = [{ value: 0, label: "Edad", isDisabled: true}];
		let optionsE = [{ value: 0, label: "Estatura", isDisabled: true}];
		let optionsP = [{ value: 0, label: "Peso", isDisabled: true}];
		let optionsgr = [{ value: 0, label: "Gramos", isDisabled: true}];
		

		for(let i = 10; i <= 60; i++){
			optionsT.push({ value: i, label: i, name:"edad"});
		}
		for(let i = 100; i <= 230; i++){
			optionsE.push({ value: i, label: `${i}cm`, name:"estatura"});
		}
		for(let i = 10; i <= 230; i++){
			optionsP.push({ value: i, label: `${i}kg`, name:"pesoPersona"});
		}
		for(let i = 1; i <= 2000; i++){
			optionsgr.push({ value: i, label: `${i}gr`, name:"pesoAlimento"});
		}

		const handleCalcularMeta = e =>{
			e.preventDefault();
			props.toastTr(values);

		}

		const handleCalcularMacros = e =>{
			e.preventDefault();
			props.toastTr(values);
		}

		const handldeSelectValues = e =>{
			const {name, value} = e;
			setValues({...values, [name]: value});
			if(name === "alimento"){
				let paco = values;
				paco.kcal = value;
				paco.alimento = e.label;
				setValues(paco);
			}
		}
		
    return (
		

		<div className="banner-area banner-area-1 banner-area-bg" style={{background: `url(${img})`}}>
			<div className="container">
			<div className="banner-area-inner">
				<div className="row justify-content-center">
				<div className="col-lg-8">
					<div className="banner-inner text-center">
					<div className="line" />
					<h2>Calculando un futuro saludable</h2>
					</div>
				</div>
				<div className="col-lg-8 mt-4">
					<form className="main-search-inner" onSubmit={handleCalcularMeta}>
						<div className="row custom-gutters-10 jscen">
							<div className="col-md-3">
							<div className="single-select-inner">
								<Select
									options={optionsG}
									name={"genero"}
									id="search-select"
									isSearchable={true}
									placeholder={"Genero"}
									onChange={handldeSelectValues}
								/>
							</div>
							</div>
							<div className="col-md-2">
								<div className="single-select-inner">
									<Select
										options={optionsT}
										name={"edad"}
										id="search-select"
										isSearchable={true}
										placeholder={"Edad"}
										onChange={handldeSelectValues}
									/>
								</div>
							</div>
							<div className="col-md-2">
							<div className="single-select-inner">
								<Select
									options={optionsE}
									name={"estatura"}
									id="search-select"
									isSearchable={true}
									placeholder={"Estatura"}
									onChange={handldeSelectValues}

								/>
							</div>
							</div>
							<div className="col-md-3">
							<div className="single-select-inner">
								<Select
									options={optionsAc}
									name={"niveldeActividad"}
									id="search-select"
									isSearchable={true}
									placeholder={"Actividad"}
									onChange={handldeSelectValues}

								/>
							</div>
							</div>
							<div className="col-md-2">
								<div className="single-select-inner">
									<Select
										options={optionsP}
										name={"pesoPersona"}
										id="search-select"
										isSearchable={true}
										placeholder={"Peso"}
										onChange={handldeSelectValues}
									/>
								</div>
							</div>
						</div>
						<div className="row custom-gutters-10 jscen">
							<div className="col-md-3 pt-3">
								<button className="btn btn-base w-100">Calcular</button>
							</div>
						</div>
					</form>
					<form onSubmit={handleCalcularMacros}>
						<div className="row custom-gutters-10 pt-5 jscen">
							<div className="col-md-3">
								<div className="single-select-inner">
									<Select
										options={optionsAlimix}
										name={"alimentos"}
										id="search-select"
										isSearchable={true}
										placeholder={"Alimento"}
										onChange={handldeSelectValues}

									/>
								</div>
							</div>
							<div className="col-md-3">
								<div className="single-select-inner">
									<Select
										options={optionsgr}
										name={"pesoAlimento"}
										id="search-select"
										isSearchable={true}
										placeholder={"Gramos"}
										onChange={handldeSelectValues}

									/>
								</div>
							</div>
							
						</div>
						<div className="row custom-gutters-10 jscen">
							<div className="col-md-3 pt-3 jscen">
								<button className="btn btn-base w-100">Macro nutrientes</button>
							</div>
						</div>
					</form>
				</div>
				</div>
			</div>
			</div>
		</div>
	);
		

        
}

export default Banner