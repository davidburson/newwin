# newwin
command line app to add a default window to a react app

## Usage
- Run from a command prompt in the top directory of your repo.
- Pass the lowercase hyphenated name of the window you want to create in that repo.
- The appropriate .html, .js, and .jsx files will be created in your repo.

Example: `newwin my-nifty-window` will create the appropriate files for MyNiftyWindow.

## Setup
 
### Mac
Create a link `newwin` in `/usr/local/bin`, to where NewWin.app is installed.  That makes it available from any directory.

Note that to do this, you have to link to the actual executable inside the .app.  You probably will also need sudo permission.

Example: `sudo ln -s /Applications/NewWin.app/Contents/MacOS/NewWin ./newwin`

