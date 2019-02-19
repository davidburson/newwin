import { app } from 'electron';
import fs from 'fs-extra';
import path from 'path';

app.on('ready', () => {
    try {
        const winName = process.argv[1];
        console.log('args', process.argv, process.cwd(), __dirname);

        const winNameCamelCase = winName
            .split('-')
            .map(n => `${n[0].toUpperCase()}${n.slice(1)}`)    // upper case the first character of each section of the name
            .join('');
        console.log('camelcase', winNameCamelCase);

        // user enters the lowercase, hyphenated version of the new window's name.  We covert it to CamelCase where appropriate.
        const insertWindowName = (sourceFile, destFile)=> {
            const destDir = path.dirname(destFile);
            console.log('destdir', destDir);
            fs.ensureDirSync(destDir);

            console.log('source/dest files', sourceFile, destFile);
            const sourceContent = fs.readFileSync(sourceFile, 'utf8');
            console.log('sourceContent', sourceContent)
            const destContent = sourceContent
                .replace(/newwin/g, winName)
                .replace(/NewWin/g, winNameCamelCase);

            fs.writeFileSync(destFile, destContent, 'utf8');
        };


        insertWindowName(path.join(__dirname, 'win-files', 'win.html.txt'), path.join(process.cwd(), 'public', 'win.html'));
        insertWindowName(path.join(__dirname, 'win-files', 'win.js.txt'), path.join(process.cwd(), 'src', 'win.js'));
        insertWindowName(path.join(__dirname, 'win-files', 'win.jsx.txt'), path.join(process.cwd(), 'src', 'components', 'win.jsx'));

        console.log('done NewWin', winName);
        app.quit();
    } catch (err) {
        console.error(err);
        app.quit();
    }
});
