#!/usr/bin/env node

import { execSync } from 'child_process';
import fsExtra from 'fs-extra';
const { copySync, existsSync } = fsExtra;
import path from 'path';
import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Properly resolve __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TEMPLATE_DIR = path.join(__dirname, '..', 'template');

const run = async () => {
    console.log(chalk.green.bold("\n🚀 Create Fullstack App\n"));

    const { folderName } = await inquirer.prompt([
        {
            name: 'folderName',
            type: 'input',
            message: 'Enter your project folder name:',
            default: 'myapp',
        },
    ]);

    const targetPath = path.resolve(process.cwd(), folderName);

    if (existsSync(targetPath)) {
        console.log(chalk.red(`❌ Folder "${folderName}" already exists.`));
        process.exit(1);
    }

    console.log(chalk.yellow('📁 Copying project files...'));
    copySync(TEMPLATE_DIR, targetPath);

    console.log(chalk.yellow('📦 Installing dependencies (client & server)...'));
    try {
        execSync('npm install', { cwd: path.join(targetPath, 'client'), stdio: 'inherit' });
        execSync('npm install', { cwd: path.join(targetPath, 'server'), stdio: 'inherit' });
    } catch (err) {
        console.log(chalk.red('❌ Failed to install dependencies.'));
        process.exit(1);
    }

    console.log(chalk.green.bold('\n✅ Project created successfully!'));
    console.log(`\nNext steps:`);
    console.log(chalk.cyan(`  cd ${folderName}`));
    console.log(chalk.cyan(`  cd client && npm run dev`));
    console.log(chalk.cyan(`  cd ../server && npm start`));
    console.log('\nHappy coding! 🎉');
};

run();
