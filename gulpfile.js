var gulp = require("gulp");
var g = require("gulp-load-plugins")();

gulp.task("less", function() {
	gulp.src("src/style.less")
		.pipe(g.cached("less"))
		.pipe(g.progeny())
		.pipe(g.less())
		.pipe(gulp.dest("bin"));
});

gulp.task("watch", function() {
	gulp.watch("src/**/*.less", ["less"]);
});