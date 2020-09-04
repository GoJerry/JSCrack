const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;

const t = require("@babel/types");

const generator = require("@babel/generator").default;
const fs = require('fs');

var jscode = fs.readFileSync("./slide.js", {
    encoding: "utf-8"
});

const {$_Co} = require('../geetest/base');

var new_array = [];

const visitor = {
    VariableDeclaration(path){
        const {declarations} = path.node;
        if(!t.isMemberExpression(declarations[0].init))return;
        if(declarations[0].init.property.name !== "$_Co")return;
        if(declarations.length !==3 || declarations[0].init.property === undefined)return;

        let value1 = declarations[0].id.name;
        let value2 = declarations[2].id.name;
        new_array.push(value1, value2);
    },

    CallExpression(path){
        var node = path.node;
        if(node.callee === undefined || node.callee.name === undefined)return;
        if(new_array.indexOf(node.callee.name) === -1) return;
        let arg = node.arguments[0].value;
        let value = $_Co(arg);
        console.log(value);
        path.replaceWith(t.valueToNode(value))
    },
    StringLiteral(path) {
        delete path.node.extra
    }

};

let ast = parser.parse(jscode);
traverse(ast, visitor);
let {code} = generator(ast, opts = {jsescOption: {"minimal": true}});
fs.writeFile('decode_slide.js', code, (err)=>{});