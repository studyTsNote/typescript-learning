import * as A from './a';
console.log(A);

import { name as AName, now, dateLocaleStr } from './a';
console.log(AName, now(), dateLocaleStr());

import Env from './b';
console.log(Env);

import * as B from './b';
console.log(B, B.default);

import { default as BEnv } from './b';
console.log(BEnv);

console.log(Env === B.default, B.default === BEnv);

import BEnv1, { mode } from './b';
console.log(BEnv1, mode);

if (true) {
    import('./c').then(console.log);
}