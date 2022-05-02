#! /usr/bin/env node
const yargs = require("yargs");
const chalk = require("chalk"); 
const mdLinks = require("../md-links");

const error = chalk.red.bold;
const warning = chalk.yellow.bold;
const success = chalk.green.bold;
const sts= chalk.blue.bold;
const under = chalk.underline;;

// -------- CLI config 
const usage = ("\nUsage: mdLinks <path> --validate --stats \n (Validate and stats are optional. Both at the same time, can also be used. Relative and absolute paths are accepted)");const options = yargs  
      .usage(usage)  
      .option('validate', {
        alias: 'v',
        demandOption: false,
        default: false,
        description: 'Validates the links contained in the markdown files of the path provided',
        type: 'boolean'
})
.option('stats', {
        alias: 's',
        demandOption: false,
        default: false,
        description: 'Gives stats for the links contained in the markdown files of the path provided',
        type: 'boolean'
})  
    .alias('help', 'h')
    .locale('en')
    .showHelpOnFail(false, 'Please type --help for available options')
    .epilog(under('Created by Ziomara Jiménez, 2022\n'))
    .argv;                                                                                              

    const argv = process.argv;
    
      // -------- Functions for stats
    const totalLinks =  (array) =>{
        return  array.length;
    }
    
    const  uniqueLinks = (array) => {
        let unique = new Set (array.map((obj) => obj.href)).size;
        return unique;
    }
    
    const  brokenLinks = (array) => {
        let bkn = 0;
            for(let obj of array) {
            if(obj.ok !== 'ok'){
                bkn += 1;  
            }};
        return bkn;
    }
    

 // -------- Main function for CLI
    const main = (args) => {
        if(args.length <= 2){
            console.log(warning('Please type --help for available options'))
            return
        }

        const userPath = args[2].toString();
        const validate = args.includes('--validate');
        const stats = args.includes('--stats');
        
    
        const verifyMdLinks = mdLinks(userPath, validate);
        verifyMdLinks.then(data => {
            const total = totalLinks(data);
            const unique = uniqueLinks(data);
            const broken = brokenLinks(data)
        if (validate && stats){
            console.log(success("Total:" ) +  total + "\n" + warning("Unique: ") + unique + "\n" + error("Broken: " )+ broken)
        } else if (stats) {
            console.log(success("Total: ") +total + "\n" + warning("Unique: ") + unique)
        } else if(!validate){
            data.forEach(obj => {console.log(`${obj.file} ${obj.href.slice(0,50)} ${obj.text}`)})
        }else if(validate){
            data.forEach(obj => {console.log(`${obj.file} ${obj.href.slice(0,50)} ${obj.ok} ${obj.status} ${obj.text}`)})
        }
        else {
            console.log(warning('Please choose a valid option: --validate, --stats or both'));
        }
    }).catch(error =>{
        console.log(warning(error))
    })
    };
    
    main(argv);
    
module.exports = main;