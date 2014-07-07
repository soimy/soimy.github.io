module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
      responsive_images: {
        myTask: {
          options: {
			//engine:im,
            sizes: [{
                name: 'phone',
                width: 300
            },{
                name: 'phone',
                width: 600,
                suffix: '@2x'
            },{
                name: 'tablet',
                width: 640
            },{
                name: 'tablet',
                width: 1280,
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
            cwd: 'images/2013-09-03',
            dest: 'images/resp/'
          }]
        }
      },
      responsive_images_converter: {
        default: {
            options: {
                asset: '/images/resp/'
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
