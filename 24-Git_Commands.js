/* 

1. git init 

run git init inside the root folder of your project
Intializes a new git repository in the current directory or a specified directory
This command tells git to start tracking changes in your project folder

C:/Users/Predator/Desktop/Node/.git/
.git is a hidden folder created by Git when you initialize a repository using git init.
It contains all the necessary files and metadata that Git uses to track changes, maintain version history, and manage your repository.

git init creates a local repository

What Is a Local Repository?
A local repository is a version control setup that exists only on your local machine. 
It allows you to track changes, commit updates, and manage your project's history locally,  without any connection to a remote server or hosting platform like GitHub, GitLab, or Bitbucket.

2. git status

shows you all the untracked files
show files or folder with any changes made
also shows a clean working tree if no changes are present

3. git add .

stages the changes for commit. 
This includes any new , modified and deleted files
It add all these changes to the staging area,making them ready for next commit
. means all the files in the current directory. . can also be replaced with specific file name

What Does "Staged" Mean in Git?
In Git, staging is the process of preparing changes (modified files) to be included in the next commit. 
Staged files are added to the staging area, which is like a temporary holding space where Git keeps track of changes you want to commit.

4. git commit -m "made changes"

This saves our code to local repository and commit all the new changes

5. git push origin master

sends your local commits to remote repository

6. git pull

If you're collaborating with others, you can fetch their changes and merge them into your local code using git pull

7. git fetch

tell us about any changes in the remote repo. it doesn't change the original content of the file it just notifies us


*/