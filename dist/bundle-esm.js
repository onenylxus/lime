/*
Lime version 0.1.2
Mathematics computation engine
2021 Lime Project Team, MIT license
https://github.com/onenylxus/lime
*/

var github="Please create a GitHub issue about how you received this message, thank you. ",Message={github:github,"error:invalidParametersInCommand":"Invalid parameters in command.","error:functionAgreement":"Function does not agree with parameter types.","error:inputEmptyInDirect":"Direct input is empty.","error:inputEmptyInPrompt":"Prompt input is empty.","error:inputNotArrayInDirect":"Direct input is not an array.","error:inputNotStringInPrompt":"Prompt input is not a string.","error:invalidConfigProperty":"Invalid configuration property in config command","error:invalidListProperty":"Invalid list property in list command","error:invalidSymbol":"Invalid symbol in prompt input.","error:undefinedVariable":"Variable is undefined but used.","error:unmatchedBrackets":"Some brackets are unmatched.","issue:invalidExpressionInConstruct":"Invalid expression in constructor.","issue:invalidFunctionOrder":"Invalid function order.","issue:invalidMessage":"Invalid message detected.","issue:invalidModuleInBuild":"Invalid module in build function.","issue:invalidModuleInIdentify":"Invalid module in identify function.","issue:invalidResultLengthInProcess":"Invalid result length in process function.","issue:invalidTokenInParse":"Invalid token in parse function.","warn:negativeFactorial":"Factorial function has negative integer input. Currenly gamma function has not been implemented.","warn:strictBoolean":"Strict boolean configuration is set to true. Boolean to expression conversion is not allowed.","warn:zeroExponentOfZero":"Zero raised to exponent of zero is undefined."},about$1=["about"],clear$1=["clear"],config$1=["config"],help$1=["help"],list$1=["list"],Refer={about:about$1,clear:clear$1,config:config$1,help:help$1,list:list$1,true:["boolean",!0],false:["boolean",!1],"+":["add","b"],"=":["assign","b"],"&":["bitwiseAnd","b"],"~":["bitwiseNot","r"],"|":["bitwiseOr","b"],"(":["commonBracket","n"],")":["commonBracket","x"],".":["decimal","b"],"/":["divide","b"],"==":["equal","b"],"^":["exponent","b"],"!":["factorial","l"],">":["greater","b"],">=":["greaterEqual","b"],"&&":["logicalAnd","b"],"_!":["logicalNot","r"],"||":["logicalOr","b"],"%":["modulo","b"],"*":["multiply","b"],"_-":["negative","r"],"!=":["notEqual","b"],"_+":["positive","r"],"<<":["shiftLeft","b"],">>":["shiftRight","b"],"<":["smaller","b"],"<=":["smallerEqual","b"],"-":["subtract","b"]};class Types$1{static auto(...e){e=e.map(e=>Types$1.isUndefined(e)?"undefined":Types$1.isNull(e)?"null":Types$1.isBoolean(e)?"boolean":Types$1.isNumber(e)?"number":Types$1.isString(e)?"string":Types$1.isFunction(e)?"function":Types$1.isArray(e)?"array":Types$1.isObject(e)?"object":"");return 1<e.length?e:e[0]}static isUndefined(...e){return e.every(e=>void 0===e)}static isNull(...e){return e.every(e=>null===e)}static isTrue(...e){return e.every(e=>!0===e)}static isFalse(...e){return e.every(e=>!1===e)}static isBoolean(...e){return e.every(e=>"boolean"==typeof e)}static isNumber(...e){return e.every(e=>"number"==typeof e)}static isString(...e){return e.every(e=>"string"==typeof e)}static isFunction(...e){return e.every(e=>"function"==typeof e)}static isArray(...e){return e.every(e=>e instanceof Array)}static isObject(...e){return e.every(e=>e instanceof Object)}static isClass(t,...e){return e.every(e=>e instanceof t)}}var types=Types$1,developmentMode=!1,promptShowRuntime=!1,promptShowSteps=!1,strictBoolean=!0,testMode=!1,require$$0$2={developmentMode:developmentMode,promptShowRuntime:promptShowRuntime,promptShowSteps:promptShowSteps,strictBoolean:strictBoolean,testMode:testMode},name="@onenylxus/lime",version="0.1.2",description="Mathematics computation engine",author="Lime Project Team",license="MIT",keywords=["javascript","mathematics"],main="dist/bundle.js",module$1="dist/bundle-cjs.js",browser="dist/bundle-esm.js",sideEffects=!1,dependencies={},devDependencies={"@rollup/plugin-commonjs":"^18.1.0","@rollup/plugin-json":"^4.1.0","@rollup/plugin-node-resolve":"^13.0.0",codecov:"^3.8.2",eslint:"^7.25.0","eslint-config-airbnb-base":"^14.2.1","eslint-plugin-import":"^2.22.1",husky:"^6.0.0",jest:"^26.6.3","lint-staged":"^10.5.4","prettier-eslint":"^12.0.0","prettier-eslint-cli":"^5.0.1",rimraf:"^3.0.2",rollup:"^2.47.0","rollup-plugin-node-polyfills":"^0.2.1","rollup-plugin-uglify":"^5.0.2"},scripts={lint:"prettier-eslint '**/*.js'",clean:"rimraf dist/*.js",debug:"node examples/prompt.js -q",prebuild:"yarn lint && yarn clean",build:"rollup -c",watch:"jest --config jest.config.json --watch",pretest:"yarn build",test:"jest --config jest.config.json --verbose"},husky={hooks:{"pre-commit":"yarn test"}},repository={type:"git",url:"git+https://github.com/onenylxus/lime.git"},bugs={url:"https://github.com/onenylxus/lime/issues"},homepage="https://github.com/onenylxus/lime#readme",require$$0$1={name:name,version:version,description:description,author:author,license:license,keywords:keywords,main:main,module:module$1,browser:browser,sideEffects:sideEffects,dependencies:dependencies,devDependencies:devDependencies,scripts:scripts,husky:husky,repository:repository,bugs:bugs,homepage:homepage};function banner$1(){const e=require$$0$1;return`Lime version ${e.version}\n${e.description}\n2021 ${e.author}, ${e.license} license\n${e.homepage.slice(0,-7)}`}var banner_1=banner$1;class LimeCommand{constructor(e,{...t}){this.lime=e,this.name=t.hasOwnProperty("name")?t.name:this.constructor.name.slice(11),this.description=t.hasOwnProperty("description")?t.description:"",this.operations=new Map}execute(e){var t=e.split(/\s/).slice(1),e=t.length;if(!this.operations.has(e))throw new Error("error:invalidParametersInCommand");return this.operations.get(e)(...t)}}var command=LimeCommand,banner=banner_1,require$$35=command;class LimeCommandAbout extends require$$35{constructor(e){super(e,{name:"about",description:"show information about the engine"}),this.operations.set(0,()=>banner())}}var about=LimeCommandAbout;class LimeCommandClear extends require$$35{constructor(e){super(e,{name:"clear",description:"clear variables and memory"}),this.operations.set(0,()=>(this.lime.variables=new Map,this.lime.memory=[],"Cleared"))}}var clear=LimeCommandClear;class LimeCommandConfig extends require$$35{constructor(e){super(e,{name:"config",description:"view and modify engine configurations"}),this.operations.set(1,e=>{if(!this.lime.config.hasOwnProperty(e))throw new Error("error:invalidConfigProperty");return`${e}: ${this.lime.config[e]}`}),this.operations.set(2,(e,t)=>{if(!this.lime.config.hasOwnProperty(e))throw new Error("error:invalidConfigProperty");var r=this.lime.config[e];return this.lime.config[e]=this.lime.direct([t]).value,`${e}: ${r} > ${this.lime.config[e]}`})}}var config=LimeCommandConfig;class LimeCommandHelp extends require$$35{constructor(e){super(e,{name:"help",description:"list all available commands"}),this.operations.set(0,()=>{const r=["Below is a list of available commands:"];return this.lime.module.forEach(e=>{try{var t=new e(this.lime);t instanceof require$$35&&r.push(`${t.name}: ${t.description}`)}catch(e){}}),r.join("\n")})}}var help=LimeCommandHelp;class LimeCommandList extends require$$35{constructor(e){super(e,{name:"list",description:"list specified engine property"}),this.operations.set(1,e=>{switch(e){case"config":return this.lime.config;case"module":return this.lime.module;case"variable":return Object.fromEntries(this.lime.variables);case"memory":return this.lime.memory;default:throw new Error("error:invalidListProperty")}})}}var list=LimeCommandList,Types=types;class LimeExpression{constructor(e,{...t}){this.lime=e,this.isSimple=!t.hasOwnProperty("isSimple")||!Types.isBoolean(t.isSimple)||t.isSimple}}var expression=LimeExpression,require$$37=LimeExpression;class LimeExpressionBoolean extends require$$37{constructor(e,t){super(e,{isSimple:!0}),this.raw=t}get value(){return!!this.raw}toInteger(){if(this.lime.config.strictBoolean)throw new Error("warn:strictBoolean");return this.lime.direct([+this.value])}simplify(){return this.lime.build("boolean")(this.value)}print(){return this.value?"true":"false"}}var boolean=LimeExpressionBoolean;class LimeExpressionInteger extends require$$37{constructor(e,t){if(super(e,{isSimple:!0}),!Types.isNumber(+t))throw new Error("issue:invalidExpressionInConstruct");this.string=`${t}`}get value(){return Math.trunc(+this.string)}toBoolean(){return this.lime.build("boolean")(this.value)}toRational(){return this.lime.build("rational")(this,this.lime.build("integer")(1))}simplify(){return this.lime.build("integer")(this.value)}print(){return`${this.value}`}}var integer=LimeExpressionInteger;class LimeExpressionRational extends require$$37{constructor(e,t,r){if(super(e,{isSimple:!0}),!this.lime.identify("integer")(t,r))throw new Error("issue:invalidExpressionInConstruct");this.nPlace=t,this.dPlace=r}get value(){return{n:this.nPlace.value,d:this.dPlace.value}}toBoolean(){return this.lime.build("boolean")(this.value.n/this.value.d)}simplify(){return this.value.d<0&&(this.nPlace=this.lime.direct(["-",this.nPlace]),this.dPlace=this.lime.direct(["-",this.dPlace])),1===this.value.d?this.nPlace.simplify():this.lime.build("rational")(this.nPlace.simplify(),this.dPlace.simplify())}print(){return`${this.value.n}/${this.value.d}`}}var rational=LimeExpressionRational;class LimeExpressionVariable extends require$$37{constructor(e,t){super(e,{isSimple:!0}),this.key=t}get value(){if(!this.lime.variables.has(this.key))throw new Error("error:undefinedVariable");return this.lime.variables.get(this.key)}simplify(){return this.value.simplify()}}var variable=LimeExpressionVariable;const Oplist$1={cond:{"b(bool,bool)":e=>e.bpi("boolean"),"b(int,int)":e=>e.bpi("integer"),"b(int,rat)":e=>e.lpi("integer")&&e.rpi("rational"),"b(rat,int)":e=>e.lpi("rational")&&e.rpi("integer"),"b(rat,rat)":e=>e.bpi("rational"),"b(var,expr)":e=>e.lpi("variable")&&e.rpi("expression"),"l(bool)":e=>e.lpi("boolean"),"l(int)":e=>e.lpi("integer"),"l(var)":e=>e.lpi("variable"),"l(!bool)":e=>!e.lpi("boolean"),"n()":()=>!0,"r(bool)":e=>e.rpi("boolean"),"r(int)":e=>e.rpi("integer"),"r(rat)":e=>e.rpi("rational"),"r(var)":e=>e.rpi("variable"),"r(!bool)":e=>!e.rpi("boolean"),"r(+)":e=>e.rpi("add"),"r(=)":e=>e.rpi("assign"),"r(&)":e=>e.rpi("bitwiseAnd"),"r(|)":e=>e.rpi("bitwiseOr"),"r(!)":e=>e.rpi("factorial"),"r(>)":e=>e.rpi("greater"),"r(_-)":e=>e.rpi("negative"),"r(_+)":e=>e.rpi("positive"),"r(<)":e=>e.rpi("smaller"),"r(-)":e=>e.rpi("subtract"),"z()":e=>0===e.pos},act:{"f(==)":e=>{e.rus(e.lime.refer("=="))},"f(!==)":e=>{e.rus(e.lime.refer("!"),e.lime.refer("=="))},"f(>=)":e=>{e.rus(e.lime.refer(">="))},"f(&&)":e=>{e.rus(e.lime.refer("&&"))},"f(_!)":e=>{e.fs(e.lime.refer("_!"))},"f(||)":e=>{e.rus(e.lime.refer("||"))},"f(_-)":e=>{e.fs(e.lime.refer("_-"))},"f(!=)":e=>{e.rus(e.lime.refer("!="))},"f(_+)":e=>{e.fs(e.lime.refer("_+"))},"f(<<)":e=>{e.rus(e.lime.refer("<<"))},"f(>>)":e=>{e.rus(e.lime.refer(">>"))},"f(<=)":e=>{e.rus(e.lime.refer("<="))},"l(expr->int)":e=>{e.lps(e.left.toInteger())},"l(expr->rat)":e=>{e.lps(e.left.toRational())},"l(var->expr)":e=>{e.lps(e.left.value)},"l(!bool->bool)":e=>{e.lps(e.left.toBoolean())},"r(expr->int)":e=>{e.rps(e.right.toInteger())},"r(expr->rat)":e=>{e.rps(e.right.toRational())},"r(var->expr)":e=>{e.rps(e.right.value)},"r(!bool->bool)":e=>{e.rps(e.right.toBoolean())},"r(_!)":e=>{e.rps(e.lime.refer("_!"))},"r(_-)":e=>{e.rps(e.lime.refer("_-"))},"r(_+)":e=>{e.rps(e.lime.refer("_+"))}},pair:{"cb(int->rat,rat)":["b(int,rat)","l(expr->rat)"],"cb(rat,int->rat)":["b(rat,int)","r(expr->rat)"],"cl(bool->int)":["l(bool)","l(expr->int)"],"cl(var->expr)":["l(var)","l(var->expr)"],"cl(!bool->bool)":["l(!bool)","l(!bool->bool)"],"cr(bool->int)":["r(bool)","r(expr->int)"],"cr(var->expr)":["r(var)","r(var->expr)"],"cr(!bool->bool)":["r(!bool)","r(!bool->bool)"],"tf(==)":["r(=)","f(==)"],"tf(!==)":["r(=)","f(!==)"],"tf(>=)":["r(=)","f(>=)"],"tf(&&)":["r(&)","f(&&)"],"tf(||)":["r(|)","f(||)"],"tf(!=)":["r(=)","f(!=)"],"tf(<<)":["r(<)","f(<<)"],"tf(>>)":["r(>)","f(>>)"],"tf(<=)":["r(=)","f(<=)"],"tr(_!)":["r(!)","r(_!)"],"tr(_+)":["r(+)","r(_+)"],"tr(_-)":["r(-)","r(_-)"],"tz(_!)":["z()","f(_!)"],"tz(_+)":["z()","f(_+)"],"tz(_-)":["z()","f(_-)"]}};var oplist=Oplist$1,Order=[["assign","equal","greater","greaterEqual","notEqual","smaller","smallerEqual"],["add","bitwiseAnd","bitwiseNot","bitwiseOr","logicalAnd","logicalNot","logicalOr","modulo","shiftLeft","shiftRight","subtract"],["divide","multiply"],["exponent"],["decimal","negative","positive"],["factorial"],["commonBracket"]],Oplist=oplist;class LimeFunction{constructor(e,{...t}){this.lime=e,this.mode=t.hasOwnProperty("mode")&&["l","r","b","n"].includes(t.mode)?t.mode:"x",this.name=t.hasOwnProperty("name")?t.name:this.constructor.name.slice(12),this.operations={l:[],r:[],b:[],n:[]},this.algorithms=new Map}get order(){for(let e=0;e<Order.length;e++)if(Order[e].includes(this.name))return e;throw new Error("issue:invalidFunctionOrder")}evaluate(i){if("x"===this.mode)throw new Error("error:unmatchedBrackets");const s=this.operations[this.mode];for(let r=0;r<s.length;r++){let e,t;if(Types.isString(s[r])&&(e="e"===s[r][0]?Oplist.cond[s[r].substring(1)]:Oplist.cond[Oplist.pair[s[r]][0]],t="e"===s[r][0]?this.algorithms.get(s[r].substring(1)):Oplist.act[Oplist.pair[s[r]][1]]),e(i))return t(i),i}throw new Error("error:functionAgreement")}}var _function=LimeFunction,require$$38=LimeFunction;class LimeFunctionAdd extends require$$38{constructor(e,t){super(e,{name:"add",mode:t}),this.operations.b=["tz(_+)","tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.build("integer")(e.left.value+e.right.value))}),this.algorithms.set("b(rat,rat)",e=>{e.bs(this.lime.build("rational")(this.lime.direct([e.left.nPlace,"*",e.right.dPlace,"+",e.right.nPlace,"*",e.left.dPlace]),this.lime.direct([e.left.dPlace,"*",e.right.dPlace])))})}}var add=LimeFunctionAdd;class LimeFunctionDecimal extends require$$38{constructor(e,t){super(e,{name:"decimal",mode:t}),this.operations.b=["eb(int,int)"],this.algorithms.set("b(int,int)",e=>{var t;0<e.right.value?(t=this.lime.direct([10,"^",e.right.string.length]),e.bs(this.lime.direct(["(",e.left,"*",t,"+",e.right,")","/",t]))):e.bs(e.left)})}}var decimal=LimeFunctionDecimal;class LimeFunctionDivide extends require$$38{constructor(e,t){super(e,{name:"divide",mode:t}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",e=>{e.left.value%e.right.value==0?e.bs(this.lime.build("integer")(e.left.value/e.right.value)):e.bs(this.lime.build("rational")(e.left,e.right))}),this.algorithms.set("b(rat,rat)",e=>{e.bs(this.lime.build("rational")(this.lime.direct([e.left.nPlace,"*",e.right.dPlace]),this.lime.direct([e.left.dPlace,"*",e.right.nPlace])))})}}var divide=LimeFunctionDivide;class LimeFunctionExponent extends require$$38{constructor(e,t){super(e,{name:"exponent",mode:t}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","eb(int,int)","eb(rat,int)"],this.algorithms.set("b(int,int)",e=>{if(0<=e.right.value){if(0===e.left.value&&0===e.right.value)throw new Error("warn:zeroExponentOfZero");e.bs(this.lime.build("integer")(e.left.value**e.right.value))}else e.bs(this.lime.build("rational")(this.lime.direct([1]),this.lime.direct([e.left,"^","-",e.right])))}),this.algorithms.set("b(rat,int)",e=>{0<=e.right.value?e.bs(this.lime.build("rational")(this.lime.direct([e.left.nPlace,"^",e.right]),this.lime.direct([e.left.dPlace,"^",e.right]))):e.bs(this.lime.build("rational")(this.lime.direct([e.left.dPlace,"^","-",e.right]),this.lime.direct([e.left.nPlace,"^","-",e.right])))})}}var exponent=LimeFunctionExponent;class LimeFunctionModulo extends require$$38{constructor(e,t){super(e,{name:"modulo",mode:t}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","eb(int,int)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.build("integer")(e.left.value%e.right.value))})}}var modulo=LimeFunctionModulo;class LimeFunctionMultiply extends require$$38{constructor(e,t){super(e,{name:"multiply",mode:t}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.build("integer")(e.left.value*e.right.value))}),this.algorithms.set("b(rat,rat)",e=>{e.bs(this.lime.build("rational")(this.lime.direct([e.left.nPlace,"*",e.right.nPlace]),this.lime.direct([e.left.dPlace,"*",e.right.dPlace])))})}}var multiply=LimeFunctionMultiply;class LimeFunctionNegative extends require$$38{constructor(e,t){super(e,{name:"negative",mode:t}),this.operations.r=["tr(_!)","tr(_+)","tr(_-)","cr(var->expr)","cr(bool->int)","er(int)","er(rat)","er(_+)","er(_-)"],this.algorithms.set("r(int)",e=>{e.rus(this.lime.direct([-1,"*",e.right]))}),this.algorithms.set("r(rat)",e=>{e.rus(this.lime.build("rational")(this.lime.direct(["-",e.right.nPlace]),e.right.dPlace))}),this.algorithms.set("r(_+)",e=>{e.rus(this.lime.refer("_-"))}),this.algorithms.set("r(_-)",e=>{e.rus(this.lime.refer("_+"))})}}var negative=LimeFunctionNegative;class LimeFunctionPositive extends require$$38{constructor(e,t){super(e,{name:"positive",mode:t}),this.operations.r=["tr(_!)","tr(_+)","tr(_-)","cr(var->expr)","cr(bool->int)","er(int)","er(rat)","er(_+)","er(_-)"],this.algorithms.set("r(int)",e=>{e.rus(this.lime.direct([1,"*",e.right]))}),this.algorithms.set("r(rat)",e=>{e.rus(this.lime.build("rational")(this.lime.direct([e.right.nPlace]),e.right.dPlace))}),this.algorithms.set("r(_+)",e=>{e.rus(this.lime.refer("_+"))}),this.algorithms.set("r(_-)",e=>{e.rus(this.lime.refer("_-"))})}}var positive=LimeFunctionPositive;class LimeFunctionSubtract extends require$$38{constructor(e,t){super(e,{name:"subtract",mode:t}),this.operations.b=["tz(_-)","tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.build("integer")(e.left.value-e.right.value))}),this.algorithms.set("b(rat,rat)",e=>{e.bs(this.lime.build("rational")(this.lime.direct([e.left.nPlace,"*",e.right.dPlace,"-",e.right.nPlace,"*",e.left.dPlace]),this.lime.direct([e.left.dPlace,"*",e.right.dPlace])))})}}var subtract=LimeFunctionSubtract;class LimeFunctionBitwiseAnd extends require$$38{constructor(e,t){super(e,{name:"bitwiseAnd",mode:t}),this.operations.b=["tf(&&)","tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","eb(int,int)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.direct([e.left.value&e.right.value]))})}}var bitwiseAnd=LimeFunctionBitwiseAnd;class LimeFunctionBitwiseNot extends require$$38{constructor(e,t){super(e,{name:"bitwiseNot",mode:t}),this.operations.r=["tr(_!)","tr(_+)","tr(_-)","cr(var->expr)","cr(bool->int)","er(int)"],this.algorithms.set("r(int)",e=>{e.rus(this.lime.direct([~e.right.value]))})}}var bitwiseNot=LimeFunctionBitwiseNot;class LimeFunctionBitwiseOr extends require$$38{constructor(e,t){super(e,{name:"bitwiseOr",mode:t}),this.operations.b=["tf(||)","tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","eb(int,int)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.direct([e.left.value|e.right.value]))})}}var bitwiseOr=LimeFunctionBitwiseOr;class LimeFunctionShiftLeft extends require$$38{constructor(e,t){super(e,{name:"shiftLeft",mode:t}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","eb(int,int)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.direct([e.left.value<<e.right.value]))})}}var shiftLeft=LimeFunctionShiftLeft;class LimeFunctionShiftRight extends require$$38{constructor(e,t){super(e,{name:"shiftRight",mode:t}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","eb(int,int)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.direct([e.left.value>>e.right.value]))})}}var shiftRight=LimeFunctionShiftRight;class LimeFunctionEqual extends require$$38{constructor(e,t){super(e,{name:"equal",mode:t}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.build("boolean")(e.left.value===e.right.value))}),this.algorithms.set("b(rat,rat)",e=>{e.bs(this.lime.direct([e.left.nPlace,"*",e.right.dPlace,"==",e.right.nPlace,"*",e.left.dPlace]))})}}var equal=LimeFunctionEqual;class LimeFunctionGreater extends require$$38{constructor(e,t){super(e,{name:"greater",mode:t}),this.operations.b=["tf(>=)","tf(>>)","tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.build("boolean")(e.left.value>e.right.value))}),this.algorithms.set("b(rat,rat)",e=>{e.bs(this.lime.direct([e.left.nPlace,"*",e.right.dPlace,">",e.right.nPlace,"*",e.left.dPlace]))})}}var greater=LimeFunctionGreater;class LimeFunctionGreaterEqual extends require$$38{constructor(e,t){super(e,{name:"greaterEqual",mode:t}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.build("boolean")(e.left.value>=e.right.value))}),this.algorithms.set("b(rat,rat)",e=>{e.bs(this.lime.direct([e.left.nPlace,"*",e.right.dPlace,">=",e.right.nPlace,"*",e.left.dPlace]))})}}var greaterEqual=LimeFunctionGreaterEqual;class LimeFunctionNotEqual extends require$$38{constructor(e,t){super(e,{name:"notEqual",mode:t}),this.operations.b=["tf(!==)","tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.build("boolean")(e.left.value!==e.right.value))}),this.algorithms.set("b(rat,rat)",e=>{e.bs(this.lime.direct([e.left.nPlace,"*",e.right.dPlace,"!=",e.right.nPlace,"*",e.left.dPlace]))})}}var notEqual=LimeFunctionNotEqual;class LimeFunctionSmaller extends require$$38{constructor(e,t){super(e,{name:"smaller",mode:t}),this.operations.b=["tf(<=)","tf(<<)","tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.build("boolean")(e.left.value<e.right.value))}),this.algorithms.set("b(rat,rat)",e=>{e.bs(this.lime.direct([e.left.nPlace,"*",e.right.dPlace,"<",e.right.nPlace,"*",e.left.dPlace]))})}}var smaller=LimeFunctionSmaller;class LimeFunctionSmallerEqual extends require$$38{constructor(e,t){super(e,{name:"smallerEqual",mode:t}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(bool->int)","cr(bool->int)","cb(int->rat,rat)","cb(rat,int->rat)","eb(int,int)","eb(rat,rat)"],this.algorithms.set("b(int,int)",e=>{e.bs(this.lime.build("boolean")(e.left.value<=e.right.value))}),this.algorithms.set("b(rat,rat)",e=>{e.bs(this.lime.direct([e.left.nPlace,"*",e.right.dPlace,"<=",e.right.nPlace,"*",e.left.dPlace]))})}}var smallerEqual=LimeFunctionSmallerEqual;class LimeFunctionFactorial extends require$$38{constructor(e,t){super(e,{name:"factorial",mode:t}),this.operations.l=["tz(_!)","tf(!=)","cl(var->expr)","cl(bool->int)","el(int)"],this.algorithms.set("l(int)",e=>{if(e.left.value<0)throw new Error("warn:negativeFactorial");0<e.left.value?e.lus(this.lime.direct([e.left,"*","(",e.left,"-",1,")","!"])):e.lus(this.lime.direct([1]))})}}var factorial=LimeFunctionFactorial;class LimeFunctionLogicalAnd extends require$$38{constructor(e,t){super(e,{name:"logicalAnd",mode:t}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(!bool->bool)","cr(!bool->bool)","eb(bool,bool)"],this.algorithms.set("b(bool,bool)",e=>{e.bs(this.lime.build("boolean")(e.left.value&&e.right.value))})}}var logicalAnd=LimeFunctionLogicalAnd;class LimeFunctionLogicalNot extends require$$38{constructor(e,t){super(e,{name:"logicalNot",mode:t}),this.operations.r=["tr(_!)","tr(_+)","tr(_-)","cr(var->expr)","cr(!bool->bool)","er(bool)"],this.algorithms.set("r(bool)",e=>{e.rus(this.lime.build("boolean")(!e.right.value))})}}var logicalNot=LimeFunctionLogicalNot;class LimeFunctionLogicalOr extends require$$38{constructor(e,t){super(e,{name:"logicalOr",mode:t}),this.operations.b=["tr(_!)","tr(_+)","tr(_-)","cl(var->expr)","cr(var->expr)","cl(!bool->bool)","cr(!bool->bool)","eb(bool,bool)"],this.algorithms.set("b(bool,bool)",e=>{e.bs(this.lime.build("boolean")(e.left.value||e.right.value))})}}var logicalOr=LimeFunctionLogicalOr;class LimeFunctionAssign extends require$$38{constructor(e,t){super(e,{name:"assign",mode:t}),this.operations.b=["tf(==)","tr(_+)","tr(_-)","cr(var->expr)","eb(var,expr)"],this.algorithms.set("b(var,expr)",e=>{this.lime.variables.set(e.left.key,e.right),e.bs(e.left)})}}var assign=LimeFunctionAssign;class LimeFunctionCommonBracket extends require$$38{constructor(e,t){super(e,{name:"commonBracket",mode:t}),this.operations.n=["en()"],this.algorithms.set("n()",e=>{const t=e["data"],r=[];let i=e.pos,s=0;for(;i+1<t.length&&!(this.lime.identify("commonBracket")(t[i+1])&&(s+="n"===t[i+1].mode?1:-1,s<0));)r.push(t[++i]);if(0<=s)throw new Error("error:unmatchedBrackets");e.ns(r.length+2,this.lime.direct([...r]))})}}var commonBracket=LimeFunctionCommonBracket;class LimeEquation{constructor(e,t){this.lime=e,this.input=t,this.solution=[]}get steps(){return this.solution.length}get runtime(){return this.solution[this.steps-1].timestamp-this.solution[0].timestamp}get result(){return this.solution[this.steps-1].data}record(e){this.lime.config.promptShowSteps&&console.log(e.data),this.solution.push(e)}}var equation=LimeEquation;class LimeStep{constructor(e,t,r){this.lime=e,this.data=Types.isArray(t)?t:[],this.pos=Types.isNumber(r)&&0<=r&&r<this.data.length?r:-1,this.timestamp=Date.now()}get left(){return this.data[this.pos-1]}get func(){return this.data[this.pos]}get right(){return this.data[this.pos+1]}lpi(...e){return this.lime.identify(...e)(this.left)}fi(...e){return this.lime.identify(...e)(this.func)}rpi(...e){return this.lime.identify(...e)(this.right)}bpi(...e){return this.lime.identify(...e)(this.left,this.right)}lps(...e){this.data.splice(this.pos-1,1,...e)}fs(...e){this.data.splice(this.pos,1,...e)}rps(...e){this.data.splice(this.pos+1,1,...e)}lus(...e){this.data.splice(this.pos-1,2,...e)}rus(...e){this.data.splice(this.pos,2,...e)}bs(...e){this.data.splice(this.pos-1,3,...e)}ns(e,...t){this.data.splice(this.pos,e,...t)}}var step=LimeStep;class LimeToken{constructor(e,t,r){this.lime=e,this.type=["integer","whitespace","symbol","variable"].includes(t)?t:"symbol",this.value=Types.isString(r)?r:""}}var token=LimeToken,require$$0=about,require$$1$1=clear,require$$2=config,require$$3=help,require$$4=list,require$$5=boolean,require$$6=integer,require$$7=rational,require$$8=variable,require$$9=add,require$$10=decimal,require$$11=divide,require$$12=exponent,require$$13=modulo,require$$14=multiply,require$$15=negative,require$$16=positive,require$$17=subtract,require$$18=bitwiseAnd,require$$19=bitwiseNot,require$$20=bitwiseOr,require$$21=shiftLeft,require$$22=shiftRight,require$$23=equal,require$$24=greater,require$$25=greaterEqual,require$$26=notEqual,require$$27=smaller,require$$28=smallerEqual,require$$29=factorial,require$$30=logicalAnd,require$$31=logicalNot,require$$32=logicalOr,require$$33=assign,require$$34=commonBracket,require$$36=equation,require$$39=step,require$$40=LimeToken;const Module=new Map;Module.set("about",require$$0),Module.set("clear",require$$1$1),Module.set("config",require$$2),Module.set("help",require$$3),Module.set("list",require$$4),Module.set("boolean",require$$5),Module.set("integer",require$$6),Module.set("rational",require$$7),Module.set("variable",require$$8),Module.set("add",require$$9),Module.set("decimal",require$$10),Module.set("divide",require$$11),Module.set("exponent",require$$12),Module.set("modulo",require$$13),Module.set("multiply",require$$14),Module.set("negative",require$$15),Module.set("positive",require$$16),Module.set("subtract",require$$17),Module.set("bitwiseAnd",require$$18),Module.set("bitwiseNot",require$$19),Module.set("bitwiseOr",require$$20),Module.set("shiftLeft",require$$21),Module.set("shiftRight",require$$22),Module.set("equal",require$$23),Module.set("greater",require$$24),Module.set("greaterEqual",require$$25),Module.set("notEqual",require$$26),Module.set("smaller",require$$27),Module.set("smallerEqual",require$$28),Module.set("factorial",require$$29),Module.set("logicalAnd",require$$30),Module.set("logicalNot",require$$31),Module.set("logicalOr",require$$32),Module.set("assign",require$$33),Module.set("commonBracket",require$$34),Module.set("command",require$$35),Module.set("equation",require$$36),Module.set("expression",require$$37),Module.set("function",require$$38),Module.set("step",require$$39),Module.set("token",require$$40);var module=Module,require$$1=Module;class Lime{constructor(e){this.config={...require$$0$2,...e},this.module=require$$1,this.variables=new Map,this.memory=[]}get answer(){return this.variables.get("ans").print()}prompt(e){try{return this.run(e)}catch(e){return this.message(e)}}evaluate(e){try{return this.run(e)}catch(e){return console.log(this.message(e)),""}}run(e){if(!Types.isString(e))throw new Error("error:inputNotStringInPrompt");if(0===e.length)throw new Error("error:inputEmptyInPrompt");this.variables.has("ans")||this.variables.set("ans",this.direct([0]));const t=this.build("equation")(e);return this.lex(t),this.identify("command")(t.result[0])?t.result[0].execute(e):(this.memory.push(t),this.config.promptShowRuntime&&console.log(`Equation runtime: ${t.runtime/1e3}s`),this.variables.set("ans",t.result[0]),this.answer)}direct(e){try{if(!Types.isArray(e))throw new Error("error:inputNotArrayInDirect");if(0===e.length)throw new Error("error:inputEmptyInDirect");const t=this.build("equation")(e);return t.record(this.build("step")(t.input.map(e=>!Types.isString(e)&&!Types.isNumber(e)||Types.isUndefined(this.refer(e))?e:this.refer(e)))),this.process(t),t.result[0]}catch(e){return this.config.testMode?this.message(e):void console.log(this.message(e))}}message(e){var t=new Error("issue:invalidMessage");if(!Message.hasOwnProperty(e.message)||!e.message.includes(":"))return console.log(e),this.message(t);var r=e.message.split(":");let i;switch(r[0]){case"error":i="!";break;case"warn":i="?";break;case"issue":i="i";break;default:return this.message(t)}return this.config.developmentMode&&"i"===i&&console.log(e),`[${i}] ${r[1]}\n${Message[e.message]} ${"i"===i?`\n${Message.github}`:""}`}lex(e){const r=e.input,i=[];for(let t=0;t<r.length;t++){const s=r[t];let e=s;if(s.match(/\s/))i.push(this.build("token")("whitespace"));else if(s.match(/\d/)){for(;t+1<r.length&&r[t+1].match(/\d/);)e+=r[++t];i.push(this.build("token")("integer",e))}else if(s.match(/\w/)){for(;t+1<r.length&&r[t+1].match(/\w/);)e+=r[++t];i.push(this.build("token")("variable",e))}else i.push(this.build("token")("symbol",e))}e.record(i),this.parse(e)}parse(e){const t=e.solution.shift(),r=[];for(let e=0;e<t.length;e++)switch(t[e].type){case"whitespace":break;case"integer":r.push(this.build("integer")(t[e].value));break;case"symbol":case"variable":if(Refer.hasOwnProperty(t[e].value))r.push(this.refer(t[e].value));else{if("variable"!==t[e].type)throw new Error("error:invalidSymbol");r.push(this.build("variable")(t[e].value))}break;default:throw new Error("issue:invalidTokenInParse")}e.record(this.build("step")(r)),this.identify("command")(e.result[0])||this.process(e)}process(r){for(;;){let t=-1;for(let e=0;e<r.result.length;e++)this.identify("function")(r.result[e])&&(t=t<0||r.result[e].order>r.result[t].order?e:t);if(t<0)break;var e=this.build("step")(r.result,t);r.record(r.result[t].evaluate(e))}if(1!==r.result.length)throw new Error("issue:invalidResultLengthInProcess");r.record(this.build("step")([r.result[0].simplify()]))}identify(...r){if(r.every(e=>this.module.has(e)))return(...e)=>e.every(t=>r.some(e=>Types.isClass(this.module.get(e),t)));throw new Error("issue:invalidModuleInIdentify")}build(t){if(this.module.has(t))return(...e)=>new(this.module.get(t))(this,...e);throw new Error("issue:invalidModuleInBuild")}refer(e){return Types.isNumber(e)?this.build("integer")(e):Refer.hasOwnProperty(e)?this.build(Refer[e][0])(...Refer[e].slice(1).map(e=>Types.isArray(e)?this.build(e[0])(...e.slice(1)):e)):void 0}}var lime=e=>new Lime(e);export{lime as default};
