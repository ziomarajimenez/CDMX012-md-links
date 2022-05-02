# mdLinks

## Content

- [1. Project description](#1-project-description)
- [2. How to install it](#2-how-to-install-it)
- [3. How to use it](#3-how-to-use-it)
- [4. Examples](#4-examples)
- [5. Flowchart](#5-flowchart)

---

## 1. Project description

mdLinks is a library created to identificate, extract and analyze [markdown links](https://www.markdownguide.org/getting-started/)
found in the path provided by the user. It was programmed to work with files or directories and is capable to recursively read
any folder inside the given path and find all the markdown links contained.

The project provides the user with different options to validate and create links stats, using
[Axios](https://axios-http.com/docs/intro) library to make HTTP requests and get the server code
and answer if needed. It also implements the [Chalk](https://www.npmjs.com/package/chalk) package to provide
the user with more understandable results.

To better understand how it works we have created a flowchart explaining all the available options.

## 2. How to install it

Run the following command in your prefered terminal:

`npm i md-links-zj`

## 3. How to use it

Once you have installed it, you'll have to type in your terminal **mdLinks** followed by the path you want
to analyze (it can be an absolute or a relative path) and lastly type any of the options available described
below, so you'll have something like this:

`mdLinks <path> --validate --stats`

If there aren't any options selected, the algorithm will only return href, file path and associated text, for each one
of the links found.

Here are the available options mentioned before:

- `--help` or `-h` : Will show a list in your terminal of the
  available options and guide to use CLI.

- `--validate` or `-v`: Will make an HTTP request for each link an return
  the defoult information with the status and ok or fail according
  to the server's answer.

- `--stats` or `-s`: Will show the number of links found, and the unique urls.

- `--validate --stats`: Will show the number of links found,
  unique and broken links.

## 4. Examples

_Providing a relative path_

Input: `mdLinks './docs/fileOne.md`

Output: ![img1](https://github.com/ziomarajimenez/CDMX012-md-links/blob/main/1.PNG?raw=true)

_Providing an absolute path:_

Input: `mdLinks 'C:\Users\kevin\Desktop\laboratoria\CDMX012-md-links\docs\fileTwo.md'`

Output: IMG2

_Using --validate_

Input: `mdLinks './docs/fileOne.md' --validate`

Output: IMG3

_Using --stats_

Input: `mdLinks './docs/fileOne.md' --stats`

Output: IMG4

_Using --validate --stats_

Input: `mdLinks './docs/fileOne.md' --validate --stats`

Output: IMG5

## 5. Flowchart

IMG
