## How to setup Tailwind CSS

Step 1:  Install Tailwind CSS
Install tailwindcss and @tailwindcss/cli via npm.

Terminal me daalo ye:
```
npm install tailwindcss @tailwindcss/cli
```
Step 2: Import Tailwind in your CSS
Add the @import "tailwindcss"; import to your main CSS file.

src/input.css me ye file banao aur ye import karo:
```
@import "tailwindcss";
```
Step 3: Start the Tailwind CLI build process
Run the CLI tool to scan your source files for classes and build your CSS.

Terminal me daalo ye:
```
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```
Step 4: Start using Tailwind in your HTML
Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.

src/index.html:
```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```