# bh-lib

The Black Hammer Library (bh-lib) is a fully standalone UI component library, written 
in Clojurescript. It makes it easy to use in your own projects, giving you variety 
of all different kinds of components. 

Additionally, the repo provides a standalone Demonstration of all the UI components 
available. This provides 2 benefits:

1. If you want to use Bh-Lib in your own projects, you can use the Demo to see all the components avaialble
2. You can use the Demo as a hosting application for developing completely _new_ components.

## Atomic Design

*Introduce Atomic Design and point to the page in the Demo/Catalog for further 
information*

## For Developers

### Downloading the Code

To view the existing components or to develop new ones, simply clone the repo

    git clone --recursive https://github.com/Sagura091/bh-lib.git

and load the project in the Clojure IDE of your choice. 

### Using the Demo

The Demo uses [shadow-cljs](https://shadow-cljs.github.io/docs/UsersGuide.html) as 
it's build and execution tool. Using a Terminal window, run:

    ./run-with-webpack.sh

This will download all the dependencies, compile the demo code, and start the
demo running. Next, open your browser and navigate to:

    http://localhost:8888

In a few seconds, you should see the Welcome Page.

![welcome-screen.png](docs%2Fimages%2Fwelcome-screen.png)

Have fun exploring the various pages and examples!


#### Developing bh-lib

If you want to add new components to the library, follow the steps for getting the
repo as shown above, start the Demo, and open your IDE.

Bh-lib uses the typical Clojurescript/Shadow-cljs workflow, with [hot-reloading](https://shadow-cljs.github.io/docs/UsersGuide.html#devtools)
and [repl-driven development]()


### [API Documentation](docs/api/index.html)


## Using *bh-lib* in your own projects

It is easy to include bh-lib in your project, either with the Clojure CLI using 
`deps.edn` or Leiningen using `project.clj`. The `deps.edn` approach can work with 
both numbered releases or git-sha commits, but `project.clj` is limited to using
only number releases.

### Updating your deps.edn

Visit `https://github.com/Sagura091/bh-lib` and checkout the latest tags. If one 
of these meets your needs, then add the following to your `deps.edn` file:

```
{:deps [bh-lib/bh-lib {:git     "https://github.com/Sagura091/bh-lib"
                       :git/tag [the-tag-from-guthub-as-a-string]
```

If you prefer to use the most recent commit (or any other commit, really), add:

```
{:deps [bh-lib/bh-lib {:git     "https://github.com/Sagura091/bh-lib"
                       :git/sha [the-sha-from-guthub-as-a-string]
```

> NOTE: you can find the most recent commit at the terminal using 
> `git rev-parse HEAD` 
                                               
Refresh you IDE if needed to enable the change, and restart any external builds
you use when developing to be sure your executable environment is including the new
dependency.

### Updating your project.clj

> *Is this really possible?*


Visit `https://github.com/Sagura091/bh-lib` and checkout the latest tags. If one
of these meets your needs, then add the following to your `project.clj` file:

```
```


### Example using a bh-lib UI component

_Put some small example of the code needed to add a button form the library._

## Additional Tooling

### Splint

We're trying [splint](https://github.com/NoahTheDuke/splint) as a post-processing 
linter for possible use in a [CI/CD](https://resources.github.com/ci-cd/) chain.

From the project's root directory run: 

    clojure -M:splint [path]

For example, to lint just the UI component library, run:

    clojure -M:splint src/bh_ui

To lint everything, library and demo:

    clojure -M:splint .


## Automation Tests

### Setting up Chromedriver (WSL Users)
1.	Download latest version of chromedriver from:  https://chromedriver.chromium.org/downloads
2.	Copy this to linux WSL
3.	Run these commands:
      a.	unzip chromedriver_linux64.zip
      b.	chmod +x chromedriver
      c.	sudo mv -f chromedriver /usr/local/share/chromedriver
      d.	sudo ln -s /usr/local/share/chromedriver /usr/local/bin/chromedriver
      e.	sudo ln -s /usr/local/share/chromedriver /usr/bin/chromedriver

### Setting up Chrome (WSL Users)
1.	sudo apt update && sudo apt -y upgrade && sudo apt -y autoremove
2.	wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
3.	sudo apt -y install ./google-chrome-stable_current_amd64.deb
4.	verify google-chrome is installed by running: google-chrome –version
      Running Tests

### Running Tests

1.	Start the localhost website using the command: shadow-cljs watch test
2.	Simply press the green arrow next to a deftest to run the test, click the green arrow next to namespace to run all tests in the namespace

### Containerizing BH-Lib for Deployment

All commands are executed in the project root unless otherwise specified

1.  `npx shadow-cljs release app`
2.  `npx webpack -c webpack-prod-config.js`
3.  `docker build --no-cache -t bh-lib .`
4.  `docker run -d -p 8043:8043 --name bh-static bh-lib`

Now you should be able to access `localhost:8043` and see BH-Lib hosted from a docker container

