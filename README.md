# Secure Password Generator

*Web application developed using Angular*

**Website** - [Secure Password Generator](https://secure-password-generator.cfts-mkb.com)

## Table of Contents

- [About](https://github.com/cfts-mkb/secure-password-generator#about)
- [Technologies Used](https://github.com/cfts-mkb/secure-password-generator#technologies-used)
- [Tools Used](https://github.com/cfts-mkb/secure-password-generator#tools-used)

## About

Secure Password Generator is a static web application developed used Angular and hosted on Azure platform. It allows users to generate a secure password for managing their emails and accounts. No registration is required to access the site. The users will have to enter the below details before they can generate the password:

- Total length of the password to be generated.
- Select checkbox to confirm if the password to be generated should contain numbers (0 to 9).
- Select checkbox to confirm if the password to be generated should contain special characters.

The process has some constraints which must be abided to generate a password successfully. These constraints are listed below:

- Expected Password length should be more than 6.
- Password to be generated will contain upper case and lower case characters by default and this cannot be customized.
- Password to be generated must contain either numbers (0 to 9) or special characters or both.

If the constraints are violated, an error will be displayed on screen and password will not be generated until these violations are corrected. Upon successful validation of options exercised by the user, a random password will be generated and displayed on a pop-up window.

## Technologies Used

- Angular
- Typescript
- Cascaded Stylesheets (CSS)
- Hypertext Markup Language (HTML)

## Tools Used

- Angular CLI
- Node Package Manager (NPM)
- Visual Studio Code
- Git
