# Portfolio Template

This is a Jekyll website template designed for Prep Fellows.

## Project Setup

Follow the steps below to setup the portfolio on your local machine according to the operating system you are using.

### Windows

- `Step 1`: Install Ruby

_You can skip this step if you have Ruby installed on your system. Make sure it is the latest stable version._

Open the link below to install Ruby on your system.

https://rubyinstaller.org/

- `Step 2`: Install the Bundler

_You can skip this if you have the bundler installed on your system. Make sure it is the latest stable version._

Run the following command on Powershell.

```bash
gem install bundler
```

- `Step 3`: Install the dependencies

```bash
bundle install --path vendor/bundle
```

_Note_: The **Gemfile.lock** may cause issues with the installation of dependencies. If you face this issue, try deleting the **Gemfile.lock** file and repeat the command above.

- `Step 4`: Start the server

```bash
bundle exec jekyll serve
```

### MacOS

**Pre-requisites**:

- [rvm](https://rvm.io/rvm/install)

_Note:_ MacOs comes with pre-installed ruby **NEVER** use the pre-installed **ruby** for the project work, [here's why](https://www.moncefbelyamani.com/why-you-shouldn-t-use-the-system-ruby-to-install-gems-on-a-mac/).

Follow the steps below to install a separate ruby and setup the entire project **locally**.

- `Step 1`: Installing ruby using rvm

```bash
rvm install ruby
```

- `Step 2`: Make the ruby installed using rvm the **default** ruby

```bash
rvm --default use ruby
```

- `Step 3`: Install [bundler](https://bundler.io/)

```bash
gem install bundler
```

- `Step 4:`: Install dependencies

```bash
bundle install
```

_Note_: Make sure you don't have a whitespace in the current directory path, or it might lead to [this error](https://github.com/ixkaito/frasco/issues/30)

- `Step 5`: Start the server

```bash
bundle exec jekyll serve
```

### Linux

- `Step 1`: Install Ruby

_You can skip this step if you have Ruby installed on your system. Make sure it is the latest stable version._

Run the following commands on the terminal.

```bash
sudo apt-get update
sudo apt-get install ruby ruby-dev
```

- `Step 2`: Install the Bundler

_You can skip this if you have the bundler installed on your system. Make sure it is the latest stable version._

Run the following command on Powershell.

```bash
sudo gem install bundler
```

- `Step 3`: Install the dependencies

```bash
bundle install --path vendor/bundle
```

- `Step 4`: Start the server

```bash
bundle exec jekyll serve
```

## Make your own!

1. Use the Template button.
2. Update `_config.yml` to contain your information.
   1. Change `url` to the URL you'll be hosting it at
   2. Make sure it has the /
3. Use something like Netlify or GitHub Pages to deploy (note, this only works on username.github.io, not username.github.io/repo-name)

## Add your portfolio

Head to `_data` and fill out either `projects.yml`, `experience.yml` and `education.yml`.

Project example.

```yaml
- title: Online Shopping Application
  event: MLH Prep - Batch 4.5
  date: Fall 2021
```

Experience example.

```yaml
- role: MLH Prep Fellow
  company: MLH Fellowship
  dates: Summer 2021
  logo: fellowship.svg
```

Education example.

```yaml
- course: Prep Fellow
  institute: MLH Fellowship
  dates: Fall 2021
  logo: fellowship.svg
```

## Add project posts

1. Make a new `.md` file inside of `projects`.
2. Add the header to your markdown file (see below) and change the title to the name of your blog post.
3. Write your project page! Can be a README from GitHub or your Devpost page.
4. Add the `page-name` field to your `projects.yml` (see below).

Top of post markdown file post.

```
---
title: Project
layout: page
---
```

`projects.yml` with the `page-name` field.

```yaml
- title: Online Shopping Application
  event: MLH Prep - Batch 4.5
  date: Summer 2021
  page-name: project
```

## Development

If you want to test it locally or add some new features, run the below commands. Make sure to have Ruby and Bundler installed.

```
bundle install --path vendor/bundle
bundle exec jekyll serve
```
