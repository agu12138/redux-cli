let fs=require("fs");
let stat=fs.stat;
function deleteFolder(path) {
    var files = [];
    if( fs.existsSync(path) ) {
        files = fs.readdirSync(path);
        files.forEach(function(file,index){
            var curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolder(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        //fs.rmdirSync(path);
    }
}

function copyFile(src,dst){
        //读取目录
        fs.readdir(src,function(err,paths){
            console.log(paths)
            if(err){
                throw err;
            }
            paths.forEach(function(path){
                var _src=src+'/'+path;
                var _dst=dst+'/'+path;
                var readable;
                var writable;
                stat(_src,function(err,st){
                    if(err){
                        throw err;
                    }
                    
                    if(st.isFile()){
                        readable=fs.createReadStream(_src);//创建读取流
                        writable=fs.createWriteStream(_dst);//创建写入流
                        readable.pipe(writable);
                    }else if(st.isDirectory()){
                        exists(_src,_dst,copy);
                    }
                });
            });
        });
    }
module.exports={
    deleteFolder,
    copyFile
}