import { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { buildRecaptchaV2 } from './recaptchaV2';
import { buildRecaptchaV3 } from './recaptchaV3';
import { buildImageToText } from './imageToText';
import { buildJsonTask } from './jsonTask';
import { buildRecaptchaV2Enterprise } from './recaptchaV2Enterprise';
import { buildRecaptchaV3Enterprise } from './recaptchaV3Enterprise';
import { buildGeeTest } from './geeTest';
import { buildRecaptchaClick } from './recaptchaClick';
import { TaskType } from '../types';
import { buildTurnstile } from './buildTurnstile';
import { buildTurnstileWaitRoom } from './buildTurnstileWaitRoom';
import { buildTurnstileChallenge } from './buildTurnstileChallenge';
import { buildComplexImageRecognition } from './buildComplexImageRecognition';
import { buildDataDome } from './buildDataDome';
import { buildBasiliskTask } from './basilisk';
import { buildTenDITask } from './buildTenDITask';
import { buildAmazonTask } from './buildAmazonTask';
import { buildBinanceTask } from './buildBinanceTask';
import { buildImpervaTask } from './buildImpervaTask';
import { buildProsopoTask } from './buildProsopoTask';
import { buildTemuTask } from './buildTemuTask';
import { buildYidunTask } from './buildYidunTask';
import { buildMTCaptchaTask } from './buildMTCaptchaTask';
import { buildAltchaTask } from './buildAltchaTask';
import { buildFunCaptchaTask } from './buildFunCaptchaTask';
import { buildCastleTask } from './buildCastleTask';
import { buildTspdTask } from './buildTspdTask';
import { buildHuntTask } from './buildHuntTask';

type Builder = (this: IExecuteFunctions, i: number) => IDataObject;

export const taskBuilders: Record<TaskType, Builder> = {
	json: buildJsonTask,
	recaptchaV2: buildRecaptchaV2,
	recaptchaV3: buildRecaptchaV3,
	imageToText: buildImageToText,
	recaptchaV2Enterprise: buildRecaptchaV2Enterprise,
	recaptchaV3Enterprise: buildRecaptchaV3Enterprise,
	geetest: buildGeeTest,
	recaptchaClick: buildRecaptchaClick,
	turnstile: buildTurnstile,
	turnstileWaitRoom: buildTurnstileWaitRoom,
	turnstileChallenge: buildTurnstileChallenge,
	complexImageRecognition: buildComplexImageRecognition,
	datadome: buildDataDome,
	basilisk: buildBasiliskTask,
	tendi: buildTenDITask,
	amazon: buildAmazonTask,
	binance: buildBinanceTask,
	imperva: buildImpervaTask,
	prosopo: buildProsopoTask,
	temu: buildTemuTask,
	yidun: buildYidunTask,
	mtcaptcha: buildMTCaptchaTask,
	altcha: buildAltchaTask,
	funcaptcha: buildFunCaptchaTask,
	castle: buildCastleTask,
	tspd: buildTspdTask,
	hunt: buildHuntTask,
};
