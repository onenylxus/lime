/*
Lime version 0.2.0
Mathematics computation engine
2021 Lime Project Team, MIT license
https://github.com/onenylxus/lime
*/

"use strict";var github="Please create a GitHub issue about how you received this message, thank you. ",Message={github:github,"error:emptyArgumentInSimplify":"Empty argument in simplify function.","error:invalidParametersInCommand":"Invalid parameters in command.","error:functionAgreement":"Function does not agree with parameter types.","error:inputEmptyInDirect":"Direct input is empty.","error:inputEmptyInPrompt":"Prompt input is empty.","error:inputNotArrayInDirect":"Direct input is not an array.","error:inputNotStringInPrompt":"Prompt input is not a string.","error:invalidConfigProperty":"Invalid configuration property in config command","error:invalidListProperty":"Invalid list property in list command","error:invalidSymbol":"Invalid symbol in prompt input.","error:undefinedVariable":"Variable is undefined but used.","error:unmatchedBrackets":"Some brackets are unmatched.","issue:invalidExpressionInConstruct":"Invalid expression in constructor.","issue:invalidFunctionOrder":"Invalid function order.","issue:invalidMessage":"Invalid message detected.","issue:invalidModuleInBuild":"Invalid module in build function.","issue:invalidModuleInIdentify":"Invalid module in identify function.","issue:invalidResultLengthInProcess":"Invalid result length in process function.","issue:invalidTokenInParse":"Invalid token in parse function.","warn:negativeFactorial":"Factorial function has negative integer input. Currenly gamma function has not been implemented.","warn:strictBoolean":"Strict boolean configuration is set to true. Boolean to expression conversion is not allowed.","warn:zeroExponentOfZero":"Zero raised to exponent of zero is undefined."},about$1=["about"],clear$1=["clear"],config$1=["config"],help$1=["help"],list$1=["list"],bool=["defineBoolean","r"],int=["defineInteger","r"],rat=["defineRational","r"],Refer={about:about$1,clear:clear$1,config:config$1,help:help$1,list:list$1,false:["boolean",!1],true:["boolean",!0],"()":["argument",null],bool:bool,int:int,rat:rat,"+":["add","b"],"=":["assign","b"],"&":["bitwiseAnd","b"],"~":["bitwiseNot","r"],"|":["bitwiseOr","b"],",":["columnSplit","x"],"(":["commonBracket","n"],")":["commonBracket","x"],".":["decimal","b"],"/":["divide","b"],"==":["equal","b"],"^":["exponent","b"],"!":["factorial","l"],">":["greater","b"],">=":["greaterEqual","b"],"&&":["logicalAnd","b"],"_!":["logicalNot","r"],"||":["logicalOr","b"],"%":["modulo","b"],"*":["multiply","b"],"_-":["negative","r"],"!=":["notEqual","b"],"_+":["positive","r"],"<<":["shiftLeft","b"],">>":["shiftRight","b"],"<":["smaller","b"],"<=":["smallerEqual","b"],"-":["subtract","b"]};class Types$1{static isUndefined(...e){return e.every(e=>void 0===e)}static isNull(...e){return e.every(e=>null===e)}static isTrue(...e){return e.every(e=>!0===e)}static isFalse(...e){return e.every(e=>!1===e)}static isBoolean(...e){return e.every(e=>"boolean"==typeof e)}static isNumber(...e){return e.every(e=>"number"==typeof e)}static isString(...e){return e.every(e=>"string"==typeof e)}static isFunction(...e){return e.every(e=>"function"==typeof e)}static isArray(...e){return e.every(e=>e instanceof Array)}static isObject(...e){return e.every(e=>e instanceof Object)}static isClass(r,...e){return e.every(e=>e instanceof r)}}var types=Types$1,developmentMode=!1,promptShowRuntime=!1,promptShowSteps=!1,strictBoolean=!0,testMode=!1,require$$0$2={developmentMode:developmentMode,promptShowRuntime:promptShowRuntime,promptShowSteps:promptShowSteps,strictBoolean:strictBoolean,testMode:testMode},name="@onenylxus/lime",version="0.2.0",description="Mathematics computation engine",author="Lime Project Team",license="MIT",keywords=["javascript","mathematics"],main="dist/bundle.js",module$2="dist/bundle-cjs.js",browser="dist/bundle-esm.js",sideEffects=!1,dependencies={},devDependencies={"@rollup/plugin-commonjs":"^18.1.0","@rollup/plugin-json":"^4.1.0","@rollup/plugin-node-resolve":"^13.0.0",codecov:"^3.8.2",eslint:"^7.25.0","eslint-config-airbnb-base":"^14.2.1","eslint-plugin-import":"^2.22.1",husky:"^6.0.0",jest:"^26.6.3","lint-staged":"^10.5.4","prettier-eslint":"^12.0.0","prettier-eslint-cli":"^5.0.1",rimraf:"^3.0.2",rollup:"^2.47.0","rollup-plugin-node-polyfills":"^0.2.1","rollup-plugin-uglify":"^5.0.2"},scripts={lint:"prettier-eslint '**/*.js'",clean:"rimraf dist/*.js",debug:"node examples/prompt.js -q",prebuild:"yarn lint && yarn clean",build:"rollup -c",watch:"jest --config jest.config.json --watch",pretest:"yarn build",test:"jest --config jest.config.json --verbose"},husky={hooks:{"pre-commit":"yarn test"}},repository={type:"git",url:"git+https://github.com/onenylxus/lime.git"},bugs={url:"https://github.com/onenylxus/lime/issues"},homepage="https://github.com/onenylxus/lime#readme",require$$0$1={name:name,version:version,description:description,author:author,license:license,keywords:keywords,main:main,module:module$2,browser:browser,sideEffects:sideEffects,dependencies:dependencies,devDependencies:devDependencies,scripts:scripts,husky:husky,repository:repository,bugs:bugs,homepage:homepage};function banner$1(){const e=require$$0$1;return`Lime version ${e.version}\n${e.description}\n2021 ${e.author}, ${e.license} license\n${e.homepage.slice(0,-7)}`}var banner_1=banner$1;class LimeCommand{constructor(e,{...r}){this.lime=e,this.name=r.hasOwnProperty("name")?r.name:this.constructor.name.slice(11),this.description=r.hasOwnProperty("description")?r.description:"",this.operations=new Map}execute(e){var r=e.split(/\s/).slice(1),e=r.length;if(!this.operations.has(e))throw new Error("error:invalidParametersInCommand");return this.operations.get(e)(...r)}}var command=LimeCommand,banner=banner$1,require$$38=command;class LimeCommandAbout extends require$$38{constructor(e){super(e,{name:"about",description:"show information about the engine"}),this.operations.set(0,()=>banner())}}var about=LimeCommandAbout;class LimeCommandClear extends require$$38{constructor(e){super(e,{name:"clear",description:"clear variables and memory"}),this.operations.set(0,()=>(this.lime.variables=new Map,this.lime.memory=[],"Cleared"))}}var clear=LimeCommandClear;class LimeCommandConfig extends require$$38{constructor(e){super(e,{name:"config",description:"view and modify engine configurations"}),this.operations.set(1,e=>{if(!this.lime.config.hasOwnProperty(e))throw new Error("error:invalidConfigProperty");return`${e}: ${this.lime.config[e]}`}),this.operations.set(2,(e,r)=>{if(!this.lime.config.hasOwnProperty(e))throw new Error("error:invalidConfigProperty");var t=this.lime.config[e];return this.lime.config[e]=this.lime.direct([r]).value,`${e}: ${t} > ${this.lime.config[e]}`})}}var config=LimeCommandConfig;class LimeCommandHelp extends require$$38{constructor(e){super(e,{name:"help",description:"list all available commands"}),this.operations.set(0,()=>{const t=["Below is a list of available commands:"];return this.lime.module.forEach(e=>{try{var r=new e(this.lime);r instanceof require$$38&&t.push(`${r.name}: ${r.description}`)}catch(e){}}),t.join("\n")})}}var help=LimeCommandHelp,Types=types;class LimeCommandList extends require$$38{constructor(e){super(e,{name:"list",description:"list specified engine property"}),this.operations.set(1,e=>{if(!this.lime.hasOwnProperty(e)||Types.isFunction(this.lime[e]))throw new Error("error:invalidListProperty");return Types.isClass(Map,this.lime[e])?Object.fromEntries(this.lime[e]):this.lime[e]})}}var list=LimeCommandList;class LimeExpression{constructor(e,{...r}){this.lime=e,this.name=r.hasOwnProperty("name")?r.name:this.constructor.name.slice(12),this.shorthand=r.hasOwnProperty("shorthand")?r.shorthand:"",this.isSimple=!r.hasOwnProperty("isSimple")||!Types.isBoolean(r.isSimple)||r.isSimple}}var expression=LimeExpression,require$$40=LimeExpression;class LimeExpressionArgument extends require$$40{constructor(e,...r){if(super(e,{name:"argument",shorthand:"par",isSimple:!1}),!(this.lime.identify("expression")(...r)||1===r.length&&Types.isNull(r[0])))throw new Error("issue:invalidExpressionInConstruct");this.places=r}get value(){return this.places.map(e=>e.value)}get length(){return this.places.length}get isEmpty(){return Types.isNull(this.places[0])}simplify(){if(this.isEmpty)throw new Error("error:emptyArgumentInSimplify");return 1===this.length?this.places[0].simplify():this.places.map(e=>e.simplify())}}var argument=LimeExpressionArgument;class LimeExpressionBoolean extends require$$40{constructor(e,r){super(e,{name:"boolean",shorthand:"bool",isSimple:!0}),this.raw=r}get value(){return!!this.raw}toInteger(){if(this.lime.config.strictBoolean)throw new Error("warn:strictBoolean");return this.lime.direct([+this.value])}simplify(){return this.lime.build("boolean")(this.value)}print(){return this.value?"true":"false"}}var boolean=LimeExpressionBoolean;class LimeExpressionInteger extends require$$40{constructor(e,r){if(super(e,{name:"integer",shorthand:"int",isSimple:!0}),!Types.isNumber(+r))throw new Error("issue:invalidExpressionInConstruct");this.string=`${r}`}get value(){return Math.trunc(+this.string)}toBoolean(){return this.lime.build("boolean")(this.value)}toRational(){return this.lime.build("rational")(this,this.lime.build("integer")(1))}simplify(){return this.lime.build("integer")(this.value)}print(){return`${this.value}`}}var integer=LimeExpressionInteger;class LimeExpressionRational extends require$$40{constructor(e,r,t){if(super(e,{name:"rational",shorthand:"rat",isSimple:!0}),!this.lime.identify("integer")(r,t))throw new Error("issue:invalidExpressionInConstruct");this.nPlace=r,this.dPlace=t}get value(){return{n:this.nPlace.value,d:this.dPlace.value}}toBoolean(){return this.lime.build("boolean")(this.value.n/this.value.d)}simplify(){return this.value.d<0&&(this.nPlace=this.lime.direct(["-",this.nPlace]),this.dPlace=this.lime.direct(["-",this.dPlace])),1===this.value.d?this.nPlace.simplify():this.lime.build("rational")(this.nPlace.simplify(),this.dPlace.simplify())}print(){return`${this.value.n}/${this.value.d}`}}var rational=LimeExpressionRational;class LimeExpressionVariable extends require$$40{constructor(e,r){super(e,{name:"variable",shorthand:"var",isSimple:!0}),this.key=r}get value(){if(!this.lime.variables.has(this.key))throw new Error("error:undefinedVariable");return this.lime.variables.get(this.key)}simplify(){return this.value.simplify()}}var variable=LimeExpressionVariable;const Oplist$1={cond:{"b(bool,bool)":e=>e.bpi("boolean"),"b(expr,expr)":e=>e.bpi("expression"),"b(int,int)":e=>e.bpi("integer"),"b(int,rat)":e=>e.lpi("integer")&&e.rpi("rational"),"b(rat,int)":e=>e.lpi("rational")&&e.rpi("integer"),"b(rat,rat)":e=>e.bpi("rational"),"b(var,expr)":e=>e.lpi("variable")&&e.rpi("expression"),"l(arg{expr})":e=>e.lpi("argument")&&1===e.left.length&&e.ci("expression")(e.left.places[0]),"l(bool)":e=>e.lpi("boolean"),"l(int)":e=>e.lpi("integer"),"l(var)":e=>e.lpi("variable"),"l(!bool)":e=>!e.lpi("boolean"),"n()":()=>!0,"r(arg{expr})":e=>e.rpi("argument")&&1===e.right.length&&e.ci("expression")(e.right.places[0]),"r(bool)":e=>e.rpi("boolean"),"r(int)":e=>e.rpi("integer"),"r(rat)":e=>e.rpi("rational"),"r(var)":e=>e.rpi("variable"),"r(!bool)":e=>!e.rpi("boolean"),"r(+)":e=>e.rpi("add"),"r(=)":e=>e.rpi("assign"),"r(&)":e=>e.rpi("bitwiseAnd"),"r(|)":e=>e.rpi("bitwiseOr"),"r(!)":e=>e.rpi("factorial"),"r(>)":e=>e.rpi("greater"),"r(_-)":e=>e.rpi("negative"),"r(_+)":e=>e.rpi("positive"),"r(<)":e=>e.rpi("smaller"),"r(-)":e=>e.rpi("subtract"),"z()":e=>0===e.pos},act:{"f(==)":e=>{e.rus(e.lime.refer("=="))},"f(!==)":e=>{e.rus(e.lime.refer("!"),e.lime.refer("=="))},"f(>=)":e=>{e.rus(e.lime.refer(">="))},"f(&&)":e=>{e.rus(e.lime.refer("&&"))},"f(_!)":e=>{e.fs(e.lime.refer("_!"))},"f(||)":e=>{e.rus(e.lime.refer("||"))},"f(_-)":e=>{e.fs(e.lime.refer("_-"))},"f(!=)":e=>{e.rus(e.lime.refer("!="))},"f(_+)":e=>{e.fs(e.lime.refer("_+"))},"f(<<)":e=>{e.rus(e.lime.refer("<<"))},"f(>>)":e=>{e.rus(e.lime.refer(">>"))},"f(<=)":e=>{e.rus(e.lime.refer("<="))},"l(arg{expr}->expr)":e=>{e.lps(e.left.simplify())},"l(expr->int)":e=>{e.lps(e.left.toInteger())},"l(expr->rat)":e=>{e.lps(e.left.toRational())},"l(var->expr)":e=>{e.lps(e.left.value)},"l(!bool->bool)":e=>{e.lps(e.left.toBoolean())},"r(arg{expr}->expr)":e=>{e.rps(e.right.simplify())},"r(expr->int)":e=>{e.rps(e.right.toInteger())},"r(expr->rat)":e=>{e.rps(e.right.toRational())},"r(var->expr)":e=>{e.rps(e.right.value)},"r(!bool->bool)":e=>{e.rps(e.right.toBoolean())},"r(_!)":e=>{e.rps(e.lime.refer("_!"))},"r(_-)":e=>{e.rps(e.lime.refer("_-"))},"r(_+)":e=>{e.rps(e.lime.refer("_+"))}},pair:{"cb(int->rat,rat)":["b(int,rat)","l(expr->rat)"],"cb(rat,int->rat)":["b(rat,int)","r(expr->rat)"],"cl(arg{expr}->expr)":["l(arg{expr})","l(arg{expr}->expr)"],"cl(bool->int)":["l(bool)","l(expr->int)"],"cl(var->expr)":["l(var)","l(var->expr)"],"cl(!bool->bool)":["l(!bool)","l(!bool->bool)"],"cr(arg{expr}->expr)":["r(arg{expr})","r(arg{expr}->expr)"],"cr(bool->int)":["r(bool)","r(expr->int)"],"cr(var->expr)":["r(var)","r(var->expr)"],"cr(!bool->bool)":["r(!bool)","r(!bool->bool)"],"tf(==)":["r(=)","f(==)"],"tf(!==)":["r(=)","f(!==)"],"tf(>=)":["r(=)","f(>=)"],"tf(&&)":["r(&)","f(&&)"],"tf(||)":["r(|)","f(||)"],"tf(!=)":["r(=)","f(!=)"],"tf(<<)":["r(<)","f(<<)"],"tf(>>)":["r(>)","f(>>)"],"tf(<=)":["r(=)","f(<=)"],"tr(_!)":["r(!)","r(_!)"],"tr(_+)":["r(+)","r(_+)"],"tr(_-)":["r(-)","r(_-)"],"tz(_!)":["z()","f(_!)"],"tz(_+)":["z()","f(_+)"],"tz(_-)":["z()","f(_-)"]}};var oplist=Oplist$1,Order=[["assign","equal","greater","greaterEqual","notEqual","smaller","smallerEqual"],["add","bitwiseAnd","bitwiseNot","bitwiseOr","logicalAnd","logicalNot","logicalOr","modulo","shiftLeft","shiftRight","subtract"],["divide","multiply"],["exponent"],["decimal","negative","positive"],["factorial","omitted"],["commonBracket"]],Oplist=oplist;class LimeFunction{constructor(e,{...r}){this.lime=e,this.mode=r.hasOwnProperty("mode")&&["l","r","b","n"].includes(r.mode)?r.mode:"x",this.name=r.hasOwnProperty("name")?r.name:this.constructor.name.slice(12),this.operations={l:[],r:[],b:[],n:[]},this.algorithms=new Map}get order(){for(let e=0;e<Order.length;e++)if(Order[e].includes(this.name))return e;throw new Error("issue:invalidFunctionOrder")}evaluate(i){if("x"===this.mode)throw new Error("error:unmatchedBrackets");const s=this.operations[this.mode];for(let t=0;t<s.length;t++){let e,r;if(Types.isString(s[t])&&(e="e"===s[t][0]?Oplist.cond[s[t].substring(1)]:Oplist.cond[Oplist.pair[s[t]][0]],r="e"===s[t][0]?this.algorithms.get(s[t].substring(1)):Oplist.act[Oplist.pair[s[t]][1]]),e(i))return r(i),i}throw new Error("error:functionAgreement")}}var _function=LimeFunction,require$$41=LimeFunction;class LimeFunctionAdd extends require$$41{constructor(e,r){super(e,{name:"add",mode:r}),this.operations.b=["tz(_+)","tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(arg{expr}->expr)","cr(arg{expr}->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.build("integer")(e.left.value+e.right.value))}),this.algorithms.set("b(rat,rat)",e=>{e.bs(this.lime.build("rational")(this.lime.direct([e.left.nPlace,"*",e.right.dPlace,"+",e.right.nPlace,"*",e.left.dPlace]),this.lime.direct([e.left.dPlace,"*",e.right.dPlace])))})}}var add=LimeFunctionAdd;class LimeFunctionDecimal extends require$$41{constructor(e,r){super(e,{name:"decimal",mode:r}),this.operations.b=["eb(int,int)"],this.algorithms.set("b(int,int)",e=>{var r;0<e.right.value?(r=this.lime.direct([10,"^",e.right.string.length]),e.bs(this.lime.direct(["(",e.left,"*",r,"+",e.right,")","/",r]))):e.bs(e.left)})}}var decimal=LimeFunctionDecimal;class LimeFunctionDivide extends require$$41{constructor(e,r){super(e,{name:"divide",mode:r}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(arg{expr}->expr)","cr(arg{expr}->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",e=>{e.left.value%e.right.value==0?e.bs(this.lime.build("integer")(e.left.value/e.right.value)):e.bs(this.lime.build("rational")(e.left,e.right))}),this.algorithms.set("b(rat,rat)",e=>{e.bs(this.lime.build("rational")(this.lime.direct([e.left.nPlace,"*",e.right.dPlace]),this.lime.direct([e.left.dPlace,"*",e.right.nPlace])))})}}var divide=LimeFunctionDivide;class LimeFunctionExponent extends require$$41{constructor(e,r){super(e,{name:"exponent",mode:r}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(arg{expr}->expr)","cr(arg{expr}->expr)","cl(bool->int)","cr(bool->int)","eb(int,int)","eb(rat,int)"],this.algorithms.set("b(int,int)",e=>{if(0<=e.right.value){if(0===e.left.value&&0===e.right.value)throw new Error("warn:zeroExponentOfZero");e.bs(this.lime.build("integer")(e.left.value**e.right.value))}else e.bs(this.lime.build("rational")(this.lime.direct([1]),this.lime.direct([e.left,"^","-",e.right])))}),this.algorithms.set("b(rat,int)",e=>{0<=e.right.value?e.bs(this.lime.build("rational")(this.lime.direct([e.left.nPlace,"^",e.right]),this.lime.direct([e.left.dPlace,"^",e.right]))):e.bs(this.lime.build("rational")(this.lime.direct([e.left.dPlace,"^","-",e.right]),this.lime.direct([e.left.nPlace,"^","-",e.right])))})}}var exponent=LimeFunctionExponent;class LimeFunctionModulo extends require$$41{constructor(e,r){super(e,{name:"modulo",mode:r}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(arg{expr}->expr)","cr(arg{expr}->expr)","cl(bool->int)","cr(bool->int)","eb(int,int)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.build("integer")(e.left.value%e.right.value))})}}var modulo=LimeFunctionModulo;class LimeFunctionMultiply extends require$$41{constructor(e,r){super(e,{name:"multiply",mode:r}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(arg{expr}->expr)","cr(arg{expr}->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.build("integer")(e.left.value*e.right.value))}),this.algorithms.set("b(rat,rat)",e=>{e.bs(this.lime.build("rational")(this.lime.direct([e.left.nPlace,"*",e.right.nPlace]),this.lime.direct([e.left.dPlace,"*",e.right.dPlace])))})}}var multiply=LimeFunctionMultiply;class LimeFunctionNegative extends require$$41{constructor(e,r){super(e,{name:"negative",mode:r}),this.operations.r=["tr(_!)","tr(_+)","tr(_-)","cr(var->expr)","cr(arg{expr}->expr)","cr(bool->int)","er(int)","er(rat)","er(_+)","er(_-)"],this.algorithms.set("r(int)",e=>{e.rus(this.lime.direct([-1,"*",e.right]))}),this.algorithms.set("r(rat)",e=>{e.rus(this.lime.build("rational")(this.lime.direct(["-",e.right.nPlace]),e.right.dPlace))}),this.algorithms.set("r(_+)",e=>{e.rus(this.lime.refer("_-"))}),this.algorithms.set("r(_-)",e=>{e.rus(this.lime.refer("_+"))})}}var negative=LimeFunctionNegative;class LimeFunctionPositive extends require$$41{constructor(e,r){super(e,{name:"positive",mode:r}),this.operations.r=["tr(_!)","tr(_+)","tr(_-)","cr(var->expr)","cr(arg{expr}->expr)","cr(bool->int)","er(int)","er(rat)","er(_+)","er(_-)"],this.algorithms.set("r(int)",e=>{e.rus(this.lime.direct([1,"*",e.right]))}),this.algorithms.set("r(rat)",e=>{e.rus(this.lime.build("rational")(this.lime.direct([e.right.nPlace]),e.right.dPlace))}),this.algorithms.set("r(_+)",e=>{e.rus(this.lime.refer("_+"))}),this.algorithms.set("r(_-)",e=>{e.rus(this.lime.refer("_-"))})}}var positive=LimeFunctionPositive;class LimeFunctionSubtract extends require$$41{constructor(e,r){super(e,{name:"subtract",mode:r}),this.operations.b=["tz(_-)","tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(arg{expr}->expr)","cr(arg{expr}->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.build("integer")(e.left.value-e.right.value))}),this.algorithms.set("b(rat,rat)",e=>{e.bs(this.lime.build("rational")(this.lime.direct([e.left.nPlace,"*",e.right.dPlace,"-",e.right.nPlace,"*",e.left.dPlace]),this.lime.direct([e.left.dPlace,"*",e.right.dPlace])))})}}var subtract=LimeFunctionSubtract;class LimeFunctionBitwiseAnd extends require$$41{constructor(e,r){super(e,{name:"bitwiseAnd",mode:r}),this.operations.b=["tf(&&)","tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(arg{expr}->expr)","cr(arg{expr}->expr)","cl(bool->int)","cr(bool->int)","eb(int,int)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.direct([e.left.value&e.right.value]))})}}var bitwiseAnd=LimeFunctionBitwiseAnd;class LimeFunctionBitwiseNot extends require$$41{constructor(e,r){super(e,{name:"bitwiseNot",mode:r}),this.operations.r=["tr(_!)","tr(_+)","tr(_-)","cr(var->expr)","cr(arg{expr}->expr)","cr(bool->int)","er(int)"],this.algorithms.set("r(int)",e=>{e.rus(this.lime.direct([~e.right.value]))})}}var bitwiseNot=LimeFunctionBitwiseNot;class LimeFunctionBitwiseOr extends require$$41{constructor(e,r){super(e,{name:"bitwiseOr",mode:r}),this.operations.b=["tf(||)","tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(arg{expr}->expr)","cr(arg{expr}->expr)","cl(bool->int)","cr(bool->int)","eb(int,int)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.direct([e.left.value|e.right.value]))})}}var bitwiseOr=LimeFunctionBitwiseOr;class LimeFunctionShiftLeft extends require$$41{constructor(e,r){super(e,{name:"shiftLeft",mode:r}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(arg{expr}->expr)","cr(arg{expr}->expr)","cl(bool->int)","cr(bool->int)","eb(int,int)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.direct([e.left.value<<e.right.value]))})}}var shiftLeft=LimeFunctionShiftLeft;class LimeFunctionShiftRight extends require$$41{constructor(e,r){super(e,{name:"shiftRight",mode:r}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(arg{expr}->expr)","cr(arg{expr}->expr)","cl(bool->int)","cr(bool->int)","eb(int,int)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.direct([e.left.value>>e.right.value]))})}}var shiftRight=LimeFunctionShiftRight;class LimeFunctionEqual extends require$$41{constructor(e,r){super(e,{name:"equal",mode:r}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(arg{expr}->expr)","cr(arg{expr}->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.build("boolean")(e.left.value===e.right.value))}),this.algorithms.set("b(rat,rat)",e=>{e.bs(this.lime.direct([e.left.nPlace,"*",e.right.dPlace,"==",e.right.nPlace,"*",e.left.dPlace]))})}}var equal=LimeFunctionEqual;class LimeFunctionGreater extends require$$41{constructor(e,r){super(e,{name:"greater",mode:r}),this.operations.b=["tf(>=)","tf(>>)","tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(arg{expr}->expr)","cr(arg{expr}->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.build("boolean")(e.left.value>e.right.value))}),this.algorithms.set("b(rat,rat)",e=>{e.bs(this.lime.direct([e.left.nPlace,"*",e.right.dPlace,">",e.right.nPlace,"*",e.left.dPlace]))})}}var greater=LimeFunctionGreater;class LimeFunctionGreaterEqual extends require$$41{constructor(e,r){super(e,{name:"greaterEqual",mode:r}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(arg{expr}->expr)","cr(arg{expr}->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.build("boolean")(e.left.value>=e.right.value))}),this.algorithms.set("b(rat,rat)",e=>{e.bs(this.lime.direct([e.left.nPlace,"*",e.right.dPlace,">=",e.right.nPlace,"*",e.left.dPlace]))})}}var greaterEqual=LimeFunctionGreaterEqual;class LimeFunctionNotEqual extends require$$41{constructor(e,r){super(e,{name:"notEqual",mode:r}),this.operations.b=["tf(!==)","tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(arg{expr}->expr)","cr(arg{expr}->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.build("boolean")(e.left.value!==e.right.value))}),this.algorithms.set("b(rat,rat)",e=>{e.bs(this.lime.direct([e.left.nPlace,"*",e.right.dPlace,"!=",e.right.nPlace,"*",e.left.dPlace]))})}}var notEqual=LimeFunctionNotEqual;class LimeFunctionSmaller extends require$$41{constructor(e,r){super(e,{name:"smaller",mode:r}),this.operations.b=["tf(<=)","tf(<<)","tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(arg{expr}->expr)","cr(arg{expr}->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.build("boolean")(e.left.value<e.right.value))}),this.algorithms.set("b(rat,rat)",e=>{e.bs(this.lime.direct([e.left.nPlace,"*",e.right.dPlace,"<",e.right.nPlace,"*",e.left.dPlace]))})}}var smaller=LimeFunctionSmaller;class LimeFunctionSmallerEqual extends require$$41{constructor(e,r){super(e,{name:"smallerEqual",mode:r}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(arg{expr}->expr)","cr(arg{expr}->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.build("boolean")(e.left.value<=e.right.value))}),this.algorithms.set("b(rat,rat)",e=>{e.bs(this.lime.direct([e.left.nPlace,"*",e.right.dPlace,"<=",e.right.nPlace,"*",e.left.dPlace]))})}}var smallerEqual=LimeFunctionSmallerEqual;class LimeFunctionFactorial extends require$$41{constructor(e,r){super(e,{name:"factorial",mode:r}),this.operations.l=["tz(_!)","tf(!=)","cl(var->expr)","cl(arg{expr}->expr)","cl(bool->int)","el(int)"],this.algorithms.set("l(int)",e=>{if(e.left.value<0)throw new Error("warn:negativeFactorial");0<e.left.value?e.lus(this.lime.direct([e.left,"*","(",e.left,"-",1,")","!"])):e.lus(this.lime.direct([1]))})}}var factorial=LimeFunctionFactorial;class LimeFunctionLogicalAnd extends require$$41{constructor(e,r){super(e,{name:"logicalAnd",mode:r}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(arg{expr}->expr)","cr(arg{expr}->expr)","cl(!bool->bool)","cr(!bool->bool)","eb(bool,bool)"],this.algorithms.set("b(bool,bool)",e=>{e.bs(this.lime.build("boolean")(e.left.value&&e.right.value))})}}var logicalAnd=LimeFunctionLogicalAnd;class LimeFunctionLogicalNot extends require$$41{constructor(e,r){super(e,{name:"logicalNot",mode:r}),this.operations.r=["tr(_!)","tr(_+)","tr(_-)","cr(var->expr)","cr(arg{expr}->expr)","cr(!bool->bool)","er(bool)"],this.algorithms.set("r(bool)",e=>{e.rus(this.lime.build("boolean")(!e.right.value))})}}var logicalNot=LimeFunctionLogicalNot;class LimeFunctionLogicalOr extends require$$41{constructor(e,r){super(e,{name:"logicalOr",mode:r}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(arg{expr}->expr)","cr(arg{expr}->expr)","cl(!bool->bool)","cr(!bool->bool)","eb(bool,bool)"],this.algorithms.set("b(bool,bool)",e=>{e.bs(this.lime.build("boolean")(e.left.value||e.right.value))})}}var logicalOr=LimeFunctionLogicalOr;class LimeFunctionAssign extends require$$41{constructor(e,r){super(e,{name:"assign",mode:r}),this.operations.b=["tf(==)","tr(_+)","tr(_-)","cr(var->expr)","cr(arg{expr}->expr)","eb(var,expr)"],this.algorithms.set("b(var,expr)",e=>{this.lime.variables.set(e.left.key,e.right),e.bs(e.left)})}}var assign=LimeFunctionAssign;class LimeFunctionColumnSplit extends require$$41{constructor(e,r){super(e,{name:"columnSplit",mode:r})}}var columnSplit=LimeFunctionColumnSplit;class LimeFunctionCommonBracket extends require$$41{constructor(e,r){super(e,{name:"commonBracket",mode:r}),this.operations.n=["en()"],this.algorithms.set("n()",e=>{const r=e["data"],t=[[]];let i=e.pos,s=0,n=0;for(;i+1<r.length;){if(this.lime.identify("commonBracket")(r[i+1])){if(s+="n"===r[i+1].mode?1:-1,s<0)break}else this.lime.identify("columnSplit")(r[i+1])&&(t.push([]),n++,i++);t[n].push(r[++i])}if(0<=s)throw new Error("error:unmatchedBrackets");const l=[];let o=2+n;for(let e=0;e<=n;e++)o+=t[e].length,l.push(0<t[e].length?this.lime.direct(t[e]):null);e.ns(o,this.lime.build("argument")(...l))})}}var commonBracket=LimeFunctionCommonBracket;class LimeFunctionOmitted extends require$$41{constructor(e,r){super(e,{name:"omitted",mode:r}),this.operations.b=["eb(expr,expr)"],this.algorithms.set("b(expr,expr)",e=>{e.fs(e.lime.refer("*"))})}}var omitted=LimeFunctionOmitted;class LimeEquation{constructor(e,r){this.lime=e,this.input=r,this.solution=[]}get steps(){return this.solution.length}get runtime(){return this.solution[this.steps-1].timestamp-this.solution[0].timestamp}get result(){return this.solution[this.steps-1].data}record(e){this.lime.config.promptShowSteps&&console.log(e.data),this.solution.push(e)}}var equation=LimeEquation;class LimeStep{constructor(e,r,t){this.lime=e,this.data=Types.isArray(r)?r:[],this.pos=Types.isNumber(t)&&0<=t&&t<this.data.length?t:-1,this.timestamp=Date.now()}get left(){return this.data[this.pos-1]}get func(){return this.data[this.pos]}get right(){return this.data[this.pos+1]}ci(...r){return(...e)=>this.lime.identify(...r)(...e)}lpi(...e){return this.lime.identify(...e)(this.left)}fi(...e){return this.lime.identify(...e)(this.func)}rpi(...e){return this.lime.identify(...e)(this.right)}bpi(...e){return this.lime.identify(...e)(this.left,this.right)}lps(...e){this.data.splice(this.pos-1,1,...e)}fs(...e){this.data.splice(this.pos,1,...e)}rps(...e){this.data.splice(this.pos+1,1,...e)}lus(...e){this.data.splice(this.pos-1,2,...e)}rus(...e){this.data.splice(this.pos,2,...e)}bs(...e){this.data.splice(this.pos-1,3,...e)}ns(e,...r){this.data.splice(this.pos,e,...r)}}var step=LimeStep;class LimeToken{constructor(e,r,t){this.lime=e,this.type=["integer","whitespace","symbol","variable"].includes(r)?r:"symbol",this.value=Types.isString(t)?t:""}}var token=LimeToken,require$$0=about,require$$1$1=clear,require$$2=config,require$$3=help,require$$4=list,require$$5=argument,require$$6=boolean,require$$7=integer,require$$8=rational,require$$9=variable,require$$10=add,require$$11=decimal,require$$12=divide,require$$13=exponent,require$$14=modulo,require$$15=multiply,require$$16=negative,require$$17=positive,require$$18=subtract,require$$19=bitwiseAnd,require$$20=bitwiseNot,require$$21=bitwiseOr,require$$22=shiftLeft,require$$23=shiftRight,require$$24=equal,require$$25=greater,require$$26=greaterEqual,require$$27=notEqual,require$$28=smaller,require$$29=smallerEqual,require$$30=factorial,require$$31=logicalAnd,require$$32=logicalNot,require$$33=logicalOr,require$$34=assign,require$$35=columnSplit,require$$36=commonBracket,require$$37=omitted,require$$39=equation,require$$42=step,require$$43=LimeToken;const Module=new Map;Module.set("about",require$$0),Module.set("clear",require$$1$1),Module.set("config",require$$2),Module.set("help",require$$3),Module.set("list",require$$4),Module.set("argument",require$$5),Module.set("boolean",require$$6),Module.set("integer",require$$7),Module.set("rational",require$$8),Module.set("variable",require$$9),Module.set("add",require$$10),Module.set("decimal",require$$11),Module.set("divide",require$$12),Module.set("exponent",require$$13),Module.set("modulo",require$$14),Module.set("multiply",require$$15),Module.set("negative",require$$16),Module.set("positive",require$$17),Module.set("subtract",require$$18),Module.set("bitwiseAnd",require$$19),Module.set("bitwiseNot",require$$20),Module.set("bitwiseOr",require$$21),Module.set("shiftLeft",require$$22),Module.set("shiftRight",require$$23),Module.set("equal",require$$24),Module.set("greater",require$$25),Module.set("greaterEqual",require$$26),Module.set("notEqual",require$$27),Module.set("smaller",require$$28),Module.set("smallerEqual",require$$29),Module.set("factorial",require$$30),Module.set("logicalAnd",require$$31),Module.set("logicalNot",require$$32),Module.set("logicalOr",require$$33),Module.set("assign",require$$34),Module.set("columnSplit",require$$35),Module.set("commonBracket",require$$36),Module.set("omitted",require$$37),Module.set("command",require$$38),Module.set("equation",require$$39),Module.set("expression",require$$40),Module.set("function",require$$41),Module.set("step",require$$42),Module.set("token",require$$43);var module$1=Module,require$$1=Module;class Lime{constructor(e){this.config={...require$$0$2,...e},this.module=require$$1,this.variables=new Map,this.memory=[]}get answer(){return this.variables.get("ans").print()}prompt(e){try{return this.run(e)}catch(e){return this.message(e)}}evaluate(e){try{return this.run(e)}catch(e){return console.log(this.message(e)),""}}run(e){if(!Types.isString(e))throw new Error("error:inputNotStringInPrompt");if(0===e.length)throw new Error("error:inputEmptyInPrompt");this.variables.has("ans")||this.variables.set("ans",this.direct([0]));const r=this.build("equation")(e);return this.lex(r),this.identify("command")(r.result[0])?r.result[0].execute(e):(this.memory.push(r),this.config.promptShowRuntime&&console.log(`Equation runtime: ${r.runtime/1e3}s`),this.variables.set("ans",r.result[0]),this.answer)}direct(e){try{if(!Types.isArray(e))throw new Error("error:inputNotArrayInDirect");if(0===e.length)throw new Error("error:inputEmptyInDirect");const r=this.build("equation")(e);return r.record(this.build("step")(r.input.map(e=>!Types.isString(e)&&!Types.isNumber(e)||Types.isUndefined(this.refer(e))?e:this.refer(e)))),this.process(r),r.result[0]}catch(e){return this.config.testMode?this.message(e):void console.log(this.message(e))}}message(e){var r=new Error("issue:invalidMessage");if(!Message.hasOwnProperty(e.message)||!e.message.includes(":"))return console.log(e),this.message(r);var t=e.message.split(":");let i;switch(t[0]){case"error":i="!";break;case"warn":i="?";break;case"issue":i="i";break;default:return this.message(r)}return this.config.developmentMode&&"i"===i&&console.log(e),`[${i}] ${t[1]}\n${Message[e.message]} ${"i"===i?`\n${Message.github}`:""}`}lex(e){const t=e.input,i=[];for(let r=0;r<t.length;r++){const s=t[r];let e=s;if(s.match(/\s/))i.push(this.build("token")("whitespace"));else if(s.match(/\d/)){for(;r+1<t.length&&t[r+1].match(/\d/);)e+=t[++r];i.push(this.build("token")("integer",e))}else if(s.match(/\w/)){for(;r+1<t.length&&t[r+1].match(/\w/);)e+=t[++r];i.push(this.build("token")("variable",e))}else i.push(this.build("token")("symbol",e))}e.record(i),this.parse(e)}parse(e){const r=e.solution.shift(),t=[];for(let e=0;e<r.length;e++)switch(r[e].type){case"whitespace":break;case"integer":t.push(this.build("integer")(r[e].value));break;case"symbol":case"variable":if(Refer.hasOwnProperty(r[e].value))t.push(this.refer(r[e].value));else{if("variable"!==r[e].type)throw new Error("error:invalidSymbol");t.push(this.build("variable")(r[e].value))}break;default:throw new Error("issue:invalidTokenInParse")}e.record(this.build("step")(t)),this.identify("command")(e.result[0])||this.process(e)}process(t){for(;;){for(let e=1;e<t.result.length;e++)this.identify("expression")(t.result[e-1],t.result[e])&&t.result.splice(e,0,this.build("omitted")("b"));let r=-1;for(let e=0;e<t.result.length;e++)this.identify("function")(t.result[e])&&(r=r<0||t.result[e].order>t.result[r].order?e:r);if(r<0)break;var e=this.build("step")(t.result,r);t.record(t.result[r].evaluate(e))}if(1!==t.result.length)throw new Error("issue:invalidResultLengthInProcess");t.record(this.build("step")([t.result[0].simplify()]))}identify(...t){if(t.every(e=>this.module.has(e)))return(...e)=>e.every(r=>t.some(e=>Types.isClass(this.module.get(e),r)));throw new Error("issue:invalidModuleInIdentify")}build(r){if(this.module.has(r))return(...e)=>new(this.module.get(r))(this,...e);throw new Error("issue:invalidModuleInBuild")}refer(e){return Types.isNumber(e)?this.build("integer")(e):Refer.hasOwnProperty(e)?this.build(Refer[e][0])(...Refer[e].slice(1).map(e=>Types.isArray(e)?this.build(e[0])(...e.slice(1)):e)):void 0}}var lime=e=>new Lime(e);module.exports=lime;
