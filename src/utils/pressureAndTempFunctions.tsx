function convertTempToKelvin(temp: number, unit: string): number {
	const tempNum = Number(temp);
	if (unit === 'C') {
		return tempNum + 273.15;
	} else if (unit === 'F') {
		return ((tempNum + 459.67) * 5) / 9;
	} else {
		return tempNum;
	}
}

function convertPressureToPaAbs(pressure: number, unit: string): number {
	const pressureNum = Number(pressure);
	//convert pressure to Pa absolute
	if (unit === 'PaA') {
		return pressureNum;
	}
	let PaAbs = pressureNum;
	switch (unit) {
		case 'barG':
			PaAbs = pressureNum * 100000 + 101325;
			break;
		case 'barA':
			PaAbs = pressureNum * 100000;
			break;
		case 'PaG':
			PaAbs = pressureNum + 101325;
			break;
		case 'psiA':
			PaAbs = pressureNum * 6894.76;
			break;
		case 'psiG':
			PaAbs = pressureNum * 6894.76 + 101325;
			break;
		case 'mmH2OA':
			PaAbs = pressureNum * 133.322;
			break;
		case 'mmH2OG':
			PaAbs = pressureNum * 133.322 + 101325;
			break;
		case 'atmA':
			PaAbs = pressureNum * 101325;
			break;
		case 'atmG':
			PaAbs = pressureNum * 101325 + 101325;
			break;
		case 'kPaA':
			PaAbs = pressureNum * 1000;
			break;
		case 'kPaG':
			PaAbs = pressureNum * 1000 + 101325;
			break;
	}
	return PaAbs;
}

function convertFlowToLitersPerMin(flow: number, unit: string): number {
	const flowNum = Number(flow);
	//convert flow to L/min
	let Lpm = 1;
	switch (unit) {
		case 'L/min':
			Lpm = flowNum;
			break;
		case 'm3/min':
			Lpm = flowNum * 1000;
			break;
		case 'm3/s':
			Lpm = flowNum * 1000 * 60;
			break;
		case 'm3/h':
			Lpm = (flowNum * 1000) / 60;
			break;
		case 'L/h':
			Lpm = flowNum / 60;
			break;
		case 'L/s':
			Lpm = flowNum * 60;
			break;
	}
	return Lpm;
}

function convertFlowFromLitersPerMinTo(flow: number, unit: string): number {
	const flowNum = Number(flow);
	//convert flow from L/min to specified unit
	let outFlow = 1;
	switch (unit) {
		case 'L/min':
			outFlow = flowNum;
			break;
		case 'm3/min':
			outFlow = flowNum / 1000;
			break;
		case 'm3/s':
			outFlow = flowNum / 1000 / 60;
			break;
		case 'm3/h':
			outFlow = (flowNum / 1000) * 60;
			break;
		case 'L/h':
			outFlow = flowNum * 60;
			break;
		case 'L/s':
			outFlow = flowNum / 60;
			break;
	}
	return outFlow;
}

const PressureUnitOptions = (
	<>
		<option value="barG">barG</option>
		<option value="barA">barA</option>
		<option value="PaG">Pa gauge</option>
		<option value="PaA">Pa abs</option>
		<option value="psiG">psi gauge</option>
		<option value="psiA">psi abs</option>
		<option value="kPaG">kPa gauge</option>
		<option value="kPaA">kPa abs</option>
		<option value="mmH2OA">mmH2O abs</option>
		<option value="mmH2OG">mmH2O gauge</option>
		<option value="atmG">atm gauge </option>
		<option value="atmA">atm abs</option>
	</>
);
const flowUnitOptions = (
	<>
		<option value="L/min">litres/min</option>
		<option value="L/s">litres/sec</option>
		<option value="L/h">litres/hour</option>
		<option value="m3/s">m3/sec</option>
		<option value="m3/min">m3/min</option>
		<option value="m3/h">m3/hour</option>
	</>
);

const TemperatureUnitOptions = (
	<>
		<option value="C">℃</option>
		<option value="K">K</option>
		<option value="F">F</option>
	</>
);

const defaultValues: {
	inTemp: number;
	inPres: number;
	inFlow: number;
	outTemp: number;
	outPres: number;
	outFlowUnit: string;
	outPresUnit: string;
	inTempUnit: string;
	inPresUnit: string;
	inFlowUnit: string;
	outTempUnit: string;
} = {
	inTemp: 0,
	inPres: 2,
	inFlow: 100,
	outTemp: 15,
	outPres: 0,
	outFlowUnit: 'L/min',
	outPresUnit: 'barG',
	inTempUnit: 'C',
	inPresUnit: 'barG',
	inFlowUnit: 'L/min',
	outTempUnit: 'C',
};

export {
	convertTempToKelvin,
	convertPressureToPaAbs,
	convertFlowToLitersPerMin,
	convertFlowFromLitersPerMinTo,
	PressureUnitOptions,
	flowUnitOptions,
	TemperatureUnitOptions,
	defaultValues,
};
