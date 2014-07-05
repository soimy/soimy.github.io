module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
      responsive_images: {
        myTask: {
          options: {
			engin: im,
            sizes: [{
                name: 'phone',
                width: 300
            },{
                name: 'phone',
                width: 600,
                suffix: '@2x'
            },{
                name: 'tablet',
                width: 760
            },{
                name: 'tablet',
                width: 1520,
                suffix: '@2x'
            },{
                name: 'desktop',
                width: 640
            },{
                name: 'desktop',
                width: 1280,
                suffix: '@2x'
            }]
          },
          files: [{
            expand: true,
            src: ['**.{jpg,gif,png}'],
            cwd: 'image/raw',
            dest: 'image/resp/'
          }]
        }
      },
      responsive_images_converter: {
        default: {
            options: {
                asset: '/image/resp/'
            },
            src: [ '_posts/**.md' ],
        }
      },
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-responsive-images-converter');


    // Default task(s).
    grunt.registerTask( 'default', [ 'responsive_images', 'responsive_images_converter' ] );
};
