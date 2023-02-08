# Cookiecutter SAM for Apollo Server Typescript

This is a [Cookiecutter](https://github.com/audreyr/cookiecutter) template to create a Serverless App based on Serverless Application Model (SAM) with Node.js@18 and Typescript.

It is important to note that you should not try to `git clone` this project but use `SAM` CLI instead as ``{{cookiecutter.project_slug}}`` will be rendered based on your input and therefore all variables and files will be rendered properly.

## Usage

Generate a new SAM based Serverless App: `sam init --location gh:michael-watson/aws-sam-apollo-server-ts`

You'll be prompted a few questions to help this cookiecutter template to scaffold this project and after its completed you should see a new folder at your current path with the name of the project you gave as input.

# Credits

* This project has been generated with [Cookiecutter](https://github.com/audreyr/cookiecutter)
* [Apollo's Typescript Apollo Server Boilerplate Project ](https://github.com/apollographql/subgraph-template-typescript-apollo-server-boilerplate)

License
-------

This project is licensed under the terms of the [MIT License with no attribution](/LICENSE)