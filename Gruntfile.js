module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },

        // Generates a styleguide via CSS comments
        dss: {
            docs: {
                files: {
                  'patterns/': 'assets/**/*.{css,scss,styl}'
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-dss');

    grunt.registerTask('default', ['compass', 'dss']);
};