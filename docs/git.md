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
