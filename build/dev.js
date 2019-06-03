const projectName = process.argv[2]
const fs = require('fs')
fs.writeFile('./config/project.js', `exports.name = '${projectName}'`,function(err){
  if(err){
    throw err
  }
  let exec = require('child_process').execSync;
  exec('npm run dev', {stdio: 'inherit'});
})