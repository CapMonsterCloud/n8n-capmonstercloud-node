import { recaptchaV2Fields } from './recaptchaV2';
import { jsonTaskFields } from './json';
import { recaptchaV3Fields } from './recaptchaV3Fields';
import { imageToTextFields } from './imageToTextFields';
import { INodeProperties } from 'n8n-workflow/dist/esm/interfaces';
import { proxyFields } from './common';
import { recaptchaV3EnterpriseFields } from './recaptchaV3EnterpriseFields';
import { recaptchaV2EnterpriseFields } from './recaptchaV2EnterpriseFields';
import { geetestFields } from './geetestFields';
import { recaptchaClickFields } from './recaptchaClickFields';
import { turnstileFields } from './turnstileFields';
import { turnstileChallengeFields } from './turnstileChallengeFields';
import { turnstileWaitRoomFields } from './turnstileWaitRoomFields';
import { complexImageRecognitionFields } from './complexImageRecognitionFields';
import { datadomeFields } from './datadomeFields';
import { basiliskFields } from './basiliskFields';
import { tendiFields } from './tendiFields';
import { binanceFields } from './binanceFields';
import { impervaFields } from './impervaFields';
import { TaskType } from '../types';
import { amazonFields } from './amazonFields';
import { prosopoFields } from './prosopoFields';
import { temuFields } from './temuFields';
import { yidunFields } from './yidunFields';
import { mtcaptchaFields } from './mtcaptchaFields';
import { altchaFields } from './altchaFields';
import { funcaptchaFields } from './funcaptchaFields';
import { castleFields } from './castleFields';
import { tspdFields } from './tspdFields';
import { huntFields } from './huntFields';


const options: Array<{ name: string; value: TaskType }> = [
	{ name: 'JSON (Custom Task)', value: 'json' },
	{ name: 'Recaptcha V2 Enterprise', value: 'recaptchaV2Enterprise' },
	{ name: 'Recaptcha V3 Enterprise', value: 'recaptchaV3Enterprise' },
	{ name: 'Recaptcha V2', value: 'recaptchaV2' },
	{ name: 'Recaptcha V3', value: 'recaptchaV3' },
	{ name: 'Image To Text', value: 'imageToText' },
	{ name: 'GeeTest', value: 'geetest' },
	{ name: 'Recaptcha (Click)', value: 'recaptchaClick' },
	{ name: 'Cloudflare Turnstile', value: 'turnstile' },
	{ name: 'Cloudflare Challenge', value: 'turnstileChallenge' },
	{ name: 'Cloudflare Waiting Room', value: 'turnstileWaitRoom' },
	{ name: 'Complex Image Recognition', value: 'complexImageRecognition' },
	{ name: 'DataDome', value: 'datadome' },
	{ name: 'Basilisk', value: 'basilisk' },
	{ name: 'Tendi', value: 'tendi' },
	{ name: 'Binance', value: 'binance' },
	{ name: 'Imperva', value: 'imperva' },
	{ name: 'Amazon', value: 'amazon' },
	{ name: 'Prosopo', value: 'prosopo' },
	{ name: 'Temu', value: 'temu' },
	{ name: 'Yidun', value: 'yidun' },
	{ name: 'Mtcaptcha', value: 'mtcaptcha' },
	{ name: 'Altcha', value: 'altcha' },
	{ name: 'FunCaptcha', value: 'funcaptcha' },
	{ name: 'Castle', value: 'castle' },
	{ name: 'Tspd', value: 'tspd' },
	{ name: 'Hunt', value: 'hunt' },
];

const allFields: INodeProperties[] = [
	{
		displayName: 'Task Type',
		name: 'taskType',
		type: 'options',
		options: options,
		default: 'recaptchaV2',
	},
	...recaptchaV2Fields,
	...recaptchaV3Fields,
	...imageToTextFields,
	...jsonTaskFields,
	...recaptchaV3Fields,
	...recaptchaV2EnterpriseFields,
	...recaptchaV3EnterpriseFields,
	...recaptchaClickFields,
	...geetestFields,
	...turnstileFields,
	...turnstileChallengeFields,
	...turnstileWaitRoomFields,
	...complexImageRecognitionFields,
	...datadomeFields,
	...basiliskFields,
	...tendiFields,
	...binanceFields,
	...impervaFields,
	...amazonFields,
	...prosopoFields,
	...temuFields,
	...yidunFields,
	...mtcaptchaFields,
	...altchaFields,
	...funcaptchaFields,
	...castleFields,
	...tspdFields,
	...huntFields,
	...proxyFields,
];
export default allFields
