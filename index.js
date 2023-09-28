const fs = require('fs');
const path = require('path');

function replaceAllStr(str, targetStr, replaceStr) {
    // 把原来的字符串 通过正则 匹配到所有的目标字符，统一替换成要替换的字符
    return str.replace(new RegExp(targetStr, 'g'), replaceStr);
}

function printAllFilesInFolder(folderPath, fileSuffix = '') {
    const files = fs.readdirSync(folderPath); // 读取对应目录【数组，文件夹或文件】
    files.forEach((file) => { // 遍历对应目录内容
        const filePath = path.join(folderPath, file); // 拼成标准路径
        const stats = fs.statSync(filePath); // fs模块读取此路径得到文件信息状态
        if (stats.isFile() && path.extname(file) === fileSuffix) { // 若是文件且后缀名对得上
            let fileStr = fs.readFileSync('./' + filePath, 'utf-8') // 就去读取这个文件的内容

            /**
             * 第一步，把文件中的filterable关键字字符串替换成空
             * */ 
            let newFileStr = replaceAllStr(fileStr, 'filterable', '') 
            /**
             * 第二步，把文件中的el-select通过替换的方式加属性filterable
             * */ 
            // let newFileStr = replaceAllStr(fileStr, '<el-select', '<el-select filterable ')

            fs.writeFileSync(filePath, newFileStr)

        } else if (stats.isDirectory()) { // 若是文件夹
            printAllFilesInFolder(filePath, fileSuffix); // 文件夹就递归继续操作
        }
    });
}

// 用法示例：传入文件夹路径来打印所有文件
const folderPath = './page';
const fileSuffix = '.vue';
printAllFilesInFolder(folderPath, fileSuffix);
