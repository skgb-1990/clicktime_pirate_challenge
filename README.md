# Readme

1. Open the current directory and initialize git.
```
git init
```
2. Clone the repo.
```
git clone https://github.com/skgb-1990/clicktime_pirate_challenge.git
```
3. CD to clicktime_pirate_challenge.

4. Make sure you have the following packages installed on the system.
```
npm install -g run-sequence gulp bower gulp-clean gulp-jshint gulp-uglify gulp-minify-css gulp-connect --save
```

5. Once this is done. Run the below command.
```
npm install
```
6. Intsall all the bower packages.
```
bower install
```
7. Clean the distribution build.
```
gulp clean
```
8. Make the build
```
gulp build
```
9. Once the build is done. Open the build url
```
http://localhost:9999
```
10. Link to the demo app hosted on heroku
[App Link](https://tranquil-forest-44348.herokuapp.com/)
