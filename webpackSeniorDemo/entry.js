//声明一个常量，这里其实有个小坑，我简单说明一下，由于const声明的是一个常量，
//如果你对ES6有一点点了解就会知道常量必须在声明的时候就初始化其初始值
//并且初始值是不可以改变的，但是这里声明的是一个对象，对象是引用类型，
//所以const不可改变的只是指向这个对象的指针，其内容仍旧是可以改变的
const entry ={};  
//声明路径属性
entry.path={
    main:'./src/main.js',
    //引入
    jquery:'jquery',
    vue:"vue"
}
//导出该变量
module.exports = entry;