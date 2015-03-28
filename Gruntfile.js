module.exports = function(grunt){
 
  pkg: grunt.file.readJSON('package.json'),  //package.jsonを取得
 
  grunt.initConfig({      //grunt.initConfigの中にタスクの設定を記述する
 
    sass: {                         // タスクの名前
      dist: {                       // ターゲット
        options: {                  // ターゲットのオプション。タスクのデフォルトの設定を上書きする
          style: 'expanded'
        },
        files: {                    
          'css/style.css': 'sass/test.scss'   //生成されるcss:’参照元のscss'
        }
      }
    },
    watch: {
      styles: {
        files: ['sass/*.scss'],   //監視するファイルを指定（sassフォルダのscssファイル全て）
        tasks: ['sass']   //指定したファイルが変更された場合行うタスク（sassのコンパイルをする）
      }
    }
  });
 
  // loadNpmTasksを使用して、プラグインを読み込む
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
  //defaultと設定することで、登録しているタスクを全て順番に実行する
  grunt.registerTask('default', ['sass', 'watch']);  
 
};