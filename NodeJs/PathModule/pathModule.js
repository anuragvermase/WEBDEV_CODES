
//The path is core module in NodeJs. Therefore, you can use it without installing.
const { log } = require('console');
const path = require('path');

//represents the platform -specific path separator
console.log(path.sep); // o/p : \

//represents path delimiter 
console.log(path.delimiter); //o/p : ;

//current filepath
const currentFilePath = __filename;
console.log(currentFilePath); //o/p : d:\NodeJs\PathModule\pathModule.js

// path modules
//1. path.basename(path,[.ext])
let r = path.basename(currentFilePath);
console.log(r); // o/p : pathModule.js

//Gives only filename without extension 
let r1 = path.basename(currentFilePath, '.js');
console.log(r1); // o/p : pathModule

//2. path.dirname(path)
let r2 = path.dirname(currentFilePath);
console.log(r2); // o/p : d:\NodeJs\PathModule

//3. path.extname(path)
let r3 = path.extname(currentFilePath);
console.log(r3); // o/p : .js

console.log(path.extname('index.js.md')); // o/p: .md

//4. path.format(pathObj)
let pathToFile = path.format({
    dir : 'd:\\public_html\home\js',
    base: 'app.js'
});
console.log(pathToFile); // o/p : d:\public_htmlhomejs\app.js

//5. path.isAbsolute
let r4 = path.isAbsolute('c:\\node.js\\');
console.log(r4); // o/p : true

let r5 = path.isAbsolute('home\ ');
console.log(r5); // o/p : false

//6. path.join(...paths)
let pathToDir = path.join('c:\home', 'js', 'app.js');
console.log(pathToDir); // o/p : c:home\js\app.js

//7. path.parse(path)

let pathObj = path.parse(currentFilePath);
console.log(pathObj);
/*
o/p :
{
  root: 'd:\\',
  dir: 'd:\\NodeJs\\PathModule',
  base: 'pathModule.js',
  ext: '.js',
  name: 'pathModule'
}
*/

//8. path.normalize(path)
let pathToDir1 = path.normalize('c:\\node.js/module//js/dist');
console.log(pathToDir1);  //o/path : c:\node.js\module\js\dist

//9.path.relative(from, to)
let relativePath = path.relative('c:\ user\ config','c:\ user\ js');
console.log(relativePath); // o/p : ..\ user js

//10. path.resolve(...paths)
//returns current directory if not pass any argument
console.log(path.resolve()); //o/p : D:\NodeJs

let path1 = path.resolve('html','index.html');
console.log(path1); //o/p : D:\NodeJs\html\index.html