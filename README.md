# bh-lib

Black-Hammer library (bh-lib) is a fully standalone cljs, GUI, widget provider. This bh-lib is easy to connect to outside projects to give you a vast verity of all different kinds of cljs widgets and GUIs. In the lib there is a directory called Demo. this is used as a standalone demonstration of all the widgets and GUI's the bh-lib has to offer. So if a developer wants to add a new widget, feature, GUI, they do not have to make an outside project to test it you can run the Demo to show your new lib feature.

# for Developers

clone the repo. 
git clone --recursive https://github.com/Sagura091/bh-lib.git

once you load a project in your supported Clojure IDE of your choice, there will be 2 directories presented to you. 

# bh-ui
bh-ui is the lib itself and all the GUI's, Widgets all ready written and ready for use. if you are developing, a new widget, or GUI make sure you make a directory in the specific area you are making. this will prevent name space issues later on when you are trying to test. 

#demo

demo is a standalone host/sever the displays all the intractable features, GUI, and widgets that are currently in the bh-lib. 


#How to Launch Demo

In a command prompt or terminal, type "./run-with-webpack.sh" this will npm install all the dependencies, that bh-lib uses to run and render all its GUI's. it will as well compile all of demo, then its compiled results will be outputted to localhost:8888. if you have already have ran the "run-with-webpack script, you can just type "sudo shadow-cljs watch app". this means you now have whats called a hot loader. where you can make changes in the Demo and then it will refresh the page with out you having compile and build again. 


# Commit and push Tag

Once you  are done with what you want to do with the bh-lib there are specific things you need to do to push into the bh-lib git repo. 

these are the steps:
# using a command prompt/terminal, 

1) in the top directory of bh-lib type "git status" you should see all your changes. 
2) generally you don't want to do add everything but in this case you can since most of the files are already in the .gitignore. so next type, " git add ." this will add everything into a commit-able state. press enter
3) now time to commit. type "commit -m "place your description of what you did here." then press enter
4) if its time to tag type "git tag vX.x.x". press enter.
5) type "git pull" this will grab anything that was push recently so you are not behind master.
6) for Tag push type " git push origin --tag vX.x.x" then press enter. Non-tag type "git push origin"
7) type "git push" to make sure master is with origin.


# For devs linking the lib to there project

To link the bh-lib to your project you need to get it's sha and past it into your deps.edn or project.clj files. In a terminal, type "git git rev-parse HEAD" this will get the most recent commit sha number. you need to copy that number. in your deps.edn file in :deps add this 
 
Bhlib/Bh-Lib                                  {:Git/Url "Https://Github.Com/Sagura091/Bh-Lib"
                                               :Sha     "Add The Sha You Just Copied"} 
                                               
after that you just need to reload your preferred IDE and the deps.edn file will configure itself and find the lib for you to start developing. 






# Clojure Linter

How to run Splint

From root directory:  clojure -M:splint [path]

Ex:  clojure -M:splint src/bh_ui




