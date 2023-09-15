const { Command } = require('commander');
const { name, version } = require('./package.json');
const { Umbrella } = require('./src/index');
const program = new Command();

program
  .name(name)
  .description('Rén keyword cangjie keyboard translator')
  .version(version);

program.command('parse')
  .description('Parse a string into cangjie keyboard input letters')
  .argument('<string>', 'string to parse')
  .option('-d, --debug', 'debug')
  .action((s, { debug }) => {
    const p = new Umbrella(s, debug);

    console.log(p.result);
  });


program.parse();