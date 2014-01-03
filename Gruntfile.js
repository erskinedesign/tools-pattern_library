
'use strict';

module.exports = function(grunt) {

    // Configuration
    grunt.initConfig ({
        pkg: grunt.file.readJSON('package.json'),




    /* ==========================================================================
       Compass: CSS authoring framework
       ========================================================================== */

        compass: {
            compile: {
                options: {
                    sassDir: 'patterns/sass',
                    cssDir: 'patterns/css'
                }
            },
            compileWithConfigFile: {
                options: {
                    config: 'config.rb'
                }
            },
            options: {
                outputStyle: 'compressed'
            }
        },


     /* ==========================================================================
        Sassdown: automatically generate styleguide from CSS comments
        ========================================================================== */

        sassdown: {
            options: {
                assets: [
                'patterns/css/*.css'
                ],
                // Task specific options go here.
            },

            files: {
                expand: true,
                cwd: 'patterns/sass',
                src: [
                    '**/**/*.{scss,sass}'
                ],
                dest: 'styleguide/'
            }
        },

    /* ==========================================================================
        Watch: build files on save
        ========================================================================== */

        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['compass']
            }
        }

    }); // grunt.initConfig



    grunt.loadNpmTasks('sassdown');
    grunt.loadNpmTasks('grunt-contrib-compass');
    // grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['compass', 'sassdown', 'watch']);
};