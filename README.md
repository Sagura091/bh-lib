# bh-lib

Black-Hammer library (bh-lib) is a fully standalone cljs, GUI, widget provider. This bh-lib is easy to connect to outside projects to give you a vast variety of different kinds of cljs widgets and GUIs. In the lib there is a directory called Demo. This is used as a standalone demonstration of all the widgets and GUI's the bh-lib has to offer. So if a developer wants to add a new widget, feature, GUI, they do not have to make an outside project to test it you can run the Demo to explore the available features.

# For Developers

clone the repo. 
`git clone --recursive https://github.com/Sagura091/bh-lib.git`

once you load a project in your supported Clojure IDE of your choice, there will be 2 directories presented to you. 

# bh-ui
bh-ui is the lib itself and all the GUI's, Widgets all ready written and ready for use. If you are developing, a new widget, be sure to make a directory in the correct corresponding area for that type of widget. This will prevent name space issues later on when you are trying to test. 

#demo

demo is a standalone client-side server that displays the variety of widgets and tools that are currently in the bh-lib. 


# How to Launch Demo

In a command prompt or terminal, type `./run-with-webpack.sh` this will npm install all the dependencies that bh-lib uses to run, as well as build and bundle the client-side webpage.  Once finshed, you can access the page at localhost:8888.  Once you've ran the webpack script one time, to make follow-up runs faster, you can just run `shadow-cljs watch app`.  This builds the app and runs the hot loader, allowing real-time updates to the application as you change code.


# Commit and push Tag

Once you are done with what you want to do with the bh-lib there are specific things you need to do to push into the bh-lib git repo. 

In a cmd prompt/terminal from the root bh-lib directory: 

1) in the top directory of bh-lib type "git status" you should see all your changes. 
2) generally you don't want to do add everything but in this case you can since most of the files are already in the .gitignore. so next type, " git add ." this will add everything into a commit-able state. press enter
3) now time to commit. type "commit -m "place your description of what you did here." then press enter
4) if its time to tag type "git tag vX.x.x". press enter.
5) type "git pull" this will grab anything that was push recently so you are not behind master.
6) for Tag push type " git push origin --tag vX.x.x" then press enter. Non-tag type "git push origin"
7) type "git push" to make sure master is with origin.


# For devs linking the lib to their project

To link the bh-lib to your project, get the latest sha and paste it into your deps.edn or project.clj files, following the format for including a git repo by sha. In a terminal, type "git rev-parse HEAD" this will get the most recent commit sha number.

If using deps.edn, the format looks like: 
 
Bhlib/Bh-Lib                                  {:Git/Url "Https://Github.Com/Sagura091/Bh-Lib"
                                               :Sha     "Add The Sha You Just Copied"} 
                                               
 



# Clojure Linter

How to run Splint

From root directory:  clojure -M:splint [path]

Ex:  clojure -M:splint src/bh_ui




