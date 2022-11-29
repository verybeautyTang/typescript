// 声明文件
// 识别已有的js库的类型
// 1、要知道js库是被编译成什么类型【看源码：源码里面顶部作用域有var、function或者用的window。这种可能是全局库】
    // 1、 全局库 <script src="" /> 只需要这样去🈯️定和使用
    // 2、umd： 既可以作为模块，又可以作为全局使用
    // 现在全局库很少，一般都是用umd

    console.log(documentTitle)