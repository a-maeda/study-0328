function devideFolder(folderName){
	var pos = folderName.lastIndexOf('/');
	if(pos == -1){
		document.write(folderName + '<br>');
	}else{
		document.write(folderName + '<br>');
		var newFolder = folderName.substring(0, pos);
		devideFolder(newFolder);
	}
}
var folderName = 'c/temp/myfolder/sample';
devideFolder(folderName);