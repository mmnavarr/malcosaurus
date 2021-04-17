---
id: git_cheatsheet
title: Git Cheatsheet
---

This cheatsheet includes `git` commands and other useful shortcuts & flags that can be used to perform day to day actions.

### Creating New Branch
Create a new branch
```
$ git branch <branch-name>
```

Create a new branch and checkout the new branch
```
$ git checkout -b <branch-name>
```

Create a new branch off a specific commit and checkout the new branch
```
$ git checkout -b <branch-name> <sha1-of-commit>
```
If you're on a modern version of Git you should be able to use the short SHA1

### Add Existing Project To Repository
Initialize the local directory as a Git repository.
```
$ git init
```

Add the files in your new local repository. This stages them for the first commit.
```
$ git add .
or
$ git add --all
```

Commit the files that you've staged in your local repository.
```
$ git commit -m 'First commit'
```

Copy remote repository URL field from your GitHub repository and add the URL for the remote repository where your local repostory will be pushed.
```
$ git remote add origin <remote repository URL>
```

Sets the new remote:
```
$ git remote -v
```

Push the changes in your local repository to GitHub.
```
$ git push origin master
```


### Reverting Commits
`$ git reset —-(soft|hard) HEAD~{NUM_COMMITS_BACK}`

E.g.
```
$ git reset --hard HEAD~1
$ git reset --soft HEAD~3
```

HEAD~1 is a shorthand for the commit before head. Alternatively you can refer to the SHA-1 of the hash you want to reset to. Note that when using --hard any changes to tracked files in the working tree since the commit before head are lost.

If you don't want to wipe out the work you have done, you can use `--soft` option that will delete the commit but it will leave all your changed files "Changes to be committed", as git status would put it.

### See Branch Tree/Parent
To see the direct parent to the current working branch
```
$ git log --first-parent
```

To see the branch tree for the current working branch with abbreviated commits, time and user
```
$ git log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
```

### Deleting Branch
To delete the branch locally
```
$ git branch  -d <local_branch_name>
```

To delete the branch remotely
```
$ git push origin --delete <remote_branch_name>
```


### Configuration
##### Checking Your Settings
If you want to check your configuration settings, you can use the git config --list command to list all the settings Git can find at that point:
```
$ git config --list
```

##### Identity
Setting global git config name & email
```
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

##### 2FA Issues
After enabling Two Factor Authentication (2FA), you may see something like this when attempting to use `git clone`, `git fetch`, `git pull` or `git push`:
```
$ git push origin master
Username for 'https://github.com': <username>
Password for 'https://your_user_name@github.com': <password>
remote: Invalid username or password.
fatal: Authentication failed for 'https://github.com/<username>/repo_name.git/
```

From the [GitHub Help documentation](https://help.github.com/articles/providing-your-2fa-authentication-code/#when-youll-be-asked-for-a-personal-access-token-as-a-password):
> After 2FA is enabled you will need to enter a personal access token instead of a 2FA code and your GitHub password.

##### How To Fix
1. Generate a [Personal Access Token](https://github.com/settings/tokens). (Detailed guide on [Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/).)
2. Copy the Personal Access Token.
3. Re-attempt the command you were trying and use `Personal Access Token` in the place of your password.


