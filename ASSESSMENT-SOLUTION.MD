# QA Engineer Assessment Solution

## Introduction

Use this file to document your solution and findings.

before start:
protractor.conf.js changed specs path: ./e2e/features/**/*.feature'
installed protractor-cucumber-framework
protractor.conf.js added frameworkPath
created test-reports folder + file

Name: Bram Bimmerman

## Remarks
this following flow is not working
*	When you search for either a character or a planet and you get one or more results for it, clear the “Search form” and hit the Search button again, you should then get an empty result list (previous search results are removed).
no argument results in an invalid form, a popup which says please enter argument instead of returning an empty result is a nicer solution imo

too many And in feature, i should add another given / split feature files

...
