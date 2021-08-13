/*
Lime version 0.1.2
Mathematics computation engine
2021 Lime Project Team, MIT license
https://github.com/onenylxus/lime
*/

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Lime=e()}(this,function(){"use strict";var s={github:"Please create a GitHub issue about how you received this message, thank you. ","error:invalidParametersInCommand":"Invalid parameters in command.","error:functionAgreement":"Function does not agree with parameter types.","error:inputEmptyInDirect":"Direct input is empty.","error:inputEmptyInPrompt":"Prompt input is empty.","error:inputNotArrayInDirect":"Direct input is not an array.","error:inputNotStringInPrompt":"Prompt input is not a string.","error:invalidConfigProperty":"Invalid configuration property in config command","error:invalidListProperty":"Invalid list property in list command","error:invalidSymbol":"Invalid symbol in prompt input.","error:undefinedVariable":"Variable is undefined but used.","error:unmatchedBrackets":"Some brackets are unmatched.","issue:invalidExpressionInConstruct":"Invalid expression in constructor.","issue:invalidFunctionOrder":"Invalid function order.","issue:invalidMessage":"Invalid message detected.","issue:invalidModuleInBuild":"Invalid module in build function.","issue:invalidModuleInIdentify":"Invalid module in identify function.","issue:invalidResultLengthInProcess":"Invalid result length in process function.","issue:invalidTokenInParse":"Invalid token in parse function.","warn:negativeFactorial":"Factorial function has negative integer input. Currenly gamma function has not been implemented.","warn:strictBoolean":"Strict boolean configuration is set to true. Boolean to expression conversion is not allowed.","warn:zeroExponentOfZero":"Zero raised to exponent of zero is undefined."},i={about:["about"],clear:["clear"],config:["config"],help:["help"],list:["list"],true:["boolean",!0],false:["boolean",!1],"+":["add","b"],"=":["assign","b"],"&":["bitwiseAnd","b"],"~":["bitwiseNot","r"],"|":["bitwiseOr","b"],"(":["commonBracket","n"],")":["commonBracket","x"],".":["decimal","b"],"/":["divide","b"],"==":["equal","b"],"^":["exponent","b"],"!":["factorial","l"],">":["greater","b"],">=":["greaterEqual","b"],"&&":["logicalAnd","b"],"_!":["logicalNot","r"],"||":["logicalOr","b"],"%":["modulo","b"],"*":["multiply","b"],"_-":["negative","r"],"!=":["notEqual","b"],"_+":["positive","r"],"<<":["shiftLeft","b"],">>":["shiftRight","b"],"<":["smaller","b"],"<=":["smallerEqual","b"],"-":["subtract","b"]};class e{static auto(...t){t=t.map(t=>e.isUndefined(t)?"undefined":e.isNull(t)?"null":e.isBoolean(t)?"boolean":e.isNumber(t)?"number":e.isString(t)?"string":e.isFunction(t)?"function":e.isArray(t)?"array":e.isObject(t)?"object":"");return 1<t.length?t:t[0]}static isUndefined(...t){return t.every(t=>void 0===t)}static isNull(...t){return t.every(t=>null===t)}static isTrue(...t){return t.every(t=>!0===t)}static isFalse(...t){return t.every(t=>!1===t)}static isBoolean(...t){return t.every(t=>"boolean"==typeof t)}static isNumber(...t){return t.every(t=>"number"==typeof t)}static isString(...t){return t.every(t=>"string"==typeof t)}static isFunction(...t){return t.every(t=>"function"==typeof t)}static isArray(...t){return t.every(t=>t instanceof Array)}static isObject(...t){return t.every(t=>t instanceof Object)}static isClass(e,...t){return t.every(t=>t instanceof e)}}var t=e,r={developmentMode:!1,promptShowRuntime:!1,promptShowSteps:!1,strictBoolean:!0,testMode:!1},l={name:"@onenylxus/lime",version:"0.1.2",description:"Mathematics computation engine",author:"Lime Project Team",license:"MIT",keywords:["javascript","mathematics"],main:"dist/bundle.js",module:"dist/bundle-cjs.js",browser:"dist/bundle-esm.js",sideEffects:!1,dependencies:{},devDependencies:{"@rollup/plugin-commonjs":"^18.1.0","@rollup/plugin-json":"^4.1.0","@rollup/plugin-node-resolve":"^13.0.0",codecov:"^3.8.2",eslint:"^7.25.0","eslint-config-airbnb-base":"^14.2.1","eslint-plugin-import":"^2.22.1",husky:"^6.0.0",jest:"^26.6.3","lint-staged":"^10.5.4","prettier-eslint":"^12.0.0","prettier-eslint-cli":"^5.0.1",rimraf:"^3.0.2",rollup:"^2.47.0","rollup-plugin-node-polyfills":"^0.2.1","rollup-plugin-uglify":"^5.0.2"},scripts:{lint:"prettier-eslint '**/*.js'",clean:"rimraf dist/*.js",debug:"node examples/prompt.js -q",prebuild:"yarn lint && yarn clean",build:"rollup -c",watch:"jest --config jest.config.json --watch",pretest:"yarn build",test:"jest --config jest.config.json --verbose"},husky:{hooks:{"pre-commit":"yarn test"}},repository:{type:"git",url:"git+https://github.com/onenylxus/lime.git"},bugs:{url:"https://github.com/onenylxus/lime/issues"},homepage:"https://github.com/onenylxus/lime#readme"};var n=function(){const t=l;return`Lime version ${t.version}\n${t.description}\n2021 ${t.author}, ${t.license} license\n${t.homepage.slice(0,-7)}`},a=class{constructor(t,{...e}){this.lime=t,this.name=e.hasOwnProperty("name")?e.name:this.constructor.name.slice(11),this.description=e.hasOwnProperty("description")?e.description:"",this.operations=new Map}execute(t){var e=t.split(/\s/).slice(1),t=e.length;if(!this.operations.has(t))throw new Error("error:invalidParametersInCommand");return this.operations.get(t)(...e)}};class o extends a{constructor(t){super(t,{name:"about",description:"show information about the engine"}),this.operations.set(0,()=>n())}}class c extends a{constructor(t){super(t,{name:"clear",description:"clear variables and memory"}),this.operations.set(0,()=>(this.lime.variables=new Map,this.lime.memory=[],"Cleared"))}}class h extends a{constructor(t){super(t,{name:"config",description:"view and modify engine configurations"}),this.operations.set(1,t=>{if(!this.lime.config.hasOwnProperty(t))throw new Error("error:invalidConfigProperty");return`${t}: ${this.lime.config[t]}`}),this.operations.set(2,(t,e)=>{if(!this.lime.config.hasOwnProperty(t))throw new Error("error:invalidConfigProperty");var r=this.lime.config[t];return this.lime.config[t]=this.lime.direct([e]).value,`${t}: ${r} > ${this.lime.config[t]}`})}}class u extends a{constructor(t){super(t,{name:"help",description:"list all available commands"}),this.operations.set(0,()=>{const r=["Below is a list of available commands:"];return this.lime.module.forEach(t=>{try{var e=new t(this.lime);e instanceof a&&r.push(`${e.name}: ${e.description}`)}catch(t){}}),r.join("\n")})}}class m extends a{constructor(t){super(t,{name:"list",description:"list specified engine property"}),this.operations.set(1,t=>{switch(t){case"config":return this.lime.config;case"module":return this.lime.module;case"variable":return Object.fromEntries(this.lime.variables);case"memory":return this.lime.memory;default:throw new Error("error:invalidListProperty")}})}}var b=t;var d=class{constructor(t,{...e}){this.lime=t,this.isSimple=!e.hasOwnProperty("isSimple")||!b.isBoolean(e.isSimple)||e.isSimple}};class p extends d{constructor(t,e){super(t,{isSimple:!0}),this.raw=e}get value(){return!!this.raw}toInteger(){if(this.lime.config.strictBoolean)throw new Error("warn:strictBoolean");return this.lime.direct([+this.value])}simplify(){return this.lime.build("boolean")(this.value)}print(){return this.value?"true":"false"}}class g extends d{constructor(t,e){if(super(t,{isSimple:!0}),!b.isNumber(+e))throw new Error("issue:invalidExpressionInConstruct");this.string=`${e}`}get value(){return Math.trunc(+this.string)}toBoolean(){return this.lime.build("boolean")(this.value)}toRational(){return this.lime.build("rational")(this,this.lime.build("integer")(1))}simplify(){return this.lime.build("integer")(this.value)}print(){return`${this.value}`}}class f extends d{constructor(t,e,r){if(super(t,{isSimple:!0}),!this.lime.identify("integer")(e,r))throw new Error("issue:invalidExpressionInConstruct");this.nPlace=e,this.dPlace=r}get value(){return{n:this.nPlace.value,d:this.dPlace.value}}toBoolean(){return this.lime.build("boolean")(this.value.n/this.value.d)}simplify(){return this.value.d<0&&(this.nPlace=this.lime.direct(["-",this.nPlace]),this.dPlace=this.lime.direct(["-",this.dPlace])),1===this.value.d?this.nPlace.simplify():this.lime.build("rational")(this.nPlace.simplify(),this.dPlace.simplify())}print(){return`${this.value.n}/${this.value.d}`}}class v extends d{constructor(t,e){super(t,{isSimple:!0}),this.key=e}get value(){if(!this.lime.variables.has(this.key))throw new Error("error:undefinedVariable");return this.lime.variables.get(this.key)}simplify(){return this.value.simplify()}}var y=[["assign","equal","greater","greaterEqual","notEqual","smaller","smallerEqual"],["add","bitwiseAnd","bitwiseNot","bitwiseOr","logicalAnd","logicalNot","logicalOr","modulo","shiftLeft","shiftRight","subtract"],["divide","multiply"],["exponent"],["decimal","negative","positive"],["factorial"],["commonBracket"]],x={cond:{"b(bool,bool)":t=>t.bpi("boolean"),"b(int,int)":t=>t.bpi("integer"),"b(int,rat)":t=>t.lpi("integer")&&t.rpi("rational"),"b(rat,int)":t=>t.lpi("rational")&&t.rpi("integer"),"b(rat,rat)":t=>t.bpi("rational"),"b(var,expr)":t=>t.lpi("variable")&&t.rpi("expression"),"l(bool)":t=>t.lpi("boolean"),"l(int)":t=>t.lpi("integer"),"l(var)":t=>t.lpi("variable"),"l(!bool)":t=>!t.lpi("boolean"),"n()":()=>!0,"r(bool)":t=>t.rpi("boolean"),"r(int)":t=>t.rpi("integer"),"r(rat)":t=>t.rpi("rational"),"r(var)":t=>t.rpi("variable"),"r(!bool)":t=>!t.rpi("boolean"),"r(+)":t=>t.rpi("add"),"r(=)":t=>t.rpi("assign"),"r(&)":t=>t.rpi("bitwiseAnd"),"r(|)":t=>t.rpi("bitwiseOr"),"r(!)":t=>t.rpi("factorial"),"r(>)":t=>t.rpi("greater"),"r(_-)":t=>t.rpi("negative"),"r(_+)":t=>t.rpi("positive"),"r(<)":t=>t.rpi("smaller"),"r(-)":t=>t.rpi("subtract"),"z()":t=>0===t.pos},act:{"f(==)":t=>{t.rus(t.lime.refer("=="))},"f(!==)":t=>{t.rus(t.lime.refer("!"),t.lime.refer("=="))},"f(>=)":t=>{t.rus(t.lime.refer(">="))},"f(&&)":t=>{t.rus(t.lime.refer("&&"))},"f(_!)":t=>{t.fs(t.lime.refer("_!"))},"f(||)":t=>{t.rus(t.lime.refer("||"))},"f(_-)":t=>{t.fs(t.lime.refer("_-"))},"f(!=)":t=>{t.rus(t.lime.refer("!="))},"f(_+)":t=>{t.fs(t.lime.refer("_+"))},"f(<<)":t=>{t.rus(t.lime.refer("<<"))},"f(>>)":t=>{t.rus(t.lime.refer(">>"))},"f(<=)":t=>{t.rus(t.lime.refer("<="))},"l(expr->int)":t=>{t.lps(t.left.toInteger())},"l(expr->rat)":t=>{t.lps(t.left.toRational())},"l(var->expr)":t=>{t.lps(t.left.value)},"l(!bool->bool)":t=>{t.lps(t.left.toBoolean())},"r(expr->int)":t=>{t.rps(t.right.toInteger())},"r(expr->rat)":t=>{t.rps(t.right.toRational())},"r(var->expr)":t=>{t.rps(t.right.value)},"r(!bool->bool)":t=>{t.rps(t.right.toBoolean())},"r(_!)":t=>{t.rps(t.lime.refer("_!"))},"r(_-)":t=>{t.rps(t.lime.refer("_-"))},"r(_+)":t=>{t.rps(t.lime.refer("_+"))}},pair:{"cb(int->rat,rat)":["b(int,rat)","l(expr->rat)"],"cb(rat,int->rat)":["b(rat,int)","r(expr->rat)"],"cl(bool->int)":["l(bool)","l(expr->int)"],"cl(var->expr)":["l(var)","l(var->expr)"],"cl(!bool->bool)":["l(!bool)","l(!bool->bool)"],"cr(bool->int)":["r(bool)","r(expr->int)"],"cr(var->expr)":["r(var)","r(var->expr)"],"cr(!bool->bool)":["r(!bool)","r(!bool->bool)"],"tf(==)":["r(=)","f(==)"],"tf(!==)":["r(=)","f(!==)"],"tf(>=)":["r(=)","f(>=)"],"tf(&&)":["r(&)","f(&&)"],"tf(||)":["r(|)","f(||)"],"tf(!=)":["r(=)","f(!=)"],"tf(<<)":["r(<)","f(<<)"],"tf(>>)":["r(>)","f(>>)"],"tf(<=)":["r(=)","f(<=)"],"tr(_!)":["r(!)","r(_!)"],"tr(_+)":["r(+)","r(_+)"],"tr(_-)":["r(-)","r(_-)"],"tz(_!)":["z()","f(_!)"],"tz(_+)":["z()","f(_+)"],"tz(_-)":["z()","f(_-)"]}};var w=class{constructor(t,{...e}){this.lime=t,this.mode=e.hasOwnProperty("mode")&&["l","r","b","n"].includes(e.mode)?e.mode:"x",this.name=e.hasOwnProperty("name")?e.name:this.constructor.name.slice(12),this.operations={l:[],r:[],b:[],n:[]},this.algorithms=new Map}get order(){for(let t=0;t<y.length;t++)if(y[t].includes(this.name))return t;throw new Error("issue:invalidFunctionOrder")}evaluate(i){if("x"===this.mode)throw new Error("error:unmatchedBrackets");const s=this.operations[this.mode];for(let r=0;r<s.length;r++){let t,e;if(b.isString(s[r])&&(t="e"===s[r][0]?x.cond[s[r].substring(1)]:x.cond[x.pair[s[r]][0]],e="e"===s[r][0]?this.algorithms.get(s[r].substring(1)):x.act[x.pair[s[r]][1]]),t(i))return e(i),i}throw new Error("error:functionAgreement")}};class _ extends w{constructor(t,e){super(t,{name:"add",mode:e}),this.operations.b=["tz(_+)","tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",t=>{t.bs(this.lime.build("integer")(t.left.value+t.right.value))}),this.algorithms.set("b(rat,rat)",t=>{t.bs(this.lime.build("rational")(this.lime.direct([t.left.nPlace,"*",t.right.dPlace,"+",t.right.nPlace,"*",t.left.dPlace]),this.lime.direct([t.left.dPlace,"*",t.right.dPlace])))})}}class P extends w{constructor(t,e){super(t,{name:"decimal",mode:e}),this.operations.b=["eb(int,int)"],this.algorithms.set("b(int,int)",t=>{var e;0<t.right.value?(e=this.lime.direct([10,"^",t.right.string.length]),t.bs(this.lime.direct(["(",t.left,"*",e,"+",t.right,")","/",e]))):t.bs(t.left)})}}class E extends w{constructor(t,e){super(t,{name:"divide",mode:e}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",t=>{t.left.value%t.right.value==0?t.bs(this.lime.build("integer")(t.left.value/t.right.value)):t.bs(this.lime.build("rational")(t.left,t.right))}),this.algorithms.set("b(rat,rat)",t=>{t.bs(this.lime.build("rational")(this.lime.direct([t.left.nPlace,"*",t.right.dPlace]),this.lime.direct([t.left.dPlace,"*",t.right.nPlace])))})}}class I extends w{constructor(t,e){super(t,{name:"exponent",mode:e}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","eb(int,int)","eb(rat,int)"],this.algorithms.set("b(int,int)",t=>{if(0<=t.right.value){if(0===t.left.value&&0===t.right.value)throw new Error("warn:zeroExponentOfZero");t.bs(this.lime.build("integer")(t.left.value**t.right.value))}else t.bs(this.lime.build("rational")(this.lime.direct([1]),this.lime.direct([t.left,"^","-",t.right])))}),this.algorithms.set("b(rat,int)",t=>{0<=t.right.value?t.bs(this.lime.build("rational")(this.lime.direct([t.left.nPlace,"^",t.right]),this.lime.direct([t.left.dPlace,"^",t.right]))):t.bs(this.lime.build("rational")(this.lime.direct([t.left.dPlace,"^","-",t.right]),this.lime.direct([t.left.nPlace,"^","-",t.right])))})}}class k extends w{constructor(t,e){super(t,{name:"modulo",mode:e}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","eb(int,int)"],this.algorithms.set("b(int,int)",t=>{t.bs(this.lime.build("integer")(t.left.value%t.right.value))})}}class O extends w{constructor(t,e){super(t,{name:"multiply",mode:e}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",t=>{t.bs(this.lime.build("integer")(t.left.value*t.right.value))}),this.algorithms.set("b(rat,rat)",t=>{t.bs(this.lime.build("rational")(this.lime.direct([t.left.nPlace,"*",t.right.nPlace]),this.lime.direct([t.left.dPlace,"*",t.right.dPlace])))})}}class S extends w{constructor(t,e){super(t,{name:"negative",mode:e}),this.operations.r=["tr(_!)","tr(_+)","tr(_-)","cr(var->expr)","cr(bool->int)","er(int)","er(rat)","er(_+)","er(_-)"],this.algorithms.set("r(int)",t=>{t.rus(this.lime.direct([-1,"*",t.right]))}),this.algorithms.set("r(rat)",t=>{t.rus(this.lime.build("rational")(this.lime.direct(["-",t.right.nPlace]),t.right.dPlace))}),this.algorithms.set("r(_+)",t=>{t.rus(this.lime.refer("_-"))}),this.algorithms.set("r(_-)",t=>{t.rus(this.lime.refer("_+"))})}}class j extends w{constructor(t,e){super(t,{name:"positive",mode:e}),this.operations.r=["tr(_!)","tr(_+)","tr(_-)","cr(var->expr)","cr(bool->int)","er(int)","er(rat)","er(_+)","er(_-)"],this.algorithms.set("r(int)",t=>{t.rus(this.lime.direct([1,"*",t.right]))}),this.algorithms.set("r(rat)",t=>{t.rus(this.lime.build("rational")(this.lime.direct([t.right.nPlace]),t.right.dPlace))}),this.algorithms.set("r(_+)",t=>{t.rus(this.lime.refer("_+"))}),this.algorithms.set("r(_-)",t=>{t.rus(this.lime.refer("_-"))})}}class B extends w{constructor(t,e){super(t,{name:"subtract",mode:e}),this.operations.b=["tz(_-)","tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",t=>{t.bs(this.lime.build("integer")(t.left.value-t.right.value))}),this.algorithms.set("b(rat,rat)",t=>{t.bs(this.lime.build("rational")(this.lime.direct([t.left.nPlace,"*",t.right.dPlace,"-",t.right.nPlace,"*",t.left.dPlace]),this.lime.direct([t.left.dPlace,"*",t.right.dPlace])))})}}class $ extends w{constructor(t,e){super(t,{name:"bitwiseAnd",mode:e}),this.operations.b=["tf(&&)","tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","eb(int,int)"],this.algorithms.set("b(int,int)",t=>{t.bs(this.lime.direct([t.left.value&t.right.value]))})}}class q extends w{constructor(t,e){super(t,{name:"bitwiseNot",mode:e}),this.operations.r=["tr(_!)","tr(_+)","tr(_-)","cr(var->expr)","cr(bool->int)","er(int)"],this.algorithms.set("r(int)",t=>{t.rus(this.lime.direct([~t.right.value]))})}}class N extends w{constructor(t,e){super(t,{name:"bitwiseOr",mode:e}),this.operations.b=["tf(||)","tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","eb(int,int)"],this.algorithms.set("b(int,int)",t=>{t.bs(this.lime.direct([t.left.value|t.right.value]))})}}class A extends w{constructor(t,e){super(t,{name:"shiftLeft",mode:e}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","eb(int,int)"],this.algorithms.set("b(int,int)",t=>{t.bs(this.lime.direct([t.left.value<<t.right.value]))})}}class M extends w{constructor(t,e){super(t,{name:"shiftRight",mode:e}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","eb(int,int)"],this.algorithms.set("b(int,int)",t=>{t.bs(this.lime.direct([t.left.value>>t.right.value]))})}}class z extends w{constructor(t,e){super(t,{name:"equal",mode:e}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",t=>{t.bs(this.lime.build("boolean")(t.left.value===t.right.value))}),this.algorithms.set("b(rat,rat)",t=>{t.bs(this.lime.direct([t.left.nPlace,"*",t.right.dPlace,"==",t.right.nPlace,"*",t.left.dPlace]))})}}class C extends w{constructor(t,e){super(t,{name:"greater",mode:e}),this.operations.b=["tf(>=)","tf(>>)","tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",t=>{t.bs(this.lime.build("boolean")(t.left.value>t.right.value))}),this.algorithms.set("b(rat,rat)",t=>{t.bs(this.lime.direct([t.left.nPlace,"*",t.right.dPlace,">",t.right.nPlace,"*",t.left.dPlace]))})}}class L extends w{constructor(t,e){super(t,{name:"greaterEqual",mode:e}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",t=>{t.bs(this.lime.build("boolean")(t.left.value>=t.right.value))}),this.algorithms.set("b(rat,rat)",t=>{t.bs(this.lime.direct([t.left.nPlace,"*",t.right.dPlace,">=",t.right.nPlace,"*",t.left.dPlace]))})}}class R extends w{constructor(t,e){super(t,{name:"notEqual",mode:e}),this.operations.b=["tf(!==)","tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",t=>{t.bs(this.lime.build("boolean")(t.left.value!==t.right.value))}),this.algorithms.set("b(rat,rat)",t=>{t.bs(this.lime.direct([t.left.nPlace,"*",t.right.dPlace,"!=",t.right.nPlace,"*",t.left.dPlace]))})}}class F extends w{constructor(t,e){super(t,{name:"smaller",mode:e}),this.operations.b=["tf(<=)","tf(<<)","tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",t=>{t.bs(this.lime.build("boolean")(t.left.value<t.right.value))}),this.algorithms.set("b(rat,rat)",t=>{t.bs(this.lime.direct([t.left.nPlace,"*",t.right.dPlace,"<",t.right.nPlace,"*",t.left.dPlace]))})}}class D extends w{constructor(t,e){super(t,{name:"smallerEqual",mode:e}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",t=>{t.bs(this.lime.build("boolean")(t.left.value<=t.right.value))}),this.algorithms.set("b(rat,rat)",t=>{t.bs(this.lime.direct([t.left.nPlace,"*",t.right.dPlace,"<=",t.right.nPlace,"*",t.left.dPlace]))})}}class T extends w{constructor(t,e){super(t,{name:"factorial",mode:e}),this.operations.l=["tz(_!)","tf(!=)","cl(var->expr)","cl(bool->int)","el(int)"],this.algorithms.set("l(int)",t=>{if(t.left.value<0)throw new Error("warn:negativeFactorial");0<t.left.value?t.lus(this.lime.direct([t.left,"*","(",t.left,"-",1,")","!"])):t.lus(this.lime.direct([1]))})}}class U extends w{constructor(t,e){super(t,{name:"logicalAnd",mode:e}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(!bool->bool)","cr(!bool->bool)","eb(bool,bool)"],this.algorithms.set("b(bool,bool)",t=>{t.bs(this.lime.build("boolean")(t.left.value&&t.right.value))})}}class V extends w{constructor(t,e){super(t,{name:"logicalNot",mode:e}),this.operations.r=["tr(_!)","tr(_+)","tr(_-)","cr(var->expr)","cr(!bool->bool)","er(bool)"],this.algorithms.set("r(bool)",t=>{t.rus(this.lime.build("boolean")(!t.right.value))})}}class Z extends w{constructor(t,e){super(t,{name:"logicalOr",mode:e}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(!bool->bool)","cr(!bool->bool)","eb(bool,bool)"],this.algorithms.set("b(bool,bool)",t=>{t.bs(this.lime.build("boolean")(t.left.value||t.right.value))})}}class G extends w{constructor(t,e){super(t,{name:"assign",mode:e}),this.operations.b=["tf(==)","tr(_+)","tr(_-)","cr(var->expr)","eb(var,expr)"],this.algorithms.set("b(var,expr)",t=>{this.lime.variables.set(t.left.key,t.right),t.bs(t.left)})}}class H extends w{constructor(t,e){super(t,{name:"commonBracket",mode:e}),this.operations.n=["en()"],this.algorithms.set("n()",t=>{const e=t["data"],r=[];let i=t.pos,s=0;for(;i+1<e.length&&!(this.lime.identify("commonBracket")(e[i+1])&&(s+="n"===e[i+1].mode?1:-1,s<0));)r.push(e[++i]);if(0<=s)throw new Error("error:unmatchedBrackets");t.ns(r.length+2,this.lime.direct([...r]))})}}var J=o,K=c,Q=h,W=u,X=m,Y=p,tt=g,et=f,rt=v,it=_,st=P,lt=E,nt=I,at=k,ot=O,ct=S,ht=j,ut=B,mt=$,bt=q,dt=N,pt=A,gt=M,ft=z,vt=C,yt=L,xt=R,wt=F,_t=D,Pt=T,Et=U,It=V,kt=Z,Ot=G,St=H,jt=class{constructor(t,e){this.lime=t,this.input=e,this.solution=[]}get steps(){return this.solution.length}get runtime(){return this.solution[this.steps-1].timestamp-this.solution[0].timestamp}get result(){return this.solution[this.steps-1].data}record(t){this.lime.config.promptShowSteps&&console.log(t.data),this.solution.push(t)}},Bt=class{constructor(t,e,r){this.lime=t,this.data=b.isArray(e)?e:[],this.pos=b.isNumber(r)&&0<=r&&r<this.data.length?r:-1,this.timestamp=Date.now()}get left(){return this.data[this.pos-1]}get func(){return this.data[this.pos]}get right(){return this.data[this.pos+1]}lpi(...t){return this.lime.identify(...t)(this.left)}fi(...t){return this.lime.identify(...t)(this.func)}rpi(...t){return this.lime.identify(...t)(this.right)}bpi(...t){return this.lime.identify(...t)(this.left,this.right)}lps(...t){this.data.splice(this.pos-1,1,...t)}fs(...t){this.data.splice(this.pos,1,...t)}rps(...t){this.data.splice(this.pos+1,1,...t)}lus(...t){this.data.splice(this.pos-1,2,...t)}rus(...t){this.data.splice(this.pos,2,...t)}bs(...t){this.data.splice(this.pos-1,3,...t)}ns(t,...e){this.data.splice(this.pos,t,...e)}},t=class{constructor(t,e,r){this.lime=t,this.type=["integer","whitespace","symbol","variable"].includes(e)?e:"symbol",this.value=b.isString(r)?r:""}};const $t=new Map;$t.set("about",J),$t.set("clear",K),$t.set("config",Q),$t.set("help",W),$t.set("list",X),$t.set("boolean",Y),$t.set("integer",tt),$t.set("rational",et),$t.set("variable",rt),$t.set("add",it),$t.set("decimal",st),$t.set("divide",lt),$t.set("exponent",nt),$t.set("modulo",at),$t.set("multiply",ot),$t.set("negative",ct),$t.set("positive",ht),$t.set("subtract",ut),$t.set("bitwiseAnd",mt),$t.set("bitwiseNot",bt),$t.set("bitwiseOr",dt),$t.set("shiftLeft",pt),$t.set("shiftRight",gt),$t.set("equal",ft),$t.set("greater",vt),$t.set("greaterEqual",yt),$t.set("notEqual",xt),$t.set("smaller",wt),$t.set("smallerEqual",_t),$t.set("factorial",Pt),$t.set("logicalAnd",Et),$t.set("logicalNot",It),$t.set("logicalOr",kt),$t.set("assign",Ot),$t.set("commonBracket",St),$t.set("command",a),$t.set("equation",jt),$t.set("expression",d),$t.set("function",w),$t.set("step",Bt),$t.set("token",t);var qt=$t;class Nt{constructor(t){this.config={...r,...t},this.module=qt,this.variables=new Map,this.memory=[]}get answer(){return this.variables.get("ans").print()}prompt(t){try{return this.run(t)}catch(t){return this.message(t)}}evaluate(t){try{return this.run(t)}catch(t){return console.log(this.message(t)),""}}run(t){if(!b.isString(t))throw new Error("error:inputNotStringInPrompt");if(0===t.length)throw new Error("error:inputEmptyInPrompt");this.variables.has("ans")||this.variables.set("ans",this.direct([0]));const e=this.build("equation")(t);return this.lex(e),this.identify("command")(e.result[0])?e.result[0].execute(t):(this.memory.push(e),this.config.promptShowRuntime&&console.log(`Equation runtime: ${e.runtime/1e3}s`),this.variables.set("ans",e.result[0]),this.answer)}direct(t){try{if(!b.isArray(t))throw new Error("error:inputNotArrayInDirect");if(0===t.length)throw new Error("error:inputEmptyInDirect");const e=this.build("equation")(t);return e.record(this.build("step")(e.input.map(t=>!b.isString(t)&&!b.isNumber(t)||b.isUndefined(this.refer(t))?t:this.refer(t)))),this.process(e),e.result[0]}catch(t){return this.config.testMode?this.message(t):void console.log(this.message(t))}}message(t){var e=new Error("issue:invalidMessage");if(!s.hasOwnProperty(t.message)||!t.message.includes(":"))return console.log(t),this.message(e);var r=t.message.split(":");let i;switch(r[0]){case"error":i="!";break;case"warn":i="?";break;case"issue":i="i";break;default:return this.message(e)}return this.config.developmentMode&&"i"===i&&console.log(t),`[${i}] ${r[1]}\n${s[t.message]} ${"i"===i?`\n${s.github}`:""}`}lex(t){const r=t.input,i=[];for(let e=0;e<r.length;e++){const s=r[e];let t=s;if(s.match(/\s/))i.push(this.build("token")("whitespace"));else if(s.match(/\d/)){for(;e+1<r.length&&r[e+1].match(/\d/);)t+=r[++e];i.push(this.build("token")("integer",t))}else if(s.match(/\w/)){for(;e+1<r.length&&r[e+1].match(/\w/);)t+=r[++e];i.push(this.build("token")("variable",t))}else i.push(this.build("token")("symbol",t))}t.record(i),this.parse(t)}parse(t){const e=t.solution.shift(),r=[];for(let t=0;t<e.length;t++)switch(e[t].type){case"whitespace":break;case"integer":r.push(this.build("integer")(e[t].value));break;case"symbol":case"variable":if(i.hasOwnProperty(e[t].value))r.push(this.refer(e[t].value));else{if("variable"!==e[t].type)throw new Error("error:invalidSymbol");r.push(this.build("variable")(e[t].value))}break;default:throw new Error("issue:invalidTokenInParse")}t.record(this.build("step")(r)),this.identify("command")(t.result[0])||this.process(t)}process(r){for(;;){let e=-1;for(let t=0;t<r.result.length;t++)this.identify("function")(r.result[t])&&(e=e<0||r.result[t].order>r.result[e].order?t:e);if(e<0)break;var t=this.build("step")(r.result,e);r.record(r.result[e].evaluate(t))}if(1!==r.result.length)throw new Error("issue:invalidResultLengthInProcess");r.record(this.build("step")([r.result[0].simplify()]))}identify(...r){if(r.every(t=>this.module.has(t)))return(...t)=>t.every(e=>r.some(t=>b.isClass(this.module.get(t),e)));throw new Error("issue:invalidModuleInIdentify")}build(e){if(this.module.has(e))return(...t)=>new(this.module.get(e))(this,...t);throw new Error("issue:invalidModuleInBuild")}refer(t){return b.isNumber(t)?this.build("integer")(t):i.hasOwnProperty(t)?this.build(i[t][0])(...i[t].slice(1).map(t=>b.isArray(t)?this.build(t[0])(...t.slice(1)):t)):void 0}}return t=>new Nt(t)});
