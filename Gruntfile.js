
'use strict';

module.exports = function(grunt) {

    // Configuration
    grunt.initConfig ({
        pkg: grunt.file.readJSON('package.json'),

        // Before generating any new files, remove any previously-created files.
        clean: {
            test: [
                'tmp',
                'tmp2',
                'tmp3',
                'tmp4',
                'tmp5',
                '.sass-cache'
            ],
            example: ['styleguide/', 'patterns/sass/readme.md']
        },

        compass: {
            compile: {
                options: {
                    sassDir: 'patterns/sass',
                    cssDir: 'patterns/css',
                    specify: 'patterns/sass/'
                }
            },
            compileWithConfigFile: {
                options: {
                    config: 'config.rb'
                }
            },
            clean: {
                option: {
                    clean: true
                }
            },
            options: {
                outputStyle: 'compressed'
            }
        },

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
        }
    });

    grunt.registerTask('compass', [
        'clean',
        'mkdir:tmp',
        'mkdir:tmp2',
        'mkdir:tmp3',
        'compass',
        'clean'
    ]);


    grunt.loadNpmTasks('sassdown');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'compass', 'sassdown']);
};