import styles from './FlowOutput.module.css';
import { useWatch, Control } from 'react-hook-form';
import {
	convertTempToKelvin,
	convertPressureToPaAbs,
	convertFlowToLitersPerMin,
	convertFlowFromLitersPerMinTo,
} from '../../utils/pressureAndTempFunctions';

type FormValues = {
	inTemp: number;
	inTempUnit: string;
	inPres: number;
	inPresUnit: string;
	inFlow: number;
	inFlowUnit: string;
	outTemp: number;
	outTempUnit: string;
	outPres: number;
	outPresUnit: string;
	outFlow: number;
	outFlowUnit: string;
};

export function FlowOutput({ control }: { control: Control<FormValues> }) {
	const inTemp = useWatch({ control, name: 'inTemp' });
	const inTempUnit = useWatch({ control, name: 'inTempUnit' });
	const inPres = useWatch({ control, name: 'inPres' });
	const inPresUnit = useWatch({ control, name: 'inPresUnit' });
	const inFlow = useWatch({ control, name: 'inFlow' });
	const inFlowUnit = useWatch({ control, name: 'inFlowUnit' });
	const outTemp = useWatch({ control, name: 'outTemp' });
	const outTempUnit = useWatch({ control, name: 'outTempUnit' });
	const outPres = useWatch({ control, name: 'outPres' });
	const outPresUnit = useWatch({ control, name: 'outPresUnit' });
	const outFlowUnit = useWatch({ control, name: 'outFlowUnit' });

	const T1 = convertTempToKelvin(inTemp, inTempUnit);
	const P1 = convertPressureToPaAbs(inPres, inPresUnit);
	const T2 = convertTempToKelvin(outTemp, outTempUnit);
	const P2 = convertPressureToPaAbs(outPres, outPresUnit);
	const Q1 = convertFlowToLitersPerMin(inFlow, inFlowUnit);
	const Q2inLitresPerMin = (P1 * Q1 * T2) / (T1 * P2); //Q2 in L/min
	const Q2 = convertFlowFromLitersPerMinTo(
		Q2inLitresPerMin,
		outFlowUnit
	).toFixed(2);

	return (
		<input className={styles.outputStyled} value={Q2} type="text" readOnly />
	);
}
