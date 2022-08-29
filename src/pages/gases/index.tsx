import { useForm } from 'react-hook-form';
import styles from './gases.module.css';
import { FlowOutput } from '../../components/FlowOutput/FlowOutput';
import Head from 'next/head';
import {
	PressureUnitOptions,
	flowUnitOptions,
	TemperatureUnitOptions,
	defaultValues,
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

export default function Gases() {
	const { register, control } = useForm<FormValues>({
		defaultValues: defaultValues,
	});

	return (
		<>
			<Head>
				<title>CE - Gas Conversion</title>
				<meta
					name="Content"
					content="Convert flowrate of ideal gases based on new temperature and pressure conditions."
				/>
			</Head>
			<form className={styles.form}>
				<div className={styles.header}>Initial conditions</div>

				<label className={styles.label} htmlFor="inTemp">
					Temperature:{' '}
				</label>
				<input className={styles.input} {...register('inTemp')} type="number" />
				<select
					className={styles.select}
					{...register('inTempUnit')}
					id="temperatureUnit"
				>
					{TemperatureUnitOptions}
				</select>

				<label className={styles.label} htmlFor="inPres">
					Pressure:{' '}
				</label>
				<input className={styles.input} {...register('inPres')} type="number" />
				<select
					className={styles.select}
					{...register('inPresUnit')}
					id="inPresUnit"
				>
					{PressureUnitOptions}
				</select>

				<label className={styles.label} htmlFor="inFlow">
					Flowrate:{' '}
				</label>
				<input className={styles.input} {...register('inFlow')} type="number" />
				<select
					className={styles.select}
					{...register('inFlowUnit')}
					id="inFlowUnit"
				>
					{flowUnitOptions}
				</select>
				<div className={styles.header}>Final conditions</div>

				<label className={styles.label} htmlFor="outTemp">
					Temperature:{' '}
				</label>
				<input
					className={styles.input}
					{...register('outTemp')}
					type="number"
				/>
				<select
					className={styles.select}
					{...register('outTempUnit')}
					id="outTempUnit"
				>
					{TemperatureUnitOptions}
				</select>

				<label className={styles.label} htmlFor="outPres">
					Pressure:{' '}
				</label>
				<input
					className={styles.input}
					{...register('outPres')}
					type="number"
				/>
				<select
					className={styles.select}
					{...register('outPresUnit')}
					id="outPresUnit"
				>
					{PressureUnitOptions}
				</select>

				<label className={styles.lable} htmlFor="outputFlowrate">
					Flowrate:{' '}
				</label>
				<FlowOutput control={control} />

				<select
					className={styles.select}
					{...register('outFlowUnit')}
					id="outFlowUnit"
				>
					{flowUnitOptions}
				</select>
			</form>
		</>
	);
}
